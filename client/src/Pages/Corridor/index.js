import React from "react";
// import { Row } from "reactstrap"
import "./style.css"

import { Button, Row, Col, Container } from "reactstrap"

const Corridor = (props) => {
  return(
// Intro
  <Row className="justify-content-center">
    <div className="col-3 one justify-content-center">
      <Button color="info" className="open-btn" href= "#Iskrfkd" onClick={() => props.handlePageChange("FlightDeck")}>
        FlightDeck
      </Button>
    </div>
  </Row>


  )
};

export default Corridor;
