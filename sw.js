const CACHE = "exams-8fee5b88a2";
const ASSETS = ["./", "app/engine.css", "app/engine.js", "content/delf-more.js", "content/delf.js", "content/gre-math.js", "content/gre-more.js", "content/gre.js", "content/ielts-more.js", "content/ielts.js", "delf.html", "fonts.css", "fonts/golos-text-cyrillic-400-normal.woff2", "fonts/golos-text-cyrillic-500-normal.woff2", "fonts/golos-text-cyrillic-600-normal.woff2", "fonts/golos-text-cyrillic-700-normal.woff2", "fonts/golos-text-latin-400-normal.woff2", "fonts/golos-text-latin-500-normal.woff2", "fonts/golos-text-latin-600-normal.woff2", "fonts/golos-text-latin-700-normal.woff2", "fonts/jetbrains-mono-cyrillic-400-normal.woff2", "fonts/jetbrains-mono-cyrillic-600-normal.woff2", "fonts/jetbrains-mono-latin-400-normal.woff2", "fonts/jetbrains-mono-latin-600-normal.woff2", "fonts/unbounded-cyrillic-500-normal.woff2", "fonts/unbounded-cyrillic-600-normal.woff2", "fonts/unbounded-cyrillic-700-normal.woff2", "fonts/unbounded-cyrillic-800-normal.woff2", "fonts/unbounded-latin-500-normal.woff2", "fonts/unbounded-latin-600-normal.woff2", "fonts/unbounded-latin-700-normal.woff2", "fonts/unbounded-latin-800-normal.woff2", "gre.html", "icons/delf-180.png", "icons/delf-192.png", "icons/delf-32.png", "icons/delf-512.png", "icons/exams-180.png", "icons/exams-192.png", "icons/exams-32.png", "icons/exams-512.png", "icons/gre-180.png", "icons/gre-192.png", "icons/gre-32.png", "icons/gre-512.png", "icons/ielts-180.png", "icons/ielts-192.png", "icons/ielts-32.png", "icons/ielts-512.png", "ielts.html", "index.html", "manifest-delf.webmanifest", "manifest-exams.webmanifest", "manifest-gre.webmanifest", "manifest-ielts.webmanifest"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request; const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  const fixed = /\/(fonts|icons)\//.test(url.pathname);
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    if (fixed){ const hit = await c.match(req, {ignoreSearch: true}); if (hit) return hit; }
    try {
      const fresh = req.mode === "navigate" ? new Request(req.url, {cache: "no-cache", credentials: "same-origin"}) : new Request(req, {cache: "no-cache"});
      const r = await Promise.race([fetch(fresh), new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), 3500))]);
      if (r && r.ok){ c.put(req, r.clone()); return r; }
      throw new Error("status " + (r && r.status));
    } catch (err) {
      const hit = await c.match(req, {ignoreSearch: true});
      if (hit) return hit;
      if (req.mode === "navigate"){ const idx = await c.match("index.html"); if (idx) return idx; }
      return Response.error();
    }
  })());
});
