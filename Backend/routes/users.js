const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs'); 
const keys = require('../config/keys'); 
const jwt = require('jsonwebtoken');
const session = require('express-session'); 


const validateRegInput = require('../validation/register');
const validateLogInput = require('../validation/login');
//const loginAuth = require('../authentication/auth');

const User = require('../models/user.model');
const { route } = require("./admin");
secretOrKey = 'secret'; 

/*
  This function lets the user register on the website. It calls the validateRegInput function which allows
  us to validate the register inputs as valid inputs. It then will use the mongoDB findOne() function to go into 
  the data base to search for the email and see if it exists. 
*/
router.post("/register", (req, res) => {

// takes the variables/constants from the function. 
const { err, isValid } = validateRegInput(req.body);
  if (!isValid) {
    return res.status(400).json(err);
  }
User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
// Hash password before saving in database

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) 
            throw err;

          newUser.password = hash;
          console.log(newUser);
          newUser
            .save()
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
  const password = req.body.password;

User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

// Check password
    bcrypt.compare(password, user.password)
    .then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        
// Sign token
        jwt.sign(payload, keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
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

router.get('/profile',(req,res) => { 

  console.log(res.User);
})

/*
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  const password = req.body.password;
  const name    = req.body.name;
  const email   = req.body.email;

  const newUser = new User({password,name,email});        

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
*/

module.exports = router;