import React, { useState } from 'react';
import './App.css';
import pusheenImage from './assets/pusheen.png';

const App = () => {
  const [number, setNumber] = useState(null);
  const [color, setColor] = useState('#e49ebb');

  const getRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
  };

  const getRandomColor = () => {
    const colors = ['#e6e6fa', '#f0f8ff', '#e0ffff', '#f0ffff', '#f5f5dc', '#fff5ee', '#f5fffa', '#ffe4e1', '#ffebcd', '#fffacd'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const handleClick = () => {
    const randomNumber = getRandomNumber();
    const randomColor = getRandomColor();
    setNumber(randomNumber);
    setColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <div className="content">
        <h1 style={{ color: '#ffffff' }}>Random Number Generator</h1>
        <button onClick={handleClick} style={{ backgroundColor: '#b78fda' }}>
          Generate Random Number
        </button>
        {number && (
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
            <p style={{ fontSize: '24px', color: '#ffffff' }}>{number}</p>
          </div>
        )}
      </div>
      <img src={pusheenImage} alt="Pusheen" style={{ position: 'fixed', bottom: '20px', right: '20px', width: '100px', height: '100px' }} />
    </div>
  );
};

export default App;