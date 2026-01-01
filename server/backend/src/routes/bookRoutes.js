const express = require('express');
const BookController = require('../controllers/bookController');

const router = express.Router();


router.get('/books', BookController.getBooks);


router.post('/books', BookController.addBook);


router.delete('/books/:id', BookController.deleteBook);

module.exports = router;
