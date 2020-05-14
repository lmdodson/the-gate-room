import React, { Component } from "react";
import { Button } from "reactstrap"

// import API from "../../Utils/API";
import "./style.css";

class Cabin extends Component {
  // set the intial state for the room
  state = {
    id: 0,
    name: "Cabin",
    room: "Cabin",
    visited: false
  };

render() {
  return (
  <div className="container-fluid">
    {/* set h1 data to state.name */}
    <h1>Cabin Page</h1>
    {/* If state.visit:true, displays the following */}
      {this.state.visited ? ( 
        <p>Visited</p>
      ) : (
        // if state.visit:false, displays the following
    <p>
      Ut id enim id ligula commodo eleifend non ac quam. Nulla aliquam lectus urna, a fermentum enim fringilla ac. 
      Vivamus tellus est, iaculis sed vehicula quis, hendrerit sed diam. Duis ullamcorper magna eget imperdiet facilisis. 
      Phasellus eu sapien egestas urna fringilla varius. Nullam euismod ex egestas convallis dapibus. Phasellus sed libero at felis vehicula semper in eget odio. 
      Donec egestas dictum quam, quis lacinia erat volutpat vitae. In non diam nec leo vehicula imperdiet non eget mi. Quisque sit amet posuere urna. 
      Phasellus placerat enim in ex interdum, a iaculis felis consectetur. Proin ac tellus venenatis, varius mauris sit amet, feugiat ante.    
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
export default Cabin;
