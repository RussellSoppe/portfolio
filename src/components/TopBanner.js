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

import { FaBookReader } from 'react-icons/fa';
import { FaBullseye } from 'react-icons/fa';
import { FaChessKnight } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
// icons from https://www.npmjs.com/package/react-icons
// list of icons here: https://react-icons.netlify.com/#/icons/fa


const TopBanner = (props)=>{
	return(
     <div className="container">
      <img className="keyboardimg" src={keyboard} alt="closeup of keyboard">
      </img>
      <div className="centered">
        <div>
          Russell Soppe
        </div>
        <div>
          Full Stack Web Developer
        </div>
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

        <div id="personalaboutmediv">{/*personal divs starts here*/}

          <div id="abouttext">{/*abouttext starts here*/}
            <div>
              Welcome
            </div> 

            <div>
              I am glad you found your way here.
            </div>

            <div>
              I am a new developer who is motivated by
            </div>
          </div>{/*abouttext ends here*/}
         
          <div id="aboutmeiconmasterdiv">{/*aboutmeiconmasterdiv starts*/}
            <div className="aboutmeicondivs">
              <div>                
                <FaBookReader className="aboutmeicons"/>
              </div>
              <div className="aboutmeicontext">
                learning
              </div>
            </div>

            <div className="aboutmeicondivs">
              
              <div> 
                <FaLink className="aboutmeicons"/>
              </div>
              <div className="aboutmeicontext">
                connecting
              </div> 
            </div>

            <div className="aboutmeicondivs"> 
              <div>               
                <FaChessKnight className="aboutmeicons"/>
              </div> 
              <div className="aboutmeicontext">
                challenge
              </div>
            </div>

            <div className="aboutmeicondivs">
              
              <div> 
                <FaBullseye className="aboutmeicons"/>
              </div> 
              <div className="aboutmeicontext">
                results
              </div>
            </div>
          </div>{/*aboutmeiconmasterdiv ends*/}

        </div>{/*personal divs end here*/}
           
          
          <div id="periconsdiv">
            <div> 
              I can be found here:
            </div>
            <a href="https://github.com/RussellSoppe">
              <FaGithub className="pericons"/>
            </a>
            <a href="https://www.linkedin.com/in/russell-soppe-6618ba10a">
              <FaLinkedin className="pericons"/>
            </a>
            <a href="mailto: dev@russellsoppe.com">
              <FaPaperPlane className="pericons"/> 
            </a>
          </div>

          <div id="seemyprojecttext">
            If you are interested in some of my projects, scroll below.
          </div>
          {/*<div className="githubprofile">
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
          </div>*/}
      </div>
      
      {/*<div className="contactmediv">
        <button onClick={()=> props.onOptionChange('Contact')} className="contactmebutton" >Contact Me</button>
      </div>*/}
    </div>
     
	);
}

export default TopBanner;

  