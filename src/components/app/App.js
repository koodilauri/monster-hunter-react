import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from "../navbar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
