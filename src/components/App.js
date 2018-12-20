import React, { Component } from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom'
import '../css/App.css';
import 'bulma/css/bulma.css'


class App extends Component {
  render() {
    
    return (
      <div className="App">
              <div className="home-container">
                  <Typist>
                  <h1 className="home-header">Cafe Nirvana</h1>
                   <Typist.Delay ms={500} />
                    <h2 className="home-subheader">
                      Awesome place to chill
                      <Typist.Backspace count={8} delay={200}/><span>for foodies</span>
                      <Typist.Backspace count={11} delay={200}/><span> to hangout with friends</span>
                      <br/><br/>
                      <Typist.Delay ms={500}/><Link to="/about" className="button is-link is-rounded" >Check In</Link>
                    </h2>
                  </Typist>
              </div>
      </div>
    );
  }
}

export default App;
