import { BrowserContextOptions, defineConfig, devices } from "@playwright/test";

const baseURL =
  process.env.TARGET_ENV === "production"
    ? "https://www.schibelli.com/"
    : "https://www.schibelli.com/";

const testSuite =
  process.env.TEST_SUITE === "allTests"
    ? "e2e/"
    : "e2e/"
  process.env.TEST_SUITE === "sanity"
    ? "e2e/sanity"
    : "e2e/sanity";

const isCi = process.env.CI === "true";
const isDevelopment = process.env.DEVELOPMENT === "true";

// Setting process.env.RUN_SKIPPED to false if environment variable not available ot not set to true
process.env.RUN_SKIPPED = process.env.RUN_SKIPPED === "true" ? "true" : "false";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<BrowserContextOptions>({
  testDir: testSuite,
  /* Maximum time one test can run for. */
  timeout: 2 * 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 15000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: isCi
    ? [["junit", { outputFile: "e2e-junit-results.xml" }]]
    : "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: isCi ? "retain-on-failure" : "on",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: `chromium - ${baseURL}`,
      use: {
        screenshot: isCi ? "only-on-failure" : "on",
        video: isCi ? "retain-on-failure" : "on",
        headless: isDevelopment ? false : false,
        ...devices["Desktop Chrome"],
        channel: "chromium",
        viewport: { width: 1366, height: 768 },
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
  },
});
