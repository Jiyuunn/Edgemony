// src/components/Calculator.jsx

import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css'; // Importa stili CSS per il componente Calculator

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (label) => {
    switch (label) {
      case 'AC':
        clearDisplay();
        break;
      case '+/-':
        toggleSign();
        break;
      case '%':
        handlePercentage();
        break;
      case '/':
      case 'X':
      case '-':
      case '+':
        handleOperator(label);
        break;
      case '=':
        calculate();
        break;
      case 'Reset':
        resetCalculator();
        break;
      default:
        handleDigit(label);
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperator(null);
  };

  const toggleSign = () => {
    const newValue = parseFloat(displayValue) * -1;
    setDisplayValue(newValue.toString());
  };

  const handlePercentage = () => {
    const newValue = parseFloat(displayValue) / 100;
    setDisplayValue(newValue.toString());
  };

  const handleOperator = (nextOperator) => {
    if (operator !== null) {
      calculate();
    }
    setPreviousValue(displayValue);
    setOperator(nextOperator);
    setDisplayValue('0');
  };

  const calculate = () => {
    const current = parseFloat(displayValue);
    const previous = parseFloat(previousValue);

    switch (operator) {
      case '+':
        setDisplayValue((previous + current).toString());
        break;
      case '-':
        setDisplayValue((previous - current).toString());
        break;
      case 'X':
        setDisplayValue((previous * current).toString());
        break;
      case '/':
        setDisplayValue((previous / current).toString());
        break;
      default:
        return;
    }

    setPreviousValue(null);
    setOperator(null);
  };

  const resetCalculator = () => {
    clearDisplay();
  };

  const handleDigit = (digit) => {
    if (displayValue === '0' && digit !== '.') {
      setDisplayValue(digit.toString());
    } else {
      setDisplayValue(displayValue + digit.toString());
    }
  };

  const buttons = [
    "AC", "+/-", "%", "/",
    7, 8, 9, "X",
    4, 5, 6, "-",
    1, 2, 3, "+",
    "Reset", 0, ".", "="
  ];

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="keyboard">
        {buttons.map((button, index) => (
          <Button key={index} label={button} handleClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
