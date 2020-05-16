import React, { Component } from "react";
import API from "../../Utils/API";
import { Link } from "react-router-dom";



class Cabin extends Component {
  state = {
    id: 0,
    power: false,
    visited: false,
    treasure: false
  };

  componentDidMount = () => {
    this.loadRoom();
  }
  // get DB data
  loadRoom = () => {
    // gets the db items
    API.getRoom("Cabin")
      .then((res) =>
      // update the state based on db values
      this.setState({
        id: res.data[0]._id,
        visited: true,
      }) 
      // console.log(res.data[0].doorCode, res.data[0]._id)
      )
      .catch((err) => console.log(err));
  };

  // on unmount
componentWillUnmount() {
  this.updateRoom();
}

// update db
updateRoom = () => {
  this.state.visited ? console.log("good") :
  API.updateRoom(this.state.id, {
    visited: true
  })
}


// get DB data
takeItem = () => {
  // save the db item
  API.saveItem({
    name: 'key',
    type: 'treasure'
  })
    .then((res) =>
    // update the state 
      this.setState({
        treasure: true
      })
      // console.log(res)
    )
    .catch((err) => console.log(err));
};

  render() {
    return(
      <div>
        <h1>{this.state.currentPage}</h1> 
         <div>You see an old metal <span onClick={this.takeItem} style={{color: 'red'}}>key</span> on the table in front of you. What could it unlock?</div>
         
      <Link to='/corridor'>Corridor</Link>
      </div>
      )
  }
}

export default Cabin;