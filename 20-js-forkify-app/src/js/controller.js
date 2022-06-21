'use strict';
import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable'; // polifilling everything else
import 'regenerator-runtime/runtime'; // polifilling async await
// forkify API key : 94b4e9b1-f224-4eff-89b2-4f3bf4c2ae41

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// npm init
// package.json:
// Remove main for Parcel v2
// "scripts": {
//   "start": "parcel index.html",
//   "build": "parcel build index.html"
// },
// npm i core-js regenerator-runtime

///////////////////////////////////////
// Recipe API | Rendering the recipe

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
