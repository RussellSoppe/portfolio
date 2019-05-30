import React, { Component } from 'react';
import './App.css';
// import WebsiteMenu from './components/WebsiteMenu';
// import Websites from './components/Websites';
import WebsitesComp from './components/WebsitesComp';
import WebsitesMF from './components/WebsitesMF';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
      duration : 3000
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
        <Header />
        <Contact />
        <WebsitesMF />
        <WebsitesComp />
        <Footer />
      </div>
    );
  }
}

export default App;

//<WebsiteDisplayOptions onOptionChange={this.onOptionChange}/>
        {/*this.state.websiteoptions==="mobilefirst" 
         ?<WebsitesMF className="mobilefirst"
         
         />
         :<WebsitesComp className=""/>
        */}
       