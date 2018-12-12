import React from 'react';
import './css/Websites.css';
import facebrain from './images/facebrain.PNG';
import swapi from './images/swapi.PNG';
import backgen from './images/backgen.PNG';
import navbarsu from './images/navbarsu.PNG';
import mfnavbar from './images/mfnavbar.PNG';
import calculator from './images/calculator.png';
import robofriends from './images/robofriends.png';
import { FaGithub } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
//import { FaGlobe } from 'react-icons/fa';
//import { FaLink } from 'react-icons/fa';

// import { FaLinkedin } from 'react-icons/fa';
// FaPortrait

const WebsitesMF = (props) => {
	
		return(
					<div  className="websites">


	          <div className="outercard">
	            <div className="innercard">
	            	<div className="cardtexttitle" data-aos="fade-up">
	              	<h1>React and Clarifai API</h1>
		            </div>
	            	<div data-aos="fade-up">
	            	<a href="https://russellsoppe.github.io/facebrain/"><img className="webimg" alt="React and Clarifai API" src={facebrain}></img></a>
	              </div>
	            	<div className="cardtext" data-aos="fade-up">
		              <p>This website was created with React using the Clarifai API to detect a face in a picture!</p>
		             	<a href="https://github.com/RussellSoppe/facebrain"><FaGithub className="connectingicon"/></a>
		             	<a href="https://russellsoppe.github.io/facebrain/"><FaDesktop className="connectingicon"/></a>
	            	</div>
	            </div>
	          </div>

	          
	        </div>
	      );
	 		
}

export default WebsitesMF;