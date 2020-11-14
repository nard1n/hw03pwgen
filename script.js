// Password generator will create a password that has 8-128 characters based on criteria specified by the user through a series of prompts

// Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmLength = "";
var confirmLowerCase = "";
var confrimUpperCase = "";
var confirmNumber = "";
var confirmSpcChar = "";
var passwordOutput = [];


// Password requirements in arrays
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


// Creating Function for generating the password
function generatePassword () {
  var confirmLength = (prompt("How many characters would you like the password to be? \n(between 8-128)"));

  //Loop if the number is outside 8 and 128
  while (confirmLength < 8 || confirmLength > 128 || confirmLength === NaN || confirmLength === null) {
    alert("Password length must be between 8 and 128 characters in length. Try again");
    var confirmLength = (prompt("How many characters would you like the password to be? (between 8-128)"));
  }
  //console.log(confirmLength.length); <- to test
  // Repeat back how many characters the user chose
  alert(`Your password will consist of ${confirmLength} characters`);

// logic to determine if ..and loops if wrong for each criteria/confirm popup - true if OK is pressed
var confirmLowerCase = confirm("Click OK if you'd like to include a lowercase letter");
var confirmUpperCase = confirm ("Click Ok if you'd like to include an uppercase letter");
var confirmNumber = confirm ("Click Ok if you'd like to include a number");
var confirmSpcChar = confirm ("Click Ok if you'd like to include a special character");

  //loop if answer is outside of parameter
  while(confirmLowerCase === false && confirmUpperCase === false && confirmNumber === false && confirmSpcChar === false) {
    alert("You must choose at least 1 character type. Try again.");
    var confirmLowerCase = confirm("Click OK if you'd like to include a lowercase letter");
    var confirmUpperCase = confirm ("Click Ok if you'd like to include an uppercase letter");
    var confirmNumber = confirm ("Click Ok if you'd like to include a number");
    var confirmSpcChar = confirm ("Click Ok if you'd like to include a special character");
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


