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
  // Clearing generatedPassword variable
  let generatedPassword = "";
  // Creating the variable characterTypesCount and giving it the value of the count of each character type marked true
  const characterTypesCount = lowerCase + upperCase + number + symbol;
  //  Creating the array characterTypesArray and only including the values marked true
  const characterTypesArray = [{lowerCase}, {upperCase}, {number}, {symbol}].filter(characterType => Object.values(characterType)[0]);
    //  Run a loop that loops as many times as times as need to fill the required password length. Each loop will 
    //  add the variable characterTypesCount to the variable i. Loops stops when i is greater than or equal
    //  to the user inputted password length
    for(let i=0; i<length; i+=characterTypesCount) {
      // For each character type in array characterTypesArray grab one random character from that character type from 
      // the object generateRandomValues and add those to the generatedPassword variable.
      characterTypesArray.forEach(characterType => {
        generatedPassword += generateRandomValues[Object.keys(characterType)[0]]();
      });
    }
    // Returns a truncated generatedPassword variable to the requested size inputted by the user
    // because the above loop may generate more characters than needed
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

// Creating an object that includes random values for Properties by embedding the function into the properties value
const generateRandomValues = {
  // Generates a random single lowercase character from the ASCII Character Set https://www.w3schools.com/charsets/ref_html_ascii.asp and
  // adds it to value for the property lowerCase 
  // we multiple Math.random by 26 because there are 26 letters in the alphabet
  // we add 97 to Math.floor(Math.random()*26) because lowercase numbers start at 97 in the ASCII Character Set
  lowerCase : () => {return String.fromCharCode(Math.floor(Math.random()*26)+97)},
  // Generates a random single uppercase character from the ASCII Character Set https://www.w3schools.com/charsets/ref_html_ascii.asp and
  // adds it to value for the property upperCase 
  // we multiple Math.random by 26 because there are 26 letters in the alphabet
  // we add 65 to Math.floor(Math.random()*26) because uppercase numbers start at 97 in the ASCII Character Set
  upperCase : () => {return String.fromCharCode(Math.floor(Math.random()*26)+65)},
  // Generates a random single integer from 0 to 9 and adds it to the value for the property number
  // adds it to the value for the property number
  // we multiple Math.random() by 10 because there are 10 integers from 0 to 9
  number : () => {return Math.floor(Math.random()*10)},
  // Generates a random single special character and adds it to the value for the property symbol
    symbol : () => {
                  // Defines the variable specialCharacters as the string including all available special characters
                  const specialCharacters =  "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"\\"
                  // Multiple a random number by the variable specialCharacters length and returns the place in the string corresponding to that value
                  return specialCharacters[Math.floor(Math.random()*specialCharacters.length)]
                  }
};



















