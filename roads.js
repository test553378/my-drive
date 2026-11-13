// Physical roads are independent of lap/ranking progress. All edges are reversible.
import { getTrack, trackPose } from "./tracks.js";
const cache = new Map();
const TAU = Math.PI * 2;
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
function bezier(a, b, c, d) {
  const table = [];
  let length = 0;
  for (let i = 0; i <= 160; i++) {
    const t = i / 160,
      u = 1 - t,
      p = {};
    for (const k of ["x", "y", "z"])
      p[k] =
        u * u * u * a[k] +
        3 * u * u * t * b[k] +
        3 * u * t * t * c[k] +
        t * t * t * d[k];
    if (i) length += distance(p, table[i - 1]);
    table.push({ ...p, d: length });
  }
  return { table, length };
}
function mergeCurve(hub, local, p, m) {
  const candidates = [];
  for (const back of [80, 120, 180])
    for (const lead of [60, 100, 160, 240, 360]) {
      const edge = bezier(
        hub,
        local(150, -back),
        { x: m.x - m.tx * lead, y: m.y - m.grade * lead, z: m.z - m.tz * lead },
        m,
      );
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
          (2 *
            Math.abs((b.x - a.x) * (c.z - a.z) - (b.z - a.z) * (c.x - a.x))) /
            (ab * bc * ac || 1e-12),
        );
      }
      if (bend < 1 / 14) candidates.push(edge);
    }
  candidates.sort((a, b) => a.length - b.length);
  if (!candidates.length)
    throw Error("No full-width service merge fits " + p.x + "," + p.z);
  return candidates[0];
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
  return { x: mix(a.x, b.x, t), y: mix(a.y, b.y, t), z: mix(a.z, b.z, t) };
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
function chooseSites(track) {
  // Pick outward corridors with clearance from other main-road sections, pits,
  // crossings and tunnels. Three separated junctions are fixed per course.
  const options = [];
  for (let i = 24; i < (track.id === "C02" ? 121 : 110); i++)
    for (const side of [-1, 1]) {
      const gate = (i / 128) * track.length,
        p = trackPose(track, gate),
        r = { x: -p.tz * side, z: p.tx * side };
      if (
        track.repairFractions.some(
          (f) =>
            Math.abs(f * track.length - gate) < 48 ||
            Math.abs(f * track.length - (gate - 70)) < 40,
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
      const center = {
        x: p.x + r.x * 150 + p.tx * 48,
        y: p.y,
        z: p.z + r.z * 150 + p.tz * 48,
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
      const merge = trackPose(track, gate - 70),
        hub = { x: p.x + r.x * 150, z: p.z + r.z * 150 };
      if (
        (-(hub.x - merge.x) * merge.tz + (hub.z - merge.z) * merge.tx) * side <
        60
      )
        continue;
      if (Math.min(clearance, corridor + 50) < 20) continue;
      options.push({
        gate,
        side,
        p,
        r,
        center,
        score: Math.min(clearance, corridor + 50),
      });
    }
  const groups = [
    [0.18, 0.4],
    [0.4, 0.63],
    [0.63, track.id === "C02" ? 0.94 : 0.86],
  ].map(([lo, hi]) =>
    options
      .filter((o) => o.gate >= lo * track.length && o.gate < hi * track.length)
      .sort((a, b) => b.score - a.score)
      .slice(0, 18),
  );
  let chosen = [],
    best = -Infinity;
  for (const a of groups[0])
    for (const b of groups[1])
      for (const c of groups[2]) {
        const list = [a, b, c];
        if (
          list.some((p, i) =>
            list
              .slice(i + 1)
              .some(
                (q) =>
                  Math.abs(p.gate - q.gate) < 110 ||
                  Math.hypot(p.center.x - q.center.x, p.center.z - q.center.z) <
                    125,
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
    throw Error("No safe mission road layout: " + track.id);
  return chosen.sort((a, b) => a.gate - b.gate);
}
export function roadGraph(courseId) {
  if (cache.has(courseId)) return cache.get(courseId);
  const track = getTrack(courseId),
    sites = chooseSites(track),
    nodes = {},
    edges = {};
  const boundaries = [0, ...sites.flatMap((s) => [s.gate - 70, s.gate])].sort(
    (a, b) => a - b,
  );
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
    s.merge = "n" + boundaries.indexOf(s.gate - 70);
    s.hub = "hub-" + i;
    const p = s.p,
      r = s.r,
      hub = { x: p.x + r.x * 150, y: p.y, z: p.z + r.z * 150 };
    nodes[s.hub] = { id: s.hub, ...hub, ports: [] };
    const local = (x, z, y = p.y) => ({
      x: p.x + r.x * x + p.tx * z,
      y,
      z: p.z + r.z * x + p.tz * z,
    });
    const access = curve([local(0, 0), local(35, 0), local(100, 0), hub]);
    add({
      id: "access-" + i,
      ...access,
      from: s.entry,
      to: s.hub,
      width: 6,
      site: i,
    });
    const ring = Array.from({ length: 96 }, (_, j) =>
      local(
        150 + 48 * Math.sin((j / 96) * TAU),
        48 - 48 * Math.cos((j / 96) * TAU),
      ),
    );
    add({
      id: "loop-" + i,
      ...curve(ring, true),
      closed: true,
      from: s.hub,
      to: s.hub,
      width: 6,
      site: i,
    });
    const m = nodes[s.merge];
    add({
      id: "exit-" + i,
      // Explicit endpoint tangents keep the full-width exit free of folded,
      // near-hairpin triangles and align it smoothly with the main road.
      ...mergeCurve(hub, local, p, m),
      from: s.hub,
      to: s.merge,
      width: 6,
      site: i,
    });
    s.scene = { edge: "loop-" + i, d: edges["loop-" + i].length * 0.25 };
  });
  const hospitals = [0, 2].map((site, i) => ({
    id: "hospital-" + i,
    site,
    edge: "loop-" + site,
    d: edges["loop-" + site].length * 0.69,
    label: i ? "ももの びょういん" : "あおい びょういん",
    color: i ? "#ef8baf" : "#75c7ef",
  }));
  const graph = { courseId, track, nodes, edges, sites, hospitals };
  cache.set(courseId, graph);
  return graph;
}
export function playerPose(s) {
  if (!s.road) return trackPose(s.courseId, s.z, s.offset);
  const p = edgePose(
    roadGraph(s.courseId).edges[s.road.edge],
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
  const e = roadGraph(s.courseId).edges[s.road.edge];
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
export function selectExit(graph, road, steering = 0) {
  const choices = exits(graph, road).sort(
    (a, b) => Math.abs(a.angle) - Math.abs(b.angle),
  );
  const base = choices[0]?.angle || 0;
  const turning = choices
    .filter((p) =>
      steering > 0
        ? angleDelta(p.angle - base) < -0.03
        : angleDelta(p.angle - base) > 0.03,
    )
    .sort(
      (a, b) =>
        Math.abs(angleDelta(b.angle - base)) -
        Math.abs(angleDelta(a.angle - base)),
    );
  return steering && turning.length ? turning[0] : choices[0];
}
export function moveRoad(s, travel, onMainMove = () => {}) {
  const g = roadGraph(s.courseId);
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
      -next.width + 1.5,
      Math.min(next.width - 1.5, -dx * origin.tz + dz * origin.tx),
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
function shortest(g, start, end) {
  const queue = [{ node: start, cost: 0, path: [] }],
    seen = new Set();
  while (queue.length) {
    queue.sort((a, b) => a.cost - b.cost);
    const p = queue.shift();
    if (seen.has(p.node)) continue;
    if (p.node === end) return p;
    seen.add(p.node);
    for (const port of g.nodes[p.node].ports) {
      const e = g.edges[port.edge];
      if (e.from === e.to) continue;
      queue.push({
        node: port.direction > 0 ? e.to : e.from,
        cost: p.cost + e.length,
        path: [...p.path, port],
      });
    }
  }
  return null;
}
export function navigateRoad(s, target) {
  if (!target || !s.road) return null;
  const g = roadGraph(s.courseId),
    r = s.road,
    e = g.edges[r.edge],
    t = g.edges[target.edge];
  const plans = [];
  for (const direction of [r.direction, -r.direction]) {
    if (
      e.id === t.id &&
      (!target.direction || target.direction === direction)
    ) {
      let delta = (target.d - r.d) * direction;
      if (e.closed) delta = wrap(delta, e.length);
      if (delta >= -0.1)
        plans.push({
          cost: Math.max(0, delta),
          direction,
          path: [],
          arrival: true,
        });
    }
    const node = direction > 0 ? e.to : e.from,
      remaining = direction > 0 ? e.length - r.d : r.d;
    for (const endDirection of [1, -1]) {
      if (target.direction && target.direction !== endDirection) continue;
      const dest = endDirection > 0 ? t.from : t.to,
        p = shortest(g, node, dest);
      if (p)
        plans.push({
          cost:
            remaining +
            p.cost +
            (endDirection > 0 ? target.d : t.length - target.d),
          direction,
          path: [...p.path, { edge: t.id, direction: endDirection }],
          arrival: false,
        });
    }
  }
  plans.sort((a, b) => a.cost - b.cost);
  const best = plans[0];
  if (!best) return null;
  const next =
      best.path[0] ||
      (e.closed ? { edge: e.id, direction: best.direction } : null),
    choices = exits(g, r),
    port =
      next &&
      choices.find(
        (p) => p.edge === next.edge && p.direction === next.direction,
      );
  const base = selectExit(g, r, 0);
  const turn =
    port &&
    base &&
    (port.edge !== base.edge || port.direction !== base.direction)
      ? angleDelta(port.angle - base.angle) < 0
        ? "right"
        : "left"
      : "straight";
  return {
    ...best,
    turn,
    remaining: r.direction > 0 ? e.length - r.d : r.d,
    uTurn: best.direction !== r.direction,
    target: edgePose(t, target.d),
  };
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
