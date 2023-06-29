npx create-react-app book-list-app


import React from 'react';

const BookList = () => {
  // Array of books
  const books = [
    {
      title: 'Book 1',
      author: 'Author 1',
      genre: 'Genre 1',
    },
    {
      title: 'Book 2',
      author: 'Author 2',
      genre: 'Genre 2',
    },
    {
      title: 'Book 3',
      author: 'Author 3',
      genre: 'Genre 3',
    },
  ];

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;






import React from 'react';
import BookList from './BookList';

const App = () => {
  return (
    <div>
      <BookList />
    </div>
  );
};

export default App;




npm start
