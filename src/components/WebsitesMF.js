import React from 'react';
import './css/Websites.css';
import facebrain from './images/facebrain.PNG';
import swapi from './images/swapi.PNG';
import backgen from './images/backgen.PNG';
import navbarsu from './images/navbarsu.PNG';
import mfnavbar from './images/mfnavbar.PNG';
import calculator from './images/calculator.png';

const WebsitesMF = (props) => {
	
		return(
			
		 			<div  className="websites">
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
		              <a className="btn" href="https://russellsoppe.github.io/StarWars/" role="button">Go to Website</a>
	              </div>
	            </div>
	          </div>
	        
	          <div className="outercard">
	            <div className="innercard">
	            	<div className="cardtexttitle" data-aos="fade-down">
	              	<h1>React and Clarifai API</h1>
		            </div>
	            	<div data-aos="fade-up">
	            		<img className="webimg" alt="React and Clarifai API" src={facebrain}></img>
	              </div>
	            	<div className="cardtext" data-aos="fade-down">
	            		
		              <p>This website was created with React using the Clarifai API to detect faces in a picture!</p>
		              <a className="btn" href="https://russellsoppe.github.io/facebrain/" role="button">Go to Website</a>
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
		              <a className="btn" href="https://russellsoppe.github.io/Background-Generator" role="button">Go to Website</a>
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
		              <a className="btn" href="https://russellsoppe.github.io/navbar-startup/" role="button">Go to Website</a>
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
		              <a className="btn" href="https://russellsoppe.github.io/startupmf/" role="button">Go to Website</a>
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
		              <a className="btn" href="https://russellsoppe.github.io/calculator/" role="button">Go to Website</a>
	            	</div>
	            </div>
	          </div>
	        </div>
	      );
	 		
}

export default WebsitesMF;