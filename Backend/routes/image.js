const router = require('express').Router();
const multer = require("multer");
let Image = require('../models/images.model');

router.route('/').get((req, res) => {
  Image.find()
    .then(images => res.json(images))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const picture = req.body.picture;
  
  const newImage = new Image({username,picture});        

  newImage.save()
    .then(() => res.json('Image added!'))
    .catch(err => res.status(400).json('Error: ' + err));
    
});

module.exports = router;