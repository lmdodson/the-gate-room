import React from "react";
// import { Row } from "reactstrap"
import "./style.css"
import Timeout from "../../components/Timeout"

import { Button, Row, Col, Container } from "reactstrap"

const Intro = (props) => {

  return(
// Intro
<div className="d-flex flex-column h-100 intro-container">
<Timeout />
{/* OPEN */}
  <Row className="justify-content-center">
    <div className="col-3 one justify-content-center">
      <Button color="info" className="open-btn" href= "#Iskrfkd" onClick={() => props.handlePageChange("Elevator")}>
        Elevator
      </Button>
      <Button color="info" className="open-btn" href= "#Iskrfkd" onClick={() => props.handlePageChange("Corridor")}>
        Corridor
      </Button>
      <Button color="info" className="open-btn" href= "#Iskrfkd" onClick={() => props.loadRooms()}>
        Happy
      </Button>
    </div>
  </Row>
  </div>
  )
};

export default Intro;
