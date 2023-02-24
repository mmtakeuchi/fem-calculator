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
  const { theme } = useSelector((state) => state.theme);
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
      <div className={`output-screen output-${theme}`}>
        {Number(value).toLocaleString('en-US')}
      </div>
      <div className={`keyboard keyboard-${theme}`}>
        <div className="keyboard-row">
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleDigitClick('7')}
          >
            7
          </Button>
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleDigitClick('8')}
          >
            8
          </Button>
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleDigitClick('9')}
          >
            9
          </Button>
          <Button
            className={`delBtn-${theme}`}
            handleClick={() => handleDeleteClick()}
          >
            DEL
          </Button>
        </div>
        <div className="keyboard-row">
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleDigitClick('4')}
          >
            4
          </Button>
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleDigitClick('5')}
          >
            5
          </Button>
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleDigitClick('6')}
          >
            6
          </Button>
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleOperatorClick('+')}
          >
            +
          </Button>
        </div>
        <div className="keyboard-row">
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleDigitClick('3')}
          >
            3
          </Button>
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleDigitClick('2')}
          >
            2
          </Button>
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleDigitClick('1')}
          >
            1
          </Button>
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleOperatorClick('-')}
          >
            -
          </Button>
        </div>
        <div className="keyboard-row">
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleDecimalClick('.')}
          >
            .
          </Button>
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleDigitClick('0')}
          >
            0
          </Button>
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleOperatorClick('/')}
          >
            /
          </Button>
          <Button
            className={`btn-${theme}`}
            handleClick={() => handleOperatorClick('*')}
          >
            x
          </Button>
        </div>
        <div className="bottom-keyboard-row">
          <Button
            className={`delBtn-${theme}`}
            handleClick={() => handleResetClick('reset')}
          >
            RESET
          </Button>
          <Button
            className={`equalBtn equalBtn-${theme}`}
            handleClick={() => handleEqualClick()}
          >
            =
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
