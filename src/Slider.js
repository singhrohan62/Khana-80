import React, {Component} from 'react';
import { Slide,Fade } from 'react-slideshow-image';

	const imageArray = [
        "https://images3.alphacoders.com/273/273289.jpg",
        "https://images4.alphacoders.com/574/thumb-1920-574726.jpg",
        "https://img00.deviantart.net/0093/i/2005/221/1/7/wobbuffet_wallpaper_by_xebeckle_il_ziluf.jpg",
        "http://3.bp.blogspot.com/-PzgwkqKiT0c/VTvAK_eDQrI/AAAAAAAALuk/KkthF3qFt9A/s1600/pokemon-tumblr-wallpaper-6805925.jpg",
        "http://www.qygjxz.com/data/out/252/4240257-wallpapers-pokemon.png"
      ];

export default class Slider extends Component {
	

	/*componentWillMount() {
	let imageArray = [
        "https://images3.alphacoders.com/273/273289.jpg",
        "https://images4.alphacoders.com/574/thumb-1920-574726.jpg",
        "https://img00.deviantart.net/0093/i/2005/221/1/7/wobbuffet_wallpaper_by_xebeckle_il_ziluf.jpg",
        "http://3.bp.blogspot.com/-PzgwkqKiT0c/VTvAK_eDQrI/AAAAAAAALuk/KkthF3qFt9A/s1600/pokemon-tumblr-wallpaper-6805925.jpg",
        "http://www.qygjxz.com/data/out/252/4240257-wallpapers-pokemon.png"
      ],
      currentIndex = 0,
      Duration = 1000;

    function refreshingBackground() {
      document.body.style.backgroundImage = `url(${imageArray[currentIndex]})`;
      currentIndex++;
      if (currentIndex === imageArray.length) {
        currentIndex = 0;
      }
      setTimeout(refreshingBackground, Duration);
    }
    refreshingBackground();
	}*/

	render () {
		return (
			<Slide images = {imageArray}
			duration = {3000}
			transitionDuration = {1000}/>
			);
	}
}