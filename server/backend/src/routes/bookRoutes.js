const express = require('express');
const BookController = require('../controllers/bookController');

const router = express.Router();

//Get all Books
router.get('/books', BookController.getBooks);

//Add a new Book
router.post('/books', BookController.addBook);

//Delete a Book by ID
router.delete('/books/:id', BookController.deleteBook);

module.exports = router;
