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

## SRS / gamification / Review tab (index.html)

A cross-lesson "🔥 Ôn tập" (Review) tab was added on top of the original per-lesson Exercises tab. It implements a simple spaced-repetition system (SRS), independent of and non-destructive to the original Exercises quiz.

- **SRS engine**: `SRS_STAGES` (index.html) is a fixed interval ladder in days `[0,1,3,7,14,30,90,180]`. Each vocab item gets a state `{stage, due, reps, lapses, introduced}` stored in `srsData`, keyed by `itemKey(x)` = `` `${x.lesson}::${x.spanish}` ``. Correct answer advances `stage` by 1 (interval grows); wrong answer resets `stage` to 0 (interval shrinks back to "review today").
- **Daily new-item cap**: `NEW_ITEMS_PER_DAY` (10) limits how many never-seen items get `introduced:true` per calendar day, tracked in `srsMeta` (`lastNewDate`, `newIntroducedToday`), so vocabulary is onboarded gradually rather than all 200+ items becoming "due" at once.
- **Review queue** (`buildReviewQueue`): due items (introduced + `due <= now`) plus that day's freshly-introduced new items, shuffled together — this is the "interleaving" mechanic (mixes lessons and question types in one session), not a per-lesson drill.
- **Question types** (`pickQuestionType`): es→en typed translation, en→es typed translation, or cloze (blank out the target word inside its `example` sentence via `buildClozeSentence`) — this is the "active recall in context" mechanic. Answer checking uses `normalize()` same as the existing Exercises tab.
- **Adaptive re-drill within a session**: a wrong answer re-inserts the item ~3 questions later in the *same* session queue, capped at `MAX_REQUEUES_PER_ITEM` (2) per item via `reviewRequeueCounts` — without this cap a word the learner keeps missing would requeue forever and the session would never end (found and fixed during testing).
- **Gamification**: `streakData` (daily streak, `spanish_streak_v1`) and `xpTotal` (`spanish_xp_v1`, +10 correct / +2 wrong, level = `xp/100`) are updated on every review answer via `recordReview` → `bumpStreak`/`awardXp`, and rendered in the always-visible `#statsBar` above the tabs (`renderStatsBar`, called on load and after every review action).
- **Mnemonics** (`spanish_mnemonics_v1`, keyed the same as SRS state): a free-text box the learner fills in themselves (Flashcards tab and Review tab both render it via `renderMnemonicBox(x, containerId)`) — there is no pre-written mnemonic content; the built-in `explain` field is shown alongside as a scaffold/example, not a substitute.
- **Strength meter**: `strengthMeterHtml(x)` renders a small colored bar (`srsStrengthPercent`/`srsStrengthColor`) from `stage / (SRS_STAGES.length-1)`; shown in Vocabulary rows, Flashcards, and the Review card.
- **Animation**: `setMascotState(state)` swaps the `#mascotMouth` SVG path `d` attribute and a CSS class (`idle`/`happy`/`sad`/`celebrate`) on `#mascotSvg` for a small reactive SVG character (no external assets). `burstConfetti()` is a self-contained `<canvas>` particle burst (no library), triggered on level-up, streak milestones (7/30/100 days), and session completion. Flashcard flip and correct/wrong feedback use short CSS keyframe animations (`cardFlip`, `popIn`, `shakeWrong`) rather than a true two-sided 3D flip.
- **Scope boundary**: the original per-lesson `quiz`/Exercises tab is untouched and does **not** feed into SRS — only the Review tab reads/writes `srsData`. Keep this separation in mind if asked to "fix" why Exercises scores don't affect Review scheduling; that's by design.

## Visual/motion polish pass (index.html)

After the SRS build shipped, the user reported the app still felt "boring/no animation/no illustrations" — turned out to be partly a stale browser cache (hard refresh needed) and partly a real gap: the base visual language (plain Arial, flat white cards, no feedback on interaction) hadn't changed. A second pass addressed the design itself, app-wide, not just the Review tab:

- **Fonts**: Google Fonts `Baloo 2` (headings/buttons/tabs) + `Nunito` (body) loaded via `<link>` in `<head>`, with a system-font fallback stack so the app still looks fine offline — this is the only external network dependency added beyond the pre-existing TTS fallback.
- **Motion everywhere**: `.section.active`, `.card`, `.word-row`, and `.flashcard` all get a shared `sectionIn` fade+rise-in keyframe animation (replays automatically each render since new DOM/class changes retrigger CSS animations — no JS needed). Buttons and tabs get hover-lift + press-down (`:active`) feedback via pure CSS.
- **Header**: decorative inline SVG background circles + a small static mascot (independent markup from the Review tab's `#mascotSvg`/`#mascotEyeL` etc. — same visual design, different id, no shared state) sit in the header via `.header-deco`/`.header-inner`.
- **Celebration everywhere**: `checkGrammar`, `checkListening`, and `showQuizResult` now call `burstConfetti()` (defined in the SRS section) and apply the `feedback-correct`/`feedback-wrong` classes to their result box on a perfect score — previously confetti only fired from the Review tab, which made the rest of the app feel flat by comparison.

## UI architecture (index.html)

- Single-page, tab-based: `showTab(id, btn)` (index.html:621) toggles `.section.active`/`.tab.active` and calls `refreshSection(id)` (index.html:639) to re-render that section's content on demand. Tabs: Guide, Lessons, Pronunciation, Vocabulary, Grammar, Listening, Flashcards, Exercises, **Ôn tập (Review)**, Reuse — **no Word Match or Sentence Builder tabs** (those exist only in the English project). See "SRS / gamification / Review tab" above for the Review tab's engine.
- `subjectUseMap` (index.html:452) and its rendering helper `conjugationHtml`/`subjectUseHtml` are kept in `index.html`, not `lessons.js`, even though they are lesson-content-like data. This is deliberate: `subjectUseMap`'s entries call `conjugationHtml(...)` at definition time, so it must load *after* that function is defined; moving it into `lessons.js` (which loads first) would throw a `ReferenceError`.
- `lessonItems()` (index.html:719) filters `allItems()` down to the selected lesson and also calls `isDuplicateFromEarlierLesson()` (index.html:723) — a Spanish-only dedup mechanic that hides a word from a later lesson's list if the same Spanish word already appeared in an earlier lesson.
- State is a flat set of `let` globals: current lesson/flashcard state declared in the first inline `<script>` block (before `lessons.js` loads), then `customItems`/`notes`/`flashIndex`/`flipped` declared in the second inline `<script>` block (after `lessons.js` loads, since `allItems()` in `lessons.js` closes over `customItems` by reference and is only ever *called* later, load order between the two doesn't matter here — but don't rely on that elsewhere without checking).
- Persistence is plain `localStorage`: custom vocab (`spanish_custom_items_v2`), notes (`spanish_notes_v2`), selected lesson (`spanish_selected_lesson_v3`), progress checklist (`spanish_progress_v2`), plus SRS/gamification state (`spanish_srs_v1`, `spanish_srs_meta_v1`, `spanish_streak_v1`, `spanish_xp_v1`, `spanish_mnemonics_v1` — see "SRS / gamification / Review tab" above). `exportData()`/`importData()` round-trip `{customItems, notes, srsData, srsMeta, streakData, xpTotal, mnemonics}` as JSON, so Export/Import backs up SRS progress, streak, XP, and mnemonics too, not just custom vocab/notes.
- Text-to-speech (`speak`, index.html:607) uses `SpeechSynthesisUtterance` with `lang="es-ES"`, falling back to `speakOnline()` (index.html:589), which hits `/api/tts?text=...` when served over http(s) or Google Translate's TTS endpoint otherwise — same pattern as the English project, and same caveat: there is no `/api/tts` implementation in this repo.

## Practical notes

- No dependency manifest, no `npm` commands — don't assume Node tooling exists here.
- The repo lives on a OneDrive-synced path when accessed from Windows/WSL (`/mnt/c/Users/vu/OneDrive/Documents/LANGUAGE_STUDY/02-Spanish`); expect occasional CRLF/LF noise in diffs that isn't a real content change.
- Git identity for this repo is set locally (not global) — same identity as `../01-English`.
- Since there's no test suite, verify JS changes by checking syntax (`node --check`) and, ideally, a DOM-mocked dry run of the inline scripts + `lessons.js` before committing — there is no automated CI to catch runtime errors.
