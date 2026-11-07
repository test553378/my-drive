import { VEHICLES } from "./garage.js";
const TAU = Math.PI * 2;
const C = (r, g, b) => [r / 255, g / 255, b / 255];
const shade = (c, s) => c.map((v) => Math.min(1, v * s));
const mix = (a, b, t) => a + (b - a) * t;
const cross = (a, b) => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
const norm = (a) => {
  const l = Math.hypot(...a) || 1;
  return a.map((v) => v / l);
};
const sub = (a, b) => a.map((v, i) => v - b[i]);
// Shared vertex normals on curved panels give continuous highlights without
// subdivision at runtime, textures, render targets, or fragment highp support.
function surface(mesh, rows, color, material, flip = false) {
  const normal = (i, j) => {
    const dr = sub(
      rows[Math.min(rows.length - 1, i + 1)][j],
      rows[Math.max(0, i - 1)][j],
    );
    const dc = sub(
      rows[i][Math.min(rows[i].length - 1, j + 1)],
      rows[i][Math.max(0, j - 1)],
    );
    return norm(cross(dr, dc)).map((v) => (flip ? -v : v));
  };
  const vertex = (i, j) => {
    const p = rows[i][j],
      c = typeof color === "function" ? color(p) : color;
    mesh.data.push(...p, ...normal(i, j), ...c, material);
  };
  for (let i = 0; i < rows.length - 1; i++)
    for (let j = 0; j < rows[i].length - 1; j++) {
      for (const [r, c] of [
        [i, j],
        [i + 1, j],
        [i + 1, j + 1],
        [i, j],
        [i + 1, j + 1],
        [i, j + 1],
      ])
        vertex(r, c);
    }
}
function curve(points, z, index) {
  let i = 0;
  while (i < points.length - 2 && z > points[i + 1][0]) i++;
  const a = points[i],
    b = points[i + 1],
    t = Math.max(0, Math.min(1, (z - a[0]) / (b[0] - a[0]))),
    s = t * t * (3 - 2 * t);
  return mix(a[index], b[index], s);
}
function beam(m, a, b, r, color, mat = 2) {
  const f = norm(sub(b, a)),
    u = norm(cross(f, Math.abs(f[1]) > 0.9 ? [1, 0, 0] : [0, 1, 0])),
    v = norm(cross(f, u));
  const ring = (p) =>
    [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ].map(([s, t]) => p.map((x, i) => x + r * (u[i] * s + v[i] * t)));
  const aa = ring(a),
    bb = ring(b);
  for (let i = 0; i < 4; i++) {
    const j = (i + 1) % 4;
    m.quad(aa[i], bb[i], bb[j], aa[j], color, mat);
  }
}
function ring(m, x, r0, r1, color, mat, N = 32) {
  for (let i = 0; i < N; i++) {
    const a = (i * TAU) / N,
      b = ((i + 1) * TAU) / N,
      p = (r, t) => [x, r * Math.cos(t), r * Math.sin(t)];
    m.quad(p(r0, a), p(r1, a), p(r1, b), p(r0, b), color, mat);
  }
}
export function buildBody(Mesh, paint, model, wide, detailed = true) {
  const m = new Mesh(),
    spec = VEHICLES[model],
    width = wide ? 1.14 : 1.04;
  const profile =
    model === 0
      ? [
          [-2.43, 0.87, 0.67],
          [-1.47, 1.02, 0.79],
          [-0.3, 0.96, 0.76],
          [1.47, 1, 0.69],
          [2.43, 0.82, 0.52],
        ]
      : [
          [-2.4, 0.88, 0.71],
          [-1.42, 1, 0.8],
          [-0.2, 0.95, 0.78],
          [1.43, 0.99, 0.73],
          [2.43, 0.85, 0.56],
        ];
  const rows = [];
  const longitudinal = detailed ? 52 : 24;
  for (let i = 0; i <= longitudinal; i++) {
    const z = mix(-2.43, 2.43, i / longitudinal),
      w = curve(profile, z, 1) * width,
      base = curve(profile, z, 2);
    let opening = 0.19,
      shoulder = base;
    for (const wheelZ of spec.wheelZ) {
      const d = Math.abs(z - wheelZ);
      if (d < 0.48)
        opening = Math.max(opening, 0.44 + Math.sqrt(0.48 * 0.48 - d * d));
      if (d < 0.57)
        shoulder = Math.max(shoulder, 0.44 + Math.sqrt(0.57 * 0.57 - d * d));
    }
    const us = [-1, -1, -0.96, -0.82, -0.56, 0, 0.56, 0.82, 0.96, 1, 1];
    rows.push(
      us.map((u, j) => {
        const a = Math.abs(u),
          blend = Math.max(0, (a - 0.55) / 0.45);
        const y =
          j === 0 || j === 10
            ? opening
            : mix(base + 0.035 * (1 - a * a), shoulder, blend * blend);
        return [u * w, y, z];
      }),
    );
  }
  surface(
    m,
    rows,
    (p) => shade(paint, 0.68 + 0.32 * Math.min(1, (p[1] - 0.15) / 0.65)),
    2,
  );
  for (const i of [0, rows.length - 1]) {
    const row = rows[i];
    for (let j = 1; j < row.length - 2; j++)
      m.tri([0, 0.22, row[0][2]], row[j], row[j + 1], paint, 2);
  }
  m.box(0, 0.18, 0, 1.78, 0.1, 4.25, C(17, 22, 27), 8);
  const roofZ = model === 0 ? [-0.85, 0.2] : [-1.02, -0.05],
    height = spec.roof;
  const rear = [-0.71, 0.79, -1.55],
    rearR = [0.71, 0.79, -1.55],
    rr = [-0.64, height - 0.04, roofZ[0]],
    rrR = [0.64, height - 0.04, roofZ[0]],
    rf = [-0.62, height, roofZ[1]],
    rfR = [0.62, height, roofZ[1]],
    front = [-0.78, 0.75, 1.14],
    frontR = [0.78, 0.75, 1.14];
  // Curved glass and roof panels have separate, consistent material boundaries.
  function panel(a, b, c, d, mat, color, bulge = 0.025) {
    const grid = [];
    const rowsCount = detailed ? 6 : 3,
      colsCount = detailed ? 12 : 8;
    for (let j = 0; j <= rowsCount; j++) {
      const t = j / rowsCount,
        l = a.map((v, i) => mix(v, d[i], t)),
        r = b.map((v, i) => mix(v, c[i], t));
      grid.push(
        Array.from({ length: colsCount + 1 }, (_, i) => {
          const u = i / colsCount;
          return [
            mix(l[0], r[0], u),
            mix(l[1], r[1], u) + bulge * Math.sin(u * Math.PI),
            mix(l[2], r[2], u),
          ];
        }),
      );
    }
    surface(m, grid, color, mat);
  }
  panel(rear, rearR, rrR, rr, 3, C(26, 45, 57));
  panel(rr, rrR, rfR, rf, 2, paint, 0.045);
  panel(rf, rfR, frontR, front, 3, C(31, 52, 63));
  m.quad(rear, rr, rf, front, C(25, 42, 53), 3);
  m.quad(rearR, frontR, rfR, rrR, C(25, 42, 53), 3);
  for (const [a, b] of [
    [rear, rr],
    [rearR, rrR],
    [rf, front],
    [rfR, frontR],
    [rr, rf],
    [rrR, rfR],
  ])
    beam(m, a, b, 0.025, paint);
  for (const s of [-1, 1]) {
    beam(
      m,
      [s * 0.71, 0.82, -0.58],
      [s * 0.64, height - 0.015, -0.48],
      0.021,
      C(16, 23, 29),
      8,
    );
    m.sphere(s * 1.035, 0.91, 0.42, 0.13, 0.055, 0.15, paint, 2, 12, 6);
    beam(
      m,
      [s * 0.77, 0.79, 0.4],
      [s * 1.02, 0.89, 0.42],
      0.023,
      C(20, 28, 35),
      8,
    );
    // Slim original light signatures, bumper openings, skirts, door handles.
    m.box(s * 0.67, 0.57, 2.429, 0.39, 0.052, 0.025, C(221, 238, 246), 4);
    m.box(s * 0.68, 0.64, -2.435, 0.45, 0.047, 0.025, C(232, 24, 28), 4);
    m.box(s * 0.67, 0.31, 2.44, 0.38, 0.14, 0.025, C(13, 19, 24), 8);
    m.box(s * 0.65, 0.27, -2.44, 0.16, 0.105, 0.04, C(88, 98, 108), 6);
    m.box(s * (width * 0.96), 0.26, 0, 0.06, 0.08, 1.95, C(23, 28, 34), 8);
    m.box(
      s * (width * 0.94),
      0.73,
      -0.23,
      0.028,
      0.027,
      0.19,
      C(89, 103, 112),
      6,
    );
    // Hood recesses and rear cooling louvres follow the body instead of floating.
    beam(
      m,
      [s * 0.39, 0.76, 0.85],
      [s * 0.33, 0.62, 1.92],
      0.012,
      shade(paint, 0.65),
    );
  }
  m.box(0, 0.365, 2.442, 0.85, 0.16, 0.022, C(12, 18, 23), 8);
  m.box(0, 0.4, -2.444, 1.27, 0.16, 0.022, C(17, 22, 27), 8);
  m.box(0, 0.58, -2.45, 0.48, 0.105, 0.028, C(151, 160, 163), 6);
  if (model === 0)
    for (let i = 0; i < 7; i++)
      m.box(-0.42 + i * 0.14, 0.79, -1.85, 0.045, 0.018, 0.3, C(20, 28, 34), 8);
  return m.done();
}
export function buildWheel(Mesh, type, detailed = true) {
  const m = new Mesh(),
    N = detailed ? 40 : 20,
    profile = [
      [-0.165, 0.34],
      [-0.15, 0.405],
      [-0.11, 0.43],
      [0.11, 0.43],
      [0.15, 0.405],
      [0.165, 0.34],
    ];
  const rows = profile.map(([x, r]) =>
    Array.from({ length: N + 1 }, (_, i) => [
      x,
      r * Math.cos((i * TAU) / N),
      r * Math.sin((i * TAU) / N),
    ]),
  );
  surface(m, rows, C(25, 28, 31), 7, true);
  for (const side of [-1, 1]) {
    const x = side * 0.167;
    ring(m, x, 0.285, 0.34, C(24, 27, 30), 7, N);
    ring(m, x, 0.258, 0.285, C(153, 163, 173), 6, N);
    ring(m, side * 0.14, 0, 0.258, C(49, 55, 62), 6, N);
    const spokes = type === 0 ? 5 : 10;
    for (let i = 0; i < spokes; i++) {
      const a = (i * TAU) / spokes,
        p = (r, t) => [side * 0.175, r * Math.cos(t), r * Math.sin(t)];
      m.quad(
        p(0.07, a - 0.2),
        p(0.26, a - 0.065),
        p(0.26, a + 0.065),
        p(0.07, a + 0.2),
        type === 0 ? C(177, 188, 199) : C(91, 103, 116),
        6,
      );
    }
    ring(m, side * 0.18, 0, 0.069, C(122, 134, 145), 6, 16);
    for (let i = 0; i < (detailed ? 5 : 0); i++) {
      const a = (i * TAU) / 5;
      m.sphere(
        side * 0.185,
        0.043 * Math.cos(a),
        0.043 * Math.sin(a),
        0.009,
        0.009,
        0.009,
        C(207, 213, 218),
        6,
        6,
        3,
      );
    }
  }
  // Two continuous grooves distinguish the road tyre from the slick compound.
  if (type === 0)
    for (const x of [-0.068, 0.068])
      for (let i = 0; i < N; i++) {
        const a = (i * TAU) / N,
          b = ((i + 1) * TAU) / N,
          p = (xx, t) => [xx, 0.431 * Math.cos(t), 0.431 * Math.sin(t)];
        m.quad(
          p(x - 0.009, a),
          p(x + 0.009, a),
          p(x + 0.009, b),
          p(x - 0.009, b),
          C(10, 12, 15),
          7,
        );
      }
  return m.done();
}
export function buildAero(Mesh, model, body, type) {
  if (type === 0) return null;
  const m = new Mesh(),
    width = body ? 1.19 : 1.08,
    carbon = C(27, 33, 40);
  m.box(0, 0.16, 2.37, width * 2, 0.055, 0.33, carbon, 8);
  for (const s of [-1, 1])
    m.box(s * width, 0.19, 0, 0.08, 0.065, 2.2, carbon, 8);
  m.box(0, 0.18, -2.33, 1.7, 0.16, 0.36, carbon, 8);
  for (let i = -2; i <= 2; i++)
    m.box(i * 0.25, 0.19, -2.44, 0.025, 0.19, 0.35, carbon, 8);
  if (type === 1) m.box(0, 0.79, -2.31, width * 1.9, 0.07, 0.19, carbon, 8);
  else {
    for (const s of [-1, 1])
      beam(
        m,
        [s * 0.65, 0.72, -2.05],
        [s * 0.65, 1.18, -2.15],
        0.027,
        carbon,
        8,
      );
    const rows = [];
    for (let i = 0; i <= 4; i++) {
      const z = -2.36 + i * 0.09;
      rows.push(
        Array.from({ length: 17 }, (_, j) => {
          const x = mix(-width, width, j / 16);
          return [
            x,
            1.2 +
              0.022 * Math.cos((i * Math.PI) / 4) +
              0.035 * (x / width) ** 2,
            z,
          ];
        }),
      );
    }
    surface(m, rows, carbon, 8);
    for (const s of [-1, 1])
      m.box(s * width, 1.24, -2.18, 0.025, 0.18, 0.43, carbon, 8);
  }
  return m.done();
}
