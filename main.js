//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numberEl = document.getElementById('numbers');
const symbolEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbols: getRandomSymbol
}

generateEl.addEventListener('click', ()=>{
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

    console.log(hasLower, hasUpper, hasNumber, hasSymbol);
})

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10) + 48)
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*()_+=-{}[]:;<>,.?/`~\|';
    return symbols[Math.floor(Math.random()*symbols.length)];
}

console.log(getRandomLower()+" "+getRandomSymbol())