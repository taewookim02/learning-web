'use strict';
/*
////////////////////////////////////////////////////
// Challenge 1

// set 1
// const dogsJuliaArr = [3, 5, 2, 12, 7];
// const dogsKateArr = [4, 1, 15, 8, 3];

// set 2
const dogsJuliaArr = [9, 16, 6, 8, 3];
const dogsKateArr = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = [...dogsJulia].slice(1, 3);
  const dogsCorrectedArr = dogsJuliaCopy.concat(dogsKate);

  dogsCorrectedArr.forEach(function (dog, i) {
    dog < 3
      ? console.log(
          `Dog number ${i + 1} is still a puppy 🐶 and is ${dog} year(s) old`
        )
      : console.log(
          `Dog number ${i + 1} is an adult, and is ${dog} years old 💀`
        );
  });
};

checkDogs(dogsJuliaArr, dogsKateArr);

////////////////////////////////////////////////////
// Challenge 2

const dogAges = [16, 6, 10, 5, 6, 1, 4];
// [16,6,10,5,6,1,4]
const calcAverageHumanAge = function (ages) {
  const humanAgeArr = ages.map(age => (age > 2 ? age * 4 + 16 : age * 2));
  const adultAgeArr = humanAgeArr.filter(age => age >= 18);

  // const average =
  //   adultAgeArr.reduce((acc, age) => acc + age, 0) / adultAgeArr.length;
  const average = adultAgeArr.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  console.log(`Array (human age): ${humanAgeArr}`);
  console.log(`Array (adult age): ${adultAgeArr}`);
  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1);
console.log(avg2);
const dogAges = [16, 6, 10, 5, 6, 1, 4];

// const calcAverageHumanAge = ages => {
//   const humanAges = ages.map(age => (age > 2 ? 16 + age * 4 : age * 2));
//   const adults = humanAges.filter(age => age > 18);
//   const adultsAvg = adults.reduce(
//     (acc, age, _, arr) => acc + age / arr.length,
//     0
//   );
//   return adultsAvg;
// };
const calcAverageHumanAge = ages => {
  const adultsAvg = ages
    .map(age => (age > 2 ? 16 + age * 4 : age * 2))
    .filter(age => age > 18)
    .reduce((acc, age, _, arr) => acc + age / arr.length, 0);
  return adultsAvg;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
 */

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1-2
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2-2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// 3-2

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4-2
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5-2
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6-2
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7-2
console.log(dogs.filter(checkEatingOkay));

// 8-2
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
/* 
// 1
dogs.forEach((val, i) => (val.recommendedFood = val.weight ** 0.75 * 28));
console.log(dogs);

// 2
dogs.forEach(val => {
  if (val.owners.includes('Sarah')) {
    console.log(
      val.curFood > val.recommendedFood * 0.9 &&
        val.curFood < val.recommendedFood * 1.1
        ? `It's eating too little: curFood: ${val.curFood}, recFood: ${val.recommendedFood}`
        : `It's eating too much curFood: ${val.curFood}, recFood: ${val.recommendedFood}`
    );
  }
});

// 3 (filter?) https://stackoverflow.com/questions/24806772/how-to-skip-over-an-element-in-map
const ownersEatTooLittle = [];
const ownersEatTooMuch = dogs.map(val => {
  if (val.curFood > val.recommendedFood * 1.1) {
    return val.owners.flat().filter(el => el !== undefined);
  } else if (val.curFood < val.recommendedFood * 0.9) {
    ownersEatTooLittle.push(val.owners.flat());
  }
});
const ownersEatMore = ownersEatTooMuch.flat().filter(el => el !== undefined);
const ownersEatLess = ownersEatTooLittle.flat();

// 4

console.log(`${ownersEatLess.join(' and ')}'s dogs eat too little!`);
console.log(`${ownersEatMore.join(' and ')}'s dogs eat too much!`);

// 5
dogs.forEach(val => {
  if (val.curFood === val.recommendedFood) console.log(true);
  else console.log(false);
});

// 6
dogs.forEach(val => {
  if (
    val.curFood > 0.9 * val.recommendedFood &&
    val.curFood < 1.1 * val.recommendedFood
  )
    console.log(true);
  else console.log(false);
});

// 7
const okayArr = dogs
  .map(val => {
    if (
      val.curFood > 0.9 * val.recommendedFood &&
      val.curFood < 1.1 * val.recommendedFood
    )
      return val;
  })
  .filter(el => el !== undefined);
console.log(okayArr);

// 8
const softCopy = dogs.slice().map(el => el.recommendedFood);
console.log(softCopy.sort((a, b) => a - b));
// movements.sort((a, b) => a - b);
*/
