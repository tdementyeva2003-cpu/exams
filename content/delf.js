/* DELF B2: основное содержание – разделы, задания, шаблоны, практика, колоды словаря, ресурсы.
   Как редактировать этот файл: см. README.md в корне репозитория.
   Текст пиши в двойных кавычках, элементы списков разделяй запятыми. */
window.EXAM = {
id: "delf",
title: "Тренажёр DELF B2",
stamp: "DELF B2",
heading: "DELF B2 tout public",
tagline: "Актуальный формат с 2023 года: CO и CE в виде QCM, письменное и устное эссе-аргументация",
target: "Цель **70+ / 100**, каждая часть от 15",
defaultDate: "",
practiceIntro: "Задания в формате нового DELF B2. Аудио озвучивается синтезом речи на французском: для упражнения 3 слушай один раз, для упражнений 1–2 дважды. Лучший результат сохраняется в этом браузере.",
vocabIntro: "Коннекторы, формулы письма, лексика прессы и тем PO, триггеры subjonctif плюс твои слова. Кнопка + в таблицах фраз отправляет фразу в «Мои слова».",
resIntro: "Официальные образцы France Éducation International, радио и пресса для понимания, словари и грамматические тренажёры.",
sections: [
/* ================= OVERVIEW ================= */
{ id: "overview", nav: "Формат и план", grp: "Старт", title: "Формат DELF B2 и план подготовки",
  sub: "Четыре части по 25 баллов. Диплом выдаётся при 50/100 и минимум 5 баллах в каждой части, срок действия не ограничен.",
  blocks: [
  ["table", ["Часть", "Время", "Структура", "Баллы"], [
    ["**Compréhension de l'oral**", "~30 мин", "3 упражнения, 5 аудиодокументов, 20 QCM. Упр. 1–2: документы по 2.5–3 мин, звучат дважды, по 7 вопросов. Упр. 3: три коротких документа по 60–80 сек, звучат один раз, по 2 вопроса", "25"],
    ["**Compréhension des écrits**", "60 мин", "3 упражнения, 5 текстов, 20 QCM. Упр. 1–2: тексты по 425–450 слов, по 7 вопросов. Упр. 3: три коротких мнения по 100–120 слов, 6 утверждений, нужно определить автора", "25"],
    ["**Production écrite**", "60 мин", "Аргументированный текст от 250 слов: официальное письмо, статья, эссе, сообщение на форуме", "25"],
    ["**Production orale**", "30 мин подготовки + ~20 мин", "Короткий документ-стимул: монолог с позицией (около 5–7 минут) и дебаты с экзаменатором", "25"]
  ], [3]],
  ["warn", "**Исправление к прошлому гиду.** В новом формате нет вопросов vrai/faux с цитатой-обоснованием и открытых вопросов в CO и CE: все 40 вопросов на понимание – QCM с тремя вариантами. Новый формат вводили с 2020 года, с 2023 года все сессии проходят только по нему. Монолог в PO длится около 5–7 минут, оставшееся время уходит на дебаты."],
  ["h", "Где брать баллы"],
  ["table", ["Часть", "Ожидаемый уровень", "Цель", "Главная работа"], [
    ["CO", "Средний: темп радио пока трудный", "17+", "Ежедневное аудио, числа, маркеры мнения, упражнение 3 с одним прослушиванием"],
    ["CE", "Сильная сторона", "19+", "Тренировка QCM и упражнения 3 «кто что сказал»"],
    ["PE", "Зона роста", "16+", "Жанровые шаблоны, коннекторы, subjonctif, 6–8 полных писем с проверкой"],
    ["PO", "Зона роста", "16+", "Структура монолога, банк аргументов, симуляции дебатов с преподавателем"]
  ]],
  ["h", "План: поддержка до января, основная фаза с 15 января"],
  ["plan", "delf", [
    ["Ноябрь–декабрь", "Поддерживающий режим 20–30 минут в день: Journal en français facile, одна статья Le Monde или 20 Minutes в день, карточки этого тренажёра."],
    ["До 15 января", "После закрытия заявок: регистрация на сессию в Institut français или Alliance française (запись за 4–6 недель). Пробный экзамен из пособия для стартовой точки."],
    ["Неделя 1", "CO и CE: по одному полному упражнению каждого типа в день. PE: письмо формального жанра с проверкой у преподавателя."],
    ["Неделя 2", "PO: две симуляции монолога с таймером на диктофон, одна с преподавателем. PE: статья или courrier des lecteurs."],
    ["Неделя 3", "Полный пробный экзамен. Разбор ошибок, повторение коннекторов и триггеров subjonctif."],
    ["Неделя 4", "PO: две полные симуляции с дебатами. PE: эссе для форума. CO на скорости 1.1."],
    ["Неделя 5", "Второй пробный экзамен. Банк аргументов по 6 темам проговорён вслух целиком."],
    ["Неделя 6", "Лёгкое повторение: свои шаблоны, формулы, словарь. Накануне отдых."]
  ]],
  ["tips", "Дни экзамена", [
    "Письменная часть (CO, CE, PE) идёт одним блоком около 2 ч 30 мин, устная обычно в другой день.",
    "Подготовку к PO делаешь на черновике: пиши дословно только вступление и вывод, середину тезисами.",
    "В CE начинай с упражнения 3: оно короткое, а при свежей голове атрибуция мнений идёт быстрее."
  ]]
]},

/* ================= CO ================= */
{ id: "co", nav: "Compréhension de l'oral", grp: "Секции", title: "Compréhension de l'oral",
  sub: "20 QCM на 25 баллов. Перед каждым прослушиванием даётся время на чтение вопросов.",
  blocks: [
  ["task", "Exercices 1 et 2: длинные документы", "2 прослушивания, 7 QCM", {
    how: "Интервью, репортаж или радиопередача на 2.5–3 минуты. Вопросы на общий смысл, детали, позицию говорящего и значение выражений.",
    strat: [
      "За время на чтение подчеркни в каждом вопросе слово-ключ и определи, чего ждать: цифру, причину, мнение, пример.",
      "Первое прослушивание: общий смысл и роли (кто журналист, кто гость, кто за, кто против), ответы на очевидные вопросы.",
      "Между прослушиваниями сверь, на какие вопросы ответа нет.",
      "Второе прослушивание: проверка и сложные вопросы о нюансах мнения."
    ],
    traps: [
      "Неверный вариант повторяет слова записи дословно, верный их перефразирует.",
      "Мнение журналиста или чужая цитата выдаётся за позицию гостя.",
      "Отрицание и ограничение: *ne... que* значит «только», *ne... guère* значит «почти не»."
    ],
    hacks: ["Пиши пометки в две колонки: кто говорит → что утверждает.", "Вопросы идут в порядке документа: если пропустила ответ, двигайся к следующему вопросу и вернись на втором прослушивании."]
  }],
  ["task", "Exercice 3: три коротких документа", "1 прослушивание, 2×3 QCM", {
    how: "Три документа по 60–80 секунд: объявление, свидетельство, короткая новость. Каждый звучит один раз, к каждому два вопроса.",
    strat: ["Прочитай оба вопроса к документу и предскажи ответ.", "Слушай одновременно для обоих вопросов: первый вопрос обычно о теме или цели, второй о детали или отношении.", "Отвечай сразу, как услышала: второго шанса нет."],
    hacks: ["Тренируйся на радио без повтора: RFI или France Info по одной минуте, затем перескажи три факта вслух."]
  }],
  ["phr", "Маркеры мнения и отношения", [
    ["force est de constater que", "приходится признать, что"], ["il n'en reste pas moins que", "тем не менее остаётся фактом"], ["je ne suis pas convaincu(e) que + subj.", "я не уверен(а), что"],
    ["on aurait tort de", "было бы ошибкой"], ["c'est loin d'être", "это далеко не"], ["je suis plutôt favorable à", "я скорее за"],
    ["ça me laisse perplexe", "меня это озадачивает"], ["il faut bien reconnaître que", "надо признать, что"], ["sans aller jusqu'à dire que", "не заходя так далеко, чтобы сказать"],
    ["à mon sens / selon moi", "по-моему"], ["c'est une fausse bonne idée", "идея только кажется хорошей"], ["je reste sceptique", "я остаюсь скептиком"]
  ]],
  ["tips", "Слух и числа", [
    "Французские числа отрабатывай отдельно: soixante-dix, quatre-vingt-quinze, mille neuf cent quatre-vingt-dix. Пять минут диктовки чисел в день две недели снимают проблему.",
    "Связная речь (liaison, élision) склеивает слова: слушай абзац, записывай услышанное, сверяй с транскриптом.",
    "Ежедневный рацион: Journal en français facile RFI (10 минут, есть транскрипт), затем переход на France Info и France Inter без адаптации.",
    "Скорость: две недели на 1.0, затем 1.1–1.2. После этого экзаменационная запись звучит медленнее."
  ]]
]},

/* ================= CE ================= */
{ id: "ce", nav: "Compréhension des écrits", grp: "Секции", title: "Compréhension des écrits",
  sub: "60 минут, 20 QCM. Тексты из прессы: информативные и аргументативные, плюс три коротких мнения.",
  blocks: [
  ["task", "Exercices 1 et 2: тексты по 425–450 слов", "7 QCM каждый", {
    how: "Информативный или аргументативный текст из прессы. Вопросы на главную идею, детали, намерение автора, значение выражения в контексте, тон.",
    strat: [
      "Сначала прочитай вопросы: они идут в порядке текста и служат картой.",
      "Читай текст целиком один раз ради структуры, затем возвращайся к нужному абзацу по каждому вопросу.",
      "Для вопроса о значении выражения подставь каждый вариант в предложение и проверь смысл абзаца.",
      "Для вопроса о позиции автора ищи модальность: *il semble, sans doute, il est regrettable que, heureusement*."
    ],
    traps: ["Вариант с дословным повтором слов текста при искажённом смысле.", "Вариант верен в реальности, но в тексте его нет.", "Уступка (*certes*) принимается за позицию автора: позиция идёт после *mais*."]
  }],
  ["task", "Exercice 3: кто что сказал", "6 утверждений, 3 автора", {
    how: "Три коротких текста (100–120 слов) с мнениями трёх людей на одну тему. К каждому из шести утверждений нужно найти автора.",
    strat: [
      "Прочитай три текста и запиши для каждого одну строку: позиция (за, против, условно) и главный довод.",
      "Сопоставляй утверждения со строками, затем подтверждай в тексте.",
      "Один автор может подходить к нескольким утверждениям."
    ],
    traps: ["Все три автора используют одинаковую лексику темы: решает позиция, общие слова не помогают.", "Условная позиция (*oui, à condition que*) легко путается с полным согласием."],
    hacks: ["Делай упражнение 3 первым: 10–12 минут на 6 вопросов дают быстрые баллы."]
  }],
  ["phr", "Лексика прессы", [
    ["un enjeu", "ставка, ключевой вопрос"], ["une polémique", "острый спор"], ["préconiser", "рекомендовать"], ["remettre en cause", "ставить под сомнение"],
    ["un dispositif", "механизм, система мер"], ["un sondage", "опрос"], ["la précarité", "нестабильность, бедность"], ["le pouvoir d'achat", "покупательная способность"],
    ["susciter", "вызывать (реакцию)"], ["aboutir à", "привести к"], ["en matière de", "в области"], ["à l'issue de", "по итогам"],
    ["faire face à", "столкнуться с"], ["un constat", "наблюдение, вывод"], ["désormais", "отныне"], ["une hausse / une baisse", "рост / снижение"]
  ]]
]},

/* ================= PE ================= */
{ id: "pe", nav: "Production écrite", grp: "Секции", title: "Production écrite",
  sub: "60 минут, один аргументированный текст от 250 слов. Жанр, адресат и задачи указаны в задании и проверяются первыми.",
  blocks: [
  ["table", ["Критерий официальной сетки", "Баллы"], [
    ["Respect de la consigne (жанр, объём, все пункты задания)", "2"], ["Correction sociolinguistique (регистр, формулы вежливости)", "2"],
    ["Capacité à présenter des faits", "3"], ["Capacité à argumenter une prise de position", "3"], ["Cohérence et cohésion", "3"],
    ["Étendue du vocabulaire", "2"], ["Maîtrise du vocabulaire", "2"], ["Maîtrise de l'orthographe lexicale", "1"],
    ["Choix des formes (грамматика)", "4"], ["Degré d'élaboration des phrases", "3"]
  ], [1]],
  ["note", "Почти половина баллов приходится на язык (лексика и грамматика дают 12 из 25), остальное на выполнение задания, аргументацию и связность. Текст с чёткой структурой и коннекторами при паре ошибок обгоняет безошибочный текст без аргументации."],
  ["task", "Lettre formelle", "мэру, директору, организации", {
    how: "Жалоба, запрос, возражение или предложение. Обязательны шапка, объект письма, обращение и формула вежливости в конце.",
    strat: ["Назови в первом абзаце, кто ты и почему пишешь.", "Два аргумента с примерами и одна уступка с опровержением.", "Последний абзац: конкретная просьба или предложение."],
    tmpl: [["Шаблон lettre formelle", `[Prénom NOM]
[Adresse]
                                   Monsieur le Maire / Madame la Directrice
                                   [Organisme]
                                   [Ville], le [date]

Objet : [réclamation / demande / proposition concernant ...]

Monsieur le Maire,

En tant que [habitante du quartier / étudiante / salariée], je me permets de vous écrire au sujet de [décision / projet], annoncé(e) récemment, qui suscite de vives inquiétudes.

Tout d'abord, [argument 1]. En effet, [explication + exemple concret]. Il en résulte que [conséquence].

Par ailleurs, [argument 2]. Certes, [concession : je comprends que la ville doive réduire ses dépenses], mais [réfutation].

C'est pourquoi je vous serais reconnaissante de bien vouloir [demande précise]. Il me semble également qu'il serait judicieux de [proposition alternative].

Dans l'attente de votre réponse, je vous prie d'agréer, Monsieur le Maire, l'expression de mes salutations distinguées.

[Signature]`]],
    traps: ["Обращение в конце должно повторять обращение в начале: *Monsieur le Maire ... Monsieur le Maire*.", "Без строки Objet и формулы вежливости теряются баллы за respect de la consigne и регистр."]
  }],
  ["task", "Article, courrier des lecteurs", "газета, журнал, сайт", {
    how: "Статья или письмо в редакцию с позицией по проблеме. Нужны заголовок, вступление с проблематикой, развитие и вывод.",
    tmpl: [["Шаблон article / courrier des lecteurs", `[Titre accrocheur : Télétravail : la fin d'un privilège ?]

[Chapeau : 1–2 phrases qui présentent le sujet]

Depuis quelques années, [constat]. [Fait ou chiffre : selon un sondage récent, ...]. Faut-il pour autant [problématique] ?

D'un côté, [argument opposé]. Prenons l'exemple de [exemple]. On ne peut nier que [concession].

De l'autre, [votre argument principal]. En effet, [explication]. Qui plus est, [argument complémentaire], comme le montre [exemple].

En définitive, [votre position]. Reste à savoir si [ouverture].`]]
  }],
  ["task", "Essai, contribution à un forum", "мнение и аргументы", {
    how: "Развёрнутое мнение на форуме, в блоге или в формате эссе. Регистр нейтральный, допускается обращение к читателям.",
    tmpl: [["Шаблон forum / essai", `[Titre de la contribution]

Bonjour à toutes et à tous,

Je réagis au message de [pseudo], qui affirme que [position]. Si je comprends son point de vue, je ne le partage pas entièrement.

Premièrement, [argument 1 + exemple personnel : dans mon pays / lors de mon séjour à ...].

Deuxièmement, [argument 2]. D'ailleurs, [fait / chiffre].

Il est vrai que [concession]. Néanmoins, [réfutation].

Pour conclure, je dirais que [position nuancée]. Et vous, qu'en pensez-vous ?

[Pseudo]`]]
  }],
  ["phr", "Connecteurs logiques", [
    ["tout d'abord / premièrement", "во-первых"], ["en outre / par ailleurs / de plus", "кроме того"], ["qui plus est", "более того"],
    ["en revanche / cependant / néanmoins", "однако, тем не менее"], ["tandis que / alors que", "тогда как"], ["certes... mais", "конечно... но (уступка)"],
    ["bien que + subjonctif", "хотя"], ["malgré + nom", "несмотря на"], ["en raison de / du fait de", "из-за"],
    ["dans la mesure où", "поскольку, в той мере, в какой"], ["c'est pourquoi / par conséquent", "поэтому, следовательно"], ["si bien que / de sorte que", "так что"],
    ["à titre d'exemple / notamment", "например, в частности"], ["en somme / en définitive", "в итоге"], ["afin de + inf. / pour que + subj.", "чтобы"]
  ]],
  ["tmpl", "Грамматический арсенал B2 (по одной конструкции в каждый текст)", `Subjonctif : Il faut que la mairie prenne des mesures. / Bien que ce projet soit coûteux, ...
Conditionnel : Si la ville investissait dans les transports, les habitants utiliseraient moins leur voiture.
Conditionnel passé : Cette décision aurait pu être évitée si les habitants avaient été consultés.
Passif : De nouvelles mesures ont été adoptées par le conseil municipal.
Gérondif : En réduisant les déchets, on protège l'environnement.
Participe présent : Les étudiants souhaitant participer doivent s'inscrire.
Pronoms relatifs : le projet dont je vous parle / la raison pour laquelle / ce qui m'inquiète, c'est...
Pronoms y / en : Il en résulte que... / J'y tiens beaucoup.
Mise en relief : Ce qui me semble essentiel, c'est la concertation.
Nominalisation : la suppression de la ligne de bus (au lieu de : ils suppriment la ligne)`],
  ["tips", "Лайфхаки PE", [
    "Перед экзаменом посчитай среднее число слов в своей рукописной строке: на экзамене пересчёт займёт секунды.",
    "Пустая строка между абзацами делает структуру видимой для экзаменатора и работает на критерий cohérence.",
    "Перечитай задание и отметь каждый пункт (exprimer son désaccord, proposer des solutions): невыполненный пункт стоит баллов в respect de la consigne.",
    "Последние 5 минут: согласование причастий, окончания глаголов, артикли, акценты."
  ]],
  ["writer", {id: "pe", title: "Production écrite под таймер", minutes: 60, min: 250, prompts: [
    "Vous habitez dans une ville qui envisage de supprimer une ligne de bus pour des raisons budgétaires. Vous écrivez une lettre au maire pour exprimer votre désaccord et proposer d'autres solutions.",
    "Le magazine de votre université prépare un dossier sur l'usage de l'intelligence artificielle par les étudiants. Vous écrivez un article dans lequel vous présentez les avantages et les risques, et donnez votre opinion.",
    "Vous avez lu dans un journal que de plus en plus d'entreprises limitent le télétravail. Vous écrivez au courrier des lecteurs pour réagir et défendre votre point de vue.",
    "Votre entreprise souhaite supprimer une prime pour financer un nouvel espace de travail. Au nom des salariés, vous écrivez au directeur pour défendre le maintien de cet avantage.",
    "Sur un forum consacré à l'environnement, un internaute affirme que les gestes individuels ne servent à rien face au changement climatique. Vous lui répondez dans une contribution argumentée.",
    "Votre ville veut organiser un grand festival qui attirera de nombreux touristes mais perturbera la vie des habitants pendant une semaine. Vous écrivez au comité d'organisation pour exprimer vos inquiétudes et faire des propositions.",
    "Le ministère envisage de rendre obligatoire un semestre d'études à l'étranger pour tous les étudiants. Vous rédigez un essai argumenté sur cette proposition."
  ], check: ["Жанр соблюдён (шапка, objet, формула вежливости для письма; заголовок для статьи)?", "Выполнены все пункты задания?", "Два аргумента с примерами и уступка с опровержением?", "Коннекторы из разных строк таблицы?", "Минимум один subjonctif, одно условное предложение, один пассив?", "250+ слов, абзацы разделены пустой строкой?"]}]
]},

/* ================= PO ================= */
{ id: "po", nav: "Production orale", grp: "Секции", title: "Production orale",
  sub: "Вытягиваешь короткий документ, 30 минут готовишься, затем монолог с позицией и дебаты. Экзаменатор оценивает структуру наравне с языком.",
  blocks: [
  ["table", ["Этап", "Время", "Что делаешь"], [
    ["Чтение документа", "5 мин", "Тема, проблема, формулировка problématique вопросом"],
    ["План", "15 мин", "Две части с аргументами и примерами, тезисами на черновике"],
    ["Вступление и вывод", "5 мин", "Пишешь дословно: их произносишь уверенно и без пауз"],
    ["Репетиция", "5 мин", "Шёпотом проговариваешь вступление и переходы"],
    ["Монолог", "5–7 мин", "Вступление → часть 1 → часть 2 → вывод с личной позицией"],
    ["Дебаты", "до конца 20 мин", "Экзаменатор возражает и провоцирует, ты защищаешь и уточняешь позицию"]
  ]],
  ["task", "Monologue suivi", "структура", {
    how: "Монолог строится вокруг problématique, сформулированной вопросом. Пересказ документа занимает одну-две фразы: экзаменатор ждёт твоей аргументации.",
    tmpl: [["Шаблон монолога", `INTRODUCTION
Le document que j'ai tiré est un article intitulé « ... », paru dans ... en ...
Il aborde la question de [thème] : [une phrase de résumé].
Cela soulève une question essentielle : dans quelle mesure [problématique] ?
Pour y répondre, j'aborderai dans un premier temps [partie 1], puis [partie 2].

PARTIE 1
Commençons par [idée]. D'une part, ... En effet, ...
Prenons l'exemple de [exemple personnel ou de mon pays]. ...

PARTIE 2
Venons-en maintenant à [idée]. D'autre part, ...
Certes, ..., mais ... L'actualité récente nous montre que ...

CONCLUSION
Pour conclure, je dirais que [réponse à la problématique].
Personnellement, je suis convaincue que ...
On peut toutefois se demander si [ouverture].`]],
    hacks: ["Личные примеры (Сибирь, Байкал, обмен в Шанхае, работа в университете) звучат живее учебных и дают экзаменатору материал для вопросов, к которым ты готова.", "Объяви план вслух: структура входит в критерии оценки."]
  }],
  ["task", "Débat", "защита позиции", {
    how: "Экзаменатор специально занимает противоположную позицию. Оценивается умение удержать точку зрения, уточнить её и уступить в деталях.",
    strat: ["Соглашайся с частью возражения и возвращайся к своей позиции.", "Если не поняла вопрос, переспроси: это легальная пауза.", "Приводи новый аргумент из запаса: для дебатов оставь третий аргумент, не использованный в монологе."],
    phr: [["Je maintiens que...", "я настаиваю, что"], ["Vous soulevez un point intéressant, cependant...", "интересное замечание, однако"], ["Certes, mais il ne faut pas oublier que...", "конечно, но нельзя забывать"],
      ["Je nuancerais ce propos...", "я бы смягчила это утверждение"], ["Tout dépend de...", "всё зависит от"], ["Qu'entendez-vous par... ?", "что вы имеете в виду под...?"],
      ["Permettez-moi de revenir sur...", "позвольте вернуться к"], ["Je suis d'accord sur ce point, en revanche...", "здесь согласна, зато"], ["C'est un argument que j'entends, mais...", "понимаю этот аргумент, но"]]
  }],
  ["phr", "Банк аргументов: экология", [
    ["Les gestes individuels créent une pression sur les entreprises.", "индивидуальные действия давят на бизнес"], ["Une centaine d'entreprises produisent la majorité des émissions.", "основной вклад в выбросы у крупных компаний"],
    ["La protection du lac Baïkal dépend à la fois des accords entre États et du comportement des touristes.", "личный пример: Байкал"], ["l'empreinte carbone / la sobriété / le gaspillage", "углеродный след / умеренность / расточительство"]
  ]],
  ["phr", "Банк аргументов: numérique, travail, société", [
    ["Les réseaux sociaux maintiennent des liens à distance.", "плюс соцсетей"], ["Les algorithmes enferment les utilisateurs dans des bulles.", "минус соцсетей"],
    ["Le télétravail redistribue les cartes entre villes et campagnes.", "удалёнка меняет баланс город–регионы"], ["La formation continue devient indispensable.", "непрерывное обучение"],
    ["Les avancées juridiques ne suffisent pas à changer les mentalités.", "законы против практики"], ["La transparence des salaires réduit les écarts.", "прозрачность зарплат"]
  ]],
  ["drill", {title: "Симуляция PO", note: "Вытяни документ, включи таймер подготовки, затем монолог. Дебаты проводи с преподавателем или задай себе три возражения вслух.", timers: [["Подготовка", 1800], ["Монолог", 420], ["Дебаты", 600]], cards: [
    "Télétravail : liberté ou isolement ?\nDepuis 2020, de nombreuses entreprises proposent plusieurs jours de télétravail par semaine. Si certains salariés y voient un gain de temps et d'autonomie, d'autres évoquent une perte de lien avec leurs collègues.",
    "Faut-il rendre les transports en commun gratuits ?\nPlusieurs villes françaises, comme Dunkerque, ont rendu leurs bus gratuits. Les partisans y voient une mesure écologique et sociale, les opposants s'inquiètent du coût pour les finances publiques.",
    "Les écrans à l'école : progrès ou danger ?\nCertaines régions équipent les collégiens de tablettes, tandis que d'autres pays, comme la Suède, reviennent aux manuels papier.",
    "Faut-il interdire les vols intérieurs courts ?\nLa France a supprimé certaines liaisons aériennes lorsqu'il existe une alternative en train de moins de deux heures et demie.",
    "Un service civique obligatoire pour les jeunes ?\nCertains proposent que chaque jeune consacre plusieurs semaines à une mission d'intérêt général.",
    "La mode éphémère doit-elle être taxée ?\nEn France, une proposition de loi vise à pénaliser la mode ultra-éphémère par une taxe et des restrictions de publicité.",
    "Faut-il limiter le tourisme de masse ?\nVenise fait payer un droit d'entrée aux visiteurs à la journée certains jours de l'année.",
    "L'intelligence artificielle à l'université : outil ou triche ?\nDe plus en plus d'étudiants utilisent des assistants d'IA pour leurs devoirs, et les universités hésitent entre interdiction et intégration.",
    "La semaine de quatre jours : un modèle d'avenir ?\nPlusieurs entreprises testent la semaine de quatre jours, avec des résultats contrastés selon les secteurs.",
    "Apprendre à programmer dès l'école primaire ?\nCertains pays ont introduit le codage informatique dans les programmes dès 7 ans."
  ]}]
]}
],

/* ================= PRACTICE ================= */
practice: [
{ id: "co-ex3", group: "Compréhension de l'oral", title: "Exercice 3: trois documents courts", tag: "1 écoute",
  lang: "fr-FR",
  script: "Document 1. La médiathèque de Lyon lance ce mois-ci un service de prêt d'outils : perceuses, scies, échelles. Il suffit d'être inscrit à la médiathèque et de réserver en ligne. Le prêt est gratuit pour une durée de deux semaines, mais une caution de cinquante euros est demandée pour les outils électriques. L'idée, explique la directrice, c'est de réduire les achats inutiles : une perceuse ne sert que quelques minutes dans toute sa vie.\nDocument 2. Moi, j'ai arrêté de prendre l'avion pour mes vacances il y a trois ans. Au début, mes amis pensaient que c'était une lubie. Aujourd'hui, je pars en train de nuit, et franchement, le voyage fait partie des vacances. Bon, je ne vais pas mentir, c'est plus long et parfois plus cher. Mais je découvre des régions que je n'aurais jamais vues. Et je ne juge pas ceux qui prennent l'avion : chacun fait ses choix.\nDocument 3. Selon une étude publiée cette semaine, les Français passent en moyenne quatre heures et demie par jour devant un écran en dehors du travail, soit une heure de plus qu'il y a dix ans. Les chercheurs notent toutefois une évolution inattendue : chez les dix-huit vingt-quatre ans, le temps d'écran a légèrement diminué depuis deux ans, une tendance qu'ils attribuent à une forme de lassitude face aux réseaux sociaux.",
  scriptNote: "Прочитай все шесть вопросов, затем слушай один раз.",
  qs: [
    {q: "Doc 1. Pour emprunter un outil, il faut", o: ["acheter une carte spéciale", "être inscrit et réserver en ligne", "venir avec une pièce d'identité"], a: 1},
    {q: "Doc 1. Selon la directrice, le service vise surtout à", o: ["limiter la consommation", "attirer de nouveaux lecteurs", "financer la médiathèque"], a: 0, e: "réduire les achats inutiles"},
    {q: "Doc 2. L'attitude de la personne envers le train est", o: ["enthousiaste malgré quelques inconvénients", "résignée, faute de choix", "critique à cause du prix"], a: 0},
    {q: "Doc 2. À propos de ceux qui prennent l'avion, elle", o: ["les critique sévèrement", "refuse de les juger", "essaie de les convaincre"], a: 1},
    {q: "Doc 3. En dix ans, le temps d'écran des Français a", o: ["augmenté", "diminué", "peu changé"], a: 0},
    {q: "Doc 3. Chez les 18–24 ans, les chercheurs observent", o: ["une forte hausse", "une légère baisse", "une stabilité"], a: 1}
  ]},
{ id: "co-ex1", group: "Compréhension de l'oral", title: "Exercice 1: interview sur la semaine de quatre jours", tag: "2 écoutes",
  lang: "fr-FR",
  script: "Votre entreprise est passée à la semaine de quatre jours il y a un an. Quel bilan en faites-vous ?\nPlutôt positif, même si tout n'a pas été simple. Nous avons gardé le même salaire et le même volume d'heures : les équipes travaillent un peu plus longtemps chaque jour, mais elles ont trois jours de repos. Le premier effet, c'est la baisse de l'absentéisme, qui a reculé de près de moitié. En revanche, il a fallu réorganiser complètement le service client, car nos clients, eux, attendent une réponse cinq jours sur cinq.\nCertains disent que ce modèle n'est possible que dans les petites structures.\nC'est en partie vrai. Avec trente salariés, on peut tout réorganiser en quelques mois. Dans une usine qui tourne en continu, la question se pose autrement. Je ne crois pas à une solution unique : chaque secteur doit inventer son propre modèle.",
  scriptNote: "Слушай дважды с паузой в 1 минуту между прослушиваниями.",
  qs: [
    {q: "Dans cette entreprise, la semaine de quatre jours s'est accompagnée", o: ["d'une baisse des salaires", "de journées plus longues", "d'une réduction du temps de travail total"], a: 1},
    {q: "Le principal effet positif cité est", o: ["la hausse du chiffre d'affaires", "la baisse de l'absentéisme", "un recrutement plus facile"], a: 1},
    {q: "La principale difficulté a concerné", o: ["le service client", "la production", "les salaires"], a: 0},
    {q: "Selon la dirigeante, ce modèle", o: ["doit être généralisé", "s'adapte différemment selon les secteurs", "ne fonctionne que dans l'industrie"], a: 1}
  ]},
{ id: "ce-ex3", group: "Compréhension des écrits", title: "Exercice 3: qui pense quoi ?", tag: "attribution",
  text: "**Personne 1 – Claire, commerçante.** Interdire totalement les voitures dans le centre, ce serait condamner nos boutiques. Une partie de ma clientèle vient des villages voisins, où il n'existe aucun bus le soir. Je ne suis pas contre une réduction de la circulation, par exemple le week-end, mais une interdiction totale ferait fuir les clients vers les centres commerciaux en périphérie.\n**Personne 2 – Malik, médecin.** Dans mon cabinet, je vois chaque hiver des enfants souffrant d'asthme aggravé par la pollution. Les villes qui ont fermé leur centre aux voitures ont vu la qualité de l'air s'améliorer en quelques mois. Pour moi, la question ne se pose même pas : la santé publique doit passer avant le confort des automobilistes.\n**Personne 3 – Hélène, élue municipale.** Je suis favorable à cette mesure, mais pas n'importe comment. Avant toute interdiction, il faut des parkings-relais à l'entrée de la ville et des bus plus fréquents. Et surtout, une telle décision ne peut pas être imposée d'en haut : les habitants doivent être consultés à chaque étape.",
  intro: "Pour chaque affirmation, indique la personne (1, 2 ou 3).",
  qs: [
    {q: "Cette personne pense que l'interdiction doit être précédée d'investissements.", o: ["Personne 1", "Personne 2", "Personne 3"], a: 2},
    {q: "Cette personne craint pour son activité économique.", o: ["Personne 1", "Personne 2", "Personne 3"], a: 0},
    {q: "Cette personne s'appuie sur des arguments de santé publique.", o: ["Personne 1", "Personne 2", "Personne 3"], a: 1},
    {q: "Cette personne accepterait une réduction partielle de la circulation.", o: ["Personne 1", "Personne 2", "Personne 3"], a: 0},
    {q: "Cette personne souhaite associer les habitants à la décision.", o: ["Personne 1", "Personne 2", "Personne 3"], a: 2},
    {q: "Cette personne s'appuie sur l'exemple d'autres villes.", o: ["Personne 1", "Personne 2", "Personne 3"], a: 1}
  ]},
{ id: "ce-ex1", group: "Compréhension des écrits", title: "Exercice 1: le retour de la consigne", tag: "QCM",
  text: "Il y a quarante ans, rapporter ses bouteilles vides chez l'épicier faisait partie du quotidien. Abandonnée avec l'essor du plastique et de la grande distribution, la consigne fait aujourd'hui son retour dans plusieurs régions françaises. Le principe est simple : le consommateur paie quelques centimes de plus à l'achat et récupère cette somme lorsqu'il rapporte l'emballage, qui est ensuite lavé et réutilisé.\nPour ses défenseurs, l'intérêt est évident. Une bouteille en verre peut être réutilisée des dizaines de fois, alors que le recyclage exige de la fondre à très haute température, ce qui consomme beaucoup d'énergie. Selon une association spécialisée, le réemploi permettrait de réduire fortement les émissions liées à l'emballage, à condition que les distances de transport restent courtes.\nC'est précisément là que le bât blesse. Les centres de lavage sont encore rares, et une bouteille qui parcourt des centaines de kilomètres pour être nettoyée perd une grande partie de son avantage écologique. Les producteurs, de leur côté, hésitent à investir tant que le volume de bouteilles collectées reste faible.\nPlusieurs régions ont donc choisi de financer des réseaux locaux associant brasseurs, viticulteurs et commerçants. Les premiers résultats sont encourageants, mais les acteurs du secteur le reconnaissent : sans une harmonisation nationale des formats de bouteilles, le système restera limité à quelques niches.",
  qs: [
    {q: "Selon le texte, la consigne", o: ["n'a jamais existé en France", "existait autrefois et revient aujourd'hui", "est obligatoire dans toute la France"], a: 1},
    {q: "Le réemploi est présenté comme plus écologique que le recyclage parce qu'il", o: ["évite de fondre le verre", "coûte moins cher au consommateur", "crée des emplois"], a: 0},
    {q: "L'expression « c'est précisément là que le bât blesse » signifie", o: ["c'est le point faible du système", "c'est la solution au problème", "c'est un avantage inattendu"], a: 0},
    {q: "Les producteurs hésitent à investir parce que", o: ["les bouteilles sont trop fragiles", "les volumes collectés sont insuffisants", "les consommateurs refusent de payer"], a: 1},
    {q: "Pour développer le système à grande échelle, il faudrait surtout", o: ["augmenter le montant de la consigne", "harmoniser les formats de bouteilles", "fermer les centres de recyclage"], a: 1}
  ]},
{ id: "gr-subj", group: "Grammaire", title: "Subjonctif ou indicatif ?", tag: "grammaire",
  qs: [
    {q: "Il faut que tu ______ demain.", o: ["viens", "viendras", "viennes"], a: 2, e: "il faut que + subjonctif"},
    {q: "Je pense qu'il ______ raison.", o: ["a", "ait", "avoir"], a: 0, e: "penser que в утверждении + indicatif"},
    {q: "Je ne pense pas qu'il ______ raison.", o: ["a", "ait", "aura"], a: 1, e: "ne pas penser que + subjonctif"},
    {q: "Bien qu'elle ______ fatiguée, elle a continué.", o: ["est", "soit", "était"], a: 1},
    {q: "Après qu'il ______ parti, nous avons dîné.", o: ["est", "soit", "sera"], a: 0, e: "après que + indicatif (частая ошибка)"},
    {q: "Avant que tu ne ______, je voudrais te parler.", o: ["pars", "partes", "partiras"], a: 1, e: "avant que + subjonctif"},
    {q: "Il est probable qu'il ______ demain.", o: ["vienne", "viendra", "venir"], a: 1, e: "probable + indicatif, possible + subjonctif"},
    {q: "Je doute que ce projet ______ réalisable.", o: ["est", "soit", "sera"], a: 1},
    {q: "Il est évident que la situation ______ grave.", o: ["est", "soit", "soient"], a: 0, e: "certitude + indicatif"}
  ]},
{ id: "gr-conn", group: "Grammaire", title: "Connecteurs", tag: "cohésion",
  qs: [
    {q: "Le projet est coûteux ; ______, il reste indispensable.", o: ["néanmoins", "par conséquent", "de plus"], a: 0},
    {q: "______ la pluie, le festival a eu lieu.", o: ["Malgré", "Bien que", "Puisque"], a: 0, e: "malgré + nom, bien que + subjonctif"},
    {q: "Il n'a pas révisé, ______ il a échoué.", o: ["si bien qu'", "tandis qu'", "bien qu'"], a: 0},
    {q: "Les jeunes utilisent les réseaux sociaux ______ leurs parents préfèrent la télévision.", o: ["tandis que", "afin que", "puisque"], a: 0},
    {q: "______ réduire la pollution, la mairie a limité la circulation.", o: ["Afin de", "Pour que", "Grâce à"], a: 0, e: "afin de + infinitif"},
    {q: "Le télétravail réduit les trajets ; ______, il favorise l'isolement.", o: ["en revanche", "en outre", "ainsi"], a: 0}
  ]},
{ id: "gr-yen", group: "Grammaire", title: "Pronoms y et en", tag: "грамматика",
  qs: [
    {q: "Tu penses à ton examen ? – Oui, j'___ pense.", a: ["y"], e: "penser à quelque chose → y"},
    {q: "Tu as des livres ? – Oui, j'___ ai trois.", a: ["en"], e: "количество → en"},
    {q: "Il revient de Paris ? – Oui, il ___ revient.", a: ["en"], e: "venir de → en"},
    {q: "Tu t'intéresses à la politique ? – Oui, je m'___ intéresse.", a: ["y"]},
    {q: "Vous parlez souvent de ce projet ? – Oui, nous ___ parlons souvent.", a: ["en"], e: "parler de → en"}
  ]}
],

/* ================= DECKS ================= */
decks: [
{ id: "conn", title: "Коннекторы", words: [
  ["en outre", "кроме того"], ["par ailleurs", "кроме того, с другой стороны"], ["qui plus est", "более того"], ["en revanche", "зато, напротив"], ["néanmoins", "тем не менее"],
  ["tandis que", "тогда как"], ["certes... mais", "конечно... но"], ["bien que + subj.", "хотя"], ["malgré + nom", "несмотря на"], ["en raison de", "из-за"],
  ["dans la mesure où", "поскольку"], ["par conséquent", "следовательно"], ["si bien que", "так что"], ["de sorte que", "так что, чтобы"], ["à titre d'exemple", "например"],
  ["en l'occurrence", "в данном случае"], ["en somme", "в итоге"], ["en définitive", "в конечном счёте"], ["quitte à + inf.", "даже если придётся"], ["faute de + nom", "из-за отсутствия"],
  ["d'autant plus que", "тем более что"], ["pour autant", "тем не менее, при этом"], ["or", "однако, а между тем"], ["ainsi", "таким образом"]
]},
{ id: "lettre", title: "Формулы письма", words: [
  ["Je me permets de vous écrire au sujet de", "пишу вам по поводу"], ["En tant que", "в качестве"], ["Je vous serais reconnaissant(e) de bien vouloir", "буду признательна, если вы"],
  ["Il serait souhaitable de", "было бы желательно"], ["Il me semble judicieux de", "мне кажется разумным"], ["Dans l'attente de votre réponse", "в ожидании вашего ответа"],
  ["Je vous prie d'agréer l'expression de mes salutations distinguées", "формула вежливости в конце"], ["Objet :", "тема письма"], ["suscite de vives inquiétudes", "вызывает серьёзное беспокойство"],
  ["Je tiens à exprimer mon désaccord", "хочу выразить несогласие"], ["Je reste à votre disposition", "остаюсь в вашем распоряжении"], ["Veuillez trouver ci-joint", "прилагаю"]
]},
{ id: "opinion", title: "Мнение и дебаты", words: [
  ["force est de constater que", "приходится признать"], ["il n'en reste pas moins que", "тем не менее"], ["je suis convaincue que", "я убеждена, что"], ["je nuancerais ce propos", "я бы смягчила это утверждение"],
  ["on aurait tort de", "было бы ошибкой"], ["c'est loin d'être", "это далеко не"], ["je maintiens que", "я настаиваю"], ["tout dépend de", "всё зависит от"],
  ["c'est une fausse bonne idée", "только кажется хорошей идеей"], ["je reste sceptique", "остаюсь скептиком"], ["à mon sens", "по-моему"], ["il va de soi que", "само собой разумеется"],
  ["on ne peut nier que", "нельзя отрицать, что"], ["reste à savoir si", "остаётся вопрос, будет ли"], ["dans quelle mesure", "в какой мере"], ["je partage en partie cet avis", "частично разделяю это мнение"]
]},
{ id: "presse", title: "Лексика прессы", words: [
  ["un enjeu", "ставка, ключевой вопрос"], ["une polémique", "острый спор"], ["préconiser", "рекомендовать"], ["remettre en cause", "ставить под сомнение"], ["un dispositif", "система мер"],
  ["un sondage", "опрос"], ["la précarité", "нестабильность, бедность"], ["le pouvoir d'achat", "покупательная способность"], ["susciter", "вызывать"], ["aboutir à", "привести к"],
  ["en matière de", "в области"], ["à l'issue de", "по итогам"], ["faire face à", "столкнуться с"], ["un constat", "наблюдение, вывод"], ["désormais", "отныне"],
  ["une mesure phare", "главная мера"], ["un projet de loi", "законопроект"], ["les pouvoirs publics", "государственные органы"], ["une échéance", "срок, дедлайн"], ["s'inscrire dans", "вписываться в"]
]},
{ id: "themes", title: "Темы PO и PE", words: [
  ["le réchauffement climatique", "глобальное потепление"], ["l'empreinte carbone", "углеродный след"], ["la sobriété énergétique", "энергетическая умеренность"], ["le gaspillage", "расточительство"], ["les énergies renouvelables", "возобновляемая энергия"],
  ["la transition écologique", "экологический переход"], ["le réemploi", "повторное использование"], ["la mode éphémère", "быстрая мода"],
  ["les réseaux sociaux", "соцсети"], ["une bulle de filtres", "информационный пузырь"], ["la désinformation", "дезинформация"], ["les données personnelles", "персональные данные"], ["la fracture numérique", "цифровое неравенство"],
  ["le télétravail", "удалённая работа"], ["la formation continue", "непрерывное обучение"], ["l'insertion professionnelle", "трудоустройство"], ["la reconversion", "смена профессии"],
  ["l'égalité salariale", "равенство зарплат"], ["le plafond de verre", "стеклянный потолок"], ["la mixité sociale", "социальное смешение"], ["le vivre-ensemble", "совместная жизнь, сосуществование"],
  ["l'exode urbain", "отток из городов"], ["le coût de la vie", "стоимость жизни"], ["le tourisme de masse", "массовый туризм"]
]},
{ id: "subj", title: "Триггеры subjonctif", words: [
  ["il faut que", "необходимо, чтобы + subj."], ["bien que / quoique", "хотя + subj."], ["pour que / afin que", "чтобы + subj."], ["avant que", "прежде чем + subj."],
  ["à condition que", "при условии что + subj."], ["je doute que", "сомневаюсь, что + subj."], ["je ne pense pas que", "не думаю, что + subj."], ["il est possible que", "возможно, что + subj."],
  ["je souhaite que", "желаю, чтобы + subj."], ["il est regrettable que", "жаль, что + subj."], ["après que", "после того как + INDICATIF"], ["il est probable que", "вероятно + INDICATIF"]
]}
],

/* ================= RESOURCES ================= */
resources: [
{ group: "Официальные материалы", items: [
  ["FEI: примеры заданий DELF B2", "https://www.france-education-international.fr/diplome/delf-tout-public/niveau-b2/exemples-sujets", "Официальные образцы нового формата с аудио, ключами и сетками оценивания."],
  ["FEI: советы по подготовке к B2", "https://www.france-education-international.fr/diplome/delf-tout-public/niveau-b2/entrainement", "Описание каждой части и рекомендации от составителей экзамена."],
  ["Le DELF B2 100% réussite (Didier)", "https://www.google.com/search?q=Le+DELF+B2+100%25+r%C3%A9ussite+nouveau+format", "Пособие с полными тестами нового формата, выбирай издание после 2020 года."],
  ["ABC DELF B2 (CLE International)", "https://www.google.com/search?q=ABC+DELF+B2+nouveau+format", "200 заданий с аудио и разбором, новое издание под QCM-формат."]
]},
{ group: "Аудио и видео", items: [
  ["RFI Français facile", "https://francaisfacile.rfi.fr", "Journal en français facile: ежедневные новости с транскриптом, упражнения по уровням."],
  ["RFI Savoirs", "https://savoirs.rfi.fr", "Упражнения на понимание по свежим радиовыпускам."],
  ["TV5Monde Apprendre", "https://apprendre.tv5monde.com", "Видео с субтитрами и заданиями, фильтр по уровню B2."],
  ["InnerFrench", "https://innerfrench.com", "Подкаст на общественные темы с понятной речью: мост к радио без адаптации."],
  ["Français avec Pierre", "https://www.francaisavecpierre.com", "Грамматика B2 и выпуски о подготовке к DELF."],
  ["France Culture", "https://www.radiofrance.fr/franceculture", "Дискуссии и интервью уровня экзаменационных документов."]
]},
{ group: "Пресса для чтения", items: [
  ["Le Monde", "https://www.lemonde.fr", "Аргументативные тексты и колонки мнений."],
  ["Courrier international", "https://www.courrierinternational.com", "Переводы мировой прессы, темы международной повестки."],
  ["20 Minutes", "https://www.20minutes.fr", "Короткие новости для ежедневного лёгкого чтения."],
  ["1jour1actu", "https://www.1jour1actu.com", "Объяснения актуальных тем простым языком, удобно для старта."]
]},
{ group: "Лексика и грамматика", note: "Найденные выражения добавляй в Словарь через вкладку «Добавить» списком `expression ; перевод ; пример`.", items: [
  ["Le Point du FLE", "https://www.lepointdufle.net", "Тысячи упражнений по грамматике и лексике, по темам и уровням."],
  ["Bonjour de France", "https://www.bonjourdefrance.com", "Упражнения и тексты по уровням с самопроверкой."],
  ["Kwiziq French", "https://french.kwiziq.com", "Грамматика по уровням CEFR с адаптивными тестами."],
  ["Lingolia Français", "https://francais.lingolia.com", "Короткие объяснения грамматики с упражнениями: subjonctif, pronoms, temps."],
  ["CNRTL", "https://www.cnrtl.fr", "Толковый словарь, синонимы и антонимы."],
  ["Larousse", "https://www.larousse.fr/dictionnaires/francais", "Толковый словарь с примерами употребления."],
  ["WordReference", "https://www.wordreference.com", "Двуязычные словари и форум с разбором нюансов."],
  ["Reverso Context", "https://context.reverso.net", "Выражения в контексте реальных переводов."],
  ["Le Conjugueur", "https://leconjugueur.lefigaro.fr", "Спряжение любого глагола во всех временах."],
  ["Projet Voltaire", "https://www.projet-voltaire.fr", "Тренажёр орфографии и грамматики для письменной части."]
]},
{ group: "Преподаватели для PO", items: [
  ["italki", "https://www.italki.com", "Ищи преподавателя с опытом подготовки к DELF и проси полные симуляции PO с дебатами."],
  ["Preply", "https://preply.com", "Аналогичная платформа, фильтр по специализации DELF / DALF."]
]}
]
};
