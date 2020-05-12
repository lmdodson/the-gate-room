import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom"

import { Carousel } from 'react-responsive-carousel';

import "./style.css"
 
const Episodes = () => {
  // define login variables
        return (
          <div>
            <Carousel className="carousel-container d-lg-flex">
                <div>
                    <img src="https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727_1280.jpg" alt="swirling stars"/>
                    <Link to="/arrival" className="legend">Arrival</Link>
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

export default Episodes;