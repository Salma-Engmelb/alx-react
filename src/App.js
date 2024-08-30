import React from 'react';
import logo from './holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="fname">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="lname">Password:</label>
        <input type="password" id="password" />
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;

