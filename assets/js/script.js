// Assignment code here



// if button is clicked, then window.prompts for each: 

var passwordValues = function () {

  // var length = function () {
  //   var leng = window.prompt("Please select a numerical length for your password between 8 and 128.");
  //     if (leng === number between 8 and 128) {
  //     return leng;
  //   } else {window.alert("Please enter a valid length between 8 and 128");
  //   length ();}

  var lowercase = function () {
      var lower = window.prompt("Would you like to include lowercase characters? Please enter 'Yes' or 'No'.");
        if (lower === "yes" || lower === "Yes") {
          lower = true;
          console.log(lower);
      } else if (lower === "No" || lower === "no") {
          lower = false;
          console.log(lower);
      } else {window.alert("Your response is invalid. Please enter either 'Yes' or 'No'.");
      lowercase ();
    };
  };


  var uppercase = function () {
      var upper = window.prompt("Would you like to include uppercase characters? Please enter 'Yes' or 'No'.");
        if (upper === "yes" || upper === "Yes") {
            upper = true;
            console.log(upper);
          } else if (upper === "no" || upper === "No") {
            upper = false;
            console.log(upper);
          } else {window.alert("Your response is invalid. Please enter either 'Yes' or 'No'.");
            uppercase ();
            };
    };

  var numeric = function () {
      var num = window.prompt("Would you like to include numbers? Please enter 'Yes' or 'No'.");
        if (num === "yes" || num === "Yes") {
            num = true;
            console.log(num);
          } else if (num === "no" || num === "No") {
            num = false;
            console.log(num);
          } else {window.alert("Your response is invalid. Please enter either 'Yes' or 'No'.");
            numeric();
        };
    };

  var special = function () {
      var spec = window.prompt("Would you like to include special characters? Please enter 'Yes' or 'No'.");
        if (spec === "yes" || spec === "Yes") {
            spec = true;
            console.log(spec);
          } else if (spec === "no" || spec === "No") {
            spec = false;
            console.log(spec);
          } else {window.alert("Your response is invalid. Please enter either 'Yes' or 'No'.");
          special();
        };
  };

  lowercase();
  uppercase();
  numeric();
  special();

  if (lowercase.lower === false && uppercase.upper === false && numeric.num === false && special.spec == false) {
    window.alert("You did not select any characters to be included. Please select 'Yes' for at least one character type.")
    passwordValues();
  }

};


//   var numeric = function () {
//     var numer = window.prompt("Would you like to include numbers? Please enter 'yes' or 'no'.");
//       if (numer === "yes" || "Yes") {
//         return true;
//       } else if (numer === "no" || numeric === "No") {
//         return false;
//       } else {window.alert("Your response is invalid. Please enter either 'Yes' or 'No'.");
//     numeric();
//   };

//   var special = function () {
//     var spec = window.prompt("Would you like to include special characters? Please enter 'yes' or 'no'.");
//       if (spec === "yes" || "Yes") {
//         return true;
//       } else if (spec === "no" || special === "No") {
//         return false
//       } else {window.alert("Your response is invalid. Please enter either 'Yes' or 'No'.");
//     special();
//   };

// };

// AT LEAST ONE CHARACTER TYPE MUST BE TRUE



// if the button is clicked, the prompts appear
// after entering valid inputs in each prompt, the password is generated

passwordValues();





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
