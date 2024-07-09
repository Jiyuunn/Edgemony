import React, { useState } from 'react';

function BookForm({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook({ title, author, genre });
    setTitle('');
    setAuthor('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titolo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autore"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Genere"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <button type="submit">Aggiungi Libro</button>
    </form>
  );
}

export default BookForm;
