import React, { Component } from "react";

import API from "../../Utils/API";
import "./style.css"

class Room1 extends Component {
  state = {
    room: "",
    visited: false
  };

  componentDidMount() {
		this.loadItems();
	}

  loadItems = () => {
		API.getItems()
			.then((res) =>
				this.setState({
					room: res.data[0].name,
					visited: true,
				})
			)
			.catch((err) => console.log(err));
	};
render() {
  return (
  <div className="container-fluid">
    <h1>{this.state.room} Page</h1>
    {this.state.visted ? ( 
      <p>Visited</p>) :
      (
    <p>
      Ut id enim id ligula commodo eleifend non ac quam. Nulla aliquam lectus urna, a fermentum enim fringilla ac. 
      Vivamus tellus est, iaculis sed vehicula quis, hendrerit sed diam. Duis ullamcorper magna eget imperdiet facilisis. 
      Phasellus eu sapien egestas urna fringilla varius. Nullam euismod ex egestas convallis dapibus. Phasellus sed libero at felis vehicula semper in eget odio. 
      Donec egestas dictum quam, quis lacinia erat volutpat vitae. In non diam nec leo vehicula imperdiet non eget mi. Quisque sit amet posuere urna. 
      Phasellus placerat enim in ex interdum, a iaculis felis consectetur. Proin ac tellus venenatis, varius mauris sit amet, feugiat ante.    
    </p>
      )}
              <a
          href="#landing"
          onClick={() => this.props.handlePageChange("Landing")}
          className={this.props.currentPage === "Landing" ? "nav-link active" : "nav-link"}
        >
          Landing
        </a>

  </div>
  )
}
}

export default Room1;
