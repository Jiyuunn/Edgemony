// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        My Ecommerce
      </Link>
      <div>
        <Link to="/" className="mx-2">
          Home
        </Link>
        <Link to="/cart" className="mx-2">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
