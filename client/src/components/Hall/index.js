import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './style.css';

const Hall = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-3">Corridor</h1>
          <p className="lead">You step out into a long corridor and see three doors. The air is lighter here, and you pause for a moment to catch your breath. The darkness hangs heavy around you, with a dim, flickering light illuminating the path. You see each door is labeled with the same plaques you had seen hundreds of times before.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Hall;