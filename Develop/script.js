// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

var symbolsChar = ["!", "&", "#", ",", "*", "+", "$", ".", "/", "<", ">", "?","~", "%"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upperCaseCharCode = arrayFromLowToHigh(65, 90)
const lowerCaseCharCode = arrayFromLowToHigh(97, 122)
const numbersCharCode = arrayFromLowToHigh(48, 57)
const symbolsCharCode = arrayFromLowToHigh(33, 47).concat(
var upperCaseCharCode = arrayFromLowToHigh(65, 90);
var lowerCaseCharCode = arrayFromLowToHigh(97, 122);
var numbersCharCode = arrayFromLowToHigh(48, 57);
var symbolsCharCode = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91,96)
).concat(
  arrayFromLowToHigh(123, 126)
)
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

// Write password to the #password input
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