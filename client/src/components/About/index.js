import React from "react";
import { Link } from "react-router-dom";
import Main from "../../assets/landing/tgr-main.jpg"
import "./style.css"
// import "./parallax.js"

const About = () => {
  return (

  <div className="container-fluid">
          <div data-offset="30" className="poster">
          <div className="shine"></div>
          <div data-offset="-1" className="layer-1"></div>
          <div className="layer-2"></div>
          <div data-offset="10" className="layer-3"></div>
          <div data-offset="20" className="layer-4"></div>
          <div data-offset="50" className="layer-5"></div>
      </div>

    {/* <Link to="/">
        <img
            src={ Main }
            width="500"
            height="500"
            className="d-inline-block align-top"
            alt="blue portal" 
        />
      </Link> */}
  </div>
  )
  };

export default About;

