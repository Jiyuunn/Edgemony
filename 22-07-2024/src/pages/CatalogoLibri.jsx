import React from 'react';
import { Link } from 'react-router-dom';

const books = [
  { id: 1, title: 'Libro 1', description: 'Descrizione breve del libro 1.', image: 'link_alla_immagine_1' },
  { id: 2, title: 'Libro 2', description: 'Descrizione breve del libro 2.', image: 'link_alla_immagine_2' },
  { id: 3, title: 'Libro 3', description: 'Descrizione breve del libro 3.', image: 'link_alla_immagine_3' },
];

const CatalogoLibri = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center">Catalogo Libri</h1>
      <div className="mt-8 flex flex-wrap justify-center">
        {books.map(book => (
          <Link to={`/libro/${book.id}`} key={book.id} className="bg-white shadow-md rounded-lg p-4 m-4 w-64 hover:bg-gray-100">
            <img src={book.image} alt={book.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-2">
              <h2 className="text-xl font-bold">{book.title}</h2>
              <p className="mt-2">{book.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatalogoLibri;
