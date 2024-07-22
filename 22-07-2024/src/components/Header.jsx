import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-2xl font-bold">LeggiBook</Link>
        <div>
          <Link to="/catalogo" className="mx-2">Catalogo</Link>
          <Link to="/contatti" className="mx-2">Contatti</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
