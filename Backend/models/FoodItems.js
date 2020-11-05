const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodItemSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  //description: { type: String, required: true },
  //ethnicity: {type: String, required: false},
  //cookingTime:{type: Number, required:true},
  //userID: { type: Schema.Types.ObjectId, ref: 'sellerSchema'},
  price: { type: Number, required: true },
  //productImage: { type: String, required: false }
  productImage: {data: Buffer, 
    contentType: String }
}, {
  timestamps: true,
});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;