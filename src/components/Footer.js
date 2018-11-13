import React from 'react';
import './css/Footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';

const Footer = ()=>{
	return(

		<div className="footer">
		 	<div>This site is being created by Russell Soppe.</div> 
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
		 	<div className="whitespace"></div>

		</div>

	);
}

export default Footer;