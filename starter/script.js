// Array of special characters to be included in password
var passChoiceArr = []
var specialArr = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedArr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input

function writePassword() {
  var correctPrompts = getPrompts();
  
  if(correctPrompts){
  var newPassword = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = newPassword;
} else {
  passwordText.value = "";
}
}

//password based on prompts

// Function to generate password with user input
function generatePassword(){
var password ="";
for(var i = 0; i < charLength;i++){
var randomIndex = Math.floor(Math.random() * passChoiceArr.length);
password = password + passChoiceArr[randomIndex];
}
return password;
}

//prompt for password

function getPrompts() {
  charLength = parseInt(prompt("The number of characters in your password must be (10-64 characters)"));
  if (isNaN(charLength) || charLength < 10 || charLength > 64) {
    alert("Character length has to be a number, 10-64 digit, Try again");
    return false;
  }
    if (confirm("Would you like lowercase letter in your password?")) {
      passChoiceArr = passChoiceArr.concat(lowerCasedArr);
    }

    if (confirm("Would you like uppercase letter in your password?")) {
      passChoiceArr = passChoiceArr.concat(upperCasedArr);
    }
    if (confirm("Would you special character in your password?")) {
      passChoiceArr = passChoiceArr.concat(specialArr);
    }

    if (confirm("Would you like numbers in your password?")) {
      passChoiceArr = passChoiceArr.concat(numericArr);
    }
    return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);