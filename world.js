import { trackPose, pointAt } from "./tracks.js";
const C = (r, g, b) => [r / 255, g / 255, b / 255];
const noise = (n) => {
  const v = Math.sin(n * 127.12 + 24.03) * 46411.35;
  return v - Math.floor(v);
};
export function buildTrackScene(Mesh, track) {
  const owned = [],
    make = () => {
      const m = new Mesh();
      owned.push(m);
      return m;
    },
    chunks = [];
  const samples = track.table.filter((_, i) => i % 8 === 0);
  function ground(x, z) {
    let nearest = samples[0],
      min = Infinity;
    for (const p of samples) {
      const d = (p.x - x) ** 2 + (p.z - z) ** 2;
      if (d < min) {
        min = d;
        nearest = p;
      }
    }
    return (
      nearest.y -
      1.2 -
      Math.min(14, Math.sqrt(min) * 0.08) +
      Math.sin(x * 0.02) * Math.cos(z * 0.014) * 0.3
    );
  }
  const vertex = (d, o, y = 0) => {
    const p = trackPose(track, d, o);
    return [p.x, p.y + y, p.z];
  };
  function box(m, d, o, y, w, h, l, color, mat = 0) {
    const p = trackPose(track, d, o),
      c = Math.cos(p.yaw),
      s = Math.sin(p.yaw),
      at = (x, yy, z) => [
        p.x + c * x + s * z,
        p.y + y + yy,
        p.z - s * x + c * z,
      ];
    const a = at(-w / 2, -h / 2, -l / 2),
      b = at(w / 2, -h / 2, -l / 2),
      cc = at(w / 2, h / 2, -l / 2),
      dd = at(-w / 2, h / 2, -l / 2),
      e = at(-w / 2, -h / 2, l / 2),
      f = at(w / 2, -h / 2, l / 2),
      g = at(w / 2, h / 2, l / 2),
      hh = at(-w / 2, h / 2, l / 2);
    m.quad(a, dd, cc, b, color, mat)
      .quad(f, g, hh, e, color, mat)
      .quad(e, hh, dd, a, color, mat)
      .quad(b, cc, g, f, color, mat)
      .quad(dd, hh, g, cc, color, mat)
      .quad(e, a, b, f, color, mat);
  }
  const terrain = make(),
    b = track.bounds,
    pad = 110,
    N = 32;
  const pos = (i, j) => {
    const x = b.minX - pad + ((b.maxX - b.minX + pad * 2) * i) / N,
      z = b.minZ - pad + ((b.maxZ - b.minZ + pad * 2) * j) / N;
    return [x, ground(x, z), z];
  };
  for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++)
      terrain.quad(
        pos(i, j),
        pos(i, j + 1),
        pos(i + 1, j + 1),
        pos(i + 1, j),
        track.theme === "city" ? C(99, 113, 101) : C(67, 104, 68),
        5,
      );
  terrain.done();
  function ribbon(m, a, b, c, d, col, mat = 0) {
    const ny = (b[2] - a[2]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[2] - a[2]);
    if (ny < 0) m.quad(a, d, c, b, col, mat);
    else m.quad(a, b, c, d, col, mat);
  }
  const step = 5,
    count = Math.ceil(track.length / 100);
  for (let i = 0; i < count; i++)
    chunks.push({
      start: i * 100,
      end: Math.min(track.length, (i + 1) * 100),
      road: make(),
      deco: make(),
      center: trackPose(track, Math.min(track.length, (i + 0.5) * 100)),
      radius: 90,
    });
  const chunk = (d) =>
    chunks[
      Math.min(
        chunks.length - 1,
        Math.floor((((d % track.length) + track.length) % track.length) / 100),
      )
    ];
  const inPit = (d) =>
    track.repairFractions.some((f) => Math.abs(d - track.length * f) < 30);
  for (let d = 0; d < track.length; d += step) {
    const end = Math.min(track.length, d + step),
      road = chunk(d).road,
      deco = chunk(d).deco,
      W = track.halfWidth;
    ribbon(
      road,
      vertex(d, -W),
      vertex(end, -W),
      vertex(end, W),
      vertex(d, W),
      C(52, 58, 65),
      1,
    );
    for (const side of [-1, 1]) {
      const a = vertex(d, side * (W + 0.8), -0.04),
        bb = vertex(end, side * (W + 0.8), -0.04),
        outA = vertex(d, side * (W + 13)),
        outB = vertex(end, side * (W + 13));
      outA[1] = ground(outA[0], outA[2]);
      outB[1] = ground(outB[0], outB[2]);
      ribbon(road, a, bb, outB, outA, C(78, 118, 75), 5);
      ribbon(
        road,
        vertex(d, side * (W - 0.22), 0.018),
        vertex(end, side * (W - 0.22), 0.018),
        vertex(end, side * (W - 0.1), 0.018),
        vertex(d, side * (W - 0.1), 0.018),
        C(232, 235, 226),
      );
      const curb = Math.floor(d / 5) % 2 ? C(225, 228, 216) : C(196, 43, 39);
      ribbon(
        road,
        vertex(d, side * W, 0.02),
        vertex(end, side * W, 0.02),
        vertex(end, side * (W + 0.65), 0.02),
        vertex(d, side * (W + 0.65), 0.02),
        curb,
      );
      if (d % 10 === 0 && !(side === 1 && inPit(d))) {
        deco.quad(
          vertex(d, side * (W + 1.2), 0.8),
          vertex(end + 5, side * (W + 1.2), 0.8),
          vertex(end + 5, side * (W + 1.2), 1.05),
          vertex(d, side * (W + 1.2), 1.05),
          C(176, 190, 201),
          6,
        );
        box(deco, d, side * (W + 1.2), 0.5, 0.13, 1, 0.13, C(120, 137, 151), 6);
      }
    }
    if (d % 30 === 0)
      for (const offset of [-W / 3, W / 3])
        ribbon(
          road,
          vertex(d, offset - 0.06, 0.02),
          vertex(d + 11, offset - 0.06, 0.02),
          vertex(d + 11, offset + 0.06, 0.02),
          vertex(d, offset + 0.06, 0.02),
          C(213, 222, 222),
        );
    if (
      track.tunnel &&
      d >= track.tunnel[0] * track.length &&
      d <= track.tunnel[1] * track.length
    ) {
      for (const side of [-1, 1])
        deco.quad(
          vertex(d, side * (W + 0.7), 0),
          vertex(end, side * (W + 0.7), 0),
          vertex(end, side * (W + 0.7), 5.8),
          vertex(d, side * (W + 0.7), 5.8),
          C(109, 123, 133),
        );
      deco.quad(
        vertex(d, -W - 0.8, 5.8),
        vertex(end, -W - 0.8, 5.8),
        vertex(end, W + 0.8, 5.8),
        vertex(d, W + 0.8, 5.8),
        C(96, 112, 123),
      );
      if (d % 20 === 0)
        box(deco, d, 0, 5.65, 3, 0.07, 0.18, C(232, 242, 237), 4);
    }
  }
  // Start/finish and gate checkpoints are anchored to real route distance.
  for (let row = 0; row < 4; row++)
    for (let col = 0; col < 12; col++) {
      const road = chunks[0].road,
        d = row * 1.1,
        o = -track.halfWidth + ((col + 0.5) * track.halfWidth) / 6;
      box(
        road,
        d,
        o,
        0.035,
        track.halfWidth / 6,
        0.025,
        1.1,
        (row + col) % 2 ? C(31, 37, 44) : C(230, 236, 233),
      );
    }
  for (const fraction of track.repairFractions) {
    const d = fraction * track.length,
      m = chunk(d).deco,
      road = chunk(d).road,
      W = track.halfWidth;
    for (let s = d - 24; s < d + 24; s += 4)
      ribbon(
        road,
        vertex(s, W + 0.05, 0.016),
        vertex(s + 4, W + 0.05, 0.016),
        vertex(s + 4, W + 4.8, 0.016),
        vertex(s, W + 4.8, 0.016),
        C(42, 130, 98),
        0,
      );
    box(m, d, W + 7, 1.5, 3.5, 3, 11, C(176, 189, 197));
    box(m, d, W + 5.5, 3.1, 6, 0.17, 13, C(39, 95, 111), 6);
    for (let i = -2; i <= 2; i++) {
      box(m, d + i * 3, W + 3, 0.055, 0.28, 0.05, 1.2, C(221, 241, 154), 4);
    }
  }
  for (const fraction of [0.0, 0.5]) {
    const d = fraction * track.length,
      m = chunk(d).deco;
    for (const side of [-1, 1])
      box(
        m,
        d,
        side * (track.halfWidth + 1.5),
        4.0,
        0.45,
        8,
        0.55,
        C(101, 120, 136),
        6,
      );
    box(m, d, 0, 7.7, track.halfWidth * 2 + 4, 1.2, 0.6, C(32, 56, 76), 6);
  }
  // Theme-specific buildings, grandstands, trees and roadside safety signs.
  for (let i = 0; i < Math.floor(track.length / 24); i++) {
    const d = i * 24 + 8,
      m = chunk(d).deco;
    for (const side of [-1, 1]) {
      const o = side * (track.halfWidth + 13 + noise(i * 7 + side) * 18),
        p = trackPose(track, d, o),
        base = ground(p.x, p.z) - p.y;
      if (track.theme === "city") {
        const h = 8 + noise(i * 11 + side) * 27;
        box(
          m,
          d,
          o,
          base + h / 2,
          7 + noise(i) * 7,
          h,
          10,
          C(
            119 + Math.floor(noise(i + 4) * 70),
            139 + Math.floor(noise(i + 6) * 45),
            154 + Math.floor(noise(i + 8) * 30),
          ),
        );
        for (let floor = 2; floor < h; floor += 3)
          for (const col of [-2, 2])
            box(
              m,
              d + col,
              o - side * 5.4,
              base + floor,
              1.4,
              1.3,
              0.06,
              C(49, 84, 110),
              3,
            );
      } else if (track.theme === "grandprix" && i % 5 < 3) {
        for (let row = 0; row < 4; row++)
          box(
            m,
            d,
            o + side * row * 0.7,
            base + 1 + row * 0.6,
            8,
            0.42,
            12,
            [
              C(68, 111, 146),
              C(195, 82, 64),
              C(187, 194, 197),
              C(200, 169, 94),
            ][row],
          );
      } else {
        const h = 3.5 + noise(i * 13 + side) * 5.5;
        m.cylinder(p.x, p.y + base, p.z, 0.23, h * 0.65, C(99, 78, 60), 0, 6);
        m.sphere(
          p.x,
          p.y + base + h * 0.7,
          p.z,
          1.8,
          h * 0.43,
          1.8,
          C(
            48 + Math.floor(noise(i) * 22),
            90 + Math.floor(noise(i + 10) * 32),
            57,
          ),
          0,
          8,
          5,
        );
      }
    }
  }
  for (const f of track.crossings) {
    const d = f * track.length,
      road = chunk(d).road,
      m = chunk(d).deco;
    for (let o = -track.halfWidth; o < track.halfWidth; o += 1.6)
      box(road, d, o, 0.04, 0.85, 0.025, 5, C(230, 235, 226));
    for (const side of [-1, 1]) {
      box(
        m,
        d - 7,
        side * (track.halfWidth + 1.8),
        1.7,
        0.1,
        3.4,
        0.1,
        C(122, 145, 165),
        6,
      );
      box(
        m,
        d - 7,
        side * (track.halfWidth + 1.8),
        3.25,
        1.1,
        0.85,
        0.1,
        C(236, 190, 51),
        4,
      );
    }
    // Side streets form visible intersections; they are not shortcut routes.
    for (const side of [-1, 1])
      box(
        road,
        d,
        side * (track.halfWidth + 12),
        -0.15,
        24,
        0.1,
        6,
        C(63, 69, 75),
        1,
      );
  }
  for (const c of chunks) {
    c.road.done();
    c.deco.done();
  }
  return {
    track,
    terrain,
    chunks,
    dispose() {
      for (const mesh of owned) mesh.dispose();
    },
  };
}
