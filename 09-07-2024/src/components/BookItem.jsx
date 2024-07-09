import React from 'react';

function BookItem({ book, deleteBook }) {
  return (
    <li>
      <strong>{book.title}</strong> di {book.author} (Genere: {book.genre})
      <button onClick={deleteBook}>Elimina</button>
    </li>
  );
}

export default BookItem;
