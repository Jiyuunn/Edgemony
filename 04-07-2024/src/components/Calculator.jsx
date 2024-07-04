// src/components/Calculator.jsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CalculatorContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px 0 0 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 400px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: calc(100% - 10px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  &:focus {
    border-color: #a3e635;
  }
`;

const Select = styled.select`
  width: calc(100% - 10px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  &:focus {
    border-color: #a3e635;
  }
`;

const Button = styled.button`
  background-color: #d5d73d;
  color: #000;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

const Calculator = ({ onCalculate }) => {
  const [mortgageAmount, setMortgageAmount] = useState(300000);
  const [mortgageTerm, setMortgageTerm] = useState(25);
  const [interestRate, setInterestRate] = useState(5.25);
  const [mortgageType, setMortgageType] = useState('repayment');

  useEffect(() => {
    onCalculate(mortgageAmount, mortgageTerm, interestRate, mortgageType);
  }, [mortgageAmount, mortgageTerm, interestRate, mortgageType]);

  return (
    <CalculatorContainer>
      <h2>Mortgage Calculator</h2>
      <InputGroup>
        <Label>Mortgage Amount</Label>
        <Input type="number" value={mortgageAmount} onChange={(e) => setMortgageAmount(e.target.value)} />
      </InputGroup>
      <InputGroup>
        <Label>Mortgage Term (years)</Label>
        <Input type="number" value={mortgageTerm} onChange={(e) => setMortgageTerm(e.target.value)} />
      </InputGroup>
      <InputGroup>
        <Label>Interest Rate (%)</Label>
        <Input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
      </InputGroup>
      <InputGroup>
        <Label>Mortgage Type</Label>
        <Select value={mortgageType} onChange={(e) => setMortgageType(e.target.value)}>
          <option value="repayment">Repayment</option>
          <option value="interestOnly">Interest Only</option>
        </Select>
      </InputGroup>
      <Button onClick={() => onCalculate(mortgageAmount, mortgageTerm, interestRate, mortgageType)}>Calculate Repayments</Button>
    </CalculatorContainer>
  );
};

export default Calculator;
