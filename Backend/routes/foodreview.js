const router = require('express').Router();
let FoodReview = require('../models/foodreview.model');

router.route('/').get((req, res) => {
  FoodReview.find()
    .then(foodreviews => res.json())
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const review = req.body.review;

  const newReview = new FoodReview({username, review});        

  newReview.save()
    .then(() => res.json('Review added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;