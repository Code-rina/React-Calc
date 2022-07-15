import React, {useState} from 'react';
import './App.css';




function App() { 
  return (
    <>
      <div className="container">
        <h1 className="title">React Calculator</h1>
        <div className="calculator">
          <input type="text" className="calc-numbers" value="30"></input>
          <div className="calculator-buttons">
            <button className="btn-clear">C</button>
            <button className="btn-orange">&larr;</button>
            <button className="btn-orange">&divide;</button>
            <button className="btn">7</button>
            <button className="btn">8</button>
            <button className="btn">9</button>
            <button className="btn-orange">X</button>
            <button className="btn">4</button>
            <button className="btn">5</button>
            <button className="btn">6</button>
            <button className="btn">-</button>
            <button className="btn">1</button>
            <button className="btn">2</button>
            <button className="btn">3</button>
            <button className="btn-orange">+</button>
            <button className="btn-zero">0</button>
            <button className="btn-orange-equal">=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
