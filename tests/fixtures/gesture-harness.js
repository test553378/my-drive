// Test-only DOM/input harness: real gesture/input/mission UI modules, no GPU.
// Its explicit mission fixture is not a real-driving or native Safari zoom test.
import { createInput, installGameGestures } from "../../input.js";
import { createMissionUI } from "../../mission-ui.js";
import { createRace } from "../../driving.js";
import {
  dispatchMission,
  clearMissionInput,
  isWorking,
  tickMission,
} from "../../missions.js";
const $ = (id) => document.getElementById(id),
  s = createRace(0, 7, {}, "C01", 12345),
  counts = {};
const input = createInput(s, () => s.phase === "race" && !isWorking(s));
for (const [id, field] of [
  ["left", "steerL"],
  ["right", "steerR"],
  ["brake", "brake"],
])
  input.bind($(id), field);
function clear() {
  input.clear();
  clearMissionInput(s);
  document
    .querySelectorAll(".mission-target.holding")
    .forEach((b) => b.classList.remove("holding"));
}
const gestures = installGameGestures($("play-surface"), { onInterrupt: clear });
const ui = createMissionUI(s, {
  clearControls: clear,
  muted: () => true,
  beep: () => {},
  event: () => {},
});
function sync() {
  const menu = s.phase === "menu";
  document.body.classList.toggle("in-garage", menu);
  $("asset-loading").hidden = true;
  $("modal").classList.toggle("hidden", s.phase === "race");
  $("modal").classList.toggle("paused", s.phase === "pause");
  gestures.setActive(
    s.phase === "race" && $("diagnostics").classList.contains("hidden"),
  );
  ui.update();
  ui.draw(
    isWorking(s)
      ? [
          {
            id: "fire-0",
            label: "ひを ながおし",
            x: innerWidth * 0.5,
            y: innerHeight * 0.48,
            visible: true,
          },
        ]
      : [],
  );
}
function mode(phase) {
  clear();
  s.phase = phase;
  sync();
}
for (const id of ["sound", "siren"])
  $(id).addEventListener("click", () => {
    counts[id] = (counts[id] || 0) + 1;
  });
$("start").addEventListener("click", () => mode("race"));
$("pause").addEventListener("click", () =>
  mode(s.phase === "race" ? "pause" : "race"),
);
$("garage-return").addEventListener("click", () => mode("menu"));
window.addEventListener("race-support-open", () => mode("pause"));
window.addEventListener("blur", () =>
  mode(s.phase === "race" ? "pause" : s.phase),
);
window.raceGestureHarness = {
  read: () => ({
    phase: s.phase,
    steering: [s.steerL, s.steerR],
    brake: s.brake,
    fire: s.missions?.active?.fires[0],
    pointer: s.missions?.active?.pointer,
    counts: { ...counts },
    gestures: gestures.snapshot(),
  }),
  mode,
  work() {
    s.phase = "race";
    s.missions.active = null;
    dispatchMission(s, s.missions.plan[0].dispatchAt);
    Object.assign(s.missions.active, {
      stage: "FIRE_ACTION",
      fires: [2.5],
      holding: -1,
      pointer: null,
    });
    sync();
  },
};
window.raceDiagnostics.observe(() => ({
  harness: true,
  ...window.raceGestureHarness.read(),
}));
window.raceDiagnostics.event(
  "running",
  "Test-only input harness, no WebGL rendering.",
);
setInterval(() => {
  if (s.phase === "race") tickMission(s, 0.05);
  sync();
}, 50);
sync();
