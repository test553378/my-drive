// A complete, versioned app shell. No remote resources or runtime data are cached.
const CACHE_NAME = "bokuno-grand-race-v5-20261107a";
const FILES = [
  "index.html",
  "style.css",
  "diagnostics.js",
  "game.js",
  "driving.js",
  "camera.js",
  "garage.js",
  "vehicles.js",
  "manifest.webmanifest",
  "icon.svg",
];
const urls = FILES.map((file) => new URL(file, self.registration.scope).href);
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(
        urls.map((url) => new Request(url, { cache: "reload" })),
      );
      await self.skipWaiting();
    })(),
  );
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(
            (key) => key.startsWith("bokuno-grand-race-") && key !== CACHE_NAME,
          )
          .map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  const scope = new URL(self.registration.scope);
  const key =
    url.pathname === scope.pathname ? urls[0] : url.origin + url.pathname;
  if (!urls.includes(key)) return;
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      return (await cache.match(key)) || fetch(event.request);
    })(),
  );
});
