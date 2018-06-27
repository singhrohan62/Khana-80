import React, {Component} from 'react';
import { Slide} from 'react-slideshow-image';
import './App.css';

	const imageArray = [
        "https://images.pexels.com/photos/672997/pexels-photo-672997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/298853/pexels-photo-298853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/162947/coffee-glass-beverage-coffee-mug-162947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ];

export default class Slider extends Component {
	
	render () {
		return (
			<div className="App-imageSlider">
			<Slide images = {imageArray}
			duration = {3000}
			transitionDuration = {1000}/>
			</div>
			);
	}
}