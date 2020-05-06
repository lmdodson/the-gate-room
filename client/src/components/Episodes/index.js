import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import episodeData from '../../Utils/episodeData';
import "./style.css"


class Episodes extends Component {
  
  render() {
    return (
      <div className="container-fluid">
        <h2 className="my-5 text-center">Episode Selection</h2>
        <Row className="d-flex justify-content-between">
          {episodeData.map((col, i) => (
            <Col xs="6" sm="4">
                <a href={col.link}>
                  <h6>{col.title}</h6>
                </a>
              <p>{col.description}</p>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Episodes;