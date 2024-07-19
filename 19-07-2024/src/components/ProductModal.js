import React from 'react';
import { useCart } from '../context/CartContext';

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-semibold mb-4">${product.price}</p>
        <button
          onClick={() => {
            addToCart(product);
            onClose();
          }}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
