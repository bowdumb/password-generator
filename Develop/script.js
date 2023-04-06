// Assignment Code
var generateBtn = document.querySelector("#generate");


var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "",] 
var special = ["!", "@", "#", "$", "%", "^", "*", "&", "(", ")", ",", ".", "/", "<", ">",];
var length = x;



function generatePassword() {
   console.log("Hey! You clicked the button!");

//1. Prompt the user for the password criteria
//  a. Passworth length 8 < 128 characters
//  b. Lowercase, uppdercase, special characters
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

function alert() {
  length = prompt("How many characters would you like your password to contain? You may select 8-128 characters");
}
// alert();