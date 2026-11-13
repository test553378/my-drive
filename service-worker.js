// A complete, versioned app shell. No remote resources or runtime data are cached.
const CACHE_NAME = "bokuno-grand-race-v8-20261113a";
const FILES = [
  "index.html",
  "style.css",
  "diagnostics.js",
  "game.bundle.js",
  "game.js",
  "game-assets.json",
  "manifest.webmanifest",
  "icon.svg",
  "graphics-lab/assets/concept-high.glb",
  "graphics-lab/assets/concept-mobile.glb",
  "graphics-lab/assets/concept-rival.glb",
  "graphics-lab/assets/asphalt-color.jpg",
  "graphics-lab/assets/asphalt-normal.jpg",
  "graphics-lab/assets/asphalt-rough.jpg",
  "graphics-lab/assets/sunset.hdr",
  "graphics-lab/credits.html",
  "graphics-lab/THREE-LICENSE.txt",
  "graphics-lab/MESHOPT-LICENSE.txt",
  "graphics-lab/CAR-SOURCE-LICENSE.md",
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
