import * as THREE from "three";
import { AssetPool } from "./assets.js";
import { VehicleFactory } from "./vehicles.js";
import { ShapeMesh, BodyMesh, release, materials } from "./mesh.js";
import { createActors } from "../actors.js";
import { vehicle } from "../vehicle-config.js";
import { getTrack, trackPose, cameraPose, overviewCamera } from "../tracks.js";
import { QUALITY, fitBuffer } from "../graphics-lab/src/quality.js";
import { playerPose, edgePose } from "../roads.js";
import { buildGameCircuit } from "./circuit.js";

export class GameRenderer {
  constructor(canvas, { event, progress, failure }) {
    this.canvas = canvas;
    this.event = event;
    this.failure = failure;
    this.quality = QUALITY[new URLSearchParams(location.search).get("quality")]
      ? new URLSearchParams(location.search).get("quality")
      : "standard";
    this.assets = new AssetPool(progress, event);
    this.factory = new VehicleFactory(this.assets);
    this.frame = 0;
    this.qualityChanges = 0;
    this.gl = canvas.getContext("webgl2", {
      alpha: false,
      antialias: true,
      depth: true,
      stencil: false,
      preserveDrawingBuffer: false,
      powerPreference: "default",
    });
    if (!this.gl)
      throw Error(
        "WebGL 2 コンテキストを作成できません。動作診断でiPadOS・Safariの状態を確認してください。原因をGPU故障とは断定できません。",
      );
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      context: this.gl,
      antialias: true,
    });
    this.renderer.setPixelRatio(1);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.debug.onShaderError = (gl, program, vs, fs) => {
      this.shaderError = [
        gl.getProgramInfoLog(program),
        gl.getShaderInfoLog(vs),
        gl.getShaderInfoLog(fs),
      ]
        .filter(Boolean)
        .join("\n");
      this.shaderStage =
        gl.getShaderParameter(vs, gl.COMPILE_STATUS) &&
        gl.getShaderParameter(fs, gl.COMPILE_STATUS)
          ? "program-link-failed"
          : "shader-compile-failed";
      failure(this.shaderStage, this.shaderError);
    };
    this.camera = new THREE.PerspectiveCamera(62, 1, 0.1, 1500);
    this.world = new THREE.Scene();
    this.world.fog = new THREE.FogExp2(0xada293, 0.0014);
    this.garage = new THREE.Scene();
    this.rivalCars = [];
    this.playerKey = "";
    this.cameraInitial = true;
    this.sun = new THREE.DirectionalLight(0xffe2ba, 3);
    this.sun.castShadow = true;
    Object.assign(this.sun.shadow.camera, {
      left: -13,
      right: 13,
      top: 13,
      bottom: -13,
      near: 0.5,
      far: 55,
    });
    this.sun.shadow.bias = -0.00008;
    this.sun.shadow.normalBias = 0.015;
    this.event("context-created", this.gl.getParameter(this.gl.VERSION));
    this.configure();
  }
  async init(setup) {
    await this.assets.init();
    this.configure();
    await Promise.all([
      this.factory.load(QUALITY[this.quality].model),
      this.factory.load("concept-rival.glb"),
    ]);
    this.environment();
    const floor = new THREE.Mesh(
      new THREE.CylinderGeometry(6.5, 6.5, 0.15, 72),
      new THREE.MeshStandardMaterial({
        color: 0x555d5c,
        metalness: 0.35,
        roughness: 0.48,
      }),
    );
    floor.position.y = -0.09;
    floor.receiveShadow = true;
    this.garage.add(floor);
    this.actors = createActors(BodyMesh);
    for (const object of [
      ...Object.values(this.actors.obstacles),
      ...this.actors.shirts,
      ...this.actors.heads,
      this.actors.arm,
      this.actors.leg,
      this.actors.wrench,
      this.actors.warning,
    ])
      object.object.traverse((o) => {
        if (o.geometry) o.geometry.userData.shared = true;
      });
    this.eventRoot = new THREE.Group();
    this.world.add(this.eventRoot);
    this.eventObjects = new Map();
    this.setVehicle(setup);
    this.garage.add(this.player.root);
    this.camera.position.set(6.2, 3.1, 8.5);
    this.camera.lookAt(0, 0.65, 0);
    this.garage.add(this.sun, this.sun.target);
    await this.renderer.compileAsync(this.garage, this.camera);
    if (this.shaderError) throw Error(this.shaderError);
    this.ready = true;
  }
  environment() {
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.environmentTarget = pmrem.fromEquirectangular(this.assets.hdr);
    pmrem.dispose();
    for (const scene of [this.world, this.garage]) {
      scene.environment = this.environmentTarget.texture;
      scene.environmentIntensity = 0.8;
      scene.background = this.assets.hdr;
      scene.backgroundIntensity = 0.9;
      scene.backgroundRotation.y = 0.55;
      scene.environmentRotation.y = 0.55;
    }
  }
  configure() {
    const q = QUALITY[this.quality];
    this.pixelBudget = q.pixels;
    this.renderer.shadowMap.enabled = true;
    if (this.sun.shadow.mapSize.width !== q.shadow) {
      this.sun.shadow.map?.dispose();
      this.sun.shadow.map = null;
    }
    this.sun.shadow.mapSize.set(q.shadow, q.shadow);
    if (this.assets.road)
      for (const t of Object.values(this.assets.road))
        t.anisotropy = q.anisotropy;
    this.resize();
  }
  resize() {
    const [w, h] = fitBuffer(
      innerWidth,
      innerHeight,
      this.pixelBudget,
      this.renderer.capabilities.maxTextureSize,
    );
    if (w !== this.canvas.width || h !== this.canvas.height)
      this.renderer.setSize(w, h, false);
  }
  async setQuality(name, setup) {
    if (!QUALITY[name] || name === this.quality) return;
    await this.factory.load(QUALITY[name].model);
    this.quality = name;
    this.configure();
    this.playerKey = "";
    this.setVehicle(setup);
    this.event("quality-changed", name);
    await this.renderer.compileAsync(
      this.player.root.parent || this.garage,
      this.camera,
    );
  }
  setVehicle(setup) {
    const key = JSON.stringify([
      setup.model,
      setup.color,
      setup.parts,
      this.quality,
    ]);
    if (key === this.playerKey) return;
    const previous = this.player;
    this.player = this.factory.create(setup, QUALITY[this.quality].model);
    this.playerKey = key;
    previous?.root.removeFromParent();
    this.factory.dispose(previous);
    this.cameraInitial = true;
  }
  setCourse(id) {
    if (this.course?.track.id === id) return;
    if (this.course) {
      this.course.root.removeFromParent();
      release(this.course.root);
    }
    const track = getTrack(id),
      built = buildGameCircuit(this.assets.road, track);
    this.course = { ...built, track };
    this.world.add(built.root);
    built.root.updateMatrixWorld(true);
    this.event("course-build", id);
  }
  prepare(setup, course = false) {
    this.setVehicle(setup);
    if (course) this.setCourse(setup.courseId);
  }
  ensureRivals(state, rivals) {
    const key = JSON.stringify([state.model, rivals.map((r) => r.c)]);
    if (this.rivalKey === key) return;
    for (const r of this.rivalCars) {
      r.root.removeFromParent();
      this.factory.dispose(r);
    }
    this.rivalCars = rivals.map((r) => {
      const setup = {
          model: state.model,
          color: r.c,
          parts: { tyres: 1, body: 0, aero: 1 },
        },
        car = this.factory.create(setup, QUALITY[this.quality].model, true);
      this.world.add(car.root);
      return car;
    });
    this.rivalKey = key;
  }
  positioned(instance, state, player, reduced) {
    const p =
        player && state.road
          ? playerPose(state)
          : trackPose(this.course.track, state.z, state.offset ?? state.l),
      spec = vehicle(instance.setup.model);
    instance.root.position.set(
      p.x,
      p.y + 0.012 + (player && !reduced ? (state.bounce || 0) * 0.4 : 0),
      p.z,
    );
    instance.root.rotation.set(
      p.pitch,
      p.yaw - (state.motionSteer || 0) * 0.014,
      0,
      "YXZ",
    );
    this.factory.animate(instance, state, reduced);
    if (player && spec.kind === "bike" && state.fallTimer > 0)
      instance.body.rotation.z = Math.sin(
        ((0.9 - state.fallTimer) / 0.9) * Math.PI,
      );
    return p;
  }
  eventObject(key, builder) {
    if (!this.eventObjects.has(key)) {
      const group = builder();
      this.eventObjects.set(key, group);
      this.eventRoot.add(group);
    }
    const object = this.eventObjects.get(key);
    object.visible = true;
    return object;
  }
  events(state, pose) {
    for (const object of this.eventObjects.values()) object.visible = false;
    const track = this.course.track,
      at = (d, o) => trackPose(track, d, o),
      visible = (p) => Math.hypot(p.x - pose.x, p.z - pose.z) < 220;
    for (const [i, o] of state.obstacles.entries()) {
      const p = at(o.distance, o.offset);
      if (!visible(p)) continue;
      const root = this.eventObject(`obstacle-${i}-${o.type}`, () =>
        this.actors.obstacles[o.type].object.clone(true),
      );
      root.position.set(p.x, p.y + 0.02, p.z);
      root.rotation.set(p.pitch, p.yaw, 0, "YXZ");
    }
    for (const [i, ped] of state.pedestrians.entries()) {
      if (!["warning", "crossing", "safe"].includes(ped.phase)) continue;
      const p = at(ped.distance, ped.offset);
      if (!visible(p)) continue;
      const root = this.eventObject(`person-${i}`, () => {
        const g = new THREE.Group(),
          torso = this.actors.shirts[i % 3].object.clone(true),
          head = this.actors.heads[i % 3].object.clone(true);
        torso.position.y = 0.94;
        head.position.y = 1.46;
        g.add(torso, head);
        g.userData.limbs = [];
        for (const side of [-1, 1])
          for (const [builder, x, y] of [
            [this.actors.leg, side * 0.12, 0.55],
            [this.actors.arm, side * 0.25, 1.18],
          ]) {
            const limb = builder.object.clone(true);
            limb.position.set(x, y, 0);
            g.add(limb);
            g.userData.limbs.push(limb);
          }
        return g;
      });
      root.position.set(p.x, p.y, p.z);
      root.rotation.y = p.yaw + (ped.side > 0 ? Math.PI / 2 : -Math.PI / 2);
      const swing =
        ped.phase === "crossing" ? Math.sin(state.time * 7 + i) * 0.55 : 0;
      root.userData.limbs.forEach(
        (limb, j) => (limb.rotation.x = swing * (j % 3 === 0 ? 1 : -1)),
      );
      if (ped.phase === "warning") {
        const wp = at(ped.distance - 7, track.halfWidth + 2),
          sign = this.eventObject(`warning-${i}`, () =>
            this.actors.warning.object.clone(true),
          );
        sign.position.set(wp.x, wp.y + 3.5, wp.z);
      }
    }
    for (const [i, f] of track.repairFractions.entries()) {
      const p = at(f * track.length, track.halfWidth + 3);
      if (!visible(p)) continue;
      const sign = this.eventObject(`repair-${i}`, () =>
        this.actors.wrench.object.clone(true),
      );
      sign.position.set(p.x, p.y + 0.04, p.z);
      sign.rotation.y = p.yaw + (state.repairTimer > 0 ? state.time * 2 : 0);
    }
  }
  draw(state, rivals, { garage, tab, yaw, rect, reduced, dt }) {
    this.resize();
    const renderer = this.renderer,
      cam = this.camera;
    this.setVehicle(state);
    renderer.setViewport(0, 0, this.canvas.width, this.canvas.height);
    renderer.setScissorTest(false);
    renderer.setClearColor(0x0d1725);
    renderer.clear();
    let active, target;
    if (garage && tab !== "course") {
      active = this.garage;
      if (this.player.root.parent !== active) active.add(this.player.root);
      this.player.root.position.set(0, 0.012, 0);
      this.player.root.rotation.set(0, yaw, 0);
      this.factory.animate(
        this.player,
        { wheelAngle: 0, phase: "menu" },
        reduced,
      );
      const spec = vehicle(state.model),
        scale = Math.max(1, spec.length / 4.86, spec.roof / 1.5),
        sx = this.canvas.width / innerWidth,
        sy = this.canvas.height / innerHeight,
        w = Math.max(1, Math.floor(rect.width * sx)),
        h = Math.max(1, Math.floor(rect.height * sy)),
        left = Math.floor(rect.left * sx),
        bottom = Math.floor(this.canvas.height - rect.bottom * sy);
      renderer.setViewport(left, bottom, w, h);
      renderer.setScissor(left, bottom, w, h);
      renderer.setScissorTest(true);
      cam.aspect = w / h;
      cam.fov = w / h > 1.5 ? 28 : 38;
      cam.far = 160;
      cam.position.set(6.2 * scale, 3.1 * scale, 8.5 * scale);
      cam.lookAt(0, Math.max(0.65, spec.roof * 0.43), 0);
      target = new THREE.Vector3();
    } else {
      this.setCourse(state.courseId);
      active = this.world;
      if (garage) {
        this.player.root.visible = false;
        this.rivalCars.forEach((r) => (r.root.visible = false));
        this.eventRoot.visible = false;
        const sx = this.canvas.width / innerWidth,
          sy = this.canvas.height / innerHeight,
          w = Math.max(1, Math.floor(rect.width * sx)),
          h = Math.max(1, Math.floor(rect.height * sy));
        renderer.setViewport(
          Math.floor(rect.left * sx),
          Math.floor(this.canvas.height - rect.bottom * sy),
          w,
          h,
        );
        renderer.setScissor(
          Math.floor(rect.left * sx),
          Math.floor(this.canvas.height - rect.bottom * sy),
          w,
          h,
        );
        renderer.setScissorTest(true);
        this.course.missions.frame(state, null);
        if (this.suspectCar) this.suspectCar.root.visible = false;
        const bounds = new THREE.Box3().setFromObject(
          this.course.missions.root,
        );
        const old = this.course.track.bounds;
        const expanded = {
          ...old,
          minX: Math.min(old.minX, bounds.min.x),
          maxX: Math.max(old.maxX, bounds.max.x),
          minZ: Math.min(old.minZ, bounds.min.z),
          maxZ: Math.max(old.maxZ, bounds.max.z),
        };
        const pose = overviewCamera(
          { ...this.course.track, bounds: expanded },
          w / h,
          yaw,
        );
        cam.aspect = w / h;
        cam.fov = 40;
        cam.far = pose.far;
        cam.position.fromArray(pose.eye);
        cam.lookAt(...pose.aim);
        target = new THREE.Vector3(...pose.aim);
      } else {
        if (this.player.root.parent !== active) active.add(this.player.root);
        this.player.root.visible = true;
        this.eventRoot.visible = true;
        const pose = this.positioned(this.player, state, true, reduced);
        this.ensureRivals(state, rivals);
        for (const [i, r] of rivals.entries()) {
          const p = trackPose(this.course.track, r.z, r.l),
            car = this.rivalCars[i];
          car.root.visible = Math.hypot(p.x - pose.x, p.z - pose.z) < 220;
          if (car.root.visible)
            this.positioned(
              car,
              { ...r, offset: r.l, phase: "race", time: state.time },
              false,
              reduced,
            );
        }
        this.events(state, pose);
        state.cameraOffset +=
          (state.offset - state.cameraOffset) * (1 - Math.exp(-dt * 3.9));
        const m = state.missions?.active;
        let suspectPose = null;
        if (m?.kind === "police") {
          if (!this.suspectCar) {
            this.suspectCar = this.factory.create(
              { model: 0, color: 3, parts: { tyres: 1, body: 0, aero: 1 } },
              QUALITY[this.quality].model,
              true,
            );
            this.world.add(this.suspectCar.root);
          }
          suspectPose = edgePose(
            this.course.graph.edges["loop-" + m.site],
            m.suspect.d,
            m.suspect.offset || 0,
          );
          const car = this.suspectCar;
          car.root.visible = true;
          car.root.position.set(
            suspectPose.x,
            suspectPose.y + 0.012,
            suspectPose.z,
          );
          car.root.rotation.set(suspectPose.pitch, suspectPose.yaw, 0, "YXZ");
          this.factory.animate(
            car,
            {
              phase: "race",
              wheelAngle: m.suspect.d / vehicle(0).radius,
              v: m.suspect.speed,
              motionSteer:
                m.stage === "SUSPECT_STOPPING" ? m.suspect.motionSteer : 0,
              time: state.time,
            },
            reduced,
          );
        } else if (this.suspectCar) this.suspectCar.root.visible = false;
        this.course.missions.frame(state, suspectPose);
        const work = this.course.missions.workView(state, suspectPose);
        this.workCamera = !!work;
        const height = Math.max(3.45, vehicle(state.model).roof + 2.1),
          back = Math.max(10.5, vehicle(state.model).length * 2);
        const camera = state.road
          ? {
              eye: [
                pose.x - pose.tx * back,
                pose.y + height,
                pose.z - pose.tz * back,
              ],
              aim: [
                pose.x + pose.tx * 13,
                pose.y + 1.15,
                pose.z + pose.tz * 13,
              ],
            }
          : cameraPose(
              this.course.track,
              state.z,
              state.cameraOffset,
              height,
              back,
            );
        const eye = work ? work.eye : new THREE.Vector3(...camera.eye);
        if (this.cameraInitial || work || this.wasWorkCamera !== !!work)
          cam.position.copy(eye);
        else cam.position.lerp(eye, 1 - Math.exp(-dt * 6));
        this.wasWorkCamera = !!work;
        this.cameraInitial = false;
        cam.aspect = this.canvas.width / this.canvas.height;
        cam.fov = work
          ? work.fov
          : 62 +
            (reduced
              ? 0
              : Math.min(3, state.v / 20) + (state.boost > 0 ? 3 : 0));
        cam.far = 900;
        if (work) cam.lookAt(work.aim);
        else cam.lookAt(...camera.aim);
        target = this.player.root.position.clone();
      }
    }
    if (this.sun.parent !== active) active.add(this.sun, this.sun.target);
    this.sun.target.position.copy(target);
    this.sun.position.copy(target).add(new THREE.Vector3(-8, 12, 5));
    this.sun.target.updateMatrixWorld();
    this.sun.updateMatrixWorld();
    cam.updateProjectionMatrix();
    const savedFog = active.fog;
    if (garage && tab === "course") active.fog = null;
    renderer.render(active, cam);
    active.fog = savedFog;
    renderer.setScissorTest(false);
    renderer.setViewport(0, 0, this.canvas.width, this.canvas.height);
    this.player.root.visible = true;
    this.frame++;
    if (!garage) {
      const p = this.player.root.position
          .clone()
          .add(new THREE.Vector3(0, 0.6, 0))
          .project(cam),
        c = state.road
          ? edgePose(
              this.course.graph.edges[state.road.edge],
              state.road.d,
              0,
              state.road.direction,
            )
          : trackPose(this.course.track, state.z),
        center = new THREE.Vector3(c.x, c.y + 0.6, c.z).project(cam);
      this.screen = { player: [p.x, p.y], laneCenter: [center.x, center.y] };
      this.workTargets = this.course.missions
        .targets(cam, innerWidth, innerHeight)
        .map(({ point, ...t }) => t);
    }
  }
  lose() {
    this.ready = false;
    for (const s of [this.world, this.garage]) {
      s.environment = null;
      release(s, { textures: true });
    }
    for (const root of this.factory.templates.values())
      release(root, { textures: true });
    materials.forEach((m) => m.dispose());
    this.environmentTarget?.dispose();
    this.environmentTarget = null;
    this.assets.hdr?.dispose();
    this.sun.shadow.map?.dispose();
    this.sun.shadow.map = null;
  }
  async restore() {
    this.environment();
    await this.renderer.compileAsync(
      this.player.root.parent || this.garage,
      this.camera,
    );
    if (this.gl.getError() !== this.gl.NO_ERROR)
      throw Error("WebGL error while restoring resources");
    this.ready = true;
  }
  stats() {
    const geometries = new Set();
    let bytes = 0;
    for (const root of [
      this.world,
      this.garage,
      ...this.factory.templates.values(),
    ])
      root.traverse((o) => {
        if (o.geometry && !geometries.has(o.geometry)) {
          geometries.add(o.geometry);
          bytes += o.geometry.index?.array.byteLength || 0;
          for (const a of Object.values(o.geometry.attributes))
            bytes += a.array?.byteLength || a.data?.array.byteLength || 0;
        }
      });
    return {
      engine: `Three.js r${THREE.REVISION} / WebGL 2`,
      quality: this.quality,
      pixelBudget: this.pixelBudget,
      qualityChanges: this.qualityChanges,
      drawCalls: this.renderer.info.render.calls,
      vertices: this.renderer.info.render.triangles * 3,
      meshBytes: bytes,
      modelCacheSize: this.factory.templates.size,
      bufferSize: [this.canvas.width, this.canvas.height],
      sceneCourse: this.course?.track.id,
      assetBytes: this.assets.loadedBytes,
      assetModel: this.player?.modelName,
      rendererResources: { ...this.renderer.info.memory },
      wheels: this.player?.wheels.map((w) => ({
        front: w.front,
        steering: w.outer.rotation.y,
        angle: w.spin.rotation.x,
        center: w.outer.position.toArray(),
      })),
      workCamera: this.workCamera || false,
      workTargets: this.workTargets || [],
      contextLost: this.gl.isContextLost(),
    };
  }
}
