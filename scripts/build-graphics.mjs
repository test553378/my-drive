import { build } from "esbuild";
import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { bundleConfig } from "./bundle-config.mjs";
const notices = await Promise.all(
  ["THREE-LICENSE.txt", "MESHOPT-LICENSE.txt"].map((name) =>
    readFile("graphics-lab/" + name, "utf8"),
  ),
);
await build({
  entryPoints: ["graphics-lab/src/app.js"],
  bundle: true,
  minify: true,
  format: "esm",
  target: ["safari15", "es2020"],
  outfile: "graphics-lab/app.bundle.js",
  legalComments: "eof",
  footer: { js: "/* Third-party licenses\n" + notices.join("\n\n") + "\n*/" },
});
const file = "graphics-lab/asset-manifest.json",
  manifest = JSON.parse(await readFile(file)),
  bytes = await readFile("graphics-lab/app.bundle.js");
manifest.engine = {
  name: "Three.js",
  version: JSON.parse(await readFile("node_modules/three/package.json"))
    .version,
};
manifest.bundle = {
  bytes: bytes.length,
  sha256: createHash("sha256").update(bytes).digest("hex"),
};
await writeFile(file, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Self-hosted bundle: ${bytes.length} bytes`);

const beforeBundle = await readFile("game.bundle.js").catch(() => null),
  beforeManifest = await readFile("game-assets.json").catch(() => null);
await build(await bundleConfig("game-main.js", "game.bundle.js"));
const bundle = await readFile("game.bundle.js"),
  files = {};
for (const [name, info] of Object.entries(manifest.files))
  files[name] = { ...info, path: "graphics-lab/assets/" + name };
const rival = await readFile("graphics-lab/assets/concept-rival.glb");
files["concept-rival.glb"] = {
  path: "graphics-lab/assets/concept-rival.glb",
  bytes: rival.length,
  sha256: createHash("sha256").update(rival).digest("hex"),
};
const game = {
  version: "8.0.1",
  engine: manifest.engine,
  files,
  bundle: {
    path: "game.bundle.js",
    bytes: bundle.length,
    sha256: createHash("sha256").update(bundle).digest("hex"),
  },
  models: [
    ...manifest.models,
    { name: "concept-rival.glb", bytes: rival.length, triangles: 28229 },
  ],
  attribution:
    "Existing Car Concept CC-BY-4.0 and Poly Haven CC0 sources; see graphics-lab/credits.html. Rival LOD derives from the logo-free mobile model, simplifies geometry and removes texture images.",
};
const gameText = JSON.stringify(game, null, 2) + "\n";
await writeFile("game-assets.json", gameText);
if (
  process.env.CI &&
  (!beforeBundle?.equals(bundle) || beforeManifest?.toString() !== gameText)
)
  throw Error(
    "Committed main-game bundle/manifest is stale; run npm run build:graphics and commit the results.",
  );
console.log(
  `Main PBR game bundle: ${bundle.length} bytes; rival LOD ${rival.length} bytes`,
);
