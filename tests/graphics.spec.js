import { test, expect } from "@playwright/test";
const read = (page) => page.evaluate(() => window.graphicsStudy.read());
async function ready(page, quality = "standard") {
  await page.goto(`graphics-lab/?quality=${quality}&adaptive=off`);
  await expect
    .poll(async () => (await read(page)).ready, { timeout: 120000 })
    .toBe(true);
  await expect
    .poll(async () => (await read(page)).frame, { timeout: 30000 })
    .toBeGreaterThan(2);
}
async function pixels(page) {
  return page.evaluate(
    () =>
      new Promise((resolve) =>
        requestAnimationFrame(() => {
          const canvas = document.querySelector("#scene"),
            gl = canvas.getContext("webgl2"),
            data = new Uint8Array(canvas.width * canvas.height * 4);
          gl.readPixels(
            0,
            0,
            canvas.width,
            canvas.height,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            data,
          );
          let red = 0,
            variety = new Set();
          for (let i = 0; i < data.length; i += 32) {
            if (data[i] > data[i + 1] * 1.7 && data[i] > 70) red++;
            variety.add(
              `${data[i] >> 4},${data[i + 1] >> 4},${data[i + 2] >> 4}`,
            );
          }
          resolve({ red, colors: variety.size, error: gl.getError() });
        }),
      ),
  );
}
test("external GLB, PBR road and HDR lighting render locally and fit both tablet orientations", async ({
  page,
}) => {
  test.setTimeout(180000);
  const errors = [],
    urls = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("request", (r) => urls.push(r.url()));
  await ready(page);
  const p = await pixels(page);
  expect(p.error).toBe(0);
  expect(p.red).toBeGreaterThan(100);
  expect(p.colors).toBeGreaterThan(50);
  const eye = (await read(page)).camera.eye;
  await page.mouse.move(650, 420);
  await page.mouse.down();
  await page.mouse.move(760, 440, { steps: 5 });
  await page.mouse.up();
  await expect.poll(async () => (await read(page)).camera.eye).not.toEqual(eye);
  const r = await read(page);
  expect(r.wheels).toHaveLength(4);
  expect(r.carTriangles).toBeGreaterThan(90000);
  expect(r.assetBytes).toBeLessThan(20000000);
  for (const viewport of [
    { width: 1080, height: 810 },
    { width: 810, height: 1080 },
  ]) {
    await page.setViewportSize(viewport);
    await expect(page.locator("#drive")).toBeInViewport();
    await expect(page.locator('[data-quality="high"]')).toBeInViewport();
    await expect
      .poll(async () => {
        const b = (await read(page)).buffer;
        return b[0] * b[1];
      })
      .toBeLessThanOrEqual(950000);
    await page.screenshot({
      path: test.info().outputPath(`study-${viewport.width}.png`),
    });
  }
  expect(
    urls.filter(
      (u) => /^https?:/.test(u) && !u.startsWith("http://127.0.0.1:8765/"),
    ),
  ).toEqual([]);
  await page.locator("#compare").click();
  await expect(page.locator("#comparison")).toBeVisible();
  for (const image of await page.locator("#comparison img").all())
    await expect
      .poll(() => image.evaluate((i) => i.naturalWidth))
      .toBeGreaterThan(100);
  await page.locator('[data-close="comparison"]').click();
  expect(errors).toEqual([]);
  await test.info().attach("metrics", {
    body: JSON.stringify(await read(page), null, 2),
    contentType: "application/json",
  });
});
test("the real controls drive in 3D, roll and steer wheels, hold position after release and brake to rest", async ({
  page,
}) => {
  test.setTimeout(180000);
  await ready(page, "low");
  await page.locator("#drive").click();
  await page.keyboard.down("ArrowRight");
  await expect
    .poll(async () => (await read(page)).offset, { timeout: 30000 })
    .toBeGreaterThan(1.6);
  await page.keyboard.up("ArrowRight");
  const before = await read(page);
  await page.waitForTimeout(10500);
  const after = await read(page);
  expect(after.distance).toBeGreaterThan(before.distance);
  expect(after.offset).toBeCloseTo(before.offset, 5);
  expect(after.wheels[0].angle).not.toBe(before.wheels[0].angle);
  expect(after.wheels[0].steering).toBeCloseTo(0, 8);
  expect(after.screen.player[0]).toBeGreaterThan(after.screen.center[0]);
  await page
    .locator("#left")
    .dispatchEvent("pointerdown", { pointerId: 31, pointerType: "touch" });
  await expect
    .poll(async () => (await read(page)).offset, { timeout: 20000 })
    .toBeLessThan(before.offset - 1);
  await page
    .locator("#left")
    .dispatchEvent("pointercancel", { pointerId: 31, pointerType: "touch" });
  expect((await read(page)).steerL).toBe(false);
  await page
    .locator("#brake")
    .dispatchEvent("pointerdown", { pointerId: 32, pointerType: "touch" });
  await expect
    .poll(async () => (await read(page)).speed, { timeout: 30000 })
    .toBe(0);
  await page
    .locator("#brake")
    .dispatchEvent("pointercancel", { pointerId: 32, pointerType: "touch" });
  await page.locator("#details").click();
  const paused = (await read(page)).distance;
  await page.waitForTimeout(400);
  expect((await read(page)).distance).toBe(paused);
  await page.locator('[data-close="measure"]').click();
  await expect(page.locator("#resume")).toBeVisible();
  await page.locator("#resume").click();
  await expect
    .poll(async () => (await read(page)).distance, { timeout: 30000 })
    .toBeGreaterThan(paused);
});
test("quality switches use both real models and release old GPU resources", async ({
  page,
}) => {
  test.setTimeout(240000);
  await ready(page, "low");
  let checkpoint;
  for (const q of ["high", "standard", "low", "high", "standard"]) {
    await page.locator(`[data-quality="${q}"]`).click();
    await expect(page.locator("#loading")).not.toBeVisible({ timeout: 120000 });
    await expect.poll(async () => (await read(page)).quality).toBe(q);
    const r = await read(page);
    expect(r.wheels).toHaveLength(4);
    expect(r.carTriangles).toBe(q === "high" ? 213195 : 100756);
    expect(r.buffer[0] * r.buffer[1]).toBeLessThanOrEqual(
      q === "high" ? 1450000 : q === "standard" ? 950000 : 480000,
    );
    if (q === "standard") {
      if (checkpoint) {
        expect(r.render.geometries).toBeLessThanOrEqual(
          checkpoint.geometries + 1,
        );
        expect(r.render.textures).toBeLessThanOrEqual(checkpoint.textures + 2);
      }
      checkpoint = r.render;
    }
  }
  expect((await pixels(page)).error).toBe(0);
  await test.info().attach("quality-memory", {
    body: JSON.stringify(await read(page), null, 2),
    contentType: "application/json",
  });
});
test("a denied WebGL2 context explains the failure without crashing", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      return type === "webgl2" ? null : original.call(this, type, ...args);
    };
  });
  await page.goto("graphics-lab/");
  await expect(page.locator("#failure")).toBeVisible();
  await expect(page.locator("#error-label")).toContainText(
    "context-unavailable",
  );
  expect((await read(page)).ready).toBe(false);
  await page.locator("#failure-details").click();
  await expect(page.locator("#diagnostic-log")).toContainText(
    "context-unavailable",
  );
});
test("a failed real texture request identifies the file and HTTP status without a silent substitute", async ({
  page,
}) => {
  test.setTimeout(90000);
  await page.route("**/assets/asphalt-normal.jpg", (route) =>
    route.fulfill({ status: 404, body: "not found" }),
  );
  await page.goto("graphics-lab/");
  await expect(page.locator("#failure")).toBeVisible({ timeout: 45000 });
  await expect(page.locator("#error-label")).toContainText(
    "asphalt-normal.jpg: HTTP 404",
  );
  expect((await read(page)).ready).toBe(false);
});
test("a failed application script also produces a readable load error", async ({
  page,
}) => {
  let requests = 0;
  await page.route("**/app.bundle.js", (route) => {
    requests++;
    return route.fulfill({ status: 503, body: "Unavailable" });
  });
  await page.goto("graphics-lab/");
  await expect(page.locator("#failure")).toBeVisible();
  await expect(page.locator("#error-label")).toContainText(
    "script-load-failed: app.bundle.js",
  );
  await page.locator("#retry").click();
  await expect.poll(() => requests).toBe(2);
});
test("context restoration rebuilds HDR lighting and requires an explicit resume", async ({
  page,
}) => {
  test.setTimeout(180000);
  await ready(page, "low");
  await page.locator("#drive").click();
  for (let cycle = 0; cycle < 2; cycle++) {
    await page.evaluate(() => {
      const gl = document.querySelector("#scene").getContext("webgl2");
      window.__lose = gl.getExtension("WEBGL_lose_context");
      if (!window.__lose) throw Error("Test requires WEBGL_lose_context");
      window.__lose.loseContext();
    });
    await expect
      .poll(
        async () =>
          (await read(page)).events.filter((e) => e.code === "context-lost")
            .length,
      )
      .toBe(cycle + 1);
    const stopped = (await read(page)).distance;
    await page.waitForTimeout(600);
    await page.evaluate(() => window.__lose.restoreContext());
    await expect
      .poll(async () => (await read(page)).ready, { timeout: 60000 })
      .toBe(true);
    expect((await read(page)).paused).toBe(true);
    expect((await read(page)).distance).toBe(stopped);
    await expect(page.locator("#resume")).toBeVisible();
    await page.locator("#resume").click();
    await expect
      .poll(async () => (await read(page)).distance, { timeout: 30000 })
      .toBeGreaterThan(stopped);
    const p = await pixels(page);
    expect(p.error).toBe(0);
    expect(p.red).toBeGreaterThan(100);
    expect(
      (await read(page)).events.some((e) => e.code === "context-restored"),
    ).toBe(true);
  }
});

test("a shader failure preserves the real driver log in diagnostics", async ({
  page,
}) => {
  test.setTimeout(90000);
  await page.addInitScript(() => {
    const get = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      const gl = get.call(this, type, ...args);
      if (type === "webgl2" && gl && !gl.__shaderTest) {
        gl.__shaderTest = true;
        const source = gl.shaderSource.bind(gl);
        gl.shaderSource = (shader, text) =>
          source(
            shader,
            gl.getShaderParameter(shader, gl.SHADER_TYPE) === gl.FRAGMENT_SHADER
              ? "invalid_test_fragment_shader"
              : text,
          );
      }
      return gl;
    };
  });
  await page.goto("graphics-lab/?quality=low");
  await expect(page.locator("#failure")).toBeVisible({ timeout: 45000 });
  await expect(page.locator("#error-label")).toContainText("shader-failed");
  const errors = (await read(page)).events.filter(
    (e) => e.code === "shader-failed",
  );
  expect(errors.length).toBeGreaterThan(0);
  expect(errors.some((e) => /error|ERROR|syntax/i.test(e.detail))).toBe(true);
  expect((await read(page)).ready).toBe(false);
});
