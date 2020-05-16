import React, { Component } from 'react';
import { Button, Fade } from 'reactstrap';
import { motion } from "framer-motion";
import "./style.css"

class Content extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened');
  }
  render() {
    return (
      <div className="d-flex flex-column h-100 content-container">
        <div>
          You seem to have found your footing. As you settle into your mind you feel you ties to the world drift away. 
          Your time aboard Endurance existed for so much longer as a memory than as he fleeting moments you passed through.
          The memories have been held and kneaded like dough, tossed aside, pulled back in, twisted and shaped into a morphed version
          of the real thing.
          Lights flicker as the a faint beeping indicates the systems are functioning on reserve power, yet none of the controls on the flight deck
          are how you remember. How you thought you remembered. You gaze out of the wide window. At least the stars are still there.
          But so is the damage from the phaser blasts. Fear starts creeping in as you remember why you are here again.

        {/* Nav Button */}
        {/* <button onClick={this.handleClick}>Click Me</button> */}
        </div>
      </div>


    )
  }
}


export default Content;