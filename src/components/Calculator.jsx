import React, { useState } from 'react';
import Button from './Button';
import ToggleSwitch from './ToggleSwitch';

const Calculator = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="calc-container">
      <header>
        <div>Calc</div> <ToggleSwitch />
      </header>
      <div className="output-screen">{value}</div>
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
      <Button />
    </div>
  );
};

export default Calculator;
