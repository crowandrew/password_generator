// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const length = getValidLengthOfPassword();
  const userResponse = getValidCriteria();
  let password = generatePassword(userResponse[0],userResponse[1],userResponse[2],userResponse[3], length);
  let passwordText = document.querySelector("#password");
   passwordText.value = password;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generating Password
function generatePassword(lower, upper, number, symbol, length){
  let generatedPassword = "";
  const characterTypesCount = lower + upper + number + symbol;
  const characterTypesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    if(characterTypesCount === 0) {
    return '';
    }
    for(let i=0; i<length; i+=characterTypesCount) {
      characterTypesArray.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += generateRandomValues[funcName]();
      });
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}
  
// Prompt user for password length and test to see if password length is between 8-128 and a number
function getValidLengthOfPassword(){
    var userInputLengthOfPassword;
    while (true) {
      userInputLengthOfPassword = prompt("How long do you want your password?", "Please enter a number from 8 to 128.");
      if (isNaN(userInputLengthOfPassword) === false && userInputLengthOfPassword > 7 && userInputLengthOfPassword <129) {
          break;
      }
      alert("Please enter a valid length from 8 to 128");
    }
    return userInputLengthOfPassword;
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

// Generating random values
const generateRandomValues = {
  upper : generateRandomUpperCase,
  lower : generateRandomLowerCase,
  number : generateRandomNumber,
  symbol : generateRandomSymbol
};

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



















