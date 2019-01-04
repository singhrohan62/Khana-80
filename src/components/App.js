import React, { Component } from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom'
import '../css/App.css';
import 'bulma/css/bulma.css'


class App extends Component {

  componentDidMount () {
    if(!sessionStorage.getItem('isRenderedEarlier'))
    {
      sessionStorage.setItem('isRenderedEarlier', true)
    }
  }
  
  render() {
    if(!sessionStorage.getItem('isRenderedEarlier'))
    {
        return (
                <div className="App">
                        <div className="home-container">
                            <Typist>
                            <h1 className="home-header">Cafe Nirvana</h1>
                             <Typist.Delay ms={500} />
                              <h2 className="home-subheader">
                                Awesome place to chill
                                <Typist.Backspace count={8} delay={200}/><span>for foodies</span>
                                <Typist.Backspace count={11} delay={200}/><span>to hangout</span>
                                <Typist.Backspace count={10} delay={200}/><span>to enjoy local food</span>
                                <br/><br/>
                                <Typist.Delay ms={500}/><Link to="/about" className="button is-link is-rounded" >Check In</Link>
                              </h2>
                            </Typist>
                        </div>
                </div>
              );
  
    }
    
    else {
      return (
          <div className="App">
                  <div className="home-container">
                        <h2 className="home-quote">
                          "Peace comes out with satisfaction of soul and hunger."
                          <br/><br/>
                        <h2 className="home-subheader">
                        Cafe Nirvana
                        </h2>
                          <br/>
                          <Link to="/about" className="button is-link is-rounded" >Check In</Link>
                        </h2>
                  </div>
          </div>  
      );
    }
  }
}

export default App;
