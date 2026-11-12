import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { HDRLoader } from "three/addons/loaders/HDRLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import { createInput, installGameGestures } from "../../input.js";
import { trackPose, cameraPose } from "../../tracks.js";
import { buildCircuit, track } from "./scene.js";
import { QUALITY, fitBuffer, frameStats } from "./quality.js";
import { mergeRigidParts } from "./merge-parts.js";
import { extractWheelRig } from "./wheel-rig.js";
const $ = (id) => document.getElementById(id),
  canvas = $("scene");
const params = new URLSearchParams(location.search),
  qualityName = QUALITY[params.get("quality")]
    ? params.get("quality")
    : "standard";
const state = {
  version: "graphics-p2.2",
  ready: false,
  mode: "inspect",
  paused: false,
  quality: qualityName,
  distance: 150,
  offset: 0,
  speed: 0,
  steerL: false,
  steerR: false,
  brake: false,
  frame: 0,
  events: [],
  assetBytes: 0,
  qualityChanges: 0,
};
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
let needsGraphicsCheck = true;
let renderer,
  scene,
  camera,
  orbit,
  car,
  body,
  sun,
  manifest,
  roadTextures = {},
  wheelUnits = [],
  raf = 0,
  previous = 0,
  changing = false,
  intervals = [],
  slow = 0,
  auto = params.get("adaptive") !== "off",
  view = "front",
  environmentSource,
  environmentTarget;
const resources = new Map(),
  loaded = new Map();
function event(code, detail = "") {
  state.events.push({ time: new Date().toISOString(), code, detail });
  state.events = state.events.slice(-80);
}
function read() {
  const stats = frameStats(intervals);
  return {
    ...state,
    events: [...state.events],
    fps: stats.fps,
    p95FrameMs: stats.p95,
    buffer: renderer
      ? [renderer.domElement.width, renderer.domElement.height]
      : null,
    carTriangles: manifest?.models.find(
      (m) => m.name === QUALITY[state.quality].model,
    )?.triangles,
    render: renderer
      ? {
          calls: renderer.info.render.calls,
          triangles: renderer.info.render.triangles,
          geometries: renderer.info.memory.geometries,
          textures: renderer.info.memory.textures,
        }
      : null,
    engine: `Three.js r${THREE.REVISION} / WebGL 2`,
    wheels: wheelUnits.map((w) => ({
      front: w.front,
      angle: w.spin.rotation.x,
      steering: w.outer.rotation.y,
    })),
    camera: camera ? { eye: camera.position.toArray(), fov: camera.fov } : null,
    screen: screenPosition(),
  };
}
window.graphicsStudy = Object.freeze({ read });
function screenPosition() {
  if (!car || !camera) return null;
  const p = trackPose(track, state.distance),
    pos = new THREE.Vector3(car.position.x, 0.65, car.position.z).project(
      camera,
    ),
    center = new THREE.Vector3(p.x, 0.65, p.z).project(camera);
  return { player: [pos.x, pos.y], center: [center.x, center.y] };
}
function fail(code, error) {
  event(code, String(error?.message || error));
  state.ready = false;
  state.paused = true;
  stop();
  $("loading").hidden = true;
  $("failure").hidden = false;
  $("error-label").textContent = `${code}: ${error?.message || error}`;
  showStats();
}
function showStats() {
  const d = read();
  $("resolution-stat").textContent =
    `${QUALITY[state.quality].label} / ${d.buffer?.join(" × ") || "—"}`;
  $("fps-stat").textContent =
    d.fps > 0
      ? `${d.fps} fps / ${d.p95FrameMs} ms`
      : "計測中（数フレームお待ちください）";
  $("render-stat").textContent = d.render
    ? `${d.render.triangles.toLocaleString()} / ${d.render.calls}`
    : "—";
  $("bytes-stat").textContent =
    `${(state.assetBytes / 1000000).toFixed(2)} MB（素材の実体サイズ）`;
  $("diagnostic-log").textContent = JSON.stringify(d, null, 2);
}
function clear() {
  input.clear();
}
const input = createInput(
  state,
  () => state.ready && state.mode === "drive" && !state.paused && !changing,
);
input.bind($("left"), "steerL");
input.bind($("right"), "steerR");
input.bind($("brake"), "brake");
installGameGestures(document.body);
function progress(label) {
  const files = [
      "asphalt-color.jpg",
      "asphalt-normal.jpg",
      "asphalt-rough.jpg",
      "sunset.hdr",
      QUALITY[state.quality].model,
    ],
    total = files.reduce((n, f) => n + (manifest?.files[f]?.bytes || 1), 0),
    amount = files.reduce((n, f) => n + (loaded.get(f) || 0), 0);
  $("progress").value = Math.min(100, (amount / total) * 100);
  $("load-label").textContent =
    `${label} · ${(amount / 1000000).toFixed(1)} / ${(total / 1000000).toFixed(1)} MB`;
}
async function fetchAsset(name) {
  if (resources.has(name)) return resources.get(name);
  const job = (async () => {
    const abort = new AbortController(),
      timer = setTimeout(() => abort.abort(), 45000);
    try {
      const response = await fetch(new URL(`assets/${name}`, location.href), {
        signal: abort.signal,
      });
      if (!response.ok) throw Error(`${name}: HTTP ${response.status}`);
      const reader = response.body.getReader(),
        chunks = [];
      let n = 0;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        n += value.length;
        loaded.set(name, n);
        progress(
          name.endsWith(".glb")
            ? "車を読み込んでいます"
            : name.endsWith(".hdr")
              ? "光を準備しています"
              : "サーキットを読み込んでいます",
        );
      }
      const data = new Uint8Array(n);
      let offset = 0;
      for (const chunk of chunks) {
        data.set(chunk, offset);
        offset += chunk.length;
      }
      state.assetBytes += n;
      return data.buffer;
    } catch (e) {
      resources.delete(name);
      throw Error(`${name}: ${e.message}`);
    } finally {
      clearTimeout(timer);
    }
  })();
  resources.set(name, job);
  return job;
}
async function texture(name, color = false) {
  const data = await fetchAsset(name),
    url = URL.createObjectURL(new Blob([data], { type: "image/jpeg" }));
  try {
    const t = await new THREE.TextureLoader().loadAsync(url);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.colorSpace = color ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.anisotropy = QUALITY[state.quality].anisotropy;
    return t;
  } finally {
    URL.revokeObjectURL(url);
  }
}
function disposeTree(root) {
  const geometries = new Set(),
    materials = new Set(),
    textures = new Set();
  root.traverse((o) => {
    if (o.isInstancedMesh) o.dispose();
    if (o.geometry) geometries.add(o.geometry);
    for (const m of Array.isArray(o.material) ? o.material : [o.material])
      if (m) {
        materials.add(m);
        for (const value of Object.values(m))
          if (value?.isTexture) textures.add(value);
      }
  });
  geometries.forEach((g) => g.dispose());
  materials.forEach((m) => m.dispose());
  textures.forEach((t) => t.dispose());
}
async function loadCar() {
  const name = QUALITY[state.quality].model,
    buffer = await fetchAsset(name),
    loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  const gltf = await loader.parseAsync(buffer, "");
  const model = gltf.scene;
  const { root: next, units } = extractWheelRig(model);
  for (const unit of units) mergeRigidParts(unit.spin);
  mergeRigidParts(model);
  model.position.y = 0.004;
  next.add(model);
  next.traverse((o) => {
    if (!o.isMesh) return;
    o.castShadow = true;
    o.receiveShadow = false;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of mats) {
      if (m.name?.startsWith("Paint 1")) {
        m.clearcoat = 1;
        m.clearcoatRoughness = 0.18;
        m.normalScale?.set(0.1, 0.1);
      }
      if (m.name === "Glass") {
        m.transmission = QUALITY[state.quality].transmission;
        m.transparent = m.transmission === 0;
        m.opacity = m.transmission === 0 ? 0.35 : 1;
        m.roughness = 0.06;
        m.depthWrite = false;
      }
      m.needsUpdate = true;
    }
  });
  if (car) {
    scene.remove(car);
    disposeTree(car);
  }
  car = next;
  body = model;
  wheelUnits = units;
  scene.add(car);
  updateCar(0);
  event("model-loaded", {
    file: name,
    triangles: manifest.models.find((m) => m.name === name).triangles,
  });
}
function resize() {
  if (!renderer) return;
  const [w, h] = fitBuffer(
    innerWidth,
    innerHeight,
    QUALITY[state.quality].pixels,
    renderer.capabilities.maxTextureSize,
  );
  if (canvas.width !== w || canvas.height !== h) {
    renderer.setSize(w, h, false);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
  }
}
function configure() {
  const q = QUALITY[state.quality];
  renderer.shadowMap.enabled = true;
  sun.shadow.mapSize.set(q.shadow, q.shadow);
  if (sun.shadow.map) {
    sun.shadow.map.dispose();
    sun.shadow.map = null;
  }
  for (const texture of Object.values(roadTextures))
    texture.anisotropy = Math.min(
      q.anisotropy,
      renderer.capabilities.getMaxAnisotropy(),
    );
  for (const b of document.querySelectorAll("[data-quality]"))
    b.setAttribute("aria-pressed", String(b.dataset.quality === state.quality));
  $("quality-label").textContent = q.label;
  resize();
}
async function switchQuality(name, automatic = false) {
  if (changing || !state.ready || name === state.quality) return;
  changing = true;
  clear();
  const previousModel = QUALITY[state.quality].model;
  state.quality = name;
  $("loading").hidden = false;
  progress("画質を変更しています");
  try {
    if (QUALITY[name].model !== previousModel) await loadCar();
    else if (car)
      car.traverse((o) => {
        const m = o.material;
        if (m?.name === "Glass") {
          m.transmission = QUALITY[name].transmission;
          m.transparent = m.transmission === 0;
          m.opacity = m.transmission === 0 ? 0.35 : 1;
          m.needsUpdate = true;
        }
      });
    configure();
    await renderer.compileAsync(scene, camera);
    if (automatic) {
      state.qualityChanges++;
      $("quality-label").textContent += " · 自動調整";
    }
    event("quality-changed", { quality: name, automatic });
    intervals = [];
    slow = 0;
    $("loading").hidden = true;
  } catch (e) {
    fail("quality-load-failed", e);
  } finally {
    changing = false;
    previous = 0;
  }
}
function updateCar(dt) {
  if (!car) return;
  const p = trackPose(track, state.distance, state.offset);
  car.position.set(p.x, p.y, p.z);
  car.rotation.y = p.yaw;
  const direction = Number(state.steerR) - Number(state.steerL);
  const targetRoll = reduced
    ? 0
    : -direction * Math.min(0.018, state.speed * 0.0008);
  body.rotation.z = THREE.MathUtils.damp(body.rotation.z, targetRoll, 8, dt);
  body.rotation.x = THREE.MathUtils.damp(
    body.rotation.x,
    reduced ? 0 : state.brake ? 0.017 : state.speed < 18 ? -0.009 : 0,
    7,
    dt,
  );
  for (const w of wheelUnits) {
    w.spin.rotation.x = (state.distance - 150) / 0.384;
    w.outer.rotation.y = w.front ? -direction * 0.24 : 0;
  }
  sun.target.position.copy(car.position);
  sun.position.copy(car.position).add(new THREE.Vector3(-8, 12, 5));
  sun.target.updateMatrixWorld();
  sun.updateMatrixWorld();
}
function photoCamera(which = "front") {
  if (!car) return;
  const p = trackPose(track, state.distance, state.offset),
    side = which === "front" ? 1 : -1,
    z = which === "front" ? 5.7 : -5.8;
  const local = new THREE.Vector3(side * 5.2, 2.0, z).applyAxisAngle(
    new THREE.Vector3(0, 1, 0),
    p.yaw,
  );
  camera.fov = 42;
  camera.updateProjectionMatrix();
  camera.position.copy(car.position).add(local);
  orbit.target.copy(car.position).add(new THREE.Vector3(0, 0.67, 0));
  orbit.update();
}
function setMode(mode) {
  if (!state.ready || changing) return;
  clear();
  state.mode = mode;
  state.paused = false;
  $("resume").hidden = true;
  orbit.enabled = mode === "inspect";
  document.body.classList.toggle("driving", mode === "drive");
  $("drive-hud").hidden = mode !== "drive";
  $("driving-controls").hidden = mode !== "drive";
  $("inspect").setAttribute("aria-pressed", String(mode === "inspect"));
  $("drive").setAttribute("aria-pressed", String(mode === "drive"));
  $("mode-label").textContent = mode === "drive" ? "走行中" : "車をみる";
  state.speed = 0;
  previous = 0;
  if (mode === "inspect") photoCamera(view);
  else {
    camera.fov = 62;
    camera.updateProjectionMatrix();
    chase(1);
  }
  schedule();
}
function chase(dt) {
  const pose = cameraPose(track, state.distance, state.offset, 3.45, 10.5),
    eye = new THREE.Vector3(...pose.eye);
  camera.position.lerp(eye, 1 - Math.exp(-dt * 5));
  camera.lookAt(...pose.aim);
  if (!reduced) {
    camera.fov = THREE.MathUtils.damp(
      camera.fov,
      62 + state.speed * 0.025,
      3,
      dt,
    );
    camera.updateProjectionMatrix();
  }
}
function pause(reason) {
  state.paused = true;
  clear();
  previous = 0;
  event("paused", reason);
  $("resume").hidden = false;
}
function schedule() {
  if (!raf && state.ready && !document.hidden)
    raf = requestAnimationFrame(render);
}
function stop() {
  if (raf) cancelAnimationFrame(raf);
  raf = 0;
  previous = 0;
}
function render(t) {
  raf = 0;
  if (!state.ready || document.hidden) return;
  try {
    const raw = previous ? (t - previous) / 1000 : 0,
      dt = Math.min(0.1, raw);
    previous = t;
    if (raw > 0) {
      intervals.push(raw * 1000);
      if (intervals.length > 120) intervals.shift();
    }
    if (state.mode === "drive" && !state.paused && !changing) {
      const target = state.brake ? 0 : 22;
      if (state.brake) state.speed = Math.max(0, state.speed - 20 * dt);
      else state.speed = THREE.MathUtils.damp(state.speed, target, 1.2, dt);
      const dir = Number(state.steerR) - Number(state.steerL);
      state.offset = THREE.MathUtils.clamp(
        state.offset + dir * 3.2 * dt * Math.min(1, state.speed / 4),
        -7,
        7,
      );
      state.distance += state.speed * dt;
      updateCar(dt);
      chase(dt);
      $("speed").textContent = Math.round(state.speed * 3.6);
      $("lap-label").textContent =
        `${Math.floor(state.distance / track.length) + 1}周目`;
    } else if (state.mode === "inspect") orbit.update();
    renderer.render(scene, camera);
    state.frame++;
    if (needsGraphicsCheck || state.frame % 120 === 0) {
      const gl = renderer.getContext(),
        error = gl.getError();
      needsGraphicsCheck = false;
      if (error !== gl.NO_ERROR && !gl.isContextLost())
        throw Error(`WebGL error ${error}`);
    }
    if (state.frame % 30 === 0) showStats();
    if (raw > 0)
      slow =
        raw > 0.045 ? slow + Math.min(raw, 2) : Math.max(0, slow - raw * 0.5);
    if (auto && slow > 5 && !changing) {
      const next =
        state.quality === "high"
          ? "standard"
          : state.quality === "standard"
            ? "low"
            : null;
      if (next) switchQuality(next, true);
    }
    schedule();
  } catch (e) {
    fail("render-failed", e);
  }
}
async function boot() {
  try {
    event("context-create");
    const gl = canvas.getContext("webgl2", {
      antialias: true,
      alpha: false,
      powerPreference: "default",
    });
    if (!gl)
      throw Error(
        "WebGL 2 コンテキストを作成できません。iPadOS・Safariを更新し、これまでのゲームと診断結果を比較してください。",
      );
    renderer = new THREE.WebGLRenderer({
      canvas,
      context: gl,
      antialias: true,
    });
    installContextRecovery();
    renderer.setPixelRatio(1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.debug.onShaderError = (g, program, vs, fs) =>
      fail(
        "shader-failed",
        [
          g.getProgramInfoLog(program),
          g.getShaderInfoLog(vs),
          g.getShaderInfoLog(fs),
        ].join("\n"),
      );
    event("context-created", {
      webgl: gl.getParameter(gl.VERSION),
      maxTexture: renderer.capabilities.maxTextureSize,
      fragmentPrecision: renderer.capabilities.precision,
    });
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xada293, 0.0011);
    camera = new THREE.PerspectiveCamera(
      42,
      innerWidth / innerHeight,
      0.1,
      1800,
    );
    orbit = new OrbitControls(camera, canvas);
    orbit.enableDamping = true;
    orbit.dampingFactor = 0.08;
    orbit.maxPolarAngle = Math.PI * 0.48;
    orbit.minDistance = 3.4;
    orbit.maxDistance = 15;
    orbit.enablePan = false;
    sun = new THREE.DirectionalLight(0xffe2ba, 3.0);
    sun.castShadow = true;
    sun.shadow.camera.left = -11;
    sun.shadow.camera.right = 11;
    sun.shadow.camera.top = 11;
    sun.shadow.camera.bottom = -11;
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 45;
    sun.shadow.bias = -0.00008;
    sun.shadow.normalBias = 0.015;
    scene.add(sun, sun.target);
    const response = await fetch("asset-manifest.json");
    if (!response.ok)
      throw Error(`asset-manifest.json: HTTP ${response.status}`);
    manifest = await response.json();
    progress("素材を準備しています");
    const [color, normal, rough, hdrBytes] = await Promise.all([
      texture("asphalt-color.jpg", true),
      texture("asphalt-normal.jpg"),
      texture("asphalt-rough.jpg"),
      fetchAsset("sunset.hdr"),
    ]);
    roadTextures = { color, normal, rough };
    const hdrData = new HDRLoader().parse(hdrBytes),
      hdr = new THREE.DataTexture(
        hdrData.data,
        hdrData.width,
        hdrData.height,
        hdrData.format,
        hdrData.type,
      );
    hdr.flipY = true;
    hdr.magFilter = THREE.LinearFilter;
    hdr.minFilter = THREE.LinearFilter;
    hdr.needsUpdate = true;
    hdr.mapping = THREE.EquirectangularReflectionMapping;
    hdr.colorSpace = THREE.LinearSRGBColorSpace;
    const pmrem = new THREE.PMREMGenerator(renderer),
      filtered = pmrem.fromEquirectangular(hdr);
    pmrem.dispose();
    environmentSource = hdr;
    environmentTarget = filtered;
    scene.environment = filtered.texture;
    scene.environmentIntensity = 0.8;
    scene.background = hdr;
    scene.backgroundIntensity = 0.9;
    scene.backgroundRotation.y = 0.55;
    scene.environmentRotation.y = 0.55;
    const circuit = buildCircuit(roadTextures);
    scene.add(circuit.root);
    await loadCar();
    configure();
    photoCamera(view);
    progress("3D表示を準備しています");
    await renderer.compileAsync(scene, camera);
    if (!state.events.some((e) => e.code === "shader-failed")) {
      state.ready = true;
      $("loading").hidden = true;
      event("ready");
      schedule();
    }
  } catch (e) {
    fail(renderer ? "asset-or-scene-failed" : "context-unavailable", e);
  }
}
for (const b of document.querySelectorAll("[data-quality]"))
  b.addEventListener("click", () => switchQuality(b.dataset.quality));
$("inspect").addEventListener("click", () => setMode("inspect"));
$("drive").addEventListener("click", () => setMode("drive"));
for (const b of document.querySelectorAll("[data-camera]"))
  b.addEventListener("click", () => {
    view = b.dataset.camera;
    setMode("inspect");
  });
$("retry").addEventListener("click", () => location.reload());
$("failure-details").addEventListener("click", () => $("details").click());
$("loading-details").addEventListener("click", () => $("details").click());
$("resume").addEventListener("click", () => {
  if (!state.ready) return;
  state.paused = false;
  $("resume").hidden = true;
  previous = 0;
  schedule();
});
$("adaptive").checked = auto;
$("adaptive").addEventListener("change", () => {
  auto = $("adaptive").checked;
  slow = 0;
});
$("details").addEventListener("click", () => {
  if (state.mode === "drive") pause("diagnostics");
  showStats();
  $("measure").showModal();
});
$("compare").addEventListener("click", () => {
  if (state.mode === "drive") pause("comparison");
  for (const i of document.querySelectorAll("[data-src]"))
    if (!i.src) i.src = i.dataset.src;
  $("comparison").showModal();
});
for (const b of document.querySelectorAll("[data-close]"))
  b.addEventListener("click", () => $(b.dataset.close).close());
$("save-report").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(read(), null, 2)], {
      type: "application/json",
    }),
    url = URL.createObjectURL(blob),
    a = document.createElement("a");
  a.href = url;
  a.download = "grand-race-graphics-diagnostic.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
window.addEventListener("resize", resize);
window.addEventListener("blur", () => {
  if (state.ready && state.mode === "drive") pause("blur");
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    pause("hidden");
    stop();
  } else schedule();
});
window.addEventListener("keydown", (e) => {
  if (document.querySelector("dialog[open]")) return;
  const field = {
    ArrowLeft: "steerL",
    ArrowRight: "steerR",
    ArrowDown: "brake",
  }[e.code];
  if (field && state.mode === "drive") {
    e.preventDefault();
    input.key(field, true);
  }
});
window.addEventListener("keyup", (e) => {
  const field = {
    ArrowLeft: "steerL",
    ArrowRight: "steerR",
    ArrowDown: "brake",
  }[e.code];
  if (field) input.key(field, false);
});
function installContextRecovery() {
  canvas.addEventListener("webglcontextlost", (e) => {
    e.preventDefault();
    event("context-lost");
    state.ready = false;
    // Release old-generation GPU handles WHILE the context is lost. Deleting
    // them after restoration is INVALID_OPERATION in WebKit. dispose() retains
    // the CPU geometry, material parameters and decoded image data for upload.
    if (scene) {
      scene.environment = null;
      disposeTree(scene);
    }
    environmentTarget?.dispose();
    environmentTarget = null;
    environmentSource?.dispose();
    sun?.shadow.map?.dispose();
    if (sun) sun.shadow.map = null;
    event("gpu-resources-released");
    pause("context-lost");
    stop();
    $("resume").hidden = true;
    $("loading").hidden = false;
    $("load-label").textContent =
      "3Dの復帰を待っています。復帰しなければページを開き直してください。";
  });
  canvas.addEventListener("webglcontextrestored", async () => {
    try {
      // Registered after Three: its synchronous context reset must finish
      // before rebuilding the GPU-only reflection map.
      const check = (step) => {
        const gl = renderer.getContext(),
          error = gl.getError();
        event("restore-stage", { step, error });
        if (error !== gl.NO_ERROR)
          throw Error(`restore ${step}: WebGL error ${error}`);
      };
      event("context-restored");
      check("renderer-reset");
      needsGraphicsCheck = true;
      if (!environmentSource || !car)
        throw Error(
          "素材の準備中にGPUが停止しました。ページを開き直してください。",
        );
      if (environmentSource) {
        const pmrem = new THREE.PMREMGenerator(renderer);
        environmentTarget = pmrem.fromEquirectangular(environmentSource);
        pmrem.dispose();
        check("reflection-map-built");
        scene.environment = environmentTarget.texture;
      }
      await renderer.compileAsync(scene, camera);
      check("programs-compiled");
      state.ready = true;
      state.paused = true;
      previous = 0;
      $("loading").hidden = true;
      $("resume").hidden = false;
      schedule();
    } catch (e) {
      fail("context-restore-failed", e);
    }
  });
}
boot();
