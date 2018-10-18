import React from 'react';
import './css/TopBanner.css';
import keyboard from './images/keyboard.jpg';


const TopBanner = (props)=>{
	return(
     <div className="container">
      <img className="keyboardimg" src={keyboard} alt="abstract smoke swirls">
      </img>
      <div className="centered">Russell Soppe <br/> Full Stack Web Developer
      </div>
      <div className="abouttext"> 
          <div>Welcome to my portfolio site.</div> 
          <div>Below you will find some of the project I have done and am currently working on.</div> 
          <div>This site is a work in progress, both as a portfolio site and some of the sites within.</div> 
          <div>If you happened to stumble across this page and aren't impressed yet, 
          check back every couple of weeks and see what changes have been made.</div> 
      </div>
      <div className="contactmediv">
        <button onClick={()=> props.onOptionChange('Contact')} className="contactmebutton" >Contact Me</button>
      </div>
    </div>
     
	);
}

export default TopBanner;

  