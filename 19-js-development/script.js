//////////////////////////////////////////
// Importing module
// import { addToCart, totalPrice as price, qt } from "./shoppingCart.js";
// addToCart("bread", 5);
// console.log(price, qt);
console.log("Importing module");

// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("btbbbbbbbbbb   nbbbbb", 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, qt } from "./shoppingCart.js";
// console.log(price, qt);

import add, { cart } from "./shoppingCart.js";
add("bread", 213);
add("spinace", 2);
add("apple", 4);

console.log(cart);
/*

//////////////////////////////////////////
// Top level await
// console.log("Start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("Something");

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not very clean
// lastPost.then((last) => console.log(last));

// Top-level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
//////////////////////////////////////////
// Module patterns, closures, encapsulation

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("apples", 4);
ShoppingCart2.addToCart("gum", 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);

//////////////////////////////////////////
// CommonJS modules


// Export in node
export.addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(
    `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
  );
};
// Import 
const { addToCart } = require('./shoppingCart.js');
 */

//////////////////////////////////////////
// Command line

// ls
// cd ..
// cd ../..
// cd coding/github/taewookim.github.io
// cd 13 <tab>
// cmd + k == clear
// mkdir TEST
// touch index.html
// touch script.js
// touch taewoo.js bankist.js three.js
// rm script.js taewoo.js bankist.js
// mv jonas.js ../
// rmdir TEST <-- directory not empty
// rm -R TEST <-- -R stands for recursive

//////////////////////////////////////////
// Introduction to NPM

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es"; //parcel is smart
// import cloneDeep from "lodash"; //parcel is smart < not working

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 4 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);
state.user.loggedIn = false;

console.log(stateDeepClone);

//////////////////////////////////////////
// Parcel bundling

// npx parcel index.html
// npm run start <-- after putting "start": "parcel index.html", in package.json
// npm run build

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = "hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person("Jonas");

console.log("Jonas" ?? null);

console.log(cart.find((el) => el.quantity >= 2));
Promise.resolve("TEST").then((x) => console.log(x));

// Polifilling
// npm i core-js
import "core-js/stable";
// import "core-js/stable/array/find";
// import "core-js/stable/promise";

// Polifilling async functions
// npm i regenerator-runtime
import "regenerator-runtime/runtime";

//////////////////////////////////////////
// Modern and Clean code
