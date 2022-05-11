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

////////////////////////////////////////////////
// Functions inside functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


////////////////////////////////////////////////
// Function reviews

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

////////////////////////////////////////////////
// Coding challenge #1

const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// team only wins if it has at least double the average score, otherwise no team wins

// case 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

console.log(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins 😭");
  }
}

checkWinner(avgDolphins, avgKoalas);

// case 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);
checkWinner(avgDolphins, avgKoalas);


////////////////////////////////////////////////
// Arrays

const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Tom";

const friends = ["Michael", "Steven", "Tom"];
console.log(friends);

// const years = new Array(1991, 1921, 1202, 2222);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);


////////////////////////////////////////////////
// Array operations

const friends = ["Michael", "Steven", "Tom"];

// Add elements
const newLength = friends.push("Jonas");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); //Last element
const popped = friends.pop(); //Last element
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
} else {
  friends.push("Peter");
}
console.log(friends);


////////////////////////////////////////////////
// Coding challenge #2

// tip 15% if 300 >= bill >= 50
// else tip = 20%

// function expression
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// arrow function
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// function declaration
// function calcTip(billValue) {
//   if (300 >= billValue && billValue >= 50) {
//     return billValue * 0.15;
//   } else {
//     return billValue * 0.2;
//   }
// }

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills);
console.log(tips);
console.log(total);


////////////////////////////////////////////////
// Objects

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2038 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// Brackets and dot notation

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);
// console.log(jonas["last"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// 'Jonas has 3 friends, and his best friend is called Michael'
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas["friends"][0]}`
);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);


////////////////////////////////////////////////
// Object methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"

console.log(jonas.getSummary());


////////////////////////////////////////////////
// Coding challenge #3

// BMI = mass / height ** 2

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  // mass: 92,
  // height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
  // calcBMI: () => (this.BMI = this.mass / this.height ** 2),
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
  // BMI: () => this.mass / this.height ** 2,
};

mark.calcBMI();
john.calcBMI();
console.log(mark.BMI);
console.log(john.BMI);

john.BMI > mark.BMI
  ? console.log(
      `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`
    )
  : console.log(
      `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`
    );

if (john.BMI > mark.BMI) {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`
  );
} else if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`
  );
}

// const whoHasHigherBMI = function (BMI1, BMI2) {
//   BMI1 > BMI2
//     ? console.log(
//         `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})`
//       )
//     : console.log(
//         `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})`
//       );
// };
// whoHasHigherBMI(john.BMI, mark.BMI);


////////////////////////////////////////////////
// For loops

// console.log("Lifting weights repitition 2 🏋️‍♀️");
// console.log("Lifting weights repitition 3 🏋️‍♀️");
// console.log("Lifting weights repitition 4 🏋️‍♀️");
// console.log("Lifting weights repitition 5 🏋️‍♀️");
// console.log("Lifting weights repitition 6 🏋️‍♀️");
// console.log("Lifting weights repitition 7 🏋️‍♀️");
// console.log("Lifting weights repitition 8 🏋️‍♀️");
// console.log("Lifting weights repitition 9 🏋️‍♀️");
// console.log("Lifting weights repitition 10 🏋️‍♀️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repitition ${rep} 🏋️‍♀️`);
}

// const myList = ["hello", "world", "stack", "voiter"];
// myList.splice(1, 3);
// console.log(myList);


////////////////////////////////////////////////
// For loop arrays continuing and breaking
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2038 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  // Reading from jonas array
  console.log(jonasArray[i], typeof jonasArray[i]);

  // Filling types array
  // types[i] = typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("----- ONLY STRINGS -----");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("----- BREAK WITH NUMBER -----");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}



////////////////////////////////////////////////
// looping backwards

const jonas = [
  "Jonas",
  "Schmedtmann",
  2038 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------- Starting exercise ${exercise}`);
  if (exercise === 1) {
    for (let rep = 1; rep <= 5; rep++) {
      console.log(`Exercise ${exercise}: Bench presses${rep} 🏋️‍♀️`);
    }
  } else if (exercise === 2)
    for (let rep = 1; rep <= 5; rep++) {
      console.log(`Exercise ${exercise}: Cable flies ${rep}🏋️‍♀️`);
    }
  else if (exercise === 3) {
    for (let rep = 1; rep <= 5; rep++) {
      console.log(`Exercise ${exercise}: Dumbell flies${rep} 🏋️‍♀️`);
    }
  }
}
*/

////////////////////////////////////////////////
// While loops
