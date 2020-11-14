// Password generator will create a password that has 8-128 characters based on criteria specified by the user through a series of prompts

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Password requirements in arrays
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Variables for checking criteria
var confirmLength = "";
var confirmLowerCase = "";

// Creating Function for generating the password
function generatePassword () {
  var confirmLength = (prompt("How many characters would you like the password to be? (between 8-128)"));

  //Loop if the number is outside 8 and 128
  while (confirmLength < 8 || confirmLength > 128 || confirmLength === NaN || confirmLength === null) {
    alert("Password length must be between 8 and 128 characters in length. Try again");
    var confirmLength = (prompt("How many characters would you like the password to be? (between 8-128)"));
  }

  // Repeat back how many charactes the user will have  
  alert(`Your password will have ${confirmLength} characters`);

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


