import React from "react";
import { Row, Col } from "reactstrap";


function Room3(props) {
  return (
    <div className="container-fluid">
      <ul className="nav nav-tabs">
        <li>Location: Room 3</li>
        <li className="nav-item">
          <a href="/Room1" onClick={() => props.handlePageChange("Room1")} className="nav-link">
            Room 1
          </a>
        </li>
        <li className="nav-item">
          <a href="/Room2" onClick={() => props.handlePageChange("Room2")} className="nav-link">
            Room 2
          </a>
        </li>
      </ul>
      <hr />
      <Row className="d-flex justify-content-between">
            <Col xs="6" sm="4"> 
              <h1>WELCOME TO ROOM 3</h1>
            </Col>
        </Row>
    </div>
  );
}

export default Room3;
