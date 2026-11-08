// Development-only server with the same /my-drive/ prefix as GitHub Pages.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
const files = new Set([
  "index.html",
  "style.css",
  "game.js",
  "diagnostics.js",
  "driving.js",
  "race-config.js",
  "collisions.js",
  "hazards.js",
  "damage.js",
  "pedestrians.js",
  "race-metrics.js",
  "actors.js",
  "tracks.js",
  "world.js",
  "input.js",
  "camera.js",
  "garage.js",
  "vehicle-config.js",
  "vehicles.js",
  "manifest.webmanifest",
  "icon.svg",
  "service-worker.js",
]);
const types = {
  html: "text/html; charset=utf-8",
  js: "text/javascript; charset=utf-8",
  css: "text/css; charset=utf-8",
  webmanifest: "application/manifest+json",
  svg: "image/svg+xml",
};
createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  const name =
    url.pathname === "/my-drive/"
      ? "index.html"
      : url.pathname.slice("/my-drive/".length);
  if (!url.pathname.startsWith("/my-drive/") || !files.has(name)) {
    res.writeHead(404);
    res.end();
    return;
  }
  try {
    const body = await readFile(new URL("../" + name, import.meta.url));
    res.writeHead(200, {
      "Content-Type": types[name.split(".").at(-1)],
      "Cache-Control": "no-cache",
    });
    res.end(body);
  } catch {
    res.writeHead(500);
    res.end();
  }
}).listen(8765, "127.0.0.1");
