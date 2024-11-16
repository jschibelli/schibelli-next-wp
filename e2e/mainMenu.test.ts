import { BrowserContext, Page, test } from "@playwright/test";
import basePlaywrightConfig from "../playwright.config";
import { allMarkets, getUserTestData, prodUsers } from "@/constants/testData";
import { productionSiteMode } from "../constants/constants";
import { getSiteMode } from "@/test-pages/mainMenuPages";

allMarkets.forEach((market) => {
  test.describe.serial("Main Menu Test", () => {
    const baseURL = basePlaywrightConfig.use?.baseURL || "/";

    let options = getUserTestData({ market });

    test.beforeEach(async ({ page } : { page: Page }) => {
      await page.goto(baseURL);
      const siteMode = await getSiteMode({ page, options });

      if (siteMode === productionSiteMode) {
        options = getUserTestData(prodUsers.userOne, market);
      }
      options["siteMode"] = siteMode;
    });

