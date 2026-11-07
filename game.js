import { createActors } from "./actors.js";
import { hasPuncture, repairArea } from "./damage.js";
import { DAMAGE } from "./race-config.js";
import { raceRank } from "./race-metrics.js";
import {
  TRACKS,
  getTrack,
  trackPose,
  cameraPose,
  mapPath,
  mapPoint,
} from "./tracks.js";
import { buildTrackScene } from "./world.js";
import { vehicle, wheelLayout } from "./vehicle-config.js";
import { createInput, installGameGestures } from "./input.js";
import { VEHICLES, defaultSetup, copySetup, setupSummary } from "./garage.js";
import { buildBody, buildWheel, buildAero } from "./vehicles.js";
import { perspective, lookAt, mul, projectPoint } from "./camera.js";
import {
  LAP,
  TOTAL,
  ROAD,
  TAU,
  center,
  slope,
  laneWorldX,
  createRace,
  createRivals,
  advance,
  activateBoost,
} from "./driving.js";
const D = window.raceDiagnostics;
function boot() {
  D.event("context-create");
  const $ = (id) => document.getElementById(id),
    canvas = $("world");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let pixelBudget =
    new URLSearchParams(location.search).get("quality") === "low"
      ? 480000
      : 1400000;
  let raf = 0,
    frames = 0,
    drawCalls = 0,
    vertices = 0,
    frameMs = 16.7,
    slowSeconds = 0,
    qualityChanges = 0,
    firstFrame = true;
  let graphicsReady = false;
  let gl;
  canvas.addEventListener("webglcontextcreationerror", (e) =>
    D.event(
      "context-create-error",
      e.statusMessage || "No status message supplied by the browser.",
    ),
  );
  const contextOptions = {
    alpha: false,
    antialias: false,
    depth: true,
    stencil: false,
    preserveDrawingBuffer: false,
    powerPreference: "default",
  };
  D.graphics({ requestedContext: contextOptions });
  try {
    gl =
      canvas.getContext("webgl", contextOptions) ||
      canvas.getContext("experimental-webgl", contextOptions);
  } catch (e) {
    D.event("context-create-exception", e.message);
  }
  if (!gl) {
    D.failure(
      "context-unavailable",
      "Neither WebGL 1 context name returned a context. This does not identify a GPU/OS cause.",
    );
    return;
  }
  const maxViewport = gl.getParameter(gl.MAX_VIEWPORT_DIMS),
    maxRenderbuffer = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE);
  const fragmentPrecision = gl.getShaderPrecisionFormat(
    gl.FRAGMENT_SHADER,
    gl.HIGH_FLOAT,
  );
  D.graphics({
    actualContext: gl.getContextAttributes(),
    webgl: gl.getParameter(gl.VERSION),
    shadingLanguage: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
    maxViewport: Array.from(maxViewport),
    maxRenderbuffer,
    fragmentHighFloat: fragmentPrecision
      ? {
          rangeMin: fragmentPrecision.rangeMin,
          rangeMax: fragmentPrecision.rangeMax,
          precision: fragmentPrecision.precision,
        }
      : null,
  });
  const vs = `
attribute vec3 aPos,aNorm,aColor; attribute float aMat;
uniform mat4 uVP; uniform vec3 uShift,uEye;
uniform float uYaw,uSpin,uRoll,uPitch; uniform vec3 uScale;
varying mediump vec3 vWorld,vNorm,vColor;
varying mediump vec2 vSurface;
varying mediump float vMat,vFog;
void main(){
  float sn=sin(uSpin),cs=cos(uSpin),pr=cos(uPitch),ps=sin(uPitch);
  float rr=cos(uRoll),rs=sin(uRoll),y=cos(uYaw),s=sin(uYaw);
  vec3 p=vec3(aPos.x,aPos.y*cs-aPos.z*sn,aPos.y*sn+aPos.z*cs);
  p*=uScale; p=vec3(p.x,p.y*pr-p.z*ps,p.y*ps+p.z*pr);
  p=vec3(p.x*rr-p.y*rs,p.x*rs+p.y*rr,p.z);
  p=vec3(y*p.x+s*p.z,p.y,-s*p.x+y*p.z)+uShift;
  vec3 n=vec3(aNorm.x,aNorm.y*cs-aNorm.z*sn,aNorm.y*sn+aNorm.z*cs);
  n/=uScale; n=vec3(n.x,n.y*pr-n.z*ps,n.y*ps+n.z*pr);
  n=vec3(n.x*rr-n.y*rs,n.x*rs+n.y*rr,n.z);
  vNorm=normalize(vec3(y*n.x+s*n.z,n.y,-s*n.x+y*n.z));
  vWorld=p-uEye; vColor=aColor; vMat=aMat; vSurface=p.xz*.15;
  vFog=clamp((distance(p,uEye)-135.0)/280.0,0.0,1.0);
  gl_Position=uVP*vec4(p,1.0);
}`;
  const fs = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
varying mediump vec3 vWorld,vNorm,vColor;
varying mediump vec2 vSurface;
varying mediump float vMat,vFog;
uniform float uStudio;
float grain(vec2 p){
  vec3 q=fract(vec3(p.xyx)*.1031);
  q+=dot(q,q.yzx+33.33);
  return fract((q.x+q.y)*q.z);
}
vec4 finishColor(vec3 color){
  if(uStudio<.5)color=mix(color,vec3(.52,.62,.71),vFog*.96);
  color=color/(vec3(1.0)+color*.35);
  return vec4(sqrt(max(color,vec3(0.0))),1.0);
}
vec3 environment(vec3 r){
  float sky=smoothstep(-.12,.75,r.y);
  vec3 c=mix(vec3(.12,.14,.15),vec3(.47,.63,.80),sky);
  float horizon=exp(-abs(r.y)*13.0);
  c+=vec3(.32,.34,.36)*horizon;
  if(uStudio>.5){
    c=mix(vec3(.055,.07,.09),vec3(.34,.41,.50),sky);
    float strip=smoothstep(.35,.41,r.y)*(1.0-smoothstep(.48,.58,r.y));
    float side=smoothstep(.82,.90,abs(r.x))*.6;
    c+=vec3(.95,.98,1.0)*(strip+side);
  }
  return c;
}
void main(){
  if(vMat>8.5){gl_FragColor=vec4(vec3(.018,.025,.035),vColor.r);return;}
  vec3 n=normalize(vNorm);
  // Scale before normalize: squared camera-relative distances must not overflow mediump.
  vec3 sun=normalize(vec3(-.52,.87,.48));
  float ndl=max(dot(n,sun),0.0);
  vec3 base=vColor;
  vec3 ambient=mix(vec3(.22,.25,.27),vec3(.47,.54,.62),n.y*.5+.5);
  vec3 color=base*(ambient+vec3(1.02,.97,.88)*ndl*.95);
  // Road, grass, scenery and lamps skip all vehicle reflection/specular work.
  if(vMat<1.5||(vMat>3.5&&vMat<5.5)){
    if(vMat>.5&&vMat<1.5)color=base*(.65+ndl*.5)*(1.0+grain(floor(vSurface*8.0))*.11);
    else if(vMat>3.5&&vMat<4.5)color=base*2.1;
    else if(vMat>4.5)color*=.9+grain(floor(vSurface*2.0))*.13;
    gl_FragColor=finishColor(color);return;
  }
  vec3 d=-vWorld;
  vec3 eye=normalize(d/max(1.0,max(abs(d.x),max(abs(d.y),abs(d.z)))));
  vec3 halfway=normalize(sun+eye);
  float ndv=clamp(dot(n,eye),0.0,1.0);
  float fres=pow(1.0-ndv,5.0),spec=pow(max(dot(n,halfway),0.0),80.0);

  if(vMat>.5&&vMat<1.5){
    float g=grain(floor(vSurface*8.0));color=base*(.65+ndl*.5)*(1.0+g*.11);
  }else if(vMat>1.5&&vMat<2.5){
    vec3 reflection=environment(reflect(-eye,n));
    float flake=grain(floor(vSurface*20.0))*.018;
    color=base*(ambient*.82+ndl*.9)+reflection*(.04+fres*.55)+vec3(1.0,.97,.90)*spec*.85+base*flake;
  }else if(vMat>2.5&&vMat<3.5){
    color=base*.32+environment(reflect(-eye,n))*(.10+fres*.75)+vec3(.7,.8,.9)*spec*.4;
  }else if(vMat>3.5&&vMat<4.5){color=base*2.1;
  }else if(vMat>4.5&&vMat<5.5){color*=.9+grain(floor(vSurface*2.0))*.13;
  }else if(vMat>5.5&&vMat<6.5){color=base*.16+environment(reflect(-eye,n))*vColor*(.65+fres*.35)+vec3(.95)*spec*.85;
  }else if(vMat>6.5&&vMat<7.5){color=base*(ambient*.7+ndl*.38)+vec3(.12)*pow(max(dot(n,halfway),0.0),14.0);
  }else if(vMat>7.5){color=base*(ambient+ndl*.5)+environment(reflect(-eye,n))*(.04+fres*.18);}
  gl_FragColor=finishColor(color);
}`;
  const skyvs = `attribute vec2 p;varying mediump vec2 uv;void main(){uv=p*.5+.5;gl_Position=vec4(p,0.,1.);}`;
  const skyfs = `precision mediump float;varying mediump vec2 uv;uniform float uStudio;
void main(){
  vec3 day=mix(vec3(.80,.85,.88),vec3(.20,.38,.60),smoothstep(.14,1.0,uv.y));
  float sun=1.0-smoothstep(.015,.20,length((uv-vec2(.78,.83))*vec2(1.5,1.0)));
  day+=vec3(.19,.14,.07)*sun;
  vec3 studio=mix(vec3(.08,.11,.16),vec3(.035,.052,.08),uv.y);
  studio+=vec3(.03,.04,.055)*(1.0-smoothstep(.1,.8,length(uv-vec2(.5,.4))));
  gl_FragColor=vec4(mix(day,studio,uStudio),1.0);
}`;
  function compile(type, code, label) {
    D.event("shader-compile", label);
    const s = gl.createShader(type);
    if (!s) throw Error("createShader returned null: " + label);
    gl.shaderSource(s, code);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      const log = gl.getShaderInfoLog(s) || "No compiler log";
      gl.deleteShader(s);
      D.failure("shader-compile-failed", label + ": " + log);
      throw Error(label + ": " + log);
    }
    return s;
  }
  function program(v, f, label) {
    const p = gl.createProgram();
    if (!p) throw Error("createProgram returned null");
    let vertex, fragment;
    try {
      vertex = compile(gl.VERTEX_SHADER, v, label + " vertex");
      fragment = compile(gl.FRAGMENT_SHADER, f, label + " fragment");
      gl.attachShader(p, vertex);
      gl.attachShader(p, fragment);
      D.event("program-link", label);
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
        const log = gl.getProgramInfoLog(p) || "No linker log";
        D.failure("program-link-failed", label + ": " + log);
        throw Error(label + ": " + log);
      }
      return p;
    } catch (e) {
      gl.deleteProgram(p);
      throw e;
    } finally {
      if (vertex) gl.deleteShader(vertex);
      if (fragment) gl.deleteShader(fragment);
    }
  }
  let prog, skyp, loc, skLoc, skybuf;
  function setupPrograms() {
    prog = program(vs, fs, "world");
    skyp = program(skyvs, skyfs, "sky");
    loc = {
      p: gl.getAttribLocation(prog, "aPos"),
      n: gl.getAttribLocation(prog, "aNorm"),
      c: gl.getAttribLocation(prog, "aColor"),
      m: gl.getAttribLocation(prog, "aMat"),
      vp: gl.getUniformLocation(prog, "uVP"),
      shift: gl.getUniformLocation(prog, "uShift"),
      yaw: gl.getUniformLocation(prog, "uYaw"),
      spin: gl.getUniformLocation(prog, "uSpin"),
      roll: gl.getUniformLocation(prog, "uRoll"),
      pitch: gl.getUniformLocation(prog, "uPitch"),
      eye: gl.getUniformLocation(prog, "uEye"),
      scale: gl.getUniformLocation(prog, "uScale"),
      studio: gl.getUniformLocation(prog, "uStudio"),
    };
    skLoc = {
      p: gl.getAttribLocation(skyp, "p"),
      studio: gl.getUniformLocation(skyp, "uStudio"),
    };
    skybuf = gl.createBuffer();
    if (!skybuf) throw Error("Sky buffer allocation failed");
    gl.bindBuffer(gl.ARRAY_BUFFER, skybuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clearColor(0.035, 0.052, 0.08, 1);
  }
  try {
    setupPrograms();
  } catch (e) {
    if (!D.read().stage.endsWith("failed"))
      D.failure("gpu-setup-failed", e.message);
    return;
  }
  const meshes = new Set();
  const C = (r, g, b) => [r / 255, g / 255, b / 255],
    K = C(12, 15, 21),
    RIM = C(162, 174, 178),
    SIL = C(220, 232, 235),
    LAMP = C(248, 248, 219),
    GLASS = C(24, 58, 78);
  const colors = [
    C(228, 45, 41),
    C(27, 102, 202),
    C(248, 180, 25),
    C(36, 150, 114),
  ];
  function shade(c, t) {
    return c.map((x) => Math.max(0, Math.min(1, x * t)));
  }
  class Mesh {
    constructor() {
      this.data = [];
      this.buffer = null;
      this.count = 0;
      this.vertices = null;
      meshes.add(this);
    }
    tri(a, b, c, col, mat = 0) {
      const v = [b[0] - a[0], b[1] - a[1], b[2] - a[2]],
        w = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
      let n = [
          v[1] * w[2] - v[2] * w[1],
          v[2] * w[0] - v[0] * w[2],
          v[0] * w[1] - v[1] * w[0],
        ],
        mag = Math.hypot(...n) || 1;
      n = n.map((x) => x / mag);
      for (const [i, x] of [a, b, c].entries())
        this.data.push(
          ...x,
          ...n,
          ...(Array.isArray(col[0]) ? col[i] : col),
          mat,
        );
      return this;
    }
    quad(a, b, c, d, col, mat = 0) {
      return Array.isArray(col[0])
        ? this.tri(a, b, c, [col[0], col[1], col[2]], mat).tri(
            a,
            c,
            d,
            [col[0], col[2], col[3]],
            mat,
          )
        : this.tri(a, b, c, col, mat).tri(a, c, d, col, mat);
    }
    box(x, y, z, w, h, l, col, mat = 0) {
      const x0 = x - w / 2,
        x1 = x + w / 2,
        y0 = y - h / 2,
        y1 = y + h / 2,
        z0 = z - l / 2,
        z1 = z + l / 2;
      this.quad(
        [x0, y0, z0],
        [x0, y1, z0],
        [x1, y1, z0],
        [x1, y0, z0],
        col,
        mat,
      );
      this.quad(
        [x1, y0, z1],
        [x1, y1, z1],
        [x0, y1, z1],
        [x0, y0, z1],
        col,
        mat,
      );
      this.quad(
        [x0, y0, z1],
        [x0, y1, z1],
        [x0, y1, z0],
        [x0, y0, z0],
        col,
        mat,
      );
      this.quad(
        [x1, y0, z0],
        [x1, y1, z0],
        [x1, y1, z1],
        [x1, y0, z1],
        col,
        mat,
      );
      this.quad(
        [x0, y1, z0],
        [x0, y1, z1],
        [x1, y1, z1],
        [x1, y1, z0],
        col,
        mat,
      );
      this.quad(
        [x0, y0, z1],
        [x0, y0, z0],
        [x1, y0, z0],
        [x1, y0, z1],
        col,
        mat,
      );
      return this;
    }
    cylinder(x, y, z, r, h, col, mat = 0, N = 9) {
      for (let i = 0; i < N; i++) {
        let a = (i * TAU) / N,
          b = ((i + 1) * TAU) / N;
        let p = [x + r * Math.cos(a), y, z + r * Math.sin(a)],
          q = [x + r * Math.cos(b), y, z + r * Math.sin(b)],
          pt = [p[0], y + h, p[2]],
          qt = [q[0], y + h, q[2]];
        this.quad(p, pt, qt, q, col, mat);
        this.tri([x, y + h, z], qt, pt, col, mat);
      }
      return this;
    }
    sphere(x, y, z, rx, ry, rz, col, mat = 0, segments = 9, rings = 5) {
      for (let j = 0; j < rings; j++) {
        let a = (Math.PI * j) / rings,
          b = (Math.PI * (j + 1)) / rings;
        for (let i = 0; i < segments; i++) {
          let t = (i * TAU) / segments,
            u = ((i + 1) * TAU) / segments;
          const v = (phi, theta) => [
            x + rx * Math.sin(phi) * Math.cos(theta),
            y + ry * Math.cos(phi),
            z + rz * Math.sin(phi) * Math.sin(theta),
          ];
          this.quad(v(a, t), v(a, u), v(b, u), v(b, t), col, mat);
        }
      }
      return this;
    }
    dispose() {
      if (this.buffer) gl.deleteBuffer(this.buffer);
      meshes.delete(this);
      this.vertices = null;
      this.buffer = null;
    }
    upload() {
      this.buffer = gl.createBuffer();
      if (!this.buffer) throw Error("Mesh buffer allocation failed");
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);
    }
    done() {
      this.count = this.data.length / 10;
      this.vertices = new Float32Array(this.data);
      // Convert the fixed vertex palette once, rather than per pixel per frame.
      // Alpha-only contact-shadow vertices retain their original values.
      for (let i = 0; i < this.vertices.length; i += 10)
        if (this.vertices[i + 9] !== 9)
          for (let c = 6; c < 9; c++)
            this.vertices[i + c] = this.vertices[i + c] * this.vertices[i + c];
      this.data = [];
      this.upload();
      return this;
    }
  }
  function draw(
    m,
    x = 0,
    y = 0,
    z = 0,
    yaw = 0,
    spin = 0,
    roll = 0,
    pitch = 0,
    scale = [1, 1, 1],
  ) {
    if (!m.count) return;
    gl.bindBuffer(gl.ARRAY_BUFFER, m.buffer);
    const stride = 40;
    gl.enableVertexAttribArray(loc.p);
    gl.vertexAttribPointer(loc.p, 3, gl.FLOAT, false, stride, 0);
    gl.enableVertexAttribArray(loc.n);
    gl.vertexAttribPointer(loc.n, 3, gl.FLOAT, false, stride, 12);
    gl.enableVertexAttribArray(loc.c);
    gl.vertexAttribPointer(loc.c, 3, gl.FLOAT, false, stride, 24);
    gl.enableVertexAttribArray(loc.m);
    gl.vertexAttribPointer(loc.m, 1, gl.FLOAT, false, stride, 36);
    gl.uniform3f(loc.shift, x, y, z);
    gl.uniform3fv(loc.scale, scale);
    gl.uniform1f(loc.yaw, yaw);
    gl.uniform1f(loc.spin, spin);
    gl.uniform1f(loc.roll, roll);
    gl.uniform1f(loc.pitch, pitch);
    gl.drawArrays(gl.TRIANGLES, 0, m.count);
    drawCalls++;
    vertices += m.count;
  }
  let scene = null,
    garageTab = "vehicle";
  function ensureScene() {
    if (!scene || scene.track.id !== S.courseId) {
      scene?.dispose();
      D.event("course-build", S.courseId);
      scene = buildTrackScene(Mesh, getTrack(S.courseId));
    }
  }
  const bodyCache = new Map(),
    aeroCache = new Map();
  const wheels = [buildWheel(Mesh, 0), buildWheel(Mesh, 1)];
  const distantWheels = [
    buildWheel(Mesh, 0, false),
    buildWheel(Mesh, 1, false),
  ];
  function vehicleMeshes(setup, detailed = true) {
    const { model, color, parts } = setup;
    const bodyKey = `${detailed ? 1 : 0}:${model}:${color}:${parts.body}`,
      aeroKey = `${model}:${parts.body}:${parts.aero}`;
    if (!bodyCache.has(bodyKey))
      bodyCache.set(
        bodyKey,
        buildBody(Mesh, colors[color], model, parts.body, detailed),
      );
    if (!aeroCache.has(aeroKey))
      aeroCache.set(aeroKey, buildAero(Mesh, model, parts.body, parts.aero));
    if (bodyCache.size > 20) {
      const key = bodyCache.keys().next().value;
      if (key !== bodyKey) {
        bodyCache.get(key)?.dispose();
        bodyCache.delete(key);
      }
    }
    if (aeroCache.size > 12) {
      const key = aeroCache.keys().next().value;
      if (key !== aeroKey) {
        aeroCache.get(key)?.dispose();
        aeroCache.delete(key);
      }
    }
    return {
      body: bodyCache.get(bodyKey),
      aero: aeroCache.get(aeroKey),
      wheel: (detailed ? wheels : distantWheels)[parts.tyres],
    };
  }
  function makeShadow() {
    const m = new Mesh(),
      rings = [
        [0, 0.36],
        [0.52, 0.31],
        [0.83, 0.12],
        [1.12, 0],
      ];
    for (let j = 0; j < rings.length - 1; j++)
      for (let i = 0; i < 32; i++) {
        const a = (i * TAU) / 32,
          b = ((i + 1) * TAU) / 32,
          [ra, aa] = rings[j],
          [rb, ab] = rings[j + 1];
        const point = (r, t) => [
          Math.cos(t) * 1.28 * r,
          0,
          Math.sin(t) * 2.65 * r,
        ];
        m.quad(
          point(ra, a),
          point(ra, b),
          point(rb, b),
          point(rb, a),
          [
            [aa, 0, 0],
            [aa, 0, 0],
            [ab, 0, 0],
            [ab, 0, 0],
          ],
          9,
        );
      }
    return m.done();
  }
  const shadow = makeShadow();
  const studioFloor = new Mesh()
    .box(0, -0.24, 0, 200, 0.1, 200, C(31, 37, 46), 0)
    .done();
  const studioStage = new Mesh()
    .cylinder(0, -0.17, 0, 3.2, 0.17, C(64, 73, 84), 6, 96)
    .done();
  const ai = createRivals();
  let WIDTH = 0,
    HEIGHT = 0;
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 1.6),
      iw = Math.max(1, innerWidth),
      ih = Math.max(1, innerHeight);
    const scale = Math.min(
      dpr,
      Math.sqrt(pixelBudget / (iw * ih)),
      maxViewport[0] / iw,
      maxViewport[1] / ih,
      maxRenderbuffer / iw,
      maxRenderbuffer / ih,
    );
    const w = Math.max(1, Math.floor(iw * scale)),
      h = Math.max(1, Math.floor(ih * scale));
    if (w !== WIDTH || h !== HEIGHT) {
      WIDTH = w;
      HEIGHT = h;
      canvas.width = w;
      canvas.height = h;
    }
    gl.viewport(0, 0, w, h);
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
  const lampMeshes = [
    new Mesh().box(0, 0, 0, 0.26, 0.12, 0.3, C(241, 30, 27), 4).done(),
    new Mesh().box(0, 0, 0, 0.26, 0.12, 0.3, C(35, 104, 246), 4).done(),
    new Mesh().box(0, 0, 0, 0.26, 0.12, 0.3, C(43, 53, 66), 0).done(),
  ];
  $("course-list").innerHTML = TRACKS.map(
    (t) =>
      `<button class="course-choice" data-course="${t.id}" aria-pressed="${t.id === "C01"}"><svg viewBox="0 0 100 100" aria-hidden="true"><path d="${mapPath(t)}"/></svg><strong>${t.icon} ${t.name}</strong><span>${"★".repeat(t.difficulty)} ・ ${t.length}m</span></button>`,
  ).join("");
  const actors = createActors(Mesh);
  const setups = VEHICLES.map((_, i) => defaultSetup(i));
  const S = createRace(setups[0].color, 0, setups[0].parts);
  const input = createInput(S);
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
    vehicleMeshes(S);
    if (garageTab === "course") ensureScene();
  }
  function rememberSetup() {
    setups[S.model] = copySetup(S);
    refreshGarage();
  }

  D.observe(() => ({
    phase: S.phase,
    distance: Math.round(S.z),
    offset: Number(S.offset.toFixed(2)),
    speed: Number(S.v.toFixed(1)),
    steering: [S.steerL, S.steerR],
    model: VEHICLES[S.model].name,
    courseId: S.courseId,
    courseLength: getTrack(S.courseId).length,
    checkpoints: S.checkpointsPassed,
    sceneCourse: scene?.track.id,
    kind: vehicle(S.model).kind,
    wheelCount: wheelLayout(S.model).length,
    siren: S.siren,
    brake: S.brake,
    parts: { ...S.parts },
    screen: screenPosition,
    garage: inGarage(),
    garageYaw: Number(garageYaw.toFixed(2)),
    modelCacheSize: bodyCache.size,
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
    drawCalls,
    vertices,
    frameMs: Number(frameMs.toFixed(1)),
    pixelBudget,
    qualityChanges,
    bufferSize: [WIDTH, HEIGHT],
    meshBytes: Array.from(meshes).reduce(
      (n, m) => n + m.vertices.byteLength,
      0,
    ),
    contextLost: gl.isContextLost(),
  }));
  resize();
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
  function metric() {
    const track = getTrack(S.courseId);
    S.lap = Math.min(2, 1 + Math.floor(S.z / track.length));
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
    previewDrag = null;
    for (const id of ["left", "right"]) $(id).classList.remove("is-down");
  }
  function reset() {
    const { color, model, parts } = copySetup(S);
    const courseId = S.courseId;
    Object.assign(
      S,
      createRace(
        color,
        model,
        parts,
        courseId,
        Math.floor(Math.random() * 0x7fffffff),
      ),
      { phase: "countdown" },
    );
    ensureScene();
    document.body.classList.remove("in-garage");
    $("modal").classList.remove("paused");
    canvas.setAttribute("aria-label", "3Dスーパーカーレース");
    ai.splice(0, ai.length, ...createRivals(S.model));
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
    $("title").innerHTML =
      S.rank === 1 ? "🏆 <em>WINNER!</em>" : "🏁 <em>FINISH!</em>";
    $("subtitle").textContent =
      `${S.rank}い / 5だい　 ${(S.time + S.penaltyTime).toFixed(1)}びょう（ペナルティ +${S.penaltyTime}）`;
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
      $("instructions").textContent = "◀ ▶ で まがる ／ はなすと まんなかへ";
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
  function drawVehicle(
    setup,
    x,
    y,
    z,
    yaw,
    wheelAngle = 0,
    roll = 0,
    pitch = 0,
    steer = 0,
    detailed = true,
    roadPitch = 0,
  ) {
    const geometry = vehicleMeshes(setup, detailed),
      spec = VEHICLES[setup.model];
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.depthMask(false);
    draw(shadow, x + 0.14, y - 0.007, z - 0.15, yaw, 0, 0, roadPitch, [
      spec.width / 2.1,
      1,
      spec.length / 4.86,
    ]);
    gl.depthMask(true);
    gl.disable(gl.BLEND);
    draw(geometry.body, x, y, z, yaw, 0, roll, pitch);
    if (geometry.aero) draw(geometry.aero, x, y, z, yaw, 0, roll, pitch);
    const radiusScale = spec.radius / 0.43;
    for (const [wheelIndex, wheel] of wheelLayout(
      setup.model,
      setup.parts.body,
    ).entries()) {
      const flatten =
          setup === S && !inGarage() ? S.flatVisual[wheelIndex] || 0 : 0,
        vertical = 1 - flatten * 0.45;
      const wx = x + Math.cos(yaw) * wheel.x + Math.sin(yaw) * wheel.z,
        wz = z - Math.sin(yaw) * wheel.x + Math.cos(yaw) * wheel.z;
      draw(
        geometry.wheel,
        wx,
        y + spec.radius * vertical + 0.01 - Math.sin(roadPitch) * wheel.z,
        wz,
        yaw + (wheel.z > 0 ? steer : 0),
        wheelAngle,
        0,
        0,
        [radiusScale, radiusScale * vertical, radiusScale],
      );
    }
    if (spec.emergency) {
      for (const side of [-1, 1]) {
        const localX = side * 0.38,
          localZ = spec.kind === "patrol" ? -0.1 : 0.35;
        const wx = x + Math.cos(yaw) * localX + Math.sin(yaw) * localZ,
          wz = z - Math.sin(yaw) * localX + Math.cos(yaw) * localZ;
        const lit =
          setup === S &&
          S.phase === "race" &&
          S.siren &&
          (Math.floor(S.time * 5) + (side === 1 ? 1 : 0)) % 2 === 0;
        draw(
          lampMeshes[lit ? (side < 0 ? 0 : 1) : 2],
          wx,
          y + spec.roof + 0.13,
          wz,
          yaw,
        );
      }
    }
  }

  function carAt(distance, offset, col, wheelAngle, player) {
    const track = getTrack(S.courseId),
      p = trackPose(track, distance, offset);
    const y =
      p.y +
      0.025 +
      (reducedMotion
        ? 0
        : player
          ? S.bounce * 0.5
          : 0.005 * Math.sin(distance * 0.85));
    const yaw = p.yaw - (player ? S.motionSteer * 0.014 : 0);
    if (player && lastView) {
      const c = trackPose(track, distance);
      screenPosition = {
        player: projectPoint(lastView, [p.x, y + 0.6, p.z]).slice(0, 2),
        laneCenter: projectPoint(lastView, [c.x, c.y + 0.6, c.z]).slice(0, 2),
      };
    }
    const setup = player
      ? S
      : {
          model: col % 2,
          color: col,
          parts: { tyres: 1, body: col % 2, aero: col % 2 ? 1 : 2 },
        };
    drawVehicle(
      setup,
      p.x,
      y,
      p.z,
      yaw,
      wheelAngle,
      player && !reducedMotion
        ? vehicle(S.model).kind === "bike"
          ? S.fallTimer > 0
            ? Math.sin(((0.9 - S.fallTimer) / 0.9) * Math.PI) * 1.0
            : -S.roll * 2.1
          : S.roll +
            S.damageSide * 0.035 +
            (hasPuncture(S) ? Math.sin(S.damageAge * 24) * 0.012 : 0)
        : 0,
      p.pitch + (player && !reducedMotion ? S.pitch : 0),
      player ? -S.motionSteer * 0.035 : 0,
      player,
      p.pitch,
    );
  }
  function drawEvents(pose) {
    const track = getTrack(S.courseId),
      visible = (p) => Math.hypot(p.x - pose.x, p.z - pose.z) < 250;
    for (const object of S.obstacles) {
      const p = trackPose(track, object.distance, object.offset);
      if (visible(p))
        draw(actors.obstacles[object.type], p.x, p.y + 0.02, p.z, p.yaw);
    }
    for (const [index, person] of S.pedestrians.entries()) {
      if (!["warning", "crossing", "safe"].includes(person.phase)) continue;
      if (person.phase === "safe" && S.z - person.distance > 40) continue;
      const p = trackPose(track, person.distance, person.offset);
      if (!visible(p)) continue;
      const yaw = p.yaw + (person.side > 0 ? Math.PI / 2 : -Math.PI / 2),
        walking = person.phase === "crossing",
        swing = walking ? Math.sin(S.time * 7 + index) * 0.55 : 0;
      const at = (x, y, z = 0) => [
        p.x + Math.cos(yaw) * x + Math.sin(yaw) * z,
        p.y + y,
        p.z - Math.sin(yaw) * x + Math.cos(yaw) * z,
      ];
      draw(actors.shirts[index % 3], ...at(0, 0.94), yaw);
      draw(actors.heads[index % 3], ...at(0, 1.46), yaw);
      for (const side of [-1, 1]) {
        draw(actors.leg, ...at(side * 0.12, 0.55), yaw, side * swing);
        draw(actors.arm, ...at(side * 0.25, 1.18), yaw, -side * swing);
      }
      if (person.phase === "warning" && Math.floor(S.time * 3) % 2 === 0) {
        const sign = trackPose(
          track,
          person.distance - 7,
          track.halfWidth + 1.8,
        );
        draw(actors.warning, sign.x, sign.y + 3.3, sign.z);
      }
    }
    for (const fraction of track.repairFractions) {
      const p = trackPose(
        track,
        fraction * track.length,
        track.halfWidth + 3.1,
      );
      if (visible(p))
        draw(
          actors.wrench,
          p.x,
          p.y + 0.04,
          p.z,
          p.yaw + (S.repairTimer > 0 ? S.time * 2 : 0),
        );
    }
  }
  function drawScene(pose, overview = false) {
    ensureScene();
    draw(scene.terrain);
    for (const chunk of scene.chunks) {
      const dx = chunk.center.x - pose.x,
        dz = chunk.center.z - pose.z;
      if (
        !overview &&
        (Math.hypot(dx, dz) > 480 ||
          dx * pose.tx + dz * pose.tz < -chunk.radius - 15)
      )
        continue;
      draw(chunk.road);
      if (!overview) draw(chunk.deco);
    }
  }
  function renderGarage() {
    const rect = $("garage-preview").getBoundingClientRect(),
      sx = WIDTH / innerWidth,
      sy = HEIGHT / innerHeight;
    const vw = Math.max(1, Math.floor(rect.width * sx)),
      vh = Math.max(1, Math.floor(rect.height * sy));
    gl.viewport(
      Math.floor(rect.left * sx),
      Math.floor(HEIGHT - rect.bottom * sy),
      vw,
      vh,
    );
    drawSky(1);
    gl.useProgram(prog);
    gl.uniform1f(loc.studio, 1);
    if (garageTab === "course") {
      ensureScene();
      const t = getTrack(S.courseId),
        b = t.bounds,
        cx = (b.minX + b.maxX) / 2,
        cz = (b.minZ + b.maxZ) / 2,
        r = Math.max(b.maxX - b.minX, b.maxZ - b.minZ) * 0.95;
      const eye = [
          cx + Math.sin(garageYaw + 0.6) * r,
          (b.maxY + b.minY) / 2 + r * 0.95,
          cz + Math.cos(garageYaw + 0.6) * r,
        ],
        view = mul(
          perspective((40 * Math.PI) / 180, vw / vh, 1, 3000),
          lookAt(eye, [cx, (b.maxY + b.minY) / 2, cz]),
        );
      gl.uniformMatrix4fv(loc.vp, false, view);
      gl.uniform3fv(loc.eye, eye);
      drawScene(trackPose(t, 0), true);
    } else {
      const spec = vehicle(S.model),
        distanceScale = Math.max(1, spec.length / 4.86, spec.roof / 1.5);
      const eye = [
          6.2 * distanceScale,
          3.1 * distanceScale,
          8.5 * distanceScale,
        ],
        view = mul(
          perspective(
            ((vw / vh > 1.5 ? 28 : 38) * Math.PI) / 180,
            vw / vh,
            0.1,
            110,
          ),
          lookAt(eye, [0, Math.max(0.65, spec.roof * 0.43), 0]),
        );
      gl.uniformMatrix4fv(loc.vp, false, view);
      gl.uniform3fv(loc.eye, eye);
      draw(studioFloor);
      draw(studioStage, 0, 0, 0, 0, 0, 0, 0, [distanceScale, 1, distanceScale]);
      drawVehicle(S, 0, 0.025, 0, garageYaw);
    }
    gl.viewport(0, 0, WIDTH, HEIGHT);
  }
  function drawSky(studio = 0) {
    gl.disable(gl.DEPTH_TEST);
    gl.depthMask(false);
    gl.useProgram(skyp);
    gl.uniform1f(skLoc.studio, studio);
    gl.bindBuffer(gl.ARRAY_BUFFER, skybuf);
    for (const a of [loc.p, loc.n, loc.c, loc.m])
      gl.disableVertexAttribArray(a);
    gl.enableVertexAttribArray(skLoc.p);
    gl.vertexAttribPointer(skLoc.p, 2, gl.FLOAT, false, 0, 0);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.depthMask(true);
    gl.enable(gl.DEPTH_TEST);
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
    if (!graphicsReady || document.hidden || gl.isContextLost()) return;
    try {
      const rawDt = S.prev ? (timestamp - S.prev) / 1000 : 0,
        dt = Math.min(0.2, rawDt);
      S.prev = timestamp;
      if (rawDt > 0) {
        frameMs += (Math.min(rawDt * 1000, 1000) - frameMs) * 0.03;
        slowSeconds =
          frameMs > 40
            ? slowSeconds + Math.min(rawDt, 1)
            : Math.max(0, slowSeconds - dt);
      }
      if (slowSeconds > 3 && pixelBudget > 480000) {
        pixelBudget = Math.max(480000, Math.round(pixelBudget * 0.75));
        slowSeconds = 0;
        qualityChanges++;
        D.event(
          "quality-reduced",
          "Sustained slow frames; pixel budget " + pixelBudget,
        );
      }
      resize();
      update(S.phase === "countdown" ? Math.min(rawDt, 0.5) : dt);
      applyAudio();
      drawCalls = 0;
      vertices = 0;
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      if (inGarage()) renderGarage();
      else {
        drawSky();
        gl.clear(gl.DEPTH_BUFFER_BIT);
        gl.useProgram(prog);
        const track = getTrack(S.courseId),
          pose = trackPose(track, S.z, S.offset);
        S.cameraOffset +=
          (S.offset - S.cameraOffset) * (1 - Math.exp(-dt * 3.9));
        const targetH = Math.max(
          vehicle(S.model).roof + 2.1,
          S.boost > 0 && !reducedMotion ? 3.15 : 3.45,
        );
        S.camH += (targetH - S.camH) * (1 - Math.exp(-dt * 2.4));
        const camera = cameraPose(
            track,
            S.z,
            S.cameraOffset,
            S.camH,
            Math.max(10.5, vehicle(S.model).length * 2),
          ),
          eye = camera.eye;
        const view = mul(
          perspective(
            ((62 + (S.boost > 0 && !reducedMotion ? 3 : 0)) * Math.PI) / 180,
            WIDTH / HEIGHT,
            0.2,
            520,
          ),
          lookAt(eye, camera.aim),
        );
        lastView = view;
        gl.uniform1f(loc.studio, 0);
        gl.uniformMatrix4fv(loc.vp, false, view);
        gl.uniform3fv(loc.eye, eye);
        drawScene(pose);
        drawEvents(pose);
        for (const r of ai) {
          const rp = trackPose(track, r.z, r.l);
          if (Math.hypot(rp.x - pose.x, rp.z - pose.z) < 240)
            carAt(r.z, r.l, r.c, r.wheelAngle, false);
        }
        carAt(S.z, S.offset, S.color, S.wheelAngle, true);
        if ($("toast").classList.contains("show") && timestamp > toastEnd)
          $("toast").classList.remove("show");
      }
      if (firstFrame || frames % 120 === 0) {
        const error = gl.getError();
        if (error !== gl.NO_ERROR) {
          if (gl.isContextLost()) return;
          throw Error("WebGL error " + error);
        }
        if (firstFrame) {
          firstFrame = false;
          D.event("running", "First frame rendered without WebGL errors.");
        }
      }
      frames++;
      schedule();
    } catch (e) {
      graphicsReady = false;
      stop();
      D.failure("render-failed", e.message);
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
  canvas.addEventListener("webglcontextlost", (e) => {
    e.preventDefault();
    graphicsReady = false;
    suspend();
    D.failure(
      "context-lost",
      "The browser lost the WebGL context. Cause unknown; waiting for restoration.",
    );
  });
  canvas.addEventListener("webglcontextrestored", () => {
    try {
      D.event("context-restoring");
      setupPrograms();
      for (const mesh of meshes) mesh.upload();
      resize();
      if (gl.getError() !== gl.NO_ERROR)
        throw Error("WebGL error while restoring resources");
      graphicsReady = true;
      firstFrame = true;
      $("unsupported").classList.remove("visible");
      S.prev = 0;
      D.event(
        "context-restored",
        "GPU resources rebuilt. Resume requires a tap.",
      );
      schedule();
    } catch (e) {
      graphicsReady = false;
      D.failure("context-restore-failed", e.message);
    }
  });
  if ("serviceWorker" in navigator && window.isSecureContext)
    window.addEventListener("load", () =>
      navigator.serviceWorker
        .register("./service-worker.js")
        .catch((e) => D.event("offline-unavailable", e.message)),
    );
  metric();
  graphicsReady = true;
  refreshGarage();
  schedule();
}
try {
  boot();
} catch (e) {
  D.failure("startup-failed", e.message);
}
