import React, { Component } from 'react';

import RecordsListContainer from "./RecordsListContainer";
import logo from './vinyl.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <RecordsListContainer />
      </div>
    );
  }
}

export default App;
