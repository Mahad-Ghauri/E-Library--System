import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, onDelete }) => {
  return (
    <div className="book-list">
      {books.length > 0 && books.map((book) => (
        <BookCard key={book._id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BookList;
