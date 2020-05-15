import React, { Component } from "react";
import API from "../../Utils/API";
import { Link } from "react-router-dom";



class ComputerCore extends Component {
  state = {
    currentPage: "ComputerCore",
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
      <Link to='/corridor'>Corridor</Link>
      <Link to='/lifesupport'>Life Support</Link>
      </div>
      )
  }
}

export default ComputerCore;