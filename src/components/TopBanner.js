import React from 'react';
import './css/TopBanner.css';
import keyboard from './images/keyboard500x792.jpg';
import { FaJs } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';

// icons from https://www.npmjs.com/package/react-icons
// list of icons here: https://react-icons.netlify.com/#/icons/fa


const TopBanner = (props)=>{
	return(
     <div className="container">
      <img className="keyboardimg" src={keyboard} alt="closeup of keyboard">
      </img>
      <div className="centered">Russell Soppe <br/> Full Stack Web Developer
      </div>
      <div className="centeredicons">
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <FaNodeJs />  
        <FaDatabase />
      </div>
      <div className="abouttext"> 
          <div>Welcome</div> 
          <div></div> 
          <div>I am glad you found your way here.</div>
          <div>I am a new developer who is motivated by learning, connecting, challenge and results.</div>
          <div>Check out some of my current projects below and check back often to see addtions and updates.</div>
          <br/>
          <div className="githubprofile">
            <a className="githubprofile" href="https://github.com/RussellSoppe">
              <FaGithub className="github"/>
              <span className="profiletext">https://github.com/RussellSoppe</span>
            </a>
          </div>
          <div className="githubprofile">
            <a className="githubprofile" href="https://www.linkedin.com/in/russell-soppe-6618ba10a">
              <FaLinkedin className="github"/>
              <span className="profiletext">Check me out at Linkedin</span>
            </a>
          </div>
          <div className="githubprofile">
            <a className="githubprofile" href="mailto: dev@russellsoppe.com">
              <FaPaperPlane className="github"/> 
              <span className="profiletext">dev@russellsoppe.com</span>
            </a>
          </div>
      </div>
      
      {/*<div className="contactmediv">
        <button onClick={()=> props.onOptionChange('Contact')} className="contactmebutton" >Contact Me</button>
      </div>*/}
    </div>
     
	);
}

export default TopBanner;

  