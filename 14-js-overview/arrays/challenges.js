'use strict';

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
