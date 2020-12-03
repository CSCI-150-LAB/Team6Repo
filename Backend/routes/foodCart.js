const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const FoodItem= require("../models/FoodItems");
const cart = require("../models/cart.model")
const User = require("../models/user.model");
// does food search for now...
router.get("/", (req, res, next) => {
   
  });

//finds by id
router.get("/getcart/:userID", (req, res,next) => {
    const userID = req.params.userID;
    cart.findOne({_id:userID}).then(checkC =>{
      if(checkC){
        console.log("THERE IS A CART");
        res.json(checkC);
      }
      else{
        User.findById(userID).then(result => {
          const foodcart = new cart({
            _id: userID,
            userID: userID,
            username: result.name,
            price: 0,
            foodItems: []
          });
          foodcart.save().then(
            result =>{
              console.log("FOOD CART CREATED");
              res.json(result);
            }
          );
        })
      }
    }) 
});
  
router.post("/makecart/:userID", (req, res,next) => {
    const userID = req.params.userID;
    const foodcart = new cart({
      _id: userID,
      userID: userID,
      username: req.body.username,
      price: 0,
      foodItems: []
    });

    foodcart.save().then(
      result =>{
        console.log(result);
        res.status(201).json({message:"cart has been created successfully"});
      }
    );
});


router.post("/addtocart/:userID", (req, res,next) => {
    const userID = req.params.userID;
    const fooditemID = req.body.fooditem;
  
  
    cart.findOne({_id:userID}).then(checkC =>{
      if(checkC){
        FoodItem.findById(fooditemID).select('chefname price _id description foodname ethnicity').exec().then(result => {
          console.log("Found the Item!");
          console.log(result);
          cart.updateOne({_id:userID},{$push:{foodItems:result}}).then(result2 =>{
            console.log("updated Successfully");
            res.json("GOOD PUSH, CHECK NOW!");
          });
        });
      }
      else{
        const foodcart = new cart({
          _id: userID,
          userID: userID,
          username: req.body.username,
          price: 0,
          foodItems: [{}]
        });
    
        foodcart.save().then(
          () =>{
            FoodItem.findById(fooditemID).select('chefname price _id description foodname ethnicity').exec().then(result => {
              console.log("Found the Item!");
              console.log(result);
              cart.updateOne({_id:userID},{$push:{foodItems:result}},{upsert:true}).then(result2 =>{
                console.log("updated Successfully");
                res.json("GOOD PUSH, CHECK NOW!");
              }).catch(err =>{
                console.log("UHOH SOMETHING WENT WRONG IN UPDATE");
                res.status(500).json({message:"SHIIIIET", err: err});
              });
            });
          }
        );
      }
    })
});

  router.post("/:foodid", (req, res,next) => {
    const foodName = req.body._id;
    console.log(foodName);
    FoodItem.findById(foodName)
    .select("price")
    .then(foodprice => res.json(foodprice))
    .catch(err => res.status(420).json(err));
  });
  router.delete("/deletecart/:userID", (req, res,next) => {
    const userID = req.params.userID;
    cart.findByIdAndDelete(userID).then(result => {
      console.log(result);
      res.json("cart deleted");
    }).catch(err => {
      console.log("error uh oh");
      res.status(500).json({message:"Shit don't work",err:err});
    });
    /*
    cart.aggregate([
      {$match:{userID:userID}},
      {$set:{foodItems: {$concatArrays:["$foodItems",[result]]}}},
      {$set}
      ]).then(result2 =>{

    }).catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });*/

  });
  router.delete("/deletefood/:foodid", (req, res,next) => {
    const userID = req.params.userID;
    const fooditemID = req.body.fooditem;
    /*
    cart.aggregate([
      {$match:{userID:userID}},
      {$set:{foodItems: {$concatArrays:["$foodItems",[result]]}}},
      {$set}
      ]).then(result2 =>{

    }).catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });*/

  });
  module.exports = router; 