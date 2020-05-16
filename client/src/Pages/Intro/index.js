import React from "react";
// import { Row } from "reactstrap"
import "./style.css"
import Timeout from "../../components/Timeout"
import { Link } from 'react-router-dom';

import { Button, Row, Container } from "reactstrap"

const Intro = (props) => {
return(
// Intro
<div className="d-flex flex-column h-100 intro-container">
        <Button className="cor-nav">
        <Link to='/flightdeck'>Flight Deck</Link>
        </Button>
  <Container className="timeout-container">
  {/* Pull in Timeout component */}
  <Timeout />
        {/* Nav Button */}
  </Container>
</div>
)
};

export default Intro;
