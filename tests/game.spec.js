import { test, expect } from "@playwright/test";
const read = (page) => page.evaluate(() => window.raceDiagnostics.read());
async function ready(page, path = "./") {
  await page.goto(path);
  await expect
    .poll(async () => (await read(page)).runtime.frames)
    .toBeGreaterThan(2);
  await expect(page.locator("#unsupported")).not.toBeVisible();
}
async function start(page) {
  await ready(page);
  await page.locator("#start").click();
  await expect.poll(async () => (await read(page)).runtime.phase).toBe("race");
}

test("real shaders link, draw a varied 3D scene, and use only same-origin assets", async ({
  page,
}) => {
  const errors = [],
    requests = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("request", (r) => requests.push(r.url()));
  await ready(page);
  const r = await read(page);
  expect(r.events.some((e) => e.stage === "running")).toBeTruthy();
  expect(r.graphics.actualContext.antialias).toBe(false);
  expect(r.runtime.drawCalls).toBeGreaterThan(5);
  expect(r.runtime.vertices).toBeLessThan(200000);
  const pixels = await page.evaluate(
    () =>
      new Promise((resolve) =>
        requestAnimationFrame(() => {
          const c = document.querySelector("canvas"),
            gl = c.getContext("webgl"),
            data = new Uint8Array(4),
            colors = new Set();
          for (let y = 0.1; y < 1; y += 0.15)
            for (let x = 0.1; x < 1; x += 0.15) {
              gl.readPixels(
                Math.floor(c.width * x),
                Math.floor(c.height * y),
                1,
                1,
                gl.RGBA,
                gl.UNSIGNED_BYTE,
                data,
              );
              colors.add([...data].join(","));
            }
          resolve({ colors: colors.size, error: gl.getError() });
        }),
      ),
  );
  expect(pixels.error).toBe(0);
  expect(pixels.colors).toBeGreaterThan(8);
  expect(errors).toEqual([]);
  expect(
    requests.every((url) => new URL(url).origin === "http://127.0.0.1:8765"),
  ).toBeTruthy();
  await page.screenshot({ path: test.info().outputPath("menu.png") });
});

test("the original uniform precision mismatch fails to link and explicit matching precision succeeds", async ({
  page,
}) => {
  await ready(page);
  const result = await page.evaluate(() => {
    const gl = document.querySelector("canvas").getContext("webgl");
    function link(precision) {
      const shaders = [
        [
          gl.VERTEX_SHADER,
          `uniform ${precision} vec3 uEye;void main(){gl_Position=vec4(uEye,1.);}`,
        ],
        [
          gl.FRAGMENT_SHADER,
          `precision mediump float;uniform ${precision} vec3 uEye;void main(){gl_FragColor=vec4(uEye,1.);}`,
        ],
      ].map(([kind, source]) => {
        const s = gl.createShader(kind);
        gl.shaderSource(s, source);
        gl.compileShader(s);
        return s;
      });
      const p = gl.createProgram();
      shaders.forEach((s) => gl.attachShader(p, s));
      gl.linkProgram(p);
      const result = {
        ok: gl.getProgramParameter(p, gl.LINK_STATUS),
        log: gl.getProgramInfoLog(p),
      };
      gl.deleteProgram(p);
      shaders.forEach((s) => gl.deleteShader(s));
      return result;
    }
    return { original: link(""), fixed: link("mediump") };
  });
  expect(result.original.ok).toBe(false);
  expect(result.original.log).toMatch(/precision/i);
  expect(result.fixed.ok).toBe(true);
});

test("the optional fragment mediump fallback still compiles and renders", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const source = WebGLRenderingContext.prototype.shaderSource;
    WebGLRenderingContext.prototype.shaderSource = function (shader, code) {
      const fallback = code.replace(
        /#ifdef GL_FRAGMENT_PRECISION_HIGH\s+precision highp float;\s+#else\s+precision mediump float;\s+#endif/,
        "precision mediump float;",
      );
      if (fallback !== code) window.__forcedMediump = true;
      return source.call(this, shader, fallback);
    };
  });
  await ready(page);
  expect(await page.evaluate(() => window.__forcedMediump)).toBe(true);
  expect(
    (await read(page)).events.some((e) => e.stage === "running"),
  ).toBeTruthy();
});

test("both original vehicle shapes and all paint choices render and survive race start", async ({
  page,
}) => {
  await ready(page);
  for (const model of ["0", "1"]) {
    await page.locator(`[data-model="${model}"]`).click();
    await expect(page.locator(`[data-model="${model}"]`)).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    for (const color of ["0", "1", "2", "3"]) {
      await page.locator(`[data-color="${color}"]`).click();
      expect((await read(page)).runtime.color).toBe(Number(color));
    }
    expect((await read(page)).runtime.model).toBe(
      model === "0" ? "NOVA R" : "AERO S",
    );
  }
  await page.locator("#start").click();
  await expect.poll(async () => (await read(page)).runtime.phase).toBe("race");
  expect((await read(page)).runtime.model).toBe("AERO S");
  expect((await read(page)).runtime.color).toBe(3);
});

test("large controls steer, release on cancellation, hold position and allow turbo", async ({
  page,
}) => {
  await start(page);
  const right = page.locator("#right");
  const box = await right.boundingBox();
  expect(box.width).toBeGreaterThanOrEqual(88);
  expect(box.height).toBeGreaterThanOrEqual(70);
  await right.dispatchEvent("pointerdown", {
    pointerId: 11,
    pointerType: "touch",
  });
  await expect
    .poll(async () => (await read(page)).runtime.offset)
    .toBeGreaterThan(2);
  let projected = (await read(page)).runtime.screen;
  expect(projected.player[0]).toBeGreaterThan(projected.laneCenter[0]);
  await right.dispatchEvent("pointercancel", {
    pointerId: 11,
    pointerType: "touch",
  });
  await expect(right).not.toHaveClass(/is-down/);
  const held = (await read(page)).runtime.offset;
  await page.waitForTimeout(700);
  expect(Math.abs((await read(page)).runtime.offset - held)).toBeLessThan(0.02);
  await page
    .locator("#left")
    .dispatchEvent("pointerdown", { pointerId: 13, pointerType: "touch" });
  await expect
    .poll(async () => (await read(page)).runtime.offset)
    .toBeLessThan(-2);
  projected = (await read(page)).runtime.screen;
  expect(projected.player[0]).toBeLessThan(projected.laneCenter[0]);
  await page
    .locator("#left")
    .dispatchEvent("pointerup", { pointerId: 13, pointerType: "touch" });
  await page.locator("#boost").dispatchEvent("pointerdown", { pointerId: 12 });
  await expect(page.locator("#boost")).toBeDisabled();
  await expect(page.locator("#toast")).toContainText("ターボ");
  await page.screenshot({ path: test.info().outputPath("race.png") });
});

test("pause during countdown and racing preserves progress; blur clears held controls", async ({
  page,
}) => {
  await ready(page);
  await page.locator("#start").click();
  await page.locator("#pause").click();
  expect((await read(page)).runtime.phase).toBe("pause");
  await page.locator("#start").click();
  await expect.poll(async () => (await read(page)).runtime.phase).toBe("race");
  await page.keyboard.down("ArrowLeft");
  await page.evaluate(() => dispatchEvent(new Event("blur")));
  expect((await read(page)).runtime.steering).toEqual([false, false]);
  const distance = (await read(page)).runtime.distance;
  await page.waitForTimeout(250);
  expect((await read(page)).runtime.distance).toBe(distance);
  await page.keyboard.up("ArrowLeft");
  await page.locator("#start").click();
  await expect
    .poll(async () => (await read(page)).runtime.distance)
    .toBeGreaterThan(distance);
});

test("landscape, portrait and low quality keep the drawing buffer within budget", async ({
  page,
}) => {
  await ready(page, "./?quality=low");
  for (const [width, height] of [
    [1366, 768],
    [768, 1024],
    [375, 667],
  ]) {
    await page.setViewportSize({ width, height });
    await expect
      .poll(async () => {
        const r = await read(page);
        const [w, h] = r.runtime.bufferSize;
        return Math.abs(w / h - width / height) < 0.01 && w * h <= 480000;
      })
      .toBeTruthy();
    await expect(page.locator("#start")).toBeInViewport();
  }
});

test("diagnostics pause play, remain local, and can be saved explicitly", async ({
  page,
}) => {
  await start(page);
  await page.locator("#help").click();
  expect((await read(page)).runtime.phase).toBe("pause");
  const text = await page.locator("#diagnostic-report").inputValue();
  expect(JSON.parse(text).graphics.webgl).toContain("WebGL");
  expect(text).not.toMatch(/userAgent|token|cookie|deviceId/i);
  await page.locator("#diagnostic-report").focus();
  await page.keyboard.press("Shift+Tab");
  await expect(page.locator("#close-diagnostics")).toBeFocused();
  const download = page.waitForEvent("download");
  await page.locator("#save-report").click();
  expect((await download).suggestedFilename()).toBe(
    "grand-race-diagnostics.json",
  );
  await page.keyboard.press("Escape");
  await expect(page.locator("#diagnostics")).not.toBeVisible();
});

test("a denied WebGL context produces a precise diagnostic without a JS crash", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const get = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      if (type === "webgl" || type === "experimental-webgl") return null;
      return get.call(this, type, ...args);
    };
  });
  await page.goto("./");
  await expect(page.locator("#unsupported")).toBeVisible();
  expect((await read(page)).stage).toBe("context-unavailable");
  await page.locator("#error-help").click();
  await expect(page.locator("#diagnostics")).toBeVisible();
});

for (const stage of ["compile", "link"])
  test(`a ${stage} failure records the actual shader stage and log`, async ({
    page,
  }) => {
    await page.addInitScript((stage) => {
      const P = WebGLRenderingContext.prototype;
      if (stage === "compile") {
        const get = P.getShaderParameter;
        P.getShaderParameter = function (s, param) {
          return param === this.COMPILE_STATUS
            ? false
            : get.call(this, s, param);
        };
        P.getShaderInfoLog = () => "injected compiler failure";
      } else {
        const get = P.getProgramParameter;
        P.getProgramParameter = function (s, param) {
          return param === this.LINK_STATUS ? false : get.call(this, s, param);
        };
        P.getProgramInfoLog = () => "injected linker failure";
      }
    }, stage);
    await page.goto("./");
    await expect(page.locator("#unsupported")).toBeVisible();
    const r = await read(page);
    expect(r.stage).toBe(
      stage === "compile" ? "shader-compile-failed" : "program-link-failed",
    );
    expect(r.events.at(-1).detail).toContain(
      stage === "compile"
        ? "world vertex: injected compiler failure"
        : "world: injected linker failure",
    );
  });

test("context loss stops racing; restoration rebuilds resources and requires explicit resume", async ({
  page,
}) => {
  await ready(page);
  await page.locator('[data-part="tyres"][data-value="1"]').click();
  await page.locator('[data-part="body"][data-value="1"]').click();
  await page.locator('[data-part="aero"][data-value="2"]').click();
  await page.locator("#start").click();
  await expect.poll(async () => (await read(page)).runtime.phase).toBe("race");
  const supported = await page.evaluate(() => {
    const gl = document.querySelector("canvas").getContext("webgl");
    window.__lose = gl.getExtension("WEBGL_lose_context");
    return !!window.__lose;
  });
  test.skip(
    !supported,
    "WEBGL_lose_context not available in this browser; verify on device.",
  );
  await page.evaluate(() => window.__lose.loseContext());
  await expect(page.locator("#unsupported")).toBeVisible();
  const lost = await read(page);
  expect(lost.stage).toBe("context-lost");
  expect(lost.runtime.phase).toBe("pause");
  const distance = lost.runtime.distance;
  await page.waitForTimeout(250);
  expect((await read(page)).runtime.distance).toBe(distance);
  await page.evaluate(() => window.__lose.restoreContext());
  await expect(page.locator("#unsupported")).not.toBeVisible();
  await expect
    .poll(async () => (await read(page)).runtime.frames)
    .toBeGreaterThan(lost.runtime.frames + 2);
  expect((await read(page)).runtime.phase).toBe("pause");
  expect((await read(page)).runtime.parts).toEqual({
    tyres: 1,
    body: 1,
    aero: 2,
  });
  await page.locator("#start").click();
  await expect
    .poll(async () => (await read(page)).runtime.distance)
    .toBeGreaterThan(distance);
});

async function cached(page) {
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
    if (!navigator.serviceWorker.controller)
      await new Promise((resolve) =>
        navigator.serviceWorker.addEventListener("controllerchange", resolve, {
          once: true,
        }),
      );
  });
}
test("the complete versioned app shell is cached under the GitHub Pages subdirectory", async ({
  page,
}) => {
  await ready(page);
  await cached(page);
  const files = await page.evaluate(async () => {
    const cache = await caches.open("bokuno-grand-race-v6-20261107b");
    const keys = await cache.keys();
    return Promise.all(
      keys.map(async (r) => ({
        path: new URL(r.url).pathname,
        ok: (await cache.match(r)).ok,
        bytes: (await (await cache.match(r)).text()).length,
      })),
    );
  });
  expect(files.map((r) => r.path).sort()).toEqual(
    [
      "index.html",
      "style.css",
      "diagnostics.js",
      "game.js",
      "driving.js",
      "input.js",
      "vehicle-config.js",
      "tracks.js",
      "world.js",
      "race-config.js",
      "collisions.js",
      "hazards.js",
      "damage.js",
      "pedestrians.js",
      "race-metrics.js",
      "actors.js",
      "camera.js",
      "garage.js",
      "vehicles.js",
      "manifest.webmanifest",
      "icon.svg",
    ]
      .map((f) => "/my-drive/" + f)
      .sort(),
  );
  expect(files.every((f) => f.ok && f.bytes > 0)).toBeTruthy();
});
test("the app shell renders after a genuine offline navigation", async ({
  page,
  context,
  browserName,
}) => {
  test.skip(
    browserName === "webkit" && process.platform === "linux",
    "Linux Playwright WebKit reports an internal error for offline navigation even with a minimal unrelated cached-page fixture. See docs/VERIFICATION.md; verify offline Safari on device.",
  );
  await ready(page);
  await cached(page);
  await context.setOffline(true);
  await ready(page, "./?quality=low");
  await context.setOffline(false);
});

test("visibility changes stop animation and preserve a held-input race until the child resumes", async ({
  page,
}) => {
  await start(page);
  await page
    .locator("#left")
    .dispatchEvent("pointerdown", { pointerId: 41, pointerType: "touch" });
  await page.evaluate(() => {
    window.__hidden = true;
    Object.defineProperty(document, "hidden", {
      configurable: true,
      get: () => window.__hidden,
    });
    document.dispatchEvent(new Event("visibilitychange"));
  });
  const hidden = await read(page);
  expect(hidden.runtime.phase).toBe("pause");
  expect(hidden.runtime.steering).toEqual([false, false]);
  await page.waitForTimeout(350);
  expect((await read(page)).runtime.frames).toBe(hidden.runtime.frames);
  await page.evaluate(() => {
    window.__hidden = false;
    document.dispatchEvent(new Event("visibilitychange"));
  });
  await expect
    .poll(async () => (await read(page)).runtime.frames)
    .toBeGreaterThan(hidden.runtime.frames);
  expect((await read(page)).runtime.distance).toBe(hidden.runtime.distance);
  await page.locator("#start").click();
  await expect
    .poll(async () => (await read(page)).runtime.distance)
    .toBeGreaterThan(hidden.runtime.distance);
});

test("a full two-lap race renders through the lap seams, finishes and restarts", async ({
  page,
}) => {
  test.setTimeout(220000);
  await start(page);
  await expect
    .poll(async () => (await read(page)).runtime.phase, {
      timeout: 180000,
      intervals: [2000],
    })
    .toBe("finish");
  await expect(page.locator("#subtitle")).toContainText("1い / 5だい");
  await expect(page.locator("#lap")).toHaveText("2 / 2");
  await expect(page.locator("#progressbar")).toHaveCSS(
    "width",
    await page
      .locator(".progress")
      .evaluate((el) => getComputedStyle(el).width),
  );
  await expect(page.locator("#unsupported")).not.toBeVisible();
  expect((await read(page)).runtime.distance).toBe(2800);
  await page.screenshot({ path: test.info().outputPath("finish.png") });
  await page.locator("#start").click();
  expect((await read(page)).runtime.phase).toBe("countdown");
  expect((await read(page)).runtime.distance).toBe(0);
});
