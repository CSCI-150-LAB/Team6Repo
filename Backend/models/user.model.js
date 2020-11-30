const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  /*
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  */
  password: {
    type: String,
    required: true,
    unique:false,
    trim: false,
    minlength: 1
  },
  name:{
    type: String,
    required: true,
    unique: true,
    minlength: 2
  },
  
  email:{
    type: String,
    required: true,
    unique: true
  },

  address:{
    type: String,
    required: true,
    unique: false
  },

  phone_number:{
    type: String,
    required: true,
    unique: true
  },


  role: { 
    type: String, 
    require: true, 
    unique: false
  }
  /*
  address:{
    type: String,
    required: true,
  }
  */
 /*
 date:{
  type: Date,
  default: Date.now
},
*/
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;