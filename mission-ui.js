import {
  isWorking,
  missionNavigation,
  missionTarget,
  clearMissionInput,
  holdFire,
  interactMission,
} from "./missions.js";
import {
  raceRoadGraph,
  navigationSegments,
  graphMap,
  playerPose,
  edgePose,
  requestUTurn,
} from "./roads.js";
const icons = { fire: "🚒", ambulance: "🚑", police: "🚓" };
const instructions = {
  AUTO_STOP: "✋ あんぜんに とまるよ",
  FIRE_ACTION: "💦 ひを ながおし！ ぜんぶ けそう",
  PATIENT_WAIT: "👋 ひとを タッチして たすけよう",
  BOARDING: "🚑 いっしょに くるまへ のろう",
  HANDOFF: "🏥 びょういんへ あんないするよ",
  SUSPECT_STOPPING: "✋ あんぜんに とまるよ",
  SUSPECT_STOPPED: "🚓 とまった くるまを タッチ",
  POLICE_CHECK: "👮 おまわりさんが かくにんするよ",
  SUCCESS: "🌟 おしごと せいこう！",
  RETURN_TO_TRACK: "🏁 やじるしで ほんせんへ もどろう",
};
export function missionSnapshot(s) {
  const g = raceRoadGraph(s);
  const m = s.missions?.active,
    nav = missionNavigation(s);
  return {
    activeRoads: {
      key: g.key,
      kind: g.kind,
      edges: Object.keys(g.edges),
      sceneSites: g.sceneSites,
      hospitals: g.hospitals.map((h) => h.index),
    },
    road: s.road ? { ...s.road } : null,
    onMain: s.onMain,
    ledger: s.ledger ? { ...s.ledger } : null,
    heroClear: s.heroClear || false,
    mission: s.missions
      ? {
          completed: s.missions.completed.length,
          plan: s.missions.plan.map((p) => ({ ...p })),
          active: m
            ? { ...m, fires: [...m.fires], suspect: { ...m.suspect } }
            : null,
          navigation: nav
            ? {
                uTurn: nav.uTurn,
                turn: nav.turn,
                remaining: nav.remaining,
                cost: nav.cost,
                upcoming: nav.upcoming,
                target: missionTarget(s),
              }
            : null,
        }
      : null,
  };
}
export function createMissionUI(s, { clearControls, muted, beep, event }) {
  const $ = (id) => document.getElementById(id),
    buttons = new Map();
  let wasWorking = false,
    mapKey = "",
    map = null,
    lastNotice = 0,
    lastMissions = null;
  function cancelSpeech() {
    window.speechSynthesis?.cancel();
  }
  function radio(text) {
    beep(650);
    if (muted() || !window.speechSynthesis || !window.SpeechSynthesisUtterance)
      return;
    // Never select a cloud voice. Silent/text fallback also works offline on iPad.
    const voice = speechSynthesis
      .getVoices()
      .find((v) => v.localService && /^ja(?:-|_)/i.test(v.lang));
    if (!voice) return;
    try {
      cancelSpeech();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice;
      utterance.lang = voice.lang;
      utterance.rate = 0.85;
      speechSynthesis.speak(utterance);
    } catch (e) {
      event("radio-unavailable", e.message);
    }
  }
  $("uturn").addEventListener("click", () => {
    if (requestUTurn(s)) {
      clearControls();
      beep(470);
    }
  });
  function update() {
    const ms = s.missions,
      m = ms?.active,
      working = isWorking(s),
      visible = !!ms && s.phase !== "menu" && s.phase !== "finish";
    if (ms !== lastMissions) {
      lastNotice = 0;
      lastMissions = ms;
    }
    if (working && !wasWorking) clearControls();
    wasWorking = working;
    document.body.classList.toggle("mission-working", visible && working);
    $("mission-hud").hidden = !visible;
    $("mission-count").textContent =
      `🌟 おしごと ${ms?.completed.length || 0} / 2`;
    $("uturn").hidden = !visible || !m || working || m.stage === "DONE";
    $("uturn").disabled = s.phase !== "race" || s.road?.turnTimer > 0;
    $("siren").setAttribute("aria-pressed", String(s.siren));
    const nav = missionNavigation(s),
      notice = ms?.notice;
    if (notice && notice.id !== lastNotice && s.phase === "race") {
      lastNotice = notice.id;
      $("radio-message").textContent = `📻 ${notice.text}`;
      radio(notice.text);
    }
    if (!notice)
      $("radio-message").textContent = "🏁 はしりながら おしごと しよう";
    const arrow = nav?.uTurn
      ? "↶"
      : nav?.upcoming?.turn === "left" && nav.upcoming.distance < 160
        ? "⬅"
        : nav?.upcoming?.turn === "right" && nav.upcoming.distance < 160
          ? "➡"
          : "⬆";
    $("mission-arrow").textContent = working
      ? m?.stage === "SUCCESS"
        ? "🌟"
        : icons[m?.kind] || "✋"
      : m
        ? arrow
        : "🏁";
    $("mission-instruction").textContent =
      working || m?.stage === "RETURN_TO_TRACK"
        ? instructions[m.stage] || ""
        : m
          ? `${missionTarget(s)?.label || ""}${nav?.uTurn ? "　ユーターン しよう" : nav?.upcoming?.distance < 160 ? "　" + (nav.upcoming.turn === "right" ? "みぎへ" : "ひだりへ") : ""}`
          : "つぎの おしごとを まとう";
    const key = visible ? raceRoadGraph(s).key : "";
    if (key !== mapKey) {
      mapKey = key;
      map = visible ? graphMap(raceRoadGraph(s)) : null;
    }
    $("mini-map-branches").setAttribute("d", map?.branches || "");
    $("mini-map-heading").style.display = map ? "" : "none";
    $("mini-map-target").style.display = map && m ? "" : "none";
    $("mini-map-hospitals").innerHTML = "";
    $("mini-map-route").setAttribute("d", "");
    if (map) {
      const g = raceRoadGraph(s);
      $("mini-map-path").setAttribute("d", map.main);
      const p = playerPose(s),
        v = map.project(p);
      $("mini-map-car").setAttribute("cx", v.x);
      $("mini-map-car").setAttribute("cy", v.y);
      $("mini-map-heading").setAttribute(
        "transform",
        `translate(${v.x} ${v.y}) rotate(${(Math.atan2(p.tx, -p.tz) * 180) / Math.PI})`,
      );
      $("mini-map-pits").innerHTML = g.track.repairFractions
        .map((f) => {
          const e = Object.values(g.edges).find(
              (e) =>
                e.main &&
                f * g.track.length >= e.station &&
                f * g.track.length < e.station + e.length,
            ),
            v = map.project(edgePose(e, f * g.track.length - e.station));
          return `<rect x="${v.x - 1.5}" y="${v.y - 1.5}" width="3" height="3" fill="#75e8a2"/>`;
        })
        .join("");
      $("mini-map-hospitals").innerHTML = g.hospitals
        .map((h) => {
          const v = map.project(edgePose(g.edges[h.edge], h.d));
          return `<text x="${v.x}" y="${v.y}" fill="${h.color}" font-size="8" text-anchor="middle">H</text>`;
        })
        .join("");
      if (m) {
        const t = missionTarget(s),
          v = map.project(edgePose(g.edges[t.edge], t.d));
        $("mini-map-target").setAttribute("cx", v.x);
        $("mini-map-target").setAttribute("cy", v.y);
        if (nav) {
          const segments = navigationSegments(s, nav, t).map((seg) =>
            map.segment(seg.edge, seg.start, seg.end),
          );
          $("mini-map-route").setAttribute("d", segments.join(" "));
        }
      }
    }
  }
  function draw(targets) {
    const active = new Set();
    for (const t of targets || []) {
      if (!t.visible || s.phase !== "race" || !isWorking(s)) continue;
      active.add(t.id);
      let button = buttons.get(t.id);
      if (!button) {
        button = document.createElement("button");
        button.className = "mission-target";
        button.dataset.target = t.id;
        button.setAttribute("aria-label", t.label);
        button.innerHTML = "<span>👆</span>";
        $("mission-targets").append(button);
        buttons.set(t.id, button);
        button.addEventListener("pointerdown", (e) => {
          e.preventDefault();
          if (t.id.startsWith("fire-")) {
            if (holdFire(s, Number(t.id.slice(5)), e.pointerId)) {
              try {
                button.setPointerCapture(e.pointerId);
              } catch {}
              button.classList.add("holding");
            }
          }
        });
        const release = (e) => {
          clearMissionInput(s, e.pointerId);
          button.classList.remove("holding");
        };
        for (const name of ["pointerup", "pointercancel", "lostpointercapture"])
          button.addEventListener(name, release);
        button.addEventListener("click", () => {
          if (!t.id.startsWith("fire-")) interactMission(s);
        });
        button.addEventListener("keydown", (e) => {
          if (
            t.id.startsWith("fire-") &&
            !e.repeat &&
            (e.key === " " || e.key === "Enter")
          ) {
            e.preventDefault();
            holdFire(s, Number(t.id.slice(5)), "keyboard");
          }
        });
        button.addEventListener("keyup", () => {
          clearMissionInput(s, "keyboard");
          button.classList.remove("holding");
        });
        button.addEventListener("blur", () => clearMissionInput(s));
      }
      button.hidden = false;
      button.style.left = t.x + "px";
      button.style.top = t.y + "px";
      const f = s.missions?.active?.fires[Number(t.id.slice(5))];
      button.style.setProperty(
        "--work-progress",
        t.id.startsWith("fire-") ? `${100 * (1 - f / 2.5)}%` : "0%",
      );
    }
    for (const [id, button] of buttons) {
      if (!active.has(id)) {
        button.hidden = true;
        button.classList.remove("holding");
      }
    }
  }
  return { update, draw, cancelSpeech };
}
