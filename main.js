//DOM elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  /**
   * 1. Init pw var
   * 2. Filter out unchecked types
   * 3. Loop over length call generator function for each type
   * 4. Add final pw to the pw var and return
   */

  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesSelected = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => {
      return Object.values(item)[0];
    }
  );
  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesSelected.forEach(type => {
      const key = Object.keys(type)[0];
      generatedPassword += randomFunc[key]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()_+=-{}[]:;<>,.?/`~|";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
