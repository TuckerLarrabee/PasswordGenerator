// Assignment code here

// After user has selected the types of characters for their password, select those values randomly from the arrays and concatenate them to the desired length of the password.

var passLength = 0;
let lower = false;
let upper = false;
let num = false;
let spec = false;

//Arrays:
var lowerC = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperC = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialC = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];

// if button is clicked, then window.prompts for each:

var passwordValues = function () {
  lower = false;
  upper = false;
  num = false;
  spec = false;

  var length = function () {
    var leng = window.prompt(
      "Please select a numerical length for your password between 8 and 128."
    );
    if (parseInt(leng) >= 8 && parseInt(leng) <= 128) {
      passLength = leng;
    } else {
      window.alert(
        "You have selected an invalid password length. Please enter a valid value."
      );
      length();
    }
  };

  var lowercase = function () {
    var lowerResponse = window
      .prompt(
        "Would you like to include lowercase characters? Please enter 'Yes' or 'No'."
      )
      .toLowerCase();
    if (lowerResponse === "yes" || lowerResponse === "no") {
      if (lowerResponse === "yes") {
        lower = true;
        console.log(lower);
      }
    } else {
      window.alert(
        "Your response is invalid. Please enter either 'Yes' or 'No'."
      );
      lowercase();
    }
  };

  var uppercase = function () {
    var upperResponse = window
      .prompt(
        "Would you like to include uppercase characters? Please enter 'Yes' or 'No'."
      )
      .toLowerCase();
    if (upperResponse === "yes" || upperResponse === "no") {
      if (upperResponse === "yes") {
        upper = true;
        console.log(upper);
      }
    } else {
      window.alert(
        "Your response is invalid. Please enter either 'Yes' or 'No'."
      );
      uppercase();
    }
  };

  var numeric = function () {
    var numResponse = window
      .prompt("Would you like to include numbers? Please enter 'Yes' or 'No'.")
      .toLowerCase();
    if (numResponse === "yes" || numResponse === "no") {
      if (numResponse === "yes") {
        num = true;
        console.log(num);
      }
    } else {
      window.alert(
        "Your response is invalid. Please enter either 'Yes' or 'No'."
      );
      numeric();
    }
  };

  var special = function () {
    var specResponse = window
      .prompt(
        "Would you like to include special characters? Please enter 'Yes' or 'No'."
      )
      .toLowerCase();
    if (specResponse === "yes" || specResponse === "no") {
      if (specResponse === "yes") {
        spec = true;
        console.log(spec);
      }
    } else {
      window.alert(
        "Your response is invalid. Please enter either 'Yes' or 'No'."
      );
      special();
    }
  };

  length();
  lowercase();
  uppercase();
  numeric();
  special();

  if (!lower && !upper && !num && !spec) {
    window.alert(
      "You did not select any characters to be included. Please select 'Yes' for at least one character type."
    );
    passwordValues();
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordValues();
  console.log(passLength, lower, upper, num, spec);

  var arrayArray = [];

  if (lower) {
    arrayArray.push(lowerC);
  }

  if (upper) {
    arrayArray.push(upperC);
  }

  if (num) {
    arrayArray.push(number);
  }

  if (spec) {
    arrayArray.push(specialC);
  }

  var password = "";

  for (var i = 0; i < passLength; i++) {
    var index = Math.floor(arrayArray.length * Math.random());
    var currentSet = arrayArray[index];
    var currentSetIndex = Math.floor(currentSet.length * Math.random());
    var character = currentSet[currentSetIndex];
    password += character;
  }

  console.log(password);
  console.log(arrayArray);

  var randomArray = arrayArray[Math.floor(arrayArray.length * Math.random())];
  console.log(randomArray);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
