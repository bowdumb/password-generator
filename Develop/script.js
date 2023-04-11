// Assignment Code
var generateBtn = document.querySelector("#generate");

//Added variables for neccessary inputs needed to generate appropriate passwords.
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "", "", "", "", "",] 
var special = ["!", "@", "#", "$", "%", "^", "*", "&", "(", ")", ",", ".", "/", "<", ">", "-", "+", "-", "`", "~", "|"];
var lengthArray = 8;
var passArray = [];





// Write password to the #password input
function writePassword() {
    
    passArray = []; //Clears the contents of PassArray in order to ensure that character types are selected when running the password generator a second time following a valid generation.
    var truePop = popUp(); //By Assigning the value of truePop to popUp() we call the function below.
    var passwordText = document.querySelector("#password");

    if (truePop) {    //If value of popUP() is true, code block below will execute.

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
    
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function generatePassword() {
  var password = "";
    for(var i = 0; i < lengthArray; i++) {
      var character = Math.floor(Math.random() * passArray.length); //Math.random() generates random integer between 0-.9. Math.floor will round down if a decimal is returned. A randomly selected character will be assigned to the character variable.
      password = password + passArray[character]; //Takes the current passArray array and inputs the random number determined above to select a character from the passArray array. This is repeated until the terminating condition in our for loop is met.
    }
    return password;
}

//Added first line of if/else code to popUP variable.
function popUp() {
  
  lengthArray = prompt("How many characters would you like your password to contain? You may select 8-128 characters");


  if (lengthArray < 8 || lengthArray > 128) {
  alert("Invalid entry. Please enter a character count between 8-128");
  console.log("Invalid character amount. Please enter a character between 8-128");
  return false; //Returns a value of FALSE, and stops executing code below.
}
//Added IF statement to create confirm() popup box for lowercase letters, and concatenate it to passArray.
if (confirm("Would you like your password to include lowercase letters?")) {
  passArray = passArray.concat(lower);
  console.log("You would like your password to include lowercase letters!");
}
//Added IF statement to create confirm() popup box for uppercase letters , and concatenate it to passArray.
if (confirm("Would you like your password to include uppercase letters?")) {
  passArray = passArray.concat(upper);
  console.log("You would like your password to include uppercase letters!");
}
//Added IF statement to create confirm() popup box for numbers , and concatenate it to passArray.
if (confirm("Would you like your password to contain numbers?")) {
  passArray = passArray.concat(numbers);
  console.log("You would like your password to contain numbers!");
}
//Added IF statement to create confirm() popup box for special characters, and concatenate it to passArray.
if (confirm("Would you like your password to contain special characters?")) {
  passArray = passArray.concat(special);
  console.log("You would like your password to contain special characters!");
}

//If no character types are selected the user will be informed that a selection is required and a value of FALSE will be returned, prohibiting the execution of the writePassword function. 
if (passArray.length === 0) {
  alert("You must select at least one character type! Please retry."); 
  return false; //Requires the selection of at least one character type in order for the value of TRUE to be returned.
}

return true; //Ends function and returns specified value to the writePassword function.

}
