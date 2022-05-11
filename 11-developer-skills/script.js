// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem

// 2. Breaking up into sub-problems
// - How to ignore errors
// Find max value in temp
// Find min value in temp
// Subtract min from max (amplitude) and return it

const calcTempAmplitude = temps => {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should now receive 2 arrays of temps

// 1. Understanding the problem
// - with 2 arrays, should we implement functionality twice? No, just merging two arrays would suffice

// 2. Sub problems
// - How to merge 2 arrays?
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'c'];
// const array3 = array1.concat(array2);

const calcTempAmplitudeNew = (t1, t2) => {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperatures, [3, 4, -100]);
console.log(amplitudeNew);

const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: 10,
  };

  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = (t1, t2) => {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 3, 5]);

// a) identify
console.log(amplitudeBug);
*/

//////////////////////////////////////
// Coding Challenge #1

// 1. Understanding the problem
// get an array as params
// log a string using `` in the console
// index of + 1 for the days
// for loop would suffice

// 2. Subproblems
// how to index + 1 the days
// the ...s

const printForecast = arr => {
  const spacer = ' ... '; //length + 1
  let finalLog = '';
  // let
  for (let i = 0; i < arr.length; i++) {
    finalLog += spacer + arr[i] + 'C in ' + (i + 1) + ' days';
  }
  finalLog += spacer;
  console.log(finalLog);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
