'use strict';

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
