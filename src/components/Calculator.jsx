import React, { useState } from 'react';
import Button from './Button';
import ToggleSwitch from './ToggleSwitch';
import { add, subtract, divide, multiply } from '../utils/index';

const Calculator = () => {
  const [value, setValue] = useState('0');
  const [operand1, setOperand1] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumberClick = (num) => {
    if (num === 'reset') {
      setValue('0');
      return;
    } else if (num === 'delete') {
      let nums = value.toString();
      nums = nums.substring(0, nums.length - 1);
      setValue(nums);
      return;
    }

    if (value === '0') {
      setValue(num);
    } else {
      setValue((prevValue) => prevValue + num);
    }
  };

  const performCalculation = () => {
    const operand2 = parseFloat(value);

    switch (operator) {
      case '+':
        return add(operand1, operand2);
      case '-':
        return subtract(operand1, operand2);
      case '/':
        return divide(operand1, operand2);
      case '*':
        return multiply(operand1, operand2);
      default:
        return null;
    }
  };

  const handleOperatorClick = (newOperator) => {
    if (operand1 === null) {
      setOperand1(parseFloat(value));
    } else if (operator !== null) {
      const result = performCalculation();
      setOperand1(result);
      setValue(result.toString());
    }

    setOperator(newOperator);
    setValue('0');
  };

  const handleEqualsClick = () => {
    if (operand1 !== null && operator !== null) {
      const result = performCalculation();
      setOperand1(null);
      setOperator(null);
      setValue(result.toString());
    }
  };

  return (
    <div className="calc-container">
      <header>
        <div>Calc</div>
        <div className="theme-toggle">
          <span className="theme-span">THEME</span> <ToggleSwitch />
        </div>
      </header>
      <div className="output-screen">
        {Number(value).toLocaleString('en-US')}
      </div>
      <div className="keyboard">
        <div className="keyboard-row">
          <Button handleClick={() => handleNumberClick('7')}>7</Button>
          <Button handleClick={() => handleNumberClick('8')}>8</Button>
          <Button handleClick={() => handleNumberClick('9')}>9</Button>
          <Button
            className="blueBtn"
            handleClick={() => handleNumberClick('delete')}
          >
            DEL
          </Button>
        </div>
        <div className="keyboard-row">
          <Button handleClick={() => handleNumberClick('4')}>4</Button>
          <Button handleClick={() => handleNumberClick('5')}>5</Button>
          <Button handleClick={() => handleNumberClick('6')}>6</Button>
          <Button handleClick={() => handleOperatorClick('+')}>+</Button>
        </div>
        <div className="keyboard-row">
          <Button handleClick={() => handleNumberClick('3')}>3</Button>
          <Button handleClick={() => handleNumberClick('2')}>2</Button>
          <Button handleClick={() => handleNumberClick('1')}>1</Button>
          <Button handleClick={() => handleOperatorClick('-')}>-</Button>
        </div>
        <div className="keyboard-row">
          <Button handleClick={() => handleNumberClick('.')}>.</Button>
          <Button handleClick={() => handleNumberClick('0')}>0</Button>
          <Button handleClick={() => handleOperatorClick('/')}>/</Button>
          <Button handleClick={() => handleOperatorClick('*')}>x</Button>
        </div>
        <div className="bottom-keyboard-row">
          <Button
            className="blueBtn"
            handleClick={() => handleNumberClick('reset')}
          >
            RESET
          </Button>
          <Button className="redBtn" handleClick={() => handleEqualsClick()}>
            =
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
