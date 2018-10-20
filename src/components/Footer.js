import React from 'react';
import './css/Footer.css';
import { FaGithub } from 'react-icons/fa';

const Footer = ()=>{
	return(

		<div className="footer">
		 	<div>This site is being created by Russell Soppe.</div> 
		 	<div>Contact me by email: dev@russellsoppe.com</div>
		 	<div className="githubprofile"><FaGithub className="github"/><div>https://github.com/RussellSoppe</div></div>
		 	<div className="whitespace"></div>

		</div>

	);
}

export default Footer;