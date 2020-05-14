import React, { Component } from "react";
// import RoomTabs from "../RoomTabs";
import Intro from "../../Pages/Intro";
import FlightDeck from "../../Pages/FlightDeck";
import Comp from "../../Pages/ComputerCore";
import LifeSupport from "../../Pages/LifeSupport";


class Rooms extends Component {
  state = {
    currentPage: "Intro"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    if (this.state.currentPage === "Intro") {
      return <Intro
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
      />
    } else if (this.state.currentPage === "FlightDeck") {
      return <FlightDeck 
        currentPage={this.state.currentPage}
        handlePageChange={this.handlePageChange}
      />
    } else if (this.state.currentPage === "ComputerCore") {
      return <Comp
        currentPage={this.state.currentPage}
        handlePageChange={this.handlePageChange}
      />
    } else if (this.state.currentPage === "Corridor") {
      return <Corridor
        currentPage={this.state.currentPage}
        handlePageChange={this.handlePageChange}
      />
    } else if (this.state.currentPage === "LifeSupport") {
      return <LifeSuport
        currentPage={this.state.currentPage}
        handlePageChange={this.handlePageChange}
      />
    } else if (this.state.currentPage === "Cabin") {
      return <Cabin
        currentPage={this.state.currentPage}
        handlePageChange={this.handlePageChange}
      />
    } else if (this.state.currentPage === "Elevator") {
      return <Elevator
        currentPage={this.state.currentPage}
        handlePageChange={this.handlePageChange}
      />
    }
  }
}

export default Rooms;