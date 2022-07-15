import React, {useState} from 'react';
import './App.css';

function App() { 

  const [result, setResult] = useState("");


  //handle click function
  const handleClick = (e) => {
    setResult("");
    setResult(result?.concat(e.target?.name));
  }
  console.log(typeof result);

  // clear button
  const clear = () => {
    setResult("");
  }

  // const symbol = ["+", "-", "/"];
  
  // backspace button
  const backspace = () => {
    setResult(result?.slice(0, -1));
  }

 const calc = () => {
  try {
    setResult(Number(eval(result).toString()).toFixed(2));
  } catch (error) {
    setResult("invalid format")
  }
 }

  return (
    <>
      <div className="container">
        <h1 className="title">React Calculator</h1>
        <div className="calculator">
          <input type="text" className="calc-numbers" value={result}></input>
          <div className="calculator-buttons">
            <button onClick={clear} className="btn-clear">C</button>
            <button onClick={backspace} className="btn-orange">&larr;</button>
            <button onClick={handleClick} name="/" className="btn-orange">&divide;</button>
            <button onClick={handleClick} name="7" className="btn">7</button>
            <button onClick={handleClick} name="8" className="btn">8</button>
            <button onClick={handleClick} name="9" className="btn">9</button>
            <button onClick={handleClick} name="*" className="btn-orange">X</button>
            <button onClick={handleClick} name="4" className="btn">4</button>
            <button onClick={handleClick} name="5" className="btn">5</button>
            <button onClick={handleClick} name="6" className="btn">6</button>
            <button onClick={handleClick} name="-" className="btn">-</button>
            <button onClick={handleClick} name="1" lassName="btn">1</button>
            <button onClick={handleClick} name="2" className="btn">2</button>
            <button onClick={handleClick} name="3" className="btn">3</button>
            <button onClick={handleClick} name="+" className="btn-orange">+</button>
            <button onClick={handleClick} name="0" className="btn-zero">0</button>
            <button onClick={calc} name="=" className="btn-orange-equal">=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
