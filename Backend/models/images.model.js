const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  username: {
    type: String,
    required: false,
    unique: true,
    trim: true,
    minlength: 3
  },
  picture:{
  }
}, {
  timestamps: true,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;