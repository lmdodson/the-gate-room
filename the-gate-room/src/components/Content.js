import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "../react-auth0-spa";


import contentData from "../Utils/contentData";

const Content = () => {
  const { user, isAuthenticated } = useAuth0();
    return (
      <div className="container">
      {!isAuthenticated && (
        <p>Please log in</p>
      )}
      {isAuthenticated &&
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Welcome {user.name}</h2>
        <Row className="d-flex justify-content-between">
          {contentData.map((col, i) => (
            <Col key={i} md={5} className="mb-4">
              <h6 className="mb-3">
                <a href={col.link}>
                  <FontAwesomeIcon icon="link" className="mr-2" />
                  {col.title}
                </a>
              </h6>
              <p>{col.description}</p>
            </Col>
          ))}
        </Row>
      </div>
}
      </div>
    );
}

export default Content;
