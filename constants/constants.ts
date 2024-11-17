import HomepageHero from "@/components/cta/homepage-cta";

export const ATTRIBUTE_NAME = {
  itemPrice: `data-item-detail-price`,
  itemName: `data-item-detail-name`,
};

export const TOAST_MESSAGE = {
  addedToOrder: `Just added to bag`,
  subscriptionSuccess: `Thank you for signing up for our Customer Newsletter`,
};

export const productionSiteMode = "Production Mode";

function getMonthName() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date();
  return monthNames[today.getMonth()];
}

export const VALIDATION_TEXT = (options: any): Record<string, string> => {
  return {
    homepageHero: `Elevate Your Digital Presence with Expert Full-Stack Development`,
  };
};

const getStarterKitValue = (market: string): string => {
  return market.includes("CA") ? `$134.00 CAD` : `$99.00`;
};
