import React, { Component } from "react";
import API from "../../Utils/API";
import { Link } from "react-router-dom";



class FlightDeck extends Component {
  state = {
    id: 0,
    currentPage: "FlightDeck",
    light: false,
    power: false,
    visited: false
  };

  componentDidMount = () => {
    this.loadRoom();
  }

roomStats = (data) => {
    this.setState({ power: data.power });
    this.setState({visited: data.visited})
};

// get DB data
loadRoom = () => {
  // gets the db items
  API.getRoom(this.state.currentPage)
    .then((res) =>
    this.roomStats(res)
    // run the select items function and pass the db response
      // console.log(res.data)
    )
    .catch((err) => console.log(err));
};


  render() {
    return(
    this.state.light ? 
      <div>
        <h1>{this.state.currentPage}</h1> 
      <Link to='/corridor'>Corridor</Link>
      </div>
      :
      <div> THIS ROOM IS DARK</div>
      )
  

  }

}

export default FlightDeck;