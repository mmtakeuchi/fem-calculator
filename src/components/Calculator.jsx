import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';
import ToggleSwitch from './ToggleSwitch';
import {
  inputDigit,
  inputDecimal,
  deleteNum,
  reset,
  setOperator,
  calculate,
} from '../store/calculatorSlice';

const Calculator = () => {
  const { value } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  const handleDigitClick = (digit) => {
    dispatch(inputDigit(digit));
  };

  const handleDecimalClick = () => {
    dispatch(inputDecimal());
  };

  const handleOperatorClick = (operator) => {
    dispatch(setOperator(operator));
  };

  const handleDeleteClick = () => {
    dispatch(deleteNum());
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  const handleEqualClick = () => {
    dispatch(calculate());
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
          <Button handleClick={() => handleDigitClick('7')}>7</Button>
          <Button handleClick={() => handleDigitClick('8')}>8</Button>
          <Button handleClick={() => handleDigitClick('9')}>9</Button>
          <Button className="blueBtn" handleClick={() => handleDeleteClick()}>
            DEL
          </Button>
        </div>
        <div className="keyboard-row">
          <Button handleClick={() => handleDigitClick('4')}>4</Button>
          <Button handleClick={() => handleDigitClick('5')}>5</Button>
          <Button handleClick={() => handleDigitClick('6')}>6</Button>
          <Button handleClick={() => handleOperatorClick('+')}>+</Button>
        </div>
        <div className="keyboard-row">
          <Button handleClick={() => handleDigitClick('3')}>3</Button>
          <Button handleClick={() => handleDigitClick('2')}>2</Button>
          <Button handleClick={() => handleDigitClick('1')}>1</Button>
          <Button handleClick={() => handleOperatorClick('-')}>-</Button>
        </div>
        <div className="keyboard-row">
          <Button handleClick={() => handleDecimalClick('.')}>.</Button>
          <Button handleClick={() => handleDigitClick('0')}>0</Button>
          <Button handleClick={() => handleOperatorClick('/')}>/</Button>
          <Button handleClick={() => handleOperatorClick('*')}>x</Button>
        </div>
        <div className="bottom-keyboard-row">
          <Button
            className="blueBtn"
            handleClick={() => handleResetClick('reset')}
          >
            RESET
          </Button>
          <Button className="redBtn" handleClick={() => handleEqualClick()}>
            =
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
