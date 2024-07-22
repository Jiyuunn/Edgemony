import React from 'react';
import { useParams } from 'react-router-dom';

const books = [
  { id: 1, title: 'Libro 1', description: 'Descrizione completa del libro 1.', image: 'link_alla_immagine_1' },
  { id: 2, title: 'Libro 2', description: 'Descrizione completa del libro 2.', image: 'link_alla_immagine_2' },
  { id: 3, title: 'Libro 3', description: 'Descrizione completa del libro 3.', image: 'link_alla_immagine_3' },
];

const DettaglioLibro = () => {
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return <p>Libro non trovato</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">{book.title}</h1>
      <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded mt-4" />
      <p className="mt-4">{book.description}</p>
    </div>
  );
};

export default DettaglioLibro;
