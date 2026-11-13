import { clearMissionInput, isWorking } from "./missions.js";
import { createMissionUI, missionSnapshot } from "./mission-ui.js";
import { hasPuncture } from "./damage.js";
import { raceRank } from "./race-metrics.js";
import { TRACKS, getTrack, mapPath, mapPoint } from "./tracks.js";
import { vehicle, wheelLayout } from "./vehicle-config.js";
import { createInput, installGameGestures } from "./input.js";
import { VEHICLES, defaultSetup, copySetup, setupSummary } from "./garage.js";
import { createRace, createRivals, advance, activateBoost } from "./driving.js";
import { AI_LEVELS } from "./rival-ai.js";
import { QUALITY, frameStats } from "./graphics-lab/src/quality.js";
import { GameRenderer } from "./render/game-renderer.js";
const D = window.raceDiagnostics;
async function boot() {
  D.event("module-started");
  const $ = (id) => document.getElementById(id),
    canvas = $("world"),
    reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let graphicsReady = false,
    raf = 0,
    frames = 0,
    frameMs = 16.7,
    slowSeconds = 0,
    firstFrame = true,
    garageTab = "vehicle",
    graphics,
    changing = false,
    intervals = [];
  let adaptive = new URLSearchParams(location.search).get("adaptive") !== "off";
  const ai = createRivals();
  const loading = (on) => {
    $("asset-loading").hidden = !on;
    $("start").disabled = on;
  };
  try {
    D.event("context-create");
    graphics = new GameRenderer(canvas, {
      event: (code, detail = "") => D.event(code, detail),
      progress: (name, bytes) => {
        $("asset-loading-text").textContent =
          `くるまと コースを じゅんびしています… ${(bytes / 1000000).toFixed(1)} MB`;
      },
      failure: (code, message) => {
        graphicsReady = false;
        D.failure(code, message);
      },
    });
    D.graphics({
      engine: "Three.js r187",
      webgl: graphics.gl.getParameter(graphics.gl.VERSION),
      actualContext: graphics.gl.getContextAttributes(),
      maxViewport: Array.from(
        graphics.gl.getParameter(graphics.gl.MAX_VIEWPORT_DIMS),
      ),
      maxRenderbuffer: graphics.gl.getParameter(
        graphics.gl.MAX_RENDERBUFFER_SIZE,
      ),
    });
  } catch (e) {
    loading(false);
    D.failure("context-unavailable", e.message);
    return;
  }
  const icon = (label) =>
    `<svg viewBox="0 0 96 36" aria-hidden="true"><path d="M8 24 14 16 31 13 43 5 66 7 77 15 90 19 91 28H8Z"/><circle cx="26" cy="28" r="7"/><circle cx="75" cy="28" r="7"/></svg>`;
  document.querySelector(".models").innerHTML = VEHICLES.map(
    (v, i) =>
      `<button class="vehicle-choice" data-model="${i}" aria-pressed="${i === 0}">${icon(v.label)}<span>${v.label}</span><small>${v.name}</small></button>`,
  ).join("");
  const performanceLabel = document.createElement("p");
  performanceLabel.id = "vehicle-performance";
  performanceLabel.className = "vehicle-performance";
  document.querySelector(".vehicle-group").append(performanceLabel);
  $("course-list").innerHTML = TRACKS.map(
    (t) =>
      `<button class="course-choice" data-course="${t.id}" aria-pressed="${t.id === "C01"}"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="${mapPath(t)}"/></svg><strong>${t.icon} ${t.name}</strong><span>${"★".repeat(t.difficulty)} ・ ${t.length}m</span></button>`,
  ).join("");
  const setups = VEHICLES.map((_, i) => defaultSetup(i));
  const S = createRace(setups[0].color, 0, setups[0].parts);
  const input = createInput(
    S,
    () => S.phase === "race" && !isWorking(S) && !S.road?.turnTimer,
  );
  installGameGestures(document.body);
  let garageYaw = -0.24,
    previewDrag = null,
    lastView = null;
  let screenPosition = { player: [0, 0], laneCenter: [0, 0] };
  const inGarage = () => S.phase === "menu" || S.phase === "finish";
  const canCustomize = () => inGarage() && graphicsReady;
  function refreshGarage() {
    const vehicle = VEHICLES[S.model];
    $("garage-car-name").textContent =
      garageTab === "course" ? getTrack(S.courseId).label : vehicle.name;
    $("garage-car-type").textContent =
      garageTab === "course"
        ? `むずかしさ ${"★".repeat(getTrack(S.courseId).difficulty)}`
        : vehicle.label;
    $("vehicle-performance").textContent =
      `はやさ ${Math.round(vehicle.top * 3.6)} km/h ・ かそく ${"●".repeat(Math.round(vehicle.accel * 3))} ・ まがりやすさ ${"●".repeat(Math.round(vehicle.turn / 2))}`;
    $("siren").hidden = !vehicle.emergency;
    canvas.setAttribute(
      "aria-label",
      inGarage() ? `${vehicle.name}の3Dプレビュー` : "3Dスーパーカーレース",
    );
    for (const button of document.querySelectorAll("[data-model]"))
      button.setAttribute(
        "aria-pressed",
        String(Number(button.dataset.model) === S.model),
      );
    for (const button of document.querySelectorAll("[data-color]")) {
      const selected = Number(button.dataset.color) === S.color;
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    }
    for (const button of document.querySelectorAll("[data-part]"))
      button.setAttribute(
        "aria-pressed",
        String(Number(button.dataset.value) === S.parts[button.dataset.part]),
      );
    $("garage-preview").setAttribute(
      "aria-label",
      `${setupSummary(S)}。左右にドラッグして回転`,
    );
    $("selected-course").textContent =
      `${getTrack(S.courseId).icon} ${getTrack(S.courseId).name} ・ 2しゅう`;
    for (const button of document.querySelectorAll("[data-course]"))
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.course === S.courseId),
      );
    for (const button of document.querySelectorAll("[data-ai]"))
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.ai === S.aiDifficulty),
      );
    document.querySelector(".preview-hint").textContent =
      garageTab === "course"
        ? "↔ ゆびで コースを まわしてみよう"
        : "↔ ゆびで くるまを まわしてみよう";
    graphics.prepare(S, garageTab === "course");
  }
  function rememberSetup() {
    setups[S.model] = copySetup(S);
    refreshGarage();
  }

  D.observe(() => ({
    phase: S.phase,
    elapsed: S.time,
    seed: S.seed,
    ...missionSnapshot(S),
    rank: S.rank,
    distance: Math.round(S.z),
    offset: Number(S.offset.toFixed(2)),
    speed: Number(S.v.toFixed(1)),
    steering: [S.steerL, S.steerR],
    model: VEHICLES[S.model].name,
    courseId: S.courseId,
    aiDifficulty: S.aiDifficulty,
    rivals: ai.map((r) => ({
      distance: r.z,
      speed: r.speed,
      offset: r.l,
      overtaking: r.overtaking,
      penaltyTime: r.penaltyTime,
      flatMask: [...r.flatMask],
    })),
    courseLength: getTrack(S.courseId).length,
    checkpoints: S.checkpointsPassed,
    sceneCourse: graphics.course?.track.id,
    kind: vehicle(S.model).kind,
    wheelCount: wheelLayout(S.model).length,
    siren: S.siren,
    brake: S.brake,
    parts: { ...S.parts },
    screen: screenPosition,
    garage: inGarage(),
    garageYaw: Number(garageYaw.toFixed(2)),
    modelCacheSize: graphics.factory.templates.size,
    color: S.color,
    flatMask: [...S.flatMask],
    flatVisual: [...S.flatVisual],
    repairTimer: S.repairTimer,
    repairProgress: S.repairProgress,
    penaltyTime: S.penaltyTime,
    stopTimer: S.stopTimer,
    fallTimer: S.fallTimer,
    obstaclePreview: S.obstacles.map((o) => ({
      distance: o.distance,
      offset: o.offset,
      type: o.type,
      hit: o.hit,
    })),
    pedestrians: S.pedestrians.map((p) => ({
      distance: p.distance,
      offset: p.offset,
      phase: p.phase,
      hit: p.hit,
    })),
    frames,
    frameMs: Number(frameMs.toFixed(1)),
    ...frameStats(intervals),
    ...graphics.stats(),
  }));
  let audio = null,
    engine = null,
    mute = true;
  let sirenAudio = null;
  function initAudio() {
    if (mute) return;
    try {
      if (!audio) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        audio = new AC();
        const o = audio.createOscillator(),
          f = audio.createBiquadFilter(),
          g = audio.createGain();
        o.type = "sawtooth";
        o.frequency.value = 55;
        f.type = "lowpass";
        f.frequency.value = 150;
        g.gain.value = 0;
        o.connect(f);
        f.connect(g);
        g.connect(audio.destination);
        o.start();
        engine = { o, f, g };
        const sirenOsc = audio.createOscillator(),
          sirenGain = audio.createGain();
        sirenOsc.type = "sine";
        sirenGain.gain.value = 0;
        sirenOsc.connect(sirenGain);
        sirenGain.connect(audio.destination);
        sirenOsc.start();
        sirenAudio = { o: sirenOsc, g: sirenGain };
      }
      audio.resume().catch((e) => D.event("audio-unavailable", e.message));
    } catch (e) {
      D.event("audio-unavailable", e.message);
      mute = true;
      let sirenAudio = null;
      $("sound").textContent = "🔇";
    }
  }
  function beep(hz = 540) {
    if (!audio || mute) return;
    try {
      const o = audio.createOscillator(),
        g = audio.createGain(),
        t = audio.currentTime;
      o.type = "sine";
      o.frequency.value = hz;
      g.gain.setValueAtTime(0.001, t);
      g.gain.exponentialRampToValueAtTime(0.08, t + 0.014);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.19);
      o.connect(g);
      g.connect(audio.destination);
      o.start(t);
      o.stop(t + 0.21);
    } catch (_) {}
  }
  function hiss() {
    if (!audio || mute) return;
    try {
      const length = Math.floor(audio.sampleRate * 0.32),
        buffer = audio.createBuffer(1, length, audio.sampleRate),
        data = buffer.getChannelData(0);
      for (let i = 0; i < length; i++)
        data[i] = (Math.random() * 2 - 1) * (1 - i / length);
      const source = audio.createBufferSource(),
        gain = audio.createGain();
      source.buffer = buffer;
      gain.gain.value = 0.035;
      source.connect(gain);
      gain.connect(audio.destination);
      source.start();
    } catch {}
  }
  function applyAudio() {
    if (!engine) return;
    const alarm =
      !mute && S.siren && vehicle(S.model).emergency && S.phase === "race";
    sirenAudio.g.gain.setTargetAtTime(
      alarm ? 0.025 : 0,
      audio.currentTime,
      0.1,
    );
    sirenAudio.o.frequency.setTargetAtTime(
      650 + 230 * Math.sin(S.time * 4.5),
      audio.currentTime,
      0.08,
    );
    const active = !mute && (S.phase === "race" || S.phase === "countdown");
    engine.o.frequency.setTargetAtTime(
      55 + S.v * 2.7 + (S.boost > 0 ? 35 : 0),
      audio.currentTime,
      0.16,
    );
    engine.f.frequency.setTargetAtTime(150 + S.v * 14, audio.currentTime, 0.12);
    engine.g.gain.setTargetAtTime(active ? 0.019 : 0, audio.currentTime, 0.15);
  }
  const missionUI = createMissionUI(S, {
    clearControls,
    muted: () => mute,
    beep,
    event: (code, detail) => D.event(code, detail),
  });
  function metric() {
    const track = getTrack(S.courseId);
    S.lap = Math.min(
      2,
      1 + (S.ledger ? S.ledger.laps : Math.floor(S.z / track.length)),
    );
    S.rank = raceRank(S, ai);
    $("lap").textContent = `${S.lap} / 2`;
    $("rank").textContent = `${S.rank} / 5`;
    $("time").textContent = (S.time + S.penaltyTime).toFixed(1) + "s";
    $("speed").textContent = String(Math.round(S.v * 3.6)).padStart(3, "0");
    $("progressbar").style.width =
      Math.min(100, (100 * S.z) / (track.length * 2)) + "%";
    $("boostmeter").style.width = S.charge + "%";
    $("mini-map-path").setAttribute("d", mapPath(track));
    $("mini-map-pits").innerHTML = track.repairFractions
      .map((f) => {
        const p = mapPoint(track, f * track.length);
        return `<rect x="${p.x - 2.2}" y="${p.y - 2.2}" width="4.4" height="4.4" fill="#75e8a2"/>`;
      })
      .join("");
    const point = mapPoint(track, S.z);
    $("mini-map-car").setAttribute("cx", point.x);
    $("mini-map-car").setAttribute("cy", point.y);
    $("race-course").textContent = track.label;
    $("boost").disabled =
      S.charge < 60 ||
      S.phase !== "race" ||
      hasPuncture(S) ||
      S.brake ||
      S.repairTimer > 0 ||
      S.stopTimer > 0 ||
      S.fallTimer > 0;
    $("penalty-time").textContent = `+${S.penaltyTime}びょう`;
    const flat = hasPuncture(S);
    $("condition").hidden = !flat && S.repairTimer === 0;
    $("condition-text").textContent =
      S.repairTimer > 0
        ? `🔧 しゅうり ${Math.ceil(S.repairTimer)}`
        : `🛞 パンク ${S.flatMask.filter(Boolean).length}`;
    $("repair-progress").style.width = `${S.repairProgress * 100}%`;
    const warning = S.pedestrians.some(
      (p) => p.phase === "warning" || p.phase === "crossing",
    );
    $("pedestrian-warning").hidden = !warning;
    missionUI.update();
    $("forced-stop").hidden = S.stopTimer <= 0;
    $("forced-stop").textContent =
      `✋ あんぜん かくにん ${Math.ceil(S.stopTimer)}`;
  }
  let toastEnd = 0;
  function toast(msg) {
    $("toast").textContent = msg;
    $("toast").classList.add("show");
    toastEnd = performance.now() + 1250;
  }
  function clearControls() {
    input.clear();
    clearMissionInput(S);
    previewDrag = null;
    for (const id of ["left", "right"]) $(id).classList.remove("is-down");
  }
  function reset() {
    const { color, model, parts } = copySetup(S);
    const courseId = S.courseId,
      difficulty = S.aiDifficulty;
    Object.assign(
      S,
      createRace(
        color,
        model,
        parts,
        courseId,
        Math.floor(Math.random() * 0x7fffffff),
        difficulty,
      ),
      { phase: "countdown" },
    );
    graphics.setCourse(S.courseId);
    document.body.classList.remove("in-garage");
    $("modal").classList.remove("paused");
    canvas.setAttribute("aria-label", "3Dスーパーカーレース");
    ai.splice(
      0,
      ai.length,
      ...createRivals(S.model, S.aiDifficulty, S.courseId),
    );
    $("modal").classList.add("hidden");
    $("countdown").classList.add("visible");
    $("pause").textContent = "Ⅱ";
    metric();
    initAudio();
  }
  function finish() {
    S.phase = "finish";
    document.body.classList.add("in-garage");
    $("modal").classList.remove("paused");
    refreshGarage();
    clearControls();
    $("modal").classList.remove("hidden");
    $("kicker").textContent = "🏁 FINISH";
    $("title").innerHTML = S.heroClear
      ? "🌟 <em>HERO CLEAR!</em>"
      : S.rank === 1
        ? "🏆 <em>WINNER!</em>"
        : "🏁 <em>FINISH!</em>";
    $("subtitle").textContent =
      `${S.heroClear ? "おしごと 2 / 2 ・ 2しゅう たっせい！　" : ""}${S.rank}い / 5だい　 ${(S.time + S.penaltyTime).toFixed(1)}びょう（ペナルティ +${S.penaltyTime}）`;
    $("choose").textContent = "すきな くるまを えらんでね";
    $("start").textContent = "↻ もういちど レース";
    $("instructions").textContent =
      S.penaltyTime > 0
        ? "つぎは ひとに みちを ゆずろう！"
        : "さいごまで はしれたね！";
    beep(770);
  }
  let pausedPhase = "race";
  function pause() {
    if (S.phase === "race" || S.phase === "countdown") {
      pausedPhase = S.phase;
      missionUI.cancelSpeech();
      $("modal").classList.add("paused");
      S.phase = "pause";
      clearControls();
      $("pause").textContent = "▶";
      $("countdown").classList.remove("visible");
      $("modal").classList.remove("hidden");
      $("kicker").textContent = "ひとやすみ";
      $("title").innerHTML = "⏸ <em>おやすみ</em>";
      $("subtitle").textContent = "じゅんびが できたら つづけよう";
      $("choose").textContent = "くるまの いろも かえられるよ！";
      $("start").textContent = "▶ つづきから";
      $("instructions").textContent =
        "◀ ▶ で まがる ／ はなすと そのばを キープ";
    } else if (S.phase === "pause") resume();
    applyAudio();
  }
  function resume() {
    if (!graphicsReady || document.hidden) return;
    S.phase = pausedPhase;
    $("modal").classList.remove("paused");
    clearControls();
    S.prev = 0;
    $("modal").classList.add("hidden");
    $("pause").textContent = "Ⅱ";
    $("countdown").classList.toggle("visible", S.phase === "countdown");
    metric();
    initAudio();
  }
  function update(dt) {
    // Catch up a slow visible frame in small physics steps. Visibility handlers
    // reset the clock, so returning from the background cannot advance the race.
    for (let remaining = dt; remaining > 0; remaining -= 0.05) {
      const event = advance(S, ai, Math.min(0.05, remaining));
      if (event === "contact") {
        toast("だいじょうぶ！ はしろう！");
        beep(230);
      }
      if (event === "recovered") toast("コースに もどったよ！");
      if (event === "bike-recovered") toast("だいじょうぶ！ はしろう！");
      if (event === "puncture") {
        toast("🛞 パンク！ みどりの しゅうりへ");
        hiss();
      }
      if (event === "repair-start") {
        clearControls();
        toast("🔧 しゅうり するよ！");
        beep(540);
      }
      if (event === "repaired") {
        toast("✨ なおったよ！");
        beep(880);
      }
      if (event === "crossing-warning") beep(460);
      if (event === "safe-crossing") {
        toast("👍 あんぜんに とおれたね");
        beep(740);
      }
      if (event === "pedestrian-contact") {
        clearControls();
        toast("✋ とまって あんぜんを かくにん");
        beep(240);
      }
      if (event === "finish") finish();
    }
    if (S.phase === "countdown")
      $("countdown").textContent =
        S.count > 1 ? Math.min(3, Math.ceil(S.count)) : "GO!";
    if (S.phase === "race") $("countdown").classList.remove("visible");
    metric();
  }

  function schedule() {
    if (graphicsReady && !document.hidden && !raf)
      raf = requestAnimationFrame(render);
  }
  function stop() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    S.prev = 0;
  }
  function render(timestamp) {
    raf = 0;
    if (!graphicsReady || document.hidden || graphics.gl.isContextLost())
      return;
    try {
      const rawDt = S.prev ? (timestamp - S.prev) / 1000 : 0,
        dt = Math.min(0.2, rawDt);
      S.prev = timestamp;
      if (rawDt > 0) {
        intervals.push(rawDt * 1000);
        if (intervals.length > 180) intervals.shift();
        frameMs += (Math.min(rawDt * 1000, 1000) - frameMs) * 0.03;
        slowSeconds =
          frameMs > 45
            ? slowSeconds + Math.min(rawDt, 1)
            : Math.max(0, slowSeconds - dt);
      }
      update(S.phase === "countdown" ? Math.min(rawDt, 0.5) : dt);
      applyAudio();
      graphics.draw(S, ai, {
        garage: inGarage(),
        tab: garageTab,
        yaw: garageYaw,
        rect: $("garage-preview").getBoundingClientRect(),
        reduced: reducedMotion,
        dt,
      });
      // A local diagnostic boundary: readPixels must run before the browser
      // presents/discards the non-preserved WebGL drawing buffer.
      missionUI.draw(inGarage() ? [] : graphics.workTargets);
      canvas.dispatchEvent(new Event("race-frame"));
      screenPosition = graphics.screen || screenPosition;
      if ($("toast").classList.contains("show") && timestamp > toastEnd)
        $("toast").classList.remove("show");
      if (firstFrame || frames % 120 === 0) {
        const error = graphics.gl.getError();
        if (error !== graphics.gl.NO_ERROR) throw Error("WebGL error " + error);
        if (firstFrame) {
          firstFrame = false;
          D.event("running", "First PBR frame rendered without WebGL errors.");
        }
      }
      frames++;
      if (adaptive && slowSeconds > 3 && graphics.quality !== "low") {
        slowSeconds = 0;
        void changeQuality(
          graphics.quality === "high" ? "standard" : "low",
          true,
        );
      } else schedule();
    } catch (e) {
      graphicsReady = false;
      stop();
      loading(false);
      D.failure("render-failed", e.message);
    }
  }
  async function changeQuality(name, automatic = false) {
    if (
      !graphicsReady ||
      changing ||
      !QUALITY[name] ||
      name === graphics.quality
    )
      return;
    changing = true;
    graphicsReady = false;
    clearControls();
    stop();
    loading(true);
    try {
      await graphics.setQuality(name, S);
      graphics.prepare(S, garageTab === "course");
      if (automatic) {
        graphics.qualityChanges++;
        D.event("quality-reduced", name);
      }
      for (const b of document.querySelectorAll("[data-quality]"))
        b.setAttribute("aria-pressed", String(b.dataset.quality === name));
      graphicsReady = true;
      firstFrame = true;
      S.prev = 0;
      slowSeconds = 0;
      intervals = [];
      schedule();
    } catch (e) {
      D.failure("quality-load-failed", e.message);
    } finally {
      changing = false;
      loading(false);
    }
  }
  for (const button of document.querySelectorAll("[data-color]"))
    button.addEventListener("click", () => {
      if (!canCustomize()) return;
      S.color = Number(button.dataset.color);
      rememberSetup();
    });
  for (const button of document.querySelectorAll("[data-model]"))
    button.addEventListener("click", () => {
      if (!canCustomize()) return;
      setups[S.model] = copySetup(S);
      const setup = copySetup(setups[Number(button.dataset.model)]);
      S.model = setup.model;
      S.color = setup.color;
      S.parts = setup.parts;
      garageYaw = -0.24;
      refreshGarage();
    });
  for (const button of document.querySelectorAll("[data-part]"))
    button.addEventListener("click", () => {
      if (!canCustomize()) return;
      S.parts[button.dataset.part] = Number(button.dataset.value);
      rememberSetup();
    });
  function setGarageTab(tab) {
    garageTab = tab;
    $("vehicle-options").hidden = tab !== "vehicle";
    $("course-options").hidden = tab !== "course";
    for (const b of document.querySelectorAll("[data-garage-tab]"))
      b.setAttribute("aria-selected", String(b.dataset.garageTab === tab));
    refreshGarage();
  }
  for (const button of document.querySelectorAll("[data-garage-tab]"))
    button.addEventListener("click", () =>
      setGarageTab(button.dataset.garageTab),
    );
  for (const button of document.querySelectorAll("[data-course]"))
    button.addEventListener("click", () => {
      if (!canCustomize()) return;
      S.courseId = button.dataset.course;
      refreshGarage();
    });
  for (const button of document.querySelectorAll("[data-ai]"))
    button.addEventListener("click", () => {
      if (!canCustomize() || !AI_LEVELS[button.dataset.ai]) return;
      S.aiDifficulty = button.dataset.ai;
      refreshGarage();
    });

  const preview = $("garage-preview");
  preview.addEventListener("pointerdown", (e) => {
    if (!canCustomize()) return;
    e.preventDefault();
    previewDrag = { id: e.pointerId, x: e.clientX };
    try {
      preview.setPointerCapture(e.pointerId);
    } catch {}
  });
  preview.addEventListener("pointermove", (e) => {
    if (!previewDrag || e.pointerId !== previewDrag.id) return;
    garageYaw += (e.clientX - previewDrag.x) * 0.009;
    previewDrag.x = e.clientX;
  });
  for (const event of ["pointerup", "pointercancel", "lostpointercapture"])
    preview.addEventListener(event, () => {
      previewDrag = null;
    });
  preview.addEventListener("keydown", (e) => {
    if (!canCustomize()) return;
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      garageYaw += e.key === "ArrowLeft" ? -0.15 : 0.15;
    }
  });
  $("garage-help").addEventListener("click", () => $("help").click());
  $("start").addEventListener("click", () => {
    if (!graphicsReady) return;
    if (S.phase === "pause") resume();
    else reset();
  });
  $("pause").addEventListener("click", pause);
  input.bind($("left"), "steerL");
  input.bind($("right"), "steerR");
  $("pit-guide").addEventListener("click", () => {
    S.pitAssist = true;
    toast("🔧 みどりの しゅうりへ いこう");
  });
  input.bind($("brake"), "brake");
  $("siren").addEventListener("click", () => {
    if (!vehicle(S.model).emergency) return;
    S.siren = !S.siren;
    $("siren").setAttribute("aria-pressed", String(S.siren));
    initAudio();
  });
  $("garage-return").addEventListener("click", () => {
    clearControls();
    S.phase = "menu";
    S.v = 0;
    S.boost = 0;
    S.siren = false;
    S.prev = 0;
    document.body.classList.add("in-garage");
    $("modal").classList.remove("paused");
    $("title").innerHTML = "ぼくの <em>GRAND RACE</em>";
    $("kicker").textContent = "きみだけの マシンを つくろう";
    $("subtitle").textContent = "くるまと パーツを えらんで、サーキットへ！";
    $("start").textContent = "▶ レース スタート！";
    refreshGarage();
    metric();
    applyAudio();
  });
  function boost() {
    if (activateBoost(S)) {
      toast("⚡ ターボ！");
      beep(700);
      metric();
    }
  }
  $("boost").addEventListener("pointerdown", (e) => {
    e.preventDefault();
    boost();
  });
  $("sound").addEventListener("click", () => {
    mute = !mute;
    if (mute) missionUI.cancelSpeech();
    $("sound").textContent = mute ? "🔇" : "🔊";
    initAudio();
  });
  addEventListener("keydown", (e) => {
    if (!$("diagnostics").classList.contains("hidden")) return;
    if (
      ["ArrowLeft", "ArrowRight", "ArrowDown", " ", "Escape"].includes(e.key)
    ) {
      // Space/Enter on menu buttons retain normal keyboard activation.
      if (S.phase !== "race" && S.phase !== "countdown" && e.key !== "Escape")
        return;
      e.preventDefault();
      if (e.repeat && e.key === "Escape") return;
      if (S.phase === "race") {
        if (e.key === "ArrowLeft") input.key("steerL", true);
        if (e.key === "ArrowRight") input.key("steerR", true);
        if (e.key === "ArrowDown") input.key("brake", true);
        if (e.key === " ") boost();
      }
      if (e.key === "Escape") pause();
    }
  });
  addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft") input.key("steerL", false);
    if (e.key === "ArrowRight") input.key("steerR", false);
    if (e.key === "ArrowDown") input.key("brake", false);
  });
  function suspend() {
    clearControls();
    if (S.phase === "race" || S.phase === "countdown") pause();
    stop();
    if (audio) audio.suspend().catch(() => {});
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) suspend();
    else {
      S.prev = 0;
      schedule();
    }
  });
  addEventListener("pagehide", suspend);
  addEventListener("pageshow", () => {
    S.prev = 0;
    schedule();
  });
  addEventListener("blur", () => {
    clearControls();
    if (S.phase === "race" || S.phase === "countdown") pause();
  });
  addEventListener("race-support-open", () => {
    clearControls();
    if (S.phase === "race" || S.phase === "countdown") pause();
  });
  addEventListener("race-fatal", () => {
    clearControls();
    if (S.phase === "race" || S.phase === "countdown") pause();
    stop();
  });

  for (const button of document.querySelectorAll("[data-quality]")) {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.quality === graphics.quality),
    );
    button.addEventListener("click", () =>
      changeQuality(button.dataset.quality),
    );
  }
  $("auto-quality").checked = adaptive;
  $("auto-quality").addEventListener("change", () => {
    adaptive = $("auto-quality").checked;
    slowSeconds = 0;
  });
  $("loading-help").addEventListener("click", () => $("help").click());
  canvas.addEventListener("webglcontextcreationerror", (e) =>
    D.event("context-create-error", e.statusMessage || "No status message"),
  );
  canvas.addEventListener("webglcontextlost", (e) => {
    e.preventDefault();
    graphicsReady = false;
    graphics.lose();
    suspend();
    loading(false);
    D.failure(
      "context-lost",
      "WebGL context lost; GPU resources released during the lost generation. Waiting for restoration.",
    );
  });
  canvas.addEventListener("webglcontextrestored", async () => {
    try {
      D.event("context-restoring");
      await graphics.restore();
      graphicsReady = true;
      firstFrame = true;
      $("unsupported").classList.remove("visible");
      S.prev = 0;
      D.event(
        "context-restored",
        "PBR resources restored; race stays paused until a tap.",
      );
      schedule();
    } catch (e) {
      D.failure("context-restore-failed", e.message);
    }
  });
  loading(true);
  try {
    await graphics.init(S);
    graphicsReady = true;
    metric();
    refreshGarage();
    loading(false);
    schedule();
  } catch (e) {
    loading(false);
    D.failure(
      graphics.shaderStage || "asset-or-scene-failed",
      graphics.shaderError || e.message,
    );
    return;
  }
  if ("serviceWorker" in navigator && window.isSecureContext)
    navigator.serviceWorker
      .register("./service-worker.js")
      .catch((e) => D.event("offline-unavailable", e.message));
}
boot().catch((e) => D.failure("startup-failed", e.message));
