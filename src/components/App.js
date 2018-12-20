import React, { Component } from 'react';
import Typist from 'react-typist'
import '../css/App.css';

import picture from '../static/picture_1.jpg'

class App extends Component {
  render() {
    
    return (
      <div className="App">
              <div className="home-container">
                  <Typist>
                  <h1 className="home-header">Cafe Nirvana</h1>
                   <Typist.Delay ms={500} />
                    <h2>
                      Awesome place to chill
                      <Typist.Backspace count={8} delay={200}/><span>for foodies</span>
                      <Typist.Backspace count={11} delay={200}/><span> to hangout with friends</span>
                      <br/>
                      <Typist.Delay ms={500}/><button>Help</button>
                    </h2>
                  </Typist>
              </div>
      </div>
    );
  }
}

export default App;
