/* IELTS: дополнительные обороты, лексика, лайфхаки и орфография.
   Как редактировать этот файл: см. README.md в корне репозитория.
   Текст пиши в двойных кавычках, элементы списков разделяй запятыми. */
(function(E){
const S = id => { const s = E.sections.find(x => x.id === id); if (!s) throw new Error("section " + id); return s; };
const T = (sid, start) => { const b = S(sid).blocks.find(b => b[0] === "task" && b[1].indexOf(start) === 0); if (!b) throw new Error("task " + sid + " " + start); return b[3]; };
const add = (sid, start, o) => { const p = T(sid, start); if (o.more) p.more = (p.more || []).concat(o.more); if (o.hacks) p.hacks = (p.hacks || []).concat(o.hacks); };
const put = (sid, blk) => { const bl = S(sid).blocks; let i = bl.findIndex(b => b[0] === "writer" || b[0] === "drill"); if (i < 0) i = bl.length; bl.splice(i, 0, blk); };

/* ---------------- LISTENING ---------------- */
add("listening", "Form, note", {
  more: [["Лексика бланков, брони и услуг", [
    ["accommodation", "жильё (два c, два m)"], ["booking / reservation", "бронирование"], ["refundable / non-refundable", "с возвратом / без возврата денег"], ["insurance", "страховка"],
    ["itinerary", "маршрут поездки"], ["voucher", "ваучер, купон"], ["receipt / invoice", "чек / счёт"], ["instalment", "платёж в рассрочку (брит. одна l)"],
    ["subscription", "подписка"], ["amenities", "удобства, инфраструктура"], ["dietary requirements", "ограничения в питании"], ["occupation", "род занятий"],
    ["emergency contact", "контакт на экстренный случай"], ["vacancy", "свободный номер или вакансия"], ["surcharge", "доплата"], ["deadline", "крайний срок"]
  ]]],
  hacks: [
    "IELTS принимает британское и американское написание (colour и color), главное не смешивать в одном ответе.",
    "При диктовке номера *double five* = 55, *triple seven* = 777, *oh* = 0.",
    "Телефон или номер брони записывай на лист группами по 3–4 цифры, в поле переноси во время паузы."
  ]
});
add("listening", "Multiple choice", {
  more: [["Как говорящие выражают согласие и отказ", [
    ["I'm not keen on...", "мне не очень нравится"], ["I'm all for...", "я полностью за"], ["It's not worth it", "оно того не стоит"], ["That's out of the question", "это исключено"],
    ["I'd rather...", "я бы предпочёл"], ["I can't see the point of...", "не вижу смысла в"], ["That would be ideal", "это было бы идеально (согласие)"], ["I'm having second thoughts", "сомневаюсь, передумываю"],
    ["Let's go with...", "давай выберем (итоговое решение)"], ["On reflection...", "подумав ещё раз (смена решения)"]
  ]]],
  hacks: ["Финальное решение пары почти всегда вводят *So we'll..., Let's go with..., Right, that's settled*: ответ в этой фразе."]
});
add("listening", "Map, plan", {
  more: [["Ещё ориентиры для карт", [
    ["clockwise / anticlockwise", "по / против часовой стрелки"], ["at the rear of", "в задней части"], ["in the foreground", "на переднем плане"], ["alongside", "вдоль, рядом с"],
    ["roundabout", "круговой перекрёсток"], ["crossroads", "перекрёсток"], ["footpath", "пешеходная дорожка"], ["car park", "парковка (брит.)"],
    ["reception desk", "стойка регистрации"], ["cloakroom", "гардероб"], ["the main entrance", "главный вход"], ["straight ahead", "прямо"]
  ]]],
  hacks: ["Перед записью подпиши на листе стрелкой север и точку старта: при упоминании направления не придётся вспоминать.", "Если пропустила одно место, ориентируйся по следующему ориентиру: маршрут продолжается, и ответ можно вычислить методом исключения в конце."]
});
add("listening", "Matching", {
  more: [["Перефразы оценок, которые звучат в записи", [
    ["cost-effective / economical", "недорогой, выгодный"], ["time-consuming", "отнимает много времени"], ["user-friendly", "простой в использовании"], ["outdated / obsolete", "устаревший"],
    ["hands-on", "практический"], ["reliable / dependable", "надёжный"], ["labour-intensive", "трудоёмкий"], ["flexible", "гибкий (по времени)"], ["crowded / packed", "переполненный"], ["remote / isolated", "удалённый"]
  ]]],
  hacks: ["Вычеркивай использованные варианты на листе: последние вопросы решаются быстрее из сокращённого списка."]
});
add("listening", "Sentence, summary", {
  more: [["Академическая лексика лекций (и её орфография)", [
    ["hypothesis / hypotheses", "гипотеза / гипотезы"], ["phenomenon / phenomena", "явление / явления"], ["sample", "выборка, образец"], ["findings", "результаты исследования"],
    ["habitat", "среда обитания"], ["species", "вид (ед. и мн. одинаковы)"], ["erosion", "эрозия"], ["irrigation", "орошение"],
    ["ancestor", "предок"], ["artefact", "артефакт (брит.)"], ["prototype", "прототип"], ["mechanism", "механизм"],
    ["sustainable", "устойчивый"], ["emissions", "выбросы"], ["drought", "засуха"], ["vulnerable", "уязвимый"]
  ]]],
  hacks: ["Во время паузы перед Part 4 прочитай все 10 пропусков и подпиши над каждым часть речи: n, v, adj, number."]
});
put("listening", ["tips", "Быстрые приёмы Listening", [
  "Пока звучит пример в начале Part 1, читай вопросы: пример уже решён на экране.",
  "Пропустила два ответа подряд – сразу переходи к третьему пропуску и ищи, где сейчас говорящий: догонять потерянное бесполезно.",
  "Числа пиши без пробелов и запятых: 1500, 2030, 6.30 pm.",
  "В 2 минуты проверки иди по порядку: орфография, лимит слов, пустые поля. Пустое поле заполни любым вероятным словом.",
  "Слушай вопросы следующей части ещё до её начала: экран позволяет листать вперёд."
]]);

/* ---------------- READING ---------------- */
add("reading", "True / False", {
  more: [["Слова-ловушки в утверждениях", [
    ["only / solely / exclusively", "только (сильное ограничение)"], ["all / every / always / never", "абсолютные слова, частый признак FALSE"], ["mainly / largely / predominantly", "в основном"], ["partly / to some extent", "частично"],
    ["the first / one of the first", "первый / один из первых"], ["increasingly", "всё больше"], ["few / a few", "мало / несколько"], ["little / a little", "мало / немного"]
  ]], ["Глаголы разной степени уверенности", [
    ["prove / demonstrate", "доказывать (сильно)"], ["suggest / indicate", "указывать, предполагать (слабее)"], ["claim / assert", "утверждать (без доказательства)"], ["assume / speculate", "предполагать, строить догадки"],
    ["confirm", "подтверждать"], ["cast doubt on", "ставить под сомнение"]
  ]]],
  hacks: ["Если в утверждении стоит *only, all, always*, а в тексте такого ограничения нет, ответ почти всегда FALSE или NOT GIVEN.", "*Suggest* в тексте и *prove* в утверждении – классическое расхождение силы: ответ FALSE или NOT GIVEN."]
});
add("reading", "Yes / No", {
  more: [["Лексика авторской оценки", [
    ["misguided", "ошибочный"], ["overestimated / overstated", "преувеличенный"], ["unjustified / unwarranted", "необоснованный"], ["compelling / persuasive", "убедительный"],
    ["flawed", "с изъянами"], ["dubious", "сомнительный"], ["commendable", "похвальный"], ["regrettable", "достойный сожаления"],
    ["it remains to be seen", "это ещё предстоит выяснить"], ["arguably", "пожалуй, можно сказать"], ["admittedly", "надо признать"], ["by no means", "ни в коем случае не"]
  ]]]
});
add("reading", "Matching headings", {
  more: [["Типичная лексика заголовков", [
    ["the origins of", "происхождение"], ["an overview of", "общий обзор"], ["a turning point", "поворотный момент"], ["an unexpected outcome", "неожиданный результат"],
    ["conflicting views", "противоречивые мнения"], ["a proposed solution", "предложенное решение"], ["future prospects", "перспективы"], ["the drawbacks of", "недостатки"],
    ["early attempts", "ранние попытки"], ["a common misconception", "распространённое заблуждение"], ["the impact of X on Y", "влияние X на Y"], ["a breakthrough", "прорыв"]
  ]]],
  hacks: ["Заголовки про *origins, early attempts, background* чаще подходят первым абзацам, про *future prospects, implications* – последним.", "Если два абзаца подходят к одному заголовку, сравни их первые предложения: заголовок описывает тему, заданную в начале."]
});
add("reading", "Matching information", {
  more: [["Формулировки задания и что искать", [
    ["a reference to", "упоминание (может быть одно слово)"], ["an account of", "описание событий"], ["an explanation of", "объяснение причин"], ["a comparison between", "сравнение"],
    ["a prediction about", "прогноз (will, likely, expected)"], ["a recommendation", "рекомендация (should, need to)"], ["an example of", "пример (for instance, such as)"], ["a description of a method", "описание метода (how, by using)"]
  ]]],
  hacks: ["По типу информации ищи грамматику: прогноз выдают *will / is likely to*, рекомендацию – *should / ought to*, сравнение – *than / whereas*."]
});
add("reading", "Matching features", {
  more: [["Глаголы, вводящие чужое мнение", [
    ["argue / contend / maintain", "утверждать, настаивать"], ["propose / put forward", "предлагать (идею)"], ["reveal / uncover", "обнаружить"], ["challenge / dispute", "оспорить"],
    ["acknowledge / concede", "признать"], ["warn", "предупредить"]
  ]]]
});
add("reading", "Summary, note", {
  more: [["Части речи, которые меняет перефраз", [
    ["rely on → reliance", "зависеть → зависимость"], ["emerge → emergence", "появиться → появление"], ["persist → persistence", "сохраняться → устойчивость"], ["scarce → scarcity", "дефицитный → дефицит"],
    ["vary → variation / variety", "меняться → вариация / разнообразие"], ["maintain → maintenance", "поддерживать → обслуживание (без -tain-)"], ["succeed → success", "преуспеть → успех"], ["available → availability", "доступный → доступность"],
    ["deteriorate → deterioration", "ухудшаться → ухудшение"], ["sustain → sustainability", "поддерживать → устойчивость"]
  ]]],
  hacks: ["Если в summary есть банк слов, вычеркни варианты, которые грамматически не встают ни в один пропуск: обычно остаётся вдвое меньше."]
});
add("reading", "Multiple choice, short", {
  hacks: ["В multiple choice с вопросом о главной мысли текста ответ обычно повторяет идею первого и последнего абзацев.", "В short answer бери слова из текста без изменений и проверяй лимит."]
});
put("reading", ["tips", "Быстрые приёмы Reading", [
  "Начинай с вопросов: текст читай по ним, полное чтение отнимает 6–8 минут, которых не хватит на третий текст.",
  "Карта абзацев на листе: буква абзаца и 3 слова о нём. Заполняется за 2 минуты и экономит 5 на поиске.",
  "Имена, числа, даты, заглавные буквы и курсив видны при беглом взгляде: ищи их первыми.",
  "Выделяй найденные ключевые слова в тексте: на компьютере выделение остаётся до конца секции.",
  "Застряла на вопросе дольше 90 секунд – ставь самый вероятный ответ и переходи: каждый вопрос стоит одинаково."
]]);

/* ---------------- TASK 1 ---------------- */
add("task1", "Line graph", {
  more: [["Продвинутые обороты динамики", [
    ["exhibit an upward trend", "демонстрировать рост"], ["experience a sharp decline", "пережить резкий спад"], ["follow a similar pattern", "следовать похожей динамике"], ["mirror", "повторять тренд другой линии"],
    ["diverge", "расходиться (о линиях)"], ["a period of stability", "период стабильности"], ["register growth of X%", "показать рост на X%"], ["outstrip / surpass", "обогнать, превзойти"],
    ["be on an upward trajectory", "уверенно расти"], ["regain ground", "отыграть потерянное"], ["peaks and troughs", "пики и спады"], ["the figure for X", "показатель для X"]
  ]], ["Прилагательные и наречия уровня 8", [
    ["a meteoric rise", "стремительный рост"], ["a precipitous fall", "обвальное падение"], ["a modest gain", "скромный рост"], ["an erratic pattern", "неравномерная динамика"],
    ["volatile", "изменчивый, нестабильный"], ["negligible", "ничтожный"], ["markedly", "заметно"], ["moderately", "умеренно"]
  ]]],
  hacks: ["Не начинай каждое предложение с названия линии: чередуй *X rose...*, *There was a rise in X...*, *A rise in X was recorded...*."]
});
add("task1", "Bar chart", {
  more: [["Доли и сравнение", [
    ["the bulk of", "основная часть"], ["a mere 5%", "всего лишь 5%"], ["a negligible proportion", "ничтожная доля"], ["roughly one in five", "примерно каждый пятый"],
    ["by a considerable margin", "со значительным отрывом"], ["in descending order", "в порядке убывания"], ["comparable to / on a par with", "сопоставимо с / наравне с"], ["account for the remainder", "составлять остальное"],
    ["lag behind", "отставать"], ["the respective figures were", "соответствующие показатели составили"], ["X was the single largest category", "X был самой крупной категорией"], ["the two were neck and neck", "шли вровень"]
  ]]]
});
add("task1", "Table", {
  more: [["Работа с цифрами", [
    ["the highest figure was recorded in", "наибольший показатель зафиксирован в"], ["ranging from X to Y", "в диапазоне от X до Y"], ["followed by", "за ним следует"], ["in second place", "на втором месте"],
    ["the gap between X and Y widened / narrowed", "разрыв увеличился / сократился"], ["X was double / treble Y", "X вдвое / втрое больше Y"], ["with the exception of", "за исключением"], ["the most striking difference", "самое заметное различие"]
  ]]],
  hacks: ["Обведи на листе максимум и минимум в каждой строке и колонке до начала текста: это и есть материал для overview и body."]
});
add("task1", "Process", {
  more: [["Глаголы процессов (пассив)", [
    ["is fed into", "подаётся в"], ["is subjected to", "подвергается"], ["undergoes", "проходит (обработку)"], ["is extracted", "извлекается"],
    ["is filtered / purified", "фильтруется / очищается"], ["is heated to", "нагревается до"], ["is poured into", "заливается в"], ["is dispatched", "отправляется"],
    ["culminates in", "завершается"], ["the end product", "конечный продукт"], ["a by-product", "побочный продукт"], ["raw materials", "сырьё"]
  ]]],
  hacks: ["Посчитай стрелки на схеме: число этапов сразу идёт в overview (*there are seven stages*).", "Подписи схемы используй, меняя форму слова: *crushing* на схеме → *is crushed* в тексте."]
});
add("task1", "Map", {
  more: [["Описание изменений территории", [
    ["underwent considerable development", "значительно застроили"], ["was transformed into", "превратили в"], ["became more urbanised", "стало более городским"], ["was redeveloped", "перестроили"],
    ["trees were felled / cleared", "деревья вырубили"], ["sprang up", "появились (быстро)"], ["in place of", "на месте"], ["at the expense of", "за счёт (с потерей)"],
    ["a pedestrian zone", "пешеходная зона"], ["a residential area", "жилой район"]
  ]]]
});
put("task1", ["tips", "Быстрые приёмы Task 1", [
  "Первые 2 минуты: на листе отметь максимум, минимум и самое большое изменение. Это готовый overview.",
  "Вступление пишется заменой слов задания: *shows* → *illustrates*, *from 2000 to 2020* → *over a twenty-year period*, *number of people* → *how many people*.",
  "Округляй числа словами: 49.6% → *just under half*, 24.8% → *nearly a quarter*, 33% → *a third*.",
  "Единицы называй один раз во вступлении (*in millions*), дальше пиши только числа.",
  "Объём держи по схеме 1 + 2 + 4 + 4 предложения: это ровно 170–190 слов.",
  "Много однотипных категорий собирай в одну фразу: *The remaining three categories changed only slightly*."
]]);

/* ---------------- TASK 2 ---------------- */
add("task2", "Opinion", {
  more: [["Обороты для позиции", [
    ["I wholeheartedly agree that", "полностью согласна"], ["I am inclined to believe that", "склоняюсь к мнению"], ["I take the view that", "придерживаюсь мнения"], ["I partly agree, in that", "частично согласна в том, что"],
    ["There is a compelling case for", "есть веские основания для"], ["It is difficult to dispute that", "трудно оспорить"], ["This view is largely misguided", "эта точка зрения в основном ошибочна"], ["on the grounds that", "на том основании, что"]
  ]]]
});
add("task2", "Discussion", {
  more: [["Как представлять чужие позиции", [
    ["Proponents of X argue that", "сторонники X утверждают"], ["Opponents contend that", "противники настаивают"], ["Advocates maintain that", "защитники считают"], ["Critics point out that", "критики указывают"],
    ["There is some merit in this view", "в этой позиции есть резон"], ["From this perspective", "с этой точки зрения"], ["Both views have their merits", "обе позиции имеют достоинства"], ["Weighing up both sides", "взвесив обе стороны"]
  ]]]
});
add("task2", "Advantages", {
  more: [["Плюсы и минусы", [
    ["a major drawback", "серьёзный недостаток"], ["a significant benefit", "существенное преимущество"], ["the downside / the upside", "минус / плюс"], ["pose a threat to", "представлять угрозу для"],
    ["give rise to", "порождать"], ["a mixed blessing", "неоднозначное благо"], ["reap the benefits", "пожинать плоды"], ["at the cost of", "ценой"],
    ["outweigh", "перевешивать"], ["far-reaching consequences", "далеко идущие последствия"]
  ]]]
});
add("task2", "Problem", {
  more: [["Проблемы и решения", [
    ["tackle / address", "решать, браться за"], ["alleviate", "облегчать"], ["curb", "сдерживать, ограничивать"], ["combat", "бороться с"],
    ["a root cause", "коренная причина"], ["stem from", "проистекать из"], ["a viable solution", "реалистичное решение"], ["impose restrictions on", "вводить ограничения"],
    ["raise awareness of", "повышать осведомлённость"], ["provide incentives", "создавать стимулы"], ["crack down on", "жёстко пресекать"], ["a long-term strategy", "долгосрочная стратегия"]
  ]]]
});
add("task2", "Two-part", {
  more: [["Причины и оценка явления", [
    ["This can be attributed to", "это объясняется"], ["A key factor behind this is", "ключевой фактор"], ["This trend is largely driven by", "тенденция в основном обусловлена"], ["One explanation is that", "одно из объяснений"],
    ["I regard this as a positive development", "считаю это позитивным явлением"], ["a welcome change", "отрадная перемена"], ["a cause for concern", "повод для беспокойства"], ["on the whole", "в целом"]
  ]]]
});
put("task2", ["phr", "Замены простых слов на уровень 8", [
  ["very important → paramount, crucial, vital", "очень важный"], ["good → beneficial, advantageous", "хороший, полезный"], ["bad → detrimental, adverse", "плохой, вредный"], ["big → substantial, considerable", "большой"],
  ["show → illustrate, demonstrate", "показывать"], ["think → contend, maintain", "считать"], ["use → utilise, harness", "использовать"], ["get → obtain, acquire", "получать"],
  ["help → facilitate, foster", "помогать"], ["many → numerous, a multitude of", "много"], ["nowadays → in the contemporary world", "в наше время"], ["because of → owing to, on account of", "из-за"],
  ["very → highly, remarkably", "очень"], ["a lot of → a great deal of, a wealth of", "много"], ["stop → curb, halt", "остановить"], ["start → initiate, launch", "начать"],
  ["grow → escalate, proliferate", "расти, множиться"], ["need → necessitate, call for", "требовать"]
]]);
put("task2", ["phr", "Темы: окружающая среда", [
  ["irreversible damage", "необратимый ущерб"], ["deplete natural resources", "истощать природные ресурсы"], ["carbon-neutral", "углеродно-нейтральный"], ["ecological footprint", "экологический след"],
  ["transition to renewables", "переход на ВИЭ"], ["climate resilience", "устойчивость к изменению климата"], ["environmentally conscious", "экологически сознательный"], ["a cross-border problem", "трансграничная проблема"]
]]);
put("task2", ["phr", "Темы: образование и работа", [
  ["academic attainment", "академические достижения"], ["holistic development", "всестороннее развитие"], ["foster creativity", "развивать творческие способности"], ["equip students with", "давать студентам (навыки)"],
  ["a competitive job market", "конкурентный рынок труда"], ["transferable skills", "универсальные навыки"], ["job satisfaction", "удовлетворённость работой"], ["burnout", "выгорание"]
]]);
put("task2", ["phr", "Темы: технологии и медиа", [
  ["pervasive", "всепроникающий"], ["the digital divide", "цифровое неравенство"], ["unprecedented access to", "беспрецедентный доступ к"], ["over-reliance on", "чрезмерная зависимость от"],
  ["echo chambers", "эхо-камеры"], ["erode privacy", "подрывать приватность"], ["algorithmic bias", "алгоритмическая предвзятость"], ["sensationalist reporting", "сенсационная подача новостей"]
]]);
put("task2", ["phr", "Темы: общество, власть, экономика", [
  ["marginalised groups", "маргинализированные группы"], ["social mobility", "социальная мобильность"], ["public expenditure", "государственные расходы"], ["a welfare state", "социальное государство"],
  ["the widening wealth gap", "растущий разрыв в доходах"], ["economic disparity", "экономическое неравенство"], ["civic engagement", "гражданская активность"], ["legislation", "законодательство"],
  ["urban regeneration", "обновление городской среды"], ["an ageing workforce", "стареющая рабочая сила"]
]]);
put("task2", ["tips", "Быстрые приёмы Task 2", [
  "План за 5 минут в четыре строки: тип вопроса, позиция, идея 1 + пример, идея 2 + пример.",
  "Вступление собирается за 2 минуты: перефраз темы одной фразой + позиция одной фразой. Длинные вступления крадут время у аргументов.",
  "Примеры можно придумать (*a 2023 study in Finland found...*): экзаменатор оценивает язык и логику, факты он не проверяет.",
  "Вывод – это перефраз позиции и двух причин одним предложением, новых идей туда не добавляй.",
  "Ключевые слова темы повторяй через синонимы: *university → higher education → tertiary institutions*.",
  "Последние 5 минут проверяй ошибки, которые ты делаешь чаще всего: веди свой список из 5 пунктов и проверяй только их."
]]);

/* ---------------- SPEAKING ---------------- */
add("speaking", "Part 1", {
  more: [["Обороты для расширения ответа", [
    ["What I particularly like about it is...", "что мне особенно нравится"], ["mainly because...", "в основном потому что"], ["back when I was a kid...", "когда я была ребёнком"], ["these days...", "сейчас, в последнее время"],
    ["not to mention...", "не говоря уже о"], ["as well as that...", "кроме того"], ["I'd have to say...", "пожалуй, скажу"], ["I wouldn't say I'm..., but...", "не сказала бы, что я..., но"]
  ]]]
});
add("speaking", "Part 2", {
  more: [["Описания и чувства уровня 8", [
    ["breathtaking", "захватывающий дух"], ["nerve-racking", "нервный, напряжённый"], ["rewarding", "приносящий удовлетворение"], ["eye-opening", "открывающий глаза"],
    ["overwhelming", "ошеломляющий"], ["exhilarated", "в восторге, на подъёме"], ["relieved", "с облегчением"], ["it dawned on me that", "до меня дошло, что"],
    ["I was over the moon", "была на седьмом небе"], ["it was a turning point", "это стало поворотным моментом"], ["it left a lasting impression", "это произвело долгое впечатление"], ["in hindsight", "оглядываясь назад"]
  ]]],
  hacks: ["Чтобы растянуть до 2 минут, добавь сравнение тогда / сейчас и одну фразу о том, что бы ты сделала иначе.", "Когда экзаменатор говорит *Thank you*, заканчивай предложение и замолкай: обрыв на полуслове на балл не влияет."]
});
add("speaking", "Part 3", {
  more: [["Абстрактные обороты", [
    ["on a societal level", "на уровне общества"], ["from an economic standpoint", "с экономической точки зрения"], ["in the long run", "в долгосрочной перспективе"], ["by and large", "в целом"],
    ["there's a growing tendency for", "растёт тенденция к"], ["it boils down to", "всё сводится к"], ["it's a fine balance between", "это тонкий баланс между"], ["this is partly due to", "это отчасти связано с"],
    ["it varies from person to person", "это зависит от человека"], ["I'd venture to say that", "осмелюсь сказать"]
  ]]]
});
put("speaking", ["tips", "Быстрые приёмы Speaking", [
  "Первая фраза перефразирует вопрос (*Why do people...? – I think people do this mainly because...*): это 2–3 секунды на мысль без паузы.",
  "За минуту Part 2 пиши только ключевые слова, полные предложения не успеешь и не прочитаешь.",
  "Экзаменатор прерывает в Part 1 по регламенту: это не означает ошибку.",
  "Ошиблась – быстро исправься и продолжай: самокоррекция работает на балл.",
  "В истории Part 2 следи за прошедшим временем: это самый частый источник ошибок у сильных кандидатов.",
  "Перед входом в кабинет проговори вслух минуту по-английски, чтобы рот и мозг уже переключились."
]]);

/* ---------------- SPELLING SECTION ---------------- */
const idx = E.sections.findIndex(s => s.id === "speaking") + 1;
E.sections.splice(idx, 0, { id: "spelling", nav: "Орфография", grp: "Секции", title: "Орфография: слова, в которых легко ошибиться",
  sub: "В Listening и Writing орфографическая ошибка стоит баллов: в Listening ответ не засчитывается, в Writing снижается Lexical Resource.",
  blocks: [
  ["note", "IELTS принимает британское и американское написание. Выбери один вариант и держи его во всём тексте: *organise / organize*, *colour / color*, *travelling / traveling*."],
  ["spell", {id: "ielts-sp", lang: "en-GB", title: "Диктант", note: "Слово звучит синтезом речи, перевод появляется на экране. Напиши слово и нажми Enter. Ошибки можно одной кнопкой отправить в «Мои слова».", words: [
    ["accommodation", "жильё", "два c и два m"], ["address", "адрес", "два d и два s"], ["advertisement", "реклама", "-tise-ment"], ["argument", "аргумент", "без e после u"],
    ["beginning", "начало", "двойное n"], ["believe", "верить", "ie: i before e"], ["business", "бизнес", "busi-, не buis-"], ["calendar", "календарь", "-dar на конце"],
    ["colleague", "коллега", "два l, -eague"], ["committee", "комитет", "mm, tt, ee"], ["conscious", "сознательный", "-sc-ious"], ["definitely", "определённо", "-nite-, не -nate-"],
    ["embarrass", "смущать", "rr и ss"], ["environment", "окружающая среда", "-ron-ment, n перед m"], ["exaggerate", "преувеличивать", "двойное g"], ["February", "февраль", "Feb-ru-ary"],
    ["foreign", "иностранный", "-eign"], ["government", "правительство", "-ern-ment, n перед m"], ["guarantee", "гарантия", "gua-"], ["immediately", "немедленно", "двойное m, -tely"],
    ["independent", "независимый", "-ent на конце"], ["knowledge", "знание", "-ledge"], ["library", "библиотека", "-brary, r дважды"], ["maintenance", "обслуживание", "main-te-nance"],
    ["necessary", "необходимый", "один c, два s"], ["occasion", "случай", "два c, одно s"], ["occurred", "произошло", "cc и rr"], ["opportunity", "возможность", "двойное p"],
    ["parliament", "парламент", "-lia-"], ["persuade", "убеждать", "-suade"], ["pronunciation", "произношение", "-nun-, без o"], ["questionnaire", "анкета", "двойное n, -aire"],
    ["receive", "получать", "ei после c"], ["recommend", "рекомендовать", "одно c, два m"], ["restaurant", "ресторан", "-aurant"], ["rhythm", "ритм", "rh-, без гласных в конце"],
    ["schedule", "расписание", "sch-"], ["separate", "отдельный", "sep-a-rate"], ["successful", "успешный", "cc, ss, одно l"], ["temperature", "температура", "-pera-"],
    ["tomorrow", "завтра", "одно m, два r"], ["until", "до", "одно l"], ["Wednesday", "среда", "Wed-nes-"], ["whether", "ли (союз)", "wh-, путают с weather"],
    ["achieve", "достигать", "ie"], ["behaviour", "поведение", "брит. -our"], ["centre", "центр", "брит. -re"], ["programme", "программа", "брит. -mme"],
    ["travelling", "путешествие", "брит. двойное l"], ["sufficient", "достаточный", "ff, -cient"], ["phenomenon", "явление", "мн. phenomena"], ["criteria", "критерии", "ед. criterion"],
    ["licence", "лицензия (сущ., брит.)", "глагол license"], ["practise", "практиковаться (глагол, брит.)", "существительное practice"], ["Mediterranean", "Средиземное море", "одно d, одно t, двойное r"], ["millennium", "тысячелетие", "ll и nn"],
    ["privilege", "привилегия", "-vi-lege, без d"], ["possession", "владение", "ss и ss"], ["harass", "преследовать", "одно r, два s"], ["weird", "странный", "ei, исключение"],
    ["analyse", "анализировать", "брит. -yse"], ["therefore", "поэтому", "-fore"], ["hypothesis", "гипотеза", "hy-po-"], ["vegetable", "овощ", "-geta-"]
  ]}],
  ["phr", "Пары, которые путают", [
    ["affect / effect", "влиять (гл.) / эффект (сущ.)"], ["principle / principal", "принцип / главный, директор"], ["complement / compliment", "дополнение / комплимент"], ["economic / economical", "экономический / экономный"],
    ["historic / historical", "исторически значимый / относящийся к истории"], ["lose / loose", "терять / свободный"], ["advice / advise", "совет (сущ.) / советовать (гл.)"], ["its / it's", "его / it is"],
    ["fewer / less", "меньше (исчисл.) / меньше (неисчисл.)"], ["number / amount", "количество (исчисл.) / объём (неисчисл.)"], ["stationary / stationery", "неподвижный / канцтовары"], ["there / their / they're", "там / их / they are"]
  ]],
  ["tips", "Быстрые правила", [
    "*i before e except after c*: believe, achieve, но receive, ceiling. Исключения: weird, seize, foreign.",
    "Британский английский удваивает l перед суффиксом: travelling, cancelled, modelling.",
    "Сущ. на -ce, глагол на -se (брит.): practice / practise, licence / license, advice / advise.",
    "Слова на -ment после n сохраняют n: government, environment.",
    "Перед экзаменом прогони диктант дважды и добавь все ошибки в карточки."
  ]]
]});

/* extra deck: high-level words for flashcards */
E.decks.push({ id: "upgrade", title: "Лексика уровня 8", words: [
  ["paramount", "первостепенный", "Safety is paramount."], ["detrimental", "вредный", "detrimental to health"], ["substantial", "существенный"], ["utilise / harness", "использовать", "harness solar energy"],
  ["facilitate", "облегчать"], ["foster", "развивать"], ["a multitude of", "множество"], ["owing to", "из-за"], ["escalate", "обостряться, расти"], ["proliferate", "распространяться"],
  ["necessitate", "требовать"], ["alleviate", "облегчать"], ["curb", "сдерживать"], ["pervasive", "всепроникающий"], ["irreversible", "необратимый"], ["resilience", "устойчивость, жизнестойкость"],
  ["disparity", "неравенство"], ["unprecedented", "беспрецедентный"], ["far-reaching", "далеко идущий"], ["a mixed blessing", "неоднозначное благо"]
]});
})(window.EXAM);
