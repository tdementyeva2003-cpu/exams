/* GRE: подробный курс математики на английском с переводом, примеры с решениями, термины.
   Как редактировать этот файл: см. README.md в корне репозитория.
   Текст пиши в двойных кавычках, элементы списков разделяй запятыми. */
/* GRE Quant: detailed bilingual course. Block types:
   ["bi", "English", "Русский"]          – paragraph + translation
   ["fx", [["formula", "пояснение"], ...]] – formula list
   ["ex", {n, tag, q, qru, o?, steps:[[en, ru], ...], a}] – worked example, solution hidden until clicked
   ["traps", [["English", "Русский"], ...]]
   ["phr", "Title", [["term", "перевод", "пример"], ...]] – key terms (go to flashcards) */
(function(E){
const G = "Математика подробно";
const bi = (en, ru) => ["bi", en, ru];
const H = t => ["h", t];
const sections = [

/* ======================= 1. NUMBERS ======================= */
{ id: "m-num", nav: "Числа и арифметика", grp: G, bilingual: true, deckTitle: "Термины: числа",
  title: "Numbers and arithmetic · Числа и арифметика",
  sub: "Integers, divisibility, primes, remainders, exponents and roots. На эту тему приходится заметная часть вопросов Quant, особенно Quantitative Comparison.",
  blocks: [
  ["phr", "Key terms · Термины", [
    ["integer", "целое число (…, −2, −1, 0, 1, 2, …)"], ["positive / negative", "положительное / отрицательное"], ["nonnegative", "неотрицательное (≥ 0)"], ["nonzero", "ненулевое"],
    ["even / odd", "чётное / нечётное"], ["consecutive integers", "последовательные целые (5, 6, 7)"], ["digit", "цифра (0–9)"], ["units digit / ones digit", "цифра единиц (последняя цифра)"],
    ["tens digit", "цифра десятков"], ["factor / divisor", "делитель"], ["multiple", "кратное"], ["divisible by", "делится на (без остатка)"],
    ["prime number", "простое число"], ["composite number", "составное число"], ["prime factorization", "разложение на простые множители"], ["greatest common divisor (GCD)", "наибольший общий делитель (НОД)"],
    ["least common multiple (LCM)", "наименьшее общее кратное (НОК)"], ["dividend", "делимое"], ["quotient", "частное"], ["remainder", "остаток"],
    ["exponent / power", "показатель степени / степень"], ["base", "основание степени"], ["squared / cubed", "в квадрате / в кубе"], ["square root / cube root", "квадратный / кубический корень"],
    ["reciprocal", "обратное число (1/x)"], ["absolute value", "модуль, абсолютная величина"], ["number line", "числовая прямая"], ["sum / difference / product", "сумма / разность / произведение"],
    ["rational / irrational number", "рациональное / иррациональное число"], ["distinct", "различные (не равные друг другу)"], ["inclusive", "включительно"], ["real number", "действительное число"]
  ]],
  H("1. Integers, even and odd · Целые, чётные и нечётные"),
  bi("Integers are the numbers …, −3, −2, −1, 0, 1, 2, 3, … **Zero is an integer, it is even, and it is neither positive nor negative.** An even integer is divisible by 2; an odd integer leaves remainder 1 when divided by 2.",
     "Целые числа: …, −3, −2, −1, 0, 1, 2, 3, … **Ноль – целое и чётное число, при этом ни положительное, ни отрицательное.** Чётное делится на 2, нечётное при делении на 2 даёт остаток 1."),
  ["fx", [["even ± even = even;  odd ± odd = even", "сумма или разность двух чётных или двух нечётных чётна"], ["even ± odd = odd", "чётное ± нечётное = нечётное"], ["odd × odd = odd;  even × any integer = even", "произведение нечётно, только если все множители нечётные"], ["(−)×(−) = (+);  an even number of negative factors → positive product", "чётное число отрицательных множителей даёт положительное произведение"]]],
  ["ex", {n: "Example 1", tag: "Problem Solving", q: "If n is an odd integer, which of the following must be even? (A) n + 2 (B) 3n (C) n² (D) n + 5 (E) 2n + 1", qru: "Если n – нечётное целое, какое выражение обязательно чётное?",
    steps: [["n + 2 = odd + even = odd; 3n = odd × odd = odd; n² = odd × odd = odd.", "n + 2 нечётно; 3n и n² – произведения нечётных, тоже нечётны."], ["n + 5 = odd + odd = even. 2n + 1 = even + odd = odd.", "n + 5 = нечётное + нечётное = чётное. 2n + 1 нечётно."], ["Check with a number: n = 3 → 5, 9, 9, 8, 7. Only (D) is even.", "Проверка подстановкой n = 3: чётно только (D)."]],
    a: "Answer · Ответ: (D)"}],
  H("2. Factors, multiples, primes · Делители, кратные, простые"),
  bi("A **factor** (divisor) of n divides n with no remainder: the factors of 12 are 1, 2, 3, 4, 6, 12. A **multiple** of n is n times an integer: 12, 24, 36, … A **prime number** has exactly two distinct positive factors, 1 and itself. **1 is not prime; 2 is the only even prime.**",
     "**Делитель** n делит n без остатка: делители 12 – это 1, 2, 3, 4, 6, 12. **Кратное** n – это n, умноженное на целое: 12, 24, 36, … **Простое число** имеет ровно два различных положительных делителя: 1 и само себя. **1 не простое, 2 – единственное чётное простое.**"),
  bi("Every integer greater than 1 has a unique **prime factorization**, e.g. 360 = 2³ × 3² × 5. Use it to count factors, find the GCD and the LCM.",
     "У каждого целого больше 1 есть единственное **разложение на простые множители**, например 360 = 2³ × 3² × 5. Через него считают число делителей, НОД и НОК."),
  ["fx", [["If n = pᵃ × qᵇ × rᶜ, number of positive factors = (a+1)(b+1)(c+1)", "число положительных делителей"], ["GCD: common primes with the SMALLER exponents", "НОД: общие простые с меньшими степенями"], ["LCM: all primes with the LARGER exponents", "НОК: все простые с большими степенями"], ["GCD(a, b) × LCM(a, b) = a × b", "произведение НОД и НОК равно произведению чисел"], ["Primes below 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47", "простые до 50 – выучить наизусть"]]],
  ["ex", {n: "Example 2", tag: "Numeric Entry", q: "How many positive divisors does 72 have?", qru: "Сколько положительных делителей у числа 72?",
    steps: [["72 = 8 × 9 = 2³ × 3².", "Раскладываем: 72 = 2³ × 3²."], ["Number of divisors = (3 + 1)(2 + 1) = 12.", "Число делителей = (3 + 1)(2 + 1) = 12."], ["Check: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72.", "Проверка перечислением: 12 делителей."]],
    a: "Answer · Ответ: 12"}],
  ["ex", {n: "Example 3", tag: "Problem Solving", q: "What are the greatest common divisor and the least common multiple of 12 and 18?", qru: "Найдите НОД и НОК чисел 12 и 18.",
    steps: [["12 = 2² × 3;  18 = 2 × 3².", "Разложения: 12 = 2² × 3, 18 = 2 × 3²."], ["GCD = 2¹ × 3¹ = 6 (smaller exponents).", "НОД = 2 × 3 = 6 (меньшие степени)."], ["LCM = 2² × 3² = 36 (larger exponents). Check: 6 × 36 = 216 = 12 × 18.", "НОК = 2² × 3² = 36. Проверка: 6 × 36 = 216 = 12 × 18."]],
    a: "Answer · Ответ: GCD = 6, LCM = 36"}],
  H("3. Remainders · Остатки"),
  bi("When n is divided by d: **n = d·q + r**, where q is the quotient and r is the remainder, 0 ≤ r < d. The remainder is always smaller than the divisor and can be 0.",
     "При делении n на d: **n = d·q + r**, где q – частное, r – остаток, 0 ≤ r < d. Остаток всегда меньше делителя и может быть равен 0."),
  bi("Remainders can be added and multiplied: the remainder of a product equals the remainder of the product of remainders. Fastest check: pick the smallest number that fits the condition.",
     "Остатки можно складывать и перемножать: остаток произведения равен остатку от произведения остатков. Самая быстрая проверка – подставить наименьшее число, подходящее под условие."),
  ["ex", {n: "Example 4", tag: "Problem Solving", q: "When the positive integer n is divided by 5, the remainder is 3. What is the remainder when 4n is divided by 5?", qru: "При делении натурального n на 5 остаток 3. Какой остаток даёт 4n при делении на 5?",
    steps: [["Pick n = 3 (3 ÷ 5 = 0 remainder 3). Then 4n = 12.", "Берём n = 3. Тогда 4n = 12."], ["12 = 5 × 2 + 2, so the remainder is 2.", "12 = 5 × 2 + 2, остаток 2."], ["Rule check: 4 × 3 = 12 → remainder of 12 divided by 5 is 2. Another test: n = 8 → 32 = 5 × 6 + 2.", "По правилу: 4 × 3 = 12, остаток 2. Проверка n = 8: 32 = 5 × 6 + 2."]],
    a: "Answer · Ответ: 2"}],
  H("4. Exponents · Степени"),
  ["fx", [["aᵐ × aⁿ = aᵐ⁺ⁿ", "при умножении показатели складываются"], ["aᵐ ÷ aⁿ = aᵐ⁻ⁿ", "при делении вычитаются"], ["(aᵐ)ⁿ = aᵐⁿ", "степень степени: показатели перемножаются"], ["(ab)ⁿ = aⁿbⁿ;  (a/b)ⁿ = aⁿ/bⁿ", "степень произведения и дроби"], ["a⁰ = 1 (a ≠ 0);  a⁻ⁿ = 1/aⁿ", "нулевая и отрицательная степень"], ["a^(1/2) = √a;  a^(m/n) = (ⁿ√a)ᵐ", "дробная степень – это корень"], ["aᵐ + aᵐ + aᵐ = 3·aᵐ  (NOT a³ᵐ)", "сложение одинаковых степеней"]]],
  bi("Size traps: for 0 < x < 1, higher powers are SMALLER (0.5² = 0.25 < 0.5). A negative base with an even exponent gives a positive result: (−2)⁴ = 16, but −2⁴ = −16.",
     "Ловушки размера: при 0 < x < 1 степень уменьшает число (0.5² = 0.25). Отрицательное основание в чётной степени даёт плюс: (−2)⁴ = 16, но −2⁴ = −16 (минус не входит в степень)."),
  ["ex", {n: "Example 5", tag: "Numeric Entry", q: "If 2^(x + 3) = 32, what is the value of x?", qru: "Если 2^(x + 3) = 32, чему равен x?",
    steps: [["Write 32 as a power of 2: 32 = 2⁵.", "Записываем 32 как степень двойки: 32 = 2⁵."], ["Equal bases → equal exponents: x + 3 = 5.", "Основания равны, значит равны показатели: x + 3 = 5."], ["x = 2.", "x = 2."]],
    a: "Answer · Ответ: 2"}],
  ["ex", {n: "Example 6", tag: "Problem Solving", q: "What is the units digit of 7⁴²?", qru: "Какая последняя цифра у числа 7⁴²?",
    steps: [["Units digits of powers of 7 repeat in a cycle of 4: 7, 9, 3, 1, 7, 9, …", "Последние цифры степеней 7 повторяются с периодом 4: 7, 9, 3, 1."], ["42 ÷ 4 = 10 remainder 2, so 7⁴² has the same units digit as 7².", "42 при делении на 4 даёт остаток 2, значит последняя цифра как у 7²."], ["7² = 49 → units digit 9.", "7² = 49, последняя цифра 9."]],
    a: "Answer · Ответ: 9"}],
  H("5. Roots · Корни"),
  ["fx", [["√(ab) = √a × √b;  √(a/b) = √a / √b", "корень произведения и частного"], ["√a + √b ≠ √(a + b)", "корень суммы НЕ равен сумме корней"], ["√72 = √(36 × 2) = 6√2", "выносим полный квадрат из-под корня"], ["√(x²) = |x|", "корень из квадрата равен модулю"]]],
  ["ex", {n: "Example 7", tag: "Problem Solving", q: "√50 + √18 = ?  (A) √68 (B) 8√2 (C) 2√17 (D) 15√2 (E) 34", qru: "Найдите √50 + √18.",
    steps: [["√50 = √(25 × 2) = 5√2;  √18 = √(9 × 2) = 3√2.", "Выносим полные квадраты: √50 = 5√2, √18 = 3√2."], ["5√2 + 3√2 = 8√2. (A) is the classic trap: √50 + √18 ≠ √68.", "5√2 + 3√2 = 8√2. Вариант (A) – типичная ловушка."]],
    a: "Answer · Ответ: (B) 8√2"}],
  ["traps", [
    ["Assuming a variable is an integer or positive when the problem does not say so.", "Считать переменную целой или положительной, когда в условии этого нет."],
    ["Forgetting that 1 is not prime and 2 is prime.", "Забыть, что 1 не простое, а 2 простое."],
    ["Treating −2⁴ as (−2)⁴.", "Путать −2⁴ и (−2)⁴."],
    ["Thinking that the remainder can be larger than the divisor.", "Думать, что остаток может быть больше делителя."]
  ]]
]},

/* ======================= 2. FRACTIONS, PERCENTS, RATIOS ======================= */
{ id: "m-pct", nav: "Дроби, проценты, отношения", grp: G, bilingual: true, deckTitle: "Термины: дроби и проценты",
  title: "Fractions, percents, ratios · Дроби, проценты, отношения",
  sub: "Самая частая тема GRE: проценты встречаются и в чистой арифметике, и в текстовых задачах, и в графиках.",
  blocks: [
  ["phr", "Key terms · Термины", [
    ["fraction", "дробь"], ["numerator / denominator", "числитель / знаменатель"], ["simplify / reduce", "сократить"], ["equivalent fractions", "равные (эквивалентные) дроби"],
    ["mixed number", "смешанное число (2½)"], ["improper fraction", "неправильная дробь (5/2)"], ["decimal / decimal point", "десятичная дробь / запятая"], ["place value", "разряд"],
    ["tenths / hundredths / thousandths", "десятые / сотые / тысячные"], ["round to the nearest", "округлить до ближайшего"], ["percent", "процент"], ["percent increase / decrease", "увеличение / уменьшение в процентах"],
    ["percent change", "изменение в процентах"], ["percentage point", "процентный пункт"], ["discount", "скидка"], ["markup", "наценка"],
    ["sales tax", "налог с продаж"], ["profit / cost / revenue", "прибыль / затраты / выручка"], ["ratio", "отношение, соотношение"], ["proportion", "пропорция"],
    ["directly proportional", "прямо пропорционально"], ["inversely proportional", "обратно пропорционально"], ["rate", "скорость, темп, ставка"], ["per", "на, за каждый (per hour – в час)"]
  ]],
  H("1. Fractions · Дроби"),
  ["fx", [["a/b + c/d = (ad + bc)/bd", "сложение через общий знаменатель"], ["a/b × c/d = ac/bd", "умножение: числитель на числитель"], ["a/b ÷ c/d = a/b × d/c", "деление = умножение на обратную дробь"], ["Compare a/b and c/d (b, d > 0): compare ad and bc", "сравнение дробей перекрёстным умножением"]]],
  ["ex", {n: "Example 1", tag: "Quantitative Comparison", q: "Quantity A: 5/8.  Quantity B: 7/11.", qru: "Величина A: 5/8. Величина B: 7/11. Что больше?",
    steps: [["Cross-multiply: 5 × 11 = 55 and 7 × 8 = 56.", "Перекрёстно умножаем: 5 × 11 = 55 и 7 × 8 = 56."], ["56 > 55, so 7/11 > 5/8.", "56 > 55, значит 7/11 больше."]],
    a: "Answer · Ответ: Quantity B is greater · B больше"}],
  ["ex", {n: "Example 2", tag: "Numeric Entry", q: "(2/3) ÷ (4/9) = ?  Give the answer as a fraction.", qru: "Вычислите (2/3) ÷ (4/9), ответ дробью.",
    steps: [["Dividing by 4/9 = multiplying by 9/4.", "Деление на 4/9 – это умножение на 9/4."], ["2/3 × 9/4 = 18/12 = 3/2.", "2/3 × 9/4 = 18/12 = 3/2."]],
    a: "Answer · Ответ: 3/2"}],
  H("2. Percents · Проценты"),
  bi("**Percent** means \"per hundred\": 35% = 35/100 = 0.35. Three core questions: **What is p% of x?** → (p/100)·x. **x is what percent of y?** → (x/y)·100. **x is p% of what number?** → x ÷ (p/100).",
     "**Процент** – сотая часть: 35% = 0.35. Три базовых вопроса: **сколько составляет p% от x** → (p/100)·x; **сколько процентов x составляет от y** → (x/y)·100; **p% какого числа равно x** → x ÷ (p/100)."),
  ["fx", [["Percent change = (new − old) / old × 100%", "изменение всегда делим на СТАРОЕ значение"], ["Increase by p%: × (1 + p/100);  decrease by p%: × (1 − p/100)", "рост на 15% = ×1.15, падение на 15% = ×0.85"], ["Successive changes multiply: +20% then −25% → 1.2 × 0.75 = 0.9", "последовательные изменения перемножаются"], ["x% of y = y% of x", "8% от 50 = 50% от 8 = 4"]]],
  ["ex", {n: "Example 3", tag: "Problem Solving", q: "A price rose from $40 to $50. By what percent did it increase? If it then falls back from $50 to $40, by what percent does it decrease?", qru: "Цена выросла с 40 до 50 долларов. На сколько процентов? А если затем упадёт обратно с 50 до 40?",
    steps: [["Increase: (50 − 40)/40 = 10/40 = 25%.", "Рост: 10/40 = 25%."], ["Decrease: (50 − 40)/50 = 10/50 = 20%.", "Падение: 10/50 = 20% – делим на новое «старое» значение 50."], ["The same $10 change is a different percent because the base is different.", "Одинаковые 10 долларов дают разный процент, потому что база разная."]],
    a: "Answer · Ответ: +25%, then −20%"}],
  ["ex", {n: "Example 4", tag: "Problem Solving", q: "A stock price increases by 20% and then decreases by 25%. What is the net percent change?", qru: "Цена акции выросла на 20%, затем упала на 25%. Каково итоговое изменение?",
    steps: [["Start with 100 (easiest base).", "Возьмём стартовую цену 100."], ["100 × 1.2 = 120; 120 × 0.75 = 90.", "100 × 1.2 = 120; 120 × 0.75 = 90."], ["90 vs 100 → a 10% decrease, not −5%.", "Итог 90 – падение на 10%, а не на 5%."]],
    a: "Answer · Ответ: −10%"}],
  bi("**Percent vs percentage points.** If an interest rate goes from 10% to 12%, it rose by 2 percentage points, but by 20% in relative terms (2/10).",
     "**Проценты и процентные пункты.** Если ставка выросла с 10% до 12%, это рост на 2 процентных пункта, но на 20% в относительном выражении (2/10)."),
  H("3. Ratios and proportions · Отношения и пропорции"),
  bi("A ratio a : b compares parts. If boys : girls = 3 : 5, then the class has 3 + 5 = 8 parts; boys are 3/8 of the class and girls are 5/8. A ratio does NOT tell you the actual numbers unless a total is given.",
     "Отношение a : b сравнивает части. Если мальчики : девочки = 3 : 5, то в классе 8 частей; мальчики – 3/8, девочки – 5/8. Без общего количества реальные числа из отношения не узнать."),
  ["ex", {n: "Example 5", tag: "Numeric Entry", q: "The ratio of boys to girls in a class is 3 : 5. There are 40 students. How many girls are there?", qru: "В классе мальчиков и девочек в отношении 3 : 5, всего 40 учеников. Сколько девочек?",
    steps: [["Total parts: 3 + 5 = 8; one part = 40 / 8 = 5 students.", "Всего 8 частей, одна часть = 40 / 8 = 5."], ["Girls = 5 parts × 5 = 25.", "Девочек 5 частей × 5 = 25."]],
    a: "Answer · Ответ: 25"}],
  ["ex", {n: "Example 6", tag: "Problem Solving", q: "If a : b = 2 : 3 and b : c = 4 : 5, what is a : c?", qru: "Если a : b = 2 : 3 и b : c = 4 : 5, найдите a : c.",
    steps: [["Make b the same in both ratios: LCM of 3 and 4 is 12.", "Приводим b к одному числу: НОК(3, 4) = 12."], ["a : b = 8 : 12 and b : c = 12 : 15, so a : b : c = 8 : 12 : 15.", "a : b = 8 : 12, b : c = 12 : 15, значит a : b : c = 8 : 12 : 15."], ["a : c = 8 : 15.", "a : c = 8 : 15."]],
    a: "Answer · Ответ: 8 : 15"}],
  ["traps", [
    ["Dividing a percent change by the new value instead of the original.", "Делить изменение на новое значение вместо исходного."],
    ["Adding successive percents (+20% − 25% ≠ −5%).", "Складывать последовательные проценты."],
    ["Confusing \"percent of\" (part/whole) with \"percent greater than\" ((a − b)/b).", "Путать «процент от» и «на сколько процентов больше»."],
    ["Reading a ratio as actual quantities.", "Принимать отношение за реальные количества."]
  ]]
]},

/* ======================= 3. ALGEBRA ======================= */
{ id: "m-alg", nav: "Алгебра", grp: G, bilingual: true, deckTitle: "Термины: алгебра",
  title: "Algebra · Алгебра",
  sub: "Уравнения, системы, квадратные выражения, неравенства, модули и функции.",
  blocks: [
  ["phr", "Key terms · Термины", [
    ["variable", "переменная"], ["constant", "константа"], ["coefficient", "коэффициент"], ["expression", "выражение"],
    ["equation", "уравнение"], ["term / like terms", "слагаемое / подобные слагаемые"], ["solve for x", "найти x, выразить x"], ["solution / root", "решение / корень уравнения"],
    ["linear equation", "линейное уравнение"], ["system of equations", "система уравнений"], ["quadratic equation", "квадратное уравнение"], ["factor (verb)", "разложить на множители"],
    ["expand / multiply out", "раскрыть скобки"], ["substitute / plug in", "подставить"], ["simplify", "упростить"], ["difference of squares", "разность квадратов"],
    ["perfect square", "полный квадрат"], ["inequality", "неравенство"], ["greater than or equal to (≥)", "больше или равно"], ["at least / at most", "не меньше / не больше"],
    ["function", "функция"], ["input / output", "аргумент / значение функции"], ["undefined", "не определено (например, деление на 0)"], ["in terms of x", "выраженный через x"]
  ]],
  H("1. Linear equations · Линейные уравнения"),
  bi("Do the same operation to both sides until x is alone. Collect x-terms on one side and numbers on the other.",
     "Выполняем одинаковые действия с обеими частями, пока x не останется один. Слагаемые с x переносим в одну сторону, числа в другую."),
  ["ex", {n: "Example 1", tag: "Numeric Entry", q: "If 5x − 7 = 3x + 9, what is x?", qru: "Решите уравнение 5x − 7 = 3x + 9.",
    steps: [["Subtract 3x from both sides: 2x − 7 = 9.", "Вычитаем 3x: 2x − 7 = 9."], ["Add 7: 2x = 16, so x = 8.", "Прибавляем 7: 2x = 16, x = 8."]],
    a: "Answer · Ответ: 8"}],
  H("2. Systems of equations · Системы уравнений"),
  bi("Two methods: **substitution** (express one variable and plug it in) and **elimination** (add or subtract the equations). On the GRE the question often asks for a combination like x + y, and adding the equations gives it directly.",
     "Два способа: **подстановка** (выражаем одну переменную и подставляем) и **сложение/вычитание** уравнений. В GRE часто спрашивают комбинацию вроде x + y, и её даёт простое сложение уравнений."),
  ["ex", {n: "Example 2", tag: "Numeric Entry", q: "If 2a + b = 11 and a + 2b = 13, what is a + b?", qru: "Если 2a + b = 11 и a + 2b = 13, чему равно a + b?",
    steps: [["Add the equations: 3a + 3b = 24.", "Складываем уравнения: 3a + 3b = 24."], ["Divide by 3: a + b = 8. No need to find a and b separately.", "Делим на 3: a + b = 8. Находить a и b по отдельности не нужно."]],
    a: "Answer · Ответ: 8"}],
  H("3. Quadratics · Квадратные выражения"),
  ["fx", [["(a + b)² = a² + 2ab + b²", "квадрат суммы"], ["(a − b)² = a² − 2ab + b²", "квадрат разности"], ["a² − b² = (a − b)(a + b)", "разность квадратов – самое частое на GRE"], ["x² + bx + c = (x + p)(x + q), where p + q = b, pq = c", "разложение на множители"], ["If (x − p)(x − q) = 0, then x = p or x = q", "произведение равно нулю, когда один из множителей ноль"]]],
  ["ex", {n: "Example 3", tag: "Problem Solving", q: "Solve x² − 5x − 14 = 0.", qru: "Решите уравнение x² − 5x − 14 = 0.",
    steps: [["Find two numbers with product −14 and sum −5: −7 and 2.", "Ищем два числа с произведением −14 и суммой −5: это −7 и 2."], ["(x − 7)(x + 2) = 0 → x = 7 or x = −2.", "(x − 7)(x + 2) = 0, значит x = 7 или x = −2."]],
    a: "Answer · Ответ: x = 7 or x = −2"}],
  ["ex", {n: "Example 4", tag: "Numeric Entry", q: "If x² − y² = 48 and x + y = 8, what is x − y?", qru: "Если x² − y² = 48 и x + y = 8, найдите x − y.",
    steps: [["x² − y² = (x − y)(x + y).", "Раскладываем разность квадратов."], ["48 = (x − y) × 8 → x − y = 6.", "48 = (x − y) × 8, значит x − y = 6."]],
    a: "Answer · Ответ: 6"}],
  H("4. Inequalities · Неравенства"),
  bi("Solve inequalities like equations, with one rule: **multiplying or dividing by a negative number flips the inequality sign.** Never multiply by a variable unless you know its sign.",
     "Неравенства решаются как уравнения с одним правилом: **при умножении или делении на отрицательное число знак меняется на противоположный.** На переменную умножать нельзя, если её знак неизвестен."),
  ["ex", {n: "Example 5", tag: "Problem Solving", q: "Solve −3x + 4 > 16.", qru: "Решите неравенство −3x + 4 > 16.",
    steps: [["Subtract 4: −3x > 12.", "Вычитаем 4: −3x > 12."], ["Divide by −3 and flip the sign: x < −4.", "Делим на −3 и меняем знак: x < −4."]],
    a: "Answer · Ответ: x < −4"}],
  ["ex", {n: "Example 6", tag: "Problem Solving", q: "If 2 < x < 5 and −3 < y < 1, which of the following describes all possible values of x − y? (A) −1 < x − y < 4 (B) 1 < x − y < 8 (C) 5 < x − y < 6 (D) −1 < x − y < 8 (E) 3 < x − y < 6", qru: "Если 2 < x < 5 и −3 < y < 1, в каких пределах лежит x − y?",
    steps: [["Smallest x − y: smallest x minus largest y = 2 − 1 = 1.", "Минимум x − y: наименьший x минус наибольший y = 2 − 1 = 1."], ["Largest x − y: largest x minus smallest y = 5 − (−3) = 8.", "Максимум: наибольший x минус наименьший y = 5 − (−3) = 8."], ["The bounds are not reached (strict inequalities): 1 < x − y < 8.", "Неравенства строгие, поэтому 1 < x − y < 8."]],
    a: "Answer · Ответ: (B)"}],
  H("5. Absolute value · Модуль"),
  bi("|x| is the distance from x to 0 on the number line, so it is never negative. |x − a| is the distance between x and a.",
     "|x| – расстояние от x до 0 на числовой прямой, поэтому модуль не бывает отрицательным. |x − a| – расстояние между x и a."),
  ["fx", [["|x − 3| = 5 → x − 3 = 5 or x − 3 = −5 → x = 8 or x = −2", "уравнение с модулем даёт два случая"], ["|x − 3| < 5 → −5 < x − 3 < 5 → −2 < x < 8", "«меньше» – отрезок между точками"], ["|x − 3| > 5 → x > 8 or x < −2", "«больше» – два луча наружу"]]],
  H("6. Functions and symbols · Функции и значки"),
  bi("f(x) = 2x² − 3 means: take the input, square it, multiply by 2, subtract 3. To find f(−2), substitute −2 for every x. GRE also invents symbols (◆, #) defined in the question: just follow the definition.",
     "f(x) = 2x² − 3 означает: возводим аргумент в квадрат, умножаем на 2, вычитаем 3. Чтобы найти f(−2), подставляем −2 вместо каждого x. Ещё GRE придумывает значки (◆, #) с определением в условии: просто следуй определению."),
  ["ex", {n: "Example 7", tag: "Numeric Entry", q: "If f(x) = 2x² − 3, what is f(−2)?", qru: "Если f(x) = 2x² − 3, найдите f(−2).",
    steps: [["f(−2) = 2(−2)² − 3 = 2 × 4 − 3.", "Подставляем: 2 × (−2)² − 3 = 2 × 4 − 3."], ["= 8 − 3 = 5.", "= 5."]],
    a: "Answer · Ответ: 5"}],
  ["ex", {n: "Example 8", tag: "Numeric Entry", q: "For all numbers a and b, a ◆ b = a² − ab. What is 3 ◆ (−1)?", qru: "Для любых a и b: a ◆ b = a² − ab. Найдите 3 ◆ (−1).",
    steps: [["a = 3, b = −1: 3² − 3 × (−1).", "a = 3, b = −1: 3² − 3 × (−1)."], ["= 9 + 3 = 12.", "= 9 + 3 = 12."]],
    a: "Answer · Ответ: 12"}],
  ["traps", [
    ["Forgetting to flip the inequality when dividing by a negative.", "Забыть поменять знак неравенства при делении на отрицательное."],
    ["Dividing both sides by x and losing the solution x = 0.", "Делить на x и терять решение x = 0."],
    ["Taking only the positive root: x² = 25 means x = 5 OR x = −5.", "Брать только положительный корень: x² = 25 даёт x = ±5."],
    ["Solving for a and b separately when the question asks for a + b.", "Искать a и b по отдельности, когда спрашивают a + b."]
  ]]
]},

/* ======================= 4. WORD PROBLEMS ======================= */
{ id: "m-word", nav: "Текстовые задачи", grp: G, bilingual: true, deckTitle: "Термины: текстовые задачи",
  title: "Word problems · Текстовые задачи",
  sub: "Главная сложность здесь в переводе английского условия на язык уравнений. Начни со словаря перевода, потом переходи к типам задач.",
  blocks: [
  ["phr", "From words to math · Перевод условия", [
    ["is / was / equals", "= (равно)"], ["of", "× (умножить: half of x = x/2)"], ["more than / greater than", "+ (5 more than x = x + 5)"], ["less than", "− в обратном порядке (5 less than x = x − 5)"],
    ["fewer than", "меньше на (для исчисляемых)"], ["per", "÷ (на каждый: miles per hour)"], ["twice / double", "2 × (вдвое)"], ["triple", "3 ×"],
    ["half / a third / a quarter", "1/2, 1/3, 1/4"], ["exceeds by", "больше на"], ["the sum of", "сумма"], ["the product of", "произведение"],
    ["the difference between a and b", "разность a − b"], ["consecutive", "идущие подряд"], ["average speed", "средняя скорость"], ["round trip", "путь туда и обратно"],
    ["rate of work", "производительность"], ["working together", "работая вместе"], ["principal", "основная сумма вклада"], ["simple / compound interest", "простые / сложные проценты"],
    ["compounded annually", "с ежегодной капитализацией"], ["solution (chemistry)", "раствор"], ["concentration", "концентрация"], ["neither / both", "ни один / оба"]
  ]],
  bi("Translate step by step: **\"5 less than twice a number\" = 2x − 5** (the order flips after \"less than\"). Name the unknown, write one equation per fact, then solve.",
     "Переводи по шагам: **«на 5 меньше удвоенного числа» = 2x − 5** (после less than порядок переворачивается). Обозначь неизвестное, на каждый факт запиши уравнение и реши."),
  ["ex", {n: "Example 1", tag: "Numeric Entry", q: "The sum of three consecutive integers is 72. What is the largest of the three integers?", qru: "Сумма трёх последовательных целых чисел равна 72. Найдите наибольшее.",
    steps: [["Let the integers be n, n + 1, n + 2.", "Обозначим числа n, n + 1, n + 2."], ["3n + 3 = 72 → 3n = 69 → n = 23.", "3n + 3 = 72, n = 23."], ["Largest = 23 + 2 = 25. Shortcut: the middle one is 72 / 3 = 24.", "Наибольшее 25. Короче: среднее число равно 72 / 3 = 24."]],
    a: "Answer · Ответ: 25"}],
  H("1. Rate, time, distance · Скорость, время, расстояние"),
  ["fx", [["distance = rate × time  (d = rt)", "путь = скорость × время"], ["average speed = total distance / total time", "средняя скорость = весь путь / всё время (НЕ среднее скоростей)"], ["Moving toward each other: rates add;  same direction: rates subtract", "навстречу – скорости складываются, вдогонку – вычитаются"]]],
  ["ex", {n: "Example 2", tag: "Problem Solving", q: "A car travels 120 miles at 60 miles per hour and returns the same 120 miles at 40 miles per hour. What is its average speed for the round trip? (A) 45 (B) 48 (C) 50 (D) 52 (E) 55", qru: "Машина проехала 120 миль со скоростью 60 миль в час и вернулась со скоростью 40. Какова средняя скорость за весь путь?",
    steps: [["Time there: 120 / 60 = 2 h; time back: 120 / 40 = 3 h.", "Туда 2 часа, обратно 3 часа."], ["Total distance 240 miles, total time 5 h.", "Весь путь 240 миль, всё время 5 часов."], ["Average speed = 240 / 5 = 48 mph. The trap answer is 50, the simple average of the speeds.", "Средняя скорость 240 / 5 = 48. Ловушка – 50, среднее арифметическое скоростей."]],
    a: "Answer · Ответ: (B) 48"}],
  H("2. Work · Совместная работа"),
  ["fx", [["rate = 1 job / time;  rates add when working together", "производительность = 1 / время; при совместной работе складываются"], ["1/T = 1/a + 1/b", "время совместной работы"]]],
  ["ex", {n: "Example 3", tag: "Problem Solving", q: "Pipe A can fill a tank in 4 hours and pipe B in 6 hours. How long will it take both pipes together?", qru: "Труба A наполняет бак за 4 часа, труба B за 6 часов. За сколько наполнят вместе?",
    steps: [["Rates: 1/4 and 1/6 of the tank per hour.", "Производительности: 1/4 и 1/6 бака в час."], ["Together: 1/4 + 1/6 = 3/12 + 2/12 = 5/12 per hour.", "Вместе 5/12 бака в час."], ["Time = 12/5 = 2.4 hours = 2 hours 24 minutes.", "Время 12/5 = 2.4 часа = 2 часа 24 минуты."]],
    a: "Answer · Ответ: 2.4 hours · 2.4 часа"}],
  H("3. Interest · Проценты по вкладам"),
  ["fx", [["Simple interest: I = P × r × t", "простые проценты: сумма × ставка × годы"], ["Compound interest: A = P(1 + r/n)^(nt)", "сложные: n – число начислений в год"]]],
  ["ex", {n: "Example 4", tag: "Quantitative Comparison", q: "$1,000 is invested at 10% annual interest for 2 years. Quantity A: the final amount with interest compounded annually. Quantity B: $1,200.", qru: "1000 долларов положили под 10% годовых на 2 года. A: итоговая сумма с ежегодной капитализацией. B: 1200 долларов.",
    steps: [["Compound: 1,000 × 1.1² = 1,000 × 1.21 = $1,210.", "Сложные проценты: 1000 × 1.21 = 1210."], ["Simple interest would give 1,000 + 2 × 100 = $1,200.", "Простые дали бы 1200."], ["1,210 > 1,200.", "1210 больше 1200."]],
    a: "Answer · Ответ: Quantity A is greater · A больше"}],
  H("4. Mixtures and weighted averages · Смеси"),
  ["ex", {n: "Example 5", tag: "Numeric Entry", q: "How many liters of a 20% salt solution must be added to 10 liters of a 50% salt solution to make a 30% solution?", qru: "Сколько литров 20-процентного солевого раствора нужно добавить к 10 литрам 50-процентного, чтобы получить 30-процентный?",
    steps: [["Salt before: 0.2x + 0.5 × 10 = 0.2x + 5.", "Соль в смеси: 0.2x + 5."], ["Salt after: 0.3 × (10 + x).", "Соли должно быть 0.3 × (10 + x)."], ["0.2x + 5 = 3 + 0.3x → 2 = 0.1x → x = 20.", "0.2x + 5 = 3 + 0.3x, отсюда x = 20."]],
    a: "Answer · Ответ: 20 liters · 20 литров"}],
  H("5. Overlapping sets · Пересекающиеся множества"),
  ["fx", [["Total = Group A + Group B − Both + Neither", "всего = A + B − оба + ни одного"]]],
  ["ex", {n: "Example 6", tag: "Numeric Entry", q: "Of 50 students, 30 study French, 25 study Spanish, and 10 study both. How many study neither language?", qru: "Из 50 студентов 30 учат французский, 25 испанский, 10 оба языка. Сколько не учат ни одного?",
    steps: [["Students with at least one language: 30 + 25 − 10 = 45.", "Хотя бы один язык: 30 + 25 − 10 = 45."], ["Neither: 50 − 45 = 5.", "Ни одного: 50 − 45 = 5."]],
    a: "Answer · Ответ: 5"}],
  ["traps", [
    ["Averaging two speeds instead of dividing total distance by total time.", "Усреднять скорости вместо деления всего пути на всё время."],
    ["Writing \"5 less than x\" as 5 − x.", "Записывать «5 less than x» как 5 − x."],
    ["Counting the \"both\" group twice in overlapping sets.", "Считать группу «оба» дважды."],
    ["Mixing units: minutes and hours, percent and decimal.", "Смешивать единицы: минуты и часы, проценты и доли."]
  ]]
]},

/* ======================= 5. STATISTICS ======================= */
{ id: "m-stat", nav: "Статистика", grp: G, bilingual: true, deckTitle: "Термины: статистика",
  title: "Statistics · Статистика",
  sub: "Среднее, медиана, разброс, квартили и нормальное распределение. Считать стандартное отклонение почти никогда не нужно, нужно понимать его смысл.",
  blocks: [
  ["phr", "Key terms · Термины", [
    ["data set", "набор данных"], ["mean / average / arithmetic mean", "среднее арифметическое"], ["median", "медиана"], ["mode", "мода (самое частое значение)"],
    ["range", "размах (макс − мин)"], ["standard deviation", "стандартное отклонение"], ["variance", "дисперсия"], ["spread / dispersion", "разброс"],
    ["outlier", "выброс (аномальное значение)"], ["quartile", "квартиль"], ["first / third quartile (Q1 / Q3)", "первый / третий квартиль"], ["interquartile range (IQR)", "межквартильный размах"],
    ["percentile", "перцентиль"], ["box plot / box-and-whisker plot", "диаграмма размаха (ящик с усами)"], ["frequency", "частота"], ["frequency distribution", "распределение частот"],
    ["relative frequency", "относительная частота"], ["histogram", "гистограмма"], ["normal distribution", "нормальное распределение"], ["bell-shaped / symmetric", "колоколообразное / симметричное"],
    ["skewed", "скошенное, асимметричное"], ["weighted average", "взвешенное среднее"], ["sample / population", "выборка / генеральная совокупность"], ["data point", "значение, точка данных"]
  ]],
  H("1. Mean, median, mode, range · Среднее, медиана, мода, размах"),
  bi("**Mean** = sum ÷ number of values. **Median** = the middle value of the ordered list (the average of the two middle values if the count is even). **Mode** = the most frequent value. **Range** = largest − smallest. The mean is pulled by outliers; the median is not.",
     "**Среднее** = сумма ÷ количество. **Медиана** – середина упорядоченного ряда (при чётном количестве – среднее двух центральных). **Мода** – самое частое значение. **Размах** = максимум − минимум. Выбросы сдвигают среднее, медиану почти не трогают."),
  ["ex", {n: "Example 1", tag: "Problem Solving", q: "For the data 3, 7, 7, 8, 15, find the mean, median, mode, and range.", qru: "Для набора 3, 7, 7, 8, 15 найдите среднее, медиану, моду и размах.",
    steps: [["Sum = 40, count = 5 → mean = 8.", "Сумма 40, значений 5, среднее 8."], ["Ordered list, middle value → median = 7. Most frequent → mode = 7.", "Медиана (третье значение) 7, мода 7."], ["Range = 15 − 3 = 12.", "Размах 15 − 3 = 12."]],
    a: "Answer · Ответ: mean 8, median 7, mode 7, range 12"}],
  ["ex", {n: "Example 2", tag: "Numeric Entry", q: "The average of 6 numbers is 15. When one number, 20, is removed, what is the average of the remaining numbers?", qru: "Среднее 6 чисел равно 15. Одно число, 20, убрали. Каково среднее оставшихся?",
    steps: [["Sum = 6 × 15 = 90 (work with sums, not averages).", "Сумма 6 × 15 = 90 – работаем с суммами."], ["New sum = 90 − 20 = 70, count = 5.", "Новая сумма 70, чисел 5."], ["New average = 70 / 5 = 14.", "Новое среднее 14."]],
    a: "Answer · Ответ: 14"}],
  ["ex", {n: "Example 3", tag: "Numeric Entry", q: "Class A has 20 students with an average score of 80; class B has 30 students with an average of 70. What is the average score of all 50 students?", qru: "В классе A 20 учеников со средним баллом 80, в классе B 30 учеников со средним 70. Каков средний балл всех 50?",
    steps: [["Total points: 20 × 80 + 30 × 70 = 1,600 + 2,100 = 3,700.", "Сумма баллов 3700."], ["Weighted average = 3,700 / 50 = 74. It is closer to 70 because class B is larger.", "Взвешенное среднее 74, ближе к 70, потому что класс B больше."]],
    a: "Answer · Ответ: 74"}],
  H("2. Standard deviation · Стандартное отклонение"),
  bi("Standard deviation measures how far the values are spread from the mean. You almost never calculate it on the GRE; you compare spreads.",
     "Стандартное отклонение показывает, насколько значения разбросаны вокруг среднего. Считать его на GRE почти не придётся, нужно сравнивать разброс."),
  ["fx", [["Add the same constant to every value → SD does not change", "прибавить одно число ко всем – SD не меняется"], ["Multiply every value by k → SD is multiplied by |k|", "умножить все на k – SD умножается на |k|"], ["Values bunched near the mean → small SD; values far from the mean → large SD", "кучно – маленький SD, далеко от среднего – большой"], ["All values equal → SD = 0", "все значения равны – SD = 0"]]],
  ["ex", {n: "Example 4", tag: "Quantitative Comparison", q: "Set A: {2, 4, 6, 8, 10}. Set B: {12, 14, 16, 18, 20}. Quantity A: the standard deviation of set A. Quantity B: the standard deviation of set B.", qru: "Сравните стандартные отклонения наборов A {2, 4, 6, 8, 10} и B {12, 14, 16, 18, 20}.",
    steps: [["Set B = set A + 10 for every value.", "Набор B – это набор A, к каждому значению прибавили 10."], ["Adding a constant shifts the data but does not change the spread.", "Сдвиг не меняет разброс."]],
    a: "Answer · Ответ: The two quantities are equal · Величины равны"}],
  bi("**Normal distribution** (GRE values): about 34% of the data lies between the mean and 1 SD above it, about 14% between 1 and 2 SD, and about 2% more than 2 SD above. The same holds below the mean.",
     "**Нормальное распределение** (значения из официального гайда GRE): около 34% данных лежит между средним и +1 SD, около 14% между +1 и +2 SD, около 2% выше +2 SD. Ниже среднего – симметрично."),
  ["ex", {n: "Example 5", tag: "Problem Solving", q: "Test scores are normally distributed with a mean of 500 and a standard deviation of 100. Approximately what percent of the scores are between 400 and 700?", qru: "Баллы распределены нормально, среднее 500, SD 100. Какой примерно процент баллов лежит между 400 и 700?",
    steps: [["400 is 1 SD below the mean; 700 is 2 SD above.", "400 – это −1 SD, 700 – это +2 SD."], ["From −1 SD to the mean: 34%. From the mean to +2 SD: 34% + 14% = 48%.", "От −1 SD до среднего 34%, от среднего до +2 SD 48%."], ["Total ≈ 34% + 48% = 82%.", "Итого около 82%."]],
    a: "Answer · Ответ: ≈ 82%"}],
  H("3. Quartiles, percentiles, box plots · Квартили, перцентили, ящик с усами"),
  bi("Order the data. The median splits it into a lower and an upper half. **Q1** is the median of the lower half, **Q3** the median of the upper half. **IQR = Q3 − Q1**. The p-th **percentile** is the value at or below which about p% of the data lie. A box plot shows min, Q1, median, Q3, max.",
     "Упорядочи данные. Медиана делит их на нижнюю и верхнюю половину. **Q1** – медиана нижней половины, **Q3** – верхней. **IQR = Q3 − Q1**. **p-й перцентиль** – значение, не выше которого лежит около p% данных. Ящик с усами показывает минимум, Q1, медиану, Q3, максимум."),
  ["ex", {n: "Example 6", tag: "Problem Solving", q: "For the data 2, 4, 5, 7, 9, 10, 12, 15, find Q1, the median, Q3, and the interquartile range.", qru: "Для данных 2, 4, 5, 7, 9, 10, 12, 15 найдите Q1, медиану, Q3 и межквартильный размах.",
    steps: [["8 values → median = (7 + 9)/2 = 8.", "8 значений, медиана (7 + 9)/2 = 8."], ["Lower half 2, 4, 5, 7 → Q1 = (4 + 5)/2 = 4.5. Upper half 9, 10, 12, 15 → Q3 = (10 + 12)/2 = 11.", "Нижняя половина даёт Q1 = 4.5, верхняя Q3 = 11."], ["IQR = 11 − 4.5 = 6.5.", "IQR = 6.5."]],
    a: "Answer · Ответ: Q1 = 4.5, median 8, Q3 = 11, IQR = 6.5"}],
  ["traps", [
    ["Finding the median without ordering the data first.", "Искать медиану, не упорядочив данные."],
    ["Averaging two averages when the groups have different sizes.", "Усреднять средние групп разного размера."],
    ["Thinking that adding a constant increases the standard deviation.", "Думать, что прибавление константы увеличивает SD."],
    ["Confusing percentile with percent correct.", "Путать перцентиль с процентом правильных ответов."]
  ]]
]},

/* ======================= 6. COUNTING & PROBABILITY ======================= */
{ id: "m-prob", nav: "Комбинаторика и вероятность", grp: G, bilingual: true, deckTitle: "Термины: вероятность",
  title: "Counting and probability · Комбинаторика и вероятность",
  sub: "Главный вопрос в комбинаторике: важен ли порядок. В вероятности: события независимы или зависят друг от друга.",
  blocks: [
  ["phr", "Key terms · Термины", [
    ["outcome", "исход"], ["event", "событие"], ["sample space", "пространство исходов (все возможные исходы)"], ["probability", "вероятность"],
    ["fair coin", "правильная (честная) монета"], ["die / dice", "игральная кость / кости"], ["at random", "случайным образом"], ["independent events", "независимые события"],
    ["dependent events", "зависимые события"], ["mutually exclusive", "несовместные (не могут произойти вместе)"], ["with / without replacement", "с возвращением / без возвращения"], ["at least one", "хотя бы один"],
    ["exactly", "ровно"], ["complement", "противоположное событие"], ["permutation", "перестановка, размещение (порядок важен)"], ["combination", "сочетание (порядок не важен)"],
    ["arrangement", "расстановка"], ["factorial (n!)", "факториал"], ["order matters", "порядок важен"], ["counting principle", "правило произведения"]
  ]],
  H("1. Counting · Подсчёт вариантов"),
  ["fx", [["Counting principle: m choices then n choices → m × n", "правило произведения"], ["n! = n × (n − 1) × … × 1;  0! = 1", "факториал: число способов расставить n предметов"], ["Permutations (order matters): P(n, k) = n! / (n − k)!", "размещения: выбрать k из n с учётом порядка"], ["Combinations (order does not matter): C(n, k) = n! / (k!(n − k)!)", "сочетания: выбрать k из n без учёта порядка"]]],
  bi("Ask: if I swap two chosen items, is it a different result? President and vice-president – yes (permutation). A committee of two – no (combination).",
     "Спроси себя: если поменять двух выбранных местами, получится другой результат? Президент и вице-президент – да (перестановка). Комиссия из двух человек – нет (сочетание)."),
  ["ex", {n: "Example 1", tag: "Numeric Entry", q: "In how many ways can a president, a vice-president, and a secretary be chosen from 8 people?", qru: "Сколькими способами можно выбрать президента, вице-президента и секретаря из 8 человек?",
    steps: [["Order matters (different roles).", "Порядок важен: роли разные."], ["8 choices × 7 × 6 = 336.", "8 × 7 × 6 = 336."]],
    a: "Answer · Ответ: 336"}],
  ["ex", {n: "Example 2", tag: "Numeric Entry", q: "How many different 3-person committees can be chosen from 8 people?", qru: "Сколько разных комиссий из 3 человек можно составить из 8 человек?",
    steps: [["Order does not matter → combination.", "Порядок не важен – сочетание."], ["C(8, 3) = (8 × 7 × 6) / (3 × 2 × 1) = 336 / 6 = 56.", "C(8, 3) = 336 / 6 = 56."]],
    a: "Answer · Ответ: 56"}],
  H("2. Probability · Вероятность"),
  ["fx", [["P(A) = favorable outcomes / total outcomes", "вероятность = благоприятные / все исходы"], ["P(not A) = 1 − P(A)", "противоположное событие"], ["Independent: P(A and B) = P(A) × P(B)", "независимые события: вероятности перемножаются"], ["P(A or B) = P(A) + P(B) − P(A and B)", "вероятность «или»; для несовместных последний член равен 0"], ["P(at least one) = 1 − P(none)", "«хотя бы один» через противоположное событие"]]],
  ["ex", {n: "Example 3", tag: "Problem Solving", q: "Two fair dice are rolled. What is the probability that the sum is 7?", qru: "Бросают две правильные игральные кости. Какова вероятность, что сумма равна 7?",
    steps: [["Total outcomes: 6 × 6 = 36.", "Всего исходов 36."], ["Sum 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) → 6 outcomes.", "Сумма 7 получается 6 способами."], ["P = 6/36 = 1/6.", "P = 6/36 = 1/6."]],
    a: "Answer · Ответ: 1/6"}],
  ["ex", {n: "Example 4", tag: "Problem Solving", q: "A fair coin is tossed 3 times. What is the probability of getting at least one head?", qru: "Монету бросают 3 раза. Какова вероятность хотя бы одного орла?",
    steps: [["P(no heads) = P(tails 3 times) = (1/2)³ = 1/8.", "Вероятность ни одного орла (1/2)³ = 1/8."], ["P(at least one head) = 1 − 1/8 = 7/8.", "Хотя бы один орёл: 1 − 1/8 = 7/8."]],
    a: "Answer · Ответ: 7/8"}],
  ["ex", {n: "Example 5", tag: "Problem Solving", q: "A bag contains 4 red and 6 blue marbles. Two marbles are drawn at random without replacement. What is the probability that both are blue?", qru: "В мешке 4 красных и 6 синих шаров. Достают два без возвращения. Вероятность, что оба синие?",
    steps: [["First blue: 6/10.", "Первый синий: 6/10."], ["Second blue (one blue already taken): 5/9.", "Второй синий: 5/9, один синий уже вынут."], ["6/10 × 5/9 = 30/90 = 1/3.", "6/10 × 5/9 = 1/3."]],
    a: "Answer · Ответ: 1/3"}],
  ["traps", [
    ["Using combinations when the order matters (or the reverse).", "Путать сочетания и размещения."],
    ["Forgetting that \"without replacement\" changes the second probability.", "Забыть, что без возвращения меняется вторая вероятность."],
    ["Adding probabilities of events that are not mutually exclusive without subtracting the overlap.", "Складывать вероятности совместных событий без вычитания пересечения."],
    ["Counting \"at least one\" case by case instead of using 1 − P(none).", "Считать «хотя бы один» перебором вместо 1 − P(ни одного)."]
  ]]
]},

/* ======================= 7. GEOMETRY ======================= */
{ id: "m-geom", nav: "Геометрия", grp: G, bilingual: true, deckTitle: "Термины: геометрия",
  title: "Geometry · Геометрия",
  sub: "Углы, треугольники, многоугольники, окружности, координатная плоскость и объёмные фигуры. Чертежи на GRE не в масштабе, верь только условию.",
  blocks: [
  ["phr", "Lines, angles, triangles · Прямые, углы, треугольники", [
    ["point / line / line segment / ray", "точка / прямая / отрезок / луч"], ["angle / vertex", "угол / вершина"], ["right / acute / obtuse angle", "прямой / острый / тупой угол"], ["straight angle", "развёрнутый угол (180°)"],
    ["parallel / perpendicular", "параллельный / перпендикулярный"], ["transversal", "секущая"], ["vertical angles", "вертикальные углы"], ["supplementary / complementary angles", "углы, в сумме дающие 180° / 90°"],
    ["bisect / bisector", "делить пополам / биссектриса"], ["midpoint", "середина отрезка"], ["isosceles / equilateral / scalene", "равнобедренный / равносторонний / разносторонний"], ["right triangle", "прямоугольный треугольник"],
    ["hypotenuse / leg", "гипотенуза / катет"], ["Pythagorean theorem", "теорема Пифагора"], ["similar / congruent", "подобные / равные (конгруэнтные)"], ["height / altitude", "высота"]
  ]],
  ["phr", "Polygons, circles, coordinates, solids · Многоугольники, окружности, координаты, тела", [
    ["perimeter / area", "периметр / площадь"], ["quadrilateral", "четырёхугольник"], ["rectangle / square", "прямоугольник / квадрат"], ["parallelogram / rhombus / trapezoid", "параллелограмм / ромб / трапеция"],
    ["polygon / regular polygon", "многоугольник / правильный многоугольник"], ["pentagon / hexagon / octagon", "пяти- / шести- / восьмиугольник"], ["interior / exterior angle", "внутренний / внешний угол"], ["diagonal", "диагональ"],
    ["radius (radii) / diameter", "радиус (радиусы) / диаметр"], ["circumference", "длина окружности"], ["chord / arc / sector", "хорда / дуга / сектор"], ["central / inscribed angle", "центральный / вписанный угол"],
    ["tangent", "касательная"], ["inscribed / circumscribed", "вписанный / описанный"], ["coordinate plane / origin", "координатная плоскость / начало координат"], ["x-axis / y-axis / quadrant", "ось x / ось y / четверть"],
    ["slope", "угловой коэффициент, наклон"], ["x-intercept / y-intercept", "точка пересечения с осью x / y"], ["ordered pair", "упорядоченная пара, координаты (x, y)"], ["rectangular solid / cube / cylinder", "прямоугольный параллелепипед / куб / цилиндр"],
    ["volume / surface area", "объём / площадь поверхности"], ["edge / face", "ребро / грань"]
  ]],
  H("1. Lines and angles · Прямые и углы"),
  ["fx", [["Angles on a straight line sum to 180°; around a point to 360°", "углы на прямой – 180°, вокруг точки – 360°"], ["Vertical angles are equal", "вертикальные углы равны"], ["Parallel lines + transversal: all acute angles are equal, all obtuse angles are equal, acute + obtuse = 180°", "при параллельных и секущей все острые углы равны, все тупые равны, острый + тупой = 180°"]]],
  ["ex", {n: "Example 1", tag: "Problem Solving", q: "Two parallel lines are cut by a transversal. One of the angles formed is 65°. What are the possible measures of the other angles?", qru: "Две параллельные прямые пересечены секущей, один из углов 65°. Какими могут быть остальные углы?",
    steps: [["Every acute angle in the figure equals 65°.", "Все острые углы равны 65°."], ["Every obtuse angle equals 180° − 65° = 115°.", "Все тупые равны 180° − 65° = 115°."]],
    a: "Answer · Ответ: 65° and 115°"}],
  H("2. Triangles · Треугольники"),
  ["fx", [["Angles of a triangle sum to 180°", "сумма углов треугольника 180°"], ["Area = ½ × base × height", "площадь = половина основания на высоту"], ["Triangle inequality: |a − b| < c < a + b", "каждая сторона меньше суммы и больше разности двух других"], ["Right triangle: a² + b² = c²  (c = hypotenuse)", "теорема Пифагора"], ["Common triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25 (and multiples: 6-8-10)", "пифагоровы тройки и их кратные"], ["45-45-90: x : x : x√2;   30-60-90: x : x√3 : 2x", "особые прямоугольные треугольники"], ["Similar triangles: sides in the same ratio k; areas in ratio k²", "подобные: стороны в отношении k, площади в k²"], ["Isosceles: equal sides are opposite equal angles", "в равнобедренном равные углы лежат против равных сторон"]]],
  ["ex", {n: "Example 2", tag: "Multiple Choice, select all", q: "Two sides of a triangle have lengths 5 and 9. Which of the following could be the length of the third side? Select all that apply: 3, 4, 10, 13, 14", qru: "Две стороны треугольника 5 и 9. Какой может быть третья сторона? Выберите все подходящие.",
    steps: [["Third side must be greater than 9 − 5 = 4 and less than 9 + 5 = 14.", "Третья сторона больше 4 и меньше 14."], ["Strict inequalities: 4 and 14 are not allowed. 3 is too small.", "Неравенства строгие: 4 и 14 не подходят, 3 слишком мало."], ["Valid: 10 and 13.", "Подходят 10 и 13."]],
    a: "Answer · Ответ: 10, 13"}],
  ["ex", {n: "Example 3", tag: "Numeric Entry", q: "In a 45-45-90 triangle the hypotenuse is 10. What is the length of each leg?", qru: "В прямоугольном равнобедренном треугольнике гипотенуза 10. Найдите катет.",
    steps: [["Hypotenuse = leg × √2 → leg = 10/√2.", "Гипотенуза = катет × √2, катет = 10/√2."], ["10/√2 = 10√2/2 = 5√2 ≈ 7.07.", "10/√2 = 5√2 ≈ 7.07."]],
    a: "Answer · Ответ: 5√2"}],
  ["ex", {n: "Example 4", tag: "Numeric Entry", q: "A triangle with sides 3, 4, 5 is similar to a triangle whose longest side is 15. What is the perimeter of the larger triangle?", qru: "Треугольник 3-4-5 подобен треугольнику с наибольшей стороной 15. Найдите периметр большего треугольника.",
    steps: [["Scale factor = 15/5 = 3.", "Коэффициент подобия 15/5 = 3."], ["Sides 9, 12, 15 → perimeter 36 (or 12 × 3).", "Стороны 9, 12, 15, периметр 36."]],
    a: "Answer · Ответ: 36"}],
  H("3. Polygons · Многоугольники"),
  ["fx", [["Rectangle: A = lw,  P = 2(l + w);  square: A = s²,  diagonal = s√2", "прямоугольник и квадрат"], ["Parallelogram: A = base × height", "параллелограмм"], ["Trapezoid: A = ½(b₁ + b₂) × h", "трапеция: полусумма оснований на высоту"], ["Sum of interior angles of an n-gon = (n − 2) × 180°", "сумма внутренних углов n-угольника"], ["Each angle of a regular n-gon = (n − 2) × 180° / n", "угол правильного многоугольника"]]],
  ["ex", {n: "Example 5", tag: "Numeric Entry", q: "What is the measure of each interior angle of a regular hexagon?", qru: "Найдите внутренний угол правильного шестиугольника.",
    steps: [["Sum = (6 − 2) × 180° = 720°.", "Сумма углов 720°."], ["Each = 720° / 6 = 120°.", "Каждый угол 120°."]],
    a: "Answer · Ответ: 120°"}],
  H("4. Circles · Окружности"),
  ["fx", [["Circumference C = 2πr = πd;  area A = πr²", "длина окружности и площадь круга"], ["Arc length = (central angle / 360°) × 2πr", "длина дуги"], ["Sector area = (central angle / 360°) × πr²", "площадь сектора"], ["Inscribed angle = ½ central angle on the same arc", "вписанный угол равен половине центрального"], ["A tangent is perpendicular to the radius at the point of contact", "касательная перпендикулярна радиусу"], ["A triangle inscribed with one side as a diameter is a right triangle", "треугольник, опирающийся на диаметр, прямоугольный"]]],
  ["ex", {n: "Example 6", tag: "Problem Solving", q: "A circle has radius 9. A central angle of 60° cuts off an arc. Find the arc length and the sector area.", qru: "Радиус окружности 9, центральный угол 60°. Найдите длину дуги и площадь сектора.",
    steps: [["60° is 1/6 of the circle.", "60° – это 1/6 окружности."], ["Arc = 1/6 × 2π × 9 = 3π.", "Дуга = 1/6 × 18π = 3π."], ["Sector = 1/6 × π × 81 = 13.5π.", "Сектор = 1/6 × 81π = 13.5π."]],
    a: "Answer · Ответ: arc 3π, sector 13.5π"}],
  H("5. Coordinate geometry · Координатная плоскость"),
  ["fx", [["Slope m = (y₂ − y₁) / (x₂ − x₁)", "угловой коэффициент"], ["Line: y = mx + b  (b = y-intercept)", "уравнение прямой"], ["Parallel lines: equal slopes;  perpendicular: m₁ × m₂ = −1", "параллельные и перпендикулярные прямые"], ["Distance = √((x₂ − x₁)² + (y₂ − y₁)²)", "расстояние между точками"], ["Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)", "середина отрезка"], ["x-intercept: set y = 0;  y-intercept: set x = 0", "пересечения с осями"]]],
  ["ex", {n: "Example 7", tag: "Problem Solving", q: "Find the slope and the equation of the line through (1, 2) and (4, 11).", qru: "Найдите угловой коэффициент и уравнение прямой через точки (1, 2) и (4, 11).",
    steps: [["m = (11 − 2)/(4 − 1) = 9/3 = 3.", "m = 9/3 = 3."], ["y = 3x + b; plug in (1, 2): 2 = 3 + b → b = −1.", "Подставляем (1, 2): b = −1."], ["y = 3x − 1. Check (4, 11): 3 × 4 − 1 = 11.", "y = 3x − 1, проверка точкой (4, 11)."]],
    a: "Answer · Ответ: slope 3, y = 3x − 1"}],
  ["ex", {n: "Example 8", tag: "Numeric Entry", q: "What is the distance between the points (−2, 1) and (4, 9)?", qru: "Найдите расстояние между точками (−2, 1) и (4, 9).",
    steps: [["Δx = 4 − (−2) = 6;  Δy = 9 − 1 = 8.", "Разности координат 6 и 8."], ["d = √(36 + 64) = √100 = 10 (a 6-8-10 triangle).", "d = √100 = 10, треугольник 6-8-10."]],
    a: "Answer · Ответ: 10"}],
  H("6. Solids · Объёмные фигуры"),
  ["fx", [["Rectangular solid: V = lwh;  surface area = 2(lw + lh + wh)", "параллелепипед"], ["Cube: V = s³;  surface area = 6s²", "куб"], ["Cylinder: V = πr²h;  surface area = 2πr² + 2πrh", "цилиндр"], ["Diagonal of a rectangular solid = √(l² + w² + h²)", "диагональ параллелепипеда"]]],
  ["ex", {n: "Example 9", tag: "Numeric Entry", q: "A cylinder has radius 3 and height 10. What is its volume, in terms of π?", qru: "Радиус цилиндра 3, высота 10. Найдите объём через π.",
    steps: [["V = πr²h = π × 9 × 10.", "V = π × 9 × 10."], ["= 90π.", "= 90π."]],
    a: "Answer · Ответ: 90π"}],
  ["traps", [
    ["Trusting the picture: figures are not necessarily drawn to scale.", "Верить чертежу: он не обязательно в масштабе."],
    ["Using the slanted side instead of the perpendicular height in area formulas.", "Брать боковую сторону вместо высоты в формуле площади."],
    ["Mixing up radius and diameter.", "Путать радиус и диаметр."],
    ["Forgetting that areas of similar figures scale by k², volumes by k³.", "Забыть, что площади подобных фигур меняются в k², объёмы в k³."]
  ]]
]},

/* ======================= 8. DATA INTERPRETATION ======================= */
{ id: "m-data", nav: "Графики и таблицы", grp: G, bilingual: true, deckTitle: "Термины: графики",
  title: "Data interpretation · Графики и таблицы",
  sub: "Вопросы к графикам идут блоками по 3. Половина ошибок здесь от невнимательного чтения осей и единиц.",
  blocks: [
  ["phr", "Key terms · Термины", [
    ["bar graph", "столбчатая диаграмма"], ["line graph", "линейный график"], ["circle graph / pie chart", "круговая диаграмма"], ["scatterplot", "диаграмма рассеяния"],
    ["table", "таблица"], ["axis / axes", "ось / оси"], ["scale", "шкала, масштаб"], ["legend / key", "легенда, условные обозначения"],
    ["trend", "тенденция"], ["approximately", "приблизительно (можно округлять)"], ["in thousands / in millions", "в тысячах / в миллионах"], ["per capita", "на душу населения"],
    ["annual / fiscal year", "годовой / финансовый год"], ["share of the total", "доля от общего"], ["cumulative", "накопленный, нарастающим итогом"], ["respectively", "соответственно"]
  ]],
  bi("Before the first question spend 30 seconds on the graph: title, axes, units (thousands? percent?), legend, notes under the graph. Then for each question decide: do I need an exact value or an estimate? If the answers are far apart, estimate.",
     "Перед первым вопросом потрать 30 секунд на график: заголовок, оси, единицы (тысячи? проценты?), легенду, примечания под графиком. Затем для каждого вопроса реши, нужно точное значение или оценка. Если варианты далеко друг от друга, оценивай."),
  ["table", ["Company · Компания", "2022 sales ($ millions)", "2023 sales ($ millions)"], [["A", "120", "150"], ["B", "200", "180"], ["C", "80", "100"]], [1, 2]],
  ["ex", {n: "Example 1", tag: "Data Interpretation", q: "By what percent did Company A's sales increase from 2022 to 2023?", qru: "На сколько процентов выросли продажи компании A с 2022 по 2023?",
    steps: [["Change = 150 − 120 = 30.", "Изменение 30."], ["Percent change = 30 / 120 = 25%.", "30 / 120 = 25%."]],
    a: "Answer · Ответ: 25%"}],
  ["ex", {n: "Example 2", tag: "Data Interpretation", q: "In 2023, Company B's sales were approximately what percent of the total sales of the three companies? (A) 35% (B) 38% (C) 42% (D) 45% (E) 50%", qru: "Какую примерно долю от общих продаж трёх компаний в 2023 составили продажи B?",
    steps: [["Total 2023 = 150 + 180 + 100 = 430.", "Всего в 2023: 430."], ["180 / 430 ≈ 0.419 ≈ 42%.", "180 / 430 ≈ 42%."]],
    a: "Answer · Ответ: (C) 42%"}],
  ["ex", {n: "Example 3", tag: "Data Interpretation", q: "By approximately what percent did the total sales of the three companies change from 2022 to 2023?", qru: "На сколько примерно процентов изменились общие продажи трёх компаний?",
    steps: [["Total 2022 = 120 + 200 + 80 = 400; total 2023 = 430.", "Было 400, стало 430."], ["(430 − 400) / 400 = 30 / 400 = 7.5% increase.", "Рост 30 / 400 = 7.5%."]],
    a: "Answer · Ответ: +7.5%"}],
  ["ex", {n: "Example 4", tag: "Data Interpretation", q: "A circle graph shows a family budget of $3,200 per month; food is 20% of the budget. How much is spent on food, and what is the central angle of the food sector?", qru: "Бюджет семьи 3200 долларов в месяц, еда составляет 20% на круговой диаграмме. Сколько тратят на еду и какой угол у сектора?",
    steps: [["Food = 0.2 × 3,200 = $640.", "Еда: 0.2 × 3200 = 640 долларов."], ["Angle = 0.2 × 360° = 72°.", "Угол: 0.2 × 360° = 72°."]],
    a: "Answer · Ответ: $640, 72°"}],
  ["traps", [
    ["Ignoring units: a value of 2.5 on an axis \"in thousands\" means 2,500.", "Игнорировать единицы: 2.5 на оси «в тысячах» означает 2500."],
    ["Computing the percent change from the wrong base year.", "Брать не тот базовый год для процентного изменения."],
    ["Confusing \"percent of the total\" with \"percent change\".", "Путать долю от целого и процентное изменение."],
    ["Calculating exactly when the options allow an estimate.", "Считать точно, когда варианты позволяют оценить."]
  ]]
]},

/* ======================= 9. GLOSSARY ======================= */
{ id: "m-gloss", nav: "Глоссарий терминов", grp: G, deckTitle: "Термины: формулировки вопросов",
  title: "Глоссарий математических терминов",
  sub: "Все термины из тем математики в одном месте с поиском по английскому и русскому. Кнопка + добавляет термин в «Мои слова», а колоды «Термины: …» уже есть в Словаре.",
  blocks: [
  ["phr", "Как читать условие · Question wording", [
    ["Which of the following must be true?", "что из перечисленного обязательно верно (верно при любых допустимых значениях)"], ["could be true / could be the value of", "может быть верно / может быть значением (достаточно одного примера)"], ["cannot be", "не может быть"], ["Indicate all such values / Select all that apply", "отметьте все подходящие варианты"],
    ["Quantity A / Quantity B", "величина A / величина B"], ["The relationship cannot be determined from the information given", "соотношение определить нельзя (ответ D в QC)"], ["in terms of x", "выразите через x"], ["What is the value of…?", "чему равно…?"],
    ["approximately / closest to", "приблизительно / ближе всего к"], ["integer value", "целочисленное значение"], ["nonzero / distinct", "ненулевой / различные"], ["at least / at most / no more than", "не меньше / не больше / не больше чем"],
    ["respectively", "соответственно"], ["is divisible by", "делится на"], ["Give your answer as a fraction / to the nearest tenth", "дайте ответ дробью / с точностью до десятых"], ["Figure not drawn to scale", "чертёж не в масштабе"]
  ]],
  ["glossary", G]
]}
];
const at = E.sections.findIndex(s => s.id === "testday") + 1;
E.sections.splice(at, 0, ...sections);
})(window.EXAM);
