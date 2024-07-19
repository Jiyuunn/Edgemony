import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductModal from '../components/ProductModal';

const Home = () => {
  const { products } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-32 object-cover mb-2 rounded-md"
            />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
            <button
              onClick={() => openModal(product)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default Home;
