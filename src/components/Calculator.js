import React, { useState, useEffect } from "react";
import "./calculator.css";
import NumberFormat from "react-number-format";

const Calculator = () => {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState(0);
  const [op, setOp] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);

    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const operatorType = (e) => {
    setTotal(false);
    setOp(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };
  const reset = () => {
    setInput("0");
    setCurState("");
    setPreState("");
  };

  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (op) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "×":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="calculator__display">
          {input !== "" || input === "0" ? (
            <NumberFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumberFormat
              value={preState}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </div>
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
