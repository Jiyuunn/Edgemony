import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [state, setState] = useState('');

  // Eseguo una chiamata solo al primo render per inizializzare lo stato dal local storage
  useEffect(() => {
    console.log('Componente montato');
    const storedValue = localStorage.getItem('myKey');
    if (storedValue) {
      setState(JSON.parse(storedValue));
    }
  }, []);

  // Aggiorno il local storage ogni volta che lo stato cambia
  useEffect(() => {
    console.log('Aggiorno local storage');
    localStorage.setItem('myKey', JSON.stringify(state));
  }, [state]);

  // Funzione per gestire il cambiamento dello stato
  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div>
      <h1>Gestione dello stato con useEffect e localStorage</h1>
      <input 
        type="text" 
        value={state} 
        onChange={handleChange} 
        placeholder="Scrivi qualcosa..."
      />
      <p>Stato corrente: {state}</p>
    </div>
  );
}

export default MyComponent;
