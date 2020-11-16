const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodItemSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  chefname: { type: String, required: true },
  foodname: {type: String, required: true},
  description: { type: String, required: false },
  ethnicity: {type: String, required: false},
  //cookingTime:{type: Number, required:true},
  //userID: { type: Schema.Types.name, ref: 'userSchema'},
  price: { type: Number, required: true },
  productImageType: { type: String, required: false },
  productImage: {data: Buffer, 
    contentType: String }
}, {
  timestamps: true,
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;