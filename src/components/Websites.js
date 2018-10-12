import React from 'react';

const Websites = (props) => {
	
		 if (props.currentsite==="starwars")
		 	{
		 		return(
		 			<div className="websites">
	          <div className="outercard">
	            <div className="innercard">
	              <p>The website below was created with React using the Star Wars API.</p>
	              <p>Future plans include adding planets and vehicle pages as well as links between within profiles.</p>
	                <iframe title="SWAPI Exercise" src="https://russellsoppe.github.io/StarWars/">
	                  <p>Your browser does not support iframes.</p>
	                </iframe>
	              <a href="https://russellsoppe.github.io/StarWars/">https://russellsoppe.github.io/StarWars/</a>
	            </div>
	          </div>
	      	</div>
		 		);
		 	} else if (props.currentsite==="facebrain") {
		 		return (
			 		<div className="websites">
	           <div className="outercard">
	            <div className="innercard">
	              <p>The website below was created with React using the Clarifai API to detect faces in a picture!.</p>
	                <iframe title="Clarifai API Final Exercise" src="https://russellsoppe.github.io/facebrain/">
	                  <p>Your browser does not support iframes.</p>
	                </iframe>
	              <a href="https://russellsoppe.github.io/facebrain/">https://russellsoppe.github.io/facebrain/</a>
	            </div>
	          </div>
	        </div>
	      );
		 	} else if (props.currentsite==="backgroundgenerator") {
		 		  return (
				 		<div className="websites">
	           <div className="outercard">
		            <div className="innercard">
		              <p>The website below was created with HTML, CSS, and JavaScript as an exercise in Zero To Mastery Course.</p>
		                <iframe title="Background Generator" src="https://russellsoppe.github.io/Background-Generator/">
		                  <p>Your browser does not support iframes.</p>
		                </iframe>
		              <a href="https://russellsoppe.github.io/Background-Generator">https://russellsoppe.github.io/Background-Generator/</a>
		            </div>
        			</div>
		        </div>
		      );
		 	}	else if (props.currentsite==="navbar") {
	 		  return (
			 		<div className="websites">
	          <div className="outercard">
	            <div className="innercard">
	              <p>The website below was created with HTML, CSS, and JavaScript.</p>
	                <iframe title="navbar startup" src="https://russellsoppe.github.io/navbar-startup/">
	                  <p>Your browser does not support iframes.</p>
	                </iframe>
	              <a href="https://russellsoppe.github.io/navbar-startup/">https://russellsoppe.github.io/navbar-startup/</a>
	            </div>
	          </div>
	         </div>
	       );
		 	}	else if (props.currentsite==="mobilefirst") {
	 		  return (
			 		<div className="websites">
	           <div className="outercard">
	            <div className="innercard">
	              <p>The website below was created with HTML, CSS, and JavaScript.</p>
	                <iframe title="startup mobile first" src="https://russellsoppe.github.io/startupmf/">
	                  <p>Your browser does not support iframes.</p>
	                </iframe>
	              <a href="https://russellsoppe.github.io/startupmf/">https://russellsoppe.github.io/startupmf/</a>
	            </div>
	          </div>
	        </div>
	       );
		 	}	else if (props.currentsite==="calculator") {
	 		  return (
			 		<div className="websites">
	           <div className="outercard">
	            <div className="innercard">
	              <p>The website below was created with HTML, CSS, and JavaScript. 
	              The current style choices are from my daughter who loves all things pink and purple.</p>
	                <iframe title="calculator" src="https://russellsoppe.github.io/calculator/">
	                  <p>Your browser does not support iframes.</p>
	                </iframe>
	              <a href="https://russellsoppe.github.io/calculator/">https://russellsoppe.github.io/calculator/</a>
	            </div>
	          </div>
	        </div>
	      );
	 		}
}

export default Websites;