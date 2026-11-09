// Offline asset preparation. Originals are downloaded from the credited sources.
import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import {
  dedup,
  prune,
  weld,
  simplify,
  meshopt,
} from "@gltf-transform/functions";
import {
  MeshoptEncoder,
  MeshoptDecoder,
  MeshoptSimplifier,
} from "meshoptimizer";
import { readFile, writeFile, copyFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";
const source = process.argv[2];
if (!source)
  throw Error(
    "Usage: node scripts/prepare-graphics-assets.mjs SOURCE_DIRECTORY",
  );
await Promise.all([
  MeshoptEncoder.ready,
  MeshoptDecoder.ready,
  MeshoptSimplifier.ready,
]);
const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    "meshopt.encoder": MeshoptEncoder,
    "meshopt.decoder": MeshoptDecoder,
  });
const output = new URL("../graphics-lab/assets/", import.meta.url);
await mkdir(output, { recursive: true });
const original = await readFile(`${source}/car.glb`);
let reports = [];
for (const [name, ratio] of [
  ["concept-high.glb", 1],
  ["concept-mobile.glb", 0.38],
]) {
  const doc = await io.readBinary(original);
  // Source GLB also references the excluded logo image in emissive slots.
  // Remove the image itself so no material or embedded payload retains it.
  const logo = doc
    .getRoot()
    .listTextures()
    .find((t) =>
      createHash("sha256")
        .update(t.getImage())
        .digest("hex")
        .startsWith("1453559c5852"),
    );
  if (!logo)
    throw Error(
      "Source logo fingerprint changed; review before redistribution",
    );
  for (const m of doc.getRoot().listMaterials())
    if (m.getEmissiveTexture() === logo)
      m.setEmissiveTexture(null).setEmissiveFactor([0, 0, 0]);
  logo.dispose();
  const excluded = ["8cca97aa2b8f", "54297a994035"];
  for (const t of doc.getRoot().listTextures())
    if (
      excluded.some((h) =>
        createHash("sha256").update(t.getImage()).digest("hex").startsWith(h),
      )
    )
      t.dispose();
  for (const m of doc.getRoot().listMaterials())
    if (m.getName() === "Tireside")
      m.setBaseColorFactor([0.018, 0.018, 0.019, 1]).setRoughnessFactor(0.78);
  // The CC-BY license excludes the trademarks: remove BOTH their meshes and
  // unreachable logo image bytes, rather than merely hiding them at runtime.
  for (const node of doc.getRoot().listNodes())
    if (["License Plate", "InteriorSteeringEmblem"].includes(node.getName()))
      node.dispose();
  await doc.transform(prune(), dedup(), weld());
  if (ratio < 1)
    await doc.transform(
      simplify({
        simplifier: MeshoptSimplifier,
        ratio,
        error: 0.001,
        lockBorder: true,
      }),
    );
  await doc.transform(
    meshopt({ encoder: MeshoptEncoder, level: "medium" }),
    prune(),
  );
  doc.getRoot().setExtras({
    source: "Khronos Car Concept",
    attribution:
      "Eric Chadwick / Darmstadt Graphics Group GmbH (2024), CC-BY-4.0; original Unity Fan, CC0",
    changes:
      "Trademark plate and steering emblem removed, unused logo image removed; geometry welded, mobile version simplified, meshopt compression",
  });
  const bytes = await io.writeBinary(doc);
  await writeFile(new URL(name, output), bytes);
  const triangles = doc
    .getRoot()
    .listMeshes()
    .reduce(
      (n, m) =>
        n +
        m
          .listPrimitives()
          .reduce(
            (a, p) =>
              a +
              (p.getIndices()?.getCount() ||
                p.getAttribute("POSITION").getCount()) /
                3,
            0,
          ),
      0,
    );
  reports.push({ name, bytes: bytes.length, triangles });
}
for (const name of [
  "asphalt-color.jpg",
  "asphalt-normal.jpg",
  "asphalt-rough.jpg",
  "sunset.hdr",
])
  await copyFile(`${source}/${name}`, new URL(name, output));
await copyFile(
  new URL("../node_modules/three/LICENSE", import.meta.url),
  new URL("../THREE-LICENSE.txt", output),
);
await copyFile(
  `${source}/car-license.md`,
  new URL("../CAR-SOURCE-LICENSE.md", output),
);
let files = {};
for (const { name } of reports.concat(
  [
    "asphalt-color.jpg",
    "asphalt-normal.jpg",
    "asphalt-rough.jpg",
    "sunset.hdr",
  ].map((name) => ({ name })),
)) {
  const bytes = await readFile(new URL(name, output));
  files[name] = {
    bytes: bytes.length,
    sha256: createHash("sha256").update(bytes).digest("hex"),
  };
}
await writeFile(
  new URL("../asset-manifest.json", output),
  JSON.stringify(
    {
      version: "graphics-p2.1",
      originalCarSha256: createHash("sha256").update(original).digest("hex"),
      models: reports,
      files,
    },
    null,
    2,
  ) + "\n",
);
console.log(reports);
