const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  ethnicity: {type: String, required: false},
  cookingTime:{type: Number, required:true},
  date: { type: Date, required: true },
  userID: { type: Schema.Types.ObjectId, ref: 'sellerSchema'},
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