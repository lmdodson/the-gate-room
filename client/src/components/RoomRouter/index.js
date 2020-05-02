import React, { Component } from "react";

import Room1 from "../Room1";

class RoomContainer extends Component {
  state = {
    currentPage: "Room1"
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
