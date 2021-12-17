// Assignment code here

// After user has selected the types of characters for their password, select those values randomly from the arrays and concatenate them to the desired length of the password.
var choice = ''
var charChoices = ["lower", "upper", "num", "spec"];

// var lower = '';
// var upper = '';
// var num = '';
// var spec = '';

//Arrays:
var lowerC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialC = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];


// if button is clicked, then window.prompts for each: 

var passwordValues = function () {

  // var length = function () {
  //   var leng = window.prompt("Please select a numerical length for your password between 8 and 128.");
  //     if (leng === number between 8 and 128) {
  //     return leng;
  //   } else {window.alert("Please enter a valid length between 8 and 128");
  //   length ();}


  choice = function() {
      charChoices[i] = window.prompt("Would you like to include lowercase characters? Please enter 'Yes' or 'No'.");
        if (charChoices[i] === "Yes" || charChoice[i] === "yes") {
            charChoices[i] = true;
            console.log(charChoices[i]);
        } else if (charChoices[i] === "No" || charChoices[i] === "no") {
            charChoices[i] = false;
            console.log(charChoices[i]);
        } else {window.alert("Your response is invalid. Please enter either 'Yes' or 'No'.")}
        choice(charChoices[i]);
    };

        

//   var uppercase = function () {
//       upper = window.prompt("Would you like to include uppercase characters? Please enter 'Yes' or 'No'.");
//         if (upper === "yes" || upper === "Yes") {
//           upper = true;
//           console.log(upper);
//         } else if (upper === "no" || upper === "No") {
//           upper = false;
//           console.log(upper);
//         } else {window.alert("Your response is invalid. Please enter either 'Yes' or 'No'.");
//           uppercase ();
//         };
//     };

//   var numeric = function () {
//       num = window.prompt("Would you like to include numbers? Please enter 'Yes' or 'No'.");
//         if (num === "yes" || num === "Yes") {
//           num = true;
//           console.log(num);
//         } else if (num === "no" || num === "No") {
//           num = false;
//           console.log(num);
//         } else {window.alert("Your response is invalid. Please enter either 'Yes' or 'No'.");
//           numeric();
//         };
//     };

//   var special = function () {
//       spec = window.prompt("Would you like to include special characters? Please enter 'Yes' or 'No'.");
//         if (spec === "yes" || spec === "Yes") {
//           spec = true;
//           console.log(spec);
//         } else if (spec === "no" || spec === "No") {
//           spec = false;
//           console.log(spec);
//         } else {window.alert("Your response is invalid. Please enter either 'Yes' or 'No'.");
//           special();
//         };
//     };

// lowercase();
// uppercase();
// numeric();
// special();

//   if (lower === false && upper === false && num === false && spec === false) {
//     window.alert("You did not select any characters to be included. Please select 'Yes' for at least one character type.")
//     passwordValues();
//   }

};

// AT LEAST ONE CHARACTER TYPE MUST BE TRUE

// if the button is clicked, the prompts appear
// after entering valid inputs in each prompt, the password is generated
for (var i = 0; i < charChoices.length; i++) {
passwordValues();
}

// console.log(lowerC)

// console.log("Your lowercase value is " + lower + ".");
// console.log("Your uppercase value is " + upper + ".");


// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);}]
