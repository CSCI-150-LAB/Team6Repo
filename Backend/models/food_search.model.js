const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const searchSchema = new Schema({
  search: { type: String, required: true }, //implied to be a type of food is being searched. This should be connected to FoodItems.js
}, {
  timestamps: true,
});

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;