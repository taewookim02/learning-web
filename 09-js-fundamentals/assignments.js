////////////////////////////////////////////
// Values and variables

let country = "South Korea";
let continent = "Asia";
let population = 51980000;

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

const finlandPop = 6000000;
// console.log(finlandPop < population);

const avgPop = 33000000;
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

////////////////////////////////////////////
