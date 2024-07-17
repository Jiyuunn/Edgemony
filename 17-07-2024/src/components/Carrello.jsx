import React, { useState, useEffect } from 'react';

const Carrello = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = productId => {
    const updatedCart = cart.filter(product => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="container">
      <h2 className="title">Carrello</h2>
      <div className="cart">
        {cart.length === 0 ? <p>Il carrello è vuoto.</p> : null}
        {cart.map(product => (
          <div className="cart-item" key={product.id}>
            <div className="cart-item-details">
              <h3>{product.name}</h3>
              <p>Prezzo: {product.price} €</p>
              <button onClick={() => removeFromCart(product.id)}>Rimuovi dal carrello</button>
            </div>
          </div>
        ))}
      </div>
      <p className="total">Totale: {totalPrice} €</p>
    </div>
  );
};

export default Carrello;
