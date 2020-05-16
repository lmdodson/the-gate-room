import React, { Component } from 'react'
import ReactInterval from 'react-interval';
 
class Interval extends Component {
  getInitialState() {
    return {count: 0};
  }
 
  render() {
    const {count} = this.state;
 
    return (
      <div>
        {count}
        <ReactInterval timeout={1000} enabled={true}
          callback={() => this.setState({count: this.state.count + 1})} />
      </div>
    );
  }
};

export default Interval