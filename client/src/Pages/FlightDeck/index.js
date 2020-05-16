import React, { Component } from "react";
import API from "../../Utils/API";
import { Link } from "react-router-dom";
import { Row, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Content from "../../components/FDcontent";
import FDcard from "../../components/FDcard";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';


import "./style.css";


class FlightDeck extends Component {
  state = {
    id: 0,
    currentPage: "FlightDeck",
    power: false,
    visited: false,
    on: false,
    keycode: "",
    keyattempt:"",
    passed: false
  };

  // on mount
componentDidMount = () => {
  this.loadRoom();
}

// on unmount
componentWillUnmount() {
  this.updateRoom();
}

// update db
updateRoom = () => {
  this.state.visited ? console.log("good") :
  API.updateRoom(this.state.id, {
    visited: true
  })
}


// get DB data
loadRoom = () => {
  // gets the db items
  API.getRoom("FlightDeck")
    .then((res) =>
    // update the state based on db values
    this.setState({
      id: res.data[0]._id,
      visited: true,
      keycode: res.data[0].doorCode
    }) 
    // console.log(res.data[0].doorCode, res.data[0]._id)
    )
    .catch((err) => console.log(err));
};

handleClick = (e) => {
  this.setState({ on: !this.state.on })
}

handleInputChange = (event) => {
  // Getting the value and name of the input which triggered the change
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
}

handleFormSubmit = event => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  event.preventDefault();
  if (this.state.keyattempt == "1701"){
  // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
  // alert(`Hello ${this.state.keyattempt}`);
  this.setState({passed: true})
  }
};





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
    <div style={{ color: (this.state.on ? 'purple' : 'black') }}>
      <Row className="justify-content-center">*</Row>
      <Row className="justify-content-center">*******</Row>
      <Row className="justify-content-center">0</Row>
      <Row className="justify-content-center">*</Row>
    </div>
    <Row>
    <Container style={{ color: (this.state.on ? 'purple' : 'black') }}>
      <Content />
      <form className="form">
          <input
            value={this.state.keyattempt}
            name="keyattempt"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <Link to="/corridor" className="nav-button" style={{ visibility: (this.state.passed ? 'visible' : 'hidden') }}>CORRIDOR</Link>
      </Container>
    </Row>
  </div>
      </div>
      )
  }
}

export default FlightDeck;