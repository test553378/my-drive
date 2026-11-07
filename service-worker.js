/* Version 3; network-first updates, and offline cache after first online launch. */
const CACHE_NAME = 'bokuno-grand-race-v3-20261107';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key!==CACHE_NAME && (key.startsWith('bokuno-') || key.startsWith('drive-'))).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response.ok) {const copy = response.clone(); caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));}
    return response;
  }).catch(() => caches.match(event.request)));
});
