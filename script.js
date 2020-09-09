// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lower;
  var upper;
  var number;
  var symbol;
  const length = getValidLengthOfPassword();
  const userResponse = getValidCriteria();
  const hasLower = userResponse[0];
  const hasUpper = userResponse[1];
  const hasNumber = userResponse[2];
  const hasSymbol = userResponse[3];
  var password = generatePassword(hasLower,hasUpper,hasNumber,hasSymbol, length);
  var passwordText = document.querySelector("#password");
   passwordText.value = password;
  

  const generateRandom = {
    lower : generateRandomLowerCase,
    upper : generateRandomUpperCase,
    number : generateRandomNumber,
    symbol : generateRandomSymbol
  };

  function generatePassword(lower, upper, number, symbol, length){
        let generatePassword = "";

        const typesCount = lower + upper + number + symbol;

        // console.log(typesCount);

        
        
        
          }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 
  
// Prompt user for password length and test to see if password length is between 8-128 and a number
function getValidLengthOfPassword(){
    var lengthOfPassword;
    while (true) {
      lengthOfPassword = prompt("How long do you want your password?", "Please enter a number from 8 to 128.");
      if (isNaN(lengthOfPassword) === false && lengthOfPassword > 7 && lengthOfPassword <129) {
          break;
      }
      alert("Please enter a valid length from 8 to 128");
    }
    return lengthOfPassword;
}

// Prompts user for criteria and test to make sure the user selected ay least one character type
function getValidCriteria(){
  var includeLowerCase;
  var includeUpperCase;
  var includeNumbers;
  var includeSpecialCharacters;  
  while(true) {
    includeLowerCase = confirm("Do you want to include lower case letters? Ok for Yes and Cancel for No");
    includeUpperCase = confirm("Do you want to include upper case letters? Ok for Yes and Cancel for No");
    includeNumbers = confirm("Do you want to include numbers? Ok for Yes and Cancel for No");
    includeSpecialCharacters = confirm("Do you want to include special characters? Ok for Yes and Cancel for No");
    if (includeLowerCase) {
      break;
    } 
    else if (includeUpperCase){
      break;
    }
    else if (includeNumbers) {
      break;
    }
    else if (includeSpecialCharacters) {
      break;
    }
      alert("You must select at least one type of character.")
  }
  return [includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters];
}

// ***** Generating random strings *****

  // Generating random upper case
function generateRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
  // Generating random lower case
function generateRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97)  
}
  // Generating random number
function generateRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

 // Generating random symbols
function generateRandomSymbol() {
  var symbol =  " !#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\"
  return symbol[Math.floor(Math.random()*symbol.length)]
}



// // generate random string
// var upperCaseChar;
// var lowerCaseChar;
// var numberChar;
// var symbolChar;

// const generateRandom = {
//   upperCaseChar : generateRandomUpperCase,
//   lowerCaseChar : generateRandomLowerCase,
//   numberChar : generateRandomNumber,
//   symbolChar : generateRandomSymbol
// };
















