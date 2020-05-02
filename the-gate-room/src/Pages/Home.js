import React from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "../react-auth0-spa";


import storyData from "../Utils/storyData";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
    return (
      <div className="container">
      {!isAuthenticated && (
          <div className="text-center hero my-5">
          <h1 className="mb-4">The Gate Room</h1>
          <p>The Gate Room is a collection of interactive literary experiences. Discover worlds, embrace adventure, and unravel mysteries of the universe. Please login or sign up to embark on one of the exclusive adventures located just beyond the gate.</p>
        </div>
      
      )}
      {isAuthenticated && (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Welcome {user.nickname}</h2>
        <Row className="d-flex justify-content-between">
          {storyData.map((col, i) => (
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
      )}
      </div>
    );
}

export default Home;
