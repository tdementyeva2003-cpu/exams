/* GRE: дополнительные обороты, лексика, лайфхаки и орфография.
   Как редактировать этот файл: см. README.md в корне репозитория.
   Текст пиши в двойных кавычках, элементы списков разделяй запятыми. */
(function(E){
const S = id => { const s = E.sections.find(x => x.id === id); if (!s) throw new Error("section " + id); return s; };
const T = (sid, start) => { const b = S(sid).blocks.find(b => b[0] === "task" && b[1].indexOf(start) === 0); if (!b) throw new Error("task " + sid + " " + start); return b[3]; };
const add = (sid, start, o) => { const p = T(sid, start); if (o.more) p.more = (p.more || []).concat(o.more); if (o.hacks) p.hacks = (p.hacks || []).concat(o.hacks); };
const put = (sid, blk) => { const bl = S(sid).blocks; let i = bl.findIndex(b => b[0] === "writer" || b[0] === "drill"); if (i < 0) i = bl.length; bl.splice(i, 0, blk); };

/* ---------------- QUANT ---------------- */
add("quant", "Quantitative Comparison", {
  more: [["Язык условий Quant", [
    ["integer", "целое число (включая 0 и отрицательные)"], ["consecutive integers", "последовательные целые"], ["distinct", "различные, не равные друг другу"], ["remainder / quotient", "остаток / частное"],
    ["divisible by", "делится на"], ["factor / multiple", "делитель / кратное"], ["prime number", "простое число (1 не простое, 2 простое)"], ["units digit", "последняя цифра"],
    ["inclusive", "включительно"], ["at least / at most", "не меньше / не больше"], ["nonnegative", "неотрицательный (≥ 0)"], ["reciprocal", "обратное число (1/x)"],
    ["absolute value", "модуль"], ["even / odd", "чётный / нечётный"]
  ]]],
  hacks: ["Дроби с положительными знаменателями сравнивай перекрёстным умножением: 7/9 и 11/14 → 7 × 14 = 98 и 11 × 9 = 99, вторая больше.", "Одинаковое слагаемое в обеих колонках вычеркивай сразу, ещё до анализа."]
});
add("quant", "Problem Solving", {
  more: [["Статистика и проценты по-английски", [
    ["arithmetic mean", "среднее арифметическое"], ["median / mode / range", "медиана / мода / размах"], ["standard deviation", "стандартное отклонение"], ["quartile / percentile", "квартиль / перцентиль"],
    ["weighted average", "взвешенное среднее"], ["ratio / proportion", "отношение / пропорция"], ["rate", "скорость, ставка, темп"], ["compounded annually", "с ежегодной капитализацией"],
    ["markup / discount", "наценка / скидка"], ["percent of / percent greater than", "процент от / на сколько процентов больше"]
  ]], ["Геометрия и вероятность по-английски", [
    ["perpendicular / parallel", "перпендикулярный / параллельный"], ["bisect", "делить пополам"], ["inscribed / circumscribed", "вписанный / описанный"], ["isosceles / equilateral", "равнобедренный / равносторонний"],
    ["hypotenuse / leg", "гипотенуза / катет"], ["arc / sector / chord", "дуга / сектор / хорда"], ["circumference", "длина окружности"], ["slope / y-intercept", "наклон / пересечение с осью y"],
    ["mutually exclusive", "несовместные события"], ["independent events", "независимые события"], ["without replacement", "без возвращения"], ["at random", "случайным образом"]
  ]]],
  hacks: [
    "В задачах на проценты бери исходную величину 100: после +20% и −20% получаешь 96 без формул.",
    "Последняя цифра степени повторяется циклом: у 2 это 2, 4, 8, 6; у 3 это 3, 9, 7, 1; у 7 это 7, 9, 3, 1. 3⁴³ оканчивается на 7 (43 при делении на 4 даёт остаток 3).",
    "Вопрос *must be true* решается поиском контрпримера: вариант, для которого он нашёлся, отпадает.",
    "Сначала посмотри на варианты ответа: если они далеко друг от друга, точный счёт не нужен."
  ]
});
add("quant", "Data Interpretation", {
  more: [["Язык графиков", [
    ["percent change / percentage points", "изменение в % / в процентных пунктах"], ["in thousands / in millions", "в тысячах / в миллионах"], ["per capita", "на душу населения"], ["cumulative", "накопленный"],
    ["share of the total", "доля от общего"], ["ratio of X to Y", "отношение X к Y"], ["fiscal year", "финансовый год"], ["approximately", "приблизительно: можно округлять"]
  ]]]
});
put("quant", ["tips", "Быстрые приёмы Quant", [
  "Признаки делимости: на 3 и 9 по сумме цифр, на 4 по двум последним цифрам, на 6 одновременно на 2 и 3, на 8 по трём последним.",
  "x% от y равно y% от x: 8% от 50 = 50% от 8 = 4.",
  "15% = 10% + его половина, 35% = 25% + 10%: проценты считаются в уме за секунды.",
  "Простые до 50 знать наизусть: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.",
  "Сложные задачи на 2–3 минуты отмечай и иди дальше: лёгкие вопросы в конце блока стоят столько же."
]]);

/* ---------------- VERBAL ---------------- */
add("verbal", "Text Completion", {
  more: [["Конструкции, которые меняют смысл", [
    ["hardly / scarcely", "едва ли, почти не"], ["not so much X as Y", "скорее Y, чем X"], ["if anything", "скорее даже наоборот"], ["for all + noun", "несмотря на (For all his wealth...)"],
    ["albeit", "хотя и"], ["let alone", "не говоря уже о (после отрицания)"], ["to say nothing of", "не говоря уже о"], ["notwithstanding", "несмотря на"],
    ["at odds with", "в противоречии с"], ["anything but", "что угодно, только не (совсем не)"], ["all but", "почти (all but impossible)"], ["no less than", "не меньше чем, целых"]
  ]]],
  hacks: ["*All but* и *anything but* часто переворачивают смысл предложения: *all but impossible* = почти невозможно, *anything but easy* = совсем не легко."]
});
add("verbal", "Sentence Equivalence", {
  more: [["Частые пары синонимов", [
    ["laconic / terse", "немногословный"], ["prodigal / profligate", "расточительный"], ["venerate / revere", "почитать"], ["obdurate / intransigent", "непреклонный"],
    ["garrulous / loquacious", "болтливый"], ["ephemeral / transient", "мимолётный"], ["enervate / debilitate", "ослаблять"], ["disparage / belittle", "принижать"],
    ["candid / forthright", "прямой, откровенный"], ["assuage / mollify", "успокаивать"], ["prosaic / pedestrian", "заурядный"], ["fervent / ardent", "пылкий"],
    ["reticent / taciturn", "сдержанный, молчаливый"], ["truculent / belligerent", "воинственный"], ["exculpate / exonerate", "оправдать"], ["capricious / mercurial", "переменчивый"]
  ]], ["Слова со вторым значением", [
    ["qualify", "оговаривать, ограничивать (qualified praise)"], ["check", "сдерживать"], ["table", "отложить обсуждение (амер.)"], ["pedestrian", "заурядный"],
    ["champion", "отстаивать"], ["arrest", "остановить, приостановить"], ["discriminating", "разборчивый, с тонким вкусом"], ["sanction", "одобрить или наказать"],
    ["wanting", "недостаточный"], ["economy", "бережливость"], ["temper", "смягчать"], ["founder", "потерпеть крах"],
    ["flag", "ослабевать"], ["appreciate", "расти в цене"], ["intimate", "намекать"], ["wax", "расти, усиливаться"]
  ]]],
  hacks: ["Если слово в варианте знакомо в обычном значении, но не подходит, проверь второе значение: GRE любит *flag, temper, check, qualify*."]
});
add("verbal", "Reading Comprehension", {
  more: [["Язык вопросов RC", [
    ["primary purpose", "главная цель текста"], ["the author implies", "автор подразумевает"], ["it can be inferred", "можно заключить"], ["serves to", "служит для"],
    ["most analogous to", "наиболее похоже на"], ["undermine / bolster", "ослабить / подкрепить"], ["the author would most likely agree", "автор скорее всего согласится"], ["the passage is primarily concerned with", "текст в основном посвящён"]
  ]], ["Тон и отношение автора", [
    ["ambivalent", "двойственный"], ["measured", "взвешенный"], ["skeptical", "скептический"], ["dismissive", "пренебрежительный"],
    ["laudatory", "хвалебный"], ["sardonic", "язвительный"], ["incredulous", "недоверчивый"], ["qualified approval", "одобрение с оговорками"],
    ["equivocal", "уклончивый"], ["impartial", "беспристрастный"]
  ]]],
  hacks: ["Тон автора GRE почти всегда умеренный: *qualified approval, measured skepticism*. Крайние варианты (*scathing, euphoric*) верны редко."]
});
put("verbal", ["tips", "Быстрые приёмы Verbal", [
  "TC и SE: закрой варианты рукой или взглядом, подставь своё слово, потом открывай список.",
  "SE за 20 секунд: сначала найди пары синонимов, потом проверь, какая подходит к подсказке.",
  "Короткий RC в один абзац: читай вопрос до текста. Длинный RC: текст первым, вопросы после.",
  "Двухпропусковые TC без уверенности по первому пропуску начинай со второго.",
  "Двух групп слов в день хватает, если каждое слово повторяется в карточках минимум трижды за неделю."
]]);

/* ---------------- AWA ---------------- */
add("awa", "Структура эссе", {
  more: [["Продвинутые обороты эссе", [
    ["It would be naive to assume that", "было бы наивно полагать"], ["This line of reasoning", "эта логика рассуждения"], ["To be sure, / Granted,", "безусловно, (вход в уступку)"], ["There is a kernel of truth in", "в этом есть доля истины"],
    ["The crux of the matter is", "суть вопроса в том"], ["A more nuanced view", "более тонкий взгляд"], ["It is precisely because", "именно потому, что"], ["Herein lies", "в этом и заключается"],
    ["The ramifications of", "последствия"], ["In the final analysis", "в конечном счёте"], ["Taken to its logical extreme", "доведённое до логической крайности"], ["Far from being X, Y is", "Y далеко не X"]
  ]], ["Лексика эссе высокого уровня", [
    ["galvanize", "побуждать к действию"], ["catalyst / impetus", "катализатор / толчок"], ["paradigm shift", "смена парадигмы"], ["salient", "заметный, ключевой"],
    ["untenable", "несостоятельный"], ["intrinsic", "внутренне присущий"], ["efficacy", "эффективность"], ["myopic", "близорукий, недальновидный"],
    ["unintended consequences", "непредвиденные последствия"], ["trade-off", "компромисс, размен"], ["incentivize", "стимулировать"], ["accountability", "подотчётность"]
  ]]],
  hacks: ["Длина коррелирует с баллом: 500–600 слов за 30 минут реально при печати 35+ слов в минуту, проверь свою скорость на typing-тесте.", "Первое предложение каждого абзаца связывает его с тезисом: проверяющий читает быстро и ищет логику именно там."]
});
put("awa", ["tips", "Быстрые приёмы Analytical Writing", [
  "Проверки орфографии в редакторе нет: выучи свои частые ошибки из раздела «Орфография».",
  "Готовь заготовки вступления и перехода к контраргументу: они ускоряют старт и подходят к любой теме.",
  "Один сильный, детально разобранный пример ценнее трёх упомянутых вскользь.",
  "Если тема незнакомая, бери примеры из своей области: экология, международные отношения, наука. Проверяющий оценивает логику аргумента."
]]);

/* ---------------- SPELLING ---------------- */
const idx = E.sections.findIndex(s => s.id === "awa") + 1;
E.sections.splice(idx, 0, { id: "spelling", nav: "Орфография", grp: "Секции", title: "Орфография и пары-ловушки",
  sub: "В редакторе Analytical Writing нет проверки орфографии, а пары похожих слов встречаются в Verbal как ловушки.",
  blocks: [
  ["note", "GRE – американский экзамен, поэтому привычнее американское написание: *analyze, behavior, center, program, judgment, traveling*. Британское ошибкой не считается, если оно последовательно."],
  ["spell", {id: "gre-sp", lang: "en-US", title: "Диктант", note: "Слово звучит синтезом речи, перевод появляется на экране. Enter – проверить, ещё раз Enter – следующее слово.", words: [
    ["accommodate", "вмещать", "cc и mm"], ["acquiesce", "уступать", "acq-, -esce"], ["conscientious", "добросовестный", "-sci-en-tious"], ["consensus", "консенсус", "cons-, без c в середине"],
    ["idiosyncrasy", "своеобразие", "-crasy на конце"], ["inoculate", "прививать", "одно n, одно c"], ["liaison", "связь", "i перед a и после a"], ["minuscule", "крошечный", "minus-, не mini-"],
    ["occurrence", "случай", "cc, rr, -ence"], ["perseverance", "упорство", "-ver-, без r после e"], ["playwright", "драматург", "-wright"], ["privilege", "привилегия", "без d"],
    ["supersede", "заменять", "-sede, единственное слово на -sede"], ["threshold", "порог", "одно h в середине"], ["vacuum", "вакуум", "одно c, два u"], ["publicly", "публично", "-icly, без al"],
    ["withhold", "удерживать", "двойное h"], ["irresistible", "неотразимый", "rr, -ible"], ["indispensable", "незаменимый", "-able"], ["dilemma", "дилемма", "одно l, два m"],
    ["entrepreneur", "предприниматель", "-preneur"], ["existence", "существование", "-ence"], ["foreseeable", "предсказуемый", "fore-, ee"], ["judgment", "суждение", "амер. без e"],
    ["noticeable", "заметный", "e сохраняется"], ["guarantee", "гарантия", "gua-"], ["definitely", "определённо", "-nite-"], ["embarrass", "смущать", "rr и ss"],
    ["harass", "преследовать", "одно r"], ["separate", "отдельный", "-par-"], ["occurred", "произошло", "cc и rr"], ["millennium", "тысячелетие", "ll и nn"],
    ["maintenance", "обслуживание", "-te-nance"], ["recommend", "рекомендовать", "одно c, два m"], ["rhythm", "ритм", "rh-"], ["receive", "получать", "ei после c"],
    ["bureaucracy", "бюрократия", "bureau-"], ["conscience", "совесть", "-science"], ["mischievous", "озорной", "-vous, без i перед ous"], ["pastime", "хобби", "одно s, одно t"],
    ["prejudice", "предубеждение", "pre-ju-"], ["sacrilegious", "кощунственный", "-rile-, не -reli-"], ["acknowledgment", "признание", "амер. без e"], ["beneficial", "полезный", "-fi-cial"],
    ["controversial", "спорный", "-ver-sial"], ["unprecedented", "беспрецедентный", "-ced-"], ["acquaintance", "знакомый", "acq-, -ance"], ["hierarchy", "иерархия", "hier-"]
  ]}],
  ["phr", "Пары-ловушки", [
    ["precede / proceed", "предшествовать / продолжать"], ["elicit / illicit", "вызывать (ответ) / незаконный"], ["allude / elude", "намекать / ускользать"], ["discreet / discrete", "сдержанный / отдельный"],
    ["imply / infer", "подразумевать / делать вывод"], ["eminent / imminent", "выдающийся / неминуемый"], ["flaunt / flout", "выставлять напоказ / пренебрегать (правилами)"], ["prescribe / proscribe", "предписывать / запрещать"],
    ["censor / censure", "цензурировать / порицать"], ["affect / effect", "влиять / эффект"], ["principal / principle", "главный / принцип"], ["complement / compliment", "дополнение / комплимент"],
    ["ingenious / ingenuous", "изобретательный / простодушный"], ["credible / credulous", "правдоподобный / легковерный"], ["tortuous / torturous", "извилистый / мучительный"], ["venal / venial", "продажный / простительный"]
  ]],
  ["tips", "Быстрые правила", [
    "Американское написание: -ize, -or, -er, одна l перед суффиксом (traveling, canceled).",
    "*Supersede* единственное слово на -sede, *exceed, proceed, succeed* на -ceed, остальные на -cede.",
    "Пары *ingenious / ingenuous* и *credible / credulous* встречаются в SE как ловушки: ошибка в одной букве меняет значение на противоположное."
  ]]
]});

E.decks.push({ id: "pairs", title: "Пары-ловушки", words: [
  ["ingenious", "изобретательный"], ["ingenuous", "простодушный"], ["credible", "правдоподобный"], ["credulous", "легковерный"],
  ["tortuous", "извилистый, запутанный"], ["torturous", "мучительный"], ["venal", "продажный"], ["venial", "простительный"],
  ["flaunt", "выставлять напоказ"], ["flout", "демонстративно нарушать"], ["prescribe", "предписывать"], ["proscribe", "запрещать"],
  ["discreet", "сдержанный, тактичный"], ["discrete", "отдельный, дискретный"], ["censure", "порицать"], ["elicit", "вызывать, извлекать"]
]});
})(window.EXAM);
