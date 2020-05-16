import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const FDcard = (props) => {
  return (
    <div>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardText>You open your eyes, but the darkness presses down around you. She warned you about getting lost in your mind. You better find your Center. Find some light.</CardText>
      </Card>
    </div>
  )
}

export default FDcard;