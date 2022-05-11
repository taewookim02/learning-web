"use strict";

// function test(temp1, temp2) {
//   temp1 = 1000;
//   temp2 = 2000;
//   console.log(temp1, temp2);
// }

// let a = 100;
// let b = 200;

// test(a, b);
// console.log(a, b);

const a = [1, 2, 3, 4];

function change(list) {
  // const b = [2, 3, 4, 5]; <
  list[0] = 1000;
  list[1] = 2000;
}

// const a = [23, 332, 33];

// funct
console.log(a);
// [1, 2, 3, 4]

change(a);

console.log(a);
// [1000, 2000, 3, 4]

// stack, heap<<

const a = [1, 2, 3, 4];
// -----------------
// address/reference
// -----------------

heap;
// --------------------------------------------------
// |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |
// --------------------------------------------------
