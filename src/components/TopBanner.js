import React from 'react';
import './css/TopBanner.css';
import './css/TopBannerBreakPoints.css';
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
     <div id="topbannerdiv">{/*TopBanner Div Starts*/}

      <img id="keyboardimg" src={keyboard} alt="closeup of keyboard">
      </img>

      <div id="nametitlediv">
        <div>
          Russell Soppe
        </div>
        <div>
          Full Stack Web Developer
        </div>
        <div id="fullstackicons">
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
          <FaNodeJs />  
          <FaDatabase />
        </div>
      </div>

      

      <div id="aboutmemasterdiv"> {/*About ME Master div starts*/}

        <div id="aboutmediv">{/*about me divs starts*/}

          <div id="introtext">{/*abouttext starts*/}
            <div id="welcometext">
              Welcome
            </div>
            <div>
              I am a developer who is motivated by:
            </div>
          </div>{/*abouttext ends*/}
         
          <div id="aboutmeiconmasterdiv">{/*aboutmeiconmasterdiv starts*/}
            <div className="aboutmeicondivs">
                             
                <FaBookReader className="aboutmeicons"/>
             
              <div className="aboutmeicontext">
                learning
              </div>
            </div>

            <div className="aboutmeicondivs">
              
              
                <FaLink className="aboutmeicons"/>
              
              <div className="aboutmeicontext">
                connecting
              </div> 
            </div>

            <div className="aboutmeicondivs"> 
                          
                <FaChessKnight className="aboutmeicons"/>
              
              <div className="aboutmeicontext">
                challenge
              </div>
            </div>

            <div className="aboutmeicondivs">
              
             
                <FaBullseye className="aboutmeicons"/>
             
              <div className="aboutmeicontext">
                results
              </div>
            </div>
          </div>{/*aboutmeiconmasterdiv ends*/}

        </div>{/*about me divs ends*/}
 
      </div>{/*About ME MASTER Div Ends*/}
      
      <div id="contactmasterdiv">{/*Contact ME MASTER Div Starts*/}

        <div id="contactdiv">
          <div id="contacttext"> 
            I can be found here:
          </div>
          <a href="https://github.com/RussellSoppe">
            <FaGithub className="contacticons"/>
          </a>
          <a href="https://www.linkedin.com/in/russell-soppe-6618ba10a">
            <FaLinkedin className="contacticons"/>
          </a>
          <a href="mailto: dev@russellsoppe.com">
            <FaPaperPlane className="contacticons"/> 
          </a>
        </div>

        <div id="seemyprojecttext">
          Scroll below to see some of my projects.
        </div>

      </div>{/*Contact ME MASTER Div Ends*/}

    </div>/*TopBanner Div Ends*/
     
	);
}

export default TopBanner;

  