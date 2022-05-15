'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // var is function scoped, therefore if blocks don't matter
      var millenial = true;
      // creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      const str = `Oh, and you're a millenial, ${firstName}`;
      // Reassigning outer scope's variable
      output = 'NEWENW output';
      console.log(str);

      // funciton is block scoped (only in strict mode)
      function add(a, b) {
        return a + b;
      }

      // output = 'NEW OUTPUT';
    }
    // block scope in action (Reference error)
    // console.log(str);

    console.log(millenial);
    console.log(output);
    // Block scoped functions in strict mode
    // console.log(add(2, 3));
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// function scope in action (ReferenceError)
// console.log(age);
// console.log(millenial);

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Taewoo';
let job = 'student';
const year = 1996;

// Functions

console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));
console.log(addArrow);
// console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


/////////////////////////////
// this

// console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};

calcAge(1996);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};

calcAgeArrow(1996);

const jonas = {
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 1994,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
 
var firstName = 'Taewoo';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);
    // solution #1
    const self = this; // self or that

    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
// console.log(this.firstName);
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Taewoo',
  age: 25,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// marriedJessica = {};

// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Deuli');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
