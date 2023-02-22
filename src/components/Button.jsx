import React from 'react';

const Button = ({ handleClick, children, className }) => {
  return (
    <button className={`btn ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
