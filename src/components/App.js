import React, { Component } from 'react';
import logo from './logo.svg';
import '../css/App.css';
import Slider from './Slider';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from "./About";
import Menu from "./Menu";
import Contact_Us from "./Contact_Us";

class App extends Component {
  render() {
    
    return (
      <div className="App">
              <Router>
              <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />      
              <h1 className="App-title">NIRVANA</h1>
              <nav>
              <ul className="App-navbar">
                  <li className="route active"><Link to="/">Home</Link></li>
                  <li className="route"><Link to="/about">about</Link></li>
                  <li className="route"><Link to="/menu">Menu</Link></li>
                  <li className="route"><Link to="/Contact_Us">Contact us </Link></li>
              </ul>
              </nav>
              <Route exact path="/" component={Slider}/>
              <Route path="/about" component={About}/>
              <Route path="/menu" component={Menu}/>
              <Route path="/Contact_Us" component={Contact_Us}/>
              </div>
              </Router>

      </div>
    );
  }
}

export default App;
