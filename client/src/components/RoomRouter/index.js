import React, { Component } from "react";
// import RoomTabs from "../RoomTabs";
import Landing from "../../Pages/Landing";
import FlightDeck from "../../Pages/FlightDeck";
import Room2 from "../../Pages/Room2";
import Room3 from "../../Pages/Room3";


class Rooms extends Component {
  state = {
    currentPage: "Landing"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    if (this.state.currentPage === "Landing") {
      return <Landing 
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
      />
    } else if (this.state.currentPage === "FlightDeck") {
      return <FlightDeck 
        currentPage={this.state.currentPage}
        handlePageChange={this.handlePageChange}
      />
    } else if (this.state.currentPage === "Room2") {
      return <Room2 
        currentPage={this.state.currentPage}
        handlePageChange={this.handlePageChange}
      />
    } else if (this.state.currentPage === "Room3") {
      return <Room3 
        currentPage={this.state.currentPage}
        handlePageChange={this.handlePageChange}
      />
    }
  }
}

export default Rooms;