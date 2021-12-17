// Assignment code here



// if button is clicked, then window.prompts for each: 

// var length = window.prompt("Please select a numerical length for your password between 8 and 128.")
// if (length === number between 8 and 128) {
//  return length;
// } else {window.alert("Please enter a valid length between 8 and 128")}

// var lowercase = window.prompt("Would you like to include lowercase characters? Please enter 'yes' or 'no'.")
// if (lowercase === "yes" || "Yes") {
// return true
// } else if (lowercase === "no" || lowercase === "No") {
// return false
// } else {window.alert("You need to enter either "Yes" or "No".)};

// var uppercase = window.prompt("Would you like to include uppercase characters? Please enter 'yes' or 'no'.")
// if (uppercase === "yes" || "Yes") {
// return true
// } else if (uppercase === "no" || uppercase === "No") {
// return false
// } else {window.alert("You need to enter either "Yes" or "No".)};

// var numeric = window.prompt("Would you like to include numbers? Please enter 'yes' or 'no'.")
// if (numeric === "yes" || "Yes") {
// return true
// } else if (numeric === "no" || numeric === "No") {
// return false
// } else {window.alert("You need to enter either "Yes" or "No".)};

// var special = window.prompt("Would you like to include special characters? Please enter 'yes' or 'no'.")
// if (special === "yes" || "Yes") {
// } else if (special === "no" || special === "No") {
// return false
// } else {window.alert("You need to enter either "Yes" or "No".)};


// AT LEAST ONE CHARACTER TYPE MUST BE TRUE



// if the button is clicked, the prompts appear
// after entering valid inputs in each prompt, the password is generated







// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
