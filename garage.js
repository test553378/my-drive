// All options are cosmetic. Every combination uses the same assisted handling.
export const VEHICLES = Object.freeze([
  { name: "NOVA R", label: "スーパーカー", wheelZ: [-1.47, 1.47], roof: 1.24 },
  { name: "AERO S", label: "スポーツカー", wheelZ: [-1.42, 1.43], roof: 1.37 },
]);
export const PART_OPTIONS = Object.freeze({
  tyres: ["スポーツ", "スリック"],
  body: ["スタンダード", "ワイド"],
  aero: ["なし", "ストリート", "レーシング"],
});
export function normalizeParts(parts = {}) {
  const choose = (key, fallback) =>
    Number.isInteger(parts[key]) &&
    parts[key] >= 0 &&
    parts[key] < PART_OPTIONS[key].length
      ? parts[key]
      : fallback;
  return {
    tyres: choose("tyres", 0),
    body: choose("body", 0),
    aero: choose("aero", 1),
  };
}
export function defaultSetup(model = 0) {
  return { model, color: model === 0 ? 0 : 1, parts: normalizeParts() };
}
export function copySetup(setup) {
  return {
    model: setup.model === 1 ? 1 : 0,
    color: Math.max(
      0,
      Math.min(3, Number.isInteger(setup.color) ? setup.color : 0),
    ),
    parts: normalizeParts(setup.parts),
  };
}
export function setupSummary(setup) {
  const s = copySetup(setup);
  return `${VEHICLES[s.model].name} / ${PART_OPTIONS.tyres[s.parts.tyres]} / ${PART_OPTIONS.body[s.parts.body]} / ${PART_OPTIONS.aero[s.parts.aero]}`;
}
