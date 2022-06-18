// Exporting module
console.log("Exporting module");

// Blocking code
console.log("Start fetching users");
// Parcel doesn't support toplevel await
// const users = await fetch("https://jsonplaceholder.typicode.com/users");
console.log("Finished fetching users");

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 238;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
