import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

import {Row, Col, Button} from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import './style.css';
 
const Episodes = () => {
  // JSX for display
  return (
    <div className='d-lg-flex episode-container'>
      {/* Episode Instructions */}
      <Row>
        <Col sm='6' className='descriptions'>
          <h2 className='my-5 text-center'>Among The Stars</h2>
          <h4 className='m-5 text-center'>
            Check out the current stories. Click on a link to get started!
          </h4>
        </Col>
        {/* Carousel with episodes */}
        <Col>
          <Carousel className='carousel-container'>
            <div>
              <img src='https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727_1280.jpg' alt='swirling stars'/>
                <Link to='/intro' color='info' className='legend'>Arrival</Link>
            </div>
            <div>
              <img src='https://cdn.pixabay.com/photo/2019/02/21/05/02/lock-4010669_1280.jpg' alt='lock with key' />
                <p className='legend'>
                  Complete Episode 1: Arrival to unlock this Episode
                </p>
            </div>
            <div>
              <img src='https://cdn.pixabay.com/photo/2019/02/21/05/02/lock-4010669_1280.jpg' alt='lock with key' />
                <p className='legend'>
                  Complete Episode 1: Arrival to unlock this Episode
                </p>
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default Episodes;