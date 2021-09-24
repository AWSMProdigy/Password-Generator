// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var passLen;
var useArray = [];

// Write password to the #password input
function writePassword() {
  useArray=[];
  var passwordText = document.querySelector("#password");
  getLength();
  getUpper();
  getLower();
  getSpecial();
  getNumber();
  var password = generatePassword(passLen);
  
  passwordText.value = password;

}

//Prompt for length, check for bad input, and save value
function getLength(){
  length = prompt("How many characters(8-128?)");
  if(isNaN(length) || (parseInt(length) < 8 || (parseInt(length) > 128))){
    alert("Must enter valid response");
    getLength();
  }
  else{
    passLen = parseInt(length);
  }
}

//Prompt for uppercase preference, check for bad input, and save value
function getUpper(){
  useUpper = String(prompt("Would you like to use uppercase characters?(y/n")).toLowerCase();
  if(useUpper!== "y" && useUpper !== "n"){
    alert("Please choose valid response");
    getUpper();
  }
  else if(useUpper == "y"){
    useArray.push(...uppercaseArray);
    console.log(useArray);
  }
}

//Prompt for lowercase preference, check for bad input, and save value
function getLower(){
  useLower = String(prompt("Would you like to use lowercase characters?(y/n")).toLowerCase();
  if(useLower!== "y" && useLower !== "n"){
    alert("Please choose valid response");
    getLower();
  }
  else if(useLower == "y"){
    useArray.push(...lowercaseArray);
  }
}

//Prompt for special character preference, check for bad input, and save value
function getSpecial(){
  useSpecial = String(prompt("Would you like to use special characters?(y/n")).toLowerCase();
  if(useSpecial!== "y" && useSpecial !== "n"){
    alert("Please choose valid response");
    getSpecial();
  }
  else if(useSpecial == "y"){
    useArray.push(...characterArray);
  }
}

//Prompt for number preference, check for bad input, and save value
function getNumber(){
  useNumber = String(prompt("Would you like to use numbers?(y/n")).toLowerCase();
  if(useNumber!== "y" && useNumber !== "n"){
    alert("Please choose valid response");
    getNumber();
  }
  else if(useNumber == "y"){
    useArray.push(...numbArray);
  }
}

//Take new array taken from all preferences and iterate through it and create a password and return it
function generatePassword(myLength){
  var temp= "";
  for(i = 0; i < myLength; i++){
    temp += useArray[Math.floor(Math.random() * useArray.length)];
  }
  console.log(temp);
  return temp;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
