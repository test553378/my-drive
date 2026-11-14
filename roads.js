// Physical roads are independent of lap/ranking progress. All edges are reversible.
import { SERVICE_LAYOUTS } from "./service-layouts.js";
import { vehicle } from "./vehicle-config.js";
import { getTrack, trackPose } from "./tracks.js";
const cache = new Map();
const TAU = Math.PI * 2;
const MERGE_BACK = 30;
export const wrap = (x, n) => ((x % n) + n) % n;
export const angleDelta = (a) => Math.atan2(Math.sin(a), Math.cos(a));
const mix = (a, b, t) => a + (b - a) * t;
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
function curve(points, closed = false) {
  const table = [];
  let length = 0;
  const at = (i) =>
    closed
      ? points[wrap(i, points.length)]
      : points[Math.max(0, Math.min(points.length - 1, i))];
  const count = (points.length - (closed ? 0 : 1)) * 24;
  for (let i = 0; i <= count; i++) {
    const u = (i / count) * (points.length - (closed ? 0 : 1)),
      k = Math.min(Math.floor(u), points.length - 1),
      t = u - k;
    const p = [at(k - 1), at(k), at(k + 1), at(k + 2)],
      v = {};
    for (const c of ["x", "y", "z"])
      v[c] =
        0.5 *
        (2 * p[1][c] +
          (-p[0][c] + p[2][c]) * t +
          (2 * p[0][c] - 5 * p[1][c] + 4 * p[2][c] - p[3][c]) * t * t +
          (-p[0][c] + 3 * p[1][c] - 3 * p[2][c] + p[3][c]) * t * t * t);
    if (i) length += distance(v, table[i - 1]);
    table.push({ ...v, d: length });
  }
  return { table, length };
}
const ease = (t) => {
  t = Math.max(0, Math.min(1, t));
  return t * t * t * (10 + t * (-15 + 6 * t));
};
function tabulate(fn, count = 200) {
  const table = [];
  let length = 0;
  for (let i = 0; i <= count; i++) {
    const p = fn(i / count);
    if (i) length += distance(p, table[i - 1]);
    table.push({ ...p, d: length });
  }
  return { table, length };
}
function bendOf(edge) {
  let bend = 0;
  for (let i = 1; i < edge.table.length - 1; i++) {
    const a = edge.table[i - 1],
      b = edge.table[i],
      c = edge.table[i + 1],
      ab = Math.hypot(b.x - a.x, b.z - a.z),
      bc = Math.hypot(c.x - b.x, c.z - b.z),
      ac = Math.hypot(c.x - a.x, c.z - a.z);
    bend = Math.max(
      bend,
      (2 * Math.abs((b.x - a.x) * (c.z - a.z) - (b.z - a.z) * (c.x - a.x))) /
        (ab * bc * ac || 1e-12),
    );
  }
  return bend;
}
function quintic(a, b, ta, tb, lead, tail) {
  const p = [
    a,
    {
      x: a.x + ta.x * lead,
      y: a.y + (ta.grade || 0) * lead,
      z: a.z + ta.z * lead,
    },
    {
      x: a.x + ta.x * lead * 2,
      y: a.y + (ta.grade || 0) * lead * 2,
      z: a.z + ta.z * lead * 2,
    },
    {
      x: b.x - tb.x * tail * 2,
      y: b.y - (tb.grade || 0) * tail * 2,
      z: b.z - tb.z * tail * 2,
    },
    {
      x: b.x - tb.x * tail,
      y: b.y - (tb.grade || 0) * tail,
      z: b.z - tb.z * tail,
    },
    b,
  ];
  return tabulate((t) => {
    const u = 1 - t,
      w = [
        u ** 5,
        5 * u ** 4 * t,
        10 * u ** 3 * t * t,
        10 * u * u * t ** 3,
        5 * u * t ** 4,
        t ** 5,
      ],
      q = {};
    for (const k of ["x", "y", "z"])
      q[k] = p.reduce((n, p, i) => n + p[k] * w[i], 0);
    return q;
  }, 200);
}
function joinCurve(a, b, ta, tb, clear = () => true) {
  const choices = [];
  for (const lead of [15, 30, 50, 80, 120, 180, 260])
    for (const tail of [15, 30, 50, 80, 120, 180, 260]) {
      const c = quintic(a, b, ta, tb, lead, tail);
      if (bendOf(c) < 1 / 18 && clear(c))
        choices.push({ ...c, controls: { lead, tail } });
    }
  choices.sort((a, b) => a.length - b.length);
  if (!choices.length)
    throw Error("Cannot fit a smooth full-width service road");
  return choices[0];
}
function concatenate(first, second) {
  return {
    length: first.length + second.length,
    controls: second.controls || first.controls,
    table: [
      ...first.table,
      ...second.table.slice(1).map((p) => ({ ...p, d: p.d + first.length })),
    ],
  };
}
function serviceCurves(track, site, hub, merge, fixed) {
  const join = (role, a, b, ta, tb, check) =>
    fixed
      ? quintic(a, b, ta, tb, fixed[role].lead, fixed[role].tail)
      : joinCurve(a, b, ta, tb, check);
  const clear = (c) =>
    c.table
      .filter((_, i) => i % 5 === 0)
      .every(
        (p) =>
          Math.min(
            ...track.table
              .filter((_, i) => i % 6 === 0)
              .map((q) => Math.hypot(p.x - q.x, p.z - q.z)),
          ) >
          track.halfWidth + 2,
      );
  const offset = site.side * (track.halfWidth + 4),
    run = 80,
    returnRun = 60;
  const slip = tabulate((t) => {
    const station = site.gate + run * t,
      p = trackPose(track, station, offset * ease((t * run) / 60));
    return { x: p.x, y: p.y, z: p.z, mainStation: station };
  });
  const q = slip.table.at(-1),
    qp = trackPose(track, site.gate + run, offset);
  const access = concatenate(
    slip,
    join(
      "access",
      q,
      hub,
      { x: qp.tx, z: qp.tz, grade: qp.grade },
      { x: site.hubRight.x, z: site.hubRight.z },
      clear,
    ),
  );
  const rejoin = tabulate((t) => {
    const station = merge.station - returnRun + returnRun * t,
      p = trackPose(track, station, offset * (1 - ease(t)));
    return { x: p.x, y: p.y, z: p.z, mainStation: station };
  });
  const start = rejoin.table[0],
    sp = trackPose(track, merge.station - returnRun, offset);
  const approach = join(
    "exit",
    hub,
    start,
    { x: -site.anchor.tx, z: -site.anchor.tz },
    { x: sp.tx, z: sp.tz, grade: sp.grade },
    clear,
  );
  return {
    access: {
      ...access,
      mouthWidth: track.halfWidth,
      taperLength: slip.length,
      parallelLength: slip.length,
      uvStation: site.gate,
    },
    exit: {
      ...concatenate(approach, rejoin),
      endMouthWidth: track.halfWidth,
      parallelStart: approach.length,
      taperLength: rejoin.length,
      uvStation: merge.station - approach.length - rejoin.length,
    },
  };
}
export function edgeWidth(edge, d) {
  if (edge.mouthWidth)
    return mix(edge.mouthWidth, edge.width, ease(d / edge.taperLength));
  if (edge.endMouthWidth)
    return mix(
      edge.width,
      edge.endMouthWidth,
      ease((d - edge.parallelStart) / edge.taperLength),
    );
  return edge.width;
}
export function roadKind(model) {
  const v = vehicle(model);
  return v.emergency ? (v.kind === "patrol" ? "police" : v.kind) : null;
}
function sample(edge, d) {
  d = edge.closed
    ? wrap(d, edge.length)
    : Math.max(0, Math.min(edge.length, d));
  if (edge.main) return trackPose(edge.track, edge.station + d);
  const table = edge.table;
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
  return {
    x: mix(a.x, b.x, t),
    y: mix(a.y, b.y, t),
    z: mix(a.z, b.z, t),
    ...(Number.isFinite(a.contactStation) && Number.isFinite(b.contactStation)
      ? { contactStation: mix(a.contactStation, b.contactStation, t) }
      : {}),
    ...(Number.isFinite(a.mainStation) && Number.isFinite(b.mainStation)
      ? { mainStation: mix(a.mainStation, b.mainStation, t) }
      : {}),
  };
}
export function edgePose(edge, d, offset = 0, direction = 1) {
  if (edge.main) {
    const p = trackPose(edge.track, edge.station + d, offset * direction);
    return {
      ...p,
      tx: p.tx * direction,
      tz: p.tz * direction,
      yaw: angleDelta(p.yaw + (direction < 0 ? Math.PI : 0)),
      pitch: p.pitch * direction,
      grade: p.grade * direction,
    };
  }
  const p = sample(edge, d),
    a = sample(edge, d - 0.6),
    b = sample(edge, d + 0.6),
    h = Math.hypot(b.x - a.x, b.z - a.z) || 1;
  const tx = ((b.x - a.x) / h) * direction,
    tz = ((b.z - a.z) / h) * direction;
  const behind = sample(edge, d - 3),
    ahead = sample(edge, d + 3);
  const curvature =
    angleDelta(
      Math.atan2(ahead.x - b.x, ahead.z - b.z) -
        Math.atan2(a.x - behind.x, a.z - behind.z),
    ) / 4.8;
  return {
    ...p,
    x: p.x - tz * offset,
    z: p.z + tx * offset,
    tx,
    tz,
    yaw: Math.atan2(tx, tz),
    grade: ((b.y - a.y) / h) * direction,
    pitch: -Math.atan((b.y - a.y) / h) * direction,
    curvature,
  };
}
export function searchServiceSites(track) {
  // Pick outward corridors with clearance from other main-road sections, pits,
  // crossings and tunnels. Three separated junctions are fixed per course.
  const options = [];
  for (let i = 24; i < 123; i++)
    for (const side of [-1, 1]) {
      const gate = (i / 128) * track.length,
        p = trackPose(track, gate),
        r = { x: -p.tz * side, z: p.tx * side };
      if (
        track.repairFractions.some(
          (f) =>
            Math.abs(f * track.length - gate) < 48 ||
            Math.abs(f * track.length - (gate - MERGE_BACK)) < 40,
        )
      )
        continue;
      if (track.crossings.some((f) => Math.abs(f * track.length - gate) < 50))
        continue;
      if (
        track.tunnel &&
        gate > track.tunnel[0] * track.length - 50 &&
        gate < track.tunnel[1] * track.length + 50
      )
        continue;
      const anchor = trackPose(track, gate + 80),
        hubRight = { x: -anchor.tz * side, z: anchor.tx * side },
        hub = {
          x: anchor.x + hubRight.x * 280 + anchor.tx * 80,
          y: p.y,
          z: anchor.z + hubRight.z * 280 + anchor.tz * 80,
        };
      const center = {
        x: hub.x + anchor.tx * 48,
        y: p.y,
        z: hub.z + anchor.tz * 48,
      };
      const clearance =
        Math.min(
          ...track.table
            .filter((_, j) => j % 3 === 0)
            .map((q) => Math.hypot(q.x - center.x, q.z - center.z)),
        ) - 48;
      const corridor = Math.min(
        ...[35, 65, 100].map((o) =>
          Math.min(
            ...track.table
              .filter((q, j) => j % 3 === 0 && Math.abs(q.d - gate) > 70)
              .map((q) => Math.hypot(q.x - p.x - r.x * o, q.z - p.z - r.z * o)),
          ),
        ),
      );
      const merge = trackPose(track, gate - MERGE_BACK);
      if (Math.min(clearance, corridor + 50) < 20) continue;
      if (
        [10, 30, 50, 65, 80].some((d) => {
          const q = trackPose(track, gate + d),
            off = side * (track.halfWidth + 4) * ease(d / 60);
          return (
            1 + q.curvature * off - Math.abs(q.curvature) * track.halfWidth <
            0.35
          );
        })
      )
        continue;
      let paths;
      try {
        paths = serviceCurves(
          track,
          { gate, side, p, r, anchor, hubRight },
          hub,
          { ...merge, station: gate - MERGE_BACK },
        );
      } catch {
        continue;
      }
      const roads = [paths.access, paths.exit].map((e) =>
        e.table.filter((_, i) => i % 5 === 0),
      );
      if (
        roads[0].some(
          (a) =>
            !Number.isFinite(a.mainStation) &&
            Math.hypot(a.x - hub.x, a.z - hub.z) > 20 &&
            roads[1].some(
              (b) =>
                !Number.isFinite(b.mainStation) &&
                Math.hypot(b.x - hub.x, b.z - hub.z) > 20 &&
                Math.hypot(a.x - b.x, a.z - b.z) < 14,
            ),
        )
      )
        continue;
      const ring = Array.from({ length: 40 }, (_, j) => {
        const t = (j / 40) * TAU;
        return {
          x:
            hub.x +
            hubRight.x * 48 * Math.sin(t) +
            anchor.tx * (48 - 48 * Math.cos(t)),
          z:
            hub.z +
            hubRight.z * 48 * Math.sin(t) +
            anchor.tz * (48 - 48 * Math.cos(t)),
        };
      });
      const points = [...roads.flat(), ...ring];
      options.push({
        points,
        paths,
        anchor,
        hubRight,
        hubPose: hub,
        gate,
        side,
        p,
        r,
        center,
        score: Math.min(clearance, corridor + 50),
      });
    }
  const pair = new Map();
  const conflict = (a, b) => {
    const key = a.gate + ":" + a.side + ":" + b.gate + ":" + b.side;
    if (!pair.has(key))
      pair.set(
        key,
        a.points.some((p) =>
          b.points.some((q) => Math.hypot(p.x - q.x, p.z - q.z) < 18),
        ),
      );
    return pair.get(key);
  };
  const pool = options.sort((a, b) => b.score - a.score);
  let chosen = [],
    best = -Infinity;
  for (let i = 0; i < pool.length; i++)
    for (let j = i + 1; j < pool.length; j++)
      for (let k = j + 1; k < pool.length; k++) {
        const list = [pool[i], pool[j], pool[k]];
        if (
          list.some((a, n) =>
            list
              .slice(n + 1)
              .some(
                (b) =>
                  Math.min(
                    Math.abs(a.gate - b.gate),
                    track.length - Math.abs(a.gate - b.gate),
                  ) < 220 ||
                  conflict(a, b) ||
                  Math.hypot(a.center.x - b.center.x, a.center.z - b.center.z) <
                    180,
              ),
          )
        )
          continue;
        const score =
          Math.min(...list.map((o) => o.score)) * 3 +
          list.reduce((n, o) => n + o.score, 0);
        if (score > best) {
          best = score;
          chosen = list;
        }
      }
  if (chosen.length !== 3)
    throw Error(
      "No safe mission road layout " +
        track.id +
        " candidates=" +
        pool.map((x) => Math.round(x.gate)).join(","),
    );

  return chosen.sort((a, b) => a.gate - b.gate);
}
function layoutSite(track, layout) {
  const { gate, side } = layout,
    p = trackPose(track, gate),
    anchor = trackPose(track, gate + 80),
    r = { x: -p.tz * side, z: p.tx * side },
    hubRight = { x: -anchor.tz * side, z: anchor.tx * side };
  const hub = {
      x: anchor.x + hubRight.x * 280 + anchor.tx * 80,
      y: p.y,
      z: anchor.z + hubRight.z * 280 + anchor.tz * 80,
    },
    center = { x: hub.x + anchor.tx * 48, y: p.y, z: hub.z + anchor.tz * 48 };
  const site = { gate, side, p, r, anchor, hubRight, hubPose: hub, center };
  site.paths = serviceCurves(
    track,
    site,
    hub,
    { ...trackPose(track, gate - MERGE_BACK), station: gate - MERGE_BACK },
    layout,
  );
  return site;
}
export function roadGraph(courseId) {
  if (cache.has(courseId)) return cache.get(courseId);
  const track = getTrack(courseId),
    sites = SERVICE_LAYOUTS[track.id].map((layout) =>
      layoutSite(track, layout),
    ),
    nodes = {},
    edges = {};
  const boundaries = [
    0,
    ...sites.flatMap((s) => [s.gate - MERGE_BACK, s.gate]),
  ].sort((a, b) => a - b);
  boundaries.forEach(
    (station, i) =>
      (nodes["n" + i] = {
        id: "n" + i,
        ...trackPose(track, station),
        station,
        ports: [],
      }),
  );
  const add = (e) => {
    edges[e.id] = e;
    nodes[e.from].ports.push({ edge: e.id, direction: 1 });
    nodes[e.to].ports.push({ edge: e.id, direction: -1 });
  };
  boundaries.forEach((station, i) =>
    add({
      id: "main-" + i,
      main: true,
      track,
      station,
      from: "n" + i,
      to: "n" + ((i + 1) % boundaries.length),
      length: (boundaries[i + 1] ?? track.length) - station,
      width: track.halfWidth,
    }),
  );
  sites.forEach((s, i) => {
    s.id = "site-" + i;
    s.index = i;
    s.entry = "n" + boundaries.indexOf(s.gate);
    s.merge = "n" + boundaries.indexOf(s.gate - MERGE_BACK);
    s.hub = "hub-" + i;
    const p = s.p,
      hub = s.hubPose;
    nodes[s.hub] = { id: s.hub, ...hub, ports: [] };
    const paths = s.paths;
    const access = paths.access;
    add({
      id: "access-" + i,
      ...access,
      from: s.entry,
      to: s.hub,
      width: 6,
      site: i,
    });
    const ring = Array.from({ length: 96 }, (_, j) => {
      const angle = (j / 96) * TAU;
      return {
        x:
          hub.x +
          s.hubRight.x * 48 * Math.sin(angle) +
          s.anchor.tx * (48 - 48 * Math.cos(angle)),
        y: hub.y,
        z:
          hub.z +
          s.hubRight.z * 48 * Math.sin(angle) +
          s.anchor.tz * (48 - 48 * Math.cos(angle)),
      };
    });
    add({
      id: "loop-" + i,
      ...curve(ring, true),
      closed: true,
      from: s.hub,
      to: s.hub,
      width: 6,
      site: i,
    });
    add({
      id: "exit-" + i,
      // Explicit endpoint tangents keep the full-width exit free of folded,
      // near-hairpin triangles and align it smoothly with the main road.
      ...paths.exit,
      from: s.hub,
      to: s.merge,
      width: 6,
      site: i,
    });
    s.scene = { edge: "loop-" + i, d: edges["loop-" + i].length * 0.25 };
  });
  // Physical contact is independent of the graph edge: a wide slip can share
  // main-road pavement. Cache nearby stations; never advance the lap ledger here.
  for (const edge of Object.values(edges).filter((e) => !e.main))
    for (const p of edge.table) {
      if (Number.isFinite(p.mainStation)) continue;
      let closest = null,
        best = (track.halfWidth + edge.width + 3) ** 2;
      for (const q of track.table) {
        if (Math.abs(q.y - p.y) > 1) continue;
        const dist = (p.x - q.x) ** 2 + (p.z - q.z) ** 2;
        if (dist < best) {
          best = dist;
          closest = q;
        }
      }
      if (closest) {
        const reference = sites[edge.site].gate;
        p.contactStation =
          reference +
          ((closest.d - reference + track.length * 1.5) % track.length) -
          track.length / 2;
      }
    }
  const hospitals = [0, 2].map((site, i) => ({
    id: "hospital-" + i,
    index: i,
    site,
    edge: "loop-" + site,
    d: edges["loop-" + site].length * 0.69,
    label: i ? "ももの びょういん" : "あおい びょういん",
    color: i ? "#ef8baf" : "#75c7ef",
  }));
  const graph = {
    courseId,
    key: courseId + ":candidates",
    kind: "all",
    sceneSites: sites.map((s) => s.index),
    track,
    nodes,
    edges,
    sites,
    hospitals,
  };
  cache.set(courseId, graph);
  return graph;
}
const raceGraphs = new WeakMap(),
  mainGraphs = new Map();
function mainOnlyGraph(courseId) {
  const track = getTrack(courseId);
  if (!mainGraphs.has(track.id)) {
    const edge = {
      id: "main-0",
      main: true,
      track,
      station: 0,
      from: "n0",
      to: "n0",
      length: track.length,
      width: track.halfWidth,
    };
    mainGraphs.set(track.id, {
      courseId: track.id,
      key: track.id + ":main",
      kind: null,
      track,
      edges: { "main-0": edge },
      nodes: {
        n0: {
          id: "n0",
          ...trackPose(track, 0),
          station: 0,
          ports: [
            { edge: "main-0", direction: 1 },
            { edge: "main-0", direction: -1 },
          ],
        },
      },
      sceneSites: [],
      sites: [],
      hospitals: [],
    });
  }
  return mainGraphs.get(track.id);
}
export function raceRoadGraph(s) {
  const kind = roadKind(s.model),
    valid =
      kind &&
      s.missions?.plan?.length &&
      s.missions.plan.every((p) => p.kind === kind);
  if (!valid) return mainOnlyGraph(s.courseId);
  const base = roadGraph(s.courseId);
  const sceneSites = valid
    ? [...new Set(s.missions.plan.map((p) => p.site))].sort()
    : [];
  const hospitals =
    valid && kind === "ambulance"
      ? [...new Set(s.missions.plan.map((p) => p.hospital))].sort()
      : [];
  const enabled = new Set([
    ...sceneSites,
    ...hospitals.map((i) => base.hospitals[i].site),
  ]);
  const key =
    base.courseId +
    ":" +
    (valid ? kind : "main") +
    ":" +
    sceneSites.join(",") +
    ":" +
    hospitals.join(",");
  if (!raceGraphs.has(base)) raceGraphs.set(base, new Map());
  const cache = raceGraphs.get(base);
  if (cache.has(key)) return cache.get(key);
  const edges = Object.fromEntries(
      Object.values(base.edges)
        .filter((e) => e.main || enabled.has(e.site))
        .map((e) => [e.id, e]),
    ),
    nodeIds = new Set(Object.values(edges).flatMap((e) => [e.from, e.to]));
  const nodes = Object.fromEntries(
    [...nodeIds].map((id) => [
      id,
      {
        ...base.nodes[id],
        ports: base.nodes[id].ports.filter((p) => edges[p.edge]),
      },
    ]),
  );
  const graph = {
    ...base,
    key,
    kind: valid ? kind : null,
    sceneSites,
    nodes,
    edges,
    sites: base.sites.filter((x) => enabled.has(x.index)),
    hospitals: base.hospitals.filter((h) => hospitals.includes(h.index)),
  };
  cache.set(key, graph);
  return graph;
}
export function mainContact(s) {
  const graph = raceRoadGraph(s),
    e = graph.edges[s.road?.edge];
  if (!e) return null;
  if (e.main)
    return {
      station: wrap(e.station + s.road.d, graph.track.length),
      offset: s.offset * s.road.direction,
    };
  const p = edgePose(e, s.road.d, s.offset, s.road.direction);
  let station = p.mainStation ?? p.contactStation;
  if (!Number.isFinite(station)) {
    const hint =
      e.mouthWidth && s.road.d < e.parallelLength + 35
        ? e.uvStation + 80
        : e.endMouthWidth && s.road.d > e.parallelStart - 35
          ? e.uvStation + e.length - 60
          : null;
    if (hint === null) return null;
    let best = Infinity;
    for (let d = hint - 35; d <= hint + 35; d += 2) {
      const q = trackPose(graph.track, d),
        distance = Math.hypot(p.x - q.x, p.z - q.z);
      if (distance < best) {
        best = distance;
        station = d;
      }
    }
  }
  const q = trackPose(graph.track, station),
    offset = -(p.x - q.x) * q.tz + (p.z - q.z) * q.tx;
  return Math.abs(p.y - q.y) < 1 &&
    Math.hypot(p.x - q.x, p.z - q.z) <
      graph.track.halfWidth + vehicle(s.model).width * 0.5
    ? { station: wrap(station, graph.track.length), offset }
    : null;
}

export function playerPose(s) {
  if (!s.road) return trackPose(s.courseId, s.z, s.offset);
  const p = edgePose(
    raceRoadGraph(s).edges[s.road.edge],
    s.road.d,
    s.offset,
    s.road.direction,
  );
  if (s.road.turnTimer > 0) {
    p.yaw = angleDelta(p.yaw + Math.PI * (1 - s.road.turnTimer / 0.65));
    p.tx = Math.sin(p.yaw);
    p.tz = Math.cos(p.yaw);
  }
  return p;
}
export function mainStation(s) {
  const e = raceRoadGraph(s).edges[s.road.edge];
  return e.main
    ? wrap(e.station + s.road.d, getTrack(s.courseId).length)
    : null;
}
export function exits(graph, road) {
  const edge = graph.edges[road.edge],
    node = graph.nodes[road.direction > 0 ? edge.to : edge.from],
    p = edgePose(edge, road.d, 0, road.direction);
  return node.ports
    .filter(
      (port) => !(port.edge === edge.id && port.direction === -road.direction),
    )
    .map((port) => {
      const e = graph.edges[port.edge],
        d =
          port.direction > 0
            ? Math.min(18, e.length)
            : Math.max(0, e.length - 18),
        q = sample(e, d),
        yaw = Math.atan2(q.x - node.x, q.z - node.z);
      return { ...port, angle: angleDelta(yaw - p.yaw) };
    })
    .filter((p) => Math.abs(p.angle) < 2.9);
}
function forkSide(g, r, port) {
  const incoming = g.edges[r.edge],
    out = g.edges[port.edge];
  if (!incoming.main) return 0;
  const site = g.sites.find((s) => s.index === out.site);
  if (!site) return 0;
  if (out.id.startsWith("access-") && r.direction === 1 && port.direction === 1)
    return site.side;
  if (out.id.startsWith("exit-") && r.direction === -1 && port.direction === -1)
    return -site.side;
  return 0;
}
function defaultExit(g, r) {
  const choices = exits(g, r),
    incoming = g.edges[r.edge];
  return (
    choices.find(
      (p) =>
        incoming.main && g.edges[p.edge].main && p.direction === r.direction,
    ) ||
    choices.find(
      (p) =>
        incoming.closed && p.edge === r.edge && p.direction === r.direction,
    ) ||
    choices.sort((a, b) => Math.abs(a.angle) - Math.abs(b.angle))[0]
  );
}
export function selectExit(g, r, steering = 0) {
  const choices = exits(g, r),
    edge = g.edges[r.edge],
    node = r.direction > 0 ? edge.to : edge.from;
  if (r.intent?.node === node) {
    const p = choices.find(
      (p) => p.edge === r.intent.edge && p.direction === r.intent.direction,
    );
    if (p) return p;
  }
  const base = defaultExit(g, r);
  if (!steering) return base;
  const explicit = choices.find((p) => forkSide(g, r, p) === steering);
  if (explicit) return explicit;
  return (
    choices
      .filter((p) => turnFor(g, r, p) === (steering > 0 ? "right" : "left"))
      .sort((a, b) => Math.abs(b.angle) - Math.abs(a.angle))[0] || base
  );
}
export function moveRoad(s, travel, onMainMove = () => {}) {
  const g = raceRoadGraph(s);
  let remaining = travel;
  for (
    let transitions = 0;
    remaining > 1e-8 && transitions < 12;
    transitions++
  ) {
    const r = s.road,
      e = g.edges[r.edge],
      previous = r.d,
      room = r.direction > 0 ? e.length - r.d : r.d,
      amount = Math.min(remaining, Math.max(0, room));
    r.d += amount * r.direction;
    remaining -= amount;
    if (e.main) onMainMove(e, previous, r.d, r.direction);
    if (amount < room - 1e-7) break;
    const old = playerPose(s),
      port = selectExit(g, r, Number(s.steerR) - Number(s.steerL));
    if (!port) {
      s.v = 0;
      break;
    }
    const next = g.edges[port.edge];
    if (r.intent?.node === (r.direction > 0 ? e.to : e.from) || !next.main)
      r.intent = null;
    if (e.main && next.main && r.direction === port.direction) {
      r.edge = port.edge;
      r.d = port.direction > 0 ? 0 : next.length;
      s.onMain = true;
      continue;
    }
    const origin = edgePose(
      next,
      port.direction > 0 ? 0 : next.length,
      0,
      port.direction,
    );
    const dx = old.x - origin.x,
      dz = old.z - origin.z;
    const along = Math.max(0, dx * origin.tx + dz * origin.tz);
    r.edge = port.edge;
    r.direction = port.direction;
    r.d = port.direction > 0 ? along : next.length - along;
    s.offset = Math.max(
      -edgeWidth(next, port.direction > 0 ? 0 : next.length) + 1.5,
      Math.min(
        edgeWidth(next, port.direction > 0 ? 0 : next.length) - 1.5,
        -dx * origin.tz + dz * origin.tx,
      ),
    );
    s.onMain = !!next.main;
    if (s.onMain) r.joinedTravel = 0;
  }
}
export function requestUTurn(s) {
  const m = s.missions?.active;
  if (
    s.phase !== "race" ||
    !m ||
    [
      "DONE",
      "AUTO_STOP",
      "FIRE_ACTION",
      "PATIENT_WAIT",
      "BOARDING",
      "HANDOFF",
      "SUSPECT_STOPPING",
      "SUSPECT_STOPPED",
      "POLICE_CHECK",
      "SUCCESS",
    ].includes(m.stage) ||
    s.road.turnTimer > 0
  )
    return false;
  s.road.intent = null;
  s.road.turnTimer = 0.65;
  s.v = 0;
  s.steerL = s.steerR = false;
  s.steerV = 0;
  return true;
}
export function tickUTurn(s, dt) {
  if (s.road.turnTimer <= 0) return false;
  s.road.turnTimer = Math.max(0, s.road.turnTimer - dt);
  if (!s.road.turnTimer) {
    s.road.direction *= -1;
    s.offset *= -1;
  }
  return true;
}
function continuation(g, id, direction, target, targetDirection) {
  g.paths ||= new Map();
  const key = [id, direction, target, targetDirection].join(":");
  if (g.paths.has(key)) return g.paths.get(key);
  const queue = [{ edge: id, direction, cost: 0, path: [] }],
    seen = new Set();
  let result = null;
  while (queue.length) {
    queue.sort((a, b) => a.cost - b.cost);
    const p = queue.shift(),
      state = p.edge + ":" + p.direction;
    if (seen.has(state)) continue;
    seen.add(state);
    const e = g.edges[p.edge],
      road = {
        edge: e.id,
        d: p.direction > 0 ? e.length : 0,
        direction: p.direction,
      };
    for (const port of exits(g, road)) {
      const edge = g.edges[port.edge],
        path = [...p.path, port];
      if (edge.id === target && port.direction === targetDirection) {
        result = { cost: p.cost, path };
        break;
      }
      queue.push({
        edge: edge.id,
        direction: port.direction,
        cost: p.cost + edge.length,
        path,
      });
    }
    if (result) break;
  }
  g.paths.set(key, result);
  return result;
}
export function turnFor(g, r, port) {
  const base = defaultExit(g, r);
  if (
    !port ||
    !base ||
    (port.edge === base.edge && port.direction === base.direction)
  )
    return "straight";
  const side = forkSide(g, r, port);
  if (side) return side > 0 ? "right" : "left";
  return angleDelta(port.angle - base.angle) < 0 ? "right" : "left";
}
export function navigateRoad(s, target) {
  if (!target || !s.road) return null;
  const g = raceRoadGraph(s),
    r = s.road,
    e = g.edges[r.edge],
    t = g.edges[target.edge];
  if (!e || !t) return null;
  const plans = [];
  for (const direction of [r.direction, -r.direction]) {
    if (
      e.id === t.id &&
      (!target.direction || target.direction === direction)
    ) {
      let d = (target.d - r.d) * direction;
      if (e.closed) d = wrap(d, e.length);
      if (d >= -0.1) plans.push({ cost: Math.max(0, d), direction, path: [] });
    }
    for (const td of [1, -1]) {
      if (target.direction && target.direction !== td) continue;
      const p = continuation(g, e.id, direction, t.id, td);
      if (p)
        plans.push({
          cost:
            (direction > 0 ? e.length - r.d : r.d) +
            p.cost +
            (td > 0 ? target.d : t.length - target.d),
          direction,
          path: p.path,
        });
    }
  }
  plans.sort((a, b) => a.cost - b.cost);
  const best = plans[0];
  if (!best) return null;
  const choices = exits(g, r),
    next =
      best.path[0] ||
      (e.closed ? { edge: e.id, direction: best.direction } : null),
    port =
      next &&
      choices.find(
        (p) => p.edge === next.edge && p.direction === next.direction,
      );
  const uTurn = best.direction !== r.direction;
  let cursor = {
      ...r,
      d: best.direction > 0 ? e.length : 0,
      direction: best.direction,
    },
    distance = best.direction > 0 ? e.length - r.d : r.d,
    upcoming = null;
  if (!uTurn)
    for (const step of best.path) {
      const entry = exits(g, cursor).find(
          (p) => p.edge === step.edge && p.direction === step.direction,
        ),
        turn = turnFor(g, cursor, entry);
      if (turn !== "straight") {
        const before = g.edges[cursor.edge];
        upcoming = {
          node: cursor.direction > 0 ? before.to : before.from,
          edge: step.edge,
          direction: step.direction,
          turn,
          distance,
        };
        break;
      }
      const n = g.edges[step.edge];
      distance += n.length;
      cursor = {
        edge: n.id,
        d: step.direction > 0 ? n.length : 0,
        direction: step.direction,
      };
    }
  return {
    ...best,
    uTurn,
    turn: turnFor(g, r, port),
    remaining: r.direction > 0 ? e.length - r.d : r.d,
    target: edgePose(t, target.d),
    upcoming,
  };
}
export function rememberTurn(s, nav) {
  const r = s.road,
    dir = Number(s.steerR) - Number(s.steerL);
  if (!r) return;
  if (s.steerL && s.steerR) {
    r.intent = null;
    return;
  }
  if (!dir) return;
  if (nav?.upcoming && !nav.uTurn && nav.upcoming.distance < 140) {
    const want = nav.upcoming.turn === "right" ? 1 : -1;
    r.intent = dir === want ? { ...nav.upcoming } : null;
  } else r.intent = null;
}
export function navigationSegments(s, nav, target) {
  if (!nav || !target || !s.road) return [];
  const g = raceRoadGraph(s),
    r = s.road,
    e = g.edges[r.edge];
  if (!e) return [];
  const direction = nav.direction || (nav.uTurn ? -r.direction : r.direction),
    segments = [];
  if (!nav.path.length) {
    const n =
      Number.isFinite(nav.cost) && nav.cost > 0
        ? nav.cost
        : e.closed
          ? e.length
          : Math.max(0, 12 - (r.joinedTravel || 0));
    return [{ edge: e, start: r.d, end: r.d + n * direction }];
  }
  segments.push({ edge: e, start: r.d, end: direction > 0 ? e.length : 0 });
  nav.path.forEach((p, i) => {
    const e = g.edges[p.edge];
    segments.push({
      edge: e,
      start: p.direction > 0 ? 0 : e.length,
      end:
        i === nav.path.length - 1 ? target.d : p.direction > 0 ? e.length : 0,
    });
  });
  return segments;
}
export function graphMap(g) {
  const points = Object.values(g.edges).flatMap((e) =>
    Array.from({ length: 25 }, (_, i) => edgePose(e, (e.length * i) / 24)),
  );
  const xs = points.map((p) => p.x),
    zs = points.map((p) => p.z),
    minX = Math.min(...xs),
    maxX = Math.max(...xs),
    minZ = Math.min(...zs),
    maxZ = Math.max(...zs),
    scale = 88 / Math.max(maxX - minX, maxZ - minZ);
  const project = (p) => ({
    x: 50 + (p.x - (minX + maxX) / 2) * scale,
    y: 50 + (p.z - (minZ + maxZ) / 2) * scale,
  });
  const segment = (e, start = 0, end = e.length) => {
    const count = Math.max(1, Math.ceil(Math.abs(end - start) / 8));
    return Array.from({ length: count + 1 }, (_, i) => {
      const p = project(edgePose(e, start + ((end - start) * i) / count));
      return `${i ? "L" : "M"}${p.x.toFixed(2)},${p.y.toFixed(2)}`;
    }).join(" ");
  };
  const path = (e) => segment(e);
  return {
    project,
    path,
    segment,
    main: Object.values(g.edges)
      .filter((e) => e.main)
      .map(path)
      .join(" "),
    branches: Object.values(g.edges)
      .filter((e) => !e.main)
      .map(path)
      .join(" "),
  };
}
