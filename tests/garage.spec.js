import { test, expect } from "@playwright/test";
const read = (page) => page.evaluate(() => window.raceDiagnostics.read());
async function ready(page) {
  await page.goto("./?quality=low");
  await expect
    .poll(async () => (await read(page)).runtime.frames)
    .toBeGreaterThan(2);
}
const part = (page, key, value) =>
  page.locator(`[data-part="${key}"][data-value="${value}"]`).click();
async function frameHash(page) {
  return page.evaluate(
    () =>
      new Promise((resolve) =>
        requestAnimationFrame(() => {
          const canvas = document.querySelector("canvas"),
            rect = document
              .querySelector("#garage-preview")
              .getBoundingClientRect(),
            gl = canvas.getContext("webgl");
          const sx = canvas.width / innerWidth,
            sy = canvas.height / innerHeight,
            w = Math.floor(rect.width * sx),
            h = Math.floor(rect.height * sy),
            buffer = new Uint8Array(w * h * 4);
          gl.readPixels(
            Math.floor(rect.left * sx),
            Math.floor(canvas.height - rect.bottom * sy),
            w,
            h,
            gl.RGBA,
            gl.UNSIGNED_BYTE,
            buffer,
          );
          let hash = 2166136261;
          for (let i = 0; i < buffer.length; i += 4) {
            hash = Math.imul(hash ^ buffer[i], 16777619);
            hash = Math.imul(hash ^ buffer[i + 1], 16777619);
            hash = Math.imul(hash ^ buffer[i + 2], 16777619);
          }
          resolve({ hash: hash >>> 0, error: gl.getError() });
        }),
      ),
  );
}

test("the actual 3D preview changes when tyres, body or aero are changed", async ({
  page,
}) => {
  await ready(page);
  const hashes = [];
  hashes.push((await frameHash(page)).hash);
  for (const [key, value] of [
    ["tyres", 1],
    ["body", 1],
    ["aero", 0],
    ["aero", 2],
  ]) {
    await part(page, key, value);
    await expect(
      page.locator(`[data-part="${key}"][data-value="${value}"]`),
    ).toHaveAttribute("aria-pressed", "true");
    const result = await frameHash(page);
    expect(result.error).toBe(0);
    hashes.push(result.hash);
  }
  expect(new Set(hashes).size).toBe(hashes.length);
  expect((await read(page)).runtime.meshBytes).toBeLessThan(24000000);
  await page.screenshot({ path: test.info().outputPath("garage-custom.png") });
});

test("each vehicle remembers its own parts and paint, and the chosen setup reaches the race", async ({
  page,
}) => {
  await ready(page);
  await page.locator('[data-color="2"]').click();
  await part(page, "tyres", 1);
  await part(page, "body", 1);
  await part(page, "aero", 2);
  await page.locator('[data-model="1"]').click();
  expect((await read(page)).runtime.parts).toEqual({
    tyres: 0,
    body: 0,
    aero: 1,
  });
  expect((await read(page)).runtime.color).toBe(1);
  await part(page, "aero", 0);
  await page.locator('[data-color="3"]').click();
  await page.locator('[data-model="0"]').click();
  let r = (await read(page)).runtime;
  expect(r.color).toBe(2);
  expect(r.parts).toEqual({ tyres: 1, body: 1, aero: 2 });
  await page.locator("#start").click();
  await expect.poll(async () => (await read(page)).runtime.phase).toBe("race");
  r = (await read(page)).runtime;
  expect(r.model).toBe("NOVA R");
  expect(r.color).toBe(2);
  expect(r.parts).toEqual({ tyres: 1, body: 1, aero: 2 });
  await expect(page.locator("#unsupported")).not.toBeVisible();
});

test("the garage preview rotates with a drag and keyboard without steering the car", async ({
  page,
}) => {
  await ready(page);
  const initial = (await read(page)).runtime.garageYaw,
    box = await page.locator("#garage-preview").boundingBox();
  await page.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.5);
  await page.mouse.down();
  await page.mouse.move(
    box.x + box.width * 0.5 + 70,
    box.y + box.height * 0.5,
    { steps: 5 },
  );
  await page.mouse.up();
  expect((await read(page)).runtime.garageYaw).toBeGreaterThan(initial + 0.4);
  await page.locator("#garage-preview").focus();
  const before = (await read(page)).runtime.garageYaw;
  await page.keyboard.press("ArrowLeft");
  expect((await read(page)).runtime.garageYaw).toBeLessThan(before);
  expect((await read(page)).runtime.steering).toEqual([false, false]);
});

test("all 24 combinations render without errors and retain a bounded mesh cache", async ({
  page,
}) => {
  test.setTimeout(180000);
  await ready(page);
  for (const model of [0, 1]) {
    await page.locator(`[data-model="${model}"]`).click();
    for (const tyres of [0, 1])
      for (const body of [0, 1])
        for (const aero of [0, 1, 2]) {
          await part(page, "tyres", tyres);
          await part(page, "body", body);
          await part(page, "aero", aero);
          const result = await frameHash(page);
          expect(result.error).toBe(0);
          expect((await read(page)).runtime.parts).toEqual({
            tyres,
            body,
            aero,
          });
        }
  }
  expect((await read(page)).runtime.modelCacheSize).toBeLessThanOrEqual(20);
  expect((await read(page)).runtime.meshBytes).toBeLessThan(24000000);
});

test("iPad 9 landscape and portrait keep every selection and start button reachable", async ({
  page,
}) => {
  await ready(page);
  for (const [width, height] of [
    [1080, 810],
    [810, 1080],
  ]) {
    await page.setViewportSize({ width, height });
    for (const selector of [
      '[data-model="1"]',
      '[data-part="tyres"][data-value="1"]',
      '[data-part="body"][data-value="1"]',
      '[data-part="aero"][data-value="2"]',
    ]) {
      await page.locator(selector).click();
      await expect(page.locator(selector)).toBeInViewport();
    }
    await expect(page.locator("#start")).toBeInViewport();
    const box = await page.locator("#garage-preview").boundingBox();
    expect(box.width).toBeGreaterThan(300);
    expect(box.height).toBeGreaterThan(150);
    await page.screenshot({
      path: test.info().outputPath(`garage-${width}.png`),
    });
  }
});
