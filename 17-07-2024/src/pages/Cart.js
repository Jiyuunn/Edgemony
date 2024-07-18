import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (product) => {
    const newCart = cart.filter(item => item.id !== product.id);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Carrello</h1>
      {cart.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cart.map(product => (
            <div key={product.id} className="border p-4 flex flex-col items-center">
              <img src={product.images[0]} alt={product.title} className="w-32 h-32 object-cover mb-4" />
              <h2 className="text-xl mb-2">{product.title}</h2>
              <p className="mb-2">{product.price} $</p>
              <button
                onClick={() => removeFromCart(product)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Rimuovi dal carrello
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Il carrello è vuoto.</p>
      )}
    </div>
  );
};

export default Cart;
