import { getTrack } from "./tracks.js";
const random = (seed) => {
  let n = seed >>> 0;
  return () => {
    n = (Math.imul(1664525, n) + 1013904223) >>> 0;
    return n / 4294967296;
  };
};
export function createObstacles(courseId, seed = 12345) {
  const t = getTrack(courseId),
    rng = random(seed + 17),
    fractions =
      t.difficulty === 1
        ? [0.3, 0.66]
        : t.theme === "city"
          ? [0.3, 0.4, 0.66, 0.94]
          : [0.27, 0.37, 0.62, 0.89],
    types = ["tyre", "rock", "crate", "barrier"],
    out = [];
  for (let lap = 0; lap < 2; lap++)
    fractions.forEach((f, i) => {
      const type = types[(i + lap) % 4],
        radius = type === "barrier" ? 1.1 : type === "rock" ? 0.85 : 0.65;
      out.push({
        id: `${courseId}-${lap}-${i}`,
        type,
        distance: t.length * (lap + f),
        offset: (i % 2 ? 1 : -1) * (t.halfWidth * 0.52 + rng() * 0.3),
        radius,
        severity: type === "rock" ? 1.15 : 0.95,
        hit: false,
      });
    });
  return out;
}
export function seededRandom(seed) {
  return random(seed);
}
