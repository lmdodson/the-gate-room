import React, { Component } from "react";
import API from "../../Utils/API";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";



class Cabin extends Component {
  state = {
    id: 0,
    power: false,
    visited: false,
    treasure: false,
    treasureID: 0,
    backpackItems: []
  };

  componentDidMount = () => {
    this.loadRoom();
  }
  // get DB data
  loadRoom = () => {
    // gets the db room data
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

// find the db item
findItem = () => {
  API.getItem('key')
  .then((res) => 
  this.setState({
    treasureID: res.data._id
  })
  )
  .catch((err) => console.log(err))
}

findItems = () => {
  API.getItems()
  .then((res) =>
   (res.data ?
    this.setState({
      backpackItems: res.data[0]
    }) : console.log("Nothing to report")

     )
  ).catch((err) => console.log(err));
}
// get DB data
useItem = () => {
  // save the db item
  API.deleteItem(this.state.treasureID)
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
         <div>You see an old metal <span onClick={this.takeItem} style={{color: 'red'}}>key</span> on the table in front of you. What could it unlock? Your mind is about as much a mystery to you as any stranger's. Maybe you should just take the key.</div>
         <div>A wodden box is shoved into a dusty corner. </div>
         <div>You're sure you put a <span onClick={this.findItem} style={{color: 'red'}}>key</span> somewhere. </div>
         <Button onClick={this.findItems}></Button>
          <div>{this.state.backpackItems}</div>
          <div>The key seems to fit. You <span onClick={this.useItem} style={{color: 'red'}}>unlock</span> the box.</div>
      <Link to='/corridor'>Corridor</Link>
      </div>
    ) 
  }
}

export default Cabin;