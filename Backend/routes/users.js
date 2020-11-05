const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs'); 
const keys = require('../config/keys'); 
const jwt = require('jsonwebtoken');


const validateRegInput = require('../validation/register');
const validateLogInput = require('../validation/login');

const User = require('../models/user.model');

/*
router.post('/register', (req, res) => {
      const { errors, isValid } = validateRegInput(req.body); 
  // basically this checks the validaiton, if not valid, return error message
    if (!isValid){ 
      return res.status(400).json(errors); 
    }

// use mongoDB findone() function to find the username in the database.
  User.findOne({ 
    email: req.body.email
})
.then (user => { 
  if (user){ 
    return res.state(400).json({ email: "Sorry. The email that you entered already exists."});
  } else { 
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    
    // using bycrypt so that when we store password, it's not stored in plain text. 
    // code example from mongoDB ("Password Authentication with Mongoose")
    bcrypt.genSalt(10, (err, salt) => { 
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
            throw err;
        }
        newUser.password = hash;
        newUser.save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
        });
      });
    }
  });
});
*/

router.post("/register", (req, res) => {
  // Form validation
const { errors, isValid } = validateRegInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
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
          if (err) throw err;
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


router.post("/login", (req, res) => {
  // Form validation
const { errors, isValid } = validateLogInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;


// Find user by email
User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }


// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
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