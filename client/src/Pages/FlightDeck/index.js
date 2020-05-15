import React from "react";
// import { Row } from "reactstrap"
import "./style.css"

import { Button, Row } from "reactstrap"

const Intro = (props) => {
return(
// Intro
<div className="d-flex flex-column h-100 intro-container">
    <Row className="justify-content-center">
      <div className="col-3 one justify-content-center">
        {/* Nav Button */}
        <Button color="danger" className="nav-btn" href= "#FlightDeck" onClick={() => props.handlePageChange("Corridor")}>
          Corridor
        </Button>
      </div>
    </Row>
</div>
)
};

export default Intro;
