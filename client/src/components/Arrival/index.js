import React, { Component } from "react";
import RoomTabs from "../RoomTabs";
import Landing from "../../Pages/Landing";
import Room1 from "../../Pages/Room1";
import Room2 from "../../Pages/Room2";
import Room3 from "../../Pages/Room3";

class Rooms extends Component {
  state = {
    currentPage: "Landing"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Landing") {
      return <Landing />;
    } else if (this.state.currentPage === "Room1") {
      return <Room1 />;
    } else if (this.state.currentPage === "Room2") {
      return <Room2 />;
    } else {
      return <Room3 />;
    }
  };

  render() {
    return (
      <div className="story d-flex flex-column h-100">
        <RoomTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Rooms;
