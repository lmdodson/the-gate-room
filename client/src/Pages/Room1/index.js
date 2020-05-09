import React, { Component } from "react";

import API from "../../Utils/API";
import "./style.css";

class Room1 extends Component {
  state = {
    id: 0,
    name: "",
    room: "Hallway",
    visited: false
  };

  componentDidMount() {
    this.loadItems();
  }
  
  componentWillUnmount() {
    this.updateItems();
  }

  
  selectItems(res) {
    console.log(res.data)
    for (var i=0; i<res.data.length; i++) {
      if (res.data[i].name === this.state.room) {
        this.setState({
          id: res.data[i]._id,
          name: res.data[i].name,
          visited: res.data[i].visited
        })
      }
    }
  }

  updateItems = () => {
    this.state.visited ? console.log("good") :
    API.updateItem(this.state.id, {
      visited: true
    })
      }
  

  loadItems = () => {
		API.getItems()
      .then((res) =>
        this.selectItems(res)
      )
      .catch((err) => console.log(err));
      
  };

  resetData = () => {
    this.state.visited ?
    API.updateItem(this.state.id, {
      visited: false
    }) : console.log("good")
      }

  
render() {
  return (
  <div className="container-fluid">
    <h1>{this.state.name} Page</h1>
      {this.state.visited ? ( 
        <p>Visited</p>
      ) : (
    <p>
      Ut id enim id ligula commodo eleifend non ac quam. Nulla aliquam lectus urna, a fermentum enim fringilla ac. 
      Vivamus tellus est, iaculis sed vehicula quis, hendrerit sed diam. Duis ullamcorper magna eget imperdiet facilisis. 
      Phasellus eu sapien egestas urna fringilla varius. Nullam euismod ex egestas convallis dapibus. Phasellus sed libero at felis vehicula semper in eget odio. 
      Donec egestas dictum quam, quis lacinia erat volutpat vitae. In non diam nec leo vehicula imperdiet non eget mi. Quisque sit amet posuere urna. 
      Phasellus placerat enim in ex interdum, a iaculis felis consectetur. Proin ac tellus venenatis, varius mauris sit amet, feugiat ante.    
    </p>
      )
      }
      <button onClick={this.resetData()}>RESET</button>
  </div>
  )
}
}

export default Room1;
