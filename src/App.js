import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div>
          <h1>Russell Soppe Web Developer Portfolio</h1>
          <p>Hello, I am not sure how you found this site but I am glad you have. This site is a work in progress, 
          both as a portfolio site and some of the sites embedded are still a work in progress. 
          If you happened to stumble across this page and aren't impressed yet, check back once a week or so and see what changes have been made. 
          </p>
          <p>Ths portfolio site is being made with React. If you aren't sure what React no worries. 
          React was created by Facebook, check it out here at <a href="https://reactjs.org">https://reactjs.org</a>.  
          </p>
        </div>
        <iframe title="SWAPI Exercise" src="https://russellsoppe.github.io/StarWars/">
          <p>Your browser does not support iframes.</p>
        </iframe>
        <iframe title="Clarifai API Final Exercise" src="https://russellsoppe.github.io/facebrain/">
          <p>Your browser does not support iframes.</p>
        </iframe>
        <iframe title="Background Generator" src="https://russellsoppe.github.io/Background-Generator/">
          <p>Your browser does not support iframes.</p>
        </iframe>
        <iframe title="navbar startup" src="https://russellsoppe.github.io/navbar-startup/">
          <p>Your browser does not support iframes.</p>
        </iframe>
        <iframe title="startup mobile first" src="https://russellsoppe.github.io/startupmf/">
          <p>Your browser does not support iframes.</p>
        </iframe>
         <iframe title="calculator" src="https://russellsoppe.github.io/calculator/">
          <p>Your browser does not support iframes.</p>
        </iframe>
        <p>This site is being created by Russell Soppe 
        </p>
      </div>
    );
  }
}

export default App;
