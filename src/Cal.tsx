import { useState } from "react";
import ReactDOM from "react-dom";
function Mycalculator() {
  const [firstNumber, firstNo] = useState("");
  const [SecondNumber, SecondNo] = useState("");
  const [results, setResults] = useState(0);
  const addNumber = () => {
    const sum = Number(firstNumber) + Number(SecondNumber);
    setResults(sum);
  };
  const Subtraction = () => {
    const sub = Number(firstNumber) - Number(SecondNumber);
    setResults(sub);
  };
  const Multiplication = () => {
    const mul = Number(firstNumber) * Number(SecondNumber);
    setResults(mul);
  };
  const Division = () => {
    const divi = Number(firstNumber) / Number(SecondNumber);
    setResults(divi);
  };
  const btn1 = () => {
    const noone = 1;
    firstNo(noone);
  };
  const btn2 = () => {
    const notwo = 2;
    firstNo(notwo);
  };
  const inputDigit = (digit) => {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false,
      });
    } else {
      this.setState({
        displayValue:
          displayValue === "0" ? String(digit) : displayValue + digit,
      });
    }
  };
  return (
    <>
      <h1>Calculator</h1>
      <input
        type="text"
        value={firstNumber}
        onChange={(ee) => firstNo(ee.target.value)}
        placeholder="enter the first number"
      ></input>
      <input
        type="text"
        value={SecondNumber}
        onChange={(e2) => SecondNo(e2.target.value)}
        placeholder="enter the second number"
      ></input>
      <button onClick={addNumber}>Addittion </button>
      <button onClick={Subtraction}> Subtraction </button>
      <button onClick={Multiplication}>Multiplication </button>
      <button onClick={Division}>Division </button>
      <p>Result: {results}</p>
      <div className="numberBtn"></div>
    </>
  );
}
export default Mycalculator;
