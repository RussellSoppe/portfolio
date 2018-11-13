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
	            	<div className="cardtexttitle" data-aos="fade-down">
	              	<h1>React and Clarifai API</h1>
		            </div>
	            	<div data-aos="fade-up">
	            	<a href="https://russellsoppe.github.io/facebrain/"><img className="webimg" alt="React and Clarifai API" src={facebrain}></img></a>
	              </div>
	            	<div className="cardtext" data-aos="fade-down">
		              <p>This website was created with React using the Clarifai API to detect a face in a picture!</p>
		             	<a href="https://github.com/RussellSoppe/facebrain"><FaGithub className="connectingicon"/></a>
		             	<a href="https://russellsoppe.github.io/facebrain/"><FaDesktop className="connectingicon"/></a>
	            	</div>
	            </div>
	          </div>

	          <div className="outercard">
	            <div className="innercard">
	            	<div className="cardtexttitle" data-aos="fade-down">
	              	<h1>Robofriends React App</h1>
		            </div>
	            	<div data-aos="fade-up">
	            	<a href="https://russellsoppe.github.io/robofriends/"><img className="webimg" alt="Robots" src={robofriends}></img></a>
	              </div>
	            	<div className="cardtext" data-aos="fade-down">
		              <p>This website was created with React</p>
		              <a href="https://github.com/RussellSoppe/robofriends"><FaGithub className="connectingicon"/></a>
		             	<a href="https://russellsoppe.github.io/robofriends/"><FaDesktop className="connectingicon"/></a>
	            	</div>
	            </div>
	          </div>
			
		 			
		 			  <div className="outercard">
	            <div className="innercard">
	            	<div className="cardtexttitle" data-aos="fade-down">
	              	<h1>Star Wars API</h1>
		            </div>
	              <div data-aos="fade-up">
				          <img className="webimg" alt="StarWars" src={swapi}></img>
	          		</div>
	          		<div className="cardtext" data-aos="fade-down">
		              <p>This website was created with React using the Star Wars API.</p>
		              <a href="https://github.com/RussellSoppe/StarWars"><FaGithub className="connectingicon"/></a>
		             	<a href="https://russellsoppe.github.io/StarWars/"><FaDesktop className="connectingicon"/></a>
	              </div>
	            </div>
	          </div>
	        
	     
           	<div className="outercard">
	            <div className="innercard">
	            	<div className="cardtexttitle" data-aos="fade-down">
	              	<h1>Background Generator</h1>
		            </div>
	            	<div data-aos="fade-up">
            		 	<img className="webimg" alt="Background Generator" src={backgen}></img>
                </div>
                <div className="cardtext" data-aos="fade-down">
		              <p>This website was created with HTML, CSS, and JavaScript as an exercise in Zero To Mastery Course.</p>
		              <a href="https://github.com/RussellSoppe/Background-Generator"><FaGithub className="connectingicon"/></a>
		             	<a href="https://russellsoppe.github.io/Background-Generator/"><FaDesktop className="connectingicon"/></a>
	            	</div>
               </div>
      				</div>
		    
	          <div className="outercard">
	            <div className="innercard">
	            	<div className="cardtexttitle" data-aos="fade-down">
	              	<h1>NavBar Start Up</h1>
		            </div>
	            	<div data-aos="fade-up">
		            	<img className="webimg" alt="NavBar StartUp" src={navbarsu}></img>
	            	</div>
	            	<div className="cardtext" data-aos="fade-down">
		              <p>This website was created with HTML, CSS, and JavaScript.</p>
		              <a href="https://github.com/RussellSoppe/navbar-startup"><FaGithub className="connectingicon"/></a>
		             	<a href="https://russellsoppe.github.io/navbar-startup/"><FaDesktop className="connectingicon"/></a>
	            	</div>
	            </div>
	          </div>
	    
	    			<div className="outercard">
	            <div className="innercard">
	            	<div className="cardtexttitle" data-aos="fade-down">
	              	<h1>Mobile First Start Up</h1>
		            </div>
	            	<div data-aos="fade-up">
            		 	<img className="webimg" alt="Mobile First Start Up" src={mfnavbar}></img>
                </div>
                <div className="cardtext" data-aos="fade-down">
		              <p>This website was created with HTML, CSS, and JavaScript.</p>
		              <a href="https://github.com/RussellSoppe/startupmf"><FaGithub className="connectingicon"/></a>
		             	<a href="https://russellsoppe.github.io/startupmf/"><FaDesktop className="connectingicon"/></a>
	            	</div>
               </div>
      			</div>

      			<div className="outercard">
		          <div className="innercard">
		          	<div className="cardtexttitle" data-aos="fade-down">
	              	<h1>DOM Calculator</h1>
		            </div>
		          	<div data-aos="fade-up">
		          		<img className="webimg" alt="Calculator" src={calculator}></img>
	              </div>
	            	<div className="cardtext" data-aos="fade-down">
		              <p>This website was created with HTML, CSS, and JavaScript. 
		              The current style choices are from my daughter who loves all things pink and purple.</p>
		              <a href="https://github.com/RussellSoppe/calculator"><FaGithub className="connectingicon"/></a>
		             	<a href="https://russellsoppe.github.io/calculator/"><FaDesktop className="connectingicon"/></a>
	            	</div>
	            </div>
	          </div>
	        </div>
	      );
	 		
}

export default WebsitesMF;