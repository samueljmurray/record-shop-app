import React, { Component } from 'react';

import RecordsListContainerSimple from "../RecordsList/RecordsListContainerSimple";
import RecordsListContainerComplex from "../RecordsList/RecordsListContainerComplex";
import logo from '../../img/vinyl.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <article className="App-body">
          <div className="App-listing-container">
            <RecordsListContainerSimple />
          </div>
          <div className="App-listing-container">
            <RecordsListContainerComplex />
          </div>
        </article>
      </div>
    );
  }
}

export default App;
