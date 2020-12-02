const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const passport = require('passport'); 
const session = require('express-session');

const validateRegInput = require('../validation/registerValidation');
const validateLogInput = require('../validation/loginValidation');


const User = require('../models/user.model');
const { route } = require("./admin");



/*
  This function lets the user register on the website. It calls the validateRegInput function which allows
  us to validate the register inputs as valid inputs. It then will use the mongoDB findOne() function to go into 
  the data base to search for the email and see if it exists. 
*/
router.post("/register", (req, res) => {
// takes the variables/constants from the function. 
console.log(req.body);
const { err, isValid } = validateRegInput(req.body);
  if (!isValid) {
    console.log("messed up here");
    return res.status(400).json(err);
  }     
  
User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists, try another" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone_number: req.body.phone_number,
        password: req.body.password, 
        role: req.body.role
      });
// Hash password before saving in database for security purposes
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) 
            throw err;
          newUser.password = hash;
          console.log(newUser);
          newUser.save()
            .then(user => res.json("User added!"))
            .catch(err => console.log(err));
        });
      });
    

    }
  });
});

/*
  This function allows the user if they are registered to login using their credentials. It will use the variables 
  that are returned by the validateLogInput() functiuon to determine if the input fields are first valid and then 
  go into the MongoDB database using the findOne function to check if the email exists or not along with the password. 
  If there is a match and it is a success, there will be assigned a JWT payload and token. 
*/
router.post("/login", (req, res) => {
 
const { err, isValid } = validateLogInput(req.body);
  if (!isValid) {
    return res.status(400).json(err);
  }
  const email = req.body.email;
  const address = req.body.address;
  const phone_number = req.body.phone_number;
  const password = req.body.password;

User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

// Check password
    bcrypt.compare(password, user.password)
    .then(valid => {
      if (valid) {
        // If User matched
        // Create JWT Payload that will be used for token
        const payload = {
          id: user.id,
          name: user.name,  
          address: user.address,
          email: user.email,
          phone_number: user.phone_number,
          role: user.role
        };
        // create jwt
        jwt.sign(payload, process.env.secretOrkey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
            /*
            res.header('auth-token', token)
            .send(token); 
            */
          }
        );

      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});




module.exports = router;