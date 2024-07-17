import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data);
        localStorage.setItem('products', JSON.stringify(data));
      } catch (error) {
        console.error('Errore nel caricamento dei prodotti', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (productId, productName) => {
    const newProduct = { id: productId, name: productName, price: products.find(p => p.id === productId).price };
    const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
    updatedCart.push(newProduct);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${productName} aggiunto al carrello!`);
  };

  return (
    <div className="container">
      <h2 className="title">Benvenuto nella nostra e-commerce</h2>
      <div className="products">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>Prezzo: {product.price} €</p>
              <button onClick={() => addToCart(product.id, product.name)}>Aggiungi al carrello</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/carrello" className="cart-link">Vai al carrello</Link>
    </div>
  );
};

export default Home;
