import React from 'react';
import './css/AboutBanner.css';


const AboutBanner = ()=>{
	return(
     <div className="aboutbanner">
     	<div>
               <div>Hello, I am not sure how you found this site but I am glad you have.<br/> 
               This site is a work in progress, both as a portfolio site and some of the sites within.<br/> 
               If you happened to stumble across this page and aren't impressed yet, check back every couple of weeks and see what changes have been made. 
               </div>
               <div>This portfolio site is being made with React. 
               React was created by Facebook, check it out here at 
               <a href="https://reactjs.org">https://reactjs.org</a>.  
               </div>
          </div>
     </div>
	);
}

export default AboutBanner;