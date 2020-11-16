const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');
const fs = require('fs');
const FoodItem= require("../models/FoodItems");


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '../public/uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, req.body.chefname + "_" + req.body.foodname + req.body._id + "." + file.mimetype.substring(6,file.mimetype.length));
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 20
  },
  fileFilter: fileFilter
});

router.get("/", (req, res, next) => {
  FoodItem.find()
    .select("name price _id productImage")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          return {
            name: doc.name,
            price: doc.price,
            productImage: doc.productImage,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost:3000/fooditems/" + doc._id
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

router.post("/add", upload.single('productImage'), (req, res, next) => {
  
  const fooditem = new FoodItem({
    _id: new mongoose.Types.ObjectId(),
    chefname: req.body.chefname,
    foodname: req.body.foodname,
    description: req.body.description,
    ethnicity: req.body.ethnicity,
    //cookingTime: req.body.cookingTime,
    //userID: req.body.userID,
    price: req.body.price,
    productImage: req.file.path
  });
  
  fooditem
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created food item successfully",
        FoodItemCreated: {
            chefname: result.chefname,
            foodname:req.body.foodname,
            price: result.price,
            description: result.description,
            ethnicity: result.ethnicity,
            _id: result._id,
            productImage: result.productImage,
            request: {
                type: 'GET',
                url: "http://localhost:5000/fooditems/" + result._id
            }
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  FoodItem.findById(id)
    .select('chefname price _id productImage')
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
            fooditems: doc,
            request: {
                type: 'GET',
                url: 'http://localhost:3000/fooditems'
            }
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:productId", (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  FoodItem.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Product updated',
          request: {
              type: 'GET',
              url: 'http://localhost:3000/fooditems/' + id
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/:productId", (req, res, next) => {
  const id = req.params.productId;
  FoodItem.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
          message: 'Product deleted',
          request: {
              type: 'POST',
              url: 'http://localhost:3000/fooditems',
              body: { name: 'String', price: 'Number' }
          }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;