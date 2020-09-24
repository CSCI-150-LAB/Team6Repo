const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const buyerSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;