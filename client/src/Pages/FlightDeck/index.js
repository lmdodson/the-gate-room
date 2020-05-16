import React, { Component } from "react";
import API from "../../Utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "reactstrap";
import Content from "../../components/FDcontent";
import FDcard from "../../components/FDcard";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';


import "./style.css";


class FlightDeck extends Component {
  state = {
    currentPage: "FlightDeck",
    power: false,
    visited: false,
    on: false
  };

componentDidMount = () => {
  this.loadRoom();
}

// get DB data
loadRoom = () => {
  // gets the db items
  API.getRoom(this.state.currentPage)
    .then((res) =>
    // update the state based on db values
      console.log(res)
    )
    .catch((err) => console.log(err));
};

handleClick = (e) => {
  this.setState({ on: !this.state.on })
}


  render() {
    return(
      <div style={{ background: (this.state.on ? 'url(https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_1280.jpg)'
        : 'black') }} className='d-lg-flex fd-container h-100 justify-content-center'>
  <div>
    <Row className="justify-content-center">
      <FDcard />
    </Row>
    <Row className="justify-content-center">
      <WbIncandescentIcon className="hvr-radial-out" onClick={this.handleClick}></WbIncandescentIcon>
    </Row>
    <Row className="justify-content-center">*</Row>
    <Row className="justify-content-center">*******</Row>
    <Row className="justify-content-center">0</Row>
    <Row className="justify-content-center">*</Row>
    <Row>
    <Container style={{ color: (this.state.on ? 'white' : 'black') }}>
      <Content />
    </Container>
    </Row>

  </div>
      </div>
      )
  }
}

export default FlightDeck;