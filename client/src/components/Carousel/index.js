import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "./style.css"
 
class Exps extends Component {
    render() {
        return (
            <Carousel>
                <div className="carousel-container">
                    <img src="https://cdn.pixabay.com/photo/2020/04/27/11/03/ranunkeln-5099319_1280.jpg" alt="flower"/>
                    <a href="/ats" className="legend">Legend 1</a>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2020/03/26/09/01/fog-4969649_1280.jpg" alt="fog" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2017/02/26/02/37/girl-2099359_1280.jpg" alt="girl" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default Exps;