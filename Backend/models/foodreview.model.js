const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodreviewSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  review: {type: String, required: true},
  
}, {
  timestamps: true,
});

const FoodReview = mongoose.model('foodreview', foodreviewSchema);

module.exports = FoodReview;