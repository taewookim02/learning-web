////////////////////////////////////////////
// Values and variables

let country = "South Korea";
let continent = "Asia";
let population = 51.9;

// console.log(country, continent, population);

////////////////////////////////////////////
// Data types

// let isIsland = false;
let language;

////////////////////////////////////////////
// let, const and var

language = "korean";
const isIsland = false;
// isIsland = true; // immutable

////////////////////////////////////////////
// Basic operators

const halfPopulation = population / 2;
population++;
// console.log(population);

const finlandPop = 6;
// console.log(finlandPop < population);

const avgPop = 33;
// console.log(avgPop < population);

// const description =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " people speak " +
//   language;
// console.log(description);

////////////////////////////////////////////
// String template literals

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
// console.log(description);

////////////////////////////////////////////
// If, else

// if (population > 33000000) {
//   console.log(`${country}'s population is above average.`);
// } else {
//   console.log(
//     `${country}'s population is ${33000000 - population} below average.`
//   );
// }

////////////////////////////////////////////
// Type conversion and coercion 😲

// 4;      4
// 617;    617
// 617;    23
// false;  false
// 117;    1143

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

////////////////////////////////////////////
// Equality operators == vs ===

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) console.log("Only 1 border!");
// else if (numNeighbours > 1) console.log("More than 1 border!");
// else console.log("No borders");

////////////////////////////////////////////
// Logical operators

// if ((language === "English" && population < 5000000) || isIsland === false) {
//   console.log("You should live in Portugal :)");
// } else {
//   console.log("Portugal does not meet your criteria :(");
// }

////////////////////////////////////////////
// Switch statement

// switch (language) {
//   case "chinese":
//     console.log("MOST number of native speakers");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
// }

////////////////////////////////////////////
// Conditional (ternary) operator

// population > 33000000
//   ? console.log("South Korea's population is above average")
//   : console.log(`${country}'s population is below average`);

//////////////////////////////////////////// Functions

// function describeCountry(country, population, capitalCity) {
//   const output = `${country} has ${population} people and its capital city is ${capitalCity}`;
//   return output;
// }

// korea = describeCountry(country, population, "Seoul");
// india = describeCountry("India", 1000000000, "Delhi");
// china = describeCountry("China", 1200000000, "Beijing");

// console.log(korea, india, china);

////////////////////////////////////////////
// functions
function percentageOfWorld1(population) {
  return (population / 790) * 100;
}

populationChina = 144;
populationJapan = 20;

// console.log(percentageOfWorld1(population));
// console.log(percentageOfWorld1(populationChina));
// console.log(percentageOfWorld1(populationJapan));

const percentageOfWorld2 = function (population) {
  return (population / 790) * 100;
};

// console.log(percentageOfWorld2(population));
// console.log(percentageOfWorld2(populationChina));
// console.log(percentageOfWorld2(populationJapan));

////////////////////////////////////////////
// Arrow functions

const percentageOfWorld3 = (population) => (population / 79) * 100;
// const pop3 = percentageOfWorld3(population);
// console.log(pop3);
const percentageOfWorld4 = (population) => (population / 79) * 100;
////////////////////////////////////////////
// Functions inside functions

const describePopulation = function (country, population) {
  return `${country} has ${population} people, which is about ${percentageOfWorld3(
    population
  )}% of the world.`;
};

// console.log(describePopulation("China", populationChina));
// console.log(describePopulation("Japan", populationJapan));
// console.log(describePopulation(country, population));

////////////////////////////////////////////
// Arrays

const populationThai = 30;
// const populations = [
//   population,
//   populationChina,
//   populationJapan,
//   populationThai,
// ];

// console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(population),
  percentageOfWorld1(populationChina),
  percentageOfWorld1(populationJapan),
  percentageOfWorld1(populationThai),
];

// console.log(percentages);

////////////////////////////////////////////
// Array operations

neighbours = ["China", "North Korea", "Japan"];
neighbours.push("Utopia");
neighbours.pop();

// if (neighbours.includes("Germany")) {
//   console.log("Central EU?😉");
// } else {
//   console.log("Probably not a central European country :D");
// }

neighbours[neighbours.indexOf("China")] = "Taiwan";
// console.log(neighbours);

////////////////////////////////////////////
// Objects

const myCountry = {
  country: "South Korea",
  capital: "Seoul",
  language: "Korean",
  population: 55,
  neighbours: ["North Korea"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  // ${this.hasDriversLicense ? "a" : "no"}
  // checkIsIsland: function () {
  //   return this.neighbours.length
  //     ? (this.isIsland = false)
  //     : (this.isIsland = true);
  // },
  checkIsIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
  // this.isIsland = !Boolean(this.neighbours.length);
};

// console.log(myCountry);

////////////////////////////////////////////
// Dot vs. bracket notation

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );

myCountry.population = myCountry.population - 2;
// console.log(myCountry.population);
myCountry["population"] = myCountry["population"] + 2;
// console.log(myCountry.population);

////////////////////////////////////////////
// Object method

// myCountry.describe();
myCountry.checkIsIsland();
// console.log(myCountry);

////////////////////////////////////////////
// For loop
// for (i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting`);
// }

////////////////////////////////////////////
// Looping arrays, break, continue
const populations = [
  population,
  populationChina,
  populationJapan,
  populationThai,
];

const percentages2 = [];
for (i = 0; i < populations.length; i++) {
  percentages2.push((populations[i] / 790) * 100);
}
// console.log(populations);
// console.log(percentages);
// console.log(percentages2);

////////////////////////////////////////////
// Looping backwards and nested loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];
// for (i=0; )
console.log(listOfNeighbours);
