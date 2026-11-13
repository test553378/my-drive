import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
const TAU = Math.PI * 2;
export const materials = Array.from({ length: 9 }, (_, id) => {
  const m =
    id === 2
      ? new THREE.MeshPhysicalMaterial({
          metalness: 0.6,
          roughness: 0.25,
          clearcoat: 1,
          clearcoatRoughness: 0.18,
          vertexColors: true,
        })
      : new THREE.MeshStandardMaterial({
          vertexColors: true,
          metalness: id === 6 ? 0.85 : 0,
          roughness: id === 6 ? 0.3 : id === 7 ? 0.82 : 0.7,
        });
  if (id === 3) {
    m.transparent = true;
    m.opacity = 0.55;
    m.depthWrite = false;
    m.roughness = 0.08;
    m.metalness = 0.25;
    m.side = THREE.DoubleSide;
  }
  if (id === 4) {
    m.emissive.set(0xffffff);
    m.emissiveIntensity = 0.3;
  }
  m.userData.shared = true;
  return m;
});
export class ShapeMesh {
  constructor() {
    this.data = [];

    this.count = 0;
    this.vertices = null;
  }
  tri(a, b, c, col, mat = 0) {
    const v = [b[0] - a[0], b[1] - a[1], b[2] - a[2]],
      w = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
    let n = [
        v[1] * w[2] - v[2] * w[1],
        v[2] * w[0] - v[0] * w[2],
        v[0] * w[1] - v[1] * w[0],
      ],
      mag = Math.hypot(...n) || 1;
    n = n.map((x) => x / mag);
    for (const [i, x] of [a, b, c].entries())
      this.data.push(
        ...x,
        ...n,
        ...(Array.isArray(col[0]) ? col[i] : col),
        mat,
      );
    return this;
  }
  quad(a, b, c, d, col, mat = 0) {
    return Array.isArray(col[0])
      ? this.tri(a, b, c, [col[0], col[1], col[2]], mat).tri(
          a,
          c,
          d,
          [col[0], col[2], col[3]],
          mat,
        )
      : this.tri(a, b, c, col, mat).tri(a, c, d, col, mat);
  }
  box(x, y, z, w, h, l, col, mat = 0) {
    const x0 = x - w / 2,
      x1 = x + w / 2,
      y0 = y - h / 2,
      y1 = y + h / 2,
      z0 = z - l / 2,
      z1 = z + l / 2;
    this.quad([x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [x1, y0, z0], col, mat);
    this.quad([x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [x0, y0, z1], col, mat);
    this.quad([x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [x0, y0, z0], col, mat);
    this.quad([x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1], col, mat);
    this.quad([x0, y1, z0], [x0, y1, z1], [x1, y1, z1], [x1, y1, z0], col, mat);
    this.quad([x0, y0, z1], [x0, y0, z0], [x1, y0, z0], [x1, y0, z1], col, mat);
    return this;
  }
  cylinder(x, y, z, r, h, col, mat = 0, N = 9) {
    for (let i = 0; i < N; i++) {
      let a = (i * TAU) / N,
        b = ((i + 1) * TAU) / N;
      let p = [x + r * Math.cos(a), y, z + r * Math.sin(a)],
        q = [x + r * Math.cos(b), y, z + r * Math.sin(b)],
        pt = [p[0], y + h, p[2]],
        qt = [q[0], y + h, q[2]];
      this.quad(p, pt, qt, q, col, mat);
      this.tri([x, y + h, z], qt, pt, col, mat);
    }
    return this;
  }
  sphere(x, y, z, rx, ry, rz, col, mat = 0, segments = 9, rings = 5) {
    for (let j = 0; j < rings; j++) {
      let a = (Math.PI * j) / rings,
        b = (Math.PI * (j + 1)) / rings;
      for (let i = 0; i < segments; i++) {
        let t = (i * TAU) / segments,
          u = ((i + 1) * TAU) / segments;
        const v = (phi, theta) => [
          x + rx * Math.sin(phi) * Math.cos(theta),
          y + ry * Math.cos(phi),
          z + rz * Math.sin(phi) * Math.sin(theta),
        ];
        this.quad(v(a, t), v(a, u), v(b, u), v(b, t), col, mat);
      }
    }
    return this;
  }
  done() {
    this.count = this.data.length / 10;
    this.bytes = this.data.length * 4;
    const byMaterial = new Map();
    for (let i = 0; i < this.data.length; i += 10) {
      const id = this.data[i + 9];
      if (!byMaterial.has(id)) byMaterial.set(id, []);
      byMaterial.get(id).push(...this.data.slice(i, i + 10));
    }
    this.object = new THREE.Group();
    for (const [id, vertices] of byMaterial) {
      if (id === 9) continue;
      const p = [],
        n = [],
        c = [],
        uv = [];
      for (let i = 0; i < vertices.length; i += 10) {
        p.push(...vertices.slice(i, i + 3));
        n.push(...vertices.slice(i + 3, i + 6));
        const color = new THREE.Color().setRGB(
          vertices[i + 6],
          vertices[i + 7],
          vertices[i + 8],
          THREE.SRGBColorSpace,
        );
        c.push(color.r, color.g, color.b);
        uv.push(vertices[i] / 2, vertices[i + 2] / 2);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(p, 3));
      g.setAttribute("normal", new THREE.Float32BufferAttribute(n, 3));
      g.setAttribute("color", new THREE.Float32BufferAttribute(c, 3));
      g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
      const mesh = new THREE.Mesh(g, materials[id] || materials[0]);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.object.add(mesh);
    }
    this.data = [];
    return this;
  }
  dispose() {
    this.object?.traverse((o) => o.geometry?.dispose());
  }
}

export class BodyMesh extends ShapeMesh {
  box(x, y, z, w, h, l, col, mat = 0) {
    if (Math.min(w, h, l) < 0.09) return super.box(x, y, z, w, h, l, col, mat);
    let g = new RoundedBoxGeometry(
      w,
      h,
      l,
      2,
      Math.min(0.1, w * 0.1, h * 0.1, l * 0.1),
    );
    if (g.index) g = g.toNonIndexed();
    g.translate(x, y, z);
    const p = g.getAttribute("position"),
      n = g.getAttribute("normal");
    for (let i = 0; i < p.count; i++)
      this.data.push(
        p.getX(i),
        p.getY(i),
        p.getZ(i),
        n.getX(i),
        n.getY(i),
        n.getZ(i),
        ...col,
        mat,
      );
    g.dispose();
    return this;
  }
  sphere(x, y, z, rx, ry, rz, col, mat = 0, segments = 16, rings = 8) {
    const g = new THREE.SphereGeometry(
      1,
      Math.max(20, segments),
      Math.max(12, rings),
    ).toNonIndexed();
    g.scale(rx, ry, rz);
    g.translate(x, y, z);
    const p = g.getAttribute("position"),
      n = g.getAttribute("normal");
    for (let i = 0; i < p.count; i++)
      this.data.push(
        p.getX(i),
        p.getY(i),
        p.getZ(i),
        n.getX(i),
        n.getY(i),
        n.getZ(i),
        ...col,
        mat,
      );
    g.dispose();
    return this;
  }
}
export function release(root, { textures = false, keepShared = false } = {}) {
  const geometries = new Set(),
    mats = new Set(),
    images = new Set();
  root.traverse((o) => {
    if (o.isInstancedMesh) o.dispose();
    if (o.geometry && !(keepShared && o.geometry.userData.shared))
      geometries.add(o.geometry);
    for (const m of [].concat(o.material || [])) {
      if (!m.userData.shared || textures) mats.add(m);
      if (textures)
        for (const v of Object.values(m)) if (v?.isTexture) images.add(v);
    }
  });
  geometries.forEach((g) => g.dispose());
  mats.forEach((m) => m.dispose());
  images.forEach((t) => t.dispose());
}
