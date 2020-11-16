const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const FoodItem= require("../models/FoodItems");

router.get("/", (req, res, next) => {
  FoodItem.find()
    .select("name price productImage")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        fooditems: docs.map(doc => {
          return {
            chefname: doc.chefname,
            price: doc.price,
            productImage: doc.productImage,
            request: {
              type: "GET",
              url: "http://localhost:3000/search/" + doc._id
            }
          };
        })
      };
      //   if (docs.length >= 0) {
      res.status(200).json(response);
      //   } else {
      //       res.status(404).json({
      //           message: 'No entries found'
      //       });
      //   }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/name", (req, res,next) => {
  const fdesc = req.query.description;
  console.log(fdesc);
  FoodItem.find({$text : {$search : fdesc}}).then(fooditem => res.json(fooditem)).catch(err => res.status(420).json(err));
});

module.exports = router;