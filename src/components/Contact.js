import React from 'react';
import './css/Contact.css';

const Contact = ()=>{
	return(
		<section className="contact-section">
		<div className="marketingqs">Do you need a WordPress website?</div>
		<div className="marketingqs">Need some custom work done on your WordPress Theme?</div>
		<div className="marketingqs">Are you looking for a quick static landing page for your new business idea?</div>
		
		<div className="contact-now-div">
			<a className="contact-a" href="mailto: dev@russellsoppe.com">
	      <div className="contact-now-text">Contact Me Today</div>     
	    </a>
		</div> 

		</section>
	);
}

export default Contact;