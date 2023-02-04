import React, { useState } from "react";

import "../style/Calculator.css";

const CalculatorInterface = ({ provider, signer, account, calculator }) => {
  const [inputValue, setInputValue] = useState(0);

  const handleClick = (event) => {
    setInputValue(inputValue + event.target.textContent);
  };

  async function addition() {
    const result = await calculator.connect(signer).add(inputValue);
    setInputValue("");
    console.log(inputValue);
    console.log(result);
  }

  async function subtraction() {
    const result = await calculator.connect(signer).subtract(inputValue);
    setInputValue("");
    console.log(inputValue);
    console.log(result);
  }

  const multiplication = async () => {
    const result = await calculator.connect(signer).multiply(inputValue);
    setInputValue("");
    console.log(inputValue);
    console.log(result);
  };

  const divison = async () => {
    const result = await calculator.connect(signer).divide(inputValue);
    setInputValue("");
    console.log(inputValue);
    console.log(result);
  };

  const equals = async () => {
    const result = await calculator.connect(signer).equals();
    setInputValue(result);
    console.log(result);
  };

  const clear = async () => {
    await calculator.connect(signer).clear();
    setInputValue("");
    console.log(inputValue);
  };

  return (
    <div className="calculator-body">
      <input
        className="calculator-input"
        type="text"
        id="input"
        value={inputValue}
        readOnly
      />
      <button className="calculator-key" onClick={handleClick}>
        1
      </button>
      <button className="calculator-key" onClick={handleClick}>
        2
      </button>
      <button className="calculator-key" onClick={handleClick}>
        3
      </button>
      <button className="calculator-key" onClick={handleClick}>
        4
      </button>
      <button className="calculator-key" onClick={handleClick}>
        5
      </button>
      <button className="calculator-key" onClick={handleClick}>
        6
      </button>
      <button className="calculator-key" onClick={handleClick}>
        7
      </button>
      <button className="calculator-key" onClick={handleClick}>
        8
      </button>
      <button className="calculator-key" onClick={handleClick}>
        9
      </button>
      <button className="calculator-key" onClick={handleClick}>
        0
      </button>
      <button className="calculator-key" onClick={() => setInputValue("")}>
        CLR
      </button>
      <button className="calculator-key" onClick={clear}>
        RST
      </button>
      <button className="calculator-key" onClick={addition}>
        +
      </button>
      <button className="calculator-key" onClick={subtraction}>
        -
      </button>
      <button className="calculator-key" onClick={multiplication}>
        *
      </button>
      <button className="calculator-key" onClick={divison}>
        /
      </button>
      <button className="calculator-equals-key" onClick={equals}>
        =
      </button>
    </div>
  );
};

export default CalculatorInterface;
