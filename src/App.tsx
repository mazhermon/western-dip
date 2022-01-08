import './App.css';

import React, { useState } from 'react';

import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="header">Western Dip</p>

        <div className="body">
          <button onClick={() => setCount((count) => count + 1)}>
            Click me test : {count}
          </button>

          <p>Make a website already</p>
        </div>
      </header>
    </div>
  );
}

export default App;
