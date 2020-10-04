const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodItemSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  ethnicity: {type: String, required: false},
  cookingTime:{type: Number, required:true},
  date: { type: Date, required: true },
  img: 
    { 
        data: Buffer, 
        contentType: String 
    } 
}, {
  timestamps: true,
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;