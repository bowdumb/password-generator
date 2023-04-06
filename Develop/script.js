// Assignment Code
var generateBtn = document.querySelector("#generate");


var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "",] 
var special = ["!", "@", "#", "$", "%", "^", "*", "&", "(", ")", ",", ".", "/", "<", ">",];
var length = 8;
var passArray = [];



function generatePassword() {
   console.log("Hey! You clicked the button!");

//1. Prompt the user for the password criteria
//  a. Passworth length 8 < 128 characters
//  b. Lowercase, uppercase, special characters
//2. Validate the input. (ensure that A and B are met, and at least one character type is being selected)
//3.Display generated password based on criteria.
//




  return "Generated password will go here!";

  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

}

function popUp() {
  length = prompt("How many characters would you like your password to contain? You may select 8-128 characters");
//Added first line of if/else code to popUP variable.

if (length < 8 || length > 128) {
  alert("Invalid character amount. Please enter a character between 8-128");
  console.log("Invalid character amount. Please enter a character between 8-128");
  return false;
}
//Added IF statement to create confirm popup box for lowercase letters.
if (confirm("Would you like your password to include lowercase letters?")) {
  passArray = passArray.concat(lower);
  console.log("You would like your password with lowercase letters!");
}
//Added IF statement to create confirm popup box for uppercase letters.
if (confirm("Would you like your password to include uppercase letters?")) {
  passArray = passArray.concat(upper);
}
}
popUp();