import React from 'react';
import { useSelector } from 'react-redux';
import Calculator from './components/Calculator';
import Attribution from './components/Attribution';
import './App.css';

function App() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div className={`app ${theme}`}>
      <div className="main">
        <Calculator />
      </div>
      <Attribution />
    </div>
  );
}

export default App;
