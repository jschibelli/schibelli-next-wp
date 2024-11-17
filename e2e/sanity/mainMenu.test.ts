import { BrowserContext, expect, Page, test } from "@playwright/test";
import basePlaywrightConfig from "../../playwright.config";
import { goToHomePage, goToAboutPage, goToBlogPage, goToContactPage } from "@/test-pages/mainMenuPages";

test.describe("Main Menu: ", () => {
    const baseURL = basePlaywrightConfig.use?.baseURL || "/";
    let options = {};

    test.beforeEach(async ({ page }: { page: Page }) => {
      await page.goto(baseURL);
    });

    test("Main Menu: Home", async ({ page }: { page: Page }) => {
      await goToHomePage({ page, options });
      expect(page.url()).toBe(`${baseURL}`);
    });

    test("Main Menu: About", async ({ page }: { page: Page }) => {
      await goToAboutPage({ page, options });
      expect(page.url()).toBe(`${baseURL}pages/about-me`);
    });

    test("Main Menu: Blog", async ({ page }: { page: Page }) => {
      await goToBlogPage({ page, options });
      expect(page.url()).toBe(`${baseURL}posts`);
    });

    test("Main Menu: Contact", async ({ page }: { page: Page }) => {
      await goToContactPage({ page, options });
      expect(page.url()).toBe(`${baseURL}contact`);
    });

  });