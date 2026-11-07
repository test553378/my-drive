// Optional minimal reproduction of the Linux WebKit offline-navigation limitation.
// Run with installed Playwright WebKit: node tests/repro-webkit-offline.js
import { createServer } from "node:http";
import { webkit } from "@playwright/test";
const html =
  '<!doctype html><title>Cached fixture</title><p>cached page</p><script>navigator.serviceWorker.register("./sw.js")</script>';
const worker = `
self.addEventListener('install', e => e.waitUntil(caches.open('offline-fixture').then(c => c.addAll(['./'])).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));`;
const server = createServer((req, res) => {
  res.setHeader(
    "Content-Type",
    req.url === "/sw.js" ? "text/javascript" : "text/html",
  );
  res.end(req.url === "/sw.js" ? worker : html);
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
let browser;
try {
  browser = await webkit.launch();
  const context = await browser.newContext(),
    page = await context.newPage();
  await page.goto(`http://127.0.0.1:${server.address().port}/`);
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
    if (!navigator.serviceWorker.controller)
      await new Promise((resolve) =>
        navigator.serviceWorker.addEventListener("controllerchange", resolve, {
          once: true,
        }),
      );
  });
  await context.setOffline(true);
  try {
    await page.reload();
    console.log("Offline navigation succeeded in this WebKit runtime.");
  } catch (error) {
    console.log(
      "Minimal cached-page fixture, without game code:",
      error.message,
    );
  }
} finally {
  await browser?.close();
  await new Promise((resolve) => server.close(resolve));
}
