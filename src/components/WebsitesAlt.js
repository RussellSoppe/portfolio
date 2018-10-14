import React from 'react';

const Websites = (props) => {
	
		return(
		 			<div  className="websites">

	          <div className="outercard">
	            <div className="innercard">
	              <div className="cardtext" data-aos="fade-right">
	              	<h1>Star Wars API</h1>
		              <p>This website was created with React using the Star Wars API.</p>
		              <p>Future plans include adding planets and vehicle pages as well as links between within profiles.</p>
		              <a className="btn" href="https://russellsoppe.github.io/StarWars/" role="button">Go to Website</a>
	              </div>
	              <div data-aos="fade-left">
				          {<iframe title="SWAPI Exercise" src="https://russellsoppe.github.io/StarWars/">
				            <p>Your browser does not support iframes.</p>
				          </iframe>}
	          		</div>
	            </div>
	          </div>
	        
	          <div className="outercard">
	            <div className="innercard">
	            	<div data-aos="fade-right">
	            		<iframe title="Clarifai API Final Exercise" src="https://russellsoppe.github.io/facebrain/">
	                  <p>Your browser does not support iframes.</p>
	                </iframe>
	              </div>
	            	<div className="cardtext" data-aos="fade-left">
	            		<h1>React and Clarifai API</h1>
		              <p>This website was created with React using the Clarifai API to detect faces in a picture!</p>
		              <a className="btn" href="https://russellsoppe.github.io/facebrain/" role="button">Go to Website</a>
	            	</div>
	            </div>
	          </div>
	     
           <div className="outercard">
	            <div className="innercard">
	            	<div className="cardtext" data-aos="fade-right">
	            		<h1>Background Generator</h1>
		              <p>This website was created with HTML, CSS, and JavaScript as an exercise in Zero To Mastery Course.</p>
		              <a className="btn" href="https://russellsoppe.github.io/Background-Generator" role="button">Go to Website</a>
	            	</div>
	            	<div data-aos="fade-left">
            		 	<iframe title="Background Generator" src="https://russellsoppe.github.io/Background-Generator/">
                  	<p>Your browser does not support iframes.</p>
                	</iframe>
                </div>
               </div>
      			</div>
		    
	          <div className="outercard">
	            <div className="innercard">
	            	<div data-aos="fade-right">
		            	<iframe title="navbar startup" src="https://russellsoppe.github.io/navbar-startup/">
		                <p>Your browser does not support iframes.</p>
		              </iframe>
	            	</div>
	            	<div className="cardtext" data-aos="fade-left">
	            		<h1>NavBar Start Up</h1>
		              <p>This website was created with HTML, CSS, and JavaScript.</p>
		              <a className="btn" href="https://russellsoppe.github.io/navbar-startup/" role="button">Go to Website</a>
	            	</div>
	            </div>
	          </div>
	    
	    			<div className="outercard">
	            <div className="innercard">
	            	<div className="cardtext" data-aos="fade-right">
	            		<h1>Mobile First Start Up</h1>
		              <p>This website was created with HTML, CSS, and JavaScript.</p>
		              <a className="btn" href="https://russellsoppe.github.io/startupmf/" role="button">Go to Website</a>
	            	</div>
	            	<div data-aos="fade-left">
            		 	<iframe title="startup mobile first" src="https://russellsoppe.github.io/startupmf/">
                  	<p>Your browser does not support iframes.</p>
                	</iframe>
                </div>
               </div>
      			</div>
	                 
	          <div className="outercard">
		          <div className="innercard">
		          	<div data-aos="fade-right">
		              <iframe title="calculator" src="https://russellsoppe.github.io/calculator/">
		                <p>Your browser does not support iframes.</p>
		              </iframe>
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

export default Websites;