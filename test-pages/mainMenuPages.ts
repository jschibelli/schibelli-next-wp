import type { Page } from "@playwright/test";
import helpers from "../infra";
import { productionSiteMode } from "../constants/constants";
import { FOOTER } from "../constants/selectors";

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
    return await testHelpers.getText(page, FOOTER.siteMode);
  } else {
    return productionSiteMode;
  }
};

