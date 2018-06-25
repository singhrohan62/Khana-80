import React, {Component} from 'react';
import { Slide} from 'react-slideshow-image';

	const imageArray = [
        "https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=940",
        "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      ];

export default class Slider extends Component {
	
	render () {
		return (
			<Slide images = {imageArray}
			duration = {3000}
			transitionDuration = {1000}/>
			);
	}
}