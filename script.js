// Assignment Code
let generateBtn = document.querySelector("#generate");

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
function generatePassword(lowerCase, upperCase, number, symbol, length){
  let generatedPassword = "";
  const characterTypesCount = lowerCase + upperCase + number + symbol;
  const characterTypesArray = [{lowerCase}, {upperCase}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    for(let i=0; i<length; i+=characterTypesCount) {
      characterTypesArray.forEach(type => {
        generatedPassword += generateRandomValues[Object.keys(type)[0]]();
      });
    }
    return generatedPassword.slice(0, length);
}
  
// Prompt user for password length and test to see if password length is between 8-128 and a number
function getValidLengthOfPassword(){
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
  while(true) {
    includeLowerCase = confirm("Do you want to include lower case letters?\nClick Ok for Yes and Cancel for No");
    includeUpperCase = confirm("Do you want to include upper case letters?\nClick Ok for Yes and Cancel for No");
    includeNumbers = confirm("Do you want to include numbers?\nClick Ok for Yes and Cancel for No");
    includeSpecialCharacters = confirm("Do you want to include special characters?\nClick Ok for Yes and Cancel for No");
    if (includeLowerCase || includeUpperCase || includeNumbers || includeSpecialCharacters) {
      break;
    } 
    alert("You must select at least one type of character.")
  }
  return [includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters];
}

// Generating random values for each type
const generateRandomValues = {
  upperCase : () => {return String.fromCharCode(Math.floor(Math.random()*26)+65)},
  lowerCase : () => {return String.fromCharCode(Math.floor(Math.random()*26)+97) },
  number : () => {return String.fromCharCode(Math.floor(Math.random()*26)+97) },
  symbol : () => {
                  const specialCharacters =  " !#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\"
                  return specialCharacters[Math.floor(Math.random()*specialCharacters.length)]
                  }
};




















