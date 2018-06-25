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
              <nav>
              <ul className="App-navbar">
                  <li class="route active"><a href="#">Home</a></li>
                  <li class="route"><a href="#">About</a></li>  
                  <li class="route"><a href="#">Contacts</a></li>
                  <li class="route"><a href="#">Downloads</a></li>
              </ul>
              </nav>
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
