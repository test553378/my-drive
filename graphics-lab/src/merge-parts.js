import * as THREE from "three";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";
// glTF quantized/interleaved attributes must be decoded to float BEFORE applying
// world matrices. Body pieces share materials and never animate independently.
export function mergeRigidParts(root) {
  root.updateWorldMatrix(true, true);
  const inverse = root.matrixWorld.clone().invert(),
    groups = new Map(),
    old = [];
  root.traverse((mesh) => {
    if (!mesh.isMesh || Array.isArray(mesh.material) || mesh.isSkinnedMesh)
      return;
    const geometry = mesh.geometry,
      matrix = new THREE.Matrix4().multiplyMatrices(inverse, mesh.matrixWorld),
      g = new THREE.BufferGeometry();
    for (const [name, size] of [
      ["position", 3],
      ["normal", 3],
      ["uv", 2],
      ["uv1", 2],
    ]) {
      const attr = geometry.getAttribute(name),
        n = geometry.getAttribute("position").count,
        data = new Float32Array(n * size);
      if (attr)
        for (let i = 0; i < n; i++)
          for (let k = 0; k < size; k++)
            data[i * size + k] = attr.getComponent(i, k);
      g.setAttribute(name, new THREE.BufferAttribute(data, size));
    }
    if (geometry.index)
      g.setIndex(
        new THREE.BufferAttribute(new Uint32Array(geometry.index.array), 1),
      );
    else
      g.setIndex(
        Array.from(
          { length: geometry.getAttribute("position").count },
          (_, i) => i,
        ),
      );
    g.applyMatrix4(matrix);
    if (!groups.has(mesh.material)) groups.set(mesh.material, []);
    groups.get(mesh.material).push(g);
    old.push(mesh);
  });
  for (const mesh of old) mesh.removeFromParent();
  for (const [material, geometries] of groups) {
    const merged = mergeGeometries(geometries, false);
    if (!merged) throw Error("Could not merge rigid model parts");
    const mesh = new THREE.Mesh(merged, material);
    mesh.name = `Merged ${material.name}`;
    root.add(mesh);
    geometries.forEach((g) => g.dispose());
  }
  for (const g of new Set(old.map((m) => m.geometry))) g.dispose();
}
