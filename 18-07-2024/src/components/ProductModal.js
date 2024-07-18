// src/components/ProductModal.js

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const ProductModal = ({ product, onClose }) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!modalRoot) return null;

  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 max-w-sm mx-auto rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            Close
          </button>
        </div>
        <div className="mb-4">
          <img src={product.images[0]} alt={product.title} className="w-full h-auto rounded-lg" />
        </div>
        <p className="mb-4">{product.description}</p>
        <p className="mb-4">Price: {product.price} $</p>
        <Link
          to={`/product/${product.id}`}
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go to Product
        </Link>
      </div>
    </div>
  );

  return createPortal(modalContent, modalRoot);
};

export default ProductModal;
