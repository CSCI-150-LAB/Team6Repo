const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const FoodItem= require("../models/FoodItems");

router.get("/", (req, res, next) => {
  FoodItem.find().then(fooditem => res.json(fooditem)).catch(err => res.status(420).json(err));
});

router.get("/name", (req, res,next) => {
  const fdesc = req.query.description;
  console.log(fdesc);
  FoodItem.find({$text : {$search : fdesc}}).then(fooditem => res.json(fooditem)).catch(err => res.status(420).json(err));
});

module.exports = router;