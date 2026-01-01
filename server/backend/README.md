# Integrating Backend with Frontend: Smart Library System

This guide explains how to connect your React frontend to the Node.js/Express/MongoDB backend for the Smart Library System. It covers API endpoints, request/response formats, CORS, and the Book model structure.

---

## 1. Backend API Overview

- **Base URL:** `http://localhost:3000/api`
- **CORS:** Enabled for all origins (frontend can make requests from any domain)

### Endpoints

#### 1. Get All Books
- **URL:** `/books`
- **Method:** `GET`
- **Response:**
```
[
  {
    "_id": "string",
    "title": "string",
    "author": "string",
    "isbn": "string",
    "year": number
  },
  ...
]
```

#### 2. Add a New Book
- **URL:** `/books`
- **Method:** `POST`
- **Request Body:**
```
{
  "title": "string",
  "author": "string",
  "isbn": "string",
  "year": number
}
```
- **Response:**
```
{
  "_id": "string",
  "title": "string",
  "author": "string",
  "isbn": "string",
  "year": number
}
```

#### 3. Delete a Book
- **URL:** `/books/:id`
- **Method:** `DELETE`
- **Response:**
```
{
  "message": "Book deleted"
}
```

---

## 2. Book Model (Frontend Reference)

Use this model in your frontend for type safety and form validation:

```js
// Book model (TypeScript interface or JS object shape)
{
  _id: string,      // MongoDB document ID
  title: string,    // Book title
  author: string,   // Author name
  isbn: string,     // ISBN number
  year: number      // Publication year
}
```

---

## 3. Example: Fetching Books from Backend (React)

```js
fetch('http://localhost:3000/api/books')
  .then(res => res.json())
  .then(data => setBooks(data));
```

---

## 4. Example: Adding a Book (React)

```js
fetch('http://localhost:3000/api/books', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title, author, isbn, year })
})
  .then(res => res.json())
  .then(newBook => setBooks(prev => [...prev, newBook]));
```

---

## 5. Example: Deleting a Book (React)

```js
fetch(`http://localhost:3000/api/books/${bookId}`, {
  method: 'DELETE'
})
  .then(res => res.json())
  .then(() => setBooks(prev => prev.filter(b => b._id !== bookId)));
```

---

## 6. Notes
- Ensure the backend server is running before making requests.
- All API responses are in JSON.
- Handle errors in your frontend for better UX.
- The frontend should use the Book model fields as shown above for forms and display.

---

For further questions or issues, check your browser console and backend logs for error messages.
