
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");
const passwordField = document.querySelector("#password");

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
  const passwordLength = parseInt(prompt("Enter password length between 10-64, Try again"));
  if (isNaN(passwordLength) || passwordLength < 10 || passwordLength > 64) {
    alert("Password length must be between 10-64");
    return;
  }
  let passwordArr = [];
  if (confirm("Include lowercase letters?")) {
    passwordArr = passwordArr.concat(lowerCasedArr);
  }
  if (confirm("Include uppercase letters?")) {
    passwordArr = passwordArr.concat(upperCasedArr);
  }
  if (confirm("Include numeric characters?")) {
    passwordArr = passwordArr.concat(numericArr);
  }
  if (confirm("Include special characters?")) {
    passwordArr = passwordArr.concat(specialArr);
  }
  if (passwordArr.length === 0) {
    alert("Please choose at least one character type");
    return;
  }
  return { passwordArr, passwordLength };
}
// Function to generate password with user input
function generatePassword(passArr, length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * passArr.length);
    password += passArr[randomIndex];
  }
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  const options = getPasswordOptions();
  if (options) {
    const newPassword = generatePassword(options.passwordArr, options.passwordLength);
    passwordField.value = newPassword;
  }
  else {
    passwordField.value = "";
  }
});