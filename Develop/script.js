// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

var upperCaseCharCode = arrayFromLowToHigh(65, 90);
var lowerCaseCharCode = arrayFromLowToHigh(97, 122);
var numbersCharCode = arrayFromLowToHigh(48, 57);
var symbolsCharCode = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91,96)
).concat(
  arrayFromLowToHigh(123, 126)
);

var confirmLength = "";
var confirmSymbols;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;

function arrayFromLowToHigh(low, high) {
  const array = []
  for ( let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function writePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols) {
  let charCodes = lowerCaseCharCode
  if (includeUpperCase) charCodes = charCodes.concat(upperCaseCharCode)
  if (includeNumbers) charCodes = charCodes.concat(numbersCharCode)
  if (includeSymbols) charCodes = charCodes.concat(symbolsCharCode)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount, i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join("")
}

var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// Add event listener to generate button
generateB.addEventListener("click", writePassword);

alert()