import {
  LAP,
  TOTAL,
  ROAD,
  TAU,
  center,
  slope,
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
      : 1100000;
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
  const vs = `attribute vec3 aPos;attribute vec3 aNorm;attribute vec3 aColor;attribute float aMat;
uniform mat4 uVP;uniform vec3 uShift;uniform float uYaw,uSpin,uRoll,uPitch;uniform vec3 uEye;
varying mediump vec3 vWorld,vNorm,vColor;varying mediump float vMat,vFog;
void main(){
vec3 p=aPos;float sn=sin(uSpin),cs=cos(uSpin);p=vec3(p.x,p.y*cs-p.z*sn,p.y*sn+p.z*cs);
float pr=cos(uPitch),ps=sin(uPitch);p=vec3(p.x,p.y*pr-p.z*ps,p.y*ps+p.z*pr);
float rr=cos(uRoll),rs=sin(uRoll);p=vec3(p.x*rr-p.y*rs,p.x*rs+p.y*rr,p.z);
float y=cos(uYaw),s=sin(uYaw);p=vec3(y*p.x+s*p.z,p.y,-s*p.x+y*p.z)+uShift;
vec3 n=vec3(aNorm.x,aNorm.y*cs-aNorm.z*sn,aNorm.y*sn+aNorm.z*cs);n=vec3(n.x,n.y*pr-n.z*ps,n.y*ps+n.z*pr);n=vec3(n.x*rr-n.y*rs,n.x*rs+n.y*rr,n.z);n=normalize(vec3(y*n.x+s*n.z,n.y,-s*n.x+y*n.z));
vWorld=p-uEye;vNorm=n;vColor=aColor;vMat=aMat;vFog=clamp((distance(p,uEye)-125.0)/270.0,0.0,1.0);
gl_Position=uVP*vec4(p,1.0);
}`;
  const fs = `precision mediump float;
varying mediump vec3 vWorld,vNorm,vColor;varying mediump float vMat,vFog;
float rnd(vec2 x){return fract(sin(dot(mod(x,32.0),vec2(12.9898,7.233)))*437.5);}
void main(){vec3 norm=normalize(vNorm);vec3 sun=normalize(vec3(-0.52,0.87,0.48));vec3 eye=normalize(-vWorld);
float dif=max(dot(norm,sun),0.0);float light=.55+.47*dif;vec3 color=vColor*light;
if(vMat>0.5&&vMat<1.5){float n=rnd(floor(vWorld.xz*7.0))*0.060+rnd(floor(vWorld.xz*1.9))*0.045;color=vColor*(.81+n+dif*.26);}
if(vMat>1.5&&vMat<2.5){vec3 h=normalize(sun+eye);float spec=pow(max(dot(norm,h),0.0),34.0);float fres=pow(1.0-max(dot(norm,eye),0.0),3.0);color= vColor*(.55+.62*dif)+vec3(.98,.93,.81)*spec*.75+vec3(.25,.42,.62)*fres*.34;}
if(vMat>2.5&&vMat<3.5){vec3 h=normalize(sun+eye);float ref=pow(max(dot(norm,h),0.0),19.0);float fres=pow(1.0-max(dot(norm,eye),0.0),2.3);color=mix(vColor,vec3(.57,.76,.91),fres*.55)+vec3(.96,.95,.85)*ref*.72;}
if(vMat>3.5&&vMat<4.5){color=vColor*1.18;}
if(vMat>4.5&&vMat<5.5){float tex=rnd(floor(vWorld.xz*1.4))*.10;color=vColor*(.92+tex+dif*.16);}
color=mix(color,vec3(.66,.79,.85),vFog*.96);color=pow(max(color,vec3(0.0)),vec3(.92));gl_FragColor=vec4(color,1.0);
}`;
  const skyvs = `attribute vec2 p;varying mediump vec2 uv;void main(){uv=p*.5+.5;gl_Position=vec4(p,0.,1.);}`;
  const skyfs = `precision mediump float;varying mediump vec2 uv;uniform float tm;void main(){float h=smoothstep(.08,.96,uv.y);vec3 c=mix(vec3(.87,.91,.88),vec3(.12,.36,.65),pow(h,.7));float sun=1.0-smoothstep(.025,.34,length((uv-vec2(.79,.81))*vec2(1.7,1.0)));c+=vec3(.24,.17,.10)*sun;float haze=1.0-smoothstep(.05,.37,abs(uv.y-.29));c=mix(c,vec3(.82,.89,.86),haze*.29);gl_FragColor=vec4(c,1.0);}`;
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
    };
    skLoc = { p: gl.getAttribLocation(skyp, "p") };
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
    gl.clearColor(0.52, 0.74, 0.85, 1);
  }
  try {
    setupPrograms();
  } catch (e) {
    if (!D.read().stage.endsWith("failed"))
      D.failure("gpu-setup-failed", e.message);
    return;
  }
  const meshes = [];
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
      meshes.push(this);
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
      for (const x of [a, b, c]) this.data.push(...x, ...n, ...col, mat);
      return this;
    }
    quad(a, b, c, d, col, mat = 0) {
      return this.tri(a, b, c, col, mat).tri(a, c, d, col, mat);
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
        this.quad(p, q, qt, pt, col, mat);
        this.tri([x, y + h, z], pt, qt, col, mat);
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
    upload() {
      this.buffer = gl.createBuffer();
      if (!this.buffer) throw Error("Mesh buffer allocation failed");
      gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
      gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);
    }
    done() {
      this.count = this.data.length / 10;
      this.vertices = new Float32Array(this.data);
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
    gl.uniform1f(loc.yaw, yaw);
    gl.uniform1f(loc.spin, spin);
    gl.uniform1f(loc.roll, roll);
    gl.uniform1f(loc.pitch, pitch);
    gl.drawArrays(gl.TRIANGLES, 0, m.count);
    drawCalls++;
    vertices += m.count;
  }
  function noise(n) {
    let f = Math.sin(n * 127.12 + 24.03) * 46411.35;
    return f - Math.floor(f);
  }
  D.event("mesh-build");
  const CHUNK = 100,
    chunks = Array.from({ length: LAP / CHUNK }, (_, i) => ({
      start: i * CHUNK,
      road: new Mesh(),
      deco: new Mesh(),
    }));
  let road = chunks[0].road,
    deco = chunks[0].deco;
  for (let z = 0; z < LAP; z += 5) {
    road = chunks[Math.floor(z / CHUNK)].road;
    const zz = z + 5,
      x = center(z),
      xx = center(zz);
    let grass = C(73, 110, 65);
    road.quad(
      [x - 245, -0.12, z],
      [xx - 245, -0.12, zz],
      [xx + 245, -0.12, zz],
      [x + 245, -0.12, z],
      C(
        81 + Math.floor(noise(z) * 10),
        119 + Math.floor(noise(z + 3) * 13),
        73,
      ),
      5,
    );
    road.quad(
      [x - ROAD - 3.1, -0.03, z],
      [xx - ROAD - 3.1, -0.03, zz],
      [xx + ROAD + 3.1, -0.03, zz],
      [x + ROAD + 3.1, -0.03, z],
      C(114, 113, 101),
      1,
    );
    road.quad(
      [x - ROAD, 0, z],
      [xx - ROAD, 0, zz],
      [xx + ROAD, 0, zz],
      [x + ROAD, 0, z],
      C(49, 54, 59),
      1,
    );
    for (const s of [-1, 1]) {
      const a = x + s * (ROAD - 0.24),
        b = xx + s * (ROAD - 0.24);
      road.quad(
        [a - s * 0.075, 0.029, z],
        [b - s * 0.075, 0.029, zz],
        [b + s * 0.075, 0.029, zz],
        [a + s * 0.075, 0.029, z],
        C(234, 234, 221),
        0,
      );
      let edge = x + s * (ROAD + 0.66),
        edge2 = xx + s * (ROAD + 0.66),
        stripe =
          Math.floor(z / 8) % 2 === 0 ? C(238, 240, 227) : C(204, 42, 40);
      road.quad(
        [edge - s * 0.66, 0.032, z],
        [edge2 - s * 0.66, 0.032, zz],
        [edge2 + s * 0.66, 0.032, zz],
        [edge + s * 0.66, 0.032, z],
        stripe,
      );
    }
    if (z % 40 === 0) {
      for (const l of [-3.28, 3.28]) {
        const b1 = x + l,
          b2 = center(z + 14) + l;
        road.quad(
          [b1 - 0.07, 0.025, z],
          [b2 - 0.07, 0.025, z + 14],
          [b2 + 0.07, 0.025, z + 14],
          [b1 + 0.07, 0.025, z],
          C(220, 225, 221),
        );
      }
    }
    if (z % 85 === 0)
      for (const l of [-2.5, 2.0]) {
        let v = x + l;
        road.quad(
          [v - 0.16, 0.03, z],
          [v - 0.26, 0.03, z + 19],
          [v - 0.18, 0.03, z + 19],
          [v - 0.08, 0.03, z],
          C(30, 31, 33),
        );
      }
  }
  road = chunks[0].road;
  // Starting grid and checkered finish line.
  for (let row = 0; row < 4; row++)
    for (let col = 0; col < 12; col++) {
      let z = row * 1.35,
        x = center(z) - 9.0 + col * 1.5;
      road.quad(
        [x, 0.046, z],
        [x, 0.046, z + 1.35],
        [x + 1.5, 0.046, z + 1.35],
        [x + 1.5, 0.046, z],
        (row + col) % 2 ? C(34, 36, 40) : C(244, 246, 245),
      );
    }
  // Guardrails, fences, grandstand, pit buildings and scenery.
  for (let z = 0; z < LAP; z += 12) {
    deco = chunks[Math.floor(z / CHUNK)].deco;
    for (const s of [-1, 1]) {
      const x = center(z) + s * 14.6,
        x2 = center(z + 12) + s * 14.6;
      deco.box(x, 0.8, z, 0.22, 1.5, 0.25, C(151, 160, 169));
      for (let y of [0.86, 1.33])
        deco.quad(
          [x, y, z],
          [x2, y, z + 12],
          [x2, y + 0.18, z + 12],
          [x, y + 0.18, z],
          C(194, 205, 210),
        );
      if (z % 48 === 0) {
        deco.box(x, 2.48, z, 0.13, 2.1, 0.13, C(162, 176, 175));
        deco.quad(
          [x, 1.55, z],
          [x2, 1.55, z + 12],
          [x2, 3.2, z + 12],
          [x, 3.2, z],
          C(124, 152, 152),
        );
      }
    }
  }
  for (let i = 0; i < 78; i++) {
    const z = 9 + i * 17.6,
      which = noise(i * 7 + 3);
    deco = chunks[Math.floor(z / CHUNK)].deco;
    for (let s of [-1, 1]) {
      if (noise(i * 12 + s * 8) < 0.22) continue;
      const x = center(z) + s * (26 + noise(i * 21 + s * 33) * 70),
        height = 4.0 + noise(i * 13 + 17) * 5;
      deco.cylinder(x, 0, z, 0.41, height * 0.66, C(100, 77, 61), 0, 7);
      let foliage = [C(56, 95, 64), C(65, 111, 69), C(85, 121, 70)][
        Math.floor(noise(i * 43 + s) * 3)
      ];
      deco.sphere(
        x,
        height * 0.68,
        z,
        2.4 + which,
        2.65 + which,
        2.5,
        foliage,
        0,
        9,
        6,
      );
      deco.sphere(
        x - 1.2,
        height * 0.51,
        z - 0.6,
        1.7,
        2,
        1.8,
        shade(foliage, 0.85),
        0,
        8,
        4,
      );
    }
  }
  for (let i = 0; i < 32; i++) {
    const z = 32 + i * 43,
      sign = i % 2 ? 1 : -1;
    deco = chunks[Math.floor(z / CHUNK)].deco;
    let x = center(z) + sign * (105 + noise(i + 77) * 70),
      h = 20 + noise(i * 8) * 29;
    deco.box(
      x,
      h * 0.5 - 3,
      z,
      14 + noise(i + 3) * 12,
      h,
      13,
      C(
        168 + Math.floor(noise(i) * 22),
        178 + Math.floor(noise(i + 10) * 14),
        172,
      ),
      0,
    );
    deco.box(x, h + 0.9 - 3, z, 16, 1.8, 15, C(118, 139, 148));
    for (let fl = 1; fl < 4; fl++)
      for (let w = -1; w <= 1; w++)
        deco.box(
          x + w * 4,
          (h * fl) / 5,
          z + (sign > 0 ? 7 : -7),
          2,
          1.6,
          0.11,
          C(70, 113, 147),
          3,
        );
  }
  // Grandstand at one long straight section.
  for (let z = 410; z < 700; z += 12) {
    deco = chunks[Math.floor(z / CHUNK)].deco;
    let x = center(z) - 29;
    deco.box(x, 2.4, z, 22, 2.6, 12, C(104, 109, 112));
    for (let r = 0; r < 6; r++) {
      deco.box(x - r * 0.98, 3.8 + r * 0.5, z, 12, 0.5, 11, C(96, 113, 126));
      for (let j = 0; j < 4; j++) {
        let col = [
          C(219, 85, 77),
          C(245, 202, 104),
          C(67, 127, 179),
          C(224, 223, 204),
        ][(j + r + Math.floor(z)) % 4];
        deco.box(
          x - 3.5 + j * 2,
          4.3 + r * 0.5,
          z + (j % 2 ? 2 : -2),
          0.63,
          0.7,
          0.8,
          col,
        );
      }
    }
  }
  // Trackside advertising walls and timing gantries, stylized original graphics.
  for (const z of [150, 790, 1180]) {
    deco = chunks[Math.floor(z / CHUNK)].deco;
    let x = center(z);
    for (let s of [-1, 1])
      deco.box(x + s * 13.0, 4.6, z, 0.65, 9.2, 0.8, C(100, 114, 125));
    deco.box(x, 8.55, z, 27, 3.1, 1.2, C(23, 39, 54), 2);
    deco.box(x, 8.6, z + 0.64, 16, 1.4, 0.15, C(232, 77, 50), 3);
  }
  for (let i = 0; i < 35; i++) {
    let z = i * 39 + 12;
    deco = chunks[Math.floor(z / CHUNK)].deco;
    let x = center(z) + (i % 2 ? 21 : -21);
    deco.cylinder(x, 0, z, 0.15, 7.2, C(150, 166, 178), 0, 6);
    deco.box(x - (i % 2 ? 1 : -1), 7.0, z, 2.3, 0.35, 0.4, C(190, 199, 207));
    deco.box(x - (i % 2 ? 2.05 : -2.05), 6.7, z, 0.5, 0.2, 0.8, LAMP, 3);
  }
  for (const chunk of chunks) {
    chunk.road.done();
    chunk.deco.done();
  }
  // A world-space supercar with detailed wheel arches, glazed cockpit and rear wing.
  function supercar(paint, sport = false) {
    let m = new Mesh(),
      dark = shade(paint, 0.7),
      bright = shade(paint, 1.14);
    // Floor and sculpted side air intakes.
    m.box(0, 0.36, 0, 2.45, 0.39, 5.1, C(27, 31, 37));
    const slices = [
      [-2.72, 1.03, 0.69],
      [-2.35, 1.13, 0.83],
      [-1.34, 1.16, 0.93],
      [0.55, 1.15, 0.89],
      [1.45, 1.05, 0.79],
      [2.53, 0.99, 0.66],
      [2.66, 0.9, 0.57],
    ];
    for (let i = 0; i < slices.length - 1; i++) {
      const [z, w, y] = slices[i],
        [zz, ww, yy] = slices[i + 1];
      const section = (width, height, depth) => [
        [-width, height - 0.08, depth],
        [-width * 0.72, height + 0.035, depth],
        [width * 0.72, height + 0.035, depth],
        [width, height - 0.08, depth],
      ];
      const frontSection = section(w, y, z),
        rearSection = section(ww, yy, zz);
      for (let strip = 0; strip < 3; strip++)
        m.quad(
          frontSection[strip],
          rearSection[strip],
          rearSection[strip + 1],
          frontSection[strip + 1],
          strip === 1 ? bright : paint,
          2,
        );
      for (const s of [-1, 1])
        m.quad(
          [s * w, 0.3, z],
          [s * w, y - 0.08, z],
          [s * ww, yy - 0.08, zz],
          [s * ww, 0.3, zz],
          s === 1 ? paint : dark,
          2,
        );
    }
    for (const [z, w, y] of [slices[0], slices[slices.length - 1]])
      m.quad([-w, 0.3, z], [w, 0.3, z], [w, y, z], [-w, y, z], paint, 2);
    // Raised wheel arches have an open tyre cutout, with a curved painted shoulder.
    for (const s of [-1, 1])
      for (const z of [-1.67, 1.63]) {
        const point = (x, r, a) => [
          s * x,
          0.47 + r * Math.sin(a),
          z + r * Math.cos(a),
        ];
        for (let i = 0; i < 12; i++) {
          const a = (i * Math.PI) / 12,
            b = ((i + 1) * Math.PI) / 12;
          m.quad(
            point(1.42, 0.59, a),
            point(1.42, 0.72, a),
            point(1.42, 0.72, b),
            point(1.42, 0.59, b),
            paint,
            2,
          );
          m.quad(
            point(1.42, 0.72, a),
            point(1.02, 0.63, a),
            point(1.02, 0.63, b),
            point(1.42, 0.72, b),
            bright,
            2,
          );
        }
      }
    for (const s of [-1, 1])
      m.box(s * 0.3, 0.915, 1.47, 0.09, 0.025, 0.73, shade(paint, 0.58), 2);
    // Two original silhouettes: a low mid-engine car and a taller sports coupe.
    let rear = [-0.78, 0.99, -1.64],
      rearR = [0.78, 0.99, -1.64],
      roofRear = [-0.72, 1.68, -0.79],
      roofRearR = [0.72, 1.68, -0.79],
      roofFront = [-0.7, 1.71, 0.28],
      roofFrontR = [0.7, 1.71, 0.28],
      front = [-1.02, 0.88, 1.25],
      frontR = [1.02, 0.88, 1.25];
    if (sport) {
      for (const v of [roofRear, roofRearR, roofFront, roofFrontR]) {
        v[1] += 0.14;
        v[2] -= 0.28;
      }
      front[2] -= 0.25;
      frontR[2] -= 0.25;
    }
    m.quad(rear, rearR, roofRearR, roofRear, GLASS, 3);
    m.quad(roofRear, roofRearR, roofFrontR, roofFront, paint, 2);
    m.quad(roofFront, roofFrontR, frontR, front, GLASS, 3);
    m.quad(rear, roofRear, roofFront, front, C(18, 51, 71), 3);
    m.quad(rearR, frontR, roofFrontR, roofRearR, C(24, 59, 83), 3);
    // Frame detail and engine deck.
    m.box(
      0,
      sport ? 1.84 : 1.7,
      sport ? -0.58 : -0.3,
      1.48,
      0.07,
      1.02,
      shade(paint, 0.7),
      2,
    );
    for (const s of [-1, 1]) {
      m.box(s * 1.14, 0.52, -0.18, 0.12, 0.16, 2.65, C(17, 24, 27));
      m.box(s * 1.09, 0.34, 1.15, 0.2, 0.18, 2.2, C(20, 25, 30));
      m.box(s * 1.08, 0.79, -1.25, 0.17, 0.07, 1.25, shade(paint, 0.48), 2);
      m.box(s * 0.95, 1.04, 0.84, 0.26, 0.11, 0.48, C(28, 40, 46), 2);
      // Mirrors and mirror stems.
      m.box(s * 1.18, 1.06, 0.45, 0.39, 0.16, 0.36, C(24, 31, 35), 2);
      m.box(s * 1.35, 1.19, 0.47, 0.32, 0.16, 0.31, paint, 2);
      // Front projector LEDs and tail lights.
      m.box(s * 0.76, 0.72, 2.64, 0.55, 0.08, 0.035, C(242, 241, 221), 4);
      m.box(s * 0.76, 0.61, 2.65, 0.55, 0.085, 0.035, C(229, 240, 247), 4);
      m.box(s * 0.72, 0.7, -2.74, 0.69, 0.14, 0.04, C(241, 38, 35), 4);
      m.box(s * 0.72, 0.79, -2.76, 0.58, 0.035, 0.05, C(250, 95, 55), 4);
      // Door creases, lower skirt, rear vent.
      m.box(s * 1.18, 0.54, -0.3, 0.055, 0.055, 1.75, shade(paint, 0.4));
      m.box(s * 1.15, 0.59, -1.35, 0.085, 0.24, 0.63, K);
    }
    // Bonnet / aerodynamics / wing.
    m.box(0, 0.32, 2.56, 2.34, 0.17, 0.3, C(21, 28, 35));
    m.box(0, 0.38, -2.64, 2.26, 0.2, 0.28, C(19, 25, 31));
    m.box(0, 0.72, 2.68, 1.28, 0.26, 0.05, C(24, 30, 36));
    for (let s of [-1, 1]) {
      if (!sport) m.box(s * 0.91, 1.23, -2.45, 0.13, 0.91, 0.15, C(24, 30, 38));
      m.box(s * 0.52, 0.45, -2.78, 0.29, 0.16, 0.14, C(14, 16, 20));
    }
    if (sport) {
      m.box(0, 0.91, -2.4, 2.22, 0.1, 0.27, paint, 2);
      m.box(0, 0.84, 1.87, 1.5, 0.08, 0.32, shade(paint, 0.55), 2);
    } else {
      m.box(0, 1.66, -2.45, 2.6, 0.12, 0.44, C(22, 32, 39), 2);
      m.box(0, 1.49, -2.45, 2.7, 0.09, 0.48, shade(paint, 0.62), 2);
    }
    for (let i = 0; i < (sport ? 0 : 6); i++)
      m.box(-0.47 + i * 0.19, 0.97, -1.88, 0.07, 0.05, 0.65, C(29, 34, 40));
    // Number plate in original style.
    m.box(0, 0.69, -2.77, 0.7, 0.2, 0.045, C(239, 238, 220));
    return m.done();
  }
  const bodies = [
    colors.map((paint) => supercar(paint)),
    colors.map((paint) => supercar(paint, true)),
  ];
  function makeWheel() {
    let m = new Mesh(),
      N = 22,
      r = 0.57,
      hw = 0.29;
    for (let j = 0; j < N; j++) {
      let a = (j * TAU) / N,
        b = ((j + 1) * TAU) / N,
        c = Math.cos(a),
        s = Math.sin(a),
        cb = Math.cos(b),
        sb = Math.sin(b);
      m.quad(
        [-hw, r * c, r * s],
        [hw, r * c, r * s],
        [hw, r * cb, r * sb],
        [-hw, r * cb, r * sb],
        C(15 + (j % 3), 19 + (j % 2), 22),
      );
      for (const side of [-1, 1]) {
        let x = side * hw;
        m.quad(
          [x, r * c, r * s],
          [x, r * cb, r * sb],
          [x, 0.37 * cb, 0.37 * sb],
          [x, 0.37 * c, 0.37 * s],
          C(27, 29, 32),
        );
        m.quad(
          [x, 0.37 * c, 0.37 * s],
          [x, 0.37 * cb, 0.37 * sb],
          [x, 0.25 * cb, 0.25 * sb],
          [x, 0.25 * c, 0.25 * s],
          C(166, 174, 177),
          2,
        );
      }
    }
    for (let i = 0; i < 7; i++) {
      let a = (i * TAU) / 7;
      for (const side of [-1, 1]) {
        const xx = side * (hw + 0.015);
        m.quad(
          [xx, -0.055, -0.055],
          [xx, 0.055, 0.055],
          [xx, 0.36 * Math.cos(a + 0.17), 0.36 * Math.sin(a + 0.17)],
          [xx, 0.36 * Math.cos(a - 0.17), 0.36 * Math.sin(a - 0.17)],
          C(205, 217, 218),
          2,
        );
      }
    }
    for (const side of [-1, 1])
      m.box(side * (hw + 0.02), 0, 0, 0.05, 0.23, 0.23, C(75, 85, 90));
    return m.done();
  }
  const wheel = makeWheel();
  function makeShadow() {
    let m = new Mesh();
    const rings = [
      { r: 0, c: C(18, 25, 25) },
      { r: 0.65, c: C(26, 34, 34) },
      { r: 1, c: C(39, 46, 43) },
    ];
    for (let j = 0; j < 2; j++)
      for (let i = 0; i < 20; i++) {
        let a = (i * TAU) / 20,
          b = ((i + 1) * TAU) / 20,
          ra = rings[j].r,
          rb = rings[j + 1].r;
        let p = (r, ang) => [
          Math.cos(ang) * 1.75 * r,
          0,
          Math.sin(ang) * 3.25 * r,
        ];
        m.quad(p(ra, a), p(ra, b), p(rb, b), p(rb, a), rings[j].c);
      }
    return m.done();
  }
  const shadow = makeShadow();
  const ai = createRivals();
  function perspective(fov, ar, n, f) {
    const o = new Float32Array(16),
      v = 1 / Math.tan(fov / 2);
    o[0] = v / ar;
    o[5] = v;
    o[10] = (f + n) / (n - f);
    o[11] = -1;
    o[14] = (2 * f * n) / (n - f);
    return o;
  }
  function lookAt(e, t) {
    const norm = (a) => {
        let v = Math.hypot(...a) || 1;
        return a.map((x) => x / v);
      },
      cross = (a, b) => [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0],
      ],
      sub = (a, b) => a.map((x, i) => x - b[i]),
      dot = (a, b) => a.reduce((v, x, i) => v + x * b[i], 0);
    let f = norm(sub(t, e)),
      s = norm(cross(f, [0, 1, 0])),
      u = cross(s, f);
    return new Float32Array([
      s[0],
      u[0],
      -f[0],
      0,
      s[1],
      u[1],
      -f[1],
      0,
      s[2],
      u[2],
      -f[2],
      0,
      -dot(s, e),
      -dot(u, e),
      dot(f, e),
      1,
    ]);
  }
  function mul(a, b) {
    const o = new Float32Array(16);
    for (let c = 0; c < 4; c++)
      for (let r = 0; r < 4; r++)
        for (let k = 0; k < 4; k++) o[c * 4 + r] += a[k * 4 + r] * b[c * 4 + k];
    return o;
  }
  let WIDTH = 0,
    HEIGHT = 0;
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 1.5),
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
  const S = createRace();
  D.observe(() => ({
    phase: S.phase,
    distance: Math.round(S.z),
    offset: Number(S.offset.toFixed(2)),
    speed: Number(S.v.toFixed(1)),
    steering: [S.steerL, S.steerR],
    model: S.model === 0 ? "NOVA R" : "AERO S",
    color: S.color,
    frames,
    drawCalls,
    vertices,
    frameMs: Number(frameMs.toFixed(1)),
    pixelBudget,
    qualityChanges,
    bufferSize: [WIDTH, HEIGHT],
    meshBytes: meshes.reduce((n, m) => n + m.vertices.byteLength, 0),
    contextLost: gl.isContextLost(),
  }));
  resize();
  let audio = null,
    engine = null,
    mute = true;
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
      }
      audio.resume().catch((e) => D.event("audio-unavailable", e.message));
    } catch (e) {
      D.event("audio-unavailable", e.message);
      mute = true;
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
  function applyAudio() {
    if (!engine) return;
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
    S.lap = Math.min(2, 1 + Math.floor(S.z / LAP));
    S.rank = 1 + ai.filter((r) => r.z > S.z).length;
    $("lap").textContent = `${S.lap} / 2`;
    $("rank").textContent = `${S.rank} / 5`;
    $("time").textContent = S.time.toFixed(1) + "s";
    $("speed").textContent = String(Math.round(S.v * 3.1)).padStart(3, "0");
    $("progressbar").style.width = Math.min(100, (100 * S.z) / TOTAL) + "%";
    $("boostmeter").style.width = S.charge + "%";
    $("boost").disabled = S.charge < 60 || S.phase !== "race";
  }
  let toastEnd = 0;
  function toast(msg) {
    $("toast").textContent = msg;
    $("toast").classList.add("show");
    toastEnd = performance.now() + 1250;
  }
  function clearControls() {
    S.steerL = S.steerR = false;
    for (const id of ["left", "right"]) $(id).classList.remove("is-down");
  }
  function reset() {
    const { color, model } = S;
    Object.assign(S, createRace(color, model), { phase: "countdown" });
    ai.splice(0, ai.length, ...createRivals());
    $("modal").classList.add("hidden");
    $("countdown").classList.add("visible");
    $("pause").textContent = "Ⅱ";
    metric();
    initAudio();
  }
  function finish() {
    S.phase = "finish";
    clearControls();
    $("modal").classList.remove("hidden");
    $("kicker").textContent = "🏁 FINISH";
    $("title").innerHTML =
      S.rank === 1 ? "🏆 <em>WINNER!</em>" : "🏁 <em>FINISH!</em>";
    $("subtitle").textContent =
      `${S.rank}い / 5だい　 ${S.time.toFixed(1)}びょう`;
    $("choose").textContent = "すきな くるまを えらんでね";
    $("start").textContent = "↻ もういちど レース";
    $("instructions").textContent = "さいごまで はしれたね！";
    beep(770);
  }
  let pausedPhase = "race";
  function pause() {
    if (S.phase === "race" || S.phase === "countdown") {
      pausedPhase = S.phase;
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
      if (event === "finish") finish();
    }
    if (S.phase === "countdown")
      $("countdown").textContent =
        S.count > 1 ? Math.min(3, Math.ceil(S.count)) : "GO!";
    if (S.phase === "race") $("countdown").classList.remove("visible");
    metric();
  }
  function carAt(z, offset, col, wheelAngle, player) {
    const x = center(z) + offset,
      y =
        0.14 +
        (reducedMotion ? 0 : player ? S.bounce : 0.01 * Math.sin(z * 0.85)),
      yaw = Math.atan(slope(z)) + (player ? S.steerV * 0.014 : 0),
      roll = player && !reducedMotion ? S.roll : 0,
      pitch = player && !reducedMotion ? S.pitch : 0;
    draw(shadow, x, 0.067, z, yaw);
    draw(bodies[player ? S.model : col % 2][col], x, y, z, yaw, 0, roll, pitch);
    for (const wheelZ of [-1.67, 1.63])
      for (const side of [-1, 1]) {
        const xx = side * 1.19,
          zz = wheelZ,
          wx = x + Math.cos(yaw) * xx + Math.sin(yaw) * zz,
          wz = z - Math.sin(yaw) * xx + Math.cos(yaw) * zz;
        const steer = player && wheelZ > 0 ? S.steerV * 0.035 : 0;
        draw(wheel, wx, y + 0.47, wz, yaw + steer, wheelAngle);
      }
  }
  function drawSky() {
    gl.disable(gl.DEPTH_TEST);
    gl.depthMask(false);
    gl.useProgram(skyp);
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
        frameMs += (Math.min(rawDt * 1000, 200) - frameMs) * 0.03;
        slowSeconds =
          frameMs > 40 ? slowSeconds + dt : Math.max(0, slowSeconds - dt);
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
      update(dt);
      applyAudio();
      drawCalls = 0;
      vertices = 0;
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      drawSky();
      gl.clear(gl.DEPTH_BUFFER_BIT);
      gl.useProgram(prog);
      const z = S.z,
        x = center(z) + S.offset;
      S.camX += (x - S.camX) * (1 - Math.exp(-dt * 3.9));
      // Longitudinal lag would add speed/response metres to the chase distance.
      // Speed itself is already smooth, so maintain a constant viewing distance.
      S.camZ = z;
      const targetH = S.boost > 0 && !reducedMotion ? 3.15 : 3.45;
      S.camH += (targetH - S.camH) * (1 - Math.exp(-dt * 2.4));
      const eye = [
          S.camX + (reducedMotion ? 0 : S.roll),
          S.camH,
          S.camZ - 10.5,
        ],
        aim = [center(z + 38) * 0.64 + x * 0.36, 1.1, z + 34];
      const view = mul(
        perspective(
          ((62 + (S.boost > 0 && !reducedMotion ? 3 : 0)) * Math.PI) / 180,
          WIDTH / HEIGHT,
          0.2,
          435,
        ),
        lookAt(eye, aim),
      );
      gl.uniformMatrix4fv(loc.vp, false, view);
      gl.uniform3fv(loc.eye, new Float32Array(eye));
      const step = Math.floor(z / LAP);
      for (let i = step - 1; i <= step + 1; i++)
        for (const chunk of chunks) {
          const start = i * LAP + chunk.start;
          // Scenery may extend 15m beyond its segment. Preserve it at the frustum edge.
          if (start + CHUNK < z - 65 || start > z + 455) continue;
          draw(chunk.road, 0, 0, i * LAP);
          draw(chunk.deco, 0, 0, i * LAP);
        }
      for (const r of ai)
        if (r.z > z - 35 && r.z < z + 240)
          carAt(r.z, r.l, r.c, r.wheelAngle, false);
      carAt(z, S.offset, S.color, S.wheelAngle, true);
      if ($("toast").classList.contains("show") && timestamp > toastEnd)
        $("toast").classList.remove("show");
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
  for (const b of document.querySelectorAll(".swatch"))
    b.addEventListener("click", () => {
      S.color = Number(b.dataset.color);
      document
        .querySelectorAll(".swatch")
        .forEach((x) => x.classList.toggle("selected", x === b));
    });
  for (const button of document.querySelectorAll("[data-model]")) {
    button.addEventListener("click", () => {
      S.model = Number(button.dataset.model);
      document
        .querySelectorAll("[data-model]")
        .forEach((b) => b.setAttribute("aria-pressed", String(b === button)));
    });
  }
  $("start").addEventListener("click", () => {
    if (!graphicsReady) return;
    if (S.phase === "pause") resume();
    else reset();
  });
  $("pause").addEventListener("click", pause);
  function control(id, field) {
    let el = $(id),
      down = (e) => {
        e.preventDefault();
        if (S.phase !== "race") return;
        S[field] = true;
        el.classList.add("is-down");
        try {
          el.setPointerCapture(e.pointerId);
        } catch (_) {}
      },
      up = (e) => {
        e.preventDefault();
        S[field] = false;
        el.classList.remove("is-down");
      };
    el.addEventListener("pointerdown", down);
    for (let ev of ["pointerup", "pointercancel", "lostpointercapture"])
      el.addEventListener(ev, up);
  }
  control("left", "steerL");
  control("right", "steerR");
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
    if (["ArrowLeft", "ArrowRight", " ", "Escape"].includes(e.key)) {
      // Space/Enter on menu buttons retain normal keyboard activation.
      if (S.phase !== "race" && S.phase !== "countdown" && e.key !== "Escape")
        return;
      e.preventDefault();
      if (e.repeat && e.key === "Escape") return;
      if (S.phase === "race") {
        if (e.key === "ArrowLeft") S.steerL = true;
        if (e.key === "ArrowRight") S.steerR = true;
        if (e.key === " ") boost();
      }
      if (e.key === "Escape") pause();
    }
  });
  addEventListener("keyup", (e) => {
    if (e.key === "ArrowLeft") S.steerL = false;
    if (e.key === "ArrowRight") S.steerR = false;
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
  schedule();
}
try {
  boot();
} catch (e) {
  D.failure("startup-failed", e.message);
}
