import React from 'react';

const StarWars = ()=>{
	return(

		<div className="outercard">
      <div className="innercard">
        <p>This website was created with React using the Star Wars API.</p>
        <p>Future plans include adding planets and vehicle pages as well as links between within profiles.</p>
          <iframe title="SWAPI Exercise" src="https://russellsoppe.github.io/StarWars/">
            <p>Your browser does not support iframes.</p>
          </iframe>
        <a href="https://russellsoppe.github.io/StarWars/">https://russellsoppe.github.io/StarWars/</a>
      </div>
    </div>

	);
}

export default StarWars;