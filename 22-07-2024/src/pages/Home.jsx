import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center">Benvenuti su LeggiBook</h1>
      <p className="mt-4 text-lg text-center">Scopri il mondo dei libri.</p>
      <div className="mt-8 flex justify-center">
        <Link to="/catalogo" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Vai al Catalogo
        </Link>
      </div>
      <div className="mt-8 flex flex-wrap justify-center">
        <div className="bg-white shadow-md rounded-lg p-4 m-4 w-64">
          <h2 className="text-xl font-bold">Libro 1</h2>
          <p className="mt-2">Descrizione breve del libro 1.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 m-4 w-64">
          <h2 className="text-xl font-bold">Libro 2</h2>
          <p className="mt-2">Descrizione breve del libro 2.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 m-4 w-64">
          <h2 className="text-xl font-bold">Libro 3</h2>
          <p className="mt-2">Descrizione breve del libro 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
