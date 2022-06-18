const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// npm init
// package.json:
// Remove main for Parcel v2
// "scripts": {
//   "start": "parcel index.html",
//   "build": "parcel build index.html"
// },
