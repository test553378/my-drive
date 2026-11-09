import { build } from "esbuild";
import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
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
