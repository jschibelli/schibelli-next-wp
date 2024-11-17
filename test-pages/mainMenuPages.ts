import { type Page, type Expect, expect } from "@playwright/test";
import helpers from "../infra";
import { productionSiteMode, VALIDATION_TEXT } from "../constants/constants";
import { FOOTER, HEADINGS } from "../constants/selectors";

const { testHelpers } = helpers;
export const getSiteMode = async ({
  page,
  options,
}: {
  page: Page;
  options: any;
}) => {
  if (process.env.TARGET_ENV !== "production") {
    await testHelpers.wait(page);
    // return await testHelpers.getText(page, FOOTER.siteMode);
  } else {
    return productionSiteMode;
  }
};

export const goToHomePage = async ({
  page,
  options,
}: {
  page: Page;
  options: any;
}) => {

  // Click on Home
  console.log("Clicked on Home");
  await page.click('text="Home"');

  // Wait for hero heading and verify title is CTA Text
  console.log("Waiting for hero heading");
  await testHelpers.wait(page);
  expect(await testHelpers.getText(page, HEADINGS.hero)).toBe( VALIDATION_TEXT(options).homepageHero);
};

export const goToAboutPage = async ({
  page,
  options,
}: {
  page: Page;
  options: any;
}) => {

  // Click on About
  console.log("Clicked on About");
  await page.click('text="About"');

  // Wait for hero heading and verifiy title is "About"
  console.log("Waiting for hero heading");
  await testHelpers.wait(page);
  expect(await testHelpers.getText(page, HEADINGS.hero)).toBe("About");

};

export const goToBlogPage = async ({
  page,
  options,
}: {
  page: Page;
  options: any;
}) => {
  // Click on Blog
  console.log("Clicked on Blog");
  await page.click('text="Blog"');

  // Wait for hero heading and verifiy title is "Blog"
  console.log("Waiting for hero heading");
  await testHelpers.wait(page);
  expect(await testHelpers.getText(page, HEADINGS.hero)).toBe("Posts");
};

export const goToContactPage = async ({
  page,
  options,
}: {
  page: Page;
  options: any;
}) => {
  // Click on Contact
  console.log("Clicked on Contact");
  await page.click('text="Contact"');

  // Wait for hero heading and verifiy title is "Contact"
  console.log("Waiting for hero heading");
  await testHelpers.wait(page);
  expect(await testHelpers.getText(page, HEADINGS.hero)).toBe("Let's Connect");
};

