import React, { Component } from 'react';
import './App.css';
import Websites from './components/Websites';
import Footer from './components/Footer';
import AboutBanner from './components/AboutBanner';
import WebsiteMenu from './components/WebsiteMenu';
import StarWars from './components/StarWars';

class App extends Component {

  constructor() {
    super();
    this.state={
      website: 'facebrain',

    }
  }

  onPageChange = (page)=>{
    this.setState({website: page});
  }

  render() {
    return (
      <div className="App">
        <AboutBanner />
        <WebsiteMenu onPageChange={this.onPageChange}/>
        <Websites currentsite={this.state.website}/>
        <Footer />
      </div>
    );
  }
}

export default App;
