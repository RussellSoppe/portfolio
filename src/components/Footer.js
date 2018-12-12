import React from 'react';
import './css/Footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';

const Footer = ()=>{
	return(

		<div className="footer">
		 	<div>
        This site is being created by Russell Soppe.
      </div> 
		  <div> 
        I can be found here:
      </div>
      <div>
          <a href="https://github.com/RussellSoppe">
            <FaGithub className="pericons"/>
          </a>
          <a>
            <FaLinkedin className="pericons"/>
          </a>
          <a>
            <FaPaperPlane className="pericons"/> 
          </a>
      </div>
        
       
		 	<div className="whitespace"></div>

		</div>

	);
}

export default Footer;