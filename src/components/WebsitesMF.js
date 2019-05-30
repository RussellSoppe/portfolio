import React from 'react';
import './css/Websites.css';
// remember that for non default exports must destructure
import {webarray} from './WebsiteArrays';
import { FaGithub } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
//import { FaGlobe } from 'react-icons/fa';
//import { FaLink } from 'react-icons/fa';

// import { FaLinkedin } from 'react-icons/fa';
// FaPortrait

const WebsitesMF = (props) => {
	
	
		return(
			<div id="mobilefirst">
			<div  className="websites">
				{webarray.map((info, i)=>{
					return(
						<div className="outercard">
	            <div className="innercard">
	            	<div data-aos="fade-up">
	              	<div className="cardtexttitle">{webarray[i].title}</div>
		            </div>
	            	<div data-aos="fade-up">
	            	<a href={webarray[i].webaddress}><img className="webimg" alt={webarray[i].imgalt} src={webarray[i].imgsource}></img></a>
	              </div>
	            	<div className="cardtextm" data-aos="fade-up">
	            		<p>{webarray[i].description}</p>
		              <p>{webarray[i].techdescription}</p>
		              <div class="connectinginconsm">
		             	<a className="connectingicontextm" href={webarray[i].github}>GitHub<FaGithub className="connectingiconm"/></a>
		             	<a className="connectingicontextm" href={webarray[i].webaddress}><FaDesktop className="connectingiconm"/>Website</a>
		             	</div>
	            	</div>
	            </div>
	          </div>
					);
				})}
	     </div>
	     </div>
	   );

}

export default WebsitesMF;