import React from 'react';
import './css/WebsiteDisplayOptions.css';

const WebsiteDisplayOptions = (props)=>{
	return(
		<div className="websitebuttonbannero">
	    <div>
	     <div className="websitebuttongroupo">
	      <button onClick={()=> props.onOptionChange('mobilefirst')} className="websitebuttono">Mobile</button>
	      <button onClick={()=> props.onOptionChange('computer')} className="websitebuttono">Computer</button>
	      {/*<button onClick={()=> props.onOptionChange('oneatatime')} className="websitebuttono">Single iFrame</button>*/}
	     </div>
	    </div>
    </div>
	);
}

export default WebsiteDisplayOptions;