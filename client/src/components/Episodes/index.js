import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom"

import { Carousel } from 'react-responsive-carousel';

import "./style.css"
 
const Episodes = () => {
  // define login variables
    return (
        <div className="d-lg-flex episode-container">
            <div className="descriptions">
              <h2 className="my-5 text-center">Among The Stars</h2>
                <h4 className="my-5 text-center">Among The Stars journeys into the mind of a human trying to recover key information from hidden memories. Can you navigate through the mysteries to unravel the truth? Begin with Episode 1: Arrival.</h4>
            </div>
            <Carousel className="carousel-container">
                <div>
                    <img src="https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727_1280.jpg" alt="swirling stars"/>
                    <Link to="/arrival" className="legend">Arrival</Link>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2019/02/21/05/02/lock-4010669_1280.jpg" alt="lock with key" />
                    <p className="legend">Complete Episode 1: Arrival to unlock this Episode</p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2019/02/21/05/02/lock-4010669_1280.jpg" alt="lock with key" />
                    <p className="legend">Complete Episode 1: Arrival to unlock this Episode
                    </p>
                </div>
            </Carousel>
        </div>
    )
}

export default Episodes;