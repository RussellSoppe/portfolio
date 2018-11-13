import React from 'react';
import './css/Websites.css';
import facebrain from './images/facebrain.PNG';
import swapi from './images/swapi.PNG';
import backgen from './images/backgen.PNG';
import navbarsu from './images/navbarsu.PNG';
import mfnavbar from './images/mfnavbar.PNG';
import calculator from './images/calculator.png';
import robofriends from './images/robofriends.png';

const WebsitesComp = (props) => {
	
		return(
		 			<div  className="websitesalt">

 						<div className="outercard">
	            <div className="innercardalt">
	            	<div data-aos="fade-right">
	            		<a href="https://russellsoppe.github.io/facebrain/"><img className="webimgalt" alt="React and Clarifai API" src={facebrain}></img></a>
	              </div>
	            	<div className="cardtext" data-aos="fade-left">
	            		<h1>React and Clarifai API</h1>
		              <p>This website was created with React using the Clarifai API to detect a face in a picture!</p>
		              <a className="btn" href="https://russellsoppe.github.io/facebrain/" role="button">Go to Website</a>
	            	</div>
	            </div>
	          </div>

	          <div className="outercard">
	            <div className="innercardalt">
	          		<div className="cardtext" data-aos="fade-right">
	              	<h1>Robofriends React App</h1>
		              <p>This website was created with React.</p>
		              <a className="btn" href="https://russellsoppe.github.io/robofriends/" role="button">Go to Website</a>
	              </div>
	              <div data-aos="fade-left">
				         <img className="webimgalt" alt="Robo Friends" src={robofriends}></img>
	          		</div>
	            </div>
	          </div>

	          <div className="outercard">
	            <div className="innercardalt">
	              <div data-aos="fade-right">
				         <img className="webimgalt" alt="StarWars" src={swapi}></img>
	          		</div>
	          		<div className="cardtext" data-aos="fade-left">
	              	<h1>Star Wars API</h1>
		              <p>This website was created with React using the Star Wars API.</p>
		              <a className="btn" href="https://russellsoppe.github.io/StarWars/" role="button">Go to Website</a>
	              </div>
	            </div>
	          </div>
	        
           <div className="outercard">
	            <div className="innercardalt">
	            	<div className="cardtext" data-aos="fade-right">
	            		<h1>Background Generator</h1>
		              <p>This website was created with HTML, CSS, and JavaScript as an exercise in Zero To Mastery Course.</p>
		              <a className="btn" href="https://russellsoppe.github.io/Background-Generator" role="button">Go to Website</a>
	            	</div>
	            	<div data-aos="fade-left">
            		 	<img className="webimgalt" alt="Background Generator" src={backgen}></img>
                </div>
               </div>
      			</div>
		    
	          <div className="outercard">
	            <div className="innercardalt">
	            	<div data-aos="fade-right">
		            	<img className="webimgalt" alt="NavBar StartUp" src={navbarsu}></img>
	            	</div>
	            	<div className="cardtext" data-aos="fade-left">
	            		<h1>NavBar Start Up</h1>
		              <p>This website was created with HTML, CSS, and JavaScript.</p>
		              <a className="btn" href="https://russellsoppe.github.io/navbar-startup/" role="button">Go to Website</a>
	            	</div>
	            </div>
	          </div>
	    
	    			<div className="outercard">
	            <div className="innercardalt">
	            	<div className="cardtext" data-aos="fade-right">
	            		<h1>Mobile First Start Up</h1>
		              <p>This website was created with HTML, CSS, and JavaScript.</p>
		              <a className="btn" href="https://russellsoppe.github.io/startupmf/" role="button">Go to Website</a>
	            	</div>
	            	<div data-aos="fade-left">
            		 	<img className="webimgalt" alt="Mobile First Start Up" src={mfnavbar}></img>
                </div>
               </div>
      			</div>
	                 
	          <div className="outercard">
		          <div className="innercardalt">
		          	<div data-aos="fade-right">
		              <img className="webimgalt" alt="Calculator" src={calculator}></img>
	              </div>
	            	<div className="cardtext" data-aos="fade-left">
	            		<h1>DOM Calculator</h1>
		              <p>This website was created with HTML, CSS, and JavaScript. 
		              The current style choices are from my daughter who loves all things pink and purple.</p>
		              <a className="btn" href="https://russellsoppe.github.io/calculator/" role="button">Go to Website</a>
	            	</div>
	            </div>
	          </div>
	        </div>
	      );
	 		
}

export default WebsitesComp;