// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   passwordText.value = password;

  function generatePassword(){
        var lengthOfPassword;
        var includeLowerCase;
        var includeUpperCase;
        var includeNumbers;
        var includeSpecialCharacters;
        var alphabetLowerCase = ""abcdefghijklmnopqrstuvwxyz"";
        var alphabetUpperCase = alphabetLowerCase.toUpperCase();
        var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

        // Tests to see if password length is between 8-128 and a number
        while (true) {
          lengthOfPassword = prompt("How long do you want your password?", "Please enter a number from 8 to 128.");
            if (isNaN(lengthOfPassword) === false && lengthOfPassword > 7 && lengthOfPassword <129) {
                break;
            }
            alert("Please enter a valid length from 8 to 128");
        }

        // Test to make sure the user selected ay least one character type
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


        console.log(LENGTHOFPASSWORD);
        console.log(includeLowerCase);
        console.log(includeUpperCase);
        console.log(includeNumbers);
        console.log(includeSpecialCharacters);
          }
   

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
// alphabetUpperCase = alphabetLowerCase.toUpperCase();
// specialCharacters =  "!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// const generateRandomString = function(length=200){
//   return Math.random().toString().substr(2, length)
//   }

// let lengthOfPassword = prompt("How Long do you want the password to be?");

// const randstr = generateRandomString();

// ranstr





// var LENGTHOFPASSWORD;
// var includeLowerCase;
// var includeUpperCase;
// var includeNumbers;
// var includeSpecialCharacters;

// // Tests to see if password length is between 8-128 and a number
// while (true) {
//   LENGTHOFPASSWORD = prompt("How long do you want your password?", "Please enter a number from 8 to 128.");
//     if (isNaN(LENGTHOFPASSWORD) === false && LENGTHOFPASSWORD > 7 && LENGTHOFPASSWORD <129) {
//         break;
//     }
//     alert("Please enter a valid length from 8 to 128");
// }

// // Test to make sure the user selected ay least one character type
// while(true) {
//   includeLowerCase = confirm("Do you want to include lower case letters? Ok for Yes and Cancel for No");
//   includeUpperCase = confirm("Do you want to include upper case letters? Ok for Yes and Cancel for No");
//   includeNumbers = confirm("Do you want to include numbers? Ok for Yes and Cancel for No");
//   includeSpecialCharacters = confirm("Do you want to include special characters? Ok for Yes and Cancel for No");
//   if (includeLowerCase) {
//     break;
//   } 
//   else if (includeUpperCase){
//     break;
//   }
//   else if (includeNumbers) {
//     break;
//   }
//   else if (includeSpecialCharacters) {
//     break;
//   }
//     alert("You must select at least one type of character.")
// }


// console.log(LENGTHOFPASSWORD);
// console.log(includeLowerCase);
// console.log(includeUpperCase);
// console.log(includeNumbers);
// console.log(includeSpecialCharacters);

