/* IELTS: основное содержание – разделы, задания, шаблоны, практика, колоды словаря, ресурсы.
   Как редактировать этот файл: см. README.md в корне репозитория.
   Текст пиши в двойных кавычках, элементы списков разделяй запятыми. */
window.EXAM = {
id: "ielts",
title: "Тренажёр IELTS Academic",
stamp: "IELTS",
heading: "IELTS Academic",
tagline: "Компьютерный формат 2026 · Listening, Reading, Writing, Speaking",
target: "Цель **8.0**, каждая секция от 7.5",
practiceIntro: "Задания с автоматической проверкой. Listening озвучивается синтезом речи браузера (лучше всего работает в Chrome и Safari), текст записи открывается кнопкой. Лучший результат по каждому набору сохраняется в этом браузере.",
vocabIntro: "Готовые колоды по секциям плюс твои слова. Карточки работают по системе Лейтнера: «Помню» поднимает слово на уровень выше, «Не помню» возвращает на ноль, слова с уровнем 4–5 считаются выученными. Кнопка + в любой таблице фраз добавляет фразу в «Мои слова».",
resIntro: "Официальные материалы, сайты экзаменаторов, словари и корпуса для лексики и структур. Все ссылки открываются в новой вкладке.",
sections: [
/* ================= OVERVIEW ================= */
{ id: "overview", nav: "Формат и план", grp: "Старт", title: "Формат, баллы и план на 5 недель",
  sub: "IELTS Academic, компьютерная версия: 2 часа 45 минут на Listening, Reading и Writing подряд, Speaking отдельно с живым экзаменатором.",
  blocks: [
  ["table", ["Секция", "Время", "Содержание", "Особенности компьютерной версии"], [
    ["**Listening**", "~30 мин + 2 мин проверки", "4 части, 40 вопросов, запись звучит один раз", "Ответы печатаешь сразу в поля, переноса в бланк нет, орфография засчитывается"],
    ["**Reading**", "60 мин", "3 текста, 2 150–2 750 слов, 40 вопросов", "Выделение текста и заметки через правый клик, таймер на экране"],
    ["**Writing**", "60 мин", "Task 1 от 150 слов (~20 мин), Task 2 от 250 слов (~40 мин)", "Счётчик слов на экране, автопроверки орфографии нет, Task 2 весит вдвое больше Task 1"],
    ["**Speaking**", "11–14 мин", "3 части, интервью с экзаменатором", "Проходит лицом к лицу, часто в другой день, записывается на диктофон"]
  ]],
  ["note", "**Что изменилось в 2026.** IELTS перевели на компьютерный формат во всех странах, бумажный вариант выводили в течение первой половины года (в Индии последняя бумажная сессия прошла 22 августа 2026). Задания, сложность и шкала остались прежними. Результаты приходят через 1–2 дня, а неудачную секцию можно пересдать отдельно через One Skill Retake в центрах, где есть эта услуга. Перед записью на пересдачу одной секции проверь, принимает ли такой результат твоя программа."],
  ["h", "Как считается итоговый балл"],
  ["p", "Каждая секция получает band от 0 до 9 с шагом 0.5. Итог равен среднему четырёх секций с округлением до ближайшей половины: 7.25 превращается в 7.5, 7.75 в 8.0, 7.125 в 7.0. Итоговые 8.0 дают, например, 8.5 + 8.5 + 7.5 + 7.5 или 9.0 + 8.5 + 7.0 + 7.5."],
  ["table", ["Band", "Listening, верных из 40", "Reading Academic, верных из 40"], [
    ["9.0", "39–40", "39–40"], ["8.5", "37–38", "37–38"], ["8.0", "35–36", "35–36"], ["7.5", "32–34", "33–34"],
    ["7.0", "30–31", "30–32"], ["6.5", "26–29", "27–29"], ["6.0", "23–25", "23–26"]
  ], [0, 1, 2]],
  ["p", "Таблица ориентировочная: шкала калибруется под каждую версию теста, разброс обычно не больше одного верного ответа."],
  ["h", "Твоя стартовая точка и где брать баллы"],
  ["table", ["Секция", "База по TOEFL 98", "Цель", "Главная работа"], [
    ["Reading", "R29 из 30", "8.5–9.0", "True/False/Not Given и matching headings, темп 20 минут на текст"],
    ["Listening", "L25", "8.0–8.5", "Орфография, числа, поправки говорящего; стабильно 35+ верных"],
    ["Writing", "W23", "7.5", "Overview в Task 1, критерии оценки, лексика трендов, 12+ полных эссе с разбором"],
    ["Speaking", "S21, зона риска", "7.5", "Беглость и развёрнутые ответы, 10 историй для Part 2, ежедневные записи"]
  ]],
  ["note", "По таблице соответствия ETS IELTS 8.0 равен TOEFL 110–114, а 7.5 равен 102–109. Для Princeton, Yale и HKS целься в 8.0 с минимумом 7.5 в каждой секции и перед регистрацией сверь требования своих программ."],
  ["h", "План на 5 недель"],
  ["p", "Рассчитан на экзамен в конце ноября – начале декабря и 2–3 часа в день вместе с GRE. Галочки сохраняются в этом браузере."],
  ["plan", "ielts5", [
    ["Неделя 1", "Диагностика: полный тест Cambridge IELTS 19 или 20 в компьютерном интерфейсе на ieltsonlinetests.com. Разбор ошибок по типам заданий. Speaking: запиши ответы на Part 1–3 и оцени по четырём критериям. Writing: по одному Task 1 и Task 2 без ограничения по времени."],
    ["Неделя 2", "Writing в фокусе: Task 1 каждого типа (линейный график, таблица, процесс, карта) и три Task 2 разных типов. Reading: два текста в день по 20 минут. Speaking: каждый день одна карточка Part 2 с таймером."],
    ["Неделя 3", "Listening: части 3 и 4 ежедневно, словарь ошибок орфографии. Writing: три Task 2 под таймер 40 минут со сверкой по критериям. Speaking: вопросы Part 3 по темам образования, экологии и технологий."],
    ["Неделя 4", "Два полных пробных теста с перерывом в два дня, разбор каждого неверного ответа. Дважды Task 1 + Task 2 подряд за 60 минут. Регистрация на экзамен, если ещё не сделала."],
    ["Неделя 5", "Последний полный тест за 5–6 дней до экзамена, дальше только повторение: свои шаблоны, словарь ошибок, 10 историй для Part 2. Накануне отдых и сон."]
  ]],
  ["h", "Распорядок дня вместе с GRE"],
  ["table", ["Блок", "Время", "Содержание"], [
    ["Утро", "30 мин", "Карточки IELTS и GRE в этом тренажёре, 20–30 новых слов"],
    ["День", "60–90 мин", "GRE по своему плану"],
    ["Вечер", "45–60 мин", "IELTS: Writing в пн, ср, пт; Reading и Listening во вт, чт; полный тест в сб"],
    ["Каждый день", "10 мин", "Speaking: карточка Part 2 с таймером и запись на диктофон"]
  ]],
  ["tips", "День экзамена", [
    "Приходи за 30–40 минут: регистрация, фото, сдача вещей. На столе остаются только паспорт, бутылка воды без этикетки и карандаш с листом для пометок.",
    "Проверь наушники до старта Listening и подними руку, если звук тихий: после начала записи остановить её нельзя.",
    "Writing начинай с Task 2: он даёт две трети балла за секцию, а Task 1 проще дописать в сжатые 18 минут.",
    "Speaking: первые 30 секунд Part 1 работают как разминка, отвечай развёрнуто с первого вопроса."
  ]]
]},

/* ================= LISTENING ================= */
{ id: "listening", nav: "Listening", grp: "Секции", title: "Listening: 4 части, 40 вопросов",
  sub: "Сложность растёт от части к части. Цель для 8.0 – 35 верных ответов: части 1 и 2 без потерь, в частях 3 и 4 не больше пяти ошибок.",
  blocks: [
  ["table", ["Часть", "Формат", "Типичные задания", "На что обратить внимание"], [
    ["Part 1", "Бытовой диалог: бронирование, запись, аренда", "Form / note completion", "Имена по буквам, числа, поправки"],
    ["Part 2", "Монолог на бытовую тему: экскурсия, объявление", "Map labelling, multiple choice, matching", "Маршрут по карте, выбор нескольких ответов"],
    ["Part 3", "Академическая беседа 2–4 человек", "Multiple choice, matching", "Мнения и смена позиций участников"],
    ["Part 4", "Академическая лекция без паузы", "Note / summary completion", "10 пропусков подряд, плотная лексика"]
  ]],
  ["note", "Перед каждой частью на экране даётся время прочитать вопросы, после четвёртой остаётся 2 минуты на проверку. Регистр букв в ответах значения не имеет, зато орфография и число существительного влияют на результат."],
  ["task", "Form, note, table completion", "Parts 1, 4", {
    how: "Заполняешь пропуски в форме, конспекте или таблице словами из записи. Инструкция задаёт лимит, например ONE WORD ONLY или NO MORE THAN TWO WORDS AND/OR A NUMBER. Ответ сверх лимита не засчитывается, даже если смысл верный.",
    strat: [
      "За время на чтение определи для каждого пропуска часть речи и тип ответа: число, дата, имя, существительное во множественном числе.",
      "Выдели слова до и после пропуска: в записи прозвучит их перефраз, дословное совпадение встречается редко.",
      "Пиши ответ сразу после того, как услышала, и переводи взгляд на следующий пропуск.",
      "В 2 минуты проверки сверь орфографию и лимит слов."
    ],
    traps: [
      "Говорящий называет вариант и исправляет себя: *It's on Tuesday... oh, sorry, Thursday*. Засчитывается последний вариант.",
      "Пары 13 / 30, 15 / 50: в числах на -teen ударение падает на конец (thir**TEEN**), в десятках на начало (**THIR**ty).",
      "Имена диктуют по буквам, включая double L и пары, которые путает русскоязычное ухо: A / E / I, G / J, V / W.",
      "Цена £12.50 пишется цифрами; единицы, напечатанные в форме рядом с пропуском, повторять не нужно."
    ],
    hacks: [
      "Числа и даты пиши цифрами: 3 вместо three экономит лимит и время.",
      "Не расслышала – впиши самый вероятный вариант, штрафа за ошибку нет.",
      "Число существительного подсказывает форма: *a ___* требует единственного, *several ___* множественного.",
      "Даты пиши в одном формате, например 21 March."
    ],
    phrTitle: "Лексика Part 1",
    phr: [["deposit", "залог, предоплата"], ["reference number", "номер брони или заявки"], ["postcode", "почтовый индекс"], ["en-suite (bathroom)", "номер с собственной ванной"], ["membership fee", "членский взнос"], ["off-peak", "в часы низкой загрузки, дешевле"], ["opening hours", "часы работы"], ["parking permit", "разрешение на парковку"], ["proof of address", "подтверждение адреса"], ["fully booked", "все места заняты"]],
    drill: "Набор «Part 1: запись в спортивный центр» в разделе Практика. Отдельно тренируй диктовку по буквам: проговаривай себе 10 английских фамилий и записывай на слух."
  }],
  ["task", "Multiple choice", "Parts 2, 3", {
    how: "Выбираешь один ответ из трёх или два-три из пяти. В записи обычно звучат все варианты, и только один точно отвечает на вопрос.",
    strat: [
      "Выдели ключевые слова вопроса и сократи каждый вариант до 2–3 слов.",
      "Отмечай вариант в момент, когда говорящий соглашается с ним или подтверждает его: первое упоминание часто оказывается ловушкой.",
      "При выборе двух ответов из пяти порядок букв не важен."
    ],
    traps: [
      "Все три варианта звучат в записи, два из них отвергаются словами *but*, *however*, *actually*, *that was the case before*.",
      "В Part 3 один студент предлагает идею, второй её отклоняет: ответ берётся из итогового решения."
    ],
    hacks: [
      "Слова-сигналы смены ответа: *Actually*, *Well, in fact*, *I thought so too, but*, *That used to be the case*.",
      "Если вопрос про мнение конкретного человека, следи за его голосом: в Part 3 мнения часто расходятся."
    ]
  }],
  ["task", "Map, plan, diagram labelling", "Part 2", {
    how: "Отмечаешь места на карте или плане буквами из списка. Говорящий ведёт маршрут от исходной точки, места называет по порядку движения.",
    strat: [
      "Найди точку старта (You are here, вход) и стороны света.",
      "Заметь ориентиры рядом с каждым пустым местом: маршрут будут описывать через них.",
      "Поверни карту в голове по направлению движения говорящего: left и right отсчитываются от него."
    ],
    phrTitle: "Пространственная лексика",
    phr: [["opposite", "напротив"], ["adjacent to", "рядом, вплотную к"], ["diagonally across from", "наискосок от"], ["at the far end of", "в дальнем конце"], ["go past", "пройти мимо"], ["bear left / right", "держаться левее / правее"], ["at the junction", "на перекрёстке"], ["in the north-east corner", "в северо-восточном углу"], ["halfway along", "на полпути вдоль"], ["just beyond", "сразу за"]],
    hacks: ["Подпиши на листе пометками все объекты, которые уже обозначены на карте: каждое сказанное название станет ориентиром."]
  }],
  ["task", "Matching", "Parts 2, 3", {
    how: "Сопоставляешь список вариантов (людей, мест, мнений) с утверждениями. Вариантов больше, чем вопросов.",
    strat: ["Держи перед глазами список вариантов A–G: в записи звучат их перефразы.", "Вопросы идут по порядку записи, варианты в любом порядке."],
    traps: ["Синонимы вместо слов из списка: *cost-effective* вместо *cheap*, *time-consuming* вместо *slow*, *hands-on* вместо *practical*."]
  }],
  ["task", "Sentence, summary, flow-chart completion; short answer", "Parts 3, 4", {
    how: "Дополняешь предложения, конспект или схему процесса словами из записи. Ответ должен грамматически вставать в пропуск.",
    strat: ["Прочитай предложение с пропуском целиком и предскажи ответ.", "Part 4 идёт без паузы: заголовки конспекта совпадают с частями лекции, по ним ориентируйся, где ты."],
    phrTitle: "Сигнальные фразы лекции",
    phr: [["Today I'd like to look at...", "тема лекции"], ["Let's turn to... / Moving on to...", "новый раздел конспекта"], ["The main reason for this is...", "сейчас прозвучит причина"], ["A case in point is...", "сейчас прозвучит пример"], ["What this means is...", "перефраз, ответ часто здесь"], ["Contrary to popular belief...", "опровержение распространённого мнения"], ["The key factor here is...", "главный фактор, частый ответ"], ["To sum up...", "итог, последний пропуск"]],
    hacks: ["Пропуски Part 4 в основном существительные: проверь, стоит ли перед пропуском артикль или прилагательное."]
  }],
  ["tips", "Общие приёмы Listening", [
    "Тренируйся на записях с британским, австралийским и новозеландским акцентами: Cambridge IELTS 15–20 дают полный набор.",
    "Веди словарь ошибок орфографии. Самые частые: accommodation, environment, government, necessary, Wednesday, February, questionnaire, library, temperature, separate.",
    "Подкасты слушай на скорости 1.25: после этого запись на экзамене звучит спокойнее.",
    "После каждого теста переслушай запись с транскриптом и найди место, где прозвучал каждый пропущенный ответ."
  ]]
]},

/* ================= READING ================= */
{ id: "reading", nav: "Reading", grp: "Секции", title: "Reading: 3 текста, 40 вопросов, 60 минут",
  sub: "Тексты взяты из журналов, книг и газет уровня New Scientist и The Economist. С R29 по TOEFL реальная цель 37+ верных.",
  blocks: [
  ["table", ["Текст", "Характер", "Время", "Частые задания"], [
    ["Passage 1", "Описательный, факты", "17 мин", "True/False/Not Given, completion"],
    ["Passage 2", "С аргументацией", "20 мин", "Matching headings, matching information"],
    ["Passage 3", "Академический, мнения автора", "23 мин", "Yes/No/Not Given, multiple choice, summary"]
  ]],
  ["note", "В True/False/Not Given, sentence completion, multiple choice и short answer ответы идут по порядку текста. Matching information и matching features требуют поиска по всему тексту, поэтому их удобнее делать последними."],
  ["task", "True / False / Not Given", "все тексты", {
    how: "Сравниваешь утверждение с фактами текста. TRUE: текст говорит то же самое. FALSE: текст говорит противоположное. NOT GIVEN: сведений для проверки в тексте нет.",
    strat: [
      "Выдели в утверждении слова, которые трудно перефразировать: имена, даты, числа, термины. По ним найди место в тексте.",
      "Прочитай найденное предложение и одно-два соседних целиком.",
      "Сравни утверждение по частям: кто, что делает, сколько, когда. Расхождение в одной части даёт FALSE или NOT GIVEN.",
      "Спроси себя, противоречит ли текст утверждению: противоречие означает FALSE, отсутствие сведений означает NOT GIVEN."
    ],
    traps: [
      "Квантификаторы: *all / most / some*, *always / often*, *the first / one of the first*.",
      "Сравнение: текст называет два факта, утверждение их сравнивает (*more popular than*), а в тексте сравнения нет → NOT GIVEN.",
      "Знания о мире не используются: верное в жизни утверждение без опоры в тексте получает NOT GIVEN.",
      "Причинная связь: утверждение добавляет *because*, а в тексте два факта стоят рядом без связи → NOT GIVEN."
    ],
    hacks: [
      "Поиск дольше 90 секунд обычно означает NOT GIVEN: ставь его и двигайся дальше.",
      "Если найдены ответы 3 и 5, ответ 4 лежит в тексте между ними."
    ],
    extra: [["table", ["Текст", "Утверждение", "Ответ"], [
      ["The bridge, completed in 1932, was the longest in the region.", "The bridge was built in the 1930s.", "TRUE"],
      ["Most residents opposed the plan.", "The majority of residents supported the plan.", "FALSE"],
      ["The museum attracts 2 million visitors a year.", "It is the most visited museum in the country.", "NOT GIVEN"]
    ]]]
  }],
  ["task", "Yes / No / Not Given", "Passage 3", {
    how: "Тот же механизм, только сравниваешь утверждение с мнением автора. YES: автор так считает. NO: автор считает противоположное. NOT GIVEN: автор этот вопрос не оценивает.",
    strat: ["Ищи оценочную лексику: *unfortunately, clearly, it is doubtful, arguably, overestimated, misguided*.", "Отделяй позицию автора от чужих: *critics argue*, *some researchers claim* передают мнения других людей."],
    traps: ["Автор пересказывает чужую позицию, а затем возражает ей: ответ определяется его собственным выводом."]
  }],
  ["task", "Matching headings", "Passage 2, 3", {
    how: "Подбираешь заголовок к абзацу из списка, где заголовков больше, чем абзацев.",
    strat: [
      "Делай это задание первым для текста: оно даёт карту абзацев и ускоряет остальные вопросы.",
      "Для абзаца читай первое и последнее предложение, середину по диагонали. Сформулируй мысль абзаца в 3–5 словах.",
      "Выбирай заголовок, который описывает абзац целиком; заголовок про одну деталь обычно ловушка.",
      "Вычеркивай использованные заголовки и пример из инструкции."
    ],
    traps: ["Заголовок повторяет слово из абзаца, но говорит о другом.", "Два похожих заголовка: один о проблеме, другой о её решении."],
    hacks: ["Начинай с коротких и очевидных абзацев, сложные оставь на конец, когда список сократится.", "Абзацы с примерами и цифрами часто получают заголовки вида *Evidence of...*, *An example of...*."]
  }],
  ["task", "Matching information", "Passage 2", {
    how: "Определяешь, в каком абзаце содержится указанная информация. Одна буква может подходить к нескольким вопросам.",
    strat: ["Делай после остальных заданий к тексту, когда содержание абзацев уже знакомо.", "Смотри на тип информации в формулировке: *a reference to*, *an example of*, *a comparison between*, *a prediction about*."],
    traps: ["Информация может уместиться в одну фразу в середине абзаца, ответы идут вразнобой."]
  }],
  ["task", "Matching features, sentence endings", "Passage 2, 3", {
    how: "Features: соединяешь утверждения с людьми, датами или организациями. Sentence endings: подбираешь окончание к началу предложения.",
    strat: ["В features найди в тексте все имена из списка и выдели их, затем сверяй утверждения.", "В sentence endings сначала отсеки окончания, которые не подходят грамматически."]
  }],
  ["task", "Summary, note, table, flow-chart, sentence completion", "все тексты", {
    how: "Вписываешь слова из текста с соблюдением лимита или выбираешь их из банка слов.",
    strat: ["Определи часть речи для каждого пропуска.", "Найди участок текста, который пересказывает summary: обычно это 1–2 абзаца.", "С банком слов ищи синонимы: в банке почти всегда перефразы."],
    traps: ["Форма слова переносится из текста без изменений: *develop* вместо *development* не засчитывается.", "Лимит NO MORE THAN TWO WORDS учитывает и артикли, если ты их впишешь."]
  }],
  ["task", "Multiple choice, short answer, diagram labelling", "все тексты", {
    how: "Multiple choice проверяет детали и главную мысль, short answer требует слов из текста, diagram labelling обычно описывает устройство или процесс.",
    strat: ["В multiple choice проверяй каждый вариант по тексту: верный вариант перефразирует, неверные искажают деталь.", "Для diagram labelling ищи абзац с описанием устройства: подписи идут в порядке описания."]
  }],
  ["phr", "Частые перефразы", [
    ["increase → rise, grow, climb, surge", "рост"], ["decrease → decline, drop, fall, shrink", "снижение"], ["important → significant, crucial, vital", "важный"],
    ["problem → issue, challenge, drawback", "проблема"], ["cause → lead to, result in, give rise to, trigger", "вызывать"], ["show → indicate, demonstrate, reveal, suggest", "показывать"],
    ["many → numerous, a wide range of, a host of", "много"], ["people → individuals, the public, residents", "люди"], ["help → assist, facilitate, contribute to", "помогать"],
    ["change → alter, modify, transform, shift", "менять"], ["start → initiate, launch, embark on", "начинать"], ["stop → cease, halt, discontinue", "прекращать"],
    ["enough → sufficient, adequate", "достаточный"], ["expensive → costly, prohibitive", "дорогой"], ["old → ancient, outdated, long-standing", "старый"], ["new → novel, innovative, unprecedented", "новый"]
  ]],
  ["tips", "Тайминг и навигация", [
    "Распределяй 17 / 20 / 23 минуты: третий текст самый трудный и требует запаса.",
    "Выделяй ключевые слова в тексте через highlight (выдели мышью, правый клик): повторный поиск займёт секунды.",
    "Не оставляй пустых полей, штрафа за ошибки нет.",
    "Первые две недели делай по 20 утверждений True/False/Not Given в день: при R29 это главный источник потерь.",
    "Читай 20 минут в день The Economist, The Guardian Long Read, New Scientist или Scientific American: из таких изданий берут тексты IELTS."
  ]]
]},

/* ================= WRITING TASK 1 ================= */
{ id: "task1", nav: "Writing Task 1", grp: "Секции", title: "Writing Task 1: описание данных",
  sub: "20 минут, от 150 слов, оптимально 170–190. Описываешь график, таблицу, процесс или карту без собственного мнения.",
  blocks: [
  ["table", ["Критерий (25%)", "Что нужно для 7.0", "Что добавляет 8.0"], [
    ["Task Achievement", "Чёткий overview главных тенденций, ключевые цифры", "Все ключевые черты освещены полно и уместно"],
    ["Coherence & Cohesion", "Логичная группировка, разнообразные связки", "Связки незаметны, абзацы выстроены последовательно"],
    ["Lexical Resource", "Лексика трендов без повторов", "Точные и менее частотные слова, редкие неточности"],
    ["Grammatical Range & Accuracy", "Сложные предложения, частые безошибочные", "Широкий набор конструкций, большинство предложений без ошибок"]
  ]],
  ["warn", "**Без overview** (общего обзора главных тенденций) Task Achievement не поднимается выше 5. Это самая частая причина низкого балла за Task 1."],
  ["h", "Структура из четырёх абзацев"],
  ["olist", [
    "**Introduction**, одно предложение: перефраз задания своими словами (*The line graph illustrates...*).",
    "**Overview**, два предложения: главная тенденция и самое крупное или заметное значение, без цифр.",
    "**Body 1**: первая группа данных с цифрами и сравнениями.",
    "**Body 2**: вторая группа данных. Группируй по логике данных: по категориям, по периодам или по сходству тенденций."
  ]],
  ["task", "Line graph: изменения во времени", "тренды", {
    how: "Несколько линий на временной оси. Главное здесь направление и скорость изменений, пики и точки пересечения.",
    strat: ["Overview: общий тренд (рост у всех / разнонаправленно) и линия-лидер.", "Body: группируй линии со сходной динамикой.", "Время глаголов по оси: прошлое для прошедших лет, will / is predicted to для прогноза."],
    tmpl: [["Шаблон line graph", `The line graph illustrates [what] in [where] between [year] and [year].

Overall, [main trend: e.g. all three figures rose], with [X] remaining the highest throughout the period. By contrast, [Y] [notable feature: fluctuated / overtook Z in 20XX].

In [year], [X] stood at [figure], considerably higher than [Y] at [figure]. Over the following [n] years, [X] climbed steadily to reach a peak of [figure] in [year], before levelling off at around [figure].

[Y], meanwhile, experienced a more erratic pattern. After dipping slightly to [figure] in [year], it surged to [figure], overtaking [Z] in [year]. By [final year], [Z] had fallen to [figure], its lowest point in the period.`]],
    traps: ["Перечислять каждую точку по годам: экзаменатор ждёт отбора ключевых данных.", "Писать overview с цифрами или в конце вместо второго абзаца: он работает и там, но во втором абзаце его труднее пропустить."],
    hacks: ["Для прогнозов: *is expected to / is projected to / is set to + verb*.", "Пересечение линий: *X overtook Y in 2015*, *X and Y converged at around 30%*."]
  }],
  ["task", "Bar chart, pie chart: сравнение", "доли и величины", {
    how: "Сравниваешь категории между собой, иногда в нескольких годах. В pie chart работаешь с долями целого.",
    strat: ["Overview: самая крупная и самая мелкая категория плюс главное изменение между годами.", "Используй язык долей: *a quarter, just under a third, the vast majority*.", "Не пересказывай легенду графика."],
    tmpl: [["Шаблон bar / pie chart", `The bar chart compares [what] across [categories] in [year(s)].

Overall, [category A] accounted for the largest share of [X], while [category B] was the least [popular / significant]. Another notable feature is that [main change between years].

In [year], [A] made up [figure / fraction], nearly [twice / three times] as much as [B] at [figure]. [C] and [D] were broadly similar, at [figure] and [figure] respectively.

By [year], the picture had changed considerably. The proportion of [A] dropped to [figure], whereas [B] almost doubled to [figure]. [D] remained virtually unchanged at around [figure].`]],
    hacks: ["*Respectively* экономит слова: *A and B stood at 20% and 35% respectively*.", "Умножение и доли: *twice as high as, three times as many as, half as much as*."]
  }],
  ["task", "Table", "много цифр", {
    how: "Много данных без визуальной подсказки. Отбор ключевых чисел здесь важнее всего.",
    strat: ["Найди в каждой строке и колонке максимум и минимум, отметь их на листе.", "Overview: самое высокое и самое низкое значение плюс общая тенденция, если есть годы.", "В тексте используй 8–12 чисел, больше перегружает."],
    tmpl: [["Шаблон table", `The table provides information about [what] in [number] countries in [year(s)].

Overall, [country A] had the highest [X] in every category, whereas [country B] recorded the lowest figures. It is also clear that spending on [category] was the largest item for all [countries].

Looking at [category 1], [A] led with [figure], followed by [C] at [figure]. [B], by contrast, spent only [figure], less than half the figure for [A].

As for [category 2], the figures were more evenly distributed, ranging from [figure] in [B] to [figure] in [D]. The most striking difference was in [category 3], where [A] spent [figure], [n] times as much as [B].`]]
  }],
  ["task", "Process diagram", "этапы, пассив", {
    how: "Схема производства или природного цикла. Описываешь этапы по порядку, в основном в пассивном залоге.",
    strat: ["Посчитай этапы и найди начало и конец: overview сообщает их число и тип процесса (линейный или цикл).", "Распредели этапы на два абзаца примерно поровну.", "Пиши в Present Simple Passive, сохраняй все подписи схемы."],
    tmpl: [["Шаблон process", `The diagram illustrates the process by which [product] is produced from [raw material] / the stages in [natural cycle].

Overall, there are [number] main stages, beginning with [first stage] and ending with [final stage]. The process is [linear / cyclical] and involves [both natural and man-made stages / several pieces of equipment].

At the first stage, [raw material] is [collected / harvested] and then transported to [place], where it is [cleaned / sorted]. Next, it is [crushed / heated] in [equipment] until [result].

Following this, the [mixture] is [poured / filtered] into [container]. Once it has [cooled / dried], it is [packaged / cut], after which it is [delivered] to [destination].`]],
    phrTitle: "Связки этапов",
    phr: [["at the first / initial stage", "на первом этапе"], ["subsequently", "впоследствии"], ["once + present perfect", "после того как (once it has cooled)"], ["after which", "после чего"], ["prior to being + V3", "перед тем как (prior to being packed)"], ["the final stage involves", "заключительный этап включает"], ["the cycle then repeats itself", "цикл повторяется"]]
  }],
  ["task", "Map: изменения территории", "до / после", {
    how: "Две или три карты одного места в разные годы. Описываешь, что построили, снесли, расширили, перенесли.",
    strat: ["Overview: общий характер изменений (урбанизация, превращение в туристическую зону) и что осталось неизменным.", "Body: группируй по зонам карты (север, юг) или по типу изменений.", "Времена: Past Simple Passive и Present Perfect для изменений к текущему году."],
    tmpl: [["Шаблон maps", `The maps illustrate the changes that took place in [place] between [year] and [year].

Overall, the area was transformed from a largely [rural / residential] area into a [modern / commercial] one, with the addition of [main features]. However, [feature] remained unchanged.

In the north of the [town], the [farmland] was replaced by [housing estate], and the road leading to [place] was extended. The [old building] to the east of [landmark] was demolished to make way for [new facility].

In the southern part, the most noticeable development was the construction of [feature]. In addition, [the park] was relocated to [area], while the [river / lake] in the centre remained untouched.`]],
    phrTitle: "Лексика карт",
    phr: [["was demolished / knocked down", "снесли"], ["was replaced by", "заменили на"], ["was converted into", "перестроили в"], ["was extended / expanded", "расширили"], ["was relocated to", "перенесли в"], ["made way for", "освободило место для"], ["remained unchanged / untouched", "осталось без изменений"], ["to the north-west of", "к северо-западу от"]]
  }],
  ["phr", "Лексика трендов: глаголы, существительные, наречия", [
    ["rise / increase / climb / grow", "расти (нейтрально)"], ["surge / soar / rocket", "резко вырасти"], ["edge up / creep up", "слегка подрасти"],
    ["fall / decline / decrease / drop", "снижаться"], ["plummet / plunge / slump", "резко упасть"], ["dip", "немного снизиться (кратковременно)"],
    ["fluctuate", "колебаться"], ["level off / stabilise / plateau", "выйти на плато"], ["remain stable / steady at", "оставаться на уровне"],
    ["peak at / reach a peak of", "достичь пика"], ["hit a low of / bottom out at", "достичь минимума"], ["a sharp / dramatic rise", "резкий рост"],
    ["a gradual / steady decline", "постепенное снижение"], ["a slight / marginal dip", "незначительное снижение"], ["sharply / dramatically / significantly", "резко, значительно"],
    ["steadily / gradually / consistently", "постепенно, стабильно"], ["slightly / marginally", "немного"], ["rose BY 5% / rose TO 25%", "на (разница) / до (значение)"],
    ["just over / just under", "чуть больше / чуть меньше"], ["approximately / roughly / around", "примерно"], ["a third / a quarter / the vast majority", "треть / четверть / подавляющее большинство"],
    ["percentage points", "процентные пункты (из 20% в 25% – рост на 5 п.п.)"], ["account for / make up / constitute", "составлять долю"], ["respectively", "соответственно"]
  ]],
  ["tmpl", "Модельный ответ (line graph, ~185 слов)", `Задание: The graph shows the share of electricity generated from renewable sources in Germany, Japan and Brazil between 2000 and 2020. [Данные: Brazil 85% → 80% (2010) → 84%; Germany 6% → 17% (2010) → 45%; Japan 10% → 9% (2010) → 20%]

The line graph compares the proportion of electricity produced from renewable sources in Germany, Japan and Brazil over a twenty-year period from 2000.

Overall, Brazil generated by far the largest share of its electricity from renewables throughout the period, while Germany recorded the most dramatic growth. Japan's figure remained comparatively low, although it doubled by the end of the period.

In 2000, renewables accounted for 85% of electricity in Brazil, compared with just 10% in Japan and 6% in Germany. Brazil's share dipped slightly to 80% in 2010 before recovering to 84% in 2020, so it remained broadly stable.

Germany, by contrast, saw consistent and rapid growth. Its share almost tripled to 17% in 2010 and then climbed steeply to 45% by 2020, overtaking Japan around 2005. Japan's figure fell marginally to 9% in the first decade but rose to 20% over the following ten years, which was less than half the German level.`],
  ["writer", {id: "t1", title: "Task 1 под таймер", minutes: 20, min: 150, prompts: [
    "The line graph shows the number of international students (thousands) in Canada, Australia and the UK, 2005–2025. Canada: 70 → 120 (2015) → 310. Australia: 160 → 250 (2015) → 380 (2020 dip to 300 in 2021). UK: 300 → 430 (2015) → 680.",
    "The table shows the percentage of household income spent on housing, food and transport in four countries in 2024. Germany 31 / 12 / 14; Japan 25 / 24 / 10; Brazil 22 / 27 / 18; USA 33 / 11 / 16.",
    "The pie charts compare the sources of electricity in one country in 2000 and 2025. 2000: coal 52%, gas 23%, nuclear 18%, renewables 7%. 2025: coal 12%, gas 34%, nuclear 16%, renewables 38%.",
    "The diagram shows how recycled glass bottles are made: collection at bottle banks → transport to recycling plant → sorting by colour → washing → crushing into cullet → melting with sand at 1,500°C → moulding into new bottles → filling and distribution to shops.",
    "The two maps show a coastal village in 1995 and today. 1995: fishing harbour, farmland in the north, one road, small school. Today: harbour converted into a marina, farmland replaced by hotels, new car park and footpath along the beach, school extended, a road to the airport added.",
    "The bar chart shows the average hours per week spent on unpaid domestic work by men and women in five countries (2023). Sweden: men 18, women 23; Spain: 12 / 27; Japan: 5 / 26; UK: 14 / 24; India: 4 / 30."
  ], check: ["Есть ли overview без цифр во втором абзаце?", "Отобраны ключевые данные, без перечисления каждой точки?", "Нет ли собственного мнения и объяснения причин?", "Время глаголов соответствует периоду?", "170–190 слов, четыре абзаца?"]}]
]},

/* ================= WRITING TASK 2 ================= */
{ id: "task2", nav: "Writing Task 2", grp: "Секции", title: "Writing Task 2: эссе",
  sub: "40 минут, от 250 слов, оптимально 270–300. Даёт две трети балла за Writing, поэтому на экзамене начинай с него.",
  blocks: [
  ["table", ["Критерий (25%)", "7.0", "8.0"], [
    ["Task Response", "Все части вопроса раскрыты, позиция ясна, идеи развиты", "Вопрос раскрыт полно, идеи хорошо развиты и подкреплены"],
    ["Coherence & Cohesion", "Чёткая прогрессия, связки разнообразны, иногда механичны", "Логика последовательна, связки работают незаметно, абзацы уместны"],
    ["Lexical Resource", "Менее частотная лексика, понимание коллокаций", "Широкий запас, точные значения, редкие ошибки в выборе слов"],
    ["Grammatical Range & Accuracy", "Сложные конструкции, частые предложения без ошибок", "Широкий диапазон, большинство предложений без ошибок"]
  ]],
  ["h", "Распределение 40 минут"],
  ["table", ["Этап", "Время", "Что делаешь"], [
    ["Анализ и план", "5 мин", "Тип вопроса, все его части, позиция, две главные идеи с примерами"],
    ["Текст", "30 мин", "Вступление 2–3 предложения, два основных абзаца по 5–6 предложений, вывод 2 предложения"],
    ["Проверка", "5 мин", "Артикли, согласование подлежащего и сказуемого, времена, орфография"]
  ]],
  ["h", "PEEL: как строить основной абзац"],
  ["olist", [
    "**Point**: тезис абзаца одним предложением (*The most compelling argument for X is that...*).",
    "**Explain**: почему это так, 1–2 предложения с причинно-следственной связью.",
    "**Example**: конкретный пример, исследование, страна, ситуация (*A case in point is...*).",
    "**Link**: вывод, возвращающий к вопросу (*This demonstrates that...*)."
  ]],
  ["task", "Opinion: agree / disagree, to what extent", "самый частый тип", {
    how: "Формулировки: *To what extent do you agree or disagree? Do you agree or disagree?* Нужна ясная позиция, которая держится от вступления до вывода.",
    strat: ["Выбери позицию, для которой у тебя есть два сильных аргумента, даже если в жизни думаешь иначе.", "Частичное согласие допустимо, но оно должно быть заявлено во вступлении и выдержано до конца.", "Каждый основной абзац обосновывает позицию, один из них может разбирать контраргумент с опровержением."],
    tmpl: [["Шаблон Opinion", `It is often argued that [paraphrase of the statement]. I [strongly / largely] agree with this view, since [reason 1] and [reason 2].

The most compelling argument in favour of [position] is that [reason 1]. [Explanation: this means that... / as a result...]. A case in point is [example], where [specific detail]. This clearly shows that [link back to the question].

A further reason is that [reason 2]. [Explanation]. For instance, [example]. Admittedly, some might argue that [counter-argument]. However, [rebuttal], which suggests that [link].

In conclusion, I am convinced that [restated position], because [reason 1 in short] and [reason 2 in short].`]],
    hacks: ["Позиция в первом абзаце и в выводе должна совпадать слово в слово по смыслу.", "Для частичного согласия: *While I accept that..., I believe that...*."]
  }],
  ["task", "Discussion: discuss both views and give your opinion", "два мнения + твоё", {
    how: "Нужно раскрыть обе точки зрения и высказать свою. Пропуск собственного мнения ограничивает Task Response.",
    strat: ["Абзац 2: первая точка зрения с объяснением и примером.", "Абзац 3: вторая точка зрения, которую ты разделяешь, с более сильным обоснованием.", "Мнение заяви во вступлении и повтори в выводе."],
    tmpl: [["Шаблон Discussion", `People hold differing views on whether [topic]. While some believe that [view 1], others argue that [view 2]. In my opinion, [your position].

On the one hand, those who support [view 1] point out that [reason]. [Explanation]. For example, [example]. From this perspective, [link].

On the other hand, there are strong grounds for believing that [view 2]. [Reason and explanation]. A good illustration of this is [example]. For this reason, I side with this view, as [why it outweighs view 1].

In conclusion, although [view 1] has some merit, I believe that [your position], since [main reason].`]]
  }],
  ["task", "Advantages / disadvantages", "плюсы, минусы, outweigh", {
    how: "Варианты: *What are the advantages and disadvantages?* или *Do the advantages outweigh the disadvantages?* Во втором случае нужна позиция: что перевешивает.",
    strat: ["Для outweigh: перевес объявляешь во вступлении, абзац с перевешивающей стороной делаешь длиннее.", "Для простого вопроса о плюсах и минусах позиция необязательна, но аккуратный вывод нужен."],
    tmpl: [["Шаблон Advantages / Disadvantages", `[Trend] has become increasingly common in recent years. Although this development brings certain drawbacks, I believe its benefits are more significant.

On the one hand, [trend] has some notable disadvantages. The main concern is that [disadvantage]. [Explanation and example]. Another drawback is [disadvantage 2].

On the other hand, these problems are outweighed by the advantages. First and foremost, [advantage 1], which [result]. For instance, [example]. Moreover, [advantage 2], so [result].

In conclusion, while [trend] can [disadvantage in short], I believe the advantages, particularly [main advantage], clearly outweigh the drawbacks.`]]
  }],
  ["task", "Problem / solution, causes / effects", "причины и решения", {
    how: "Вопросы: *What are the causes of this problem and what measures could be taken?* Каждая часть вопроса получает свой абзац.",
    strat: ["Две причины и два решения, каждое решение связывай с конкретной причиной.", "Решения формулируй с действующим лицом: правительство, школы, работодатели, сами люди."],
    tmpl: [["Шаблон Problem / Solution", `[Problem] has become a serious issue in many parts of the world. This essay will examine the main causes of this situation and suggest measures that could be taken to address it.

There are two principal reasons for [problem]. The first is [cause 1], which leads to [effect]. In addition, [cause 2]. For example, [example], which has resulted in [consequence].

Several steps could be taken to tackle this issue. Governments could [solution 1], which would [result]. At the same time, [institutions / individuals] should [solution 2]. A successful example of this approach is [example], where [outcome].

In conclusion, [problem] is mainly caused by [cause 1] and [cause 2]. However, if [solution 1] and [solution 2] are implemented, the situation could improve considerably.`]]
  }],
  ["task", "Two-part question", "прямые вопросы", {
    how: "Два прямых вопроса: *Why is this happening? Is this a positive or negative development?* Ответ на каждый вопрос получает отдельный абзац.",
    strat: ["Во вступлении коротко ответь на оба вопроса.", "Отвечай буквально на заданные вопросы: подмена вопроса снижает Task Response."],
    tmpl: [["Шаблон Two-part", `Nowadays, [trend]. This is largely because [answer to question 1 in short], and I believe it is a [positive / negative] development overall.

There are several reasons why [trend]. Firstly, [reason 1 + explanation]. Secondly, [reason 2], as can be seen in [example].

In my view, this trend is [positive / negative], since [main argument]. [Explanation]. For instance, [example]. Although [concession], [why your view still holds].

In conclusion, [trend] is driven by [reasons], and I consider it a [positive / negative] change because [main argument].`]]
  }],
  ["phr", "Связки по функциям", [
    ["Firstly / First and foremost", "начало перечисления"], ["Moreover / Furthermore / In addition", "добавление"], ["What is more", "более того (сильнее)"],
    ["However / Nevertheless / Nonetheless", "противопоставление"], ["Whereas / While", "сопоставление внутри предложения"], ["By contrast / Conversely", "контраст между частями"],
    ["As a result / Consequently / Therefore", "следствие"], ["This leads to / This results in", "следствие через глагол"], ["Due to / Owing to + noun", "причина"],
    ["For instance / For example / A case in point is", "пример"], ["Admittedly / Granted", "уступка"], ["In other words / That is to say", "перефраз"],
    ["In conclusion / To conclude / On balance", "вывод"], ["To a large extent / To some extent", "степень согласия"]
  ]],
  ["phr", "Позиция и хеджирование", [
    ["I am firmly convinced that", "твёрдое мнение"], ["I would argue that", "аккуратно сформулированное мнение"], ["There is little doubt that", "почти бесспорно"],
    ["It could be argued that", "можно утверждать (чужая или слабая позиция)"], ["This is not necessarily the case", "это не обязательно так"], ["tends to / is likely to", "склонен, вероятно (смягчение)"],
    ["in many cases / to a certain degree", "во многих случаях / в некоторой степени"], ["arguably", "пожалуй, можно сказать"], ["there is a growing body of evidence that", "всё больше данных показывает"],
    ["it is widely accepted that", "общепризнано"]
  ]],
  ["tmpl", "Конструкции для грамматического диапазона", `1. Условные: Were governments to invest more in public transport, congestion would ease considerably.
2. Инверсия: Not only does remote work save time, but it also reduces emissions.
   Only by investing in teachers can schools improve outcomes.
3. Cleft: What is needed is a long-term strategy. It is the cost, rather than the distance, that deters students.
4. Причастные обороты: Having been introduced in 2015, the tax has already reduced plastic use.
   Faced with rising rents, many young people leave large cities.
5. Номинализация: The introduction of the policy led to a reduction in waste. (вместо: They introduced the policy and waste fell.)
6. Пассив с безличным подлежащим: It is widely believed that... / Remote work is thought to improve productivity.
7. Относительные: Countries whose economies depend on tourism were hit hardest.
8. Модальные с perfect: The crisis could have been prevented if regulators had acted earlier.`],
  ["tmpl", "Модельное эссе (Discussion, ~290 слов)", `Задание: Some people believe environmental problems should be solved by governments, while others think individuals must take responsibility. Discuss both views and give your opinion.

Few issues divide public opinion as sharply as the question of who should bear responsibility for protecting the environment. While some argue that individual choices are decisive, I believe that governments must play the leading role, because only they can change the conditions in which those choices are made.

Those who emphasise personal responsibility point out that environmental damage is, in the end, the sum of millions of everyday decisions. If consumers chose to fly less, eat less meat and recycle consistently, demand for polluting products would fall. Campaigns against single-use plastic, for instance, began with consumer pressure before any legislation was passed. From this perspective, waiting for politicians simply delays change.

However, there are strong grounds for believing that individual action is insufficient on its own. Most emissions come from energy, industry and transport systems that individuals cannot redesign. A family may wish to drive less, but without reliable public transport this is often impossible. Governments, by contrast, can set binding targets, tax pollution and invest in infrastructure. The EU's carbon pricing scheme illustrates this: it reduced emissions from power plants far more than voluntary efforts had done. Moreover, many environmental problems, such as the pollution of rivers that cross borders, can only be addressed through agreements between states.

In conclusion, although individual choices matter and can signal public demand for change, I am convinced that governments carry the main responsibility. Without regulation and investment, even the most committed citizens have limited means of reducing their environmental impact.`],
  ["writer", {id: "t2", title: "Task 2 под таймер", minutes: 40, min: 250, prompts: [
    "Some people think universities should focus on preparing students for employment. Others believe the main purpose of higher education is knowledge for its own sake. Discuss both views and give your opinion.",
    "In many countries, a growing number of people work from home. Do the advantages of this trend outweigh the disadvantages?",
    "Governments should spend more money on public transport than on building new roads. To what extent do you agree or disagree?",
    "International tourism has damaged many historic places. What are the causes of this problem, and what can be done to solve it?",
    "Some people believe that unpaid community service should be a compulsory part of high school programmes. To what extent do you agree or disagree?",
    "Many cities are becoming increasingly crowded. Why is this happening? What problems does it create?",
    "Some argue that wealthy nations should share the cost of protecting the environment in developing countries. Discuss both views and give your opinion.",
    "Social media companies should be held legally responsible for false information published on their platforms. To what extent do you agree or disagree?",
    "More and more people choose to study abroad. Is this a positive or negative development for their home countries?",
    "The best way to reduce crime is to provide longer prison sentences. Others think there are better alternatives. Discuss both views and give your opinion.",
    "Scientific research should be carried out and controlled by governments rather than private companies. To what extent do you agree or disagree?",
    "In some countries, older people are increasingly living alone. What are the reasons for this, and is it a positive or negative development?",
    "Some people believe that learning a foreign language at school is a waste of time because translation technology is improving. To what extent do you agree or disagree?",
    "Countries should prioritise economic growth over environmental protection. To what extent do you agree or disagree?"
  ], check: ["Отвечено на все части вопроса?", "Позиция видна во вступлении и выводе и совпадает?", "В каждом основном абзаце есть тезис, объяснение и конкретный пример?", "Связки разнообразны и без повторов подряд?", "3–4 сложные конструкции из списка выше?", "270–300 слов, проверены артикли и согласование?"]}]
]},

/* ================= SPEAKING ================= */
{ id: "speaking", nav: "Speaking", grp: "Секции", title: "Speaking: три части, 11–14 минут",
  sub: "Живой экзаменатор оценивает беглость, лексику, грамматику и произношение. Для S21 по TOEFL это главная точка роста, и формат IELTS здесь удобнее: можно уточнить вопрос и выиграть пару секунд на подумать.",
  blocks: [
  ["table", ["Часть", "Время", "Формат", "Длина ответа"], [
    ["Part 1", "4–5 мин", "Вопросы о тебе: учёба, работа, дом, увлечения, повседневные темы", "2–4 предложения, 15–25 сек"],
    ["Part 2", "3–4 мин", "Карточка с темой, 1 минута на заметки, монолог 1–2 минуты, 1–2 уточняющих вопроса", "Полные 2 минуты"],
    ["Part 3", "4–5 мин", "Абстрактная дискуссия по теме карточки: общество, тенденции, сравнения", "4–6 предложений, 40–60 сек"]
  ]],
  ["table", ["Критерий (25%)", "Что слушает экзаменатор для 7.5–8.0"], [
    ["Fluency & Coherence", "Говоришь развёрнуто и без заметных усилий, редкие паузы связаны с обдумыванием содержания; связки разнообразны"],
    ["Lexical Resource", "Менее частотная и идиоматическая лексика к месту, умение перефразировать при нехватке слова"],
    ["Grammatical Range & Accuracy", "Сложные предложения, большая часть без ошибок, ошибки не мешают пониманию"],
    ["Pronunciation", "Ударения, интонация, связная речь, акцент не мешает понимать"]
  ]],
  ["task", "Part 1: интервью", "короткие ответы", {
    how: "Экзаменатор задаёт 9–12 вопросов на 2–3 темы. Первая тема обычно о работе, учёбе или доме.",
    strat: ["Формула: прямой ответ + причина + деталь или пример.", "Избегай ответов из одного слова и заученных монологов: экзаменатор прерывает и снижает оценку за неестественность.", "Используй разные времена: *I used to..., these days I..., I'm planning to...*."],
    tmpl: [["Примеры ответов Part 1", `Q: Do you work or are you a student?
A: Actually, both. I'm doing a master's in global studies, and at the same time I coordinate a bachelor's programme at a business school in Moscow. It's quite a juggling act, but the two roles complement each other surprisingly well.

Q: Do you enjoy cooking?
A: To be honest, only when I have time for it. On weekdays I tend to make something quick, like pasta, but on Sundays I like experimenting with dishes I tried while travelling, especially Chinese ones.

Q: Is there anything you would like to change about your hometown?
A: I'm from Irkutsk, near Lake Baikal, and I'd love to see better public transport there. At the moment people rely heavily on cars and minibuses, so the air in winter can get pretty smoggy.`]],
    phr: [["To be honest...", "честно говоря (естественное начало)"], ["Actually, ...", "вообще-то, на самом деле (уточнение)"], ["It depends, really. If..., then...", "зависит от ситуации"], ["I'm a big fan of...", "очень люблю"], ["It's not really my cup of tea", "это не моё"], ["I used to..., but these days...", "раньше..., а теперь..."], ["I can't say I'm an expert, but...", "не эксперт, но..."], ["Funnily enough, ...", "как ни странно"]],
    hacks: ["Не начинай каждый ответ с *Yes* или *I think*: меняй вход (*Definitely*, *Not really*, *It depends*).", "Если не поняла вопрос: *Sorry, could you repeat the question?* В Part 1 экзаменатор повторяет вопрос, перефразировать его не будет."]
  }],
  ["task", "Part 2: монолог по карточке", "2 минуты", {
    how: "Карточка с темой и 3–4 пунктами. Минута на заметки, затем говоришь 1–2 минуты, экзаменатор останавливает на двух. Для 7+ нужно говорить все 2 минуты.",
    strat: [
      "Заметки за минуту: по 2–3 ключевых слова на каждый пункт карточки и одно слово для истории или чувства в конце.",
      "Порядок: короткое вступление → пункты карточки → история с деталями → почему это важно для тебя.",
      "Растягивай через детали: место, время, люди, звуки, запахи, сравнение тогда и сейчас.",
      "Последний пункт карточки (*and explain why...*) самый ценный: отдай ему 30–40 секунд."
    ],
    tmpl: [["Каркас монолога", `Intro (10 sec): I'd like to talk about [topic], which [one-line hook].
What / who / where (30 sec): [facts from the card bullets with 2 details each]
Story (40 sec): I remember one particular [day / moment] when [what happened, with specific detail].
Why it matters (30 sec): The reason [it's important to me / I enjoyed it] is that [reflection]. Looking back, [what I learned / how I changed].
Finish (10 sec): So, all in all, [one sentence summary].`], ["Шаблон заметок на минуту", `WHO/WHAT: ...
WHEN/WHERE: ...
DETAIL 1: ...  DETAIL 2: ...
STORY: ...
WHY / FEELING: ...`]],
    phr: [["I'd like to talk about...", "вступление"], ["What really stands out in my memory is...", "что особенно запомнилось"], ["I'll never forget the moment when...", "вход в историю"], ["To give you a bit of background, ...", "контекст"], ["Looking back, I realise that...", "рефлексия"], ["It made a huge difference to...", "сильно повлияло на"], ["If I had to sum it up, ...", "подытожить"]],
    hacks: ["Банк из 10 историй (организация мероприятия, обмен в Шанхае, переезд из Иркутска, экологическая программа в США, Model BRICS, три языка, ошибка в таблице, поездка в Астану, диплом, кроссовки) закрывает почти все карточки: человек, место, событие, предмет, опыт.", "Если пункт карточки не подходит к твоей истории, ответь на него одной фразой и вернись к истории: экзаменатор оценивает язык, точность фактов он не проверяет."]
  }],
  ["task", "Part 3: дискуссия", "абстрактные темы", {
    how: "Вопросы развивают тему карточки на уровне общества: *Why do people...? How has... changed? Will... in the future?*",
    strat: ["Формула: позиция + причина + пример + альтернатива или оговорка.", "Говори об обществе и людях вообще: *people tend to, in my country, younger generations*.", "Сравнивай прошлое и настоящее, город и деревню, разные поколения: это естественно добавляет грамматический диапазон."],
    tmpl: [["Пример ответа Part 3", `Q: Why do some people prefer to study abroad?
A: I think the main reason is that it offers something a degree at home can't: you're forced to adapt to a different system and culture, which tends to make people far more independent. For example, a friend of mine who studied in Germany says the hardest and most useful lesson was simply dealing with bureaucracy in another language. That said, it's not for everyone. For some students the financial cost and the distance from family outweigh the benefits, especially if their home universities are already strong.`]],
    phr: [["I'd say the main reason is...", "главная причина"], ["It's hard to generalise, but...", "трудно обобщать, но"], ["That said, ...", "при этом"], ["On the flip side, ...", "с другой стороны"], ["Compared to my parents' generation, ...", "по сравнению с поколением родителей"], ["I suspect that in the future...", "предполагаю, что в будущем"], ["It's likely to become..., provided that...", "вероятно станет..., при условии что"], ["There's no simple answer to that, but...", "простого ответа нет, но"]],
    hacks: ["Если не знаешь ответа, говори о том, как ты рассуждаешь: *I've never really thought about it, but I suppose...*. Беглость важнее экспертности."]
  }],
  ["phr", "Выиграть время и перефразировать", [
    ["That's an interesting question. Let me think...", "пауза на 2–3 секунды"], ["I'm not sure what the exact word is, but it's a kind of...", "объяснить слово, которое забыла"], ["What I mean is...", "уточнить мысль"],
    ["Could you rephrase that, please?", "в Part 3 экзаменатор перефразирует вопрос"], ["Off the top of my head, ...", "навскидку"], ["How can I put it...", "как бы сказать"]
  ]],
  ["phr", "Естественная идиоматика (без перебора)", [
    ["a steep learning curve", "быстрое и трудное освоение нового"], ["out of my comfort zone", "вне зоны комфорта"], ["it's a double-edged sword", "палка о двух концах"],
    ["to keep up with", "успевать, не отставать"], ["to make ends meet", "сводить концы с концами"], ["to be snowed under (with work)", "завален работой"],
    ["once in a blue moon", "крайне редко"], ["to broaden my horizons", "расширить кругозор"], ["on the spur of the moment", "спонтанно"],
    ["the pros outweigh the cons", "плюсы перевешивают минусы"], ["to get the hang of something", "освоиться, наловчиться"], ["a far cry from", "совсем не похоже на"]
  ]],
  ["drill", {title: "Part 1: случайный вопрос", note: "Отвечай 15–25 секунд по формуле «ответ + причина + деталь». Запиши себя на диктофон и прослушай.", timers: [["Ответ", 25]], cards: [
    "Where do you live at the moment? What do you like about it?", "Do you prefer studying in the morning or in the evening? Why?", "How often do you use public transport?", "What kind of music do you listen to when you work?", "Do you like taking photos? What do you usually photograph?",
    "Have your reading habits changed since you were a child?", "Do you prefer shopping online or in shops?", "What's the weather usually like in your hometown?", "Is there a sport you would like to try?", "How do you usually spend your weekends?",
    "Do you think handwriting is still important?", "What was the last trip you took?", "Do you cook at home often?", "Do you like spending time outdoors?", "What kind of apps do you use most?",
    "Do you prefer to work alone or in a team?", "Did you enjoy history lessons at school?", "Is it easy to make friends in a big city?", "What do you usually do to relax?", "Would you like to learn another language?"
  ]}],
  ["drill", {title: "Part 2: карточка с таймером", note: "Минута на заметки, затем 2 минуты речи. Говори до сигнала.", timers: [["Подготовка", 60], ["Монолог", 120]], cards: [
    "Describe a time when you had to organise an event.\nYou should say: what the event was, who helped you, what problems you faced\nand explain how you felt when it was over.",
    "Describe a place you visited that was very different from your hometown.\nYou should say: where it was, when you went there, what you did there\nand explain why it felt so different.",
    "Describe a skill you learned that was difficult at first.\nYou should say: what the skill is, how you learned it, what made it difficult\nand explain how it helps you now.",
    "Describe a person who has influenced your career choices.\nYou should say: who this person is, how you know them, what they did\nand explain why they had such an influence on you.",
    "Describe a time when you made a mistake at work or university.\nYou should say: what happened, when it happened, what you did about it\nand explain what you learned from it.",
    "Describe a natural place you would like to protect.\nYou should say: where it is, what it looks like, what threatens it\nand explain why you think it should be protected.",
    "Describe a piece of research or a project you are proud of.\nYou should say: what it was about, how long it took, what the result was\nand explain why you are proud of it.",
    "Describe a time you had to speak in front of a large audience.\nYou should say: when and where it was, what you talked about, how you prepared\nand explain how you felt during the speech.",
    "Describe an item you own that is important to you.\nYou should say: what it is, how you got it, how often you use it\nand explain why it matters to you.",
    "Describe a journey that took longer than expected.\nYou should say: where you were going, how you travelled, what caused the delay\nand explain how you dealt with the situation.",
    "Describe a website or app that you find useful.\nYou should say: what it is, how you found it, what you use it for\nand explain why it is useful to you.",
    "Describe a time you received good advice.\nYou should say: who gave you the advice, what it was, whether you followed it\nand explain how it helped you."
  ]}],
  ["drill", {title: "Part 3: вопрос для дискуссии", note: "40–60 секунд: позиция, причина, пример, оговорка.", timers: [["Ответ", 60]], cards: [
    "Why do some people find it hard to speak in public?", "Should environmental education be compulsory in schools?", "How has technology changed the way people learn languages?", "Do you think international organisations are effective at solving global problems?",
    "Why do young people move from small towns to big cities?", "Is it better for governments or private companies to fund scientific research?", "How will tourism change in the next twenty years?", "What qualities make a good leader?",
    "Do people today have less free time than in the past?", "Should museums be free for everyone?", "How can cities become more environmentally friendly?", "Why do people in some countries change jobs more often than in others?",
    "What are the risks of relying too much on mobile apps?", "Is it important for countries to cooperate on protecting shared rivers and lakes?", "Do you think online friendships can be as strong as real-life ones?"
  ]}],
  ["tips", "Произношение для русскоязычных", [
    "Звук th: кончик языка между зубами, think не должен звучать как sink.",
    "Звонкие согласные на конце слова не оглушай: bad и bat, had и hat различаются по смыслу и грамматике.",
    "w и v: на w губы округляются трубочкой (west), на v верхние зубы касаются нижней губы (vest).",
    "Выделяй смысловое слово во фразе голосом: *I didn't say SHE took it* меняет смысл в зависимости от ударения.",
    "Shadowing по 10 минут в день: повторяй за диктором BBC 6 Minute English с отставанием в секунду, копируя интонацию.",
    "Проверяй ударения длинных слов на youglish.com: deVELopment, phoTOgraphy, ecoNOMic, PURchase."
  ]]
]}
],

/* ================= PRACTICE ================= */
practice: [
{ id: "l-p1", group: "Listening", title: "Part 1: запись в спортивный центр", tag: "form completion",
  script: "Good morning, Riverside Sports Centre, how can I help?\nHi, I'd like to join the centre. I'm a postgraduate student.\nOf course. Can I take your surname?\nIt's Morozova. M, O, R, O, Z, O, V, A.\nThank you. And your postcode?\nIt's S W 7, 2 A Z. Sorry, no, I've just moved. The new one is S W 9, 4 B X.\nS W 9, 4 B X, got it. Which membership are you interested in? We have standard, off-peak and student.\nStudent, please. Does that include the pool?\nThe pool, the gym and two fitness classes a week. Yoga is extra.\nFine. When could I start?\nThe earliest date is Monday the fourteenth of November.\nHmm, I'm away that week. Could I start on the twenty-first?\nNo problem, the twenty-first of November. The fee is thirty-two pounds a month, but students get a ten-pound discount for the first three months, so you'd pay twenty-two pounds.\nGreat. Do I need to bring anything?\nJust a photo for your card and your student ID. By the way, how did you hear about us?\nA friend from my course told me about you. I also saw a poster at the library, but it was my friend who convinced me.\nLovely, I'll put down friend then.",
  scriptNote: "Слушай один раз, как на экзамене. Лимит для всех ответов: NO MORE THAN TWO WORDS AND/OR A NUMBER.",
  qs: [
    {q: "Surname: ________", a: ["Morozova"], e: "Фамилию продиктовали по буквам."},
    {q: "Postcode: ________", a: ["SW9 4BX", "SW94BX"], e: "Первый индекс исправлен на новый: засчитывается последний вариант."},
    {q: "Type of membership: ________", a: ["student"], e: "Standard и off-peak названы как варианты, выбран student."},
    {q: "Fitness classes included per week: ________", a: ["2", "two"], e: "Yoga – дополнительная плата, в ответ не входит."},
    {q: "Start date: ________ November", a: ["21", "21st", "twenty-first"], e: "14-е названо первым, затем заменено на 21-е."},
    {q: "Monthly fee for the first three months: £________", a: ["22", "22.00"], e: "32 минус 10 фунтов скидки."},
    {q: "Bring a photo and ________", a: ["student ID", "a student ID", "ID"], e: "student ID укладывается в лимит двух слов."},
    {q: "Heard about the centre from a ________", a: ["friend"], e: "Poster назван, но решающим источником стал друг."}
  ], band: n => n >= 8 ? "Part 1 закрыта полностью" : n >= 6 ? "Норма для 7.0, проверь ловушки с поправками" : "Повтори разбор ловушек Part 1" },
{ id: "l-p4", group: "Listening", title: "Part 4: лекция об островах тепла", tag: "note completion",
  script: "Today I'd like to look at a phenomenon that affects almost every large city: the urban heat island. On a summer night, the centre of a city can be up to seven degrees warmer than the surrounding countryside. Why does this happen? The main reason is the materials we build with. Asphalt and concrete absorb heat during the day and release it slowly at night. A second factor is the lack of vegetation. Trees cool the air through a process called evapotranspiration, and when they are removed, that cooling disappears. Heat produced by people is the third factor: air conditioners, vehicles and factories all add warmth. Moving on to solutions. One of the most effective is the so-called cool roof, which is covered with a reflective coating. In trials in Los Angeles, cool roofs reduced indoor temperatures by around three degrees. Another approach is to plant more trees along streets, which also improves air quality. A case in point is Medellín in Colombia, where green corridors lowered local temperatures by two degrees within three years. To sum up, the heat island is largely a design problem, which means it can be solved by better design.",
  scriptNote: "Лимит: ONE WORD AND/OR A NUMBER.",
  qs: [
    {q: "City centres can be up to ____ degrees warmer at night.", a: ["7", "seven"]},
    {q: "Asphalt and concrete release heat slowly at ____.", a: ["night"]},
    {q: "Trees cool the air through ____.", a: ["evapotranspiration"], e: "Длинное слово, проверь орфографию по транскрипту."},
    {q: "Third factor: heat produced by ____.", a: ["people", "humans"]},
    {q: "Cool roofs have a ____ coating.", a: ["reflective"]},
    {q: "Los Angeles: indoor temperatures fell by about ____ degrees.", a: ["3", "three"]},
    {q: "Medellín created green ____.", a: ["corridors"], e: "Множественное число: green corridors."}
  ]},
{ id: "r-baikal", group: "Reading", title: "Passage: The lake that time protected", tag: "headings + T/F/NG + summary",
  text: "**A** Lake Baikal in southern Siberia holds roughly a fifth of the world's unfrozen surface fresh water. At 1,642 metres, it is the deepest lake on Earth, and with an age often estimated at 25 to 30 million years, it is also among the oldest. Such longevity has given evolution time to work: a majority of the lake's animal species are found nowhere else.\n**B** The most famous of these endemics is the nerpa, one of the few seals in the world that live exclusively in fresh water. How the seals reached the lake, more than 1,500 kilometres from the nearest ocean, remains debated. One theory holds that their ancestors swam up river systems during an ice age; others argue that the route has yet to be identified with confidence.\n**C** Less visible, but arguably more important, is a tiny crustacean called Epischura baikalensis. Barely a millimetre and a half long, it exists in enormous numbers and filters the upper layers of the water, consuming algae and bacteria. Scientists credit it, at least in part, with the lake's exceptional clarity, which can exceed 40 metres in spring.\n**D** In recent decades, however, the shoreline has changed. Along parts of the coast, mats of green algae known as Spirogyra have spread across the shallow bottom, displacing native sponges. Many researchers link this growth to untreated wastewater from expanding tourist settlements, although warmer water temperatures may also play a role.\n**E** Protecting the lake is complicated by geography. Around half of the water flowing into Baikal arrives via the Selenga River, much of whose basin lies in Mongolia. Pollution and dam projects upstream therefore affect the lake regardless of Russian policy, which makes cross-border cooperation essential.",
  intro: "Учебный текст в формате IELTS. Вопросы 1–4: заголовки для абзацев B–E. Список: **i** A threat to the coastal ecosystem · **ii** An unanswered question about migration · **iii** The economic value of tourism · **iv** A small organism with a large effect · **v** Why one country cannot act alone · **vi** How the lake was formed.",
  qs: [
    {q: "Paragraph B", o: ["i", "ii", "iii", "iv", "v", "vi"], a: 1},
    {q: "Paragraph C", o: ["i", "ii", "iii", "iv", "v", "vi"], a: 3},
    {q: "Paragraph D", o: ["i", "ii", "iii", "iv", "v", "vi"], a: 0, e: "Туристические поселения упомянуты как причина проблемы, абзац о самой угрозе."},
    {q: "Paragraph E", o: ["i", "ii", "iii", "iv", "v", "vi"], a: 4},
    {q: "Baikal is the deepest lake in the world.", o: ["TRUE", "FALSE", "NOT GIVEN"], a: 0, e: "the deepest lake on Earth"},
    {q: "Most animal species in Baikal also live in other lakes.", o: ["TRUE", "FALSE", "NOT GIVEN"], a: 1, e: "a majority... are found nowhere else"},
    {q: "The nerpa is the only freshwater seal in the world.", o: ["TRUE", "FALSE", "NOT GIVEN"], a: 1, e: "one of the few seals: значит, есть и другие"},
    {q: "Scientists agree on how the nerpa's ancestors reached the lake.", o: ["TRUE", "FALSE", "NOT GIVEN"], a: 1, e: "remains debated"},
    {q: "Epischura populations have declined in recent decades.", o: ["TRUE", "FALSE", "NOT GIVEN"], a: 2, e: "О численности в динамике в тексте ничего нет."},
    {q: "Spirogyra has replaced sponges in some shallow areas.", o: ["TRUE", "FALSE", "NOT GIVEN"], a: 0, e: "displacing native sponges along parts of the coast"},
    {q: "Summary: Epischura feeds on algae and ______ (ONE WORD).", a: ["bacteria"]},
    {q: "Water clarity can be more than 40 metres in ______.", a: ["spring"]},
    {q: "About half of the lake's inflow comes from the ______ River.", a: ["Selenga"]}
  ]},
{ id: "w-trend", group: "Writing", title: "Лексика и предлоги Task 1", tag: "грамматика трендов",
  qs: [
    {q: "Sales rose ____ 15% to 40%.", o: ["by", "from", "of", "at"], a: 1, e: "from... to... указывает начальную и конечную точку."},
    {q: "The figure increased ____ 5 percentage points.", o: ["by", "to", "of", "with"], a: 0, e: "by указывает разницу."},
    {q: "Unemployment reached a peak ____ 12% in 2010.", o: ["at", "of", "by", "on"], a: 1, e: "reach a peak of; peak at идёт с глаголом: it peaked at 12%."},
    {q: "There was a ____ increase in visitors.", o: ["sharply", "sharp", "sharpen", "sharpness"], a: 1, e: "Перед существительным нужно прилагательное."},
    {q: "Visitor numbers increased ____.", o: ["dramatic", "dramatically", "drama", "dramatical"], a: 1, e: "После глагола нужно наречие."},
    {q: "Coal ____ for 52% of electricity in 2000.", o: ["made up", "accounted", "constituted", "consisted"], a: 1, e: "account for + доля; made up и constituted употребляются без for."},
    {q: "By 2020, the number ____ to 300.", o: ["has risen", "had risen", "rises", "was rising"], a: 1, e: "By + год в прошлом требует Past Perfect."},
    {q: "The figures for A and B were 20% and 35% ____.", o: ["respectively", "relatively", "respectfully", "accordingly"], a: 0}
  ]},
{ id: "w-cohesion", group: "Writing", title: "Связки и грамматика Task 2", tag: "cohesion",
  qs: [
    {q: "____ remote work saves time, it can lead to isolation.", o: ["Although", "Despite", "However", "Because of"], a: 0, e: "Despite требует существительного, however не соединяет части одного предложения."},
    {q: "____ the high cost, many students choose to study abroad.", o: ["Although", "Despite", "Even though", "Whereas"], a: 1},
    {q: "Not only ____ time, but it also reduces emissions.", o: ["remote work saves", "does remote work save", "remote work does save", "saves remote work"], a: 1, e: "После Not only в начале предложения нужна инверсия."},
    {q: "Were governments ____ more, congestion would ease.", o: ["invest", "to invest", "investing", "invested"], a: 1, e: "Инвертированное условие: Were + subject + to-infinitive."},
    {q: "The government should invest in public transport. ____, it should restrict car use in city centres.", o: ["Moreover", "Nevertheless", "Whereas", "Otherwise"], a: 0},
    {q: "Tuition fees have risen sharply. ____, fewer students from low-income families apply.", o: ["Consequently", "Conversely", "Likewise", "Meanwhile"], a: 0},
    {q: "What is needed ____ a long-term strategy.", o: ["are", "is", "be", "being"], a: 1, e: "Cleft-конструкция What... is."},
    {q: "Choose the correct sentence.", o: ["The technology has changed the education.", "Technology has changed education.", "A technology has changed an education.", "The technology has changed education."], a: 1, e: "Абстрактные существительные в общем значении идут без артикля."}
  ]}
],

/* ================= DECKS ================= */
decks: [
{ id: "trends", title: "Task 1: тренды", words: [
  ["surge", "резкий рост; резко вырасти", "Sales surged to a record high in 2021."], ["plummet", "резко упасть", "Prices plummeted after the announcement."], ["plateau", "выйти на плато", "Growth plateaued at around 3%."],
  ["fluctuate", "колебаться", "The rate fluctuated between 10% and 15%."], ["dip", "небольшое снижение", "There was a slight dip in 2019."], ["peak at", "достичь пика на уровне", "Demand peaked at 80 units."],
  ["level off", "стабилизироваться", "The figure levelled off after 2015."], ["edge up", "слегка подрасти", "Inflation edged up to 2.4%."], ["bottom out", "достичь дна", "The market bottomed out in 2009."],
  ["account for", "составлять (долю)", "Coal accounted for half of all electricity."], ["respectively", "соответственно", "A and B stood at 20% and 35% respectively."], ["percentage point", "процентный пункт", "a rise of five percentage points"],
  ["the vast majority", "подавляющее большинство", "The vast majority of users were under 30."], ["marginally", "незначительно", "The share fell marginally."], ["consistently", "неизменно, стабильно", "Japan consistently recorded the lowest rate."],
  ["overtake", "обогнать", "Gas overtook coal in 2016."], ["converge", "сближаться (о линиях)", "The two lines converged at 30%."], ["a twofold increase", "двукратный рост", "There was a twofold increase in exports."],
  ["outnumber", "превосходить численно", "Women outnumbered men in every age group."], ["remain stable at", "оставаться на уровне", "The rate remained stable at 4%."]
]},
{ id: "linkers", title: "Task 2: связки", words: [
  ["moreover", "более того"], ["nevertheless", "тем не менее"], ["conversely", "напротив, наоборот"], ["consequently", "следовательно"], ["whereas", "тогда как"],
  ["owing to", "из-за, благодаря (+ сущ.)"], ["admittedly", "надо признать"], ["a case in point", "наглядный пример", "A case in point is Singapore."], ["on balance", "взвесив всё"], ["to a large extent", "в значительной степени"],
  ["notwithstanding", "несмотря на"], ["in light of", "в свете, с учётом", "In light of these findings..."], ["by the same token", "по той же логике"], ["hence", "отсюда, поэтому"], ["thereby", "тем самым", "...thereby reducing costs."]
]},
{ id: "academic", title: "Академическая лексика", words: [
  ["facilitate", "облегчать, содействовать", "Technology can facilitate learning."], ["mitigate", "смягчать, уменьшать вред", "mitigate the effects of climate change"], ["exacerbate", "усугублять", "Poverty exacerbates health problems."],
  ["undermine", "подрывать", "Corruption undermines public trust."], ["foster", "развивать, способствовать", "foster cooperation between states"], ["inevitable", "неизбежный"],
  ["detrimental", "вредный", "detrimental to public health"], ["unprecedented", "беспрецедентный"], ["prevalent", "распространённый", "Obesity is prevalent among..."],
  ["substantial", "существенный"], ["viable", "жизнеспособный, осуществимый", "a viable alternative"], ["implement", "внедрять, осуществлять", "implement a policy"],
  ["allocate", "выделять (ресурсы)", "allocate funding to schools"], ["compelling", "убедительный", "compelling evidence"], ["disproportionate", "непропорциональный", "a disproportionate impact on the poor"],
  ["incentive", "стимул", "tax incentives for green energy"], ["deterrent", "сдерживающий фактор", "Fines act as a deterrent."], ["sustainable", "устойчивый"],
  ["accountability", "подотчётность"], ["consensus", "консенсус", "There is a broad consensus that..."], ["scrutiny", "тщательная проверка", "under public scrutiny"],
  ["ubiquitous", "вездесущий", "Smartphones have become ubiquitous."], ["paramount", "первостепенный", "Safety is paramount."], ["counterproductive", "контрпродуктивный"]
]},
{ id: "topics", title: "Темы эссе и Part 3", words: [
  ["carbon footprint", "углеродный след"], ["renewable energy", "возобновляемая энергия"], ["biodiversity loss", "утрата биоразнообразия"], ["deforestation", "вырубка лесов"],
  ["curb emissions", "ограничить выбросы"], ["a binding agreement", "обязывающее соглашение"], ["transboundary pollution", "трансграничное загрязнение"],
  ["tuition fees", "плата за обучение"], ["vocational training", "профессиональное обучение"], ["rote learning", "зубрёжка"], ["critical thinking skills", "навыки критического мышления"], ["lifelong learning", "обучение на протяжении жизни"],
  ["digital literacy", "цифровая грамотность"], ["automation", "автоматизация"], ["data privacy", "защита персональных данных"], ["misinformation", "дезинформация"], ["screen time", "экранное время"],
  ["urban sprawl", "расползание городов"], ["affordable housing", "доступное жильё"], ["traffic congestion", "пробки"], ["public amenities", "общественная инфраструктура (парки, библиотеки)"],
  ["income inequality", "неравенство доходов"], ["social cohesion", "социальная сплочённость"], ["an ageing population", "стареющее население"], ["brain drain", "утечка мозгов"],
  ["sedentary lifestyle", "малоподвижный образ жизни"], ["preventive healthcare", "профилактическая медицина"], ["work-life balance", "баланс работы и жизни"], ["job security", "стабильность занятости"],
  ["globalisation", "глобализация"], ["cultural homogenisation", "культурная унификация"], ["mass tourism", "массовый туризм"]
]},
{ id: "speaking", title: "Speaking: разговорное", words: [
  ["a steep learning curve", "трудное и быстрое освоение"], ["out of my comfort zone", "вне зоны комфорта"], ["a double-edged sword", "палка о двух концах"], ["to make ends meet", "сводить концы с концами"],
  ["snowed under", "завален делами"], ["once in a blue moon", "крайне редко"], ["on the spur of the moment", "спонтанно"], ["to get the hang of", "освоиться, наловчиться"],
  ["a far cry from", "совсем не похоже на"], ["off the top of my head", "навскидку"], ["it's not my cup of tea", "это не моё"], ["to broaden my horizons", "расширить кругозор"],
  ["hands-on experience", "практический опыт"], ["to juggle", "совмещать, жонглировать (делами)", "I juggle work and study."], ["to be into something", "увлекаться чем-то"], ["a go-to place", "место, куда всегда идёшь"]
]}
],

/* ================= RESOURCES ================= */
resources: [
{ group: "Официальные материалы", items: [
  ["IELTS.org", "https://ielts.org", "Официальный сайт: формат, образцы заданий, публичные band descriptors для Writing и Speaking (раздел о баллах)."],
  ["British Council: Take IELTS", "https://takeielts.britishcouncil.org", "Бесплатные пробные тесты, курс Road to IELTS и подготовка IELTS Ready для записавшихся на экзамен."],
  ["IDP IELTS", "https://ielts.idp.com", "Пробные задания, вебинары, запись на компьютерный тест."],
  ["Cambridge IELTS 15–20 Academic", "https://www.google.com/search?q=Cambridge+IELTS+20+Academic+with+answers", "Реальные экзаменационные тесты прошлых лет с ответами и транскриптами. Главный источник пробников."],
  ["IELTS Online Tests", "https://ieltsonlinetests.com", "Тесты Cambridge в компьютерном интерфейсе с таймером и автоматической проверкой Listening и Reading."]
]},
{ group: "Writing и Speaking", items: [
  ["IELTS Simon", "https://ielts-simon.com", "Бывший экзаменатор: модельные ответы Task 1 и Task 2 уровня 9, ежедневные короткие уроки."],
  ["IELTS Liz", "https://www.ieltsliz.com", "Разбор каждого типа заданий, темы Speaking, модельные ответы."],
  ["IELTS Advantage", "https://www.ieltsadvantage.com", "Стратегии Writing: структура абзацев, планирование, типичные ошибки на 6.5–7."],
  ["Academic Phrasebank (Manchester)", "https://www.phrasebank.manchester.ac.uk", "Академические фразы по функциям: сравнение, причина, оговорка, вывод. Лучший источник структур для эссе."],
  ["Официальные Speaking-сэмплы", "https://www.youtube.com/results?search_query=IELTS+speaking+test+band+8+Cambridge+official", "Видео реальных интервью с оценкой экзаменатора: послушай, как звучит 7.5–8."],
  ["Keith O'Hare: IELTS Speaking", "https://www.youtube.com/results?search_query=Keith+O%27Hare+IELTS+speaking", "Бывший экзаменатор о Speaking: естественные ответы, Part 2, произношение."],
  ["E2 IELTS", "https://www.youtube.com/results?search_query=E2+IELTS+academic", "Стратегии по всем секциям, разбор Reading и Listening."]
]},
{ group: "Лексика и структуры", note: "Добавляй найденное через вкладку «Добавить» в Словаре: можно вставить сразу список в формате `слово ; перевод ; пример`.", items: [
  ["English Vocabulary Profile", "https://www.englishprofile.org/wordlists/evp", "Уровень CEFR каждого слова и значения. Для 8.0 ищи C1–C2 варианты привычных слов."],
  ["Oxford 3000/5000 и OPAL", "https://www.oxfordlearnersdictionaries.com/wordlists/opal", "Oxford Phrasal Academic Lexicon: академические слова и фразы для письма и речи, с уровнями."],
  ["Cambridge Dictionary", "https://dictionary.cambridge.org", "Значения, произношение, примеры и уровни слов."],
  ["OZDIC (Oxford Collocations)", "https://ozdic.com", "Сочетаемость: какие глаголы и прилагательные идут с нужным существительным."],
  ["Academic Word List (EAP Foundation)", "https://www.eapfoundation.com/vocab/academic/awllists/", "570 семей академических слов, разбитых на 10 подсписков."],
  ["Ludwig", "https://ludwig.guru", "Проверка, звучит ли фраза естественно: поиск по корпусу качественных текстов."],
  ["SkELL", "https://skell.sketchengine.eu", "Бесплатный корпус: примеры употребления и типичные сочетания слова."],
  ["Youglish", "https://youglish.com", "Произношение слова в сотнях реальных видео."],
  ["Power Thesaurus", "https://www.powerthesaurus.org", "Синонимы с рейтингом употребимости для перефраза."],
  ["Quizlet", "https://quizlet.com", "Готовые наборы IELTS-лексики; экспортируются в этот словарь списком."],
  ["Anki", "https://apps.ankiweb.net", "Интервальные повторения; экспорт CSV из словаря загружается в Anki через Import."]
]},
{ group: "Грамматика", items: [
  ["Advanced Grammar in Use (Hewings)", "https://www.google.com/search?q=Advanced+Grammar+in+Use+Hewings", "Грамматика C1 с упражнениями: инверсия, cleft, причастные обороты."],
  ["Cambridge Grammar for IELTS", "https://www.google.com/search?q=Cambridge+Grammar+for+IELTS+Hopkins", "Грамматика в контексте заданий IELTS, с аудио."],
  ["Purdue OWL", "https://owl.purdue.edu", "Академическое письмо: пунктуация, параллелизм, связность."],
  ["BBC Learning English", "https://www.bbc.co.uk/learningenglish", "Короткие уроки грамматики и лексики, подкаст 6 Minute English для shadowing."]
]},
{ group: "Чтение и аудио для ежедневной практики", items: [
  ["The Economist", "https://www.economist.com", "Стиль и лексика, близкие к Reading Passage 2–3."],
  ["The Guardian Long Read", "https://www.theguardian.com/news/series/the-long-read", "Длинные тексты для тренировки чтения на выносливость."],
  ["New Scientist", "https://www.newscientist.com", "Научно-популярные тексты, частый источник IELTS Reading."],
  ["BBC Radio 4: In Our Time", "https://www.bbc.co.uk/programmes/b006qykl", "Академические беседы для Listening Part 3–4."],
  ["TED", "https://www.ted.com", "Лекции с транскриптами для Part 4 и shadowing."]
]}
]
};
