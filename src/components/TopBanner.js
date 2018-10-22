import React from 'react';
import './css/TopBanner.css';
import keyboard from './images/keyboard.jpg';
import { FaJs } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';


const TopBanner = (props)=>{
	return(
     <div className="container">
      <img className="keyboardimg" src={keyboard} alt="abstract smoke swirls">
      </img>
      <div className="centered">Russell Soppe <br/> Full Stack Web Developer
      </div>
      <div className="centeredicons">
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <FaNodeJs />  
      </div>
      <div className="abouttext"> 
          <div>Welcome to my portfolio site.</div> 
          <div>Below you will find some of the project I have done and am currently working on.</div> 
          <div>I am still in the process of learning full stack developement so this site is a work in progress, as are some of my projects.</div> 
          <div>If you happened to stumble across this page and aren't impressed yet, 
          check back every couple of weeks and see what changes have been made.</div> <br/>
          <div className="githubprofile"><FaGithub className="github"/><div>https://github.com/RussellSoppe</div></div>
      </div>
      
      {/*<div className="contactmediv">
        <button onClick={()=> props.onOptionChange('Contact')} className="contactmebutton" >Contact Me</button>
      </div>*/}
    </div>
     
	);
}

export default TopBanner;

  