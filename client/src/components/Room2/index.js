import React from "react";
import { Row, Col } from "reactstrap";


function Room2(props) {
  return (
    <div className="container-fluid">
      <ul className="nav nav-tabs">
        <li>Location: Room 2</li>
        <li className="nav-item">
          <a href="/Room1" onClick={() => props.handlePageChange("Room1")} className="nav-link">
            Room 1
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
              <h1>WELCOME TO ROOM 2</h1>
            </Col>
        </Row>
    </div>
  );
}

export default Room2;
