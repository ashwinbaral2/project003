'use client'
import React, { useState } from "react";

const Calculator = () => {
  const [num, setNum] = useState(""); // Initialize state with an empty string

  // Define array of digit buttons
  const digits = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["AC", "0", "⌫"],
  ];

  const symbols = ["+", "-", "*", "/", "="];

  // Function to handle symbol changes
  const handleSymbolChange = (symbol) => {
    if (symbol === "AC") { // Clear the display
      setNum("");
    } else if (symbol === "⌫") { // Remove the last character from the display
      setNum(num.slice(0, -1));
    } else if (symbol === "=") { // Evaluate the expression and display the result
      const output = eval(num);
      setNum(output.toString());
    } else{ // Add the symbol to the display
      setNum(num + symbol);
    }
  };

  // Function to generate digit buttons
  const generateDigits = () => {
    return digits.map((item, index) => {
      return (
        <div key={index} className="flex">
          {item.map((val) => {
            return (
              <div
                key={val}
                onClick={() => handleSymbolChange(val)}
                className="m-2 p-8 text-white text-2xl bg-black rounded-3xl text-balance shadow-2xl h-12 w-12 "
              >
                {val}
              </div>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="bg-black">
      <div className="text-white text-5xl">{num}</div>
      <div className="flex">
        <div className="flex-col">{generateDigits()}</div>
        <div className="flex-col">
          {symbols.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => handleSymbolChange(item)}
                className="m-5 p-2 text-white bg-orange-400 rounded-xl text-center shadow-2xl h-10 w-10 "
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
