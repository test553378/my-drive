import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.js",
  timeout: 45000,
  expect: { timeout: 15000 },
  workers: 1,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: "http://127.0.0.1:8765/my-drive/",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "node tests/serve.js",
    url: "http://127.0.0.1:8765/my-drive/",
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: "chromium-tablet",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1080, height: 810 },
        deviceScaleFactor: 2,
        hasTouch: true,
        launchOptions: {
          args: [
            "--use-angle=swiftshader",
            "--enable-webgl",
            "--enable-unsafe-swiftshader",
          ],
        },
      },
    },
    {
      name: "webkit-tablet",
      use: {
        ...devices["iPad (gen 7)"],
        viewport: { width: 1080, height: 810 },
        deviceScaleFactor: 2,
        defaultBrowserType: "webkit",
      },
    },
  ],
});
