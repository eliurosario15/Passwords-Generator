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

function getrandomCharacter(list) {
  return list[randomInt(0, list.length -1)]
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

var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolsList = ["!", "@", "#", "$", "%", "&", "*"]
var lettersList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperList = []

var allOptions = []

for (var i = 0; i < lettersList.length; i++) {
  upperList[i] = lettersList[i].toUpperCase()
 } 


if (addNumbers) {
  allOptions.push(numbersList)
}

if (addUppercase) {
  allOptions.push(upperList)
}

if (addLowercase) {
  allOptions.push(lettersList)
}

if (addSpecialCharacters) {
  allOptions.push(symbolsList)
}

if (allOptions === 0) {
  allOptions.push(lettersList)
}

var newPassword = ""

for (var i = 0; i < passwordLenght; i++) {
  var randomlist = getrandomCharacter(allOptions)
  var randomChar = getrandomCharacter(randomlist)
  newPassword += randomChar
}



return newPassword

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);