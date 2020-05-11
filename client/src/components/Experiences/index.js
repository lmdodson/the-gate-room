import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import storyData from "../../Utils/storyData";
import { useAuth0 } from "../../react-auth0-spa";

const Exp = () => {
  // define login variables
  const {user} = useAuth0();

    // JSX for HTML elements
  return (
    <div className="container-fluid">
              <h2 className="my-5 text-center">Welcome {user.nickname}</h2>
        <Row className="d-flex justify-content-between">
          {storyData.map((col, i) => (
            <Col key={i} md={5} className="mb-4">
              <h6 className="mb-3">
                <Link to={col.link}>
                  <FontAwesomeIcon icon="link" className="mr-2" />
                  {col.title}
                </Link>
              </h6>
              <p>{col.description}</p>
            </Col>
          ))}
        </Row>
      </div>
  )
}

export default Exp;
