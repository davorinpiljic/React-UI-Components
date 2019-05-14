import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className="app-container">
      
      <div className="calc-display">
        {/* <CalculatorDisplay text={someFunc()} /> */}
        <CalculatorDisplay />
      </div>

      <div className="input-box">
      
      <div className="clear-row">
        <ActionButton buttonStyle={clearButton}text="clear" />
        <NumberButton buttonStyle={redButton} text={<span>&#247;</span>}/>
      </div>

      <div className="number-buttons">
        <div className="first-num-row">
          <NumberButton buttonStyle={whiteButton} text={CalculatorNumbers[0]}/>
          <NumberButton buttonStyle={whiteButton} text={CalculatorNumbers[1]}/>
          <NumberButton buttonStyle={whiteButton} text={CalculatorNumbers[2]}/>
          <NumberButton buttonStyle={redButton} text={<span>&#10005;</span>}/>

        </div>

        <div className="second-num-row">
          <NumberButton buttonStyle={whiteButton} text={CalculatorNumbers[3]}/>
          <NumberButton buttonStyle={whiteButton} text={CalculatorNumbers[4]}/>
          <NumberButton buttonStyle={whiteButton} text={CalculatorNumbers[5]}/>
          <NumberButton buttonStyle={redButton} text={<span>&#8722;</span>}/>
        </div>

        <div className="first-num-row">
          <NumberButton buttonStyle={whiteButton} text={CalculatorNumbers[6]}/>
          <NumberButton buttonStyle={whiteButton} text={CalculatorNumbers[7]}/>
          <NumberButton buttonStyle={whiteButton} text={CalculatorNumbers[8]}/>
          <NumberButton buttonStyle={redButton} text={<span>&#43;</span>}/>
        </div>
      </div>

      <div className="zero-row">
          <ActionButton buttonStyle={zeroButton} text="0" />
          <NumberButton buttonStyle={redButton} text={<span>&#61;</span>}/>         
      </div>

      </div>

    </div>
  );
};

export default App;

const CalculatorNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

const redButton = ({
  backgroundColor: "maroon",
  color: "white",
  width: "114px",
  height: "94.4px",
  font: 'Roboto',
  fontSize: "2.8rem",

})

const whiteButton = ({
  backgroundColor: "white",
  color: "black",
  width: "114px",
  height: "94.4px",
  font: 'Roboto',
  fontWeight: "700",
  fontSize: "2.8rem",

})

const zeroButton = ({
  fontWeight: "700",
  width: "342px",
  height: "94.4px",
  backgroundColor: "white",
  font: 'Roboto',
  fontSize: "2.8rem",
  color: "black",

})

const clearButton = ({
  width: "342px",
  height: "94.4px",
  backgroundColor: "white",
  font: 'Roboto',
  fontSize: "2.8rem",
  color: "black",

})

// const someFunc = () => {
//   return(
//     <div className="display-func">something</div>
//   )
// }

// border: "0.5px solid lightgray",
// boxShadow: "none",
// borderRadius: "0px",