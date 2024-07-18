// src/pages/Cart.js

import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cart.map((item, index) => (
            <li key={index} className="flex items-center justify-between py-2">
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p>Price: {item.price} $</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 font-bold hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
