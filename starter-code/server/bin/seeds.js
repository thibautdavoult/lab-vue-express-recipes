// import model & data
// connect to db : mongoose.connect('localhost/')
// create the documents using the model and the data model.create and pass the array
// disconnect

// import model & data
const Dish = require("../models/dish");
const Ingredient = require("../models/ingredient");
const dishData = require("../../../data/dishes.json");
const ingredientData = require("../../../data/ingredients.json");
const mongoose = require("mongoose");

// connect to db : mongoose.connect('localhost/')
mongoose.connect("mongodb://localhost/recipes");

Ingredient.create(ingredientData, (err, ingredients) => {
  if (err) {
    console.log(err);
  }
  ingredients.forEach(ingredient => console.log(ingredient.name) );
  mongoose.disconnect();
})

// create the documents using the model and the data model.create and pass the array
Dish.create(dishData, (err, dishes) => {
  if (err) {
    console.log(err);
  }
  dishes.forEach(dish => console.log(dish.name) );
  mongoose.disconnect();
});
