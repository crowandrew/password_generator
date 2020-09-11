// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const passwordLength = getValidLengthOfPassword();
  const userResponse = getValidCriteria();
  let password = generatePassword(userResponse[0],userResponse[1],userResponse[2],userResponse[3], passwordLength);
  let passwordText = document.querySelector("#password");
   passwordText.value = password;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generating Password
function generatePassword(lowerCase, upperCase, number, symbol, length){
  let generatedPassword = "";
  const characterTypesCount = lowerCase + upperCase + number + symbol;
  const characterTypesArray = [{lowerCase}, {upperCase}, {number}, {symbol}].filter(characterType => Object.values(characterType)[0]);
    for(let i=0; i<length; i+=characterTypesCount) {
      characterTypesArray.forEach(characterType => {
        generatedPassword += generateRandomValues[Object.keys(characterType)[0]]();
      });
    }
    return generatedPassword.slice(0, length);
}
  
// Prompt user for password length and test to see if password length is between 8-128 and a number
function getValidLengthOfPassword(){
    while (true) {
      userInputLengthOfPassword = prompt("How long do you want your password?", "Please enter a number from 8 to 128.");
      if (isNaN(userInputLengthOfPassword) === false && userInputLengthOfPassword > 7 && userInputLengthOfPassword <129) {
        return userInputLengthOfPassword;
      }
      alert("Please enter a valid length from 8 to 128");
    }
}

// Prompts user for criteria and test to make sure the user selected ay least one character type
function getValidCriteria(){
  while(true) {
    includeLowerCase = confirm("Do you want to include lower case letters?\nClick Ok for Yes and Cancel for No");
    includeUpperCase = confirm("Do you want to include upper case letters?\nClick Ok for Yes and Cancel for No");
    includeNumbers = confirm("Do you want to include numbers?\nClick Ok for Yes and Cancel for No");
    includeSpecialCharacters = confirm("Do you want to include special characters?\nClick Ok for Yes and Cancel for No");
    if (includeLowerCase || includeUpperCase || includeNumbers || includeSpecialCharacters) {
      return [includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters];
    } 
    alert("You must select at least one type of character.")
  }
}

// Creating an object that includes methods to create random values
const generateRandomValues = {
  lowerCase : () => {return String.fromCharCode(Math.floor(Math.random()*26)+97)},
  upperCase : () => {return String.fromCharCode(Math.floor(Math.random()*26)+65)},
  number : () => {return Math.floor(Math.random()*10)},
    symbol : () => {
                  const specialCharacters =  "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\"
                  return specialCharacters[Math.floor(Math.random()*specialCharacters.length)]
                  }
};



















