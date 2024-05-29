export const uf = (string) => {
  if (string !== undefined)
    return string[0].toUpperCase() + string.substring(1);
};

export const ArabicToRoman = number => {
  let roman = "";
  const romanNumList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let arabic;

  for (let key in romanNumList) {
    arabic = Math.floor(number / romanNumList[key]);
    if (arabic >= 0) {
      for (let i = 0; i < arabic; i++) {
        roman += key;
      }
    }
    number = number % romanNumList[key];
  }
  return roman;
};