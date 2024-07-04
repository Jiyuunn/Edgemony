// src/App.jsx

import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Results from './components/Results';
import { calculateRepayment } from './utils/calculateRepayment';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #e0f7fa;
`;

const App = () => {
  const [results, setResults] = useState({ monthlyPayment: 0, totalRepayment: 0 });

  const handleCalculate = (amount, term, rate, type) => {
    const { monthlyPayment, totalRepayment } = calculateRepayment(amount, term, rate, type);
    setResults({ monthlyPayment, totalRepayment });
  };

  return (
    <AppContainer>
      <Calculator onCalculate={handleCalculate} />
      <Results monthlyPayment={results.monthlyPayment} totalRepayment={results.totalRepayment} />
    </AppContainer>
  );
};

export default App;
