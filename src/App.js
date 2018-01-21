import React, { Component } from 'react';
import logo from './vinyl.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
