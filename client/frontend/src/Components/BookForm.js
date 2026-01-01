import React, { useState } from 'react';

const BookForm = ({ onAddBook }) => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    isbn: '',
    year: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.title && form.author && form.isbn && form.year) {
      
      onAddBook({ ...form, year: Number(form.year) });
      setForm({ title: '', author: '', isbn: '', year: '' });
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Book Title" required />
      <input name="author" value={form.author} onChange={handleChange} placeholder="Author Name" required />
      <input name="isbn" value={form.isbn} onChange={handleChange} placeholder="ISBN Number" required />
      <input name="year" value={form.year} onChange={handleChange} placeholder="Publication Year" required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
