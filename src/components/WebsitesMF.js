import React from 'react';
import './css/Websites.css';
// remember that for non default exports must destructure
import {mobilearray} from './WebsiteArrays';
import { FaGithub } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
//import { FaGlobe } from 'react-icons/fa';
//import { FaLink } from 'react-icons/fa';

// import { FaLinkedin } from 'react-icons/fa';
// FaPortrait

const WebsitesMF = (props) => {
	
	
		return(
			<div  className="websites">
				{mobilearray.map((info, i)=>{
					return(
						<div className="outercard">
	            <div className="innercard">
	            	<div data-aos="fade-up">
	              	<div className="cardtexttitle">{mobilearray[i].title}</div>
		            </div>
	            	<div data-aos="fade-up">
	            	<a href={mobilearray[i].webaddress}><img className="webimg" alt={mobilearray[i].imgalt} src={mobilearray[i].imgsource}></img></a>
	              </div>
	            	<div className="cardtext" data-aos="fade-up">
		              <p>{mobilearray[i].description}</p>
		             	<a href={mobilearray[i].github}><FaGithub className="connectingicon"/></a>
		             	<a href={mobilearray[i].webaddress}><FaDesktop className="connectingicon"/></a>
	            	</div>
	            </div>
	          </div>
					);
				})}
	     </div>
	   );

}

export default WebsitesMF;