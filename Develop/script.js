// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

const upperCaseCharCode = arrayFromLowToHigh(65, 90)
const lowerCaseCharCode = arrayFromLowToHigh(97, 122)
const numbersCharCode = arrayFromLowToHigh(48, 57)
const symbolCaseCharCode = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91,96)
).concat(
  arrayFromLowToHigh(123, 126)
)

function arrayFromLowToHigh(low, high) {
  const array = []
  for ( let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateB.addEventListener("click", writePassword);

alert()