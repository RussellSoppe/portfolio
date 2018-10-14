import React from 'react';

const Websites = (props) => {
	
		 if (props.currentsite==="starwars")
		 	{
		 		return(
		 			<div  className="websites">
	          <div className="outercard">
	            <div className="innercard">
	              <div className="cardtext" data-aos="fade-right">
		              <p>This website was created with React using the Star Wars API.</p>
		              <p>Future plans include adding planets and vehicle pages as well as links between within profiles.</p>
		              <a className="btn" href="https://russellsoppe.github.io/StarWars/" role="button">See Full Site</a>
	              </div>
	              <div data-aos="fade-left">
				          <iframe title="SWAPI Exercise" src="https://russellsoppe.github.io/StarWars/">
				            <p>Your browser does not support iframes.</p>
				          </iframe>
	          		</div>
	            </div>
	          </div>
	        </div>
		 		);
		 	} else if (props.currentsite==="facebrain") {
		 		return (
			 		<div className="websites">
	          <div className="outercard">
	            <div className="innercard">
	            	<div className="cardtext" data-aos="fade-right">
		              <p>This website was created with React using the Clarifai API to detect faces in a picture!</p>
		              <a className="btn" href="https://russellsoppe.github.io/facebrain/" role="button">See Full Site</a>
	            	</div>
	            	<div data-aos="fade-left">
	            		<iframe title="Clarifai API Final Exercise" src="https://russellsoppe.github.io/facebrain/">
	                  <p>Your browser does not support iframes.</p>
	                </iframe>
	              </div>
	            </div>
	          </div>
	        </div>
	      );
		 	} else if (props.currentsite==="backgroundgenerator") {
		 		  return (
				 		<div className="websites">
	           <div className="outercard">
		            <div className="innercard">
		            	<div className="cardtext" data-aos="fade-right">
			              <p>This website was created with HTML, CSS, and JavaScript as an exercise in Zero To Mastery Course.</p>
			              <a className="btn" href="https://russellsoppe.github.io/Background-Generator" role="button">See Full Site</a>
		            	</div>
		            	<div data-aos="fade-left">
	            		 	<iframe title="Background Generator" src="https://russellsoppe.github.io/Background-Generator/">
	                  	<p>Your browser does not support iframes.</p>
	                	</iframe>
	                </div>
	               </div>
        			</div>
		        </div>
		      );
		 	}	else if (props.currentsite==="navbar") {
	 		  return (
			 		<div className="websites">
	          <div className="outercard">
	            <div className="innercard">
	            	<div className="cardtext" data-aos="fade-right">
		              <p>This website was created with HTML, CSS, and JavaScript.</p>
		              <a className="btn" href="https://russellsoppe.github.io/navbar-startup/" role="button">See Full Site</a>
	            	</div>
	            	<div data-aos="fade-left">
		            	<iframe title="navbar startup" src="https://russellsoppe.github.io/navbar-startup/">
		                <p>Your browser does not support iframes.</p>
		              </iframe>
	            </div>
	           </div>
	          </div>
	         </div>
	       );
		 	}	else if (props.currentsite==="mobilefirst") {
	 		  return (
			 		<div className="websites">
	          <div className="outercard">
		            <div className="innercard">
		            	<div className="cardtext" data-aos="fade-right">
		              <p>This website was created with HTML, CSS, and JavaScript.</p>
		              <a className="btn" href="https://russellsoppe.github.io/startupmf/" role="button">See Full Site</a>
		            </div>
		            <div ata-aos="fade-left">
	            		<iframe title="startup mobile first" src="https://russellsoppe.github.io/startupmf/">
	                  <p>Your browser does not support iframes.</p>
	                </iframe>
		            </div>
		           </div>
	          </div>
	        </div>
	       );
		 	}	else if (props.currentsite==="calculator") {
	 		  return (
			 		<div className="websites">
	          <div className="outercard">
		          <div className="innercard">
	            	<div className="cardtext" data-aos="fade-right">
		              <p>This website was created with HTML, CSS, and JavaScript. 
		              The current style choices are from my daughter who loves all things pink and purple.</p>
		              <a className="btn" href="https://russellsoppe.github.io/calculator/" role="button">See Full Site</a>
	            	</div>
	            	<div data-aos="fade-left">
		              <iframe title="calculator" src="https://russellsoppe.github.io/calculator/">
		                <p>Your browser does not support iframes.</p>
		              </iframe>
	              </div>
		          </div>
	          </div>
	        </div>
	      );
	 		}
}

export default Websites;