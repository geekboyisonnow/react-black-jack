import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <h1>Black Jack</h1>
        <button class='hit'>hit</button>
        <button class='stay'>stay</button>
        <ul class='player-hand'>

        </ul>

        <ul class='dealer-hand'>

        </ul>

      </body>
    </div>
  );
}

export default App;
