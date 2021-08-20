// Assignment code here
var empty = [];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","_","+"];
var lengthPassword;
var input; 

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
  lengthPassword = prompt("How many characters would you like your password to contain?");
  console.log("The length of the password is:" + lengthPassword);
  if (!lengthPassword) {
  alert("Please enter correct amount");
  }
  else if(lengthPassword < 8 || lengthPassword > 128) {
    lengthPassword = prompt ("Password length must be at least 8 characters");
    console.log("The length of the password is:" + lengthPassword);
  } else {
    lowerCase = confirm("Click on OK to add lower case.");
    console.log("lowerCase" + lowerCase);
    upperCase = confirm("Click on OK to add upper Case.");
    console.log("upperCase" + upperCase);
    numbers = confirm("Click on Ok to add numbers.");
    console.log("numbers" + numbers);
    symbols = confirm("Click on OK to add symbols.");
    console.log("symbols" + symbols);
};

if (!lowerCase && !upperCase && !numbers && !symbols) {
   input = alert("You must choose a criteria");
 }
 
 else if (lowerCase && upperCase && numbers && symbols) {
   input = lowerCase.concat(upperCase, numbers, symbols);
 }
 
 else if (upperCase && numbers && symbols) {
   input = upperCase.concat(numbers, symbols, lowerCase);
 }
 
 else if (lowerCase && upperCase && numbers) {
   input = lowerCase.concat(upperCase, numbers);
 }
 
 else if (lowerCase && upperCase && symbols) {
   input = lowerCase.concat(upperCase, symbols);
 }
 
 else if (lowerCase && numbers && symbols) {
   input = lowerCase.concat(number, symbols);
 }
 
 else if (lowerCase && upperCase) {
   input = lowerCase.concat(upperCase);
 }
 
 else if (lowerCase && symbols) {
   input = lowerCase.concat(symbols);
 }
 
 else if (upperCase && numbers) {
   input = upperCase.concat(numbers);
 }
 
 else if (upperCase && symbols) {
   input = upperCase.concat(symbols);
 }
 
 else if (lowerCase && numbers) {
   input = lowerCase.concat(numbers);
 }
 
 else if (numbers && symbols) {
   input = numbers.concat(symbols);
 };

for (var i = 0; i < lengthPassword; i++) {
 var inputes = input[Math.floor(Math.random() * input.length)];
 empty.push(inputes);
 console.log(inputes);
}
var password = empty.join("");
console.log("The pasword is: " + password);
return password;
}
