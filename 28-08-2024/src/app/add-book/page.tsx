// src/app/add-book/page.tsx
'use client';

import { useState, useTransition } from 'react';
import axios from 'axios';

const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleAddBook = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(() => {
      axios.post('/api/books', { title, author, description })
        .then(() => {
          setTitle('');
          setAuthor('');
          setDescription('');
        });
    });
  };

  return (
    <div>
      <h1>Aggiungi un nuovo libro</h1>
      <form onSubmit={handleAddBook}>
        <div>
          <label>Titolo</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Autore</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrizione</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isPending}>
          {isPending ? 'Aggiungendo...' : 'Aggiungi Libro'}
        </button>
      </form>
    </div>
  );
};

export default AddBookPage;
