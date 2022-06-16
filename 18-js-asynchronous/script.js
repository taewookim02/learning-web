"use strict";

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// asynchronous JS

///////////////////////////////////////
///////////////////////////////////////
// AJAX
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
// XMLHttpRequest

const renderCountry = function (data, className = "") {
  const countryLang = Object.keys(data.languages)[0];
  const countryCurr = Object.keys(data.currencies)[0];
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.continents[0]}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[countryLang]}</p>
    <p class="country__row"><span>💰</span>${
      data.currencies[countryCurr].name
    }</p>
  </div>
</article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbor = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    ///////////////////////////////////////
    // Callback Hell

    // Get neighbor country (2)
    const neighbor = data.borders?.[0];

    if (!neighbor) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, "neighbour");
    });
  });
};
/*

// getCountryAndNeighbor("portugal");
// getCountryAndNeighbor("usa");
// getCountryAndNeighbor("korea");
// getCountryAndNeighbor("china");
getCountryAndNeighbor("malaysia");

setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 second passed");
    setTimeout(() => {
      console.log("3 second passed");
      setTimeout(() => {
        console.log("4 second passed");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

 */
///////////////////////////////////////
// Promises, fetch API

// Promise: A container for a future value

// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch("https://restcountries.com/v3.1/name/portugal");
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// const getCountryData = function (country) {
//   // Country1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       // const neighbor = data[0].borders?.[0]; // <-- I don't understand optional chaining yet
//       const neighbor = "arasde";

//       if (!neighbor) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
//     })
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       console.log(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0]; // <-- I don't understand optional chaining yet
      // const neighbor = "arasde";

      if (!neighbor) throw new Error("No neighbour found");

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbor}`,
        "Country not found"
      );
    })

    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      console.log(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const titlize = function (str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const whereAmI = function (lat, lng) {
  // reverse geocoding
  // https://geocode.xyz/51.50354,-0.12768?geoit=xml
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      console.log(response);
      if (!response.ok)
        throw new Error(`You're going too fast! (${response.status})`);

      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${titlize(data.city)}, ${data.country}`);

      // renderCountry
      // getCountryData(data.country);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((response) => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      console.log(data[0].name.common);
    })
    .catch((err) => {
      console.log(`${err}!!💀`);
    });
};

btn.addEventListener("click", function () {
  whereAmI(36.4806143, 127.2451563);
  whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);
});
// 19.037, 72.873
// whereAmI(55.4509293, 50.304837);
// -33.933, 18.474
// 36.4806143,127.2451563
// getCountryData("South Korea");
