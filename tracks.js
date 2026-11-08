// Closed Catmull–Rom routes, sampled by arc length. Track settings are data only.
const DATA = [
  {
    id: "C01",
    name: "はじめて サーキット",
    label: "初級サーキット",
    difficulty: 1,
    length: 1400,
    halfWidth: 9.7,
    theme: "circuit",
    color: "#6bcd95",
    icon: "🏁",
    points: [
      [0, 0, 0],
      [0, 260, 0],
      [110, 350, 0],
      [260, 300, 0],
      [300, 130, 0],
      [230, 0, 0],
      [100, -60, 0],
    ],
    tunnel: null,
    crossings: [],
  },
  {
    id: "C02",
    name: "マウンテン",
    label: "マウンテンコース",
    difficulty: 2,
    length: 1650,
    halfWidth: 7.5,
    theme: "mountain",
    color: "#85bfde",
    icon: "⛰",
    points: [
      [0, 0, 0],
      [0, 300, 20],
      [-160, 360, 45],
      [-300, 280, 55],
      [-300, 130, 40],
      [-220, 100, 32],
      [-160, 170, 25],
      [-210, 250, 33],
      [-120, 270, 24],
      [-80, 160, 10],
      [-100, -20, 0],
    ],
    tunnel: [0.13, 0.21],
    crossings: [],
  },
  {
    id: "C03",
    name: "シティ",
    label: "シティコース",
    difficulty: 2,
    length: 1500,
    halfWidth: 8.5,
    theme: "city",
    color: "#f5b77d",
    icon: "🏙",
    points: [
      [0, 0, 0],
      [0, 250, 0],
      [-100, 300, 0],
      [-160, 240, 0],
      [-230, 240, 0],
      [-260, 150, 0],
      [-190, 110, 0],
      [-200, 30, 0],
      [-310, -10, 0],
      [-250, -130, 0],
      [-60, -130, 0],
      [50, -60, 0],
    ],
    tunnel: null,
    crossings: [0.23, 0.56, 0.84],
  },
  {
    id: "C04",
    name: "グランプリ",
    label: "グランプリサーキット",
    difficulty: 3,
    length: 1850,
    halfWidth: 8,
    theme: "grandprix",
    color: "#de9dd7",
    icon: "🏆",
    points: [
      [0, 0, 0],
      [0, 420, 0],
      [-100, 500, 0],
      [-260, 480, 0],
      [-310, 370, 0],
      [-230, 300, 0],
      [-290, 220, 0],
      [-220, 140, 0],
      [-290, 70, 0],
      [-300, -100, 0],
      [-180, -180, 0],
      [-80, -100, 0],
    ],
    tunnel: null,
    crossings: [],
  },
];
const mod = (x, n) => ((x % n) + n) % n;
const lerp = (a, b, t) => a + (b - a) * t;
const cubic = (a, b, c, d, t) =>
  0.5 *
  (2 * b +
    (-a + c) * t +
    (2 * a - 5 * b + 4 * c - d) * t * t +
    (-a + 3 * b - 3 * c + d) * t * t * t);
function rawPoint(points, u, scale = 1) {
  const n = points.length,
    i = Math.floor(u) % n,
    t = u - Math.floor(u),
    p = [
      points[mod(i - 1, n)],
      points[i],
      points[(i + 1) % n],
      points[(i + 2) % n],
    ];
  const value = (k) =>
    cubic(p[0][k] || 0, p[1][k] || 0, p[2][k] || 0, p[3][k] || 0, t);
  return { x: value(0) * scale, y: value(2), z: value(1) * scale };
}
function geometry(points, scale) {
  const count = points.length * 48,
    list = [];
  let length = 0;
  for (let i = 0; i <= count; i++) {
    const p = rawPoint(points, (i / count) * points.length, scale);
    if (i) {
      const prev = list[i - 1];
      length += Math.hypot(p.x - prev.x, p.y - prev.y, p.z - prev.z);
    }
    list.push({ ...p, d: length });
  }
  return { list, length };
}
function prepare(data) {
  const raw = geometry(data.points, 1),
    built = geometry(data.points, data.length / raw.length);
  const table = built.list.map((p) => ({
    ...p,
    d: (p.d / built.length) * data.length,
  }));
  const xs = table.map((p) => p.x),
    zs = table.map((p) => p.z),
    ys = table.map((p) => p.y);
  return {
    ...data,
    table,
    bounds: {
      minX: Math.min(...xs),
      maxX: Math.max(...xs),
      minZ: Math.min(...zs),
      maxZ: Math.max(...zs),
      minY: Math.min(...ys),
      maxY: Math.max(...ys),
    },
    repairFractions: [0.12, 0.46, 0.79],
    checkpointCount: 8,
  };
}
export const TRACKS = DATA.map(prepare);
export const getTrack = (id) => TRACKS.find((t) => t.id === id) || TRACKS[0];
export function pointAt(track, distance) {
  const d = mod(distance, track.length),
    table = track.table;
  let lo = 0,
    hi = table.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (table[mid].d > d) hi = mid;
    else lo = mid;
  }
  const a = table[lo],
    b = table[hi],
    t = (d - a.d) / (b.d - a.d || 1);
  return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), z: lerp(a.z, b.z, t) };
}
const angle = (x) => Math.atan2(Math.sin(x), Math.cos(x));
export function trackPose(trackOrId, distance, offset = 0) {
  const track = typeof trackOrId === "string" ? getTrack(trackOrId) : trackOrId,
    p = pointAt(track, distance),
    a = pointAt(track, distance - 1),
    b = pointAt(track, distance + 1),
    h = Math.hypot(b.x - a.x, b.z - a.z) || 1;
  const tx = (b.x - a.x) / h,
    tz = (b.z - a.z) / h,
    grade = (b.y - a.y) / h;
  const behind = pointAt(track, distance - 5),
    ahead = pointAt(track, distance + 5);
  const k =
    angle(
      Math.atan2(ahead.x - b.x, ahead.z - b.z) -
        Math.atan2(a.x - behind.x, a.z - behind.z),
    ) / 6;
  return {
    ...p,
    x: p.x - tz * offset,
    z: p.z + tx * offset,
    tx,
    tz,
    yaw: Math.atan2(tx, tz),
    pitch: -Math.atan(grade),
    grade,
    curvature: k,
  };
}
export function distanceAhead(track, from, to) {
  return mod(to - from, track.length);
}
export function mapPoint(track, distance) {
  const p = pointAt(track, distance),
    b = track.bounds,
    w = b.maxX - b.minX,
    h = b.maxZ - b.minZ,
    scale = 80 / Math.max(w, h);
  return {
    x: 50 + (p.x - (b.minX + b.maxX) / 2) * scale,
    y: 50 + (p.z - (b.minZ + b.maxZ) / 2) * scale,
  };
}
export function mapPath(track) {
  return (
    Array.from({ length: 97 }, (_, i) => {
      const p = mapPoint(track, (i / 96) * track.length);
      return `${i ? "L" : "M"}${p.x.toFixed(2)},${p.y.toFixed(2)}`;
    }).join(" ") + " Z"
  );
}
export function cameraPose(
  track,
  distance,
  offset,
  height = 3.45,
  back = 10.5,
) {
  const p = trackPose(track, distance, offset),
    ahead = trackPose(track, distance + 12, offset * 0.35);
  const behind = pointAt(track, distance - back);
  return {
    eye: [
      p.x - p.tx * back,
      Math.max(p.y + height, behind.y + 2),
      p.z - p.tz * back,
    ],
    aim: [
      p.x + p.tx * 16 + (ahead.x - p.x - p.tx * 12) * 0.25,
      p.y + 1.0 + (ahead.y - p.y) * 0.4,
      p.z + p.tz * 16 + (ahead.z - p.z - p.tz * 12) * 0.25,
    ],
  };
}

// Fit a bounding sphere in the narrower field of view, including road edges.
export function overviewCamera(track, aspect, yaw = 0) {
  const b = track.bounds,
    aim = [(b.minX + b.maxX) / 2, (b.minY + b.maxY) / 2, (b.minZ + b.maxZ) / 2];
  const radius =
    Math.hypot(b.maxX - b.minX, b.maxY - b.minY, b.maxZ - b.minZ) / 2 +
    track.halfWidth +
    12;
  const halfFov = Math.atan(
    Math.tan((20 * Math.PI) / 180) * Math.min(1, aspect),
  );
  const distance = (radius / Math.sin(halfFov)) * 1.1,
    r = distance / Math.hypot(1, 0.95);
  return {
    eye: [
      aim[0] + Math.sin(yaw + 0.6) * r,
      aim[1] + r * 0.95,
      aim[2] + Math.cos(yaw + 0.6) * r,
    ],
    aim,
    far: distance + radius * 2 + 50,
  };
}
