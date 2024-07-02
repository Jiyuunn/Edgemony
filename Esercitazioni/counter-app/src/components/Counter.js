// src/components/Counter.js
import React, { useState } from 'react';
import Button from './Button';
import '../App.css'; // Importa il file di stile CSS

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="card">
            <div className="counter">
                <h2>Counter App</h2>
                <div className="counter-container">
                    <Button onClick={increment} text="+" />
                    <span className="count">{count}</span>
                    <Button onClick={decrement} text="-" />
                </div>
                <Button onClick={reset} text="Reset" />
            </div>
        </div>
    );
};

export default Counter;
