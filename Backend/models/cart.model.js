const { stringifyId } = require('admin-bro-mongoose/src/resource');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const cartSchema = new Schema({

    userID:{
      type: String,
      required: true,
      unique: true
    },

    username:{
      type: String, 
      required: true, 
      minlength: 1
    },
    
    price:{
      type: Number, 
      required: true
    },
  
    foodItems: [{type: Object}],

    testing: {type: Array,required: true, default: [{}]}
  }, {
    timestamps: true,
  });
  
  const cart = mongoose.model('cart', cartSchema);
  
  module.exports = cart;