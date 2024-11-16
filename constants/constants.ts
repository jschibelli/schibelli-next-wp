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
    bagWithoutItems: `You don't have any items in your cart yet.`,
    orderConfirmation: `We have received your order.`,
    joinPageTitle: `Become a Color Street Stylist`,
    joinPageSectionTitles: `Why Become a Stylist? Starter Kit - $99 ($316+ Value) Get Off to a Jump Start! Love Color Street?`,
    hostPageSectionTitles: `Book Your Nail Bar! #BeBrilliant #BeColorStreet`,
    colorPlayPageSectionTitles: `What is Color Play?`,
    applicationPageSectionTitles: `Easy Application`,
    aboutPageSectionTitles: `About Color Street`,
    givingBackPageSectionTitles: `Causes & Foundation Partners`,
    enrollmentComplete: `Enrollment Complete`,
    printInvoice: `Print invoice`,
    starterKitValue: getStarterKitValue(options.market),
  };
};

const getStarterKitValue = (market: string): string => {
  return market.includes("CA") ? `$134.00 CAD` : `$99.00`;
};
