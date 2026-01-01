const Book = require('../models/Book');

// Get all Books
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Add a new Book
exports.addBook = async (req, res) => {
    try {
        const { title, author, isbn, year } = req.body;
        const newBook = new Book({ title, author, isbn, year });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ error: 'Invalid data' });
    }
};

// Delete a Book by ID
exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Book.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ error: 'Book not found' });
        res.json({ message: 'Book has been deleted successfullt ' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};
