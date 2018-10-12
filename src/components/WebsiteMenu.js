import React from 'react';

const WebsiteMenu = (props)=>{
	return(

     	<div className="websitebuttonbanner">
               <div className="websitebuttongroup">
                    <button onClick={()=> props.onPageChange('facebrain')} className="websitebutton">Face Brain</button>
                    <button onClick={()=> props.onPageChange('starwars')} className="websitebutton">Star Wars API</button>
                    <button onClick={()=> props.onPageChange('backgroundgenerator')} className="websitebutton">Background Generator</button>
                    <button onClick={()=> props.onPageChange('navbar')} className="websitebutton">NavBar</button>
                    <button onClick={()=> props.onPageChange('mobilefirst')} className="websitebutton">Mobile First</button>
                    <button onClick={()=> props.onPageChange('calculator')} className="websitebutton">Calculator</button>
               </div>
          </div>
	);
}

export default WebsiteMenu;