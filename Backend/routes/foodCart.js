const express = require("express");
const router = express.Router();
const FoodItem= require("../models/FoodItems");


// does food search for now...
router.get("/", (req, res, next) => {
    FoodItem.find()
      .select("name price productImage")
      .exec()
      .then(docs => {
        const response = {
          count: docs.length,
          products: docs.map(doc => {
            return {
              name: doc.name,
              price: doc.price,
              productImage: doc.productImage,
              request: {
                type: "GET",
                url: "http://localhost:3000/search/" + doc._id
              }
            };
          })
        };
        res.status(200).json(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

//finds by id
  router.get("/price", (req, res,next) => {
    const foodName = req.body._id;
    console.log(foodName);
    FoodItem.findById(foodName)
    .select("price")
    .then(foodprice => res.json(foodprice))
    .catch(err => res.status(420).json(err));
  });

  module.exports = router; 