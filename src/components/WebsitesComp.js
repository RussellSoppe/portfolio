import React from 'react';
import './css/Websites.css';
import {comparray} from './WebsiteArrays';

import { FaGithub } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';

const WebsitesComp = (props) => {
	
	return(
		<div  className="websitesalt">

		 	{comparray.map((info, i)=>{
		 		{if(comparray[i].side1 === true ){
		 			return (
									<div className="outercard">
			            	<div className="innercardalt">     							
											<div data-aos={comparray[i].dataaos1}>
				            		<a href={comparray[i].webaddress}><img className="webimgalt" alt={comparray[i].imgalt} src={comparray[i].imgsource}></img></a>
				              </div>
				            	<div className="cardtext" data-aos={comparray[i].dataaos2}>
				            		<div className="cardtexttitle">{comparray[i].title}</div>
					              <p>{comparray[i].description}</p>
					              <a href={comparray[i].github}><FaGithub className="connectingicon"/></a>
					             	<a href={comparray[i].webaddress}><FaDesktop className="connectingicon"/></a>
				            	</div> 
			            	</div>
			         		</div>
			    );
			  }else{
			    return(
			          	<div className="outercard">
			            	<div className="innercardalt">  
				            	<div className="cardtext" data-aos={comparray[i].dataaos2}>
				            		<div className="cardtexttitle">{comparray[i].title}</div>
					              <p>{comparray[i].description}</p>
					              <a href={comparray[i].github}><FaGithub className="connectingicon"/></a>
					             	<a href={comparray[i].webaddress}><FaDesktop className="connectingicon"/></a>
				            	</div>
				            	<div data-aos={comparray[i].dataaos1}>
				            		<a href={comparray[i].webaddress}><img className="webimgalt" alt={comparray[i].imgalt} src={comparray[i].imgsource}></img></a>
				              </div>
				            </div>
			         		</div>
			          );
			        }
     		}

		 	})}							         
	          
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