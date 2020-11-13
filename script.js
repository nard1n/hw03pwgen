// Password generator will create a password that has 8-128 characters based on criteria specified by the user through a series of prompts

// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener('click', promptMe);


// Password requirements arrays
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Variables for checking criteria
var confirmLength = "";
var confirmLowerCase = "";

// Prompts
function promptMe (){
  var userCriteria = prompt ("Want lower case letters?");
  alert(userCriteria);
}

// logic and loops if wrong for each criteria/confirm popup - true if OK is pressed



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


