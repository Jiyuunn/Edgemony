import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id, 10));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-4"
      />
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-semibold mb-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
