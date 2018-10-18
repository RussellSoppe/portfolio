import React, { Component } from 'react';
import './App.css';
import WebsiteMenu from './components/WebsiteMenu';
import Websites from './components/Websites';
import WebsitesAlt from './components/WebsitesAlt';
import WebsitesMF from './components/WebsitesMF';
import Footer from './components/Footer';
import TopBanner from './components/TopBanner';
import BackgroundImg from './components/BackgroundImg';
import WebsiteDisplayOptions from './components/WebsiteDisplayOptions';
import AOS from 'aos';
import 'aos/dist/aos.css';



class App extends Component {

  constructor() {
    super();
    this.state={
      websiteoptions: 'mobilefirst',
      website: 'facebrain',
    }
  }

  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }

  onPageChange = (page)=>{
    this.setState({website: page});
  }

  onOptionChange = (page)=>{
    this.setState({websiteoptions: page});
  }

  render() {
    return (
      <div className="App">
        <BackgroundImg/>
        <TopBanner/>
        <WebsiteDisplayOptions onOptionChange={this.onOptionChange}/>
        {this.state.websiteoptions==="oneatatime" 
         ?<div>
            <WebsiteMenu onPageChange={this.onPageChange}/>
            <Websites currentsite={this.state.website}/>
          </div>
        :(this.state.websiteoptions==="scrollingiframe"
          ?<WebsitesAlt/>
          :<WebsitesMF/>
          )
        }
        <Footer />
      </div>
    );
  }
}

export default App;


       