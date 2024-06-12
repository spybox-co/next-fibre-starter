export function cn (...args) {
  return args.filter(Boolean).join(' ')
}

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



// Text Orphans to next line script 
export const TextFormatter = () => {
  function lastSingleLetterToNewLine(el) {
    let result;
    el.forEach(element => {
       
      if(!element.innerHTML.match(/[{}]|<script|^\n$/gi)){
        result = element.innerHTML.replace(/ (.) /gi, " "+'\$1'+"&nbsp;");
      }
      element.innerHTML = result;
      //console.log(result);
    });
  }
  let el = document.querySelectorAll('p, .paragraph, span, .Heading');
  //console.log(el)
  lastSingleLetterToNewLine(el);  
}