import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { weld, simplify, meshopt, prune } from "@gltf-transform/functions";
import {
  MeshoptEncoder,
  MeshoptDecoder,
  MeshoptSimplifier,
} from "meshoptimizer";
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
const doc = await io.read("graphics-lab/assets/concept-mobile.glb");
// Distant cars retain the same PBR factors and silhouette but omit embedded
// texture images. This is an explicit LOD, not a fallback for a failed load.
for (const texture of doc.getRoot().listTextures()) texture.dispose();
await doc.transform(
  weld(),
  simplify({
    simplifier: MeshoptSimplifier,
    ratio: 0.08,
    error: 0.01,
    lockBorder: false,
  }),
  meshopt({ encoder: MeshoptEncoder, level: "medium" }),
  prune(),
);
doc.getRoot().setExtras({
  ...doc.getRoot().getExtras(),
  changes:
    "Derived from the logo-free mobile model; simplified to distant-rival LOD. Attribution and original licence retained.",
});
await io.write("graphics-lab/assets/concept-rival.glb", doc);
let triangles = 0;
for (const mesh of doc.getRoot().listMeshes())
  for (const p of mesh.listPrimitives())
    triangles +=
      (p.getIndices()?.getCount() || p.getAttribute("POSITION").getCount()) / 3;
console.log("Distant-rival triangles:", triangles);
