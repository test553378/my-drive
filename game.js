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
uniform float uYaw,uSpin,uRoll,uPitch;
varying mediump vec3 vWorld,vNorm,vColor;
varying mediump vec2 vSurface;
varying mediump float vMat,vFog;
void main(){
  float sn=sin(uSpin),cs=cos(uSpin),pr=cos(uPitch),ps=sin(uPitch);
  float rr=cos(uRoll),rs=sin(uRoll),y=cos(uYaw),s=sin(uYaw);
  vec3 p=vec3(aPos.x,aPos.y*cs-aPos.z*sn,aPos.y*sn+aPos.z*cs);
  p=vec3(p.x,p.y*pr-p.z*ps,p.y*ps+p.z*pr);
  p=vec3(p.x*rr-p.y*rs,p.x*rs+p.y*rr,p.z);
  p=vec3(y*p.x+s*p.z,p.y,-s*p.x+y*p.z)+uShift;
  vec3 n=vec3(aNorm.x,aNorm.y*cs-aNorm.z*sn,aNorm.y*sn+aNorm.z*cs);
  n=vec3(n.x,n.y*pr-n.z*ps,n.y*ps+n.z*pr);
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
  const setups = [defaultSetup(0), defaultSetup(1)];
  const S = createRace(setups[0].color, 0, setups[0].parts);
  let garageYaw = -0.24,
    previewDrag = null,
    lastView = null;
  let screenPosition = { player: [0, 0], laneCenter: [0, 0] };
  const inGarage = () => S.phase === "menu" || S.phase === "finish";
  const canCustomize = () => inGarage() && graphicsReady;
  function refreshGarage() {
    const vehicle = VEHICLES[S.model];
    $("garage-car-name").textContent = vehicle.name;
    $("garage-car-type").textContent = vehicle.label;
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
    vehicleMeshes(S);
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
    parts: { ...S.parts },
    screen: screenPosition,
    garage: inGarage(),
    garageYaw: Number(garageYaw.toFixed(2)),
    modelCacheSize: bodyCache.size,
    color: S.color,
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
    const { color, model, parts } = copySetup(S);
    Object.assign(S, createRace(color, model, parts), { phase: "countdown" });
    document.body.classList.remove("in-garage");
    $("modal").classList.remove("paused");
    canvas.setAttribute("aria-label", "3Dスーパーカーレース");
    ai.splice(0, ai.length, ...createRivals());
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
  ) {
    const geometry = vehicleMeshes(setup, detailed),
      spec = VEHICLES[setup.model];
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.depthMask(false);
    draw(shadow, x + 0.14, 0.018, z - 0.15, yaw);
    gl.depthMask(true);
    gl.disable(gl.BLEND);
    draw(geometry.body, x, y, z, yaw, 0, roll, pitch);
    if (geometry.aero) draw(geometry.aero, x, y, z, yaw, 0, roll, pitch);
    for (const wheelZ of spec.wheelZ)
      for (const side of [-1, 1]) {
        const xx = side * (setup.parts.body ? 1.075 : 0.965),
          zz = wheelZ;
        const wx = x + Math.cos(yaw) * xx + Math.sin(yaw) * zz,
          wz = z - Math.sin(yaw) * xx + Math.cos(yaw) * zz;
        draw(
          geometry.wheel,
          wx,
          y + 0.44,
          wz,
          yaw + (wheelZ > 0 ? steer : 0),
          wheelAngle,
        );
      }
  }
  function carAt(z, offset, col, wheelAngle, player) {
    const x = laneWorldX(z, offset),
      y =
        0.025 +
        (reducedMotion
          ? 0
          : player
            ? S.bounce * 0.5
            : 0.005 * Math.sin(z * 0.85));
    const yaw = Math.atan(slope(z)) - (player ? S.steerV * 0.014 : 0);
    if (player && lastView)
      screenPosition = {
        player: projectPoint(lastView, [x, 0.6, z]).slice(0, 2),
        laneCenter: projectPoint(lastView, [center(z), 0.6, z]).slice(0, 2),
      };
    const setup = player
      ? S
      : {
          model: col % 2,
          color: col,
          parts: { tyres: 1, body: col % 2, aero: col % 2 ? 1 : 2 },
        };
    drawVehicle(
      setup,
      x,
      y,
      z,
      yaw,
      wheelAngle,
      player && !reducedMotion ? S.roll : 0,
      player && !reducedMotion ? S.pitch : 0,
      player ? -S.steerV * 0.035 : 0,
      player,
    );
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
    const eye = [6.2, 3.1, 8.5],
      view = mul(
        perspective(
          ((vw / vh > 1.5 ? 28 : 38) * Math.PI) / 180,
          vw / vh,
          0.1,
          110,
        ),
        lookAt(eye, [0, 0.65, 0]),
      );
    gl.uniformMatrix4fv(loc.vp, false, view);
    gl.uniform3fv(loc.eye, eye);
    draw(studioFloor);
    draw(studioStage);
    drawVehicle(S, 0, 0.025, 0, garageYaw);
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
        const z = S.z,
          x = laneWorldX(z, S.offset);
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
        lastView = view;
        gl.uniform1f(loc.studio, 0);
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
  refreshGarage();
  schedule();
}
try {
  boot();
} catch (e) {
  D.failure("startup-failed", e.message);
}
