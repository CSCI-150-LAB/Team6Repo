const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sellerSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6},
  email: { type: String, required: true, unique:true},
  name: {type: String, required: true},
  phone:{type: String, required:true},
  address:{ type: String, required: true},
  itemLinker:{type: String, required:true},
  ethnicity:{type: String, required:false},
  aboutMe: {type: String, required:true},
  certified: {type: Boolean, required:true},
}, {
  timestamps: true,
});

const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;