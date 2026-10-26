/* GRE: основное содержание – разделы, задания, шаблоны, практика, колоды словаря, ресурсы.
   Как редактировать этот файл: см. README.md в корне репозитория.
   Текст пиши в двойных кавычках, элементы списков разделяй запятыми. */
window.EXAM = {
id: "gre",
title: "Тренажёр GRE",
stamp: "GRE",
heading: "GRE General Test",
tagline: "Короткий формат: Analytical Writing, Verbal, Quant · 1 час 58 минут",
target: "Цель **168V / 165Q**, AW 4.5+",
practiceIntro: "Задания в формате GRE с разбором. Отвечай под таймер: 1.5 минуты на вопрос Verbal и 1.75 минуты на вопрос Quant. Лучший результат по набору сохраняется в этом браузере.",
vocabIntro: "Колоды частотных слов GRE, корней, сигнальных слов и формул плюс твои слова. Для 168V нужен активный запас примерно в 1 500 слов: проходи колоды карточками каждый день и добавляй слова из ошибок.",
resIntro: "Официальные материалы ETS, проверенные курсы, банки задач, словари и тексты для чтения уровня GRE.",
sections: [
/* ================= OVERVIEW ================= */
{ id: "overview", nav: "Формат и план", grp: "Старт", title: "Формат, баллы и последние 5 недель",
  sub: "С сентября 2023 GRE идёт в коротком формате без нескорингового блока. Analytical Writing всегда первым, порядок Verbal и Quant случайный.",
  blocks: [
  ["table", ["Секция", "Вопросов", "Время", "На вопрос"], [
    ["Analytical Writing: Analyze an Issue", "1 эссе", "30 мин", "–"],
    ["Verbal Reasoning, блок 1", "12", "18 мин", "1.5 мин"],
    ["Verbal Reasoning, блок 2", "15", "23 мин", "~1.5 мин"],
    ["Quantitative Reasoning, блок 1", "12", "21 мин", "1.75 мин"],
    ["Quantitative Reasoning, блок 2", "15", "26 мин", "~1.75 мин"]
  ], [1, 3]],
  ["note", "**Адаптивность по блокам.** Результат первого блока Verbal и Quant определяет сложность второго. Высокие баллы доступны только из сложного второго блока, поэтому первый блок решай с максимальной точностью. Внутри блока можно возвращаться к вопросам и менять ответы, штрафа за ошибки нет."],
  ["table", ["Шкала", "Диапазон", "Твоя цель", "Примерный перцентиль"], [
    ["Verbal", "130–170", "168", "около 98-го"], ["Quant", "130–170", "165", "около 85-го"], ["Analytical Writing", "0–6, шаг 0.5", "4.5–5.0", "80-й и выше"]
  ]],
  ["p", "Для 168V при сложном втором блоке допустимо примерно 2–3 ошибки на 27 вопросов, для 165Q около 3–4. Оценка приблизительная: ETS не публикует точную таблицу перевода."],
  ["h", "План на последние 5 недель"],
  ["p", "Рассчитан на экзамен в конце ноября – начале декабря и 2–3 часа в день вместе с IELTS. Галочки сохраняются в этом браузере."],
  ["plan", "gre5", [
    ["Неделя 1", "POWERPREP Online 1 в условиях экзамена, если ещё не сдавала. Журнал ошибок по каждому неверному ответу. Quant: две самые слабые темы по диагностике. Словарь: две группы по 30 слов в день."],
    ["Неделя 2", "Quant: смешанные сеты по 12 вопросов под таймер 21 минута. Verbal: TC и SE сеты по 10 вопросов, RC – по три трудных текста в день. Одно эссе Issue."],
    ["Неделя 3", "Сеты по сложности hard из Official Guide и GRE Prep Club. POWERPREP Online 2 в конце недели. Разбор ловушек в журнале ошибок."],
    ["Неделя 4", "POWERPREP Plus 1 с оценкой эссе. Повторное решение всех задач из журнала ошибок. Два эссе Issue под таймер 30 минут."],
    ["Неделя 5", "POWERPREP Plus 2 за 5–6 дней до экзамена, дальше только журнал ошибок, формулы и словарь. Накануне отдых."]
  ]],
  ["h", "Распорядок дня (GRE 90–120 минут)"],
  ["table", ["Блок", "Время", "Содержание"], [
    ["Словарь", "20 мин", "Карточки этого тренажёра: новые слова плюс повторение слов с уровнем 0–2"],
    ["Quant", "40–50 мин", "Сет под таймер и разбор каждой ошибки"],
    ["Verbal", "30–40 мин", "TC / SE сет или 2–3 текста RC"],
    ["Журнал ошибок", "10 мин", "Повторное решение задач, ошибки в которых сделаны неделю назад"]
  ]],
  ["tips", "Журнал ошибок", [
    "Записывай задачу, свой ответ, верный ответ и причину: незнание темы, ловушка, невнимательность, нехватка времени.",
    "Через 7 дней решай задачу заново без подсказок. Если снова ошибка, она возвращается в журнал ещё на неделю.",
    "Раз в неделю смотри статистику причин: при перевесе невнимательности добавляй проверку, при перевесе незнания уделяй время теме."
  ]]
]},

/* ================= QUANT ================= */
{ id: "quant", nav: "Quant", grp: "Секции", title: "Quantitative Reasoning",
  sub: "Школьная математика до 10 класса, сложность в формулировках и ловушках. Для 165 главная задача – ноль ошибок на лёгких вопросах и стабильный темп.",
  blocks: [
  ["table", ["Тема", "Частота", "Что повторить"], [
    ["Арифметика и свойства чисел", "высокая", "Делимость, простые числа, НОД/НОК, остатки, чётность, степени и корни"],
    ["Проценты, отношения, доли", "высокая", "Процентное изменение, последовательные изменения, смеси"],
    ["Алгебра", "высокая", "Линейные и квадратные уравнения, неравенства, модули, функции, текстовые задачи"],
    ["Статистика и анализ данных", "высокая", "Среднее, медиана, мода, квартили, стандартное отклонение, графики"],
    ["Геометрия", "средняя", "Треугольники, окружности, многоугольники, площади, координатная плоскость"],
    ["Комбинаторика и вероятность", "средняя", "Перестановки, сочетания, независимые события, «хотя бы один»"],
    ["Последовательности и нестандартные операции", "низкая", "Арифметическая и геометрическая прогрессии, функции со значками"]
  ]],
  ["task", "Quantitative Comparison", "~35% секции", {
    how: "Две величины A и B и четыре постоянных варианта: A больше, B больше, равны, определить нельзя. Чтобы ответить, достаточно сравнить величины, вычислять их до конца часто не нужно.",
    strat: [
      "Если в условии только числа без переменных, вариант D исключён: соотношение всегда определено.",
      "С переменными подставляй проверочный набор: 0, 1, −1, 1/2, −1/2, большое число. Смена соотношения при разных подстановках даёт D.",
      "Упрощай обе колонки одинаковыми действиями: прибавить, вычесть, умножить или разделить на положительное число.",
      "Сравнивай структуру выражений: 3²⁰ + 3²⁰ + 3²⁰ превращается в 3 × 3²⁰ = 3²¹."
    ],
    traps: [
      "Неявное предположение, что переменная положительная, целая или ненулевая.",
      "Квадрат числа из интервала (0, 1) меньше самого числа.",
      "Умножение или деление неравенства на отрицательное число меняет знак.",
      "Чертёж не в масштабе: углы и длины на картинке ничего не доказывают."
    ],
    hacks: ["Если два первых теста дают разные знаки, сразу ставь D и двигайся дальше.", "Для x² = 16 всегда держи в голове оба корня, ±4."]
  }],
  ["task", "Problem Solving", "~50% секции", {
    how: "Три формата: выбор одного ответа из пяти, выбор всех подходящих (select all that apply) и ввод числа (numeric entry).",
    strat: [
      "Прикинь порядок ответа до вычислений: это отсекает 2–3 варианта и ловит арифметические ошибки.",
      "Обратная подстановка: варианты упорядочены по величине, начинай с середины (C) и смотри, нужно больше или меньше.",
      "Select all that apply засчитывается только при полном совпадении: проверяй каждый вариант отдельно, ищи границы диапазона.",
      "В numeric entry перечитай вопрос перед вводом: просят x или 2x, процент или долю, округление."
    ],
    traps: ["Ответ на промежуточный шаг стоит среди вариантов.", "Единицы измерения меняются внутри задачи: минуты и часы, проценты и доли.", "Отношение 3:5 означает доли 3/8 и 5/8 от целого."],
    hacks: ["Задачи на проценты решай через множители: рост на 20% = × 1.2, падение на 15% = × 0.85.", "В задачах с переменными в вариантах подставь простое число вместо переменной и сравни результат с вариантами."]
  }],
  ["task", "Data Interpretation", "блок из 3 вопросов", {
    how: "Набор таблиц и графиков с тремя вопросами. Ловушки в единицах, масштабе и в том, к чему относится процент.",
    strat: ["30 секунд на оси, единицы, легенду и примечания до первого вопроса.", "Отвечай приближённо, если варианты далеко друг от друга.", "Процент от чего: от общего числа, от подгруппы, от прошлого года."],
    hacks: ["Data Interpretation съедает время: если первый вопрос занял больше 3 минут, отметь остальные и вернись к ним в конце блока."]
  }],
  ["tmpl", "Шпаргалка формул", `ПРОЦЕНТЫ
  Изменение % = (новое − старое) / старое × 100
  Последовательные изменения: множители перемножаются (×1.2 затем ×0.8 = ×0.96)
  Простые %: I = P·r·t      Сложные %: A = P(1 + r/n)^(nt)

СРЕДНИЕ И СТАТИСТИКА
  Сумма = среднее × количество
  Взвешенное среднее = (n1·a1 + n2·a2) / (n1 + n2)
  Медиана: середина упорядоченного ряда (при чётном числе – среднее двух средних)
  SD: +константа не меняет SD; ×k умножает SD на |k|
  Нормальное распределение: ±1 SD ≈ 68%, ±2 SD ≈ 95%

РАБОТА И ДВИЖЕНИЕ
  Вместе: 1/T = 1/a + 1/b
  Путь = скорость × время; средняя скорость = весь путь / всё время

ЧИСЛА
  Целых от a до b включительно: b − a + 1
  Сумма арифм. прогрессии: (первый + последний) / 2 × количество
  Число делителей n = p^a · q^b: (a+1)(b+1)
  a² − b² = (a − b)(a + b);  (a ± b)² = a² ± 2ab + b²

ГЕОМЕТРИЯ
  Углы n-угольника: (n − 2) × 180°
  30-60-90: x : x√3 : 2x      45-45-90: x : x : x√2
  Тройки: 3-4-5, 5-12-13, 8-15-17, 7-24-25
  Круг: S = πr², C = 2πr, дуга = (θ/360)·2πr, сектор = (θ/360)·πr²
  Расстояние: √((x2 − x1)² + (y2 − y1)²); наклон = (y2 − y1)/(x2 − x1)
  Перпендикулярные прямые: произведение наклонов = −1

КОМБИНАТОРИКА
  Сочетания C(n,k) = n! / (k!(n − k)!)   Перестановки P(n,k) = n! / (n − k)!
  P(хотя бы одно) = 1 − P(ни одного)
  Независимые события: P(A и B) = P(A)·P(B)`],
  ["tips", "Счёт и калькулятор", [
    "Экранный калькулятор соблюдает порядок действий и умеет только +, −, ×, ÷ и √. Пользуйся им для многозначных умножений и делений, остальное считай в уме: перенос руки на мышь дольше устного счёта.",
    "Выучи наизусть квадраты до 20, кубы до 10, степени двойки до 2¹⁰ и пары дробь–процент: 1/8 = 12.5%, 1/6 ≈ 16.7%, 3/8 = 37.5%, 5/6 ≈ 83.3%.",
    "Кнопка Transfer Display переносит результат калькулятора в поле numeric entry без ошибок ввода.",
    "Рисуй картинку к каждой геометрической задаче заново на листе: чертёж на экране не в масштабе."
  ]]
]},

/* ================= VERBAL ================= */
{ id: "verbal", nav: "Verbal", grp: "Секции", title: "Verbal Reasoning",
  sub: "Около половины вопросов приходится на чтение, остальное на Text Completion и Sentence Equivalence. Для 168 нужен словарь примерно в 1 500 слов и строгая дисциплина в RC.",
  blocks: [
  ["task", "Text Completion", "1–3 пропуска", {
    how: "Предложение или абзац с одним, двумя или тремя пропусками. Для каждого пропуска свой список (3 или 5 слов). Балл засчитывается только при полностью верном ответе.",
    strat: [
      "Закрой варианты и прочитай текст целиком.",
      "Найди подсказку (clue): фразу, которая описывает смысл пропуска, и сигнальное слово, которое задаёт направление.",
      "Подставь в пропуск своё слово, затем ищи ближайший синоним среди вариантов.",
      "В двух- и трёхпропусковых начинай с пропуска, у которого подсказка яснее: часто это последний."
    ],
    traps: ["Слово подходит по тону, но не по точному значению (*critical* вместо *skeptical*).", "Вариант, связанный с темой текста, но не с подсказкой."],
    hacks: ["После выбора перечитай предложение целиком со всеми словами: проверка занимает 10 секунд и ловит половину ошибок.", "Незнакомое слово в вариантах не выбирай автоматически: сначала исключи знакомые, которые точно не подходят."]
  }],
  ["task", "Sentence Equivalence", "2 ответа из 6", {
    how: "Одно предложение, один пропуск, шесть вариантов. Нужно выбрать два слова, которые дают предложению одинаковый смысл. Балл только за оба верных.",
    strat: ["Сгруппируй варианты в пары синонимов ещё до чтения предложения.", "Найди подсказку в предложении и выбери пару, которая к ней подходит.", "Слово без пары-синонима отбрасывай, даже если оно хорошо звучит в предложении."],
    traps: ["Две пары синонимов: одна подходит по смыслу, вторая противоположна. Решает направление подсказки.", "Пара «почти синонимов» с разной силой (*dislike / loathe*) обычно не даёт одинакового смысла."]
  }],
  ["task", "Reading Comprehension", "~50% секции", {
    how: "Тексты от одного абзаца до страницы: естественные науки, социальные науки, гуманитарные. Вопросы на главную мысль, детали, вывод, функцию фрагмента, усиление или ослабление аргумента, выбор предложения в тексте (select-in-passage).",
    strat: [
      "Читай ради структуры: после каждого абзаца сформулируй его роль 3–5 словами (тезис автора, чужая позиция, пример, оговорка).",
      "Отдели позицию автора от позиций других: *some historians argue* и *traditionally* обычно вводят то, с чем автор спорит.",
      "Для каждого вопроса возвращайся в текст: верный ответ подтверждается конкретной строкой, общего впечатления для выбора мало.",
      "В вопросах на вывод (inference) верный ответ звучит скромно и следует из текста почти дословно."
    ],
    traps: ["Ответ верен по смыслу в мире, но не следует из текста.", "Экстремальные слова: *always, completely, proves, solely*.", "Ответ про одну деталь в вопросе о главной идее."],
    hacks: ["Paragraph argument (короткий аргумент): найди посылку, вывод и скрытое допущение. Усиливает то, что подтверждает допущение, ослабляет то, что бьёт по нему.", "Select-in-passage: кликай предложение, затем проверь, что оно отвечает именно на формулировку вопроса.", "Длинный текст оставь на конец блока, если он идёт первым: короткие тексты дают тот же балл быстрее."]
  }],
  ["phr", "Сигнальные слова", [
    ["although / though / even though", "дальше будет контраст"], ["despite / in spite of", "контраст с причиной"], ["yet / but / however", "контраст"],
    ["paradoxically / ironically", "неожиданный контраст"], ["far from", "противоположное сказанному"], ["belied by", "противоречит видимости"],
    ["moreover / furthermore", "продолжение в ту же сторону"], ["indeed / in fact", "усиление"], ["; (точка с запятой)", "пояснение, продолжение"],
    [": (двоеточие)", "раскрытие, определение"], ["not only... but also", "усиление в ту же сторону"], ["hence / thus / therefore", "вывод"]
  ]],
  ["tips", "Словарь для 168", [
    "Пройди все группы GregMat (Vocab Mountain) и продвинутые колоды Magoosh: это около 1 500 слов, которые покрывают почти весь Verbal.",
    "Учи слова группами синонимов: SE строится на парах, поэтому ценно знать, что *laconic, terse, taciturn, reticent* стоят рядом.",
    "Корни экономят время: *loqu* (говорить) раскрывает *loquacious*, *circumlocution*, *eloquent*.",
    "Каждое незнакомое слово из ошибок добавляй во вкладку «Добавить» с примером: свои слова запоминаются быстрее списочных.",
    "Читай 20 минут в день Aeon, The Atlantic или Arts & Letters Daily: это ровно стиль RC-текстов GRE."
  ]]
]},

/* ================= AWA ================= */
{ id: "awa", nav: "Analytical Writing", grp: "Секции", title: "Analytical Writing: Analyze an Issue",
  sub: "30 минут, одно эссе на утверждение общего характера. Оценка от 0 до 6, для программ по публичной политике хватает 4.5, для запаса целься в 5.0.",
  blocks: [
  ["table", ["Балл", "Что видит проверяющий"], [
    ["6", "Ясная и тонкая позиция, убедительные примеры, логичная организация, точный и разнообразный язык"],
    ["5", "Ясная позиция, хорошо развитые доводы, логичная организация, мелкие ошибки"],
    ["4", "Позиция есть, доводы и примеры уместны, но развиты неравномерно; язык ясный"],
    ["3", "Ограниченное развитие, слабая организация или заметные ошибки"]
  ]],
  ["note", "Полный пул тем Issue опубликован на сайте ETS: экзаменационная тема берётся оттуда дословно. Прочитай список и сгруппируй темы по кластерам (образование, наука, власть и лидерство, технологии, культура), к каждому кластеру подготовь 2–3 примера."],
  ["task", "Структура эссе на 5.0", "500–600 слов", {
    how: "Позиция с оговоркой, два-три аргумента с конкретными примерами из разных областей, разбор контраргумента и вывод.",
    strat: ["3 минуты: позиция и три примера.", "22 минуты: текст.", "5 минут: проверка логики переходов и опечаток."],
    tmpl: [["Шаблон Issue", `[Intro] The claim that [restate claim] contains an important truth, yet it overlooks [limitation / condition]. While [concession], I believe that [thesis with qualification], because [reason 1] and [reason 2].

[Body 1] The strongest support for this position comes from [domain 1]. Consider [specific example: name, date, outcome]. [2–3 sentences explaining how the example proves the reason]. This case demonstrates that [link to thesis].

[Body 2] A second consideration is [reason 2]. In [domain 2], [example]. [Explanation]. Therefore, [link].

[Counterargument] Admittedly, critics might argue that [strongest opposing view], citing [their example]. This objection has merit when [condition]. However, it loses force once we recognise that [rebuttal].

[Conclusion] In sum, [restate qualified thesis]. The statement holds when [condition], but fails when [condition], which suggests that [broader implication].`]],
    hacks: ["Оговорка в тезисе (*largely, under certain conditions*) поднимает балл: проверяющие ждут понимания сложности вопроса.", "Примеры из разных областей (история, наука, политика) выглядят сильнее, чем три примера из одной."]
  }],
  ["phr", "Банк примеров под твой профиль", [
    ["Montreal Protocol (1987)", "международное соглашение, которое реально сработало: восстановление озонового слоя"],
    ["EU CBAM", "углеродный пограничный механизм ЕС: национальная политика с международным эффектом"],
    ["Закрытие Байкальского ЦБК (2013)", "конфликт экономики и экологии, роль общественного давления"],
    ["Human Genome Project vs Celera", "конкуренция ускорила научный проект, построенный на кооперации"],
    ["Sputnik (1957) и реформа образования в США", "внешний вызов как двигатель инвестиций в науку"],
    ["Challenger (1986)", "предупреждения инженеров проигнорировали: цена пренебрежения экспертами"],
    ["mRNA-вакцины", "десятилетия государственных исследований плюс частная скорость"],
    ["Linux и Википедия", "открытая кооперация против корпоративной конкуренции"],
    ["Цифровое государство Эстонии", "технологии и доверие граждан к институтам"],
    ["Реформа образования в Финляндии", "автономия учителей и долгосрочная политика"],
    ["Семмельвейс", "эксперта-новатора отвергло профессиональное сообщество"],
    ["План Маршалла", "международная помощь как инвестиция в стабильность"]
  ]],
  ["phr", "Фразы для эссе", [
    ["contains an important truth, yet overlooks", "частичное согласие"], ["This case demonstrates that", "связка пример → тезис"], ["Admittedly, critics might argue that", "вход в контраргумент"],
    ["This objection loses force once we recognise that", "опровержение"], ["The statement holds only insofar as", "условие верности"], ["In sum", "вывод"],
    ["a salient example", "яркий пример"], ["to a considerable degree", "в значительной степени"]
  ]],
  ["writer", {id: "awa", title: "Issue под таймер 30 минут", minutes: 30, min: 450, prompts: [
    "The most effective way to address global environmental problems is through international agreements rather than national policies. Write a response in which you discuss the extent to which you agree or disagree with the claim. In developing and supporting your position, consider ways in which the claim might or might not hold true.",
    "Universities should require all students to study subjects far outside their chosen field. Discuss the extent to which you agree or disagree, and address the most compelling reasons against your position.",
    "Leaders are most effective when they ignore public opinion. Discuss the extent to which you agree or disagree, and consider specific circumstances in which the claim might not hold.",
    "A nation's long-term success depends more on its scientists than on its politicians. Discuss the extent to which you agree or disagree with the claim.",
    "Technology makes people less capable of thinking independently. Discuss the extent to which you agree or disagree, using specific examples.",
    "Societies should measure progress by citizens' well-being rather than by economic output. Discuss the extent to which you agree or disagree with the recommendation and its consequences.",
    "Studying history is of little use to people who make decisions about the future. Discuss the extent to which you agree or disagree with the claim.",
    "Competition is a more powerful driver of innovation than cooperation. Discuss the extent to which you agree or disagree, considering ways in which the claim might not hold.",
    "Experts should have the final say on policy questions that require specialised knowledge. Discuss the extent to which you agree or disagree with the recommendation.",
    "The best way to understand a culture is to study its ordinary people rather than its famous figures. Discuss the extent to which you agree or disagree."
  ], check: ["Тезис с оговоркой в первом абзаце?", "В каждом основном абзаце конкретный пример с названием, датой или результатом?", "Есть разбор сильного контраргумента?", "Вывод повторяет тезис и называет условия?", "500–600 слов, переходы между абзацами?"]}]
]},

/* ================= TEST DAY ================= */
{ id: "testday", nav: "Тактика на экзамене", grp: "Секции", title: "Тактика на экзамене",
  sub: "Время, навигация внутри блока, калькулятор и сдача из дома.",
  blocks: [
  ["table", ["Ситуация", "Действие"], [
    ["Вопрос занимает больше 2.5 минут", "Mark, выбери ответ наугад, переходи дальше и вернись в конце блока"],
    ["Остаётся 1 минута", "Проставь ответы во все пустые вопросы: штрафа за ошибку нет"],
    ["Первый блок кажется лёгким", "Удвой внимание: ошибки на лёгких вопросах закрывают сложный второй блок"],
    ["Второй блок заметно сложнее", "Хороший знак: ты в верхней ветке, сохраняй темп"],
    ["Сомнение между двумя вариантами", "Выбери, отметь Mark и иди дальше; к таким вопросам возвращайся первыми"]
  ]],
  ["tips", "Навигация и обзор", [
    "Экран Review показывает отвеченные, неотвеченные и отмеченные вопросы блока: открывай его за 2 минуты до конца.",
    "Ответы меняются только внутри блока: после перехода к следующему блоку вернуться нельзя.",
    "Перерыва между секциями в коротком формате нет: воду и перекус оставь на после экзамена.",
    "В конце показывают неофициальные баллы Verbal и Quant; официальные с оценкой эссе приходят через 8–10 дней. Через ScoreSelect выбираешь, какие попытки отправлять вузам."
  ]],
  ["tips", "GRE из дома", [
    "Для пометок разрешены маленькая маркерная доска или прозрачный лист в файле с маркером, бумага запрещена. Тренируйся на том же инструменте, что будет на экзамене.",
    "Проверь компьютер и камеру официальной проверкой ETS за несколько дней до теста.",
    "Комната с закрытой дверью, пустой стол, никого рядом; телефон выключен и вне досягаемости после проверки помещения."
  ]]
]}
],

/* ================= PRACTICE ================= */
practice: [
{ id: "qc", group: "Quant", title: "Quantitative Comparison", tag: "QC",
  intro: "A и B – величины в колонках. Варианты одинаковы для всех вопросов.",
  qs: [
    {q: "x < 0. **A:** x³   **B:** x²", o: ["A больше", "B больше", "Равны", "Нельзя определить"], a: 1, e: "При x < 0 куб отрицателен, квадрат положителен."},
    {q: "0 < x < 1. **A:** x   **B:** √x", o: ["A больше", "B больше", "Равны", "Нельзя определить"], a: 1, e: "Для чисел между 0 и 1 корень больше самого числа: √0.25 = 0.5 > 0.25."},
    {q: "**A:** 30% от 60   **B:** 60% от 30", o: ["A больше", "B больше", "Равны", "Нельзя определить"], a: 2, e: "Оба равны 0.3 × 0.6 × 100 = 18."},
    {q: "**A:** среднее 17, 23 и 29   **B:** 23", o: ["A больше", "B больше", "Равны", "Нельзя определить"], a: 2, e: "Числа образуют арифметическую прогрессию, среднее равно среднему члену."},
    {q: "x² = 16. **A:** x   **B:** 4", o: ["A больше", "B больше", "Равны", "Нельзя определить"], a: 3, e: "x = 4 или x = −4."},
    {q: "Цена выросла на 20%, затем снизилась на 20%. **A:** итоговая цена   **B:** исходная цена", o: ["A больше", "B больше", "Равны", "Нельзя определить"], a: 1, e: "1.2 × 0.8 = 0.96."},
    {q: "a и b – положительные целые, a + b = 10. **A:** ab   **B:** 25", o: ["A больше", "B больше", "Равны", "Нельзя определить"], a: 3, e: "При a = b = 5 равны, при 1 и 9 A = 9. A никогда не больше 25, но может быть равно: соотношение не определено."},
    {q: "**A:** число положительных делителей 36   **B:** 9", o: ["A больше", "B больше", "Равны", "Нельзя определить"], a: 2, e: "36 = 2² × 3², делителей (2+1)(2+1) = 9."},
    {q: "**A:** 3²⁰ + 3²⁰ + 3²⁰   **B:** 3²¹", o: ["A больше", "B больше", "Равны", "Нельзя определить"], a: 2, e: "3 × 3²⁰ = 3²¹."},
    {q: "n – целое, n > 1. **A:** (−1)ⁿ   **B:** 0", o: ["A больше", "B больше", "Равны", "Нельзя определить"], a: 3, e: "При чётном n A = 1, при нечётном A = −1."}
  ]},
{ id: "ps", group: "Quant", title: "Problem Solving", tag: "PS + numeric entry",
  qs: [
    {q: "If 3x + 7 = 25, what is the value of 2x − 1?", a: ["11"], e: "x = 6, 2 × 6 − 1 = 11."},
    {q: "After a 20% discount, a jacket costs $72. What was the original price?", o: ["$86.40", "$90", "$92", "$96", "$100"], a: 1, e: "72 / 0.8 = 90. Ловушка: 72 × 1.2 = 86.40."},
    {q: "A bag contains 3 red and 5 blue marbles. Two are drawn without replacement. What is the probability that both are red?", o: ["3/28", "9/64", "3/32", "1/8", "3/56"], a: 0, e: "3/8 × 2/7 = 6/56 = 3/28."},
    {q: "The average of five numbers is 18. When one number is removed, the average of the remaining four is 16. What number was removed?", a: ["26"], e: "5 × 18 − 4 × 16 = 90 − 64 = 26."},
    {q: "Machine A completes a job in 6 hours, machine B in 3 hours. How many hours do they need working together?", o: ["1.5", "2", "2.5", "3", "4.5"], a: 1, e: "1/6 + 1/3 = 1/2 работы в час."},
    {q: "Select **all** numbers divisible by 6.", o: ["84", "98", "126", "150", "202"], a: [0, 2, 3], e: "Делится на 6 = делится на 2 и на 3 (сумма цифр кратна 3)."},
    {q: "A right triangle has angles of 30° and 60° and a hypotenuse of 10. What is the length of the longer leg?", o: ["5", "5√2", "5√3", "10√2", "10√3"], a: 2, e: "x : x√3 : 2x, 2x = 10."},
    {q: "When n is divided by 7, the remainder is 3. What is the remainder when 2n is divided by 7?", a: ["6"], e: "Остатки умножаются: 2 × 3 = 6."},
    {q: "In how many ways can a committee of 3 be chosen from 7 people?", a: ["35"], e: "C(7,3) = 7! / (3! × 4!) = 35."},
    {q: "A population grew from 40,000 to 52,000. What was the percent increase?", a: ["30", "30%"], e: "12 000 / 40 000 = 0.3."}
  ]},
{ id: "tc", group: "Verbal", title: "Text Completion", tag: "TC",
  qs: [
    {q: "Although the senator's speech was ______, praised for its brevity, her critics complained that it said little of substance.", o: ["verbose", "laconic", "incendiary", "rambling", "eloquent"], a: 1, e: "Подсказка: praised for its brevity."},
    {q: "Far from being ______, the new regulations were drafted after years of consultation with industry and scientists.", o: ["deliberate", "precipitous", "exhaustive", "popular", "controversial"], a: 1, e: "Far from разворачивает смысл: годы консультаций против поспешности."},
    {q: "The professor's reputation for ______ was well earned: she rarely missed an opportunity to challenge received wisdom, even when doing so cost her allies.", o: ["diplomacy", "iconoclasm", "pedantry", "conformity", "diffidence"], a: 1, e: "Двоеточие раскрывает: challenge received wisdom."},
    {q: "Critics who had expected the director's final film to be a (i) ______ retreat into nostalgia were surprised by its (ii) ______ engagement with contemporary politics. **Blank (i)**", o: ["comfortable", "radical", "bitter"], a: 0},
    {q: "Тот же текст. **Blank (ii)**", o: ["oblique", "unflinching", "perfunctory"], a: 1, e: "Surprised: ожидали уютную ностальгию, получили прямой разговор о политике."},
    {q: "The committee's report was so ______ that even experts struggled to extract its central recommendations.", o: ["lucid", "abstruse", "succinct", "partisan", "cursory"], a: 1},
    {q: "Her apology seemed ______ rather than heartfelt, delivered in the flat tone of someone reading a script.", o: ["perfunctory", "effusive", "sincere", "belated", "candid"], a: 0},
    {q: "The historian's account, though meticulously researched, was marred by a persistently ______ tone that made even minor disagreements sound like personal betrayals.", o: ["measured", "aggrieved", "wry", "detached", "whimsical"], a: 1, e: "Personal betrayals указывают на обиженный тон."}
  ]},
{ id: "se", group: "Verbal", title: "Sentence Equivalence", tag: "SE, 2 ответа",
  qs: [
    {q: "The scientist was ______ about the preliminary results, warning colleagues that a larger sample might overturn them.", o: ["sanguine", "circumspect", "cautious", "ebullient", "dismissive", "indifferent"], a: [1, 2]},
    {q: "Despite his ______ reputation, the critic praised the debut novel without reservation.", o: ["acerbic", "caustic", "generous", "indulgent", "obscure", "popular"], a: [0, 1], e: "Despite: репутация противоположна похвале."},
    {q: "The once ______ town has become a ghost of itself since the mine closed.", o: ["bustling", "desolate", "thriving", "remote", "ancient", "quiet"], a: [0, 2]},
    {q: "Measures intended to ______ public anxiety only seemed to intensify it.", o: ["allay", "exacerbate", "assuage", "inflame", "gauge", "ignore"], a: [0, 2], e: "Exacerbate и inflame – тоже пара, но направление противоположное: intended to... only intensified."},
    {q: "The treatise is so ______ that only a handful of specialists have read it closely.", o: ["recondite", "limpid", "abstruse", "breezy", "terse", "popular"], a: [0, 2]},
    {q: "Although initially ______ about the merger, the board eventually endorsed it with enthusiasm.", o: ["dubious", "ardent", "skeptical", "zealous", "informed", "silent"], a: [0, 2]}
  ]},
{ id: "rc", group: "Verbal", title: "Reading Comprehension: мера и рынок", tag: "RC",
  text: "Historians long described the spread of the metric system in nineteenth-century Europe as the inevitable victory of reason over custom. Recent scholarship complicates this account. In many regions, officials adopted metric units on paper while merchants continued to trade in local measures for decades, translating prices back and forth as circumstances required. These merchants were not simply clinging to habit: traditional units often encoded valuable knowledge. A bushel of grain in one valley, for instance, reflected the typical local yield and the size of the carts that carried it. The eventual success of the metric system, on this view, owed less to its logical elegance than to the expansion of national markets and railways, which made the costs of translating between local units intolerable.",
  qs: [
    {q: "The primary purpose of the passage is to", o: ["celebrate the efficiency of the metric system", "challenge a traditional explanation of a historical change", "argue that local measures were superior to metric units", "describe how railways were built in nineteenth-century Europe", "explain why merchants opposed national markets"], a: 1},
    {q: "The author suggests that merchants kept using traditional units primarily because", o: ["they were unaware of the new laws", "the units carried practical local information", "officials encouraged them to resist reform", "metric units were too difficult to calculate", "they wanted to avoid paying taxes"], a: 1},
    {q: "The example of the bushel serves to", o: ["show that traditional units were inconsistent and therefore irrational", "illustrate how local measures embodied useful knowledge", "demonstrate that grain was the most important commodity", "prove that metric units were first adopted in agriculture", "contrast urban and rural trading practices"], a: 1},
    {q: "Which of the following, if true, would most strengthen the author's account of the metric system's eventual success?", o: ["Regions connected to railways early abandoned local units sooner than isolated regions.", "Many scientists praised the metric system's logical design in the 1790s.", "Some merchants used local units in private letters.", "The bushel varied in size from valley to valley.", "Officials in several regions adopted metric units only on paper."], a: 0, e: "Автор связывает успех с рынками и железными дорогами; A подтверждает именно эту связь."}
  ]}
],

/* ================= DECKS ================= */
decks: [
{ id: "g1", title: "Частотные 1", words: [
  ["abate", "ослабевать, утихать", "The storm abated by morning."], ["aberration", "отклонение от нормы"], ["acquiesce", "молча соглашаться, уступать"], ["alacrity", "готовность, рвение", "She accepted with alacrity."],
  ["ameliorate", "улучшать"], ["anomaly", "аномалия"], ["antipathy", "неприязнь"], ["apathy", "безразличие"], ["arcane", "тайный, известный немногим"], ["assuage", "смягчать, успокаивать"],
  ["audacious", "дерзкий, смелый"], ["austere", "строгий, аскетичный"], ["banal", "банальный"], ["belie", "скрывать истинное, противоречить", "Her calm smile belied her anxiety."], ["bolster", "укреплять, поддерживать"],
  ["capricious", "капризный, непредсказуемый"], ["castigate", "сурово критиковать"], ["chicanery", "обман, махинации"], ["cogent", "убедительный"], ["complacent", "самодовольный, благодушный"],
  ["conciliatory", "примирительный"], ["corroborate", "подтверждать"], ["credulous", "легковерный"], ["cursory", "поверхностный, беглый"], ["dearth", "нехватка"],
  ["deride", "высмеивать"], ["diatribe", "обличительная речь"], ["didactic", "назидательный"], ["diffident", "неуверенный, застенчивый"], ["disparate", "разнородный, несопоставимый"],
  ["dogmatic", "догматичный"], ["eclectic", "эклектичный"], ["efficacy", "эффективность"], ["egregious", "вопиющий"], ["enervate", "лишать сил"],
  ["ephemeral", "мимолётный"], ["equivocal", "двусмысленный"], ["erudite", "эрудированный"], ["esoteric", "понятный узкому кругу"], ["exacerbate", "усугублять"]
]},
{ id: "g2", title: "Частотные 2", words: [
  ["exculpate", "снимать вину"], ["extol", "превозносить"], ["fastidious", "привередливый, дотошный"], ["fervent", "пылкий"], ["garrulous", "болтливый"],
  ["gregarious", "общительный"], ["hackneyed", "избитый, банальный"], ["iconoclast", "ниспровергатель устоев"], ["idiosyncratic", "своеобразный"], ["impetuous", "импульсивный"],
  ["indefatigable", "неутомимый"], ["ingenuous", "простодушный"], ["innocuous", "безобидный"], ["intransigent", "непримиримый"], ["laconic", "немногословный"],
  ["laudable", "похвальный"], ["lucid", "ясный"], ["magnanimous", "великодушный"], ["maverick", "независимый бунтарь"], ["mercurial", "переменчивый"],
  ["mitigate", "смягчать"], ["mollify", "успокаивать, умиротворять"], ["obdurate", "непреклонный, упрямый"], ["obsequious", "подобострастный"], ["obviate", "устранять необходимость"],
  ["paucity", "скудость"], ["pedantic", "педантичный"], ["perfunctory", "формальный, для галочки"], ["placate", "задабривать"], ["prevaricate", "увиливать"],
  ["prodigal", "расточительный"], ["propensity", "склонность"], ["quiescent", "бездействующий"], ["recalcitrant", "непокорный"], ["reticent", "сдержанный, неразговорчивый"],
  ["sanguine", "оптимистичный"], ["soporific", "усыпляющий"], ["spurious", "ложный, поддельный"], ["tenacious", "упорный"], ["torpor", "оцепенение, вялость"]
]},
{ id: "g3", title: "Продвинутые для 165+", words: [
  ["abstruse", "трудный для понимания"], ["anodyne", "безобидный, нейтральный"], ["apocryphal", "сомнительной подлинности"], ["approbation", "одобрение"], ["ascetic", "аскетичный"],
  ["assiduous", "усердный"], ["bombastic", "напыщенный"], ["burgeon", "бурно расти"], ["calumny", "клевета"], ["circumspect", "осмотрительный"],
  ["cupidity", "алчность"], ["desultory", "бессистемный"], ["dilatory", "медлительный, затягивающий"], ["disingenuous", "неискренний"], ["dissemble", "притворяться, скрывать"],
  ["ebullient", "кипучий, восторженный"], ["edify", "наставлять, просвещать"], ["encomium", "хвалебная речь"], ["fatuous", "бессмысленный, глупый"], ["gainsay", "отрицать, опровергать"],
  ["inchoate", "зачаточный, незавершённый"], ["intractable", "трудноразрешимый"], ["inveterate", "закоренелый"], ["irascible", "вспыльчивый"], ["limpid", "прозрачный, ясный"],
  ["lionize", "превозносить как знаменитость"], ["loquacious", "говорливый"], ["munificent", "щедрый"], ["nascent", "зарождающийся"], ["obstreperous", "шумный, буйный"],
  ["parsimonious", "скупой"], ["penchant", "пристрастие"], ["perspicacious", "проницательный"], ["probity", "неподкупность"], ["prosaic", "обыденный"],
  ["quixotic", "непрактично-идеалистичный"], ["recondite", "малоизвестный, глубокий"], ["sycophant", "подхалим"], ["vituperative", "бранный, оскорбительный"], ["zealot", "фанатик"]
]},
{ id: "roots", title: "Корни", words: [
  ["bene-", "хороший: benevolent, benefactor"], ["mal-", "плохой: malevolent, malign"], ["loqu / locu", "говорить: loquacious, circumlocution"], ["cred", "верить: credulous, credence"],
  ["ver", "истина: veracity, verisimilitude"], ["chron", "время: anachronism, chronic"], ["path", "чувство: apathy, antipathy"], ["phil", "любовь: philanthropy, bibliophile"],
  ["anthrop", "человек: misanthrope, anthropology"], ["morph", "форма: amorphous, metamorphosis"], ["gen", "род, рождение: genesis, progeny"], ["ambi", "оба: ambivalent, ambiguous"],
  ["circum", "вокруг: circumspect, circumvent"], ["contra / counter", "против: contravene, counterintuitive"], ["eu-", "хорошо: euphemism, eulogy"], ["dys-", "плохо: dysfunction, dystopia"],
  ["omni / pan", "всё: omniscient, panacea"], ["ten / tain", "держать: tenacious, tenable"], ["fid", "вера: fidelity, perfidious"], ["plac", "успокаивать: placate, implacable"]
]},
{ id: "math", title: "Формулы", words: [
  ["Процентное изменение", "(новое − старое) / старое × 100"], ["Последовательные изменения", "множители перемножаются: 1.2 × 0.8 = 0.96"], ["Сумма через среднее", "сумма = среднее × количество"],
  ["Взвешенное среднее", "(n₁a₁ + n₂a₂) / (n₁ + n₂)"], ["Работа вместе", "1/T = 1/a + 1/b"], ["Средняя скорость", "весь путь / всё время"],
  ["Целых от a до b", "b − a + 1"], ["Сумма арифм. прогрессии", "(первый + последний) / 2 × количество"], ["Число делителей pᵃqᵇ", "(a+1)(b+1)"],
  ["Углы n-угольника", "(n − 2) × 180°"], ["Треугольник 30-60-90", "x : x√3 : 2x"], ["Треугольник 45-45-90", "x : x : x√2"], ["Пифагоровы тройки", "3-4-5, 5-12-13, 8-15-17, 7-24-25"],
  ["Длина дуги", "(θ/360) × 2πr"], ["Сочетания C(n,k)", "n! / (k!(n−k)!)"], ["Перестановки P(n,k)", "n! / (n−k)!"], ["P(хотя бы одно)", "1 − P(ни одного)"],
  ["SD при сдвиге и масштабе", "+c не меняет SD, ×k умножает SD на |k|"], ["Нормальное распределение", "±1 SD ≈ 68%, ±2 SD ≈ 95%"], ["Разность квадратов", "a² − b² = (a − b)(a + b)"]
]}
],

/* ================= RESOURCES ================= */
resources: [
{ group: "Официальные материалы ETS", items: [
  ["ETS GRE", "https://www.ets.org/gre", "Формат, регистрация, POWERPREP Online (2 бесплатных теста) и POWERPREP Plus (платные, с оценкой эссе)."],
  ["Пул тем Analytical Writing", "https://www.google.com/search?q=GRE+issue+topic+pool+site%3Aets.org", "Полный список тем Issue: экзаменационная тема берётся из него."],
  ["Official Guide и Official Verbal / Quant", "https://www.google.com/search?q=Official+Guide+to+the+GRE+General+Test", "Единственные задачники с калибровкой реального экзамена."]
]},
{ group: "Курсы и банки задач", items: [
  ["GregMat", "https://www.gregmat.com", "Стратегии по каждому типу заданий, Vocab Mountain с группами слов, курс математики PrepSwift."],
  ["Magoosh GRE Vocabulary Flashcards", "https://gre.magoosh.com/flashcards/vocabulary", "Бесплатные карточки по уровням: common, basic, advanced."],
  ["GRE Prep Club", "https://gre.myprepclub.com", "Банк задач с обсуждениями и разборами, фильтр по сложности."],
  ["Manhattan Prep GRE", "https://www.manhattanprep.com/gre/", "5 lb Book: 1 800+ задач по темам; бесплатные материалы и пробник."],
  ["Greenlight Test Prep", "https://www.greenlighttestprep.com", "Бесплатные видеоуроки по всей математике GRE."],
  ["Khan Academy", "https://www.khanacademy.org", "Закрытие пробелов в базовой математике: статистика, вероятность, алгебра."]
]},
{ group: "Лексика и корни", note: "Добавляй слова в Словарь вкладкой «Добавить», можно списком.", items: [
  ["Merriam-Webster", "https://www.merriam-webster.com", "Американский словарь: значения и примеры ровно в том смысле, который использует GRE."],
  ["Etymonline", "https://www.etymonline.com", "Этимология слов: корни и происхождение, помогает запоминать редкие слова."],
  ["Vocabulary.com", "https://www.vocabulary.com", "Адаптивные упражнения и готовые GRE-списки."],
  ["Power Thesaurus", "https://www.powerthesaurus.org", "Синонимы для поиска пар в Sentence Equivalence."],
  ["Quizlet: GregMat groups", "https://quizlet.com/search?query=gregmat%20vocab%20group&type=sets", "Готовые наборы групп GregMat."]
]},
{ group: "Чтение уровня GRE", items: [
  ["Aeon", "https://aeon.co", "Эссе по философии, науке и обществу: ровно стиль RC."],
  ["Arts & Letters Daily", "https://www.aldaily.com", "Подборка интеллектуальных статей со всего мира."],
  ["The Atlantic", "https://www.theatlantic.com", "Аргументативные тексты для тренировки анализа позиции автора."],
  ["The New York Review of Books", "https://www.nybooks.com", "Рецензии с плотным синтаксисом, близким к гуманитарным текстам GRE."],
  ["Scientific American", "https://www.scientificamerican.com", "Научные тексты для естественнонаучных RC."]
]}
]
};
