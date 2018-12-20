import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import About from './components/About';
import Contact_us from './components/Contact_Us'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={App}/>
			<Route exact path='/about' component={About}/>
			<Route exact path='/contact_us' component={Contact_us}/>
		</Switch>
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
