"use strict";
/*
////////////////////////////////////////////////
// Strict mode and predefined keywords

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 4543;
// console.log(private);

////////////////////////////////////////////////
// Functions

function logger() {
  console.log("My name is Jonas");
}

// calling
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 5);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


////////////////////////////////////////////////
// Function declartions vs expressions

// Function declaration (not cascading)

const age1 = calcAge1(1996);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

// Function expression (Cascading order)
const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};
const age2 = calcAge2(1996);

console.log(age1, age2);
*/

////////////////////////////////////////////////
// Arrow functions

// Arrow function
const calcAge3 = (birthyear) => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
~``;
console.log(yearsUntilRetirement(1991, "taewoo"));
console.log(yearsUntilRetirement(1981, "bob"));
