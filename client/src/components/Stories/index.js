import React, { useState } from 'react';
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom"
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css"
 
const Exps = (props) => {
  // define props
  const {
    buttonLabel="Among the Stars",
    className="legend"
  } = props;

  // define login variables
  const {user} = useAuth0();

  // define modal variables
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // JSX for display
  return (
    <div className="d-lg-flex story-container">
      {/* Story selection instructions */}
      <Row>
        <Col sm='6' className="instructions">
          <h2 className="my-5 text-center">
            Hello {user.nickname}
          </h2>
          <h4 className="my-5 text-center">
            Check out the current stories. Click on a link to get started!
          </h4>
        </Col>
        {/* Carousel with stories and modal */}
        <Col sm='6'>
          <Carousel className="carousel-container">
            <div>
              <img src="https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727_1280.jpg" alt="swirling stars"/>
              <Button color='danger' className={className} onClick={toggle}>{buttonLabel}</Button>
            </div>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Among The Stars</ModalHeader>
                <ModalBody>
                  Among The Stars journeys into the mind of a human trying to recover key information from hidden memories. Start your adventure here or return to view another story.
                </ModalBody>
                <ModalFooter>
                  <Link to="/ats" className="ats">Among the Stars</Link>
                </ModalFooter>
              </Modal>
            <div>
              <img src="https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_1280.jpg" alt="chalkboard coming soon" />
                <p className="legend">New Stories Coming Soon!</p>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_1280.jpg" alt="chalkboard coming soon" />
                <p className="legend">New Stories Coming Soon!</p>
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default Exps;