import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CatalogoLibri from './pages/CatalogoLibri';
import DettaglioLibro from './pages/DettaglioLibro';
import Contatti from './pages/Contatti';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<CatalogoLibri />} />
          <Route path="/libro/:id" element={<DettaglioLibro />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
