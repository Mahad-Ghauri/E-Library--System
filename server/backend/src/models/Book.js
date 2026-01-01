const mongoose = require('mongoose');

// Define the Book schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true },
  year: { type: Number, required: true }
});

module.exports = mongoose.model('Book', bookSchema);