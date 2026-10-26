const CACHE = "exams-1dcd0417e9";
const ASSETS = ["./", "delf.html", "fonts.css", "fonts/golos-text-cyrillic-400-normal.woff2", "fonts/golos-text-cyrillic-500-normal.woff2", "fonts/golos-text-cyrillic-600-normal.woff2", "fonts/golos-text-cyrillic-700-normal.woff2", "fonts/golos-text-latin-400-normal.woff2", "fonts/golos-text-latin-500-normal.woff2", "fonts/golos-text-latin-600-normal.woff2", "fonts/golos-text-latin-700-normal.woff2", "fonts/jetbrains-mono-cyrillic-400-normal.woff2", "fonts/jetbrains-mono-cyrillic-600-normal.woff2", "fonts/jetbrains-mono-latin-400-normal.woff2", "fonts/jetbrains-mono-latin-600-normal.woff2", "fonts/unbounded-cyrillic-500-normal.woff2", "fonts/unbounded-cyrillic-600-normal.woff2", "fonts/unbounded-cyrillic-700-normal.woff2", "fonts/unbounded-cyrillic-800-normal.woff2", "fonts/unbounded-latin-500-normal.woff2", "fonts/unbounded-latin-600-normal.woff2", "fonts/unbounded-latin-700-normal.woff2", "fonts/unbounded-latin-800-normal.woff2", "gre.html", "icons/delf-180.png", "icons/delf-192.png", "icons/delf-32.png", "icons/delf-512.png", "icons/exams-180.png", "icons/exams-192.png", "icons/exams-32.png", "icons/exams-512.png", "icons/gre-180.png", "icons/gre-192.png", "icons/gre-32.png", "icons/gre-512.png", "icons/ielts-180.png", "icons/ielts-192.png", "icons/ielts-32.png", "icons/ielts-512.png", "ielts.html", "index.html", "manifest-delf.webmanifest", "manifest-exams.webmanifest", "manifest-gre.webmanifest", "manifest-ielts.webmanifest"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(caches.open(CACHE).then(async c => {
    const hit = await c.match(req, {ignoreSearch: true});
    const net = fetch(req).then(r => { if (r && r.ok) c.put(req, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    const r = await net;
    return r || (req.mode === "navigate" ? c.match("index.html") : Response.error());
  }));
});
