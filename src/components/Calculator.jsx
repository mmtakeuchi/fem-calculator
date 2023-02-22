import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="calc-container">
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
