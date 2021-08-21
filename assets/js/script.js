// Assignment code here
var numbersArr = [0,1,2,3,4,5,6,7,8,9];
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbolsArr = ["!","@","#","$","%","^","&","*","(",")","_","+"];
var userPasswordArr = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
var characterArr = []
var random = []



  var lengthPassword = prompt("How many characters would you like your password to contain?");
  console.log("The length of the password is:" + lengthPassword);
  if (lengthPassword < 8 || lengthPassword > 128 || isNaN(lengthPassword)) {
    alert("select a number that contains 8 characters.");
    console.log(lengthPassword)
    generatePassword()
  } else {
    console.log(lengthPassword)
    characterSelect()
  }
  function characterSelect() {
   var lowerCase = confirm("Click on OK to add lower case.");
    if (lowerCase === true) {
      characterArr.push(...lowerCaseArr);
    }

   var upperCase = confirm("Click on OK to add upper Case.");
   if (upperCase === true) {
     characterArr.push(...upperCaseArr);
   }

   var numbers = confirm("Click on Ok to add numbers.");
  if (numbers === true) {
    characterArr.push(...numbersArr);
  }

   var symbols = confirm("Click on OK to add symbols.");
   if (symbols === true) {
     characterArr.push(...symbolsArr)
   }  
   if (!lowerCase && !upperCase && !numbers && !symbols) {
   alert("You must choose a criteria");
    }
  };

  for (var i = 0; i < lengthPassword; i++) {
    var randomPass = characterArr[Math.floor(Math.random() * characterArr.length)]
    random.push(randomPass)
  }
  var randomPassword = random.toString().split(",").join("")
  return randomPassword
};

