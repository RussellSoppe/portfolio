import React from 'react';
import './css/Websites.css';
import {webarray} from './WebsiteArrays';

import { FaGithub } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';

const WebsitesComp = (props) => {
	
	return(
		<div id="desktopview">
			<div  className="websitesalt">

			 	{webarray.map((info, i)=>{
			 		{if(webarray[i].side1 === true ){
			 			return (
										<div className="outercard">
				            	<div className="innercardalt">     							
												<div data-aos={webarray[i].dataaos1}>
					            		<a href={webarray[i].webaddress}><img className="webimgalt" alt={webarray[i].imgalt} src={webarray[i].imgsource}></img></a>
					              </div>
					            	<div className="cardtext" data-aos={webarray[i].dataaos2}>
					            		<div className="cardtexttitle">{webarray[i].title}</div>
					            		<p>{webarray[i].description}</p>
						              <p>{webarray[i].techdescription}</p>
						              <div class="connectingincons">
							              <a className="connectingicontext" href={webarray[i].github}><FaGithub className="connectingicon"/>GitHub Repo</a>
							             	<a className="connectingicontext" href={webarray[i].webaddress}><FaDesktop className="connectingicon"/>Website</a>
						             	</div>
					            	</div> 
				            	</div>
				         		</div>
				    );
				  }else{
				    return(
				          	<div className="outercard">
				            	<div className="innercardalt">  
					            	<div className="cardtext" data-aos={webarray[i].dataaos2}>
					            		<div className="cardtexttitle">{webarray[i].title}</div>
					            		<p>{webarray[i].description}</p>
						              <p>{webarray[i].techdescription}</p>
						              <div class="connectingincons">
							              <a className="connectingicontext" href={webarray[i].github}><FaGithub className="connectingicon"/>GitHub Repo</a>
							             	<a className="connectingicontext" href={webarray[i].webaddress}><FaDesktop className="connectingicon"/>Website</a>
						             	</div>
					            	</div>
					            	<div data-aos={webarray[i].dataaos1}>
					            		<a href={webarray[i].webaddress}><img className="webimgalt" alt={webarray[i].imgalt} src={webarray[i].imgsource}></img></a>
					              </div>
					            </div>
				         		</div>
				          );
				        }
	     		}

			 	})}							         
		          
	  	</div>
	  </div>
	);
}

export default WebsitesComp;

 // <div className="outercard">
	//             <div className="innercardalt">
	//           		<div className="cardtext" data-aos="fade-right">
	//               	<h1>Robofriends React App</h1>
	// 	              <p>This website was created with React.</p>
	// 	              <a href="https://github.com/RussellSoppe/robofriends"><FaGithub className="connectingicon"/></a>
	// 	             	<a href="https://russellsoppe.github.io/robofriends/"><FaDesktop className="connectingicon"/></a>
	//               </div>
	//               <div data-aos="fade-left">
	// 			         <img className="webimgalt" alt="Robo Friends" src={robofriends}></img>
	//           		</div>
	//             </div>
	//           </div>