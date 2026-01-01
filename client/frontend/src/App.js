
import React, { useState, useEffect } from 'react';
import './App.css';
import BookForm from './Components/BookForm';
import BookList from './Components/BookList';
import bookIcon from './assets/book_icon.png';

const API_URL = 'http://localhost:3000/api/books';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await fetch(API_URL);
      const contentType = res.headers.get('content-type');
      if (!res.ok) {
        throw new Error('Could not connect to the backend. Please ensure the backend server is running.');
      }
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const data = await res.json();
        setBooks(data);
      } else {
        console.warn('Received non-JSON response from backend.');
      }
    } catch (err) {
      if (err.message.includes('Could not connect')) {
        alert(err.message);
      } else {
        console.error('Error fetching books:', err);
      }
    }
  };

  const addBook = async (book) => {
    const bookToSend = { ...book, year: Number(book.year) };
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookToSend)
      });
      if (res.ok) {
        const newBook = await res.json();
        setBooks((prev) => [...prev, newBook]);
      } else {
        const error = await res.text();
        alert('Error adding book: ' + error);
      }
    } catch (err) {
      alert('Error adding book: ' + err.message);
    }
  };

  const deleteBook = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setBooks((prev) => prev.filter((b) => b._id !== id));
      } else {
        const error = await res.text();
        alert('Error deleting book: ' + error);
      }
    } catch (err) {
      alert('Error deleting book: ' + err.message);
    }
  };

  return (
    <>
      <div className="app-container">
        <div className="app-header">
          <img src={bookIcon} alt="Library Icon" className="library-icon" />
          <span className="library-title">Smart Library System</span>
        </div>
        <BookForm onAddBook={addBook} />
        <BookList books={books} onDelete={deleteBook} />
      </div>
      {books.length === 0 && (
        <div className="no-books-bar">
          <span className="no-books-text">No books in the library.</span>
        </div>
      )}
    </>
  );
}

export default App;
