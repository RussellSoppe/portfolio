import React from 'react';
import './css/BackgroundImg.css';
import abstractimg from './images/abstract-art-artistic-1020315.jpg';

const BackgroundImg = ()=>{
	return(
    <div>
    	<img className="backgroundimg" alt="abstract smoke swirls" src={abstractimg}></img>
		</div>
	);
}

export default BackgroundImg;