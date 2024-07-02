import React from 'react';
import './App.css';
import pusheenImg from './assets/pusheen.png';
import pusheenIceCreamImg from './assets/pusheenicecream.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pusheenImg} className="App-logo" alt="Pusheen the Cat" />
        <img src={pusheenIceCreamImg} className="App-logo" alt="Pusheen with Ice Cream" />
        <h1>Welcome to Pusheen the Cat Fan Page!</h1>
        <p>Enjoy some cute and fun moments with Pusheen.</p>
        <button className="cute-button">
          Click Me!
        </button>
      </header>
    </div>
  );
}

export default App;
