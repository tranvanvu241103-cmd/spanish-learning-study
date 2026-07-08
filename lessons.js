const lessonInfo = {
  "Lesson 1": {
    title:"First Meeting — Greetings and Self-introduction",
    level:"A1",
    vocabulary:"greetings + names + feelings",
    grammar:"me llamo / ser / estar",
    listening:"meeting someone for the first time",
    goal:"After this lesson, you can greet someone, say your name, ask another person's name, say how you are, and end a short first conversation politely.",
    core:[
      {spanish:"Hola, me llamo Ana.", english:"Hello, my name is Ana."},
      {spanish:"Estoy bien, gracias.", english:"I am fine, thank you."},
      {spanish:"¿Cómo te llamas?", english:"What is your name?"},
      {spanish:"Mucho gusto. Adiós.", english:"Nice to meet you. Goodbye."}
    ]
  },
  "Lesson 2": {
    title:"At a Cafe — Ordering Drinks",
    level:"A1",
    vocabulary:"cafe drinks + ordering politely",
    grammar:"quiero / quisiera / para mí",
    listening:"ordering a drink at a cafe",
    goal:"After this lesson, you can order a drink, ask for water or coffee, use please and thank you, and understand a short cafe conversation.",
    core:[
      {spanish:"Quiero un café, por favor.", english:"I want a coffee, please."},
      {spanish:"Quisiera agua, por favor.", english:"I would like water, please."},
      {spanish:"Para mí, un té.", english:"For me, a tea."},
      {spanish:"La cuenta, por favor.", english:"The bill, please."}
    ]
  },
  "Lesson 3": {
    title:"Paying — Cash and Card",
    level:"A1",
    vocabulary:"payment methods + checkout phrases",
    grammar:"pagar con / en + payment method",
    listening:"paying at a cafe or shop",
    goal:"After this lesson, you can say you pay by cash or card, ask how much it costs, understand the total, and answer simple checkout questions.",
    core:[
      {spanish:"Pago en efectivo.", english:"I pay in cash."},
      {spanish:"Pago con tarjeta.", english:"I pay by card."},
      {spanish:"¿Cuánto cuesta?", english:"How much does it cost?"},
      {spanish:"El total es diez euros.", english:"The total is ten euros."}
    ]
  },
  "Lesson 4": {
    title:"Family — This Son, This Daughter",
    level:"A1",
    vocabulary:"family members + this/these basic references",
    grammar:"este / esta + masculine or feminine noun",
    listening:"introducing family members",
    goal:"After this lesson, you can name close family members, use este and esta correctly, and introduce a simple family member.",
    core:[
      {spanish:"Este hijo es estudiante.", english:"This son is a student."},
      {spanish:"Esta hija es estudiante.", english:"This daughter is a student."},
      {spanish:"Mi madre está bien.", english:"My mother is fine."},
      {spanish:"Mi familia está aquí.", english:"My family is here."}
    ]
  },
  "Lesson 5": {
    title:"Daily Routine — Morning and Study",
    level:"A1",
    vocabulary:"daily routine + time of day + study",
    grammar:"yo form regular verbs + basic routine phrases",
    listening:"a simple daily routine",
    goal:"After this lesson, you can describe a simple morning routine, say that you study or work, and talk about going to class.",
    core:[
      {spanish:"Me levanto por la mañana.", english:"I get up in the morning."},
      {spanish:"Desayuno en casa.", english:"I have breakfast at home."},
      {spanish:"Voy a clase.", english:"I go to class."},
      {spanish:"Estudio español todos los días.", english:"I study Spanish every day."}
    ]
  },
  "Lesson 6": {
    title:"Numbers — Counting from 0 to 20",
    level:"A1",
    vocabulary:"numbers 0–20 + age and quantity",
    grammar:"hay + number / tener + age",
    listening:"counting objects and saying age",
    goal:"After this lesson, you can count from zero to twenty, say your age, ask another person's age, and state a simple quantity.",
    core:[
      {spanish:"Uno, dos, tres, cuatro, cinco.", english:"One, two, three, four, five."},
      {spanish:"Tengo veinte años.", english:"I am twenty years old."},
      {spanish:"¿Cuántos años tienes?", english:"How old are you?"},
      {spanish:"Hay seis libros.", english:"There are six books."}
    ]
  },
  "Lesson 7": {
    title:"Days — Week Schedule",
    level:"A1",
    vocabulary:"days of the week + today and tomorrow",
    grammar:"hoy es / mañana es / el + day",
    listening:"talking about a simple weekly schedule",
    goal:"After this lesson, you can say the days of the week, ask what day it is, say today and tomorrow, and describe a simple weekly plan.",
    core:[
      {spanish:"Hoy es lunes.", english:"Today is Monday."},
      {spanish:"Mañana es martes.", english:"Tomorrow is Tuesday."},
      {spanish:"¿Qué día es hoy?", english:"What day is today?"},
      {spanish:"El viernes trabajo.", english:"On Friday I work."}
    ]
  },
  "Lesson 8": {
    title:"Telling Time — Daily Appointments",
    level:"A1",
    vocabulary:"clock time + appointments + parts of the day",
    grammar:"¿Qué hora es? / Es la... / Son las... / a las...",
    listening:"asking the time and arranging a simple appointment",
    goal:"After this lesson, you can ask the time, tell the hour and half hour, say when an activity happens, and understand a short conversation about an appointment.",
    core:[
      {spanish:"¿Qué hora es?", english:"What time is it?"},
      {spanish:"Es la una.", english:"It is one o'clock."},
      {spanish:"Son las tres y media.", english:"It is half past three."},
      {spanish:"La clase es a las ocho.", english:"The class is at eight."}
    ]
  }
};

const baseItems = [
  {lesson:"Lesson 1",topic:"Greeting",spanish:"hola",english:"hello",vi:"xin chào",example:"Hola, ¿cómo estás?",exampleEn:"Hello, how are you?",approx:"o-la",explain:"The letter h is silent in Spanish. Hola sounds like o-la."},
  {lesson:"Lesson 1",topic:"Greeting",spanish:"buenos días",english:"good morning",vi:"chào buổi sáng",example:"Buenos días, Ana.",exampleEn:"Good morning, Ana.",approx:"bwe-nos di-as",explain:"Use buenos días in the morning."},
  {lesson:"Lesson 1",topic:"Greeting",spanish:"buenas tardes",english:"good afternoon",vi:"chào buổi chiều",example:"Buenas tardes, Carlos.",exampleEn:"Good afternoon, Carlos.",approx:"bwe-nas tar-des",explain:"Use buenas tardes in the afternoon."},
  {lesson:"Lesson 1",topic:"Greeting",spanish:"gracias",english:"thank you",vi:"cảm ơn",example:"Muchas gracias.",exampleEn:"Thank you very much.",approx:"gra-sias",explain:"Gracias is the basic way to say thank you."},
  {lesson:"Lesson 1",topic:"Polite words",spanish:"por favor",english:"please",vi:"làm ơn",example:"Repite, por favor.",exampleEn:"Repeat, please.",approx:"por fa-bor",explain:"Por favor is used to sound polite."},
  {lesson:"Lesson 1",topic:"Polite words",spanish:"mucho gusto",english:"nice to meet you",vi:"rất vui được gặp bạn",example:"Mucho gusto, Ana.",exampleEn:"Nice to meet you, Ana.",approx:"mu-cho gus-to",explain:"Use mucho gusto after learning someone's name."},
  {lesson:"Lesson 1",topic:"Greeting",spanish:"adiós",english:"goodbye",vi:"tạm biệt",example:"Adiós, hasta luego.",exampleEn:"Goodbye, see you later.",approx:"a-dios",explain:"The accent mark in adiós shows stress on ó."},
  {lesson:"Lesson 1",topic:"Greeting",spanish:"hasta luego",english:"see you later",vi:"hẹn gặp lại",example:"Adiós, hasta luego.",exampleEn:"Goodbye, see you later.",approx:"as-ta lwe-go",explain:"Hasta luego is a common friendly goodbye."},
  {lesson:"Lesson 1",topic:"Greeting",spanish:"¿cómo estás?",english:"how are you?",vi:"bạn khỏe không?",example:"Hola, ¿cómo estás?",exampleEn:"Hello, how are you?",approx:"ko-mo es-tas",explain:"Use estar for feelings: ¿Cómo estás? = How are you?"},
  {lesson:"Lesson 1",topic:"Feelings",spanish:"bien",english:"fine / well",vi:"tốt / khỏe",example:"Estoy bien.",exampleEn:"I am fine.",approx:"bi-en",explain:"Bien is commonly used with estar: Estoy bien."},
  {lesson:"Lesson 1",topic:"Feelings",spanish:"muy bien",english:"very well",vi:"rất khỏe / rất tốt",example:"Estoy muy bien, gracias.",exampleEn:"I am very well, thank you.",approx:"muy bi-en",explain:"Muy means very."},
  {lesson:"Lesson 1",topic:"Introduction",spanish:"me llamo",english:"my name is",vi:"tôi tên là",example:"Me llamo Ana.",exampleEn:"My name is Ana.",approx:"me ya-mo",explain:"Literally, me llamo means I call myself."},
  {lesson:"Lesson 1",topic:"Introduction",spanish:"¿cómo te llamas?",english:"what is your name?",vi:"bạn tên là gì?",example:"Hola, ¿cómo te llamas?",exampleEn:"Hello, what is your name?",approx:"ko-mo te ya-mas",explain:"Use this question to ask someone's name."},
  {lesson:"Lesson 1",topic:"Introduction",spanish:"soy",english:"I am",vi:"tôi là",example:"Soy estudiante.",exampleEn:"I am a student.",approx:"soy",explain:"Soy is from ser. Use it for identity."},
  {lesson:"Lesson 1",topic:"Introduction",spanish:"estudiante",english:"student",vi:"học sinh / sinh viên",example:"Soy estudiante.",exampleEn:"I am a student.",approx:"es-tu-dian-te",explain:"Estudiante can be used for a male or female student."},
  {lesson:"Lesson 1",topic:"Introduction",spanish:"estoy",english:"I am",vi:"tôi đang / tôi khỏe",example:"Estoy bien.",exampleEn:"I am fine.",approx:"es-toy",explain:"Estoy is from estar. Use it for condition or feeling."},
  {lesson:"Lesson 2",topic:"Cafe drinks",spanish:"café",english:"coffee",vi:"cà phê",example:"Quiero un café, por favor.",exampleEn:"I want a coffee, please.",approx:"ka-fe",explain:"Café means coffee. The accent shows stress on the final syllable."},
  {lesson:"Lesson 2",topic:"Cafe drinks",spanish:"té",english:"tea",vi:"trà",example:"Para mí, un té.",exampleEn:"For me, a tea.",approx:"te",explain:"Té means tea. The accent separates it from te, an object pronoun."},
  {lesson:"Lesson 2",topic:"Cafe drinks",spanish:"agua",english:"water",vi:"nước",example:"Quisiera agua, por favor.",exampleEn:"I would like water, please.",approx:"a-gwa",explain:"Agua means water. It is a useful word in restaurants and cafes."},
  {lesson:"Lesson 2",topic:"Cafe drinks",spanish:"leche",english:"milk",vi:"sữa",example:"Café con leche, por favor.",exampleEn:"Coffee with milk, please.",approx:"le-che",explain:"Leche means milk. Café con leche is coffee with milk."},
  {lesson:"Lesson 2",topic:"Ordering",spanish:"quiero",english:"I want",vi:"tôi muốn",example:"Quiero un café.",exampleEn:"I want a coffee.",approx:"kie-ro",explain:"Quiero is direct and common. Add por favor to sound polite."},
  {lesson:"Lesson 2",topic:"Ordering",spanish:"quisiera",english:"I would like",vi:"tôi muốn / tôi xin",example:"Quisiera agua, por favor.",exampleEn:"I would like water, please.",approx:"ki-sie-ra",explain:"Quisiera is more polite than quiero."},
  {lesson:"Lesson 2",topic:"Ordering",spanish:"para mí",english:"for me",vi:"cho tôi",example:"Para mí, un té.",exampleEn:"For me, a tea.",approx:"pa-ra mi",explain:"Use para mí when choosing something for yourself."},
  {lesson:"Lesson 2",topic:"Ordering",spanish:"con",english:"with",vi:"với",example:"Café con leche.",exampleEn:"Coffee with milk.",approx:"kon",explain:"Con means with."},
  {lesson:"Lesson 2",topic:"Ordering",spanish:"sin",english:"without",vi:"không có",example:"Café sin leche.",exampleEn:"Coffee without milk.",approx:"sin",explain:"Sin means without."},
  {lesson:"Lesson 2",topic:"Cafe phrases",spanish:"la cuenta",english:"the bill",vi:"hóa đơn",example:"La cuenta, por favor.",exampleEn:"The bill, please.",approx:"la kwen-ta",explain:"Use la cuenta, por favor to ask for the bill."},
  {lesson:"Lesson 2",topic:"Cafe phrases",spanish:"aquí",english:"here",vi:"ở đây",example:"Quiero un café aquí.",exampleEn:"I want a coffee here.",approx:"a-ki",explain:"Aquí means here."},
  {lesson:"Lesson 3",topic:"Payment methods",spanish:"efectivo",english:"cash",vi:"tiền mặt",example:"Pago en efectivo.",exampleEn:"I pay in cash.",approx:"e-fek-ti-bo",explain:"The v in efectivo sounds close to a soft b."},
  {lesson:"Lesson 3",topic:"Payment methods",spanish:"tarjeta",english:"card",vi:"thẻ",example:"Pago con tarjeta.",exampleEn:"I pay by card.",approx:"tar-khe-ta",explain:"The j in tarjeta sounds like a soft kh."},
  {lesson:"Lesson 3",topic:"Payment methods",spanish:"dinero",english:"money",vi:"tiền",example:"Tengo dinero.",exampleEn:"I have money.",approx:"di-ne-ro",explain:"Dinero means money."},
  {lesson:"Lesson 3",topic:"Payment actions",spanish:"pagar",english:"to pay",vi:"trả tiền",example:"Quiero pagar.",exampleEn:"I want to pay.",approx:"pa-gar",explain:"Pagar means to pay."},
  {lesson:"Lesson 3",topic:"Payment actions",spanish:"pago",english:"I pay",vi:"tôi trả tiền",example:"Pago con tarjeta.",exampleEn:"I pay by card.",approx:"pa-go",explain:"Pago is the yo form of pagar."},
  {lesson:"Lesson 3",topic:"Checkout phrases",spanish:"¿cuánto cuesta?",english:"how much does it cost?",vi:"bao nhiêu tiền?",example:"¿Cuánto cuesta?",exampleEn:"How much does it cost?",approx:"kwan-to kwes-ta",explain:"Use this to ask the price."},
  {lesson:"Lesson 3",topic:"Checkout phrases",spanish:"total",english:"total",vi:"tổng cộng",example:"El total es diez euros.",exampleEn:"The total is ten euros.",approx:"to-tal",explain:"Total is used for the final amount."},
  {lesson:"Lesson 3",topic:"Checkout phrases",spanish:"recibo",english:"receipt",vi:"biên lai",example:"Quiero un recibo.",exampleEn:"I want a receipt.",approx:"re-si-bo",explain:"Recibo means receipt."},
  {lesson:"Lesson 3",topic:"Checkout phrases",spanish:"cambio",english:"change",vi:"tiền thối lại",example:"El cambio, por favor.",exampleEn:"The change, please.",approx:"kam-bio",explain:"Cambio can mean change or exchange."},
  {lesson:"Lesson 3",topic:"Responses",spanish:"claro",english:"of course / sure",vi:"tất nhiên / được chứ",example:"Claro.",exampleEn:"Of course.",approx:"kla-ro",explain:"Claro starts with cla, pronounced kla."},
  {lesson:"Lesson 3",topic:"Responses",spanish:"vale",english:"okay",vi:"được / ok",example:"Vale, pago con tarjeta.",exampleEn:"Okay, I pay by card.",approx:"ba-le",explain:"In Spain, vale is a common way to say okay. The v sounds close to b."},
  {lesson:"Lesson 3",topic:"Money",spanish:"euro",english:"euro",vi:"đồng euro",example:"Un euro.",exampleEn:"One euro.",approx:"eu-ro",explain:"Euro is the currency used in Spain."},
  {lesson:"Lesson 4",topic:"Family members",spanish:"familia",english:"family",vi:"gia đình",example:"Mi familia está aquí.",exampleEn:"My family is here.",approx:"fa-mi-lia",explain:"Familia is feminine: la familia."},
  {lesson:"Lesson 4",topic:"Family members",spanish:"madre",english:"mother",vi:"mẹ",example:"Mi madre está bien.",exampleEn:"My mother is fine.",approx:"ma-dre",explain:"Madre means mother."},
  {lesson:"Lesson 4",topic:"Family members",spanish:"padre",english:"father",vi:"bố / cha",example:"Mi padre está aquí.",exampleEn:"My father is here.",approx:"pa-dre",explain:"Padre means father."},
  {lesson:"Lesson 4",topic:"Family members",spanish:"hijo",english:"son",vi:"con trai",example:"Este hijo es estudiante.",exampleEn:"This son is a student.",approx:"i-kho",explain:"The h is silent, and j sounds like a soft kh."},
  {lesson:"Lesson 4",topic:"Family members",spanish:"hija",english:"daughter",vi:"con gái",example:"Esta hija es estudiante.",exampleEn:"This daughter is a student.",approx:"i-kha",explain:"Hija is feminine. Use esta hija."},
  {lesson:"Lesson 4",topic:"Family members",spanish:"hermano",english:"brother",vi:"anh/em trai",example:"Este hermano está aquí.",exampleEn:"This brother is here.",approx:"er-ma-no",explain:"The h in hermano is silent."},
  {lesson:"Lesson 4",topic:"Family members",spanish:"hermana",english:"sister",vi:"chị/em gái",example:"Esta hermana está aquí.",exampleEn:"This sister is here.",approx:"er-ma-na",explain:"Hermana is the feminine form."},
  {lesson:"Lesson 4",topic:"Possessive words",spanish:"mi",english:"my",vi:"của tôi",example:"Mi madre está bien.",exampleEn:"My mother is fine.",approx:"mi",explain:"Mi means my. It does not change for masculine/feminine singular nouns."},
  {lesson:"Lesson 4",topic:"Demonstratives",spanish:"este",english:"this masculine",vi:"này - giống đực",example:"Este hijo.",exampleEn:"This son.",approx:"es-te",explain:"Use este before a masculine singular noun."},
  {lesson:"Lesson 4",topic:"Demonstratives",spanish:"esta",english:"this feminine",vi:"này - giống cái",example:"Esta hija.",exampleEn:"This daughter.",approx:"es-ta",explain:"Use esta before a feminine singular noun."},
  {lesson:"Lesson 4",topic:"Descriptions",spanish:"pequeño",english:"small / little masculine",vi:"nhỏ - giống đực",example:"Este hijo es pequeño.",exampleEn:"This son is little.",approx:"pe-ke-nyo",explain:"Pequeño is masculine."},
  {lesson:"Lesson 4",topic:"Descriptions",spanish:"pequeña",english:"small / little feminine",vi:"nhỏ - giống cái",example:"Esta hija es pequeña.",exampleEn:"This daughter is little.",approx:"pe-ke-nya",explain:"Pequeña is feminine."},
  {lesson:"Lesson 5",topic:"Routine",spanish:"me levanto",english:"I get up",vi:"tôi thức dậy",example:"Me levanto por la mañana.",exampleEn:"I get up in the morning.",approx:"me le-ban-to",explain:"Me levanto is a reflexive routine phrase: I get myself up."},
  {lesson:"Lesson 5",topic:"Routine",spanish:"desayuno",english:"I have breakfast",vi:"tôi ăn sáng",example:"Desayuno en casa.",exampleEn:"I have breakfast at home.",approx:"de-sa-yu-no",explain:"Desayuno can mean I have breakfast, and also breakfast as a noun in some contexts."},
  {lesson:"Lesson 5",topic:"Routine",spanish:"voy",english:"I go",vi:"tôi đi",example:"Voy a clase.",exampleEn:"I go to class.",approx:"boy",explain:"Voy is the yo form of ir, to go."},
  {lesson:"Lesson 5",topic:"Study",spanish:"clase",english:"class",vi:"lớp học",example:"Voy a clase.",exampleEn:"I go to class.",approx:"kla-se",explain:"Use a before a destination: voy a clase."},
  {lesson:"Lesson 5",topic:"Study",spanish:"estudio",english:"I study",vi:"tôi học",example:"Estudio español todos los días.",exampleEn:"I study Spanish every day.",approx:"es-tu-dio",explain:"Estudio is the yo form of estudiar."},
  {lesson:"Lesson 5",topic:"Study",spanish:"español",english:"Spanish",vi:"tiếng Tây Ban Nha",example:"Estudio español.",exampleEn:"I study Spanish.",approx:"es-pa-nyol",explain:"The ñ sound is like ny in canyon."},
  {lesson:"Lesson 5",topic:"Work",spanish:"trabajo",english:"I work / work",vi:"tôi làm việc / công việc",example:"Trabajo por la tarde.",exampleEn:"I work in the afternoon.",approx:"tra-ba-kho",explain:"Trabajo can be a verb form, I work, or a noun, work/job."},
  {lesson:"Lesson 5",topic:"Time",spanish:"por la mañana",english:"in the morning",vi:"vào buổi sáng",example:"Me levanto por la mañana.",exampleEn:"I get up in the morning.",approx:"por la ma-nya-na",explain:"Use por la mañana for in the morning."},
  {lesson:"Lesson 5",topic:"Time",spanish:"por la tarde",english:"in the afternoon",vi:"vào buổi chiều",example:"Trabajo por la tarde.",exampleEn:"I work in the afternoon.",approx:"por la tar-de",explain:"Use por la tarde for in the afternoon."},
  {lesson:"Lesson 5",topic:"Time",spanish:"todos los días",english:"every day",vi:"mỗi ngày",example:"Estudio español todos los días.",exampleEn:"I study Spanish every day.",approx:"to-dos los di-as",explain:"Todos los días means every day."},
  {lesson:"Lesson 5",topic:"Place",spanish:"en casa",english:"at home",vi:"ở nhà",example:"Desayuno en casa.",exampleEn:"I have breakfast at home.",approx:"en ka-sa",explain:"Use en for location: en casa = at home."},
  {lesson:"Lesson 6",topic:"Numbers 0–5",spanish:"cero",english:"zero",vi:"số không",example:"Cero euros.",exampleEn:"Zero euros.",approx:"se-ro",explain:"In Spain, c before e sounds like th; in Latin America, it sounds like s."},
  {lesson:"Lesson 6",topic:"Numbers 0–5",spanish:"uno",english:"one",vi:"một",example:"Un libro.",exampleEn:"One book.",approx:"u-no",explain:"Uno becomes un before a masculine noun: un libro."},
  {lesson:"Lesson 6",topic:"Numbers 0–5",spanish:"dos",english:"two",vi:"hai",example:"Dos cafés.",exampleEn:"Two coffees.",approx:"dos",explain:"Dos does not change for masculine or feminine nouns."},
  {lesson:"Lesson 6",topic:"Numbers 0–5",spanish:"tres",english:"three",vi:"ba",example:"Tres libros.",exampleEn:"Three books.",approx:"tres",explain:"Keep the final s clear."},
  {lesson:"Lesson 6",topic:"Numbers 0–5",spanish:"cuatro",english:"four",vi:"bốn",example:"Cuatro personas.",exampleEn:"Four people.",approx:"kwa-tro",explain:"Cu in cuatro sounds like kwa."},
  {lesson:"Lesson 6",topic:"Numbers 0–5",spanish:"cinco",english:"five",vi:"năm",example:"Cinco euros.",exampleEn:"Five euros.",approx:"sin-ko",explain:"In Spain, the first c often sounds like th; in Latin America, like s."},
  {lesson:"Lesson 6",topic:"Numbers 6–10",spanish:"seis",english:"six",vi:"sáu",example:"Hay seis libros.",exampleEn:"There are six books.",approx:"seys",explain:"Seis is pronounced as one syllable."},
  {lesson:"Lesson 6",topic:"Numbers 6–10",spanish:"siete",english:"seven",vi:"bảy",example:"Siete días.",exampleEn:"Seven days.",approx:"sie-te",explain:"The ie forms one flowing sound."},
  {lesson:"Lesson 6",topic:"Numbers 6–10",spanish:"ocho",english:"eight",vi:"tám",example:"Ocho personas.",exampleEn:"Eight people.",approx:"o-cho",explain:"Ch sounds like the ch in English chair."},
  {lesson:"Lesson 6",topic:"Numbers 6–10",spanish:"nueve",english:"nine",vi:"chín",example:"Nueve euros.",exampleEn:"Nine euros.",approx:"nwe-be",explain:"Spanish v sounds close to a soft b."},
  {lesson:"Lesson 6",topic:"Numbers 6–10",spanish:"diez",english:"ten",vi:"mười",example:"Diez euros.",exampleEn:"Ten euros.",approx:"dies",explain:"In Spain, final z sounds like th; in Latin America, like s."},
  {lesson:"Lesson 6",topic:"Numbers 11–15",spanish:"once",english:"eleven",vi:"mười một",example:"Once libros.",exampleEn:"Eleven books.",approx:"on-se",explain:"Stress the first syllable: ON-ce."},
  {lesson:"Lesson 6",topic:"Numbers 11–15",spanish:"doce",english:"twelve",vi:"mười hai",example:"Doce meses.",exampleEn:"Twelve months.",approx:"do-se",explain:"Doce means twelve."},
  {lesson:"Lesson 6",topic:"Numbers 11–15",spanish:"trece",english:"thirteen",vi:"mười ba",example:"Trece euros.",exampleEn:"Thirteen euros.",approx:"tre-se",explain:"Trece begins like tres but ends in ce."},
  {lesson:"Lesson 6",topic:"Numbers 11–15",spanish:"catorce",english:"fourteen",vi:"mười bốn",example:"Catorce días.",exampleEn:"Fourteen days.",approx:"ka-tor-se",explain:"Stress the middle syllable: ca-TOR-ce."},
  {lesson:"Lesson 6",topic:"Numbers 11–15",spanish:"quince",english:"fifteen",vi:"mười lăm",example:"Quince personas.",exampleEn:"Fifteen people.",approx:"kin-se",explain:"Qu sounds like k; the u is silent."},
  {lesson:"Lesson 6",topic:"Numbers 16–20",spanish:"dieciséis",english:"sixteen",vi:"mười sáu",example:"Tengo dieciséis años.",exampleEn:"I am sixteen years old.",approx:"die-si-seys",explain:"The accent marks the stressed final syllable."},
  {lesson:"Lesson 6",topic:"Numbers 16–20",spanish:"diecisiete",english:"seventeen",vi:"mười bảy",example:"Tengo diecisiete años.",exampleEn:"I am seventeen years old.",approx:"die-si-sie-te",explain:"Diecisiete combines diez and siete."},
  {lesson:"Lesson 6",topic:"Numbers 16–20",spanish:"dieciocho",english:"eighteen",vi:"mười tám",example:"Tengo dieciocho años.",exampleEn:"I am eighteen years old.",approx:"die-si-o-cho",explain:"Dieciocho combines diez and ocho."},
  {lesson:"Lesson 6",topic:"Numbers 16–20",spanish:"diecinueve",english:"nineteen",vi:"mười chín",example:"Tengo diecinueve años.",exampleEn:"I am nineteen years old.",approx:"die-si-nwe-be",explain:"Diecinueve combines diez and nueve."},
  {lesson:"Lesson 6",topic:"Numbers 16–20",spanish:"veinte",english:"twenty",vi:"hai mươi",example:"Tengo veinte años.",exampleEn:"I am twenty years old.",approx:"beyn-te",explain:"Spanish v sounds close to a soft b."},
  {lesson:"Lesson 6",topic:"Useful questions",spanish:"¿cuántos?",english:"how many?",vi:"bao nhiêu?",example:"¿Cuántos libros hay?",exampleEn:"How many books are there?",approx:"kwan-tos",explain:"Use cuántos with a masculine plural noun."},
  {lesson:"Lesson 6",topic:"Age",spanish:"¿cuántos años tienes?",english:"how old are you?",vi:"bạn bao nhiêu tuổi?",example:"¿Cuántos años tienes?",exampleEn:"How old are you?",approx:"kwan-tos a-nyos tie-nes",explain:"Spanish expresses age with tener: literally, how many years do you have?"},
  {lesson:"Lesson 6",topic:"Age",spanish:"tengo ... años",english:"I am ... years old",vi:"tôi ... tuổi",example:"Tengo veinte años.",exampleEn:"I am twenty years old.",approx:"ten-go ... a-nyos",explain:"Use tengo + number + años to say your age."},
  {lesson:"Lesson 7",topic:"Days",spanish:"lunes",english:"Monday",vi:"thứ Hai",example:"Hoy es lunes.",exampleEn:"Today is Monday.",approx:"lu-nes",explain:"Spanish days of the week are not capitalized in normal sentences."},
  {lesson:"Lesson 7",topic:"Days",spanish:"martes",english:"Tuesday",vi:"thứ Ba",example:"Mañana es martes.",exampleEn:"Tomorrow is Tuesday.",approx:"mar-tes",explain:"Keep the final s clear."},
  {lesson:"Lesson 7",topic:"Days",spanish:"miércoles",english:"Wednesday",vi:"thứ Tư",example:"Hoy es miércoles.",exampleEn:"Today is Wednesday.",approx:"mier-ko-les",explain:"The accent shows stress on miér."},
  {lesson:"Lesson 7",topic:"Days",spanish:"jueves",english:"Thursday",vi:"thứ Năm",example:"Mañana es jueves.",exampleEn:"Tomorrow is Thursday.",approx:"khwe-bes",explain:"J sounds like a soft kh sound."},
  {lesson:"Lesson 7",topic:"Days",spanish:"viernes",english:"Friday",vi:"thứ Sáu",example:"El viernes trabajo.",exampleEn:"On Friday I work.",approx:"bier-nes",explain:"V sounds close to a soft b in Spanish."},
  {lesson:"Lesson 7",topic:"Days",spanish:"sábado",english:"Saturday",vi:"thứ Bảy",example:"El sábado estudio.",exampleEn:"On Saturday I study.",approx:"sa-ba-do",explain:"The accent shows stress on sá."},
  {lesson:"Lesson 7",topic:"Days",spanish:"domingo",english:"Sunday",vi:"Chủ nhật",example:"El domingo descanso.",exampleEn:"On Sunday I rest.",approx:"do-min-go",explain:"Domingo means Sunday."},
  {lesson:"Lesson 7",topic:"Time words",spanish:"hoy",english:"today",vi:"hôm nay",example:"Hoy es lunes.",exampleEn:"Today is Monday.",approx:"oy",explain:"H is silent, so hoy sounds like oy."},
  {lesson:"Lesson 7",topic:"Time words",spanish:"mañana",english:"tomorrow / morning",vi:"ngày mai / buổi sáng",example:"Mañana es martes.",exampleEn:"Tomorrow is Tuesday.",approx:"ma-nya-na",explain:"Mañana can mean tomorrow or morning; context tells you which one."},
  {lesson:"Lesson 7",topic:"Questions",spanish:"¿qué día es hoy?",english:"what day is today?",vi:"hôm nay là thứ mấy?",example:"¿Qué día es hoy? Hoy es lunes.",exampleEn:"What day is today? Today is Monday.",approx:"ke di-a es oy",explain:"Use this question to ask the day of the week."},
  {lesson:"Lesson 7",topic:"Schedule",spanish:"el lunes",english:"on Monday",vi:"vào thứ Hai",example:"El lunes estudio.",exampleEn:"On Monday I study.",approx:"el lu-nes",explain:"Use el + day to mean on that day."},
  {lesson:"Lesson 7",topic:"Schedule",spanish:"semana",english:"week",vi:"tuần",example:"Esta semana estudio español.",exampleEn:"This week I study Spanish.",approx:"se-ma-na",explain:"Semana means week."},
  {lesson:"Lesson 7",topic:"Routine",spanish:"descanso",english:"I rest",vi:"tôi nghỉ ngơi",example:"El domingo descanso.",exampleEn:"On Sunday I rest.",approx:"des-kan-so",explain:"Descanso is the yo form: I rest."},
  {lesson:"Lesson 8",topic:"Asking the time",spanish:"¿qué hora es?",english:"what time is it?",vi:"mấy giờ rồi?",example:"¿Qué hora es?",exampleEn:"What time is it?",approx:"ke o-ra es",explain:"Use ¿Qué hora es? to ask the current time. The h in hora is silent."},
  {lesson:"Lesson 8",topic:"Clock time",spanish:"la hora",english:"the hour / time",vi:"giờ / thời gian",example:"¿Qué hora es?",exampleEn:"What time is it?",approx:"la o-ra",explain:"Hora is feminine. The h is silent."},
  {lesson:"Lesson 8",topic:"Clock time",spanish:"es la una",english:"it is one o'clock",vi:"bây giờ là một giờ",example:"Es la una.",exampleEn:"It is one o'clock.",approx:"es la u-na",explain:"Use the singular es la only for one o'clock."},
  {lesson:"Lesson 8",topic:"Clock time",spanish:"son las",english:"it is (for hours 2–12)",vi:"bây giờ là (từ hai giờ trở lên)",example:"Son las dos.",exampleEn:"It is two o'clock.",approx:"son las",explain:"Use son las before every hour except one."},
  {lesson:"Lesson 8",topic:"Clock time",spanish:"en punto",english:"exactly / o'clock",vi:"đúng giờ",example:"Son las ocho en punto.",exampleEn:"It is exactly eight o'clock.",approx:"en pun-to",explain:"Add en punto when you want to emphasize an exact hour."},
  {lesson:"Lesson 8",topic:"Minutes",spanish:"y cuarto",english:"quarter past",vi:"hơn mười lăm phút",example:"Son las dos y cuarto.",exampleEn:"It is quarter past two.",approx:"i kwar-to",explain:"Use y cuarto for fifteen minutes after the hour."},
  {lesson:"Lesson 8",topic:"Minutes",spanish:"y media",english:"half past",vi:"rưỡi",example:"Son las tres y media.",exampleEn:"It is half past three.",approx:"i me-dia",explain:"Use y media for thirty minutes after the hour."},
  {lesson:"Lesson 8",topic:"Minutes",spanish:"menos cuarto",english:"quarter to",vi:"kém mười lăm phút",example:"Son las cinco menos cuarto.",exampleEn:"It is quarter to five.",approx:"me-nos kwar-to",explain:"Use the next hour + menos cuarto for fifteen minutes before it."},
  {lesson:"Lesson 8",topic:"Schedule",spanish:"a la una",english:"at one o'clock",vi:"lúc một giờ",example:"La clase es a la una.",exampleEn:"The class is at one o'clock.",approx:"a la u-na",explain:"Use a la with one o'clock."},
  {lesson:"Lesson 8",topic:"Schedule",spanish:"a las",english:"at (a time)",vi:"lúc (mấy giờ)",example:"La clase es a las ocho.",exampleEn:"The class is at eight.",approx:"a las",explain:"Use a las with times from two through twelve."},
  {lesson:"Lesson 8",topic:"Appointments",spanish:"la cita",english:"appointment",vi:"cuộc hẹn",example:"La cita es a las nueve.",exampleEn:"The appointment is at nine.",approx:"la si-ta",explain:"Cita is a feminine noun: la cita."},
  {lesson:"Lesson 8",topic:"Appointments",spanish:"temprano",english:"early",vi:"sớm",example:"La clase es temprano.",exampleEn:"The class is early.",approx:"tem-pra-no",explain:"Temprano means early."},
  {lesson:"Lesson 8",topic:"Appointments",spanish:"tarde",english:"late",vi:"muộn",example:"Llego tarde.",exampleEn:"I arrive late.",approx:"tar-de",explain:"Tarde can mean late or afternoon depending on context."},
  {lesson:"Lesson 8",topic:"Time of day",spanish:"de la mañana",english:"in the morning",vi:"vào buổi sáng",example:"Son las ocho de la mañana.",exampleEn:"It is eight in the morning.",approx:"de la ma-nya-na",explain:"Add de la mañana to clarify that a clock time is in the morning."},
  {lesson:"Lesson 8",topic:"Time of day",spanish:"de la tarde",english:"in the afternoon",vi:"vào buổi chiều",example:"Son las cuatro de la tarde.",exampleEn:"It is four in the afternoon.",approx:"de la tar-de",explain:"Add de la tarde for an afternoon clock time."},
  {lesson:"Lesson 8",topic:"Time of day",spanish:"de la noche",english:"at night",vi:"vào buổi tối",example:"Son las nueve de la noche.",exampleEn:"It is nine at night.",approx:"de la no-che",explain:"Add de la noche for an evening or night clock time."}
];

const pronunciationItems = [
  {group:"B/V", spanish:"bien", vi:"fine / well", approx:"bi-en", sentence:"Estoy bien.", explain:"B and V in Spanish are usually very close. Do not pronounce V like English /v/."},
  {group:"B/V", spanish:"buenos días", vi:"good morning", approx:"bwe-nos di-as", sentence:"Buenos días, Ana.", explain:"The b sound in buenos is soft but still close to b."},
  {group:"G", spanish:"gracias", vi:"thank you", approx:"gra-sias", sentence:"Muchas gracias.", explain:"The g in gracias is a clear g sound because it comes before r."},
  {group:"G", spanish:"gusto", vi:"pleasure", approx:"gus-to", sentence:"Mucho gusto.", explain:"The g in gusto is also a clear g sound because it comes before u."},
  {group:"LL/Y", spanish:"me llamo", vi:"my name is", approx:"me ya-mo", sentence:"Hola, me llamo Ana.", explain:"LL is often pronounced like y in many Spanish-speaking regions."},
  {group:"LL/Y", spanish:"te llamas", vi:"your name is", approx:"te ya-mas", sentence:"¿Cómo te llamas?", explain:"Use the same LL/Y sound in llamas."},
  {group:"R", spanish:"gracias", vi:"thank you", approx:"gra-sias", sentence:"Estoy bien, gracias.", explain:"The r in gracias is short and light."}
];

const grammarBank = {
  "Lesson 1": [
    {q:"Yo ____ estudiante.", a:"soy", choices:["soy","estoy","me llamo","te llamas"], why:"Use ser for identity: I am a student."},
    {q:"Yo ____ bien.", a:"estoy", choices:["soy","estoy","me llamo","te llamas"], why:"Use estar for condition/feeling: I am fine."},
    {q:"____ Ana.", a:"me llamo", choices:["me llamo","estoy","te llamas","es"], why:"Use me llamo to say your name."},
    {q:"¿Cómo ____?", a:"te llamas", choices:["soy","estoy","te llamas","me llamo"], why:"Use ¿Cómo te llamas? to ask someone's name."},
    {q:"¿Cómo ____?", a:"estás", choices:["soy","estás","te llamas","me llamo"], why:"Use estar in the question: How are you?"}
  ],
  "Lesson 2": [
    {q:"Yo ____ un café.", a:"quiero", choices:["quiero","soy","estoy","te llamas"], why:"Use quiero to say I want something."},
    {q:"____ agua, por favor.", a:"quisiera", choices:["quisiera","estoy","me llamo","es"], why:"Quisiera is a polite way to say I would like."},
    {q:"Café ____ leche.", a:"con", choices:["con","sin","soy","bien"], why:"Con means with."},
    {q:"Café ____ leche.", a:"sin", choices:["con","sin","estoy","llamo"], why:"Sin means without."},
    {q:"____, un té.", a:"para mí", choices:["para mí","me llamo","estoy","adiós"], why:"Para mí means for me."}
  ],
  "Lesson 3": [
    {q:"Pago ____ efectivo.", a:"en", choices:["en","con","sin","para mí"], why:"Use en efectivo for paying in cash."},
    {q:"Pago ____ tarjeta.", a:"con", choices:["en","con","sin","claro"], why:"Use con tarjeta for paying by card."},
    {q:"¿Cuánto ____?", a:"cuesta", choices:["cuesta","pago","tarjeta","vale"], why:"Use ¿Cuánto cuesta? to ask the price."},
    {q:"El ____ es diez euros.", a:"total", choices:["total","recibo","cambio","dinero"], why:"Total is the final amount."},
    {q:"____, pago con tarjeta.", a:"vale", choices:["vale","efectivo","recibo","euro"], why:"Vale means okay."}
  ],
  "Lesson 4": [
    {q:"____ hijo es estudiante.", a:"este", choices:["este","esta","mi","pequeña"], why:"Use este with masculine singular nouns like hijo."},
    {q:"____ hija es estudiante.", a:"esta", choices:["este","esta","mi","pequeño"], why:"Use esta with feminine singular nouns like hija."},
    {q:"____ madre está bien.", a:"mi", choices:["mi","este","esta","pequeño"], why:"Mi means my."},
    {q:"Este hijo es ____.", a:"pequeño", choices:["pequeño","pequeña","esta","madre"], why:"Use pequeño with masculine hijo."},
    {q:"Esta hija es ____.", a:"pequeña", choices:["pequeño","pequeña","este","padre"], why:"Use pequeña with feminine hija."}
  ],
  "Lesson 5": [
    {q:"Yo ____ por la mañana.", a:"me levanto", choices:["me levanto","desayuno","voy","trabajo"], why:"Use me levanto to say I get up."},
    {q:"____ en casa.", a:"desayuno", choices:["desayuno","clase","por la tarde","todos los días"], why:"Desayuno means I have breakfast."},
    {q:"____ a clase.", a:"voy", choices:["voy","estudio","trabajo","desayuno"], why:"Use voy a + place for I go to a place."},
    {q:"Estudio español ____.", a:"todos los días", choices:["todos los días","en casa","por la mañana","clase"], why:"Todos los días means every day."},
    {q:"Trabajo ____.", a:"por la tarde", choices:["por la tarde","español","voy","clase"], why:"Use por la tarde for in the afternoon."}
  ],
  "Lesson 6": [
    {q:"Uno, dos, ____.", a:"tres", choices:["tres","seis","diez","doce"], why:"Tres comes after dos."},
    {q:"Ocho, nueve, ____.", a:"diez", choices:["diez","once","siete","veinte"], why:"Diez comes after nueve."},
    {q:"Tengo veinte ____.", a:"años", choices:["años","libros","euros","días"], why:"Use tener + number + años to express age."},
    {q:"¿Cuántos libros ____?", a:"hay", choices:["hay","tengo","soy","estoy"], why:"Use hay to ask or say how many things there are."},
    {q:"Hay ____ libros.", a:"seis", choices:["seis","tengo","años","cuántos"], why:"Put the number before the plural noun."}
  ],
  "Lesson 7": [
    {q:"Hoy ____ lunes.", a:"es", choices:["es","soy","estoy","hay"], why:"Use es to say what day it is."},
    {q:"Mañana es ____.", a:"martes", choices:["martes","hoy","semana","día"], why:"Martes means Tuesday."},
    {q:"¿Qué ____ es hoy?", a:"día", choices:["día","lunes","semana","el"], why:"Use ¿Qué día es hoy? to ask what day today is."},
    {q:"____ viernes trabajo.", a:"el", choices:["el","la","un","una"], why:"Use el + day to mean on that day."},
    {q:"El domingo ____.", a:"descanso", choices:["descanso","lunes","hoy","día"], why:"Descanso means I rest."}
  ],
  "Lesson 8": [
    {q:"¿Qué ____ es?", a:"hora", choices:["hora","día","semana","cita"], why:"Use ¿Qué hora es? to ask the time."},
    {q:"____ la una.", a:"es", choices:["es","son","hay","está"], why:"Use es la for one o'clock."},
    {q:"____ las tres.", a:"son", choices:["son","es","soy","estoy"], why:"Use son las for hours from two through twelve."},
    {q:"Son las cuatro y ____.", a:"media", choices:["media","hora","punto","tarde"], why:"Y media means half past."},
    {q:"La cita es ____ las nueve.", a:"a", choices:["a","en","de","por"], why:"Use a las + time to say when an event happens."}
  ]
};

const listeningBank = {
  "Lesson 1": {
    text:"Hola, me llamo Ana. ¿Cómo te llamas? Estoy bien, gracias. Mucho gusto. Adiós.",
    meaning:"Hello, my name is Ana. What is your name? I am fine, thank you. Nice to meet you. Goodbye.",
    dictation:["Hola, me llamo Ana.","Estoy bien, gracias."],
    questions:[
      {q:"What is the girl's name?", a:["ana"], hint:"Listen for: me llamo..."},
      {q:"What question does she ask?", a:["como te llamas","¿como te llamas?","cómo te llamas"], hint:"Listen for the question with llamas."},
      {q:"How is she?", a:["bien"], hint:"Listen for: estoy..."},
      {q:"What polite phrase means nice to meet you?", a:["mucho gusto"], hint:"Listen after gracias."}
    ]
  },
  "Lesson 2": {
    text:"Hola. Quisiera un café con leche, por favor. Para mí, agua. Gracias. La cuenta, por favor.",
    meaning:"Hello. I would like a coffee with milk, please. For me, water. Thank you. The bill, please.",
    dictation:["Quisiera un café con leche, por favor.","La cuenta, por favor."],
    questions:[
      {q:"What drink does the person want?", a:["cafe","café","un cafe","un café"], hint:"Listen for: quisiera un..."},
      {q:"Does the coffee have milk?", a:["con leche","leche"], hint:"Listen for: con..."},
      {q:"What other drink is mentioned?", a:["agua"], hint:"Listen for: Para mí..."},
      {q:"What phrase asks for the bill?", a:["la cuenta"], hint:"Listen at the end."}
    ]
  },
  "Lesson 3": {
    text:"¿Cuánto cuesta? El total es diez euros. ¿En efectivo o con tarjeta? Pago con tarjeta. Claro.",
    meaning:"How much does it cost? The total is ten euros. In cash or by card? I pay by card. Of course.",
    dictation:["Pago con tarjeta.","El total es diez euros."],
    questions:[
      {q:"What is the total?", a:["diez euros","10 euros","diez"], hint:"Listen for: el total es..."},
      {q:"Does the person pay by cash or card?", a:["tarjeta","con tarjeta"], hint:"Listen for: pago con..."},
      {q:"What word means cash?", a:["efectivo"], hint:"Listen for: en efectivo."},
      {q:"What word means of course?", a:["claro"], hint:"Listen at the end."}
    ]
  },
  "Lesson 4": {
    text:"Esta es mi familia. Este hijo es pequeño. Esta hija es pequeña. Mi madre está bien. Mi padre está aquí.",
    meaning:"This is my family. This son is little. This daughter is little. My mother is fine. My father is here.",
    dictation:["Este hijo es pequeño.","Esta hija es pequeña."],
    questions:[
      {q:"What does familia mean?", a:["family","familia"], hint:"Listen for: mi familia."},
      {q:"Is hijo masculine or feminine?", a:["masculine","masculino"], hint:"Este hijo uses este."},
      {q:"Is hija masculine or feminine?", a:["feminine","femenino"], hint:"Esta hija uses esta."},
      {q:"Who is fine?", a:["madre","mi madre"], hint:"Listen for: está bien."}
    ]
  },
  "Lesson 5": {
    text:"Hola. Me levanto por la mañana. Desayuno en casa. Voy a clase. Estudio español todos los días. Trabajo por la tarde.",
    meaning:"Hello. I get up in the morning. I have breakfast at home. I go to class. I study Spanish every day. I work in the afternoon.",
    dictation:["Me levanto por la mañana.","Estudio español todos los días."],
    questions:[
      {q:"When does the person get up?", a:["por la mañana","mañana","la mañana"], hint:"Listen for: me levanto..."},
      {q:"Where does the person have breakfast?", a:["en casa","casa"], hint:"Listen for: desayuno..."},
      {q:"Where does the person go?", a:["a clase","clase"], hint:"Listen for: voy a..."},
      {q:"What does the person study?", a:["español","spanish"], hint:"Listen for: estudio..."}
    ]
  },
  "Lesson 6": {
    text:"Uno, dos, tres, cuatro, cinco. Hay seis libros y siete cafés. Ana tiene dieciocho años. Carlos tiene veinte años.",
    meaning:"One, two, three, four, five. There are six books and seven coffees. Ana is eighteen years old. Carlos is twenty years old.",
    dictation:["Hay seis libros.","Tengo veinte años."],
    questions:[
      {q:"How many books are there?", a:["seis","6","seis libros"], hint:"Listen for: hay ... libros."},
      {q:"How many coffees are there?", a:["siete","7","siete cafés","siete cafes"], hint:"Listen for the number before cafés."},
      {q:"How old is Ana?", a:["dieciocho","18","dieciocho años"], hint:"Listen for Ana tiene..."},
      {q:"How old is Carlos?", a:["veinte","20","veinte años"], hint:"Listen at the end."}
    ]
  },
  "Lesson 7": {
    text:"Hoy es lunes. Mañana es martes. El miércoles estudio español. El viernes trabajo. El domingo descanso.",
    meaning:"Today is Monday. Tomorrow is Tuesday. On Wednesday I study Spanish. On Friday I work. On Sunday I rest.",
    dictation:["Hoy es lunes.","El domingo descanso."],
    questions:[
      {q:"What day is today?", a:["lunes","monday"], hint:"Listen for: hoy es..."},
      {q:"What day is tomorrow?", a:["martes","tuesday"], hint:"Listen for: mañana es..."},
      {q:"When does the person study Spanish?", a:["miércoles","miercoles","wednesday"], hint:"Listen for: estudio español."},
      {q:"What does the person do on Sunday?", a:["descanso","rest","rests","i rest"], hint:"Listen for: el domingo..."}
    ]
  },
  "Lesson 8": {
    text:"¿Qué hora es? Son las ocho de la mañana. La clase es a las nueve y cuarto. La cita es a las tres y media de la tarde. No llego tarde.",
    meaning:"What time is it? It is eight in the morning. The class is at quarter past nine. The appointment is at half past three in the afternoon. I am not late.",
    dictation:["Son las ocho de la mañana.","La cita es a las tres y media."],
    questions:[
      {q:"What time is it now?", a:["ocho","las ocho","ocho de la mañana","8","8:00"], hint:"Listen after the opening question."},
      {q:"What time is the class?", a:["nueve y cuarto","las nueve y cuarto","9:15"], hint:"Listen for: la clase es..."},
      {q:"What time is the appointment?", a:["tres y media","las tres y media","3:30"], hint:"Listen for: la cita es..."},
      {q:"Is the appointment in the morning or afternoon?", a:["afternoon","tarde","de la tarde"], hint:"Listen after tres y media."}
    ]
  }
};

const quizBank = {
  "Lesson 1": [
    {q:"______, ¿cómo estás?", a:["hola"], hint:"hello"},
    {q:"Muchas ______.", a:["gracias"], hint:"thank you"},
    {q:"Repite, por ______.", a:["favor"], hint:"please"},
    {q:"Me ______ Ana.", a:["llamo"], hint:"My name is Ana."},
    {q:"¿Cómo te ______?", a:["llamas"], hint:"What is your name?"},
    {q:"Yo ____ estudiante.", a:["soy"], hint:"ser for identity"},
    {q:"Yo ____ bien.", a:["estoy"], hint:"estar for feeling"},
    {q:"Nice to meet you = ?", a:["mucho gusto"], hint:"polite first meeting phrase"},
    {q:"Goodbye = ?", a:["adiós","adios"], hint:"ending a conversation"},
    {q:"See you later = ?", a:["hasta luego"], hint:"friendly goodbye"},
    {q:"Very well = ?", a:["muy bien"], hint:"feeling phrase"}
  ],
  "Lesson 2": [
    {q:"coffee = ?", a:["café","cafe"], hint:"cafe drink"},
    {q:"tea = ?", a:["té","te"], hint:"cafe drink"},
    {q:"water = ?", a:["agua"], hint:"cafe drink"},
    {q:"milk = ?", a:["leche"], hint:"cafe drink"},
    {q:"I want = ?", a:["quiero"], hint:"ordering"},
    {q:"I would like = ?", a:["quisiera"], hint:"polite ordering"},
    {q:"with = ?", a:["con"], hint:"coffee with milk"},
    {q:"without = ?", a:["sin"], hint:"coffee without milk"},
    {q:"For me = ?", a:["para mí","para mi"], hint:"cho tôi"},
    {q:"The bill = ?", a:["la cuenta"], hint:"at the end of a cafe visit"}
  ],
  "Lesson 3": [
    {q:"cash = ?", a:["efectivo"], hint:"payment method"},
    {q:"card = ?", a:["tarjeta"], hint:"payment method"},
    {q:"money = ?", a:["dinero"], hint:"payment word"},
    {q:"to pay = ?", a:["pagar"], hint:"payment action"},
    {q:"I pay = ?", a:["pago"], hint:"yo form of pagar"},
    {q:"How much does it cost? = ?", a:["¿cuánto cuesta?","cuánto cuesta","cuanto cuesta"], hint:"price question"},
    {q:"receipt = ?", a:["recibo"], hint:"checkout paper"},
    {q:"change = ?", a:["cambio"], hint:"money returned"},
    {q:"of course / sure = ?", a:["claro"], hint:"response"},
    {q:"okay = ?", a:["vale"], hint:"common in Spain"}
  ],
  "Lesson 4": [
    {q:"family = ?", a:["familia"], hint:"family word"},
    {q:"mother = ?", a:["madre"], hint:"family word"},
    {q:"father = ?", a:["padre"], hint:"family word"},
    {q:"son = ?", a:["hijo"], hint:"masculine family word"},
    {q:"daughter = ?", a:["hija"], hint:"feminine family word"},
    {q:"brother = ?", a:["hermano"], hint:"masculine family word"},
    {q:"sister = ?", a:["hermana"], hint:"feminine family word"},
    {q:"this son = ?", a:["este hijo"], hint:"este + masculine"},
    {q:"this daughter = ?", a:["esta hija"], hint:"esta + feminine"},
    {q:"my = ?", a:["mi"], hint:"possessive word"}
  ],
  "Lesson 5": [
    {q:"I get up = ?", a:["me levanto"], hint:"daily routine"},
    {q:"I have breakfast = ?", a:["desayuno"], hint:"morning routine"},
    {q:"I go = ?", a:["voy"], hint:"yo form of ir"},
    {q:"class = ?", a:["clase"], hint:"school / lesson"},
    {q:"I study = ?", a:["estudio"], hint:"study verb"},
    {q:"Spanish = ?", a:["español"], hint:"language"},
    {q:"I work = ?", a:["trabajo"], hint:"work verb"},
    {q:"in the morning = ?", a:["por la mañana"], hint:"time phrase"},
    {q:"in the afternoon = ?", a:["por la tarde"], hint:"time phrase"},
    {q:"every day = ?", a:["todos los días","todos los dias"], hint:"frequency phrase"},
    {q:"at home = ?", a:["en casa"], hint:"place phrase"}
  ],
  "Lesson 6": [
    {q:"zero = ?", a:["cero"], hint:"0"},
    {q:"one = ?", a:["uno"], hint:"1"},
    {q:"two = ?", a:["dos"], hint:"2"},
    {q:"three = ?", a:["tres"], hint:"3"},
    {q:"four = ?", a:["cuatro"], hint:"4"},
    {q:"five = ?", a:["cinco"], hint:"5"},
    {q:"six = ?", a:["seis"], hint:"6"},
    {q:"seven = ?", a:["siete"], hint:"7"},
    {q:"eight = ?", a:["ocho"], hint:"8"},
    {q:"nine = ?", a:["nueve"], hint:"9"},
    {q:"ten = ?", a:["diez"], hint:"10"},
    {q:"eleven = ?", a:["once"], hint:"11"},
    {q:"twelve = ?", a:["doce"], hint:"12"},
    {q:"thirteen = ?", a:["trece"], hint:"13"},
    {q:"fourteen = ?", a:["catorce"], hint:"14"},
    {q:"fifteen = ?", a:["quince"], hint:"15"},
    {q:"sixteen = ?", a:["dieciséis","dieciseis"], hint:"16"},
    {q:"seventeen = ?", a:["diecisiete"], hint:"17"},
    {q:"eighteen = ?", a:["dieciocho"], hint:"18"},
    {q:"nineteen = ?", a:["diecinueve"], hint:"19"},
    {q:"twenty = ?", a:["veinte"], hint:"20"},
    {q:"How old are you? = ?", a:["¿cuántos años tienes?","cuántos años tienes","cuantos anos tienes"], hint:"age question"}
  ],
  "Lesson 7": [
    {q:"Monday = ?", a:["lunes"], hint:"day of the week"},
    {q:"Tuesday = ?", a:["martes"], hint:"day of the week"},
    {q:"Wednesday = ?", a:["miércoles","miercoles"], hint:"day of the week"},
    {q:"Thursday = ?", a:["jueves"], hint:"day of the week"},
    {q:"Friday = ?", a:["viernes"], hint:"day of the week"},
    {q:"Saturday = ?", a:["sábado","sabado"], hint:"day of the week"},
    {q:"Sunday = ?", a:["domingo"], hint:"day of the week"},
    {q:"today = ?", a:["hoy"], hint:"time word"},
    {q:"tomorrow = ?", a:["mañana","manana"], hint:"time word"},
    {q:"week = ?", a:["semana"], hint:"time word"},
    {q:"What day is today? = ?", a:["¿qué día es hoy?","qué día es hoy","que dia es hoy"], hint:"day question"},
    {q:"On Monday = ?", a:["el lunes"], hint:"el + day"}
  ],
  "Lesson 8": [
    {q:"What time is it? = ?", a:["¿qué hora es?","qué hora es","que hora es"], hint:"asking the time"},
    {q:"It is one o'clock = ?", a:["es la una"], hint:"singular hour"},
    {q:"It is two o'clock = ?", a:["son las dos"], hint:"plural hours"},
    {q:"exactly / o'clock = ?", a:["en punto"], hint:"an exact hour"},
    {q:"quarter past = ?", a:["y cuarto"], hint:"15 minutes after"},
    {q:"half past = ?", a:["y media"], hint:"30 minutes after"},
    {q:"quarter to = ?", a:["menos cuarto"], hint:"15 minutes before"},
    {q:"at one o'clock = ?", a:["a la una"], hint:"time of an event"},
    {q:"at eight o'clock = ?", a:["a las ocho"], hint:"a las + hour"},
    {q:"appointment = ?", a:["la cita","cita"], hint:"a scheduled meeting"},
    {q:"early = ?", a:["temprano"], hint:"not late"},
    {q:"late = ?", a:["tarde"], hint:"not early"},
    {q:"in the morning = ?", a:["de la mañana","de la manana"], hint:"after a clock time"},
    {q:"at night = ?", a:["de la noche"], hint:"after a clock time"}
  ]
};

const grammarNotesBank = {
  "Lesson 1": [
    {title:"1. “Me llamo...” = “My name is...”", body:"Use this to say your name.", pattern:"Me llamo + name", example:"Me llamo Ana.", meaning:"My name is Ana."},
    {title:"2. “Ser” for basic identity", body:"Use soy to say who you are in a simple introduction.", pattern:"Soy + identity", example:"Soy estudiante.", meaning:"I am a student."},
    {title:"3. “Estar” for condition or feeling", body:"Use estoy to say how you feel right now.", pattern:"Estoy + feeling", example:"Estoy bien.", meaning:"I am fine."},
    {title:"4. “¿Cómo te llamas?”", body:"Use this question to ask someone's name.", pattern:"¿Cómo te llamas?", example:"¿Cómo te llamas? Me llamo Ana.", meaning:"What is your name? My name is Ana."}
  ],
  "Lesson 2": [
    {title:"1. “Quiero...” = “I want...”", body:"Use quiero to order something directly. Add por favor to make it polite.", pattern:"Quiero + item + por favor", example:"Quiero un café, por favor.", meaning:"I want a coffee, please."},
    {title:"2. “Quisiera...” = “I would like...”", body:"Use quisiera for a softer and more polite order.", pattern:"Quisiera + item + por favor", example:"Quisiera agua, por favor.", meaning:"I would like water, please."},
    {title:"3. “Con” and “sin”", body:"Use con for with, and sin for without.", pattern:"item + con/sin + extra", example:"Café con leche. Café sin leche.", meaning:"Coffee with milk. Coffee without milk."},
    {title:"4. “Para mí...” = “For me...”", body:"Use para mí when choosing what you want.", pattern:"Para mí, + item", example:"Para mí, un té.", meaning:"For me, a tea."}
  ],
  "Lesson 3": [
    {title:"1. “Pagar” = “to pay”", body:"Use pago when you say how you pay.", pattern:"Pago + payment phrase", example:"Pago con tarjeta.", meaning:"I pay by card."},
    {title:"2. “En efectivo” = “in cash”", body:"Use en before efectivo.", pattern:"Pago en efectivo", example:"Pago en efectivo.", meaning:"I pay in cash."},
    {title:"3. “Con tarjeta” = “by card”", body:"Use con before tarjeta.", pattern:"Pago con tarjeta", example:"Pago con tarjeta.", meaning:"I pay by card."},
    {title:"4. “¿Cuánto cuesta?”", body:"Use this question to ask the price.", pattern:"¿Cuánto cuesta?", example:"¿Cuánto cuesta? El total es diez euros.", meaning:"How much does it cost? The total is ten euros."}
  ],
  "Lesson 4": [
    {title:"1. “Este” for masculine nouns", body:"Use este when the noun is masculine and singular.", pattern:"este + masculine noun", example:"Este hijo es pequeño.", meaning:"This son is little."},
    {title:"2. “Esta” for feminine nouns", body:"Use esta when the noun is feminine and singular.", pattern:"esta + feminine noun", example:"Esta hija es pequeña.", meaning:"This daughter is little."},
    {title:"3. “Mi” = “my”", body:"Use mi before a singular family noun. It stays the same for masculine and feminine.", pattern:"mi + singular noun", example:"Mi madre está bien. Mi padre está aquí.", meaning:"My mother is fine. My father is here."},
    {title:"4. Adjective agreement", body:"Some adjectives change their ending to match masculine or feminine nouns.", pattern:"pequeño / pequeña", example:"Este hijo es pequeño. Esta hija es pequeña.", meaning:"This son is little. This daughter is little."}
  ],
  "Lesson 5": [
    {title:"1. Routine phrase: “me levanto”", body:"Use me levanto to say I get up. It is common in daily routine descriptions.", pattern:"Me levanto + time phrase", example:"Me levanto por la mañana.", meaning:"I get up in the morning."},
    {title:"2. Yo form verbs", body:"Many basic regular verbs in the yo form end in -o.", pattern:"desayunar → desayuno / estudiar → estudio / trabajar → trabajo", example:"Desayuno en casa. Estudio español.", meaning:"I have breakfast at home. I study Spanish."},
    {title:"3. “Voy a...” = “I go to...”", body:"Use voy a before a destination or activity.", pattern:"Voy a + place", example:"Voy a clase.", meaning:"I go to class."},
    {title:"4. Time phrases with “por la...”", body:"Use por la mañana and por la tarde to talk about parts of the day.", pattern:"verb + por la mañana / por la tarde", example:"Trabajo por la tarde.", meaning:"I work in the afternoon."}
  ],
  "Lesson 6": [
    {title:"1. Numbers before nouns", body:"Put a number before a noun to state a quantity. Use a plural noun after numbers greater than one.", pattern:"number + plural noun", example:"Dos cafés. Seis libros.", meaning:"Two coffees. Six books."},
    {title:"2. “Hay” for quantities", body:"Use hay to say that something exists or to ask how many things there are.", pattern:"Hay + number + noun", example:"Hay seis libros.", meaning:"There are six books."},
    {title:"3. Asking “how many?”", body:"Use cuántos with a masculine plural noun and cuántas with a feminine plural noun.", pattern:"¿Cuántos/Cuántas + noun + hay?", example:"¿Cuántos libros hay?", meaning:"How many books are there?"},
    {title:"4. Expressing age with “tener”", body:"Spanish uses tener, not ser, to express age.", pattern:"Tengo + number + años", example:"Tengo veinte años.", meaning:"I am twenty years old."}
  ],
  "Lesson 7": [
    {title:"1. Days are usually lowercase", body:"In Spanish, days of the week are normally written with lowercase letters.", pattern:"lunes, martes, miércoles", example:"Hoy es lunes.", meaning:"Today is Monday."},
    {title:"2. “Hoy es...” and “Mañana es...”", body:"Use es to say what day today or tomorrow is.", pattern:"Hoy/Mañana + es + day", example:"Mañana es martes.", meaning:"Tomorrow is Tuesday."},
    {title:"3. Asking the day", body:"Use ¿Qué día es hoy? when you want to ask what day it is.", pattern:"¿Qué día es hoy?", example:"¿Qué día es hoy? Hoy es lunes.", meaning:"What day is today? Today is Monday."},
    {title:"4. “El + day” for schedules", body:"Use el before a day to mean on that day.", pattern:"El + day + verb", example:"El viernes trabajo.", meaning:"On Friday I work."}
  ],
  "Lesson 8": [
    {title:"1. Asking the time", body:"Use ¿Qué hora es? to ask for the current time.", pattern:"¿Qué hora es?", example:"¿Qué hora es? Son las dos.", meaning:"What time is it? It is two o'clock."},
    {title:"2. One o'clock versus other hours", body:"Use es la una only for one o'clock. Use son las with every other hour.", pattern:"Es la una / Son las + hour", example:"Es la una. Son las cuatro.", meaning:"It is one o'clock. It is four o'clock."},
    {title:"3. Adding minutes", body:"Use y cuarto for quarter past, y media for half past, and menos cuarto with the next hour for quarter to.", pattern:"hour + y cuarto/y media; next hour + menos cuarto", example:"Son las tres y media. Son las cinco menos cuarto.", meaning:"It is half past three. It is quarter to five."},
    {title:"4. Saying when something happens", body:"Use a la una for an event at one. Use a las before all other clock times.", pattern:"event + es + a la/a las + time", example:"La clase es a las ocho.", meaning:"The class is at eight."},
    {title:"5. Clarifying the time of day", body:"Add de la mañana, de la tarde, or de la noche after a clock time.", pattern:"time + de la mañana/tarde/noche", example:"Son las nueve de la noche.", meaning:"It is nine at night."}
  ]
};

lessonInfo["Lesson 9"] = {
  title:"Weather — Talking About the Day",
  level:"A1",
  vocabulary:"weather words + simple daily conditions",
  grammar:"hace + weather / hay + noun / esta + adjective / va a + infinitive",
  listening:"talking about today's weather and a simple plan",
  goal:"After this lesson, you can ask about the weather, say if it is sunny, cold, windy, or rainy, and make a simple plan for the day.",
  core:[
    {spanish:"¿Qué tiempo hace?", english:"What is the weather like?"},
    {spanish:"Hace sol.", english:"It is sunny."},
    {spanish:"Hace frío.", english:"It is cold."},
    {spanish:"Va a llover.", english:"It is going to rain."}
  ]
};

baseItems.push(
  {lesson:"Lesson 9",topic:"Weather question",spanish:"¿qué tiempo hace?",english:"what is the weather like?",vi:"thời tiết thế nào?",example:"¿Qué tiempo hace hoy?",exampleEn:"What is the weather like today?",approx:"ke tiem-po a-se",explain:"Use ¿Qué tiempo hace? to ask about the weather.",visual:"❓"},
  {lesson:"Lesson 9",topic:"Weather",spanish:"hace sol",english:"it is sunny",vi:"trời nắng",example:"Hoy hace sol.",exampleEn:"Today it is sunny.",approx:"a-se sol",explain:"Use hace sol for sunny weather.",visual:"☀️"},
  {lesson:"Lesson 9",topic:"Weather",spanish:"hace calor",english:"it is hot",vi:"trời nóng",example:"Hace calor por la tarde.",exampleEn:"It is hot in the afternoon.",approx:"a-se ka-lor",explain:"Use hace calor to say it is hot.",visual:"🔥"},
  {lesson:"Lesson 9",topic:"Weather",spanish:"hace frío",english:"it is cold",vi:"trời lạnh",example:"Hace frío por la mañana.",exampleEn:"It is cold in the morning.",approx:"a-se fri-o",explain:"Use hace frío to say it is cold.",visual:"❄️"},
  {lesson:"Lesson 9",topic:"Weather",spanish:"hace viento",english:"it is windy",vi:"trời có gió",example:"Hoy hace viento.",exampleEn:"Today it is windy.",approx:"a-se bien-to",explain:"Use hace viento for windy weather.",visual:"💨"},
  {lesson:"Lesson 9",topic:"Rain",spanish:"llueve",english:"it rains / it is raining",vi:"trời mưa",example:"Llueve mucho hoy.",exampleEn:"It is raining a lot today.",approx:"yue-be",explain:"Llueve is the common way to say it rains or it is raining.",visual:"🌧️"},
  {lesson:"Lesson 9",topic:"Rain",spanish:"va a llover",english:"it is going to rain",vi:"trời sắp mưa",example:"Va a llover esta noche.",exampleEn:"It is going to rain tonight.",approx:"ba a yo-ber",explain:"Use va a + infinitive for a near future plan or prediction.",visual:"☔"},
  {lesson:"Lesson 9",topic:"Clouds",spanish:"hay nubes",english:"there are clouds",vi:"có mây",example:"Hay nubes en el cielo.",exampleEn:"There are clouds in the sky.",approx:"ay nu-bes",explain:"Use hay to say that something exists.",visual:"☁️"},
  {lesson:"Lesson 9",topic:"Clouds",spanish:"está nublado",english:"it is cloudy",vi:"trời nhiều mây",example:"Está nublado esta mañana.",exampleEn:"It is cloudy this morning.",approx:"es-ta nu-bla-do",explain:"Use está nublado to describe the sky right now.",visual:"🌥️"},
  {lesson:"Lesson 9",topic:"Weather nouns",spanish:"la lluvia",english:"rain",vi:"mưa",example:"La lluvia es fuerte.",exampleEn:"The rain is strong.",approx:"la yu-bia",explain:"Lluvia is a feminine noun: la lluvia.",visual:"🌧️"},
  {lesson:"Lesson 9",topic:"Weather nouns",spanish:"el sol",english:"the sun",vi:"mặt trời / nắng",example:"El sol es fuerte hoy.",exampleEn:"The sun is strong today.",approx:"el sol",explain:"Sol is masculine: el sol.",visual:"☀️"},
  {lesson:"Lesson 9",topic:"Weather nouns",spanish:"el viento",english:"the wind",vi:"gió",example:"El viento es fuerte.",exampleEn:"The wind is strong.",approx:"el bien-to",explain:"Viento is masculine: el viento.",visual:"💨"},
  {lesson:"Lesson 9",topic:"Weather nouns",spanish:"el clima",english:"climate / weather",vi:"khí hậu / thời tiết",example:"El clima es agradable.",exampleEn:"The climate is pleasant.",approx:"el kli-ma",explain:"Clima is masculine in Spanish: el clima.",visual:"🌍"},
  {lesson:"Lesson 9",topic:"Time of day",spanish:"esta mañana",english:"this morning",vi:"sáng nay",example:"Esta mañana hace frío.",exampleEn:"This morning it is cold.",approx:"es-ta ma-nya-na",explain:"Use esta mañana to talk about this morning.",visual:"🌅"},
  {lesson:"Lesson 9",topic:"Time of day",spanish:"esta noche",english:"tonight",vi:"tối nay",example:"Esta noche va a llover.",exampleEn:"Tonight it is going to rain.",approx:"es-ta no-che",explain:"Use esta noche for tonight.",visual:"🌙"}
);

grammarBank["Lesson 9"] = [
  {q:"Complete: Hoy ___ sol.",choices:["hace","hay","esta"],a:"hace",why:"Use hace sol for sunny weather."},
  {q:"Choose the sentence that means 'It is going to rain.'",choices:["Va a llover.","Hace sol.","Hay nubes."],a:"Va a llover.",why:"Va a + infinitive expresses a near future prediction."},
  {q:"Complete: ___ nubes en el cielo.",choices:["Hay","Hace","Soy"],a:"Hay",why:"Use hay to say there are clouds."},
  {q:"Choose the correct phrase for cloudy weather.",choices:["Está nublado.","Hace viento.","El sol es fuerte."],a:"Está nublado.",why:"Está nublado means it is cloudy."}
];

listeningBank["Lesson 9"] = {
  text:"¿Qué tiempo hace hoy? Esta mañana hace frío y hay nubes. Por la tarde hace viento. Esta noche va a llover, pero mañana hace sol.",
  meaning:"What is the weather like today? This morning it is cold and there are clouds. In the afternoon it is windy. Tonight it is going to rain, but tomorrow it is sunny.",
  dictation:["Esta mañana hace frío.","Esta noche va a llover."],
  questions:[
    {q:"What is the weather like this morning?", a:["hace frío","frio","cold"], hint:"Listen for: esta mañana..."},
    {q:"What is in the sky?", a:["nubes","clouds","hay nubes"], hint:"Listen for: hay..."},
    {q:"What happens tonight?", a:["va a llover","llover","rain"], hint:"Listen for: esta noche..."},
    {q:"What is the weather like tomorrow?", a:["hace sol","sunny","sol"], hint:"Listen for: mañana..."}
  ]
};

quizBank["Lesson 9"] = [
  {q:"What is the weather like? = ?", a:["¿qué tiempo hace?","qué tiempo hace","que tiempo hace"], hint:"weather question"},
  {q:"It is sunny = ?", a:["hace sol"], hint:"sunny weather"},
  {q:"It is hot = ?", a:["hace calor"], hint:"hot weather"},
  {q:"It is cold = ?", a:["hace frío","hace frio"], hint:"cold weather"},
  {q:"It is windy = ?", a:["hace viento"], hint:"windy weather"},
  {q:"It is raining = ?", a:["llueve"], hint:"rain verb"},
  {q:"It is going to rain = ?", a:["va a llover"], hint:"near future rain"},
  {q:"There are clouds = ?", a:["hay nubes"], hint:"clouds"},
  {q:"It is cloudy = ?", a:["está nublado","esta nublado"], hint:"cloudy sky"},
  {q:"the sun = ?", a:["el sol"], hint:"weather noun"},
  {q:"the wind = ?", a:["el viento"], hint:"weather noun"},
  {q:"tonight = ?", a:["esta noche"], hint:"time phrase"}
];

grammarNotesBank["Lesson 9"] = [
  {title:"1. Hace for weather", body:"Use hace with sol, calor, frío, and viento.", pattern:"Hace + weather noun", example:"Hace sol. Hace frío.", meaning:"It is sunny. It is cold."},
  {title:"2. Hay for clouds", body:"Use hay when you want to say there are clouds or other things in the sky.", pattern:"Hay + noun", example:"Hay nubes en el cielo.", meaning:"There are clouds in the sky."},
  {title:"3. Está for the current condition", body:"Use está nublado to describe the sky right now.", pattern:"Está + adjective", example:"Está nublado esta mañana.", meaning:"It is cloudy this morning."},
  {title:"4. Va a + infinitive", body:"Use va a before an infinitive to talk about a near future prediction.", pattern:"Va a + infinitive", example:"Va a llover esta noche.", meaning:"It is going to rain tonight."}
];

lessonInfo["Lesson 10"] = {
  title:"Likes and Dislikes — Using Gustar",
  level:"A1",
  vocabulary:"gustar phrases + hobbies and interests",
  grammar:"me gusta / me gustan / no me gusta / mucho / nada / también / tampoco",
  listening:"talking about likes, dislikes, and hobbies",
  goal:"After this lesson, you can say what you like and dislike, ask a friend what they like, agree or disagree using también and tampoco, and talk about simple hobbies.",
  core:[
    {spanish:"Me gusta el fútbol.", english:"I like soccer."},
    {spanish:"Me gustan los animales.", english:"I like animals."},
    {spanish:"No me gusta nada el frío.", english:"I don't like the cold at all."},
    {spanish:"¿Qué te gusta hacer?", english:"What do you like to do?"}
  ]
};

baseItems.push(
  {lesson:"Lesson 10",topic:"Gustar basics",spanish:"gustar",english:"to like / to be pleasing to",vi:"thích",example:"Me gusta viajar.",exampleEn:"I like to travel.",approx:"gus-tar",explain:"Gustar literally means to be pleasing to. The subject of the sentence is the thing liked, not the person.",visual:"❤️"},
  {lesson:"Lesson 10",topic:"Gustar basics",spanish:"me gusta",english:"I like (singular)",vi:"tôi thích (số ít)",example:"Me gusta el café.",exampleEn:"I like coffee.",approx:"me gus-ta",explain:"Use me gusta before a singular noun or an infinitive verb.",visual:"👍"},
  {lesson:"Lesson 10",topic:"Gustar basics",spanish:"me gustan",english:"I like (plural)",vi:"tôi thích (số nhiều)",example:"Me gustan los animales.",exampleEn:"I like animals.",approx:"me gus-tan",explain:"Use me gustan before a plural noun because gustar agrees with the thing liked, not with me.",visual:"🐾"},
  {lesson:"Lesson 10",topic:"Gustar basics",spanish:"te gusta",english:"you like (singular)",vi:"bạn thích (số ít)",example:"¿Te gusta el chocolate?",exampleEn:"Do you like chocolate?",approx:"te gus-ta",explain:"Use te gusta to ask or talk about what a friend likes.",visual:"🍫"},
  {lesson:"Lesson 10",topic:"Gustar basics",spanish:"no me gusta",english:"I don't like",vi:"tôi không thích",example:"No me gusta la lluvia.",exampleEn:"I don't like the rain.",approx:"no me gus-ta",explain:"Add no before me gusta to say you dislike something.",visual:"🚫"},
  {lesson:"Lesson 10",topic:"Intensity words",spanish:"mucho",english:"a lot / very much",vi:"rất nhiều",example:"Me gusta mucho el fútbol.",exampleEn:"I like soccer a lot.",approx:"mu-cho",explain:"Add mucho after me gusta to strengthen how much you like something.",visual:"💯"},
  {lesson:"Lesson 10",topic:"Intensity words",spanish:"nada",english:"nothing / not at all",vi:"không chút nào",example:"No me gusta nada el frío.",exampleEn:"I don't like the cold at all.",approx:"na-da",explain:"Use no...nada together to strongly emphasize a dislike.",visual:"❌"},
  {lesson:"Lesson 10",topic:"Agreement and disagreement",spanish:"también",english:"also / me too",vi:"cũng vậy (đồng ý)",example:"Me gusta el café. A mí también.",exampleEn:"I like coffee. Me too.",approx:"tam-bien",explain:"Use también to agree with something someone likes.",visual:"➕"},
  {lesson:"Lesson 10",topic:"Agreement and disagreement",spanish:"tampoco",english:"neither / me neither",vi:"cũng không (đồng ý phủ định)",example:"No me gusta la lluvia. A mí tampoco.",exampleEn:"I don't like the rain. Me neither.",approx:"tam-po-ko",explain:"Use tampoco to agree with something someone dislikes.",visual:"➖"},
  {lesson:"Lesson 10",topic:"Hobbies",spanish:"el fútbol",english:"soccer",vi:"bóng đá",example:"Me gusta el fútbol.",exampleEn:"I like soccer.",approx:"el fut-bol",explain:"Fútbol is masculine: el fútbol.",visual:"⚽"},
  {lesson:"Lesson 10",topic:"Hobbies",spanish:"la música",english:"music",vi:"âm nhạc",example:"Me gusta la música.",exampleEn:"I like music.",approx:"la mu-si-ka",explain:"Música is feminine: la música.",visual:"🎵"},
  {lesson:"Lesson 10",topic:"Hobbies",spanish:"bailar",english:"to dance",vi:"nhảy múa",example:"Me gusta bailar.",exampleEn:"I like to dance.",approx:"bai-lar",explain:"Use gustar + infinitive to say you like doing an activity.",visual:"💃"},
  {lesson:"Lesson 10",topic:"Things you like",spanish:"la comida",english:"food",vi:"đồ ăn",example:"Me gusta la comida española.",exampleEn:"I like Spanish food.",approx:"la ko-mi-da",explain:"Comida is feminine: la comida.",visual:"🍽️"},
  {lesson:"Lesson 10",topic:"Things you like",spanish:"los animales",english:"animals",vi:"động vật",example:"Me gustan los animales.",exampleEn:"I like animals.",approx:"los a-ni-ma-les",explain:"Animales is plural, so use me gustan, not me gusta.",visual:"🐶"},
  {lesson:"Lesson 10",topic:"Things you like",spanish:"el perro",english:"dog",vi:"con chó",example:"Me gustan los perros.",exampleEn:"I like dogs.",approx:"el pe-rro",explain:"Perro means dog. Practice the rolled double r sound.",visual:"🐕"},
  {lesson:"Lesson 10",topic:"Questions",spanish:"¿qué te gusta?",english:"what do you like?",vi:"bạn thích gì?",example:"¿Qué te gusta hacer?",exampleEn:"What do you like to do?",approx:"ke te gus-ta",explain:"Use ¿Qué te gusta...? to ask a friend what they like.",visual:"❓"}
);

grammarBank["Lesson 10"] = [
  {q:"Me ___ el fútbol.",choices:["gusta","gustan","gusto"],a:"gusta",why:"Fútbol is singular, so use gusta."},
  {q:"Me ___ los animales.",choices:["gusta","gustan","gusto"],a:"gustan",why:"Animales is plural, so gustar agrees with it: gustan."},
  {q:"No me gusta ___ el frío.",choices:["nada","mucho","también"],a:"nada",why:"No...nada emphasizes a strong dislike."},
  {q:"Me gusta el café. A mí ___.",choices:["también","tampoco","mucho"],a:"también",why:"Use también to agree with a positive statement."},
  {q:"No me gusta la lluvia. A mí ___.",choices:["tampoco","también","nada"],a:"tampoco",why:"Use tampoco to agree with a negative statement."}
];

listeningBank["Lesson 10"] = {
  text:"¿Qué te gusta hacer? Me gusta mucho la música y me gusta bailar. También me gusta el fútbol, pero no me gusta nada el frío. Me gustan los animales, especialmente los perros.",
  meaning:"What do you like to do? I like music a lot and I like to dance. I also like soccer, but I don't like the cold at all. I like animals, especially dogs.",
  dictation:["Me gusta mucho la música.","No me gusta nada el frío."],
  questions:[
    {q:"What does the person like a lot?", a:["la musica","música","la música"], hint:"Listen for: me gusta mucho..."},
    {q:"What activity do they like?", a:["bailar"], hint:"Listen for: me gusta..."},
    {q:"What don't they like at all?", a:["el frio","frío","el frío"], hint:"Listen for: no me gusta nada..."},
    {q:"What animals do they especially like?", a:["perros","los perros"], hint:"Listen at the end."}
  ]
};

quizBank["Lesson 10"] = [
  {q:"to like = ?", a:["gustar"], hint:"infinitive verb"},
  {q:"I like (singular) = ?", a:["me gusta"], hint:"before a singular noun or infinitive"},
  {q:"I like (plural) = ?", a:["me gustan"], hint:"before a plural noun"},
  {q:"Do you like...? = ?", a:["¿te gusta?","te gusta"], hint:"asking a friend"},
  {q:"I don't like = ?", a:["no me gusta"], hint:"negative"},
  {q:"a lot = ?", a:["mucho"], hint:"intensifier"},
  {q:"not at all / nothing = ?", a:["nada"], hint:"strong negative"},
  {q:"also / me too = ?", a:["también","tambien"], hint:"positive agreement"},
  {q:"neither / me neither = ?", a:["tampoco"], hint:"negative agreement"},
  {q:"soccer = ?", a:["el fútbol","fútbol","el futbol","futbol"], hint:"sport"},
  {q:"music = ?", a:["la música","música","la musica","musica"], hint:"hobby"},
  {q:"to dance = ?", a:["bailar"], hint:"activity verb"},
  {q:"food = ?", a:["la comida","comida"], hint:"noun"},
  {q:"animals = ?", a:["los animales","animales"], hint:"plural noun"},
  {q:"dog = ?", a:["el perro","perro"], hint:"animal"},
  {q:"What do you like to do? = ?", a:["¿qué te gusta hacer?","que te gusta hacer","qué te gusta hacer"], hint:"question about hobbies"}
];

grammarNotesBank["Lesson 10"] = [
  {title:"1. Gustar agrees with the thing liked", body:"Unlike English, the subject of gustar is the thing being liked, not the person. Use gusta for a singular noun or infinitive, and gustan for a plural noun.", pattern:"me/te gusta + singular noun/infinitive; me/te gustan + plural noun", example:"Me gusta el fútbol. Me gustan los animales.", meaning:"I like soccer. I like animals."},
  {title:"2. Negating with no", body:"Place no directly before me gusta or me gustan to say you dislike something.", pattern:"No + me/te gusta(n) + noun", example:"No me gusta la lluvia.", meaning:"I don't like the rain."},
  {title:"3. Intensifying with mucho and nada", body:"Add mucho to strengthen a like, and use no...nada together to strongly emphasize a dislike.", pattern:"me gusta mucho / no me gusta nada", example:"Me gusta mucho el chocolate. No me gusta nada el frío.", meaning:"I like chocolate a lot. I don't like the cold at all."},
  {title:"4. Agreeing with también and tampoco", body:"Use también to agree with a positive statement, and tampoco to agree with a negative statement.", pattern:"A mí también (agree positive) / A mí tampoco (agree negative)", example:"Me gusta la música. A mí también. No me gusta el frío. A mí tampoco.", meaning:"I like music. Me too. I don't like the cold. Me neither."}
];
const visualMap = {
  "hola":"👋",
  "buenos días":"🌅",
  "buenas tardes":"🌤️",
  "gracias":"🙏",
  "por favor":"🤲",
  "mucho gusto":"🤝",
  "adiós":"👋",
  "hasta luego":"🛣️",
  "¿cómo estás?":"🙂",
  "bien":"😊",
  "muy bien":"😄",
  "me llamo":"🏷️",
  "¿cómo te llamas?":"❓",
  "soy":"🪪",
  "estudiante":"🎒",
  "estoy":"💬",
  "café":"☕",
  "té":"🍵",
  "agua":"💧",
  "leche":"🥛",
  "quiero":"☝️",
  "quisiera":"🙋",
  "para mí":"👤",
  "con":"➕",
  "sin":"➖",
  "la cuenta":"🧾",
  "aquí":"📍",
  "efectivo":"💵",
  "tarjeta":"💳",
  "dinero":"💰",
  "pagar":"🧾",
  "pago":"✅",
  "¿cuánto cuesta?":"🏷️",
  "total":"🧮",
  "recibo":"🧾",
  "cambio":"🔄",
  "claro":"👍",
  "vale":"👌",
  "euro":"€",
  "familia":"👨‍👩‍👧",
  "madre":"👩",
  "padre":"👨",
  "hijo":"👦",
  "hija":"👧",
  "hermano":"🧑",
  "hermana":"👩‍🦱",
  "mi":"🙋",
  "este":"👈",
  "esta":"👈",
  "pequeño":"🔹",
  "pequeña":"🔸",
  "me levanto":"⏰",
  "desayuno":"🍳",
  "voy":"🚶",
  "clase":"🏫",
  "estudio":"📚",
  "español":"🇪🇸",
  "trabajo":"💼",
  "por la mañana":"🌅",
  "por la tarde":"🌇",
  "todos los días":"📅",
  "en casa":"🏠",
  "lunes":"📅",
  "martes":"📅",
  "miércoles":"📅",
  "jueves":"📅",
  "viernes":"📅",
  "sábado":"📅",
  "domingo":"☀️",
  "hoy":"📍",
  "mañana":"➡️",
  "¿qué día es hoy?":"❓",
  "el lunes":"📅",
  "semana":"🗓️",
  "descanso":"🛋️"
};
const ipaMap = {
  "hola":"ˈola",
  "buenos días":"ˈbwenos ˈdias",
  "buenas tardes":"ˈbwenas ˈtaɾðes",
  "gracias":"ˈɡɾasjas",
  "por favor":"poɾ faˈβoɾ",
  "mucho gusto":"ˈmutʃo ˈɡusto",
  "adiós":"aˈðjos",
  "hasta luego":"ˈasta ˈlweɣo",
  "¿cómo estás?":"ˈkomo esˈtas",
  "bien":"bjen",
  "muy bien":"muj bjen",
  "me llamo":"me ˈʝamo",
  "¿cómo te llamas?":"ˈkomo te ˈʝamas",
  "soy":"soj",
  "estudiante":"estuˈðjante",
  "estoy":"esˈtoj",
  "café":"kaˈfe",
  "té":"te",
  "agua":"ˈaɣwa",
  "leche":"ˈletʃe",
  "quiero":"ˈkjeɾo",
  "quisiera":"kiˈsjeɾa",
  "para mí":"ˈpaɾa ˈmi",
  "con":"kon",
  "sin":"sin",
  "la cuenta":"la ˈkwenta",
  "aquí":"aˈki",
  "efectivo":"efekˈtiβo",
  "tarjeta":"taɾˈxeta",
  "dinero":"diˈneɾo",
  "pagar":"paˈɣaɾ",
  "pago":"ˈpaɣo",
  "¿cuánto cuesta?":"ˈkwanto ˈkwesta",
  "total":"toˈtal",
  "recibo":"reˈsiβo",
  "cambio":"ˈkambjo",
  "claro":"ˈklaɾo",
  "vale":"ˈbale",
  "euro":"ˈewɾo",
  "familia":"faˈmilja",
  "madre":"ˈmaðɾe",
  "padre":"ˈpaðɾe",
  "hijo":"ˈixo",
  "hija":"ˈixa",
  "hermano":"eɾˈmano",
  "hermana":"eɾˈmana",
  "mi":"mi",
  "este":"ˈeste",
  "esta":"ˈesta",
  "pequeño":"peˈkeɲo",
  "pequeña":"peˈkeɲa",
  "me levanto":"me leˈβanto",
  "desayuno":"desaˈʝuno",
  "voy":"boj",
  "clase":"ˈklase",
  "estudio":"esˈtuðjo",
  "español":"espaˈɲol",
  "trabajo":"tɾaˈβaxo",
  "por la mañana":"poɾ la maˈɲana",
  "por la tarde":"poɾ la ˈtaɾðe",
  "todos los días":"ˈtoðos los ˈdias",
  "en casa":"en ˈkasa",
  "cero":"ˈseɾo",
  "uno":"ˈuno",
  "dos":"dos",
  "tres":"tɾes",
  "cuatro":"ˈkwatɾo",
  "cinco":"ˈsiŋko",
  "seis":"sejs",
  "siete":"ˈsjete",
  "ocho":"ˈotʃo",
  "nueve":"ˈnweβe",
  "diez":"djes",
  "once":"ˈonse",
  "doce":"ˈdose",
  "trece":"ˈtɾese",
  "catorce":"kaˈtoɾse",
  "quince":"ˈkinse",
  "dieciséis":"djesiˈsejs",
  "diecisiete":"djesiˈsjete",
  "dieciocho":"djesiˈotʃo",
  "diecinueve":"djesiˈnweβe",
  "veinte":"ˈbeinte",
  "¿cuántos?":"ˈkwantos",
  "¿cuántos años tienes?":"ˈkwantos ˈaɲos ˈtjenes",
  "tengo ... años":"ˈteŋɡo ... ˈaɲos",
  "lunes":"ˈlunes",
  "martes":"ˈmaɾtes",
  "miércoles":"ˈmjeɾkoles",
  "jueves":"ˈxweβes",
  "viernes":"ˈbjeɾnes",
  "sábado":"ˈsaβaðo",
  "domingo":"doˈmiŋɡo",
  "hoy":"oj",
  "mañana":"maˈɲana",
  "¿qué día es hoy?":"ke ˈdia es oj",
  "el lunes":"el ˈlunes",
  "semana":"seˈmana",
  "descanso":"desˈkanso"
};

Object.assign(ipaMap, {
  "a":"a",
  "ana":"ˈana",
  "carlos":"ˈkaɾlos",
  "es":"es",
  "está":"esˈta",
  "estás":"esˈtas",
  "el":"el",
  "en":"en",
  "la":"la",
  "un":"un",
  "por":"poɾ",
  "favor":"faˈβoɾ",
  "me":"me",
  "te":"te",
  "muy":"muj",
  "muchas":"ˈmutʃas",
  "mucho":"ˈmutʃo",
  "gusto":"ˈɡusto",
  "buenos":"ˈbwenos",
  "buenas":"ˈbwenas",
  "tardes":"ˈtaɾðes",
  "hasta":"ˈasta",
  "luego":"ˈlweɣo",
  "para":"ˈpaɾa",
  "mí":"ˈmi",
  "llamo":"ˈʝamo",
  "llamas":"ˈʝamas",
  "repite":"reˈpite",
  "cuenta":"ˈkwenta",
  "¿cómo":"ˈkomo",
  "¿cuánto":"ˈkwanto",
  "cuesta":"ˈkwesta",
  "¿cuántos":"ˈkwantos",
  "¿qué":"ke",
  "día":"ˈdia",
  "hay":"aj",
  "tengo":"ˈteŋɡo",
  "tienes":"ˈtjenes",
  "años":"ˈaɲos",
  "días":"ˈdias",
  "euros":"ˈewɾos",
  "libro":"ˈliβɾo",
  "libros":"ˈliβɾos",
  "cafés":"kaˈfes",
  "personas":"peɾˈsonas",
  "meses":"ˈmeses",
  "levanto":"leˈβanto",
  "casa":"ˈkasa",
  "todos":"ˈtoðos",
  "los":"los",
  "tarde":"ˈtaɾðe"
});
const pronunciationNotes = {
  "cero":"Spain: /ˈθeɾo/. Latin America: /ˈseɾo/.",
  "cinco":"Spain: /ˈθiŋko/. Latin America: /ˈsiŋko/.",
  "diez":"Spain: /djeθ/. Latin America: /djes/.",
  "doce":"Spain: /ˈdoθe/. Latin America: /ˈdose/.",
  "trece":"Spain: /ˈtɾeθe/. Latin America: /ˈtɾese/.",
  "catorce":"Spain: /kaˈtoɾθe/. Latin America: /kaˈtoɾse/.",
  "quince":"Spain: /ˈkinθe/. Latin America: /ˈkinse/.",
  "gracias":"Spain often uses /ˈɡɾaθjas/; Latin America uses /ˈɡɾasjas/.",
  "veinte":"The Spanish v is not the English /v/ sound; pronounce it close to b.",
  "viernes":"The Spanish v is not the English /v/ sound; pronounce it close to b.",
  "jueves":"The j is a strong Spanish /x/ sound, similar to a firm kh/h sound.",
  "hoy":"The h is silent."
};

function createLesson(id, vocabulary){
  return {
    id,
    info: lessonInfo[id],
    vocabulary,
    grammarNotes: grammarNotesBank[id] || [],
    grammar: grammarBank[id] || [],
    listening: listeningBank[id] || null,
    quiz: quizBank[id] || []
  };
}

const lessonCatalog = Object.keys(lessonInfo).map(id => createLesson(id, baseItems.filter(x => x.lesson === id)));

const lessonsById = Object.fromEntries(lessonCatalog.map(lesson=>[lesson.id, lesson]));
const fallbackLesson = lessonsById["Lesson 1"];

function getLessonData(id){ return lessonsById[id] || null; }
function getLessonInfo(id){ return getLessonData(id)?.info || lessonInfo[id]; }
function getLessonListening(id){ return getLessonData(id)?.listening || listeningBank[id] || fallbackLesson.listening; }
function allItems(){ return [...lessonCatalog.flatMap(lesson=>lesson.vocabulary), ...customItems]; }
function validateLessonCatalog(){
  const missing = lessonCatalog.flatMap(lesson=>{
    const gaps = [];
    if(!lesson.info) gaps.push("info");
    if(!lesson.vocabulary.length) gaps.push("vocabulary");
    if(!lesson.grammarNotes.length) gaps.push("grammar notes");
    if(!lesson.grammar.length) gaps.push("grammar practice");
    if(!lesson.listening) gaps.push("listening");
    if(!lesson.quiz.length) gaps.push("quiz");
    return gaps.length ? [`${lesson.id}: ${gaps.join(", ")}`] : [];
  });
  if(missing.length) console.warn("Lesson catalog needs attention:", missing);
}
