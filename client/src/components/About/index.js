import React, { Component } from "react";
import Main from "../../assets/landing/tgr-main.jpg";
import "./style.css";

class About extends Component {
  constructor() {
    super();
    this.state = {
      showingAlert: false
    };
  }
  
  handleClickShowAlert() {
    this.setState({
      showingAlert: true
    });
    
    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 30000);
  }
  
  render() {
    return (
      <div>
        <div data-offset="30" className="poster">
          <div className="shine"></div>
          <div data-offset="-1" className="layer-1"></div>
          <div className="layer-2"></div>
          <div data-offset="10" className="layer-3"></div>
          <div data-offset="20" className="layer-4"></div>
          <div data-offset="50" className="layer-5"></div>
        </div>
      </div>
      
    );
  }
}

export default About;