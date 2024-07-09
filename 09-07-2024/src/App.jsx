import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Filter from './components/Filter';
import './App.css';
import bunny from './assets/bunny.png';
import moon from './assets/moon.png';

function App() {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('');

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.genre.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="AppContainer">
      <h1>
        <img src={bunny} alt="Bunny" />
        Catalogo di Libri
        <img src={moon} alt="Moon" />
      </h1>
      <BookForm addBook={addBook} />
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <BookList books={filteredBooks} deleteBook={deleteBook} />
    </div>
  );
}

export default App;
