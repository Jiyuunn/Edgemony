// src/pages/Home.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductModal from '../components/ProductModal';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
      });
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const removeItemFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Our Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
            <img src={product.images[0]} alt={product.title} className="w-full h-64 object-cover" />
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-700 mb-2">{product.price} $</p>
              </div>
              <div className="flex justify-between items-end mt-4">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => openModal(product)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none"
                >
                  Show Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cart.map(item => (
              <div key={item.id} className="border rounded-lg overflow-hidden flex items-center shadow-lg">
                <img src={item.images[0]} alt={item.title} className="w-24 h-24 object-cover" />
                <div className="flex-1 p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-700 mb-2">{item.price} $</p>
                  <button
                    onClick={() => removeItemFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
