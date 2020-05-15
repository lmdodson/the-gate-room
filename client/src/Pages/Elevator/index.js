import React from "react";
// import { Row } from "reactstrap"
import "./style.css"

import { Button, Row, Col, Container } from "reactstrap"
import Timeout from "../../components/Timeout"

const Elevator = (props) => {
  return(
// Intro
  <Row className="justify-content-center">
    <div className="col-3 one justify-content-center">
      <Button color="info" className="open-btn" href= "#Iskrfkd" onClick={() => props.handlePageChange("Corridor")}>
        Corridor
      </Button>
      <Button color="info" className="open-btn" href= "#Iskrfkd" onClick={() => props.loadRooms()}>
        Happy
      </Button>
      <Timeout />
    </div>
  </Row>



  )
};

export default Elevator;
