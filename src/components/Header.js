import React from 'react';
import './css/Header.css';
import './css/HeaderBreakPoints.css';
import keyboard from './images/keyboard500x792.jpg';
import { FaJs } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaWordpress } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
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


const Header = (props)=>{
	return(
     <div id="topbannerdiv">{/*TopBanner Div Starts*/}

      <div id="keyboardimg" >
      </div>

      <div id="nametitlediv">
        <div id="nametext">
          Russell Soppe
        </div>
        <div id="devtext">
          Web Developer
        </div>
      </div>

      
      <div id="aboutmemasterdiv"> {/*About ME Master div starts*/}

        <div id="aboutmediv">{/*about me divs starts*/}

          <div id="introtext">{/*abouttext starts*/}
            <div id="welcometext">
              Need help with your site?

            </div>
            <div className="contact-now-div">
      <a className="contact-a" href="mailto: dev@russellsoppe.com">
        <div className="contact-now-text">Contact Me Today</div>     
      </a>
    </div> 
            <div>
              I am a developer specializing in:
            </div>
          </div>{/*abouttext ends*/}
         
          <div id="aboutmeiconmasterdiv">{/*aboutmeiconmasterdiv starts*/}
            <div className="aboutmeicondivs">
                             
                <FaWordpress className="aboutmeicons"/>
             
              <div className="aboutmeicontext">
                WordPress
              </div>
            </div>

            <div className="aboutmeicondivs">
              
              
                <FaHtml5 className="aboutmeicons"/>
              
              <div className="aboutmeicontext">
                HTML
              </div> 
            </div>

            <div className="aboutmeicondivs"> 
                          
                <FaCss3Alt className="aboutmeicons"/>
              
              <div className="aboutmeicontext">
                CSS
              </div>
            </div>

            <div className="aboutmeicondivs">
              
             
                <FaJs className="aboutmeicons"/>
             
              <div className="aboutmeicontext">
                JavaScript
              </div>
            </div>

            <div className="aboutmeicondivs">
              
             
                <FaPhp className="aboutmeicons"/>
             
              <div className="aboutmeicontext">
                PHP
              </div>
            </div>

          </div>{/*aboutmeiconmasterdiv ends*/}

        </div>{/*about me divs ends*/}

        <div id="alsodiv">
          <div id="alsotext"> 
            I also have experience with:
          </div>

          <FaReact className="contacticons"/>
          <FaNodeJs className="contacticons"/>  
          <FaDatabase className="contacticons"/>

        </div>

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

export default Header;

  