import {
  getRandomPhoneNumber,
  getRandomOrderNumber,
  getRandomString,
  generateDummySIN,
} from "./random";
export function getUserTestData(options: any, market?: string) {
  const randStr = getRandomString(8);
  const randNum = getRandomPhoneNumber();

  let marketData = {};
  if (market && market.includes("CA")) {
    marketData = {
      zip: "T4P 0T9",
      city: "Red Deer",
      Address1: "67 St & Carleton",
      Address2: `${randStr} Street`,
      taxID: generateDummySIN(),
      stylist: `ShariStylist517`,
      stylistName: `Shari TestStylist`,
      stylistId: `110290`,
      paypal: {
        email: `excatest-sb-ornj317223313@personal.example.com`,
        password: `C50X%tJu`,
      },
    };
  } else {
    marketData = {
      zip: "07082",
      city: "Montville",
      Address1: "123 Main rd",
      Address2: `${randStr} Street`,
      taxID: randNum,
    };
  }
  return {
    firstName: options.firstName || `Test User`,
    lastName: options.lastName || randStr,
    name: options.name || `Test User ${randStr}`,
    nameOnCard: options.nameOnCard || `Test User`,
    email: options.email || `testuser${randStr}@colorstreet.com`,
    userName: options.userName || `testuser${randStr}`,
    password: options.password || `CTest${randStr}@123`,
    phoneNumber: `1${randNum}`,
    dob: options.dob || `01/01/1990`,
    cardNumber: `4111 1111 1111 1111`,
    cvv: `737`,
    expiryDate: `03/30`,
    isGuestCheckout: true,
    subject: `Subject ${randStr}${randStr}${randStr}${randStr}`,
    message: getRandomString(600),
    orderNumber: getRandomOrderNumber(),
    market: market,
    siteMode: "production", // Added siteMode property
  };
}

export const prodUsers = {
  userOne: {
    email: "",
    userName: "",
    password: "",
  },
  userTwo: {
    email: "",
    userName: "",
    password: "",
  },
  userThree: {
    email: "",
    userName: "",
    password: "",
  },
};


export enum schibelliMarkets {
  US_English = "US English",
  US_Spanish = "US Spanish",
  CA_English = "CA English",
  CA_French = "CA French",

}

export const allMarkets = [
  schibelliMarkets.US_English,
  schibelliMarkets.CA_English,
];

