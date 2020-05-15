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
  <Container className="timeout-container">
  {/* Pull in Timeout component */}
      <div className="col-3 cor-nav one justify-content-center">
        <Button>
        <Link to='/flightdeck'>Flight Deck</Link>
        </Button>
      </div>
  <Timeout />
        {/* Nav Button */}
  </Container>

</div>
)
};

export default Intro;
