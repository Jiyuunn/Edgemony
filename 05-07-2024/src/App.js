import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [mortgageAmount, setMortgageAmount] = useState(null);
  const [mortgageTerm, setMortgageTerm] = useState(null);
  const [interestRate, setInterestRate] = useState(null);
  const [mortgageType, setMortgageType] = useState("repayment");
  const [monthlyRepayment, setMonthlyRepayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalRepayment, setTotalRepayment] = useState(null);
  const [isResultsCalculated, setIsResultsCalculated] = useState(false);

  const calculateRepayments = () => {
    const principal = Number(mortgageAmount);
    const years = mortgageTerm;
    const rate = interestRate / 100 / 12;
    const numberOfPayments = years * 12;

    if (mortgageType === "repayment") {
      const monthlyPayment =
        (principal * rate * Math.pow(1 + rate, numberOfPayments)) /
        (Math.pow(1 + rate, numberOfPayments) - 1);
      setMonthlyRepayment(monthlyPayment.toFixed(2));
      setTotalRepayment((monthlyPayment * numberOfPayments).toFixed(2));
    } else {
      const monthlyInterest = principal * rate;

      const totalInterest = monthlyInterest * numberOfPayments;
      setTotalInterest(totalInterest.toFixed(2));
      console.log(monthlyInterest, numberOfPayments, principal);
      setTotalRepayment(
        (monthlyInterest * numberOfPayments + principal).toFixed(2)
      );
    }
    setIsResultsCalculated(true);
  };

  const clearAll = () => {
    setMortgageAmount(null);
    setMortgageTerm(null);
    setInterestRate(null);
    setMortgageType("");
    setMonthlyRepayment(null);
    setTotalRepayment(null);
    setIsResultsCalculated(false);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-form">
        <h2>Mortgage Calculator</h2>
        <button className="clear-all" onClick={clearAll}>
          Clear All
        </button>
        <div className="input-group">
          <label>Mortgage Amount</label>
          <div className="input-wrapper">
            <span className="input-prefix">£</span>
            <input
              type="number"
              value={mortgageAmount}
              onChange={(e) => setMortgageAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="input-row">
          <div className="input-group">
            <label>Mortgage Term</label>
            <div className="input-wrapper">
              <input
                type="number"
                value={mortgageTerm}
                onChange={(e) => setMortgageTerm(e.target.value)}
              />
              <span className="input-suffix">years</span>
            </div>
          </div>
          <div className="input-group">
            <label>Interest Rate</label>
            <div className="input-wrapper">
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
              <span className="input-suffix">%</span>
            </div>
          </div>
        </div>
        <div className="input-group">
          <label>Mortgage Type</label>
          <div className="radio-group">
            <label
              className={`radio-label ${
                mortgageType === "repayment" ? "selected" : ""
              }`}>
              <input
                type="radio"
                name="mortgageType"
                value="repayment"
                checked={mortgageType === "repayment"}
                onChange={() => setMortgageType("repayment")}
              />
              <span className="radio-button"></span>
              <span> Repayment</span>
            </label>
            <label
              className={`radio-label ${
                mortgageType === "interestOnly" ? "selected" : ""
              }`}>
              <input
                type="radio"
                name="mortgageType"
                value="interestOnly"
                checked={mortgageType === "interestOnly"}
                onChange={() => setMortgageType("interestOnly")}
              />
              <span className="radio-button"></span>
              <span> Interest Only</span>
            </label>
          </div>
        </div>
        <button
          className={`calculate-button ${
            !mortgageAmount || !mortgageTerm || !interestRate || !mortgageType
              ? "disabled"
              : ""
          }`}
          onClick={calculateRepayments}
          disabled={
            !mortgageAmount || !mortgageTerm || !interestRate || !mortgageType
          }>
          Calculate Repayments
        </button>
      </div>
      {isResultsCalculated ? (
        <div className="results-panel">
          <h3>Your results</h3>
          <p>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>
          <div className="results-container">
            <div className="results-card">
              <div>
                {
                  // If mortgage type is repayment, show monthly repayments. If mortgage type is interest only, show monthly interest.

                  mortgageType === "repayment" ? (
                    <>
                      <p>Your monthly repayments</p>
                      <h1>£{monthlyRepayment}</h1>
                    </>
                  ) : (
                    <>
                      <p>Your total interest</p>
                      <h1>£{totalInterest}</h1>
                    </>
                  )
                }
              </div>
              <div className="divider"></div>
              <div>
                <p>Total you'll repay over the term</p>
                <h5>£{totalRepayment}</h5>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="results-panel-placeholder">
          <div className="results-placeholder">
            <div className="placeholder-icon">💰📊</div>
            <h3>Results shown here</h3>
            <p>
              Complete the form and click "calculate repayments" to see what
              your monthly repayments would be.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
