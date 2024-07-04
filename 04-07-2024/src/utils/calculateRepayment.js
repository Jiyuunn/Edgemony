// src/utils/calculateRepayment.js

export const calculateRepayment = (amount, term, rate, type) => {
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = term * 12;

  if (type === 'repayment') {
    const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    const totalRepayment = monthlyPayment * numberOfPayments;
    return { monthlyPayment, totalRepayment };
  } else if (type === 'interestOnly') {
    const monthlyPayment = (amount * monthlyRate);
    const totalRepayment = (monthlyPayment * numberOfPayments) + amount;
    return { monthlyPayment, totalRepayment };
  }
};
