export const getRandomString = (num: number) =>
  Math.random()
    .toString(36)
    .replace(/[^A-Za-z]+/g, "")
    .substring(0, num);
export const getRandomPhoneNumber = () =>
  Math.floor(
    Math.random() * (888888888 - 123456789 + 1) + 123456789
  ).toString();
export const getRandomOrderNumber = () =>
  Math.floor(Math.random() * (88888 - 12345 + 1) + 12345).toString();

export const getRandomNumber = (max: number, min: number = 0) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const generateDummySIN = (): string => {
  const validPrefix = [1, 2, 3, 4, 5, 6, 7, 9];
  let sin =
    validPrefix[Math.floor(Math.random() * validPrefix.length)].toString();
  const length = 9;

  while (sin.length < length - 1) {
    sin += Math.floor(Math.random() * 10).toString();
  }

  let sum = 0;
  let pos = 0;

  const reversedSIN = sin.split("").reverse().join("");

  while (pos < length - 1) {
    let odd = parseInt(reversedSIN[pos]) * 2;
    if (odd > 9) {
      odd -= 9;
    }

    sum += odd;

    if (pos !== length - 2) {
      sum += parseInt(reversedSIN[pos + 1]);
    }
    pos += 2;
  }

  const checkDigit = ((Math.floor(sum / 10) + 1) * 10 - sum) % 10;
  sin += checkDigit.toString();
  return sin;
};
