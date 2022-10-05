// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max - min
    min - 0
  }

  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function randomCharacter(list) {
return list [randomInt(0, list.length -1)]
}


function generatePassword () {

var userInput = window.prompt("What's the lenght of the password?")

var passwordLenght = parseInt(userInput)

  if (isNaN(passwordLenght)) {
    window.alert("Not a number")
    return
}

if (passwordLenght < 8 || passwordLenght > 128) {
  window.alert('Password must be 8 to 128 characters long.')
  return
}

var addNumbers = window.confirm("Do you want your password to include numbers?")
var addUppercase = window.confirm("Do you want your password to include uppercase letters?")
var addLowercase = window.confirm("Do you want your password to include lowercase letters?")
var addSpecialCharacters = window.confirm("Do you want your password to include special characters?")

var numbersOptions = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolsOptions = ["!", "@", "#", "$", "%", "&", "*"]
var lettersList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var lettersUpper = []

var allOptions = []

for (var i = 0; i < lettersList.length; i++) {
  lettersUpper[i] = lettersList[i].toUpperCase()
 } 


if (addNumbers === true) {
  allOptions.push(numbersOptions)
}

if (addUppercase === true) {
  allOptions.push(lettersUpper)
}

if (addLowercase === true) {
  allOptions.push(lettersList)
}

if (addSpecialCharacters === true) {
  allOptions.push(symbolsOptions)
}

var newPassword = ""

for (var i = 0; i < passwordLenght; i++) {
  var randomlist = randomCharacter(allOptions)
  var randomChar = randomCharacter(randomlist)
  newPassword += randomChar
}

console.log(newPassword)



}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);