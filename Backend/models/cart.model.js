const { stringifyId } = require('admin-bro-mongoose/src/resource');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const cartSchema = new Schema({


    name:{
      type: String, 
      required: true, 
      minlength: 1
    },
    
    price:{
      type: Number, 
      required: true
    },
  
    foodItems: { 
      type: Array ,
      default: []
    }

    
  
  }, {
    timestamps: true,
  });
  
  const cart = mongoose.model('cart', cartSchema);
  
  module.exports = cart;