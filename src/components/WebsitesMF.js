import React from 'react';
import './Websites.css';

const WebsitesMF = (props) => {
	
		return(
		 			<div  className="websites">

	          <div className="outercard">
	            <div className="innercard">
	              <div data-aos="fade-up">
				          <img alt="StarWars" href=""></img>
	          		</div>
	          		<div className="cardtext" data-aos="fade-down">
	              	<h1>Star Wars API</h1>
		              <p>This website was created with React using the Star Wars API.</p>
		              <p>Future plans include adding planets and vehicle pages as well as links between within profiles.</p>
		              <a className="btn" href="https://russellsoppe.github.io/StarWars/" role="button">Go to Website</a>
	              </div>
	              
	            </div>
	          </div>
	        
	          <div className="outercard">
	            <div className="innercard">
	            	<div data-aos="fade-up">
	            		<img alt="React and Clarifai API" href=""></img>
	              </div>
	            	<div className="cardtext" data-aos="fade-down">
	            		<h1>React and Clarifai API</h1>
		              <p>This website was created with React using the Clarifai API to detect faces in a picture!</p>
		              <a className="btn" href="https://russellsoppe.github.io/facebrain/" role="button">Go to Website</a>
	            	</div>
	            </div>
	          </div>
	     
           <div className="outercard">
	            <div className="innercard">
	            	<div data-aos="fade-up">
            		 	<img alt="Background Generator" href=""></img>
                </div>
                <div className="cardtext" data-aos="fade-down">
	            		<h1>Background Generator</h1>
		              <p>This website was created with HTML, CSS, and JavaScript as an exercise in Zero To Mastery Course.</p>
		              <a className="btn" href="https://russellsoppe.github.io/Background-Generator" role="button">Go to Website</a>
	            	</div>
	            	
               </div>
      			</div>
		    
	          <div className="outercard">
	            <div className="innercard">
	            	<div data-aos="fade-up">
		            	<img alt="NavBar StartUp" href=""></img>
	            	</div>
	            	<div className="cardtext" data-aos="fade-down">
	            		<h1>NavBar Start Up</h1>
		              <p>This website was created with HTML, CSS, and JavaScript.</p>
		              <a className="btn" href="https://russellsoppe.github.io/navbar-startup/" role="button">Go to Website</a>
	            	</div>
	            </div>
	          </div>
	    
	    			<div className="outercard">
	            <div className="innercard">
	            	<div data-aos="fade-up">
            		 	<img alt="Mobile First Start Up" href=""></img>
                </div>
                <div className="cardtext" data-aos="fade-down">
	            		<h1>Mobile First Start Up</h1>
		              <p>This website was created with HTML, CSS, and JavaScript.</p>
		              <a className="btn" href="https://russellsoppe.github.io/startupmf/" role="button">Go to Website</a>
	            	</div>
	            	
               </div>
      			</div>
	                 
	          <div className="outercard">
		          <div className="innercard">
		          	<div data-aos="fade-up">
		              <img alt="Calculator" href=""></img>
	              </div>
	            	<div className="cardtext" data-aos="fade-down">
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

export default WebsitesMF;