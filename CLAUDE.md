# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static, no-build, no-framework Spanish learning app ("Spanish A1 Systematic Interactive Canvas") — a single-page tool with lessons, pronunciation (IPA), grammar, listening, flashcards, and exercises, taught through English explanations with Vietnamese translations. Everything is client-side; there is no backend, package.json, or build step.

## Files

- `index.html` — all markup, CSS, and UI/interaction logic (tabs, rendering, quiz checking, flashcards, TTS playback, localStorage persistence). This is the only place app *behavior* lives.
- `lessons.js` — all lesson content and data. Loaded via `<script src="lessons.js">` before the second inline `<script>` block in `index.html`, so its top-level `const`/`function` declarations (`lessonInfo`, `baseItems`, `lessonCatalog`, `getLessonData`, ...) are consumed directly as globals by `index.html`'s script.

This mirrors the sibling project `../01-English` (repo `english-learning-study`) — same file split and lesson-registration pattern, adapted for Spanish-specific content (IPA, gender agreement, conjugation).

## Running / previewing

There is no build or install step. Open `index.html` directly in a browser, or serve the folder with any static file server (e.g. `python3 -m http.server`) if you need `location.protocol` to read as `http`/`https` (this affects the TTS fallback — see below). There is no test suite, linter, or CI configured.

Deployment target is the GitHub repo `tranvanvu241103-cmd/spanish-learning-study` on branch `main`. Vercel is **not yet linked** for this project (no `.vercel/` directory) — set that up before expecting automatic deploys on push.

## Content architecture (lessons.js)

- `lessonInfo` (lessons.js:1) — keyed by lesson id (`"Lesson 1"` ... `"Lesson 10"`), each entry has `title, level, vocabulary, grammar, listening, goal, core` (`core` is the 4 "core sentences" shown on the Lesson tab — this field has no equivalent in the English project).
- `baseItems` (lessons.js:116) — a single flat array of every vocabulary item across all lessons, filtered by `lesson` id per lesson (same pattern the English project uses for Lessons 1-3). Each item: `{lesson, topic, spanish, english, vi, example, exampleEn, approx, explain, visual}`. Note the field names differ from the English project: the target word is `spanish` (not `english`), and the example translation is `exampleEn` (English), not `exampleVi`.
- `grammarBank`, `listeningBank`, `quizBank`, `grammarNotesBank` (lessons.js:244-949) — keyed by lesson id, same shape/purpose as the English project's banks.
- `visualMap`, `ipaMap`, `pronunciationNotes` (lessons.js:718-964) — Spanish-only lookup dictionaries keyed by the lowercased `spanish` word, used as fallbacks when an item has no own `visual`/`ipa` field. These have no equivalent in the English project.
- `createLesson(id, vocabulary)` (lessons.js:965) combines the above into one lesson object; `lessonCatalog` (lessons.js:977) builds all 10 lessons automatically via `Object.keys(lessonInfo).map(...)` — **adding a new lesson only requires adding entries to the banks above; nothing needs to be added to `lessonCatalog` by hand.**
- Accessors `getLessonData`, `getLessonInfo`, `getLessonListening`, `allItems()` are the intended way to read lesson data — `index.html` calls these rather than reaching into the banks directly. `validateLessonCatalog()` (lessons.js:986) warns in the console if any lesson is missing a section (vocab/grammar/listening/quiz); it runs automatically on page load.

**When adding a new lesson**: add an entry to `lessonInfo`, push new items to `baseItems` (with the correct `lesson` id), then add `grammarBank["Lesson N"]`, `listeningBank["Lesson N"]`, `quizBank["Lesson N"]`, `grammarNotesBank["Lesson N"]`. Open the page and check devtools console for `validateLessonCatalog()` warnings to confirm nothing is missing.

## UI architecture (index.html)

- Single-page, tab-based: `showTab(id, btn)` (index.html:621) toggles `.section.active`/`.tab.active` and calls `refreshSection(id)` (index.html:639) to re-render that section's content on demand. Tabs: Guide, Lessons, Pronunciation, Vocabulary, Grammar, Listening, Flashcards, Exercises, Reuse — **no Word Match or Sentence Builder tabs** (those exist only in the English project).
- `subjectUseMap` (index.html:452) and its rendering helper `conjugationHtml`/`subjectUseHtml` are kept in `index.html`, not `lessons.js`, even though they are lesson-content-like data. This is deliberate: `subjectUseMap`'s entries call `conjugationHtml(...)` at definition time, so it must load *after* that function is defined; moving it into `lessons.js` (which loads first) would throw a `ReferenceError`.
- `lessonItems()` (index.html:719) filters `allItems()` down to the selected lesson and also calls `isDuplicateFromEarlierLesson()` (index.html:723) — a Spanish-only dedup mechanic that hides a word from a later lesson's list if the same Spanish word already appeared in an earlier lesson.
- State is a flat set of `let` globals: current lesson/flashcard state declared in the first inline `<script>` block (before `lessons.js` loads), then `customItems`/`notes`/`flashIndex`/`flipped` declared in the second inline `<script>` block (after `lessons.js` loads, since `allItems()` in `lessons.js` closes over `customItems` by reference and is only ever *called* later, load order between the two doesn't matter here — but don't rely on that elsewhere without checking).
- Persistence is plain `localStorage`: custom vocab (`spanish_custom_items_v2`), notes (`spanish_notes_v2`), selected lesson (`spanish_selected_lesson_v3`), progress checklist (`spanish_progress_v2`). `exportData()`/`importData()` round-trip `{customItems, notes}` as JSON.
- Text-to-speech (`speak`, index.html:607) uses `SpeechSynthesisUtterance` with `lang="es-ES"`, falling back to `speakOnline()` (index.html:589), which hits `/api/tts?text=...` when served over http(s) or Google Translate's TTS endpoint otherwise — same pattern as the English project, and same caveat: there is no `/api/tts` implementation in this repo.

## Practical notes

- No dependency manifest, no `npm` commands — don't assume Node tooling exists here.
- The repo lives on a OneDrive-synced path when accessed from Windows/WSL (`/mnt/c/Users/vu/OneDrive/Documents/LANGUAGE_STUDY/02-Spanish`); expect occasional CRLF/LF noise in diffs that isn't a real content change.
- Git identity for this repo is set locally (not global) — same identity as `../01-English`.
- Since there's no test suite, verify JS changes by checking syntax (`node --check`) and, ideally, a DOM-mocked dry run of the inline scripts + `lessons.js` before committing — there is no automated CI to catch runtime errors.
