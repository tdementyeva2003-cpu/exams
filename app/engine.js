(function(){
"use strict";
const D = window.EXAM;
const $ = (s, el) => (el || document).querySelector(s);

/* ---------- tiny DOM helpers ---------- */
function h(tag, attrs){
  const el = document.createElement(tag);
  if (attrs) for (const k in attrs){
    const v = attrs[k];
    if (v == null || v === false) continue;
    if (k === "html") el.innerHTML = v;
    else if (k === "text") el.textContent = v;
    else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (let i = 2; i < arguments.length; i++){
    const c = arguments[i];
    if (c == null || c === false) continue;
    if (Array.isArray(c)) c.forEach(x => x != null && el.append(x));
    else el.append(c);
  }
  return el;
}
function esc(s){ return String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
function md(s){
  s = esc(s);
  s = s.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  return s;
}
const LS = {
  get(k, d){ try { const v = localStorage.getItem(D.id + ":" + k); return v == null ? d : JSON.parse(v); } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem(D.id + ":" + k, JSON.stringify(v)); } catch(e){} }
};
let toastT;
function toast(msg){
  let t = $(".toast");
  if (!t){ t = h("div", {class:"toast", role:"status"}); document.body.append(t); }
  t.textContent = msg; t.hidden = false;
  clearTimeout(toastT); toastT = setTimeout(() => { t.hidden = true; }, 2600);
}
function copyText(text, btn){
  const done = () => { if (btn){ const o = btn.textContent; btn.textContent = "Скопировано"; setTimeout(() => btn.textContent = o, 1400); } };
  try {
    navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text, done));
  } catch(e){ fallbackCopy(text, done); }
}
function fallbackCopy(text, done){
  const ta = h("textarea", {style:"position:fixed;opacity:0;top:0;left:0"}); ta.value = text;
  document.body.append(ta); ta.select();
  try { document.execCommand("copy"); done(); } catch(e){ toast("Выдели текст и скопируй вручную"); }
  ta.remove();
}
function shuffle(a){ a = a.slice(); for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function wordsIn(t){ const m = t.trim().match(/[^\s]+/g); return m ? m.length : 0; }
function fmt(sec){ sec = Math.max(0, Math.round(sec)); const m = Math.floor(sec / 60), s = sec % 60; return m + ":" + String(s).padStart(2, "0"); }
function beep(ctx){
  try { const o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.value = 880; g.gain.value = 0.08; o.connect(g); g.connect(ctx.destination); o.start(); setTimeout(() => o.stop(), 350); } catch(e){}
}

/* ---------- vocabulary store (db capability, fallback: this browser) ---------- */
const Store = {
  mode: "init", db: null, words: {}, prog: {}, subs: new Set(), q: {},
  on(f){ this.subs.add(f); return () => this.subs.delete(f); },
  emit(){ this.subs.forEach(f => { try { f(); } catch(e){ console.error(e); } }); },
  loadLocal(){ this.words = LS.get("words", {}); this.prog = LS.get("prog", {}); },
  saveLocal(){ LS.set("words", this.words); LS.set("prog", this.prog); },
  async init(){
    this.loadLocal();
    let db = null;
    try { if (window.claude && typeof window.claude.use === "function") db = await window.claude.use("db"); } catch(e){ db = null; }
    if (!db){ this.mode = "local"; this.emit(); return; }
    this.db = db; this.mode = "db";
    this.words = {}; this.prog = {};
    try {
      db.collection("mywords").onSnapshot(s => {
        const w = {}; s.docs.forEach(d => { w[d.id] = Object.assign({id: d.id}, d.data()); });
        this.words = w; this.emit();
      }, () => this.toLocal());
      db.collection("progress").onSnapshot(s => {
        const p = {}; s.docs.forEach(d => { const v = d.data(); p[d.id] = v && typeof v.box === "number" ? v.box : 0; });
        this.prog = p; this.emit();
      }, () => this.toLocal());
    } catch(e){ this.toLocal(); }
    this.emit();
  },
  toLocal(){
    if (this.mode === "local") return;
    this.mode = "local"; this.saveLocal(); this.emit();
    toast("Словарь сохраняется только в этом браузере");
  },
  write(path, data){
    if (this.mode !== "db") return;
    const prev = this.q[path] || Promise.resolve();
    const run = async () => {
      const ref = this.db.doc(path);
      return data === null ? ref.delete() : ref.set(data);
    };
    this.q[path] = prev.then(run).catch(async e => {
      if (e && e.code === "unavailable"){
        await new Promise(r => setTimeout(r, 400 + Math.random() * 700));
        try { await run(); return; } catch(e2){ e = e2; }
      }
      if (e && e.code === "quota_exceeded"){ toast("Хранилище заполнено: удали часть своих слов"); return; }
      this.toLocal();
    });
  },
  addWord(w){
    const id = "w" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const body = {term: w.term, mean: w.mean || "", ex: w.ex || "", deck: w.deck || "mine", src: w.src || "", created: Date.now()};
    this.words[id] = Object.assign({id}, body);
    if (this.mode === "db") this.write("mywords/" + id, body); else this.saveLocal();
    this.emit(); return id;
  },
  delWord(id){
    delete this.words[id]; const hadProg = id in this.prog; delete this.prog[id];
    if (this.mode === "db"){ this.write("mywords/" + id, null); if (hadProg) this.write("progress/" + id, null); } else this.saveLocal();
    this.emit();
  },
  setBox(id, box){
    if (this.prog[id] === box) return;
    this.prog[id] = box;
    if (this.mode === "db") this.write("progress/" + id, {box, t: Date.now()}); else this.saveLocal();
    this.emit();
  },
  hasTerm(term){ const t = term.trim().toLowerCase(); return Object.values(this.words).some(w => (w.term || "").trim().toLowerCase() === t); }
};

/* built-in words get stable ids; phrase tables and spelling blocks become decks too */
const BUILT = [];
const DECKS = (D.decks || []).map(d => ({id: d.id, title: d.title}));
(D.decks || []).forEach(dk => dk.words.forEach((w, i) => BUILT.push({id: dk.id + "-" + i, term: w[0], mean: w[1] || "", ex: w[2] || "", deck: dk.id, builtin: true})));
function hashId(s){ let x = 5381; for (let i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) >>> 0; return x.toString(36); }
function clean(s){ return String(s).replace(/\*\*/g, "").replace(/`/g, ""); }
function buildPhraseDecks(){
  const seen = new Set();
  D.sections.forEach(sec => {
    const id = "ph-" + sec.id, rows = [];
    const take = r => { const t = clean(r[0]); const key = t.toLowerCase(); if (seen.has(id + "|" + key)) return; seen.add(id + "|" + key); rows.push({id: id + "-" + hashId(key), term: t, mean: clean(r[1] || ""), ex: clean(r[2] || ""), deck: id, builtin: true}); };
    const scan = arr => arr.forEach(b => {
      if (b[0] === "phr") b[2].forEach(take);
      if (b[0] === "spell"){
        const sid = "sp-" + b[1].id;
        if (!DECKS.some(d => d.id === sid)) DECKS.push({id: sid, title: b[1].deckTitle || "Орфография"});
        const sseen = new Set();
        b[1].words.forEach(w => { const k = w[0].toLowerCase(); if (sseen.has(k)) return; sseen.add(k); BUILT.push({id: sid + "-" + hashId(k), term: w[0], mean: w[1] || "", ex: w[2] || "", deck: sid, builtin: true}); });
      }
      if (b[0] === "task"){ const p = b[3]; (p.phr || []).forEach(take); (p.more || []).forEach(m => m[1].forEach(take)); if (p.extra) scan(p.extra); }
    });
    scan(sec.blocks || []);
    if (rows.length){ DECKS.push({id, title: sec.deckTitle || ("Фразы: " + sec.nav)}); rows.forEach(r => BUILT.push(r)); }
  });
}
function allWords(){ return BUILT.concat(Object.values(Store.words).sort((a, b) => (a.created || 0) - (b.created || 0))); }
function deckName(id){ if (id === "mine") return "Мои слова"; const d = DECKS.find(x => x.id === id); return d ? d.title : id; }

/* ---------- block renderers ---------- */
const TEMPLATES = [], HACKS = [];
let VIEW_SUBS = [];
function tmplEl(title, text){
  const b = h("button", {class:"btn sm", type:"button"}, "Копировать");
  b.addEventListener("click", () => copyText(text, b));
  return h("div", {class:"tmpl"}, h("div", {class:"tmpl-h"}, h("span", {text: title}), b), h("pre", {text: text}));
}
function addBtn(term, mean, ex, src){
  const b = h("button", {class:"addb", type:"button", title:"Добавить в мой словарь", "aria-label":"Добавить в мой словарь: " + term}, "+");
  const sync = () => { if (Store.hasTerm(term)){ b.textContent = "✓"; b.classList.add("done"); b.disabled = true; } };
  sync(); VIEW_SUBS.push(Store.on(sync));
  b.addEventListener("click", () => { if (Store.hasTerm(term)) return; Store.addWord({term, mean, ex: ex || "", deck: "mine", src}); toast("Добавлено в «Мои слова»"); });
  return b;
}
function phrTable(title, rows, src){
  return h("div", {class:"tablewrap"}, h("table", {class:"phr"},
    h("thead", null, h("tr", null, h("th", null, title || "Фраза"), h("th", null, "Значение / когда использовать"), h("th", null, ""))),
    h("tbody", null, rows.map(r => h("tr", null, h("td", {html: md(r[0])}), h("td", {html: md(r[1] || "")}), h("td", {class:"add"}, addBtn(r[0].replace(/\*\*/g, ""), r[1] || "", r[2] || "", src)))))
  ));
}
function list(items, ordered){ return h(ordered ? "ol" : "ul", {class:"bl"}, items.map(x => h("li", {html: md(x)}))); }
function tipsEl(title, items){
  return h("div", {class:"tips"}, title ? h("div", {class:"lbl acc", text: title}) : null, h("ul", null, items.map(x => h("li", {html: md(x)}))));
}

function block(b, sec){
  const t = b[0];
  switch (t){
    case "p": return h("div", {class:"prose"}, h("p", {html: md(b[1])}));
    case "h": return h("h3", {class:"bh", text: b[1]});
    case "list": return list(b[1]);
    case "olist": return list(b[1], true);
    case "note": return h("div", {class:"note", html: md(b[1])});
    case "warn": return h("div", {class:"note warn", html: md(b[1])});
    case "table": return h("div", {class:"tablewrap"}, h("table", null,
        h("thead", null, h("tr", null, b[1].map(x => h("th", {text: x})))),
        h("tbody", null, b[2].map(r => h("tr", null, r.map((c, i) => h("td", {class: (b[3] && b[3].includes(i)) ? "num" : null, html: md(String(c))})))))));
    case "tmpl": return tmplEl(b[1], b[2]);
    case "phr": return phrTable(b[1], b[2], sec.title);
    case "tips": return tipsEl(b[1], b[2]);
    case "plan": return planEl(b[1], b[2]);
    case "task": return taskEl(b[1], b[2], b[3], sec);
    case "drill": return drillEl(b[1]);
    case "writer": return writerEl(b[1]);
    case "spell": return spellEl(b[1]);
    case "bi": return h("div", {class:"bi"}, h("p", {class:"en", html: md(b[1])}), h("p", {class:"ru", html: md(b[2])}));
    case "fx": return h("div", {class:"fx"}, b[1].map(r => h("div", {class:"fx-r"}, h("div", {class:"fx-f", html: md(r[0])}), h("div", {class:"fx-d ru-soft", html: md(r[1] || "")}))));
    case "ex": return exEl(b[1]);
    case "traps": return h("div", {class:"tips"}, h("div", {class:"lbl acc", text:"Traps · Ловушки"}), h("ul", null, b[1].map(r => h("li", null, h("span", {class:"en", html: md(r[0])}), h("span", {class:"ru", html: " " + md(r[1])})))));
    case "glossary": return glossaryEl(b[1], sec);
    default: return null;
  }
}
function taskEl(title, meta, p, sec){
  const body = h("div", {class:"tbody"});
  if (p.how) body.append(h("div", null, h("div", {class:"lbl", text:"Как устроено"}), h("div", {class:"prose"}, h("p", {html: md(p.how)}))));
  if (p.strat) body.append(h("div", null, h("div", {class:"lbl", text:"Стратегия"}), list(p.strat, true)));
  if (p.tmpl) p.tmpl.forEach(x => body.append(tmplEl(x[0], x[1])));
  if (p.phr) body.append(phrTable(p.phrTitle || "Фразы и лексика", p.phr, sec.title));
  if (p.more) p.more.forEach(m => body.append(phrTable(m[0], m[1], sec.title)));
  if (p.traps) body.append(h("div", null, h("div", {class:"lbl", text:"Ловушки"}), list(p.traps)));
  if (p.hacks) body.append(tipsEl("Лайфхаки", p.hacks));
  if (p.drill) body.append(h("div", {class:"note", html: "<b>Тренировка.</b> " + md(p.drill)}));
  if (p.extra) p.extra.forEach(x => { const el = block(x, sec); if (el) body.append(el); });
  return h("details", {class:"task", id: "t-" + sec.id + "-" + slug(title)}, h("summary", null, h("span", {class:"t", text: title}), meta ? h("span", {class:"m", text: meta}) : null), body);
}
function slug(s){ return s.toLowerCase().replace(/[^a-z0-9а-яё]+/gi, "-").slice(0, 40); }
function collect(){
  D.sections.forEach(sec => {
    const scan = arr => arr.forEach(b => {
      if (b[0] === "tmpl") TEMPLATES.push({sec: sec.nav, title: b[1], text: b[2]});
      if (b[0] === "tips") HACKS.push({sec: sec.nav, title: b[1], items: b[2]});
      if (b[0] === "task"){
        const p = b[3];
        (p.tmpl || []).forEach(x => TEMPLATES.push({sec: sec.nav, title: b[1] + ": " + x[0], text: x[1]}));
        if (p.hacks) HACKS.push({sec: sec.nav, title: b[1], items: p.hacks});
        if (p.extra) scan(p.extra);
      }
    });
    scan(sec.blocks || []);
  });
}

/* worked example: solution hidden until clicked */
function exEl(o){
  const sol = h("div", {class:"ex-sol", hidden: true},
    h("ol", {class:"ex-steps"}, o.steps.map(st => h("li", null, h("div", {class:"en", html: md(st[0])}), st[1] ? h("div", {class:"ru", html: md(st[1])}) : null))),
    h("div", {class:"ex-ans", html: md(o.a)}));
  const btn = h("button", {class:"btn", type:"button"}, "Show solution · Показать решение");
  btn.addEventListener("click", () => { sol.hidden = !sol.hidden; btn.textContent = sol.hidden ? "Show solution · Показать решение" : "Hide solution · Скрыть решение"; });
  return h("div", {class:"ex"},
    h("div", {class:"ex-h"}, h("span", {class:"lbl acc", text: o.n}), o.tag ? h("span", {class:"ex-tag", text: o.tag}) : null),
    h("div", {class:"ex-q en", html: md(o.q)}), o.qru ? h("div", {class:"ru", html: md(o.qru)}) : null,
    h("div", {class:"row"}, btn), sol);
}
/* glossary: every phrase table of one section group, with search */
function glossaryEl(group, self){
  const secs = D.sections.filter(s => s.grp === group && s !== self);
  const q = h("input", {class:"inp", type:"search", id:"gl-q-" + self.id, placeholder:"Поиск: slope, медиана, remainder…", style:"max-width:420px;width:100%"});
  const box = h("div", {class:"stack"});
  const groups = [];
  secs.forEach(s => {
    const tables = [];
    const scan = arr => arr.forEach(b => { if (b[0] === "phr") tables.push(b); if (b[0] === "task"){ (b[3].phr ? [["phr", b[3].phrTitle || "Фразы", b[3].phr]] : []).forEach(t => tables.push(t)); } });
    scan(s.blocks || []);
    tables.forEach(t => {
      const head = h("h3", {class:"bh", text: s.nav + (tables.length > 1 ? " · " + t[1].split(" · ")[0] : "")});
      const tbl = phrTable("Term · Термин", t[2], s.title);
      groups.push({head, tbl, rows: t[2]});
      box.append(head, tbl);
    });
  });
  const cnt = h("span", {class:"score"});
  const filter = () => {
    const v = q.value.trim().toLowerCase(); let n = 0;
    groups.forEach(g => {
      let vis = 0;
      g.tbl.querySelectorAll("tbody tr").forEach((tr, i) => { const r = g.rows[i]; const ok = !v || (r[0] + " " + (r[1] || "")).toLowerCase().includes(v); tr.hidden = !ok; if (ok) vis++; });
      g.head.hidden = g.tbl.hidden = vis === 0; n += vis;
    });
    cnt.textContent = (v ? "Найдено: " : "Всего терминов: ") + n;
  };
  let t; q.addEventListener("input", () => { clearTimeout(t); t = setTimeout(filter, 120); });
  filter();
  return h("div", {class:"stack"}, h("div", {class:"row"}, q, cnt), box);
}

/* plan with checkboxes (this browser) */
function planEl(id, rows){
  const st = LS.get("plan-" + id, {});
  return h("div", {class:"plan"}, rows.map((r, i) => {
    const cb = h("input", {type:"checkbox", id: "plan-" + id + "-" + i});
    cb.checked = !!st[i];
    const lab = h("label", {for: cb.id, class: st[i] ? "done" : null}, cb, h("span", {class:"w", text: r[0]}), h("span", {class:"x", html: md(r[1])}));
    cb.addEventListener("change", () => { st[i] = cb.checked; LS.set("plan-" + id, st); lab.classList.toggle("done", cb.checked); });
    return lab;
  }));
}

/* speaking / prompt drill with two timers */
function drillEl(o){
  const cue = h("div", {class:"cue", "aria-live":"polite", text: "Нажми «Новая карточка»"});
  const clock = h("div", {class:"clock", text: "0:00"});
  const stage = h("div", {class:"lbl", text: ""});
  let timer = null, ctx = null, left = 0, deck = shuffle(o.cards), pos = -1;
  function stop(){ clearInterval(timer); timer = null; clock.classList.remove("run"); }
  function run(sec, label){
    stop(); left = sec; stage.textContent = label; clock.textContent = fmt(left); clock.classList.remove("end"); clock.classList.add("run");
    try { ctx = ctx || new (window.AudioContext || window.webkitAudioContext)(); } catch(e){}
    timer = setInterval(() => { left--; clock.textContent = fmt(left); if (left <= 0){ stop(); clock.classList.add("end"); stage.textContent = label + ": время вышло"; if (ctx) beep(ctx); } }, 1000);
  }
  const next = h("button", {class:"btn pri", type:"button"}, "Новая карточка");
  next.addEventListener("click", () => { pos = (pos + 1) % deck.length; if (pos === 0 && deck.length > 1) deck = shuffle(o.cards); cue.textContent = deck[pos]; stop(); clock.textContent = "0:00"; clock.classList.remove("end"); stage.textContent = ""; });
  const btns = (o.timers || []).map(tm => { const b = h("button", {class:"btn", type:"button"}, tm[0] + " " + fmt(tm[1])); b.addEventListener("click", () => run(tm[1], tm[0])); return b; });
  const st = h("button", {class:"btn", type:"button"}, "Стоп"); st.addEventListener("click", stop);
  return h("div", {class:"tool"}, h("h3", {text: o.title}), o.note ? h("div", {class:"prose"}, h("p", {html: md(o.note)})) : null, cue, h("div", {class:"row"}, next, btns, st), h("div", {class:"row"}, clock, stage));
}

/* timed writer with word count; draft kept in this browser */
function writerEl(o){
  const key = "draft-" + o.id;
  const sel = h("select", {class:"inp", id: "wp-" + o.id, "aria-label":"Тема"}, o.prompts.map((p, i) => h("option", {value: i}, (i + 1) + ". " + p.slice(0, 90) + (p.length > 90 ? "…" : ""))));
  const promptBox = h("div", {class:"cue"});
  const ta = h("textarea", {id: "wt-" + o.id, class:"inp", placeholder: "Пиши здесь. Черновик сохраняется в этом браузере."});
  const saved = LS.get(key, null);
  if (saved){ sel.value = saved.p; ta.value = saved.t; }
  const showPrompt = () => { promptBox.textContent = o.prompts[+sel.value || 0]; };
  showPrompt();
  const wc = h("span", {class:"wc"});
  const upd = () => { const n = wordsIn(ta.value); wc.textContent = n + " слов (минимум " + o.min + ")"; wc.className = "wc " + (n === 0 ? "" : n < o.min ? "low" : "ok"); };
  upd();
  let saveT;
  ta.addEventListener("input", () => { upd(); clearTimeout(saveT); saveT = setTimeout(() => LS.set(key, {p: sel.value, t: ta.value}), 500); });
  sel.addEventListener("change", () => { showPrompt(); LS.set(key, {p: sel.value, t: ta.value}); });
  const rnd = h("button", {class:"btn", type:"button"}, "Случайная тема");
  rnd.addEventListener("click", () => { sel.value = Math.floor(Math.random() * o.prompts.length); showPrompt(); });
  const clock = h("span", {class:"clock", style:"font-size:24px", text: fmt(o.minutes * 60)});
  let t = null, left = o.minutes * 60, ctx = null;
  const go = h("button", {class:"btn pri", type:"button"}, "Старт");
  go.addEventListener("click", () => {
    if (t){ clearInterval(t); t = null; go.textContent = "Продолжить"; clock.classList.remove("run"); return; }
    try { ctx = ctx || new (window.AudioContext || window.webkitAudioContext)(); } catch(e){}
    go.textContent = "Пауза"; clock.classList.add("run"); clock.classList.remove("end");
    t = setInterval(() => { left--; clock.textContent = fmt(left); if (left <= 0){ clearInterval(t); t = null; clock.classList.remove("run"); clock.classList.add("end"); go.textContent = "Старт"; left = o.minutes * 60; if (ctx) beep(ctx); toast("Время вышло"); } }, 1000);
  });
  const rs = h("button", {class:"btn", type:"button"}, "Сброс таймера");
  rs.addEventListener("click", () => { clearInterval(t); t = null; left = o.minutes * 60; clock.textContent = fmt(left); clock.classList.remove("run", "end"); go.textContent = "Старт"; });
  const cp = h("button", {class:"btn", type:"button"}, "Копировать текст"); cp.addEventListener("click", () => copyText(ta.value, cp));
  const clr = h("button", {class:"btn", type:"button"}, "Очистить");
  let armed = false;
  clr.addEventListener("click", () => { if (!armed){ armed = true; clr.textContent = "Точно очистить?"; setTimeout(() => { armed = false; clr.textContent = "Очистить"; }, 3000); return; } ta.value = ""; upd(); LS.set(key, {p: sel.value, t: ""}); armed = false; clr.textContent = "Очистить"; });
  const checks = o.check ? h("div", null, h("div", {class:"lbl", text:"Самопроверка после текста"}), list(o.check)) : null;
  return h("div", {class:"tool writer"}, h("h3", {text: o.title}), h("div", {class:"row"}, sel, rnd), promptBox, h("div", {class:"row"}, go, rs, clock), ta, h("div", {class:"row"}, wc, cp, clr), checks);
}

/* spelling dictation */
function maskWord(w){ return w.replace(/[aeiouyàâäéèêëîïôöùûüœæ]/gi, "_"); }
function spellEl(o){
  const lang = o.lang || "en-GB";
  const tts = "speechSynthesis" in window;
  let order = shuffle(o.words), pos = -1, cur = null, right = 0, total = 0, answered = false;
  const misses = [];
  const meaning = h("div", {class:"cue", style:"min-height:0"}, "Нажми «Новое слово»: слово прозвучит, перевод появится здесь.");
  const inp = h("input", {type:"text", class:"inp", id: "sp-" + o.id, autocomplete:"off", autocapitalize:"off", spellcheck:"false", "aria-label":"Напиши слово", style:"max-width:360px;width:100%;font-size:17px"});
  const fb = h("div", {class:"expl", hidden: true});
  const sc = h("span", {class:"score"});
  const missBox = h("div");
  function say(){ if (!tts || !cur) return; try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(cur[0]); u.lang = lang; const v = voiceFor(lang); if (v) u.voice = v; u.rate = 0.85; speechSynthesis.speak(u); } catch(e){} }
  function next(){
    pos = (pos + 1) % order.length; if (pos === 0 && total) order = shuffle(o.words);
    cur = order[pos]; answered = false; inp.value = ""; inp.classList.remove("ok", "no"); fb.hidden = true;
    meaning.textContent = (cur[1] || "") + (tts ? "" : "   ·   " + maskWord(cur[0]));
    say(); inp.focus();
  }
  function drawMiss(){
    missBox.innerHTML = ""; if (!misses.length) return;
    const b = h("button", {class:"btn", type:"button"}, "Добавить ошибки в «Мои слова»");
    b.addEventListener("click", () => { let n = 0; misses.forEach(m => { if (!Store.hasTerm(m[0])){ Store.addWord({term: m[0], mean: m[1] || "", ex: m[2] || "", deck: "mine", src: "Орфография"}); n++; } }); toast(n ? "Добавлено слов: " + n : "Эти слова уже в словаре"); });
    missBox.append(h("div", {class:"row"}, h("span", {class:"score", text: "Ошибки: " + misses.map(m => m[0]).join(", ")}), b));
  }
  function check(){
    if (!cur || answered) return; answered = true; total++;
    const fix = x => x.trim().toLowerCase().replace(/[’`]/g, "'").replace(/\s+/g, " ");
    const ok = fix(inp.value) === fix(cur[0]);
    if (ok) right++; else if (!misses.includes(cur)) misses.push(cur);
    inp.classList.add(ok ? "ok" : "no");
    fb.hidden = false; fb.innerHTML = (ok ? "<b>Верно.</b> " : "<b>Правильно: " + esc(cur[0]) + ".</b> ") + esc(cur[2] || "");
    sc.innerHTML = "Верно <b>" + right + "</b> из " + total;
    drawMiss();
  }
  inp.addEventListener("keydown", e => { if (e.key === "Enter"){ e.preventDefault(); if (answered || !cur) next(); else check(); } });
  const bNext = h("button", {class:"btn pri", type:"button"}, "Новое слово"); bNext.addEventListener("click", next);
  const bSay = h("button", {class:"btn", type:"button", hidden: !tts}, "Повторить звук"); bSay.addEventListener("click", say);
  const bHint = h("button", {class:"btn", type:"button"}, "Подсказка"); bHint.addEventListener("click", () => { if (cur){ fb.hidden = false; fb.textContent = "Без гласных: " + maskWord(cur[0]); } });
  const bCheck = h("button", {class:"btn", type:"button"}, "Проверить"); bCheck.addEventListener("click", check);
  const table = h("details", {class:"task"}, h("summary", null, h("span", {class:"t", text: "Все слова и ловушки (" + o.words.length + ")"}), h("span", {class:"m", text: "таблица"})),
    h("div", {class:"tbody"}, phrTable("Слово", o.words.map(w => [w[0], (w[2] ? w[2] + " · " : "") + (w[1] || "")]), "Орфография")));
  return h("div", {class:"stack"},
    h("div", {class:"tool"}, h("h3", {text: o.title}), o.note ? h("div", {class:"prose"}, h("p", {html: md(o.note)})) : null,
      h("div", {class:"row"}, bNext, bSay, bHint), meaning, h("div", {class:"row"}, inp, bCheck), fb, h("div", {class:"row"}, sc), missBox,
      h("div", {class:"lbl", text: tts ? "Enter – проверить, ещё раз Enter – следующее слово" : "Синтез речи недоступен: пиши слово по переводу и маске"})),
    table);
}

/* ---------- practice sets ---------- */
function voiceFor(lang){
  try { const vs = speechSynthesis.getVoices(); return vs.find(v => v.lang === lang) || vs.find(v => v.lang && v.lang.slice(0, 2) === lang.slice(0, 2)) || null; } catch(e){ return null; }
}
function ttsEl(script, lang, note){
  const wrap = h("div", {class:"tts"});
  const txt = h("div", {class:"passage", hidden: true}, script.split("\n").map(x => h("p", {text: x})));
  const show = h("button", {class:"btn", type:"button"}, "Показать текст");
  show.addEventListener("click", () => { txt.hidden = !txt.hidden; show.textContent = txt.hidden ? "Показать текст" : "Скрыть текст"; });
  const ok = "speechSynthesis" in window;
  if (ok){
    const rate = h("select", {class:"inp", "aria-label":"Скорость"}, [["0.85","0.85×"],["1","1×"],["1.1","1.1×"]].map(r => h("option", {value: r[0]}, r[1])));
    rate.value = "1";
    const play = h("button", {class:"btn pri", type:"button"}, "Слушать");
    const stopB = h("button", {class:"btn", type:"button"}, "Стоп");
    play.addEventListener("click", () => {
      try {
        speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(script.replace(/\n/g, " "));
        u.lang = lang; const v = voiceFor(lang); if (v) u.voice = v; u.rate = +rate.value;
        speechSynthesis.speak(u);
      } catch(e){ toast("Синтез речи недоступен, открой текст"); }
    });
    stopB.addEventListener("click", () => { try { speechSynthesis.cancel(); } catch(e){} });
    wrap.append(play, stopB, h("label", null, "Скорость", rate));
  } else {
    wrap.append(h("span", {text: "Синтез речи в этом браузере недоступен: прочитай текст один раз и закрой его."}));
  }
  wrap.append(show);
  return h("div", {class:"stack", style:"gap:8px"}, note ? h("div", {class:"prose"}, h("p", {html: md(note)})) : null, wrap, txt);
}
function norm(s){ return String(s).toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, " ").replace(/[.,;:!?]+$/g, "").trim(); }
function setEl(ps){
  const body = h("div", {class:"set-b"});
  if (ps.intro) body.append(h("div", {class:"prose"}, h("p", {html: md(ps.intro)})));
  if (ps.text) body.append(h("div", {class:"passage"}, ps.text.split("\n").map(x => h("p", {html: md(x)}))));
  if (ps.script) body.append(ttsEl(ps.script, ps.lang || "en-GB", ps.scriptNote));
  const checkers = [];
  ps.qs.forEach((q, qi) => {
    const box = h("div", {class:"q"});
    box.append(h("div", {class:"qt", html: '<span class="qn">' + (qi + 1) + "</span>" + md(q.q)}));
    const ex = h("div", {class:"expl", hidden: true, html: "<b>Ответ:</b> " + md(answerText(q)) + (q.e ? "<br>" + md(q.e) : "")});
    if (q.o){
      const multi = Array.isArray(q.a);
      const name = ps.id + "-q" + qi;
      const opts = q.o.map((o, oi) => {
        const inp = h("input", {type: multi ? "checkbox" : "radio", name, value: oi, id: name + "-" + oi});
        return h("label", {class:"opt", for: inp.id}, inp, h("span", {html: md(o)}));
      });
      box.append(h("div", {class:"opts"}, opts));
      checkers.push(() => {
        const picked = opts.map((l, i) => l.querySelector("input").checked ? i : -1).filter(i => i >= 0);
        const right = multi ? q.a : [q.a];
        opts.forEach((l, i) => { l.classList.remove("ok", "no"); if (right.includes(i)) l.classList.add("ok"); else if (picked.includes(i)) l.classList.add("no"); });
        ex.hidden = false;
        return picked.length === right.length && picked.every(i => right.includes(i));
      });
    } else {
      const inp = h("input", {type:"text", id: ps.id + "-q" + qi, autocomplete:"off", spellcheck:"false", "aria-label":"Ответ " + (qi + 1)});
      box.append(inp);
      checkers.push(() => {
        const ok = (Array.isArray(q.a) ? q.a : [q.a]).some(a => norm(a) === norm(inp.value));
        inp.classList.remove("ok", "no"); inp.classList.add(ok ? "ok" : "no"); ex.hidden = false; return ok;
      });
    }
    box.append(ex);
    body.append(box);
  });
  const score = h("span", {class:"score"});
  const best = LS.get("best-" + ps.id, null);
  if (best != null) score.innerHTML = "Лучший результат: <b>" + best + "/" + ps.qs.length + "</b>";
  const check = h("button", {class:"btn pri", type:"button"}, "Проверить");
  check.addEventListener("click", () => {
    const n = checkers.reduce((s, f) => s + (f() ? 1 : 0), 0);
    const b = Math.max(n, LS.get("best-" + ps.id, 0)); LS.set("best-" + ps.id, b);
    score.innerHTML = "Результат: <b>" + n + "/" + ps.qs.length + "</b>" + (ps.band ? " · " + esc(ps.band(n)) : "") + " · лучший " + b;
  });
  const reset = h("button", {class:"btn", type:"button"}, "Сбросить");
  reset.addEventListener("click", () => {
    body.querySelectorAll("input").forEach(i => { if (i.type === "text") i.value = ""; else i.checked = false; i.classList.remove("ok", "no"); });
    body.querySelectorAll(".opt").forEach(l => l.classList.remove("ok", "no"));
    body.querySelectorAll(".expl").forEach(e => e.hidden = true);
    score.textContent = "";
  });
  body.append(h("div", {class:"row"}, check, reset, score));
  return h("details", {class:"set", id: "set-" + ps.id}, h("summary", null, h("span", {class:"t", text: ps.title}), h("span", {class:"m", text: (ps.tag ? ps.tag + " · " : "") + ps.qs.length + " вопр."})), body);
}
function answerText(q){
  if (q.o) return (Array.isArray(q.a) ? q.a : [q.a]).map(i => q.o[i]).join(" + ");
  return Array.isArray(q.a) ? q.a[0] : q.a;
}

/* ---------- vocabulary views ---------- */
const V = { tab: "cards", deck: "all", only: "learning", dir: "fwd", query: "", queue: [], cur: null, flipped: false, done: 0 };
function filtered(){
  let ws = allWords();
  if (V.deck !== "all") ws = ws.filter(w => w.deck === V.deck);
  return ws;
}
function boxOf(w){ return Store.prog[w.id] || 0; }
function dots(n){ return h("span", {class:"dots", "aria-label": "уровень " + n + " из 5"}, [0,1,2,3,4].map(i => h("i", {class: i < n ? "on" : null}))); }
function vocabView(root){
  root.innerHTML = "";
  const stats = h("div", {class:"stats"});
  const modeChip = h("span", {class:"mode"});
  const tabs = h("div", {class:"tabs", role:"tablist"});
  const chips = h("div", {class:"chips"});
  const pane = h("div");
  root.append(
    h("div", {class:"row", style:"justify-content:space-between"}, tabs, modeChip),
    stats, chips, pane
  );
  [["cards","Карточки"],["test","Тест"],["list","Список"],["add","Добавить"]].forEach(([k, l]) => {
    const b = h("button", {class:"tab", role:"tab", type:"button", "aria-selected": String(V.tab === k)}, l);
    b.addEventListener("click", () => { V.tab = k; V.queue = []; V.cur = null; draw(); });
    tabs.append(b);
  });
  function drawChips(){
    chips.innerHTML = "";
    const decks = [["all","Все"]].concat(DECKS.map(d => [d.id, d.title]), [["mine","Мои слова"]]);
    decks.forEach(([id, t]) => {
      const n = id === "all" ? allWords().length : allWords().filter(w => w.deck === id).length;
      const c = h("button", {class:"chip", type:"button", "aria-pressed": String(V.deck === id)}, t, h("span", {class:"n", text: n}));
      c.addEventListener("click", () => { V.deck = id; V.queue = []; V.cur = null; draw(); });
      chips.append(c);
    });
  }
  function drawStats(){
    const ws = allWords();
    const learned = ws.filter(w => boxOf(w) >= 4).length;
    const started = ws.filter(w => boxOf(w) > 0 && boxOf(w) < 4).length;
    const mine = Object.keys(Store.words).length;
    stats.innerHTML = "";
    [[ws.length, "слов всего"], [learned, "выучено (уровень 4–5)"], [started, "на повторении"], [mine, "моих слов"]].forEach(([v, k]) => stats.append(h("div", {class:"stat"}, h("div", {class:"v", text: v}), h("div", {class:"k", text: k}))));
    modeChip.className = "mode" + (Store.mode === "db" ? " sync" : "");
    modeChip.textContent = Store.mode === "db" ? "Словарь синхронизирован" : Store.mode === "init" ? "Загрузка словаря…" : (window.APP ? "Сохраняется на этом устройстве" : "Сохраняется в этом браузере");
  }
  function draw(){
    tabs.querySelectorAll(".tab").forEach((b, i) => b.setAttribute("aria-selected", String(["cards","test","list","add"][i] === V.tab)));
    drawChips(); drawStats();
    pane.innerHTML = "";
    if (V.tab === "cards") cards(pane);
    else if (V.tab === "test") test(pane);
    else if (V.tab === "list") listV(pane);
    else addV(pane);
  }
  V.redraw = () => { drawStats(); drawChips(); if (V.tab === "list") { pane.innerHTML = ""; listV(pane); } };
  draw();
}
function cards(pane){
  const only = h("select", {class:"inp", id:"fc-only", "aria-label":"Какие слова"}, h("option", {value:"learning"}, "Невыученные"), h("option", {value:"all"}, "Все слова"));
  only.value = V.only;
  const dir = h("select", {class:"inp", id:"fc-dir", "aria-label":"Направление"}, h("option", {value:"fwd"}, "Термин → значение"), h("option", {value:"rev"}, "Значение → термин"));
  dir.value = V.dir;
  only.addEventListener("change", () => { V.only = only.value; V.queue = []; V.cur = null; deal(); });
  dir.addEventListener("change", () => { V.dir = dir.value; V.flipped = false; show(); });
  const card = h("div", {class:"fc", tabindex:"0", role:"button", "aria-label":"Перевернуть карточку"});
  const counter = h("span", {class:"score"});
  const g = [["Не помню","g0",0],["С трудом","g1",1],["Помню","g2",2]].map(([l, c, v]) => { const b = h("button", {class:"btn " + c, type:"button"}, l); b.addEventListener("click", () => grade(v)); return b; });
  const grades = h("div", {class:"grade"}, g);
  pane.append(h("div", {class:"fc-wrap"}, h("div", {class:"row"}, only, dir, counter), card, grades, h("div", {class:"lbl", text:"Пробел или клик – перевернуть · 1 / 2 / 3 – оценка"})));
  function deal(){
    let ws = filtered();
    if (V.only === "learning") ws = ws.filter(w => boxOf(w) < 4);
    ws = shuffle(ws).sort((a, b) => boxOf(a) - boxOf(b));
    V.queue = ws; V.cur = V.queue.shift() || null; V.flipped = false; V.done = 0; show();
  }
  function show(){
    card.innerHTML = "";
    counter.textContent = V.cur ? "в очереди: " + (V.queue.length + 1) + " · пройдено: " + V.done : "";
    g.forEach(b => b.disabled = !V.cur || !V.flipped);
    if (!V.cur){
      card.append(h("div", {class:"term", text: filtered().length ? "Колода пройдена" : "Здесь пока пусто"}), h("div", {class:"ex", text: filtered().length ? "Выбери «Все слова» или другую колоду, чтобы повторить ещё раз." : "Добавь слова на вкладке «Добавить» или кнопкой + в таблицах фраз."}));
      return;
    }
    const w = V.cur;
    const front = V.dir === "fwd" ? w.term : (w.mean || w.term);
    card.append(h("div", {class:"dk"}, deckName(w.deck), " ", dots(boxOf(w))), h("div", {class:"term", text: front}));
    if (V.flipped){
      if (V.dir === "fwd") card.append(h("div", {class:"mean", text: w.mean}));
      else card.append(h("div", {class:"mean", text: w.term}));
      if (w.ex) card.append(h("div", {class:"ex", text: w.ex}));
    } else card.append(h("div", {class:"hint", text:"нажми, чтобы увидеть ответ"}));
  }
  function grade(v){
    if (!V.cur || !V.flipped) return;
    const w = V.cur, b = boxOf(w);
    const nb = v === 0 ? 0 : v === 1 ? Math.max(1, b) : Math.min(5, b + 1);
    Store.setBox(w.id, nb);
    if (v === 0) V.queue.splice(Math.min(3, V.queue.length), 0, w);
    else if (v === 1) V.queue.splice(Math.min(8, V.queue.length), 0, w);
    V.done++; V.cur = V.queue.shift() || null; V.flipped = false; show();
  }
  const flip = () => { if (!V.cur) return; V.flipped = !V.flipped; show(); };
  card.addEventListener("click", flip);
  card.addEventListener("keydown", e => { if (e.key === " " || e.key === "Enter"){ e.preventDefault(); flip(); } });
  pane._key = e => {
    const tag = document.activeElement && document.activeElement.tagName;
    if (V.tab !== "cards" || /INPUT|TEXTAREA|SELECT/.test(tag)) return;
    if (e.key === " " && document.activeElement !== card && tag !== "BUTTON"){ e.preventDefault(); flip(); }
    if (e.key === "1") grade(0); if (e.key === "2") grade(1); if (e.key === "3") grade(2);
  };
  document.removeEventListener("keydown", window.__fcKey || (() => {}));
  window.__fcKey = pane._key; document.addEventListener("keydown", window.__fcKey);
  if (!V.cur && !V.queue.length) deal(); else show();
}
function test(pane){
  const ws = filtered().filter(w => w.mean);
  if (ws.length < 4){ pane.append(h("div", {class:"empty", text:"Для теста нужно минимум 4 слова с переводом в выбранной колоде."})); return; }
  let n = 0, right = 0, cur;
  const qEl = h("div", {class:"fc", style:"cursor:default;min-height:150px"});
  const opts = h("div", {class:"opts"});
  const sc = h("span", {class:"score"});
  const nx = h("button", {class:"btn pri", type:"button"}, "Следующее слово");
  pane.append(h("div", {class:"fc-wrap"}, qEl, opts, h("div", {class:"row"}, nx, sc)));
  function ask(){
    const pool = shuffle(ws).sort((a, b) => boxOf(a) - boxOf(b));
    cur = pool[Math.floor(Math.random() * Math.min(pool.length, 12))];
    const others = shuffle(ws.filter(w => w.id !== cur.id && w.mean !== cur.mean)).slice(0, 3);
    const choices = shuffle([cur].concat(others));
    qEl.innerHTML = ""; qEl.append(h("div", {class:"dk", text: deckName(cur.deck)}), h("div", {class:"term", text: cur.term}));
    opts.innerHTML = ""; nx.disabled = true;
    choices.forEach(c => {
      const b = h("button", {class:"opt", type:"button", style:"text-align:left"}, c.mean);
      b.addEventListener("click", () => {
        if (!nx.disabled) return;
        n++; const ok = c.id === cur.id; if (ok) right++;
        Store.setBox(cur.id, ok ? Math.min(5, boxOf(cur) + 1) : 0);
        opts.querySelectorAll("button").forEach((x, i) => { if (choices[i].id === cur.id) x.classList.add("ok"); else if (x === b) x.classList.add("no"); });
        if (cur.ex) opts.append(h("div", {class:"expl", text: cur.ex}));
        sc.innerHTML = "Верно <b>" + right + "</b> из " + n; nx.disabled = false;
      });
      opts.append(b);
    });
  }
  nx.addEventListener("click", ask); ask();
}
function listV(pane){
  const q = h("input", {class:"inp", id:"v-search", type:"search", placeholder:"Поиск по слову или переводу", value: V.query, style:"max-width:360px;width:100%"});
  const exp = h("button", {class:"btn", type:"button"}, "Экспорт CSV (Anki)");
  exp.addEventListener("click", exportCsv);
  const bk = h("button", {class:"btn", type:"button"}, "Сохранить прогресс в файл");
  bk.addEventListener("click", exportProgress);
  const fin = h("input", {type:"file", accept:".json,application/json", id:"imp-file", hidden: true});
  fin.addEventListener("change", () => { const f = fin.files && fin.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => importProgress(String(r.result)); r.readAsText(f); fin.value = ""; });
  const im = h("button", {class:"btn", type:"button"}, "Загрузить прогресс из файла");
  im.addEventListener("click", () => fin.click());
  const tb = h("tbody");
  pane.append(h("div", {class:"stack"}, h("div", {class:"row"}, q, exp, bk, im, fin), h("div", {class:"tablewrap"}, h("table", {class:"vt"}, h("thead", null, h("tr", null, h("th", null, "Слово"), h("th", null, "Значение и пример"), h("th", null, "Уровень"), h("th", null, ""))), tb))));
  function fill(){
    tb.innerHTML = "";
    const s = V.query.trim().toLowerCase();
    let ws = filtered();
    if (s) ws = ws.filter(w => (w.term + " " + w.mean + " " + w.ex).toLowerCase().includes(s));
    if (!ws.length){ tb.append(h("tr", null, h("td", {colspan:"4", class:"empty", text: V.deck === "mine" ? "Своих слов пока нет. Добавь первое на вкладке «Добавить»." : "Ничего не найдено."}))); return; }
    ws.slice(0, 400).forEach(w => {
      const act = h("td", {style:"white-space:nowrap;text-align:right"});
      const rs = h("button", {class:"btn sm", type:"button", title:"Вернуть на уровень 0"}, "Сброс");
      rs.addEventListener("click", () => Store.setBox(w.id, 0));
      act.append(rs);
      if (!w.builtin){
        const del = h("button", {class:"btn sm", type:"button", style:"margin-left:6px"}, "Удалить");
        let armed = false;
        del.addEventListener("click", () => { if (!armed){ armed = true; del.textContent = "Точно?"; setTimeout(() => { armed = false; del.textContent = "Удалить"; }, 3000); return; } Store.delWord(w.id); });
        act.append(del);
      }
      tb.append(h("tr", null, h("td", null, h("strong", {text: w.term}), h("div", {class:"ex", text: deckName(w.deck)})), h("td", null, h("div", {text: w.mean}), w.ex ? h("div", {class:"ex", text: w.ex}) : null), h("td", null, dots(boxOf(w))), act));
    });
  }
  let t; q.addEventListener("input", () => { clearTimeout(t); t = setTimeout(() => { V.query = q.value; fill(); }, 150); });
  fill();
}
function addV(pane){
  const deckSel = () => h("select", {class:"inp", id:"a-deck"}, h("option", {value:"mine"}, "Мои слова"), (D.decks || []).map(d => h("option", {value: d.id}, d.title)));
  const term = h("input", {class:"inp", id:"a-term", required: true, placeholder:"например, mitigate"});
  const mean = h("input", {class:"inp", id:"a-mean", placeholder:"смягчать, уменьшать вред"});
  const ex = h("input", {class:"inp", id:"a-ex", placeholder:"mitigate the effects of climate change"});
  const dk = deckSel();
  const add = h("button", {class:"btn pri", type:"submit"}, "Добавить слово");
  const form = h("form", {class:"stack"},
    h("div", {class:"form"}, h("label", {for:"a-term"}, "Слово или фраза", term), h("label", {for:"a-mean"}, "Значение", mean), h("label", {for:"a-ex"}, "Пример (по желанию)", ex), h("label", {for:"a-deck"}, "Колода", dk)),
    h("div", {class:"row"}, add));
  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!term.value.trim()){ term.focus(); return; }
    if (Store.hasTerm(term.value)){ toast("Это слово уже есть в твоём словаре"); return; }
    Store.addWord({term: term.value.trim(), mean: mean.value.trim(), ex: ex.value.trim(), deck: dk.value});
    toast("Добавлено: " + term.value.trim()); term.value = mean.value = ex.value = ""; term.focus();
  });
  const bulk = h("textarea", {class:"inp", id:"a-bulk", rows:"7", style:"width:100%", placeholder:"mitigate ; смягчать ; mitigate the risks\nubiquitous ; вездесущий\nexacerbate ; усугублять ; exacerbate inequality"});
  const bdk = deckSel(); bdk.id = "a-bdeck";
  const bAdd = h("button", {class:"btn pri", type:"button"}, "Добавить списком");
  bAdd.addEventListener("click", () => {
    let n = 0;
    bulk.value.split("\n").forEach(line => {
      const p = line.split(/\s*[;\t]\s*/);
      if (!p[0] || !p[0].trim() || Store.hasTerm(p[0])) return;
      Store.addWord({term: p[0].trim(), mean: (p[1] || "").trim(), ex: (p[2] || "").trim(), deck: bdk.value}); n++;
    });
    toast(n ? "Добавлено слов: " + n : "Новых слов не найдено"); if (n) bulk.value = "";
  });
  pane.append(h("div", {class:"stack"},
    h("div", {class:"tool"}, h("h3", {text:"Одно слово"}), form),
    h("div", {class:"tool"}, h("h3", {text:"Списком"}), h("div", {class:"prose"}, h("p", {html: "Одна строка – одно слово: `слово ; перевод ; пример`. Подходит для вставки из таблиц, Quizlet и Anki (разделитель – точка с запятой или табуляция)."})), bulk, h("div", {class:"row"}, h("label", {for:"a-bdeck", style:"font-size:13px;color:var(--muted)"}, "Колода "), bdk, bAdd))
  ));
}
async function saveFile(filename, text, mime){
  let dl = null;
  try { if (window.claude && typeof window.claude.use === "function") dl = await window.claude.use("downloads"); } catch(e){}
  if (dl){
    try { await dl.save({filename, data: text}); toast("Файл сохранён"); return true; }
    catch(e){ if (e && e.code === "declined") return true; }
  }
  if (window.claude) return false;
  const blob = new Blob([text], {type: mime || "text/plain"});
  const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  try {
    const file = new File([blob], filename, {type: blob.type});
    if (mobile && navigator.canShare && navigator.canShare({files: [file]})){ await navigator.share({files: [file], title: filename}); return true; }
  } catch(e){ if (e && e.name === "AbortError") return true; }
  try {
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = filename;
    document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    toast("Файл сохранён"); return true;
  } catch(e){ return false; }
}
async function exportCsv(){
  const ws = filtered();
  const rows = ws.map(w => [w.term, w.mean, w.ex].map(x => '"' + String(x || "").replace(/"/g, '""') + '"').join(";"));
  const csv = rows.join("\n");
  if (await saveFile(D.id + "-" + (V.deck === "all" ? "vocab" : V.deck) + ".csv", csv, "text/csv")) return;
  copyText(csv); toast("CSV скопирован в буфер: вставь в Anki через «Импорт»");
}
/* progress backup: everything this trainer keeps (words, levels, drafts, plan ticks, best scores) */
async function exportProgress(){
  const ls = {};
  try { for (let i = 0; i < localStorage.length; i++){ const k = localStorage.key(i); if (k.indexOf(D.id + ":") === 0 && !/:(words|prog)$/.test(k)) ls[k] = localStorage.getItem(k); } } catch(e){}
  const data = JSON.stringify({app: "exam-trainer", exam: D.id, v: 1, saved: new Date().toISOString(), words: Store.words, prog: Store.prog, ls}, null, 1);
  const name = D.id + "-progress-" + new Date().toISOString().slice(0, 10) + ".json";
  if (await saveFile(name, data, "application/json")) return;
  copyText(data); toast("Резервная копия скопирована в буфер обмена");
}
function importProgress(text){
  let o; try { o = JSON.parse(text); } catch(e){ toast("Это не файл прогресса"); return; }
  if (!o || o.app !== "exam-trainer"){ toast("Это не файл прогресса тренажёра"); return; }
  if (o.exam !== D.id){ toast("Этот файл от другого тренажёра: " + String(o.exam).toUpperCase()); return; }
  let nw = 0, np = 0;
  Object.keys(o.words || {}).forEach(id => {
    const w = o.words[id]; if (!w || !w.term || Store.words[id] || Store.hasTerm(w.term)) return;
    Store.words[id] = Object.assign({id}, w);
    if (Store.mode === "db") Store.write("mywords/" + id, {term: w.term, mean: w.mean || "", ex: w.ex || "", deck: w.deck || "mine", src: w.src || "", created: w.created || Date.now()});
    nw++;
  });
  Object.keys(o.prog || {}).forEach(id => { const b = +o.prog[id] || 0; if (b > (Store.prog[id] || 0)){ Store.setBox(id, b); np++; } });
  try { Object.keys(o.ls || {}).forEach(k => { if (k.indexOf(D.id + ":") === 0) localStorage.setItem(k, o.ls[k]); }); } catch(e){}
  if (Store.mode !== "db") Store.saveLocal();
  Store.emit();
  toast("Загружено: слов " + nw + ", уровней " + np + ". Обновляю страницу…");
  setTimeout(() => location.reload(), 1400);
}

/* ---------- resources ---------- */
function resourcesView(root){
  (D.resources || []).forEach(g => {
    root.append(h("div", {class:"res-grp"}, h("h3", {class:"bh", text: g.group}), g.note ? h("div", {class:"prose"}, h("p", {html: md(g.note)})) : null,
      h("div", {class:"resbox"}, g.items.map(it => h("div", {class:"res"}, h("a", {href: it[1], target:"_blank", rel:"noopener", text: it[0]}), h("div", {class:"d", html: md(it[2] || "")}))))));
  });
}

/* ---------- shell / routing ---------- */
const VIEWS = [];
function buildViews(){
  D.sections.forEach(s => VIEWS.push({id: s.id, nav: s.nav, grp: s.grp || "Экзамен", kind: "sec", sec: s}));
  VIEWS.push({id:"templates", nav:"Все шаблоны", grp:"Инструменты", kind:"templates"});
  VIEWS.push({id:"hacks", nav:"Все лайфхаки", grp:"Инструменты", kind:"hacks"});
  VIEWS.push({id:"practice", nav:"Практика", grp:"Инструменты", kind:"practice"});
  VIEWS.push({id:"vocab", nav:"Словарь", grp:"Инструменты", kind:"vocab"});
  VIEWS.push({id:"resources", nav:"Ресурсы и сайты", grp:"Инструменты", kind:"resources"});
}
function head(eyebrow, title, sub){ return h("div", {class:"sec-head"}, h("div", {class:"eyebrow", text: eyebrow}), h("h2", {text: title}), sub ? h("p", {html: md(sub)}) : null); }
function render(id){
  const v = VIEWS.find(x => x.id === id) || VIEWS[0];
  document.querySelectorAll(".rail a").forEach(a => a.setAttribute("aria-current", a.dataset.id === v.id ? "page" : "false"));
  const main = $("main"); main.innerHTML = "";
  VIEW_SUBS.forEach(f => f()); VIEW_SUBS = [];
  if (window.__fcKey){ document.removeEventListener("keydown", window.__fcKey); window.__fcKey = null; }
  const st = h("div", {class:"stack"});
  if (v.kind === "sec"){
    main.append(head(v.grp, v.sec.title, v.sec.sub));
    if (v.sec.bilingual){
      const tg = h("button", {class:"btn", type:"button"});
      const sync = () => { const off = document.body.classList.contains("hide-ru"); tg.textContent = off ? "Показать перевод" : "Скрыть перевод (тренировка английского)"; };
      tg.addEventListener("click", () => { document.body.classList.toggle("hide-ru"); LS.set("hide-ru", document.body.classList.contains("hide-ru")); sync(); });
      sync();
      const hs = v.sec.blocks.map((b, i) => [b, i]).filter(x => x[0][0] === "h");
      const toc = h("div", {class:"toc"});
      st.append(h("div", {class:"row"}, tg), toc);
      v._toc = {toc, hs};
    }
    v.sec.blocks.forEach(b => { const el = block(b, v.sec); if (el){ st.append(el); if (b[0] === "h" && v._toc) v._toc.toc.append(h("button", {class:"chip", type:"button", onclick: () => el.scrollIntoView({behavior: "smooth", block: "start"})}, b[1].split(" · ")[0])); } });
  } else if (v.kind === "templates"){
    main.append(head("Инструменты", "Все шаблоны", "Собраны из всех разделов. Кнопка «Копировать» забирает шаблон целиком, квадратные скобки – места для твоего содержания."));
    let last = "";
    TEMPLATES.forEach(t => { if (t.sec !== last){ st.append(h("h3", {class:"bh", text: t.sec})); last = t.sec; } st.append(tmplEl(t.title, t.text)); });
  } else if (v.kind === "hacks"){
    main.append(head("Инструменты", "Все лайфхаки", "Приёмы из всех разделов в одном списке, удобно пролистать накануне экзамена."));
    let last = "";
    HACKS.forEach(t => { if (t.sec !== last){ st.append(h("h3", {class:"bh", text: t.sec})); last = t.sec; } st.append(tipsEl(t.title, t.items)); });
  } else if (v.kind === "practice"){
    main.append(head("Инструменты", "Практика с проверкой", D.practiceIntro));
    let last = "";
    (D.practice || []).forEach(ps => { if (ps.group && ps.group !== last){ st.append(h("h3", {class:"bh", text: ps.group})); last = ps.group; } st.append(setEl(ps)); });
  } else if (v.kind === "vocab"){
    main.append(head("Инструменты", "Словарь и карточки", D.vocabIntro));
    vocabView(st);
  } else if (v.kind === "resources"){
    main.append(head("Инструменты", "Ресурсы и сайты", D.resIntro));
    resourcesView(st);
  }
  main.append(st);
}
function shell(){
  document.title = D.title;
  const days = h("span", {class:"pill"});
  const date = h("input", {type:"date", id:"exam-date", "aria-label":"Дата экзамена"});
  const savedDate = LS.get("date", D.defaultDate || "");
  if (savedDate) date.value = savedDate;
  const updDays = () => {
    if (!date.value){ days.innerHTML = "Укажи дату экзамена"; return; }
    const d = Math.ceil((new Date(date.value + "T09:00:00") - new Date()) / 86400000);
    days.innerHTML = d > 0 ? "До экзамена <b>" + d + "</b> дн." : d === 0 ? "<b>Экзамен сегодня</b>" : "Экзамен прошёл";
  };
  date.addEventListener("change", () => { LS.set("date", date.value); updDays(); });
  updDays();
  const top = h("header", {class:"top"}, h("div", {class:"top-in"},
    h("div", {class:"brand"}, h("div", {class:"stamp", text: D.stamp}), h("div", null, h("h1", {text: D.heading}), h("p", {text: D.tagline}))),
    h("div", {class:"meta"}, window.HUB_URL ? h("a", window.APP ? {class:"pill hub", href: window.HUB_URL} : {class:"pill hub", href: window.HUB_URL, target:"_blank", rel:"noopener"}, "← Все экзамены") : null, h("span", {class:"pill", html: md(D.target)}), days, h("label", {class:"datebox", for:"exam-date"}, "Дата", date))
  ));
  const rail = h("nav", {class:"rail", "aria-label":"Разделы"});
  let grp = "";
  VIEWS.forEach(v => {
    if (v.grp !== grp){ rail.append(h("div", {class:"grp", text: v.grp})); grp = v.grp; }
    const a = h("a", {href: "#" + v.id, "data-id": v.id}, h("span", {text: v.nav}), v.kind === "sec" && v.sec.blocks ? h("span", {class:"n", text: countTasks(v.sec) || ""}) : null);
    rail.append(a);
  });
  document.body.append(top, h("div", {class:"app"}, rail, h("main", {id:"main"})));
}
function countTasks(sec){ return (sec.blocks || []).filter(b => b[0] === "task" || b[0] === "ex").length; }
function route(){
  const id = (location.hash || "").slice(1);
  render(VIEWS.some(v => v.id === id) ? id : VIEWS[0].id);
}
try { if (LS.get("hide-ru", false)) document.body.classList.add("hide-ru"); } catch(e){}
buildViews(); collect(); buildPhraseDecks(); shell();
window.addEventListener("hashchange", () => { route(); window.scrollTo(0, 0); });
route();
Store.on(() => { if (V.redraw && $(".stats")) V.redraw(); });
Store.init();
})();
