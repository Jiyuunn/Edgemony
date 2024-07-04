// src/components/Results.jsx

import React from 'react';
import styled from 'styled-components';

const ResultsContainer = styled.div`
  padding: 20px;
  background-color: #10303F;
  border-radius: 0 10px 10px 10px;
  color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 400px;
`;

const Result = styled.div`
  margin-bottom: 20px;
`;

const ResultLabel = styled.p`
  margin: 0;
  font-weight: bold;
`;

const ResultValue = styled.h3`
  margin: 0;
  font-size: 1.5em;
  color: #d5d73d;
`;

const Results = ({ monthlyPayment, totalRepayment }) => {
  return (
    <ResultsContainer>
      <h2>Your results</h2>
      <Result>
        <ResultLabel>Your monthly repayments</ResultLabel>
        <ResultValue>£{monthlyPayment.toFixed(2)}</ResultValue>
      </Result>
      <Result>
        <ResultLabel>Total you'll repay over the term</ResultLabel>
        <ResultValue>£{totalRepayment.toFixed(2)}</ResultValue>
      </Result>
    </ResultsContainer>
  );
};

export default Results;
