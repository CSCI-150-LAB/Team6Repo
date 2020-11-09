const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const searchSchema = new Schema({
  search: { type: String, required: true, unique: true }, //implied to be a type of food is being searched
}, {
  timestamps: true,
});

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;