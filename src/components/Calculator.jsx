import React, { useState } from 'react';
import Button from './Button';
import ToggleSwitch from './ToggleSwitch';

const Calculator = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="calc-container">
      <header>
        <div>Calc</div>
        <div className="theme-toggle">
          <span class="theme-span">THEME</span> <ToggleSwitch />
        </div>
      </header>
      <div className="output-screen">{value}</div>
      <div className="keyboard">
        <div className="keyboard-row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button className="blueBtn">DEL</Button>
        </div>
        <div className="keyboard-row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>+</Button>
        </div>
        <div className="keyboard-row">
          <Button>3</Button>
          <Button>2</Button>
          <Button>1</Button>
          <Button>-</Button>
        </div>
        <div className="keyboard-row">
          <Button>.</Button>
          <Button>0</Button>
          <Button>/</Button>
          <Button>x</Button>
        </div>
        <div className="bottom-keyboard-row">
          <Button className="blueBtn">RESET</Button>
          <Button className="redBtn">=</Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
