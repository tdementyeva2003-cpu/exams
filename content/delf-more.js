/* DELF B2: дополнительные обороты, лексика, лайфхаки, орфография и гомофоны.
   Как редактировать этот файл: см. README.md в корне репозитория.
   Текст пиши в двойных кавычках, элементы списков разделяй запятыми. */
(function(E){
const S = id => { const s = E.sections.find(x => x.id === id); if (!s) throw new Error("section " + id); return s; };
const T = (sid, start) => { const b = S(sid).blocks.find(b => b[0] === "task" && b[1].indexOf(start) === 0); if (!b) throw new Error("task " + sid + " " + start); return b[3]; };
const add = (sid, start, o) => { const p = T(sid, start); if (o.more) p.more = (p.more || []).concat(o.more); if (o.hacks) p.hacks = (p.hacks || []).concat(o.hacks); };
const put = (sid, blk) => { const bl = S(sid).blocks; let i = bl.findIndex(b => b[0] === "writer" || b[0] === "drill"); if (i < 0) i = bl.length; bl.splice(i, 0, blk); };

/* ---------------- CO ---------------- */
add("co", "Exercices 1 et 2", {
  more: [["Слова, которые меняют смысл ответа", [
    ["pourtant / toutefois", "однако, тем не менее"], ["en réalité", "на самом деле (опровержение)"], ["contrairement à", "в отличие от"], ["au lieu de", "вместо того чтобы"],
    ["ne... que", "только (Il ne travaille que le matin)"], ["ne... guère", "почти не"], ["ne... plus", "больше не"], ["à peine", "едва"],
    ["quant à", "что касается"], ["d'ailleurs", "впрочем, кстати"], ["or", "а между тем, однако"], ["certes", "конечно (уступка перед mais)"]
  ]], ["Отношение говорящего: частые варианты QCM", [
    ["réticent(e)", "сдержанный, неохотный"], ["enthousiaste", "восторженный"], ["mitigé(e)", "неоднозначный, смешанный"], ["dubitatif / dubitative", "сомневающийся"],
    ["indigné(e)", "возмущённый"], ["nostalgique", "ностальгирующий"], ["inquiet / inquiète", "обеспокоенный"], ["résigné(e)", "смирившийся"],
    ["admiratif / admirative", "восхищённый"], ["ironique", "ироничный"], ["sceptique", "скептичный"], ["confiant(e)", "уверенный, полный доверия"]
  ]]],
  hacks: ["Варианты про отношение часто отличаются одним прилагательным: выучи список выше, и выбор займёт секунды.", "Интонация выдаёт иронию и сомнение раньше слов: на втором прослушивании слушай именно её."]
});
add("co", "Exercice 3", {
  more: [["Маркеры коротких документов", [
    ["nous vous informons que", "сообщаем вам, что (объявление)"], ["à compter du", "начиная с (даты)"], ["sous réserve de", "при условии"], ["dans la limite des places disponibles", "в пределах свободных мест"],
    ["franchement / bon / perso", "разговорные маркеры свидетельства"], ["selon une étude", "согласно исследованию"], ["soit", "то есть, а именно (+ число)"], ["en moyenne", "в среднем"],
    ["en hausse de / en baisse de", "с ростом на / со снижением на"], ["d'après les chercheurs", "по мнению исследователей"]
  ]]],
  hacks: ["Тип документа понятен по первым словам: объявление начинается с адресата (*Chers clients*), свидетельство с *moi* или *je*, новость с источника (*selon, d'après*). От типа зависит, где искать ответ."]
});
put("co", ["tips", "Быстрые приёмы CO", [
  "Пока читаешь вопросы, подчёркивай вопросительное слово: *pourquoi* ждёт причину, *combien* число, *quel est l'avis* мнение.",
  "На первом прослушивании отмечай ответ карандашом сразу, на втором только подтверждай или меняй.",
  "Не задерживайся на пропущенном вопросе: следующий вопрос идёт по порядку документа.",
  "Пиши цифры на полях, пока их слышишь: французские числа легко потерять через секунду."
]]);

/* ---------------- CE ---------------- */
add("ce", "Exercices 1 et 2", {
  more: [["Идиомы, значение которых спрашивают", [
    ["c'est là que le bât blesse", "в этом и слабое место"], ["mettre la charrue avant les bœufs", "делать всё в неправильном порядке"], ["jeter de l'huile sur le feu", "подливать масла в огонь"], ["tirer la sonnette d'alarme", "бить тревогу"],
    ["faire tache d'huile", "быстро распространяться"], ["être monnaie courante", "быть обычным делом"], ["revoir sa copie", "пересмотреть своё решение"], ["la goutte d'eau qui fait déborder le vase", "последняя капля"],
    ["avoir le vent en poupe", "быть на подъёме"], ["jeter un pavé dans la mare", "вызвать переполох"], ["une arme à double tranchant", "палка о двух концах"], ["faire marche arrière", "отступить, дать задний ход"],
    ["ne pas faire l'unanimité", "вызывать разногласия"], ["tourner la page", "перевернуть страницу"]
  ]], ["Тон автора", [
    ["élogieux", "хвалебный"], ["critique", "критический"], ["nuancé", "взвешенный, с оттенками"], ["polémique", "полемический"],
    ["alarmiste", "паникёрский"], ["engagé", "ангажированный, с позицией"], ["neutre / objectif", "нейтральный"], ["mesuré", "сдержанный, умеренный"]
  ]]]
});
add("ce", "Exercice 3", {
  more: [["Маркеры позиции «за, против, условно»", [
    ["je suis tout à fait pour", "полностью за"], ["je m'y oppose fermement", "решительно против"], ["j'y suis favorable à condition que", "за при условии, что"], ["je ne suis pas hostile à", "я не против"],
    ["sous réserve que / pourvu que", "при условии, что"], ["encore faut-il que", "ещё нужно, чтобы"], ["il est hors de question que", "об этом не может быть и речи"], ["je suis partagé(e)", "у меня смешанные чувства"],
    ["à mes yeux", "на мой взгляд"], ["ce n'est pas la panacée", "это не панацея"]
  ]]],
  hacks: ["*Encore faut-il que* и *à condition que* почти всегда означают условную позицию: такой автор подходит к утверждениям про условия и предварительные меры."]
});
put("ce", ["tips", "Быстрые приёмы CE", [
  "Порядок: упражнение 3 (10–12 минут), затем 1 и 2 (по 20 минут), остаток на проверку.",
  "Вопрос о значении выражения: найди его в тексте и прочитай предложение до и после, смысл почти всегда раскрыт рядом.",
  "Отвечай на вопросы в порядке текста: каждый следующий ответ ищи ниже предыдущего.",
  "Вариант с дословной цитатой из текста проверяй дважды: это любимая ловушка."
]]);

/* ---------------- PE ---------------- */
add("pe", "Lettre formelle", {
  more: [["Жалоба, требование, предложение", [
    ["je déplore que + subj.", "сожалею, что"], ["il est inadmissible que + subj.", "недопустимо, что"], ["je me vois dans l'obligation de", "я вынуждена"], ["je vous saurais gré de", "буду признательна, если вы"],
    ["je sollicite", "прошу (официально)"], ["remédier à", "исправить, устранить"], ["prendre les mesures nécessaires", "принять необходимые меры"], ["dans les plus brefs délais", "в кратчайшие сроки"],
    ["à défaut de", "за неимением, в противном случае"], ["attirer votre attention sur", "обратить ваше внимание на"], ["faire part de", "сообщить, поделиться"], ["je reste convaincue que", "я по-прежнему убеждена"]
  ]], ["Лексика официального письма", [
    ["un désagrément", "неудобство"], ["un préjudice", "ущерб"], ["une nuisance", "раздражающий фактор (шум, запах)"], ["la concertation", "обсуждение с заинтересованными сторонами"],
    ["une alternative viable", "реальная альтернатива"], ["la pérennité", "долговечность, устойчивость"], ["les riverains", "местные жители (рядом)"], ["les usagers", "пользователи (услуги, транспорта)"]
  ]]],
  hacks: ["Формулу вежливости и шапку выучи наизусть: это 30 слов, которые пишутся без раздумий и сразу закрывают критерий регистра."]
});
add("pe", "Article", {
  more: [["Обороты публицистики", [
    ["force est de constater que", "приходится признать"], ["il convient de", "следует"], ["on assiste à", "мы наблюдаем"], ["ce phénomène s'explique par", "это явление объясняется"],
    ["à l'heure où", "в то время, когда"], ["il n'est pas rare que + subj.", "нередко бывает, что"], ["nombreux sont ceux qui", "многие"], ["en témoigne", "об этом свидетельствует"],
    ["il y a fort à parier que", "можно не сомневаться, что"], ["qu'on le veuille ou non", "хотим мы того или нет"], ["loin s'en faut", "далеко не так"], ["à l'inverse", "наоборот"]
  ]]]
});
add("pe", "Essai", {
  more: [["Форум и эссе", [
    ["je rebondis sur", "откликаюсь на (сообщение)"], ["je vous rejoins sur", "согласна с вами в"], ["permettez-moi de", "позвольте мне"], ["en ce qui me concerne", "что касается меня"],
    ["il me tient à cœur de", "мне важно"], ["je vous invite à", "предлагаю вам"], ["à mon humble avis", "по моему скромному мнению"], ["je ne saurais trop recommander", "очень рекомендую"]
  ]]]
});
put("pe", ["phr", "Повышение уровня лексики", [
  ["avoir → posséder, disposer de", "иметь"], ["faire → effectuer, réaliser, mener", "делать"], ["dire → affirmer, souligner, préciser", "говорить"], ["il y a → on observe, on constate", "есть, наблюдается"],
  ["beaucoup de → de nombreux, nombre de", "много"], ["important → primordial, crucial, majeur", "важный"], ["problème → enjeu, défi, difficulté", "проблема"], ["mettre en place → instaurer", "вводить"],
  ["donner → accorder, fournir", "давать"], ["montrer → démontrer, témoigner de", "показывать"], ["changer → modifier, transformer", "менять"], ["augmenter → s'accroître, se multiplier", "расти"],
  ["penser → estimer, considérer", "думать"], ["bien → bénéfique, positif", "хороший"], ["chose → élément, aspect, phénomène", "вещь"], ["aider → favoriser, contribuer à", "помогать"]
]]);
put("pe", ["tips", "Быстрые приёмы PE", [
  "5 минут на план: жанр, адресат, два аргумента, уступка, предложение. С планом текст пишется за 40 минут без переписывания.",
  "Шапку и формулу вежливости пиши первыми, пока голова свежая: это быстрые баллы.",
  "Каждый абзац начинай с коннектора из разных строк таблицы: связность видна сразу.",
  "Одна конструкция с subjonctif, одна условная и один пассив: отметь их на черновике, чтобы не забыть вставить.",
  "Последние 5 минут проверяй по списку: согласование причастий, окончания -é / -er, a / à, ses / ces, акценты."
]]);

/* ---------------- PO ---------------- */
add("po", "Monologue suivi", {
  more: [["Связки монолога", [
    ["il convient de souligner que", "следует подчеркнуть"], ["cela m'amène à", "это подводит меня к"], ["à ce propos", "по этому поводу"], ["en ce qui concerne", "что касается"],
    ["il ressort de ce document que", "из документа следует"], ["l'auteur met en lumière", "автор освещает"], ["ce débat soulève la question de", "эта дискуссия поднимает вопрос"], ["j'en viens à", "перехожу к"],
    ["autrement dit / en d'autres termes", "иначе говоря"], ["pour illustrer mon propos", "чтобы проиллюстрировать мысль"]
  ]], ["Лексика высокого уровня для аргументов", [
    ["un levier", "рычаг, инструмент воздействия"], ["un frein", "тормоз, препятствие"], ["un enjeu de société", "общественно значимый вопрос"], ["une prise de conscience", "осознание"],
    ["favoriser / entraver", "способствовать / мешать"], ["s'avérer", "оказаться"], ["porter atteinte à", "наносить ущерб"], ["pallier", "восполнять (недостаток)"],
    ["privilégier", "отдавать предпочтение"], ["susciter un débat", "вызывать дискуссию"], ["à long terme", "в долгосрочной перспективе"], ["être en mesure de", "быть в состоянии"]
  ]]],
  hacks: ["Не пересказывай документ дольше 30 секунд: экзаменатор его знает и ждёт твоих аргументов.", "Последнюю фразу вывода заканчивай вопросом (*On peut se demander si...*): она естественно открывает дебаты на твоей территории."]
});
add("po", "Débat", {
  more: [["Выиграть время в дебатах", [
    ["C'est une question délicate.", "это непростой вопрос"], ["Laissez-moi réfléchir un instant.", "дайте подумать"], ["Si je comprends bien, vous voulez dire que...", "если я правильно понимаю"], ["C'est une bonne question.", "хороший вопрос"],
    ["Je n'y avais pas pensé sous cet angle, mais...", "под таким углом не думала, но"], ["Comment dire...", "как бы сказать"]
  ]]]
});
put("po", ["tips", "Быстрые приёмы PO", [
  "Из 30 минут подготовки 5 потрать на дословное вступление: первые 40 секунд задают впечатление экзаменатора.",
  "На черновике пиши только ключевые слова и коннекторы: читать с листа нельзя, а подсматривать можно.",
  "Держи третий аргумент в резерве для дебатов.",
  "Не знаешь слова – опиши его (*c'est une sorte de..., ce qu'on appelle...*): это засчитывается как стратегия.",
  "Смотри на экзаменатора и лишь изредка в черновик: контакт и уверенность влияют на оценку беглости."
]]);

/* ---------------- ORTHOGRAPHE ---------------- */
const idx = E.sections.findIndex(s => s.id === "po") + 1;
E.sections.splice(idx, 0, { id: "spelling", nav: "Орфография", grp: "Секции", title: "Орфография: слова и гомофоны",
  sub: "За орфографию в PE даётся отдельный балл, а ошибки в согласовании снижают оценку грамматики. Больше всего баллов теряется на гомофонах и удвоенных согласных.",
  blocks: [
  ["spell", {id: "delf-sp", lang: "fr-FR", title: "Диктант", note: "Слово звучит по-французски, перевод появляется на экране. Акценты обязательны: é, è, ê, à, ç. Enter – проверить, ещё раз Enter – следующее слово.", words: [
    ["développement", "развитие", "одно l, два p"], ["environnement", "окружающая среда", "nn"], ["professionnel", "профессиональный", "одно f, ss, nn"], ["raisonnable", "разумный", "nn"],
    ["apparemment", "по-видимому", "pp, -emment"], ["évidemment", "очевидно", "-emment, mm"], ["notamment", "в частности", "-amment"], ["fréquemment", "часто", "-emment"],
    ["couramment", "свободно, бегло", "rr, -amment"], ["connaissance", "знание", "nn, ss"], ["nécessaire", "необходимый", "одно c, ss"], ["intéressant", "интересный", "ss"],
    ["adresse", "адрес", "одно d, ss (в отличие от address)"], ["personnalité", "личность", "nn"], ["traditionnel", "традиционный", "nn"], ["rythme", "ритм", "y и th"],
    ["accueil", "приём", "cc, -ueil"], ["hypothèse", "гипотеза", "hy-, th, è"], ["phénomène", "явление", "ph, é, è"], ["exigence", "требование", "-ence"],
    ["langage", "язык (речь)", "без u, в отличие от language"], ["exemple", "пример", "-em-, в отличие от example"], ["indépendant", "независимый", "-ant"], ["responsabilité", "ответственность", "-sabilité"],
    ["gouvernement", "правительство", "ou в начале, одно n перед -ement"], ["ressources", "ресурсы", "ss"], ["apercevoir", "заметить", "одно p"], ["appartement", "квартира", "pp"],
    ["recommander", "рекомендовать", "одно c, mm"], ["rationnel", "рациональный", "nn"], ["aujourd'hui", "сегодня", "апостроф"], ["parallèle", "параллельный", "ll в середине, l в конце"],
    ["bibliothèque", "библиотека", "th, è"], ["malheureusement", "к сожалению", "-eusement"], ["réflexion", "размышление", "x, не -ction"], ["connexion", "соединение", "x"],
    ["aggraver", "усугублять", "gg"], ["agrandir", "увеличивать", "одно g"], ["honnête", "честный", "nn, ê"], ["honorer", "чтить", "одно n"],
    ["dilemme", "дилемма", "mm"], ["enthousiasme", "энтузиазм", "th"], ["atmosphère", "атмосфера", "-sph-, è"], ["succès", "успех", "cc, è, одно s в конце"],
    ["réussir", "преуспеть", "ss"], ["j'appelle", "я зову", "ll перед немой e"], ["j'achète", "я покупаю", "è перед немой e"], ["événement", "событие", "é-é (évènement тоже допустимо)"]
  ]}],
  ["phr", "Гомофоны: как проверить", [
    ["a / à", "a = avait (глагол), à = предлог: Il a mal à la tête"], ["ou / où", "ou = ou bien (или), où = место или время"], ["et / est", "et = et puis, est = était"], ["son / sont", "son = mon (его), sont = étaient"],
    ["on / ont", "on = il (кто-то), ont = avaient"], ["ces / ses", "ces = эти, ses = его/её (les siens)"], ["c'est / s'est", "c'est = cela est, s'est = возвратный глагол"], ["ce / se", "ce = cela, se = перед глаголом (себя)"],
    ["leur / leurs", "leur перед глаголом без s; leurs перед сущ. мн. числа"], ["quand / quant / qu'en", "quand = когда, quant à = что касается, qu'en = que + en"], ["peu / peut / peux", "peu = мало, peut / peux = может / могу"], ["la / là / l'a", "là = там, l'a = l'avait"],
    ["-é / -er", "замени на vendu / vendre: Il a mangé (vendu), il va manger (vendre)"], ["quel / qu'elle", "qu'elle заменяется на qu'il"], ["sans / s'en", "sans = без, s'en = se + en (il s'en va)"], ["tout / tous", "tous перед сущ. мн. числа: tous les jours"]
  ]],
  ["tips", "Быстрые правила", [
    "Наречия от прилагательных на -ant пишутся -amment (courant → couramment), на -ent пишутся -emment (évident → évidemment).",
    "Participe passé с avoir согласуется с прямым дополнением, стоящим перед глаголом: *les lettres que j'ai écrites*.",
    "Сущ. на -tion после согласных, но *réflexion, connexion, flexion* пишутся через x.",
    "Глаголы типа appeler и jeter удваивают согласную перед немой e (j'appelle), глаголы типа acheter и lever получают è (j'achète).",
    "Французские и английские двойники расходятся: adresse / address, exemple / example, langage / language, développement / development."
  ]]
]});

/* homophones practice */
E.practice.push({ id: "gr-homo", group: "Grammaire", title: "Гомофоны", tag: "orthographe", qs: [
  {q: "Il ___ mal ___ la tête.", o: ["a ... à", "à ... a", "a ... a"], a: 0, e: "a = avait, à = предлог"},
  {q: "Je ne sais pas ___ il habite.", o: ["ou", "où"], a: 1},
  {q: "Ils ___ arrivés hier avec ___ parents.", o: ["sont ... leurs", "son ... leur", "sont ... leur"], a: 0},
  {q: "___ projets sont ambitieux, ___ vrai.", o: ["Ces ... c'est", "Ses ... s'est", "Ces ... s'est"], a: 0, e: "Ces = эти; c'est = cela est"},
  {q: "Elle ___ rendu compte de son erreur.", o: ["c'est", "s'est", "sait"], a: 1},
  {q: "Je leur ai ___ les documents.", o: ["envoyer", "envoyé", "envoyés"], a: 1, e: "Проверка заменой: j'ai vendu → envoyé; дополнение после глагола, согласования нет."},
  {q: "Les lettres que j'ai ___ sont parties.", o: ["écrit", "écrite", "écrites"], a: 2, e: "Прямое дополнение (que = les lettres) стоит перед avoir."},
  {q: "___ à moi, je préfère le train.", o: ["Quand", "Quant", "Qu'en"], a: 1},
  {q: "Il ___ venir, mais il travaille ___.", o: ["peut ... peu", "peu ... peut", "peux ... peu"], a: 0},
  {q: "Elle parle ___ (свободно) anglais.", o: ["couramment", "courament", "coureamment"], a: 0}
]});

E.decks.push({ id: "upgrade", title: "Лексика высокого уровня", words: [
  ["un levier", "рычаг, инструмент"], ["un frein", "препятствие"], ["pallier", "восполнять"], ["entraver", "мешать"], ["favoriser", "способствовать"], ["s'avérer", "оказаться"],
  ["porter atteinte à", "наносить ущерб"], ["primordial", "первостепенный"], ["un défi", "вызов"], ["instaurer", "вводить, устанавливать"], ["s'accroître", "расти"], ["témoigner de", "свидетельствовать о"],
  ["la pérennité", "долговечность"], ["un préjudice", "ущерб"], ["la concertation", "совместное обсуждение"], ["remédier à", "исправить"], ["une prise de conscience", "осознание"], ["mesuré", "сдержанный, взвешенный"]
]});
})(window.EXAM);
