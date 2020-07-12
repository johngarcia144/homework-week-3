// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

var symbolsChar = ["!", "&", "#", ",", "*", "+", "$", ".", "/", "<", ">", "?","~", "%"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var confirmLength = "";
var confirmSymbols;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;

function generatePassword() {
  var confirmLength = (prompt("How long would you like your password to be? Please choose between 8 and 50 characters."));

  while(confirmLength <= 7 || confirmLength >= 51) {
    alert("Numbers aren't hard. Try again.");
    var confirmLength = (prompt("How long would you like your password to be? Please choose between 8 and 50 characters"));
    } 
    alert(`Your password will have ${confirmLength} characters`);
}


var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// Add event listener to generate button
generateB.addEventListener("click", writePassword);
alert()