import React from 'react';
import './css/TopBanner.css';
import keyboard from './images/keyboard.jpg';


const TopBanner = ()=>{
	return(
     <div className="container">
       <img className="keyboardimg" src={keyboard} alt="abstract smoke swirls"></img>
       <div className="centered">Russell Soppe Web Developer Portfolio</div>
     </div>
     
	);
}

export default TopBanner;

  {/*<div className="topbanner">
          <div className="nametitle">
               Russell Soppe Web Developer Portfolio
               <img className="topbannerimg" alt="abstract smoke swirls" src={abstractimg}></img>
          </div>
      </div>*/}