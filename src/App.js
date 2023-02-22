import React from 'react';
import Calculator from './components/Calculator';
import Attribution from './components/Attribution';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="main">
        <Calculator />
      </div>
      <Attribution />
    </div>
  );
}

export default App;
