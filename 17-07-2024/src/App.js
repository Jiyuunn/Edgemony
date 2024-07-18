import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

const App = () => {
  return (
    <div>
      <nav className="p-4 bg-gray-800 text-white flex justify-between">
        <Link className="mr-4" to="/">Home</Link>
        <Link to="/cart">Carrello</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
