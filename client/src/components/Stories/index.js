import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom"

import { Carousel } from 'react-responsive-carousel';

import "./style.css"
 
const Exps = () => {
  // define login variables
  const {user} = useAuth0();

  return (
    <div className="d-lg-flex story-container">
      <div className="instructions">
        <h2 className="my-5 text-center">Hello {user.nickname}</h2>
          <h4 className="my-5 text-center">Check out the current stories. Click on a link to get started!</h4>
      </div>
      <Carousel className="carousel-container d-lg-flex">
        <div>
          <img src="https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727_1280.jpg" alt="swirling stars"/>
          <Link to="/ats" className="legend">Among the Stars</Link>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_1280.jpg" alt="chalkboard coming soon" />
          <p className="legend">New Stories Coming Soon!</p>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_1280.jpg" alt="chalkboard coming soon" />
          <p className="legend">New Stories Coming Soon!</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Exps;