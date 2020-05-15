import React, { Component } from "react";
import RoomTabs from "../RoomTabs";
import Intro from "../../Pages/Intro";
import FlightDeck from "../../Pages/FlightDeck";
import Comp from "../../Pages/ComputerCore";
import LifeSupport from "../../Pages/LifeSupport";
import Corridor from "../../Pages/Corridor";
import Cabin from "../../Pages/Cabin";
import Elevator from "../../Pages/Elevator";
import API from "../../Utils/API";



class Rooms extends Component {
  state = {
    currentPage: "Intro",
  };

  sayHappy = () => {
    console.log("happy");
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  selectRooms(res) {
    // loop through the db data
    for (var i=0; i<res.data.length; i++) {
      // when the loop hits a match for the current room
      if (res.data[i].name === this.state.currentPage) {
        (console.log(this.state.currentPage))
      }
    }
  }

  loadRooms = () => {
    // gets the db items
		API.getRooms()
      .then((res) =>
      // run the select items function and pass the db response
        this.selectRooms(res)
      )
      .catch((err) => console.log(err));
      
  };


  render() {
    if (this.state.currentPage === "Intro") {
      return <Intro
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
          sayHappy={this.sayHappy}
          loadRooms={this.loadRooms}
          selectRooms={this.selectRooms}
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
      return <LifeSupport
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
        loadRooms={this.loadRooms}
        selectRooms={this.selectRooms}
      />
    }
    return(
      <RoomTabs />
    )
  }
}

export default Rooms;