import React, { Component } from "react";
import API from "../../Utils/API";
import { Link } from "react-router-dom";



class Corridor extends Component {
  state = {
    currentPage: "Corridor",
    power: false,
    visited: false
  };


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

  render() {
    return(
      <div>
        <h1>{this.state.currentPage}</h1> 
      <Link to='/flightdeck'>Flight Deck</Link>
      <Link to='/cabin'>Cabin</Link>
      <Link to='/lifesupport'>Life Support</Link>
      <Link to='/computercore'>Computer Core</Link>
      <Link to='/elevator'>Elevator</Link>
      </div>
      )
  }
}

export default Corridor;