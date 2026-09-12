// Offline cache for the CISSP study PWA.
// IMPORTANT: bump this version number whenever you change any file, so devices
// throw away the old cache and pull fresh copies. e.g. v2 -> v3.
const CACHE = "cissp-v2";
const ASSETS = [
  "index.html",
  "content.js",
  "manifest.json",
  "icon-180.png",
  "icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Network-first for the app shell and content so edits show up quickly;
// fall back to cache when offline.
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  const isAppFile =
    url.pathname.endsWith("content.js") ||
    url.pathname.endsWith("index.html") ||
    url.pathname.endsWith("/");
  if (isAppFile) {
    e.respondWith(
      fetch(e.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
