import React from 'react';

const BookCard = ({ book, onDelete }) => {
  return (
    <div className="book-card">
      <div className="book-info">
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>ISBN:</strong> {book.isbn}</p>
        <p><strong>Year:</strong> {book.year}</p>
      </div>
      <button className="delete-btn" onClick={() => onDelete(book._id)}>
        Delete
      </button>
    </div>
  );
};

export default BookCard;
