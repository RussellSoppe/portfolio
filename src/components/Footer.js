import React from 'react';
import './css/Footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';

const Footer = ()=>{
	return(

		<div className="footer">
		 	<div>
        This site is created and maintained by Russell Soppe.
      </div> 
     
		  <div id="footercontactdiv">
        <div id="footercontacttext"> 
          Russell can be found here:
        </div>
        <a href="https://github.com/RussellSoppe">
          <FaGithub className="footercontacticons"/>
        </a>
        <a href="https://www.linkedin.com/in/russell-soppe-6618ba10a">
          <FaLinkedin className="footercontacticons"/>
        </a>
        <a href="mailto: dev@russellsoppe.com">
          <FaPaperPlane className="footercontacticons"/> 
        </a>
      </div>
     
        
       
		 	<div className="whitespace"></div>

		</div>

	);
}

export default Footer;
