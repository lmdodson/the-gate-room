import React, { Component } from "react";

import "./style.css"
import Room1 from "../Room1";
import Room2 from "../Room2";
import Room3 from "../Room3";

class RoomContainer extends Component {
  state = {
    currentPage: window.location.href
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div>
        <Room1
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        Based on `this.state.currentPage`, render the appropriate component
        here.
      </div>
    );
  }
}

export default RoomContainer;
