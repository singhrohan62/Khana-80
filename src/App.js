import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './Slider';



class App extends Component {
  render() {
    
    return (
      <div>
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />      
              <h1 className="App-title">NIRVANA</h1>
          </div>

      </div>
      
        <Slider/>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
