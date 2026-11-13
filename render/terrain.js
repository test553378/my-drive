import * as THREE from "three";
export function mountainTerrain(track) {
  const pad = 140,
    x0 = track.bounds.minX - pad,
    z0 = track.bounds.minZ - pad,
    width = track.bounds.maxX - track.bounds.minX + pad * 2,
    depth = track.bounds.maxZ - track.bounds.minZ + pad * 2,
    nx = Math.ceil(width / 8),
    nz = Math.ceil(depth / 8),
    dx = width / nx,
    dz = depth / nz,
    points = track.table.filter((_, i) => i % 3 === 0),
    heights = new Float32Array((nx + 1) * (nz + 1)),
    positions = [],
    colors = [],
    indices = [];
  for (let iz = 0; iz <= nz; iz++)
    for (let ix = 0; ix <= nx; ix++) {
      const x = x0 + ix * dx,
        z = z0 + iz * dz;
      let nearest = points[0],
        distance = Infinity;
      for (const p of points) {
        const d = (p.x - x) ** 2 + (p.z - z) ** 2;
        if (d < distance) {
          distance = d;
          nearest = p;
        }
      }
      distance = Math.sqrt(distance);
      const noise = Math.sin(x * 0.027) * Math.cos(z * 0.024),
        edge = Math.min(ix * dx, (nx - ix) * dx, iz * dz, (nz - iz) * dz),
        fade = THREE.MathUtils.smoothstep(edge, 0, 60),
        hill =
          nearest.y -
          3.6 -
          distance * 0.045 +
          Math.max(0, distance - 25) * 0.1 * (0.5 + 0.5 * noise),
        y = -4 + (hill + 4) * fade;
      heights[iz * (nx + 1) + ix] = y;
      positions.push(x, y, z);
      const color = new THREE.Color(0x626e52).multiplyScalar(
        0.9 + noise * 0.08,
      );
      colors.push(color.r, color.g, color.b);
    }
  for (let iz = 0; iz < nz; iz++)
    for (let ix = 0; ix < nx; ix++) {
      const a = iz * (nx + 1) + ix,
        b = a + nx + 1;
      indices.push(a, b, a + 1, a + 1, b, b + 1);
    }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  g.setIndex(indices);
  g.computeVertexNormals();
  const mesh = new THREE.Mesh(
    g,
    new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }),
  );
  mesh.name = "mountain-terrain";
  mesh.receiveShadow = true;
  function heightAt(x, z) {
    const u = THREE.MathUtils.clamp((x - x0) / dx, 0, nx - 1e-6),
      v = THREE.MathUtils.clamp((z - z0) / dz, 0, nz - 1e-6),
      ix = Math.floor(u),
      iz = Math.floor(v),
      tx = u - ix,
      tz = v - iz,
      a = iz * (nx + 1) + ix,
      h00 = heights[a],
      h10 = heights[a + 1],
      h01 = heights[a + nx + 1],
      h11 = heights[a + nx + 2];
    return tx + tz <= 1
      ? h00 + tx * (h10 - h00) + tz * (h01 - h00)
      : h11 + (1 - tx) * (h01 - h11) + (1 - tz) * (h10 - h11);
  }
  return { mesh, heightAt };
}
