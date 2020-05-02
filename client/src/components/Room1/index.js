import React from "react";
import { Row, Col } from "reactstrap";

function Room1(props) {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li>Location: Room 1</li>
        <li className="nav-item">
          <a href="/Room2" onClick={() => props.handlePageChange("Room2")} className="nav-link">
            Room 2
          </a>
        </li>
        <li className="nav-item">
          <a href="/Room3" onClick={() => props.handlePageChange("Room3")} className="nav-link">
            Room 3
          </a>
        </li>
      </ul>
      <hr />
      <Row className="d-flex justify-content-between">
            <Col xs="6" sm="4"> 
              <h1>WELCOME TO ROOM 1</h1>
            </Col>
        </Row>
    </div>
  );
}

export default Room1;
