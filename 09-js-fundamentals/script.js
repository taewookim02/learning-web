////////////////////////////////////////////
// Variables
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("taewoo");
console.log(23);

let firstName = "Matilde";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jona_matilda = "JM";
let $function = 26;
// let name = "Jonas";

let Person = "jonas";
let PI = 3.1415;

let myFirstJob = "programmer";
let myCurrentJob = "student";

console.log(myCurrentJob);

////////////////////////////////////////////
// Data types
true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof 23);
console.log(typeof javascriptIsFun);
// console.log(typeof "Jonas");

javascriptIsFun = "Yese!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);

year = 1092;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////////////
// let, const, var

// mutatable
let age = 30;
age = 31;

// immutable
const birthYear = 1999;
// birthYear = 2021;
// const job;

// oldschool
var job = "programmer";
job = "teacher";

// terrible
lastName = "Kim";
console.log(typeof lastName);


////////////////////////////////////////////
// Operators

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2028;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

////////////////////////////////////////////
// Coding challenge
// BMI = mass / height ** 2;

// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

const BMIMark = weightMark / heightMark ** 2;
const BMIJohn = weightJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

////////////////////////////////////////////
// Strings and template literals

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`jiust a relgusar string`);

console.log("string with \n\
multiple \n\
lines");

console.log(`String
Multiple lines
BRUH`);


////////////////////////////////////////////
// If, Else

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
}

const birthYear = 2021;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


// Coding challenge 2
// BMI = mass / height ** 2;

// const weightMark = 78;
// const heightMark = 1.69;
// const weightJohn = 92;
// const heightJohn = 1.95;

weightMark = 95;
heightMark = 1.88;
weightJohn = 85;
heightJohn = 1.76;

const BMIMark = weightMark / heightMark ** 2;
const BMIJohn = weightJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

// if (BMIMark > BMIJohn) {
//   console.log(`Marks' BMI is higher than John's!`);
// } else {
//   console.log(`John's BMI is higher than Mark's!`);
// }
if (BMIMark > BMIJohn) {
  console.log(`Marks' BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`);
}


////////////////////////////////////////////
// Type conversion and coercion

// type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 19, inputYear);
console.log(inputYear + 19);

console.log(Number("Taewoo"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n);


////////////////////////////////////////////
// Falsey values and truthsy

// Falsey values:
// 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

const money = 10;

if (money) {
  console.log("don't spend it all ;)");
} else {
  console.log("you should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! height is defined");
} else {
  console.log("Height is not degfined");
}


////////////////////////////////////////////
// Equality operators == vs ===

const age = "18";
if (age === 18) console.log("You became an adult!");

if (age == 18) console.log("You became an adult!");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is cool too");
} else {
  console.log("Number is not 23 nor 7");
}

if (favorite !== 23) console.log("why not 23?");


////////////////////////////////////////////
// Boolean logic

const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}


////////////////////////////////////////////
// Coding challenge #3

// const avgDolphins = (96 + 108 + 89) / 3; //97.6666667
// const avgKoalas = (96 + 108 + 90) / 3; //96.33333

// if (avgDolphins > avgKoalas) {
//   console.log("winner is Dolphins!");
// } else if (avgDolphins === avgKoalas) {
//   console.log("draw!");
// } else {
//   console.log("winner is Koalas! :D");
// }

// Data1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 123) / 3;

// if (avgDolphins === avgKoalas) {
//   console.log("draw!");
// } else if (avgDolphins > avgKoalas && avgDolphins >= 100) {
//   console.log("winner is Dolphins!");
// } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
//   console.log("winner is Koalas! :D");
// } else {
//   console.log("🤔");
// }

const avgDolphins = 99;
const avgKoalas = 98;

if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
  console.log("draw!");
} else if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log("winner is Dolphins!");
} else if (avgKoalas > avgDolphins && avgKoalas > 100) {
  console.log("winner is Koalas! :D");
} else {
  console.log("🤔");
}


////////////////////////////////////////////
// Switch statement

const day = "thursday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}


////////////////////////////////////////////
// Statements and expressions

3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}
const me = "Jonas";
console.log(`I'm ${2034 - 1222} years old. ${me}`);

////////////////////////////////////////////
// Conditional (ternary) operator

const age = 8;
// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💦");

const drink = age >= 18 ? "wine 🍷" : "water 💦";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}.`);


////////////////////////////////////////////
// Coding challenge #4

const bill = 430;
let tip;

console.log(
  `The bill was ${bill}, the tip was ${
    bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2)
  } and the total value ${tip + bill}`
);

const bill2 = 430;
const tip2 = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill2}, the tip was ${tip2}, and the total value ${
    bill2 + tip2
  }`
);
*/

////////////////////////////////////////////
