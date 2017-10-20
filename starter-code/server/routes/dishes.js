const express = require("express");
const Dish = require("../models/dish");

const router = express.Router();

router.get("/", (req, res, next) => {
  Dish.find().then(dishes => {
    res.json(dishes);
  });
});

router.get("/:dishId", (req, res, next) => {
  const id = req.params.dishId;
  Dish.findById(id).then(dish => {
    res.json(dish);
  });
});

router.put("/:dishId", (req, res, next) => {
  const id = req.params.dishId;
  const updateDish = {
    name: req.body.name,
    description: req.body.description,
    image: req.body.image
  };
  Dish.findByIdAndUpdate(id, updateDish).then(dish => {
    res.json(updateDish);
  });
});

router.post("/", (req, res, next) => {
  const newDish = new Dish({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image
  });
  newDish.save().then(dish => {
    res.json(dish);
  });
});

module.exports = router;
