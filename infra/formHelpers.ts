import { Page } from "@playwright/test";

export const waitForElement = async (
  page: Page,
  selector: string,
  params?: {
    config?: any;
    index?: number;
    type?: string;
  }
) => {
  const { config = {}, index = 0, type = undefined } = params || {};
  const options: any = {};
  options.timeout = config.timeOut || 60000;
  options.state = config.state || "visible";

  if (type != undefined) {
    if (type === "button") {
      selector = `button:not([disabled]):has-text("${selector}")`;
    } else if (type === "text") {
      const parent = config.parent || "";
      const prefix = config.prefix || "";
      const suffix = config.suffix || "";
      selector = `${parent} ${prefix}:has-text("${selector}") ${suffix}`.trim();
    }
  }

  console.log(`waiting for the element ${selector} - with index ${index}`);
  // await page.locator(selector).nth(index).waitFor(options);
  console.log(`${selector} - with index ${index} is visible`);
};

export const click = async (
  page: Page,
  selector: string,
  params?: {
    config?: any;
    index?: number;
  }
) => {
  const { config = {}, index = 0 } = params || {};
  await waitForElement(page, selector, { config, index });
  await wait(page, 2000);
  const buttonLoc = await page.locator(selector).nth(index);
  if (config.clickPosition != undefined) {
    await buttonLoc.click({ position: config.clickPosition });
  } else {
    await buttonLoc.click();
  }
};

export const clickButton = async (
  page: Page,
  buttonText: string,
  params?: {
    config?: any;
    index?: number;
  }
) => {
  const { config = {}, index = 0 } = params || {};
  const parent = config.parent || "";
  const suffix = config.suffix || "";
  config.type = config.type || "button";
  const selector =
    `${parent} button:not([disabled]):has-text("${buttonText}") ${suffix}`.trim();
  console.log(`clicking button ${buttonText}`);
  await click(page, selector, { config, index });
  console.log(`clicked button ${buttonText}`);
};

export const clickLink = async (
  page: Page,
  linkText: string,
  params?: {
    config?: any;
    index?: number;
  }
) => {
  const { config = {}, index = 0 } = params || {};
  const parent = config.parent || "";
  const prefix = config.prefix || "";
  const suffix = config.suffix || "";
  const attributes = config.attributes || "";
  const selector =
    `${parent} ${prefix}a${attributes}:has-text("${linkText}") ${suffix}`.trim();
  console.log(`clicking link: ${linkText}`);
  await click(page, selector, { config, index });
  console.log(`clicked link ${linkText}`);
};

export const clickByText = async (
  page: Page,
  text: string,
  params?: {
    config?: any;
    index?: number;
  }
) => {
  const { config = {}, index = 0 } = params || {};
  const parent = config.parent || "";
  const prefix = config.prefix || "";
  const suffix = config.suffix || "";
  const selector = `${parent} ${prefix}:has-text('${text}') ${suffix}`.trim();
  console.log(`clicking by text: ${text} - with index ${index}`);
  await waitForElement(page, selector);
  await click(page, selector, { config, index });
  console.log(`clicked by text ${text}`);
};

export const isElementVisible = async (
  page: Page,
  selector: string,
  params?: {
    config?: any;
    index?: number;
    type?: string;
  }
) => {
  const { config = {}, index = 0, type = undefined } = params || {};

  if (type != undefined) {
    if (type === "button") {
      selector = `button:not([disabled]):has-text("${selector}")`;
    } else if (type === "text") {
      const parent = config.parent || "";
      const prefix = config.prefix || "";
      const suffix = config.suffix || "";
      selector = `${parent} ${prefix}:has-text("${selector}") ${suffix}`.trim();
    }
  }
  if (await page.locator(selector).nth(index).isVisible({ timeout: 3000 })) {
    console.log(`${selector} is present in the UI`);
    return true;
  } else {
    console.log(`[Error/ Info]: ${selector} is not present in the UI`);
    return false;
  }
};

export const wait = async (page: Page, timeOut: number = 3000) => {
  await page.waitForTimeout(timeOut);
};

export const pressKey = async (
  page: Page,
  key: String,
  params?: {
    config?: any;
    index?: number;
  }
) => {
  const { config = {}, index = 0 } = params || {};
  if (config.selector != undefined) {
    await waitForElement(page, config.selector);
  }
  await page.keyboard.press(`${key}`);
};

export const elementsCount = async (
  page: Page,
  selector: string,
  waitFor?: number
) => {
  const waitTime = waitFor || 1500;
  await wait(page, waitTime);
  console.log(`Getting count of: ${selector}`);
  const count = await page.locator(selector).count();
  console.log(`count of: ${selector} is: ${count}`);
  return count;
};

export const hover = async (
  page: Page,
  selector: string,
  params?: {
    config?: any;
    index?: number;
  }
) => {
  const { config = {}, index = 0 } = params || {};
  await waitForElement(page, selector, params);
  const buttonLoc = await page.locator(selector).nth(index);
  console.log(`hovering on element: ${selector} - with index ${index}`);
  await buttonLoc.hover();
};

export const getText = async (
  page: Page,
  selector: string,
  params?: {
    config?: any;
    index?: number;
  }
): Promise<string> => {
  const { config = {}, index = 0 } = params || {};
  await waitForElement(page, selector, params);
  const elementText = await page.locator(selector).nth(index).innerText();
  console.log(`${selector} has text: ${elementText}`);
  return elementText;
};

export const waitForToastTitle = async (
  page: Page,
  title: string,
  params?: {
    config?: any;
    index?: number;
    type?: string;
  }
) => {
  const { config = {}, index = 0, type = undefined } = params || {};
  const options: any = {};

  if (config.state) {
    options.state = config.state;
  }

  if (config.timeOut) {
    options.timeout = config.timeOut;
  }

  options.index = index;
  console.log(`waiting for the toast title "${title}"`);
  await page.waitForSelector(
    `[class='toast-title']:has-text('${title}')`,
    options
  );
  console.log(`Toast Title: "${title}" is visible`);
};

export const waitForToastMessage = async (
  page: Page,
  message: string,
  params?: {
    config?: any;
    index?: number;
    type?: string;
  }
) => {
  const { config = {}, index = 0, type = undefined } = params || {};
  const options: any = {};

  if (config.state) {
    options.state = config.state;
  }

  if (config.timeOut) {
    options.timeout = config.timeOut;
  }

  options.index = index;
  console.log(`waiting for the toast message "${message}"`);
  await page.waitForSelector(
    `[class='toast-message']:has-text('${message}')`,
    options
  );
  console.log(`Toast Message: "${message}" is visible`);
};

export const getAttributeValue = async (
  page: Page,
  selector: string,
  attribute: string,
  params?: {
    config?: any;
    index?: number;
  }
): Promise<string> => {
  const { config = {}, index = 0 } = params || {};
  await waitForElement(page, selector);
  const elementText = await page
    .locator(selector)
    .nth(index)
    .getAttribute(attribute);
  console.log(`${selector} has ${attribute} with value: ${elementText}`);
  return elementText === null ? "" : elementText;
};

export const waitForElementInIFrame = async (
  page: Page,
  frameSelector: string,
  selector: string,
  params?: {
    config?: any;
    index?: number;
  }
) => {
  const { config = {}, index = 0 } = params || {};
  console.log(
    `waiting for iFrame: ${frameSelector} with locator: ${selector} at index: ${index}`
  );
  await page
    .frameLocator(frameSelector)
    .first()
    .locator(selector)
    .nth(index)
    .waitFor();
  console.log(
    `iFrame: ${frameSelector} with locator: ${selector} at index: ${index} is visible`
  );
};

export const clickElementInIFrame = async (
  page: Page,
  frameSelector: string,
  selector: string,
  params?: {
    config?: any;
    index?: number;
  }
) => {
  const { config = {}, index = 0 } = params || {};
  await waitForElementInIFrame(page, frameSelector, selector, params);
  await wait(page, 2000);
  await page
    .frameLocator(frameSelector)
    .first()
    .locator(selector)
    .nth(index)
    .click();
  console.log(
    `clicked iFrame: ${frameSelector} with locator: ${selector} at index: ${index}`
  );
};

export const elementsCountInIFrame = async (
  page: Page,
  frameSelector: string,
  selector: string,
  params?: {
    config?: any;
    index?: number;
  }
) => {
  const { config = {}, index = 0 } = params || {};
  await waitForElementInIFrame(page, frameSelector, selector, params);
  await wait(page, 2000);
  const count = await page
    .frameLocator(frameSelector)
    .first()
    .locator(selector)
    .count();
  console.log(
    `count of iFrame: ${frameSelector} with locator: ${selector} at index: ${index} is: ${count}`
  );
  return count;
};

export const isElementVisibleInIFrame = async (
  page: Page,
  frameSelector: string,
  selector: string,
  params?: {
    config?: any;
    index?: number;
  }
) => {
  const { config = {}, index = 0 } = params || {};
  await waitForElementInIFrame(page, frameSelector, selector, params);
  await wait(page, 2000);
  const isVisible = await page
    .frameLocator(frameSelector)
    .first()
    .locator(selector)
    .nth(index)
    .isVisible();
  console.log(
    `visibility of iFrame: ${frameSelector} with locator: ${selector} at index: ${index} is: ${isVisible}`
  );
  return isVisible;
};

export const isElementDisabledInIFrame = async (
  page: Page,
  frameSelector: string,
  selector: string,
  params?: {
    config?: any;
    index?: number;
  }
) => {
  const { config = {}, index = 0 } = params || {};
  await waitForElementInIFrame(page, frameSelector, selector, params);
  await wait(page, 2000);
  const isDisabled = await page
    .frameLocator(frameSelector)
    .first()
    .locator(selector)
    .nth(index)
    .isVisible();
  console.log(
    `Disabled iFrame: ${frameSelector} with locator: ${selector} at index: ${index} is: ${isDisabled}`
  );
  return isDisabled;
};

export const hoverOnLink = async (
  page: Page,
  linkText: string,
  params?: {
    config?: any;
    index?: number;
  }
) => {
  const { config = {}, index = 0 } = params || {};
  const parent = config.parent || "";
  const prefix = config.prefix || "";
  const suffix = config.suffix || "";
  const attributes = config.attributes || "";
  const selector =
    `${parent} ${prefix}a${attributes}:has-text("${linkText}") ${suffix}`.trim();
  console.log(`Hovering on link: ${linkText}`);
  await waitForElement(page, selector, { config, index });
  await wait(page, 2000);
  const buttonLoc = await page.locator(selector).nth(index);
  await buttonLoc.hover();
  console.log(`Hovered on link ${linkText}`);
};

export default {
  click,
  clickButton,
  clickLink,
  clickByText,
  isElementVisible,
  wait,
  waitForElement,
  waitForToastTitle,
  waitForToastMessage,
  pressKey,
  elementsCount,
  hover,
  getText,
  getAttributeValue,
  clickElementInIFrame,
  waitForElementInIFrame,
  isElementVisibleInIFrame,
  isElementDisabledInIFrame,
  elementsCountInIFrame,
  hoverOnLink,
};
