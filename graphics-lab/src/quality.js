export const QUALITY = Object.freeze({
  high: {
    label: "高画質",
    pixels: 1450000,
    shadow: 2048,
    model: "concept-high.glb",
    transmission: 0,
    anisotropy: 8,
  },
  standard: {
    label: "標準",
    pixels: 950000,
    shadow: 1024,
    model: "concept-mobile.glb",
    transmission: 0,
    anisotropy: 4,
  },
  low: {
    label: "軽量",
    pixels: 480000,
    shadow: 512,
    model: "concept-mobile.glb",
    transmission: 0,
    anisotropy: 2,
  },
});
export function fitBuffer(width, height, budget, maxDimension = 4096) {
  const scale = Math.min(
    1.6,
    Math.sqrt(budget / (width * height)),
    maxDimension / width,
    maxDimension / height,
  );
  return [
    Math.max(1, Math.floor(width * scale)),
    Math.max(1, Math.floor(height * scale)),
  ];
}
export function frameStats(intervals) {
  const a = intervals.filter((x) => x > 0).sort((a, b) => a - b);
  if (!a.length) return { fps: 0, p95: 0 };
  const avg = a.reduce((s, x) => s + x, 0) / a.length;
  return {
    fps: Number((1000 / avg).toFixed(1)),
    p95: Number(
      a[Math.min(a.length - 1, Math.floor(a.length * 0.95))].toFixed(1),
    ),
  };
}
