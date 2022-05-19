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
