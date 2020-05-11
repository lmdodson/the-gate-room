import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useAuth0 } from "../../react-auth0-spa";

import { Carousel } from 'react-responsive-carousel';

import "./style.css"
 
const Exps = () => {
  // define login variables
  const {user} = useAuth0();

        return (
          <container>
            <div className="instructions">
              <h2 className="my-5 text-center">Welcome {user.nickname}</h2>
                <h4 className="my-5 text-center">Select your experience from the options below:</h4>
                </div>
            <Carousel>
                <div className="carousel-container">
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
          </container>
        )
    }

export default Exps;