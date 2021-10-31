import React, { useState, useEffect } from "react";
import "./calculator.css";

const Calculator = () => {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState(0);
  const [op, setOp] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {};
  const operatorType = () => {};
  const reset = () => {};
  const equals = () => {};

  return (
    <div className="container">
      <div className="calculator">
        <div className="calculator__display">{input}</div>
        <div className="calculator__keys">
          <button onClick={operatorType} className="operator plus">
            +
          </button>
          <button onClick={operatorType} className="operator minus">
            -
          </button>
          <button onClick={operatorType} className="operator times">
            &times;
          </button>
          <button onClick={operatorType} className="operator divide">
            ÷
          </button>
          <button onClick={inputNum} className="number one">
            1
          </button>
          <button onClick={inputNum} className="number two">
            2
          </button>
          <button onClick={inputNum} className="number three">
            3
          </button>
          <button onClick={inputNum} className="number four">
            4
          </button>
          <button onClick={inputNum} className="number five">
            5
          </button>
          <button onClick={inputNum} className="number six">
            6
          </button>
          <button onClick={inputNum} className="number seven">
            7
          </button>
          <button onClick={inputNum} className="number eight">
            8
          </button>
          <button onClick={inputNum} className="number nine">
            9
          </button>
          <button onClick={inputNum} className="number zero">
            0
          </button>
          <button onClick={inputNum} className="number decimal">
            .
          </button>
          <button onClick={reset} className="number clear">
            C
          </button>
          <button onClick={equals} className="equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
