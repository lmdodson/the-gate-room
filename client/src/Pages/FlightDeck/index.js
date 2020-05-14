import React, { Component } from "react";
import { Button } from "reactstrap"

import API from "../../Utils/API";
import "./style.css";

class FlightDeck extends Component {
  // set the intial state for the room
  state = {
    id: 0,
    name: "FlightDeck",
    room: "FlightDeck",
    backgroundColor: "Black",
    visited: false
  };

  // when the component loads, run the loadItems function
  componentDidMount() {
    this.loadItems();
  }
  
  // when leaving the page and component unmounts, run the update items function
  componentWillUnmount() {
    this.updateItems();
  }

  // defines selectItems function
  selectItems(res) {
    console.log(res.data)
    // loop through the db data
    for (var i=0; i<res.data.length; i++) {
      // when the loop hits a match for the current room
      if (res.data[i].name === this.state.room) {
        // update the room state with corresponding db results
        this.setState({
          id: res.data[i]._id,
          name: res.data[i].name,
          visited: res.data[i].visited
        })
      }
    }
  }

  // defines updateItems function
  updateItems = () => {
    // if the current room state is visited:true let us know
    this.state.visited ? console.log("good") :
    // if the current room state is visited:false update the db entry to true
    API.updateRoom(this.state.id, {
      visited: true
    })
      }
  
// defines the loadItems function
  loadItems = () => {
    // gets the db items
		API.getRooms()
      .then((res) =>
      // run the select items function and pass the db response
        this.selectItems(res)
      )
      .catch((err) => console.log(err));
      
  };


  // dev tool reset DB function
  resetData = () => {
    // if the state visited:true, update db to false
    this.state.visited ?
    API.updateRoom(this.state.id, {
      visited: false
    }) : console.log("good")
      }

  // define rendered data
render() {
  return (
  <div className="d-flex flex-column h-100">
    {/* set h1 data to state.name */}
    <h1>{this.state.name} Page</h1>
    {/* If state.visit:true, displays the following */}
      {this.state.visited ? ( 
        <p>Visited</p>
      ) : (
        // if state.visit:false, displays the following
    <p>
      Still Open
    </p>
      )
      }
      {/* dev tools reset button */}
      <Button onClick={this.resetData()}>RESET</Button>
  </div>
  )
}
}

// export the component
export default FlightDeck;
