import React from "react";
// import { Row } from "reactstrap"
import "./style.css"

import { Button } from "reactstrap"

const Landing = (props) => {
  return(
// Intro
<div className="landing-container h-100">
  <div className="landing-text">
  <div className="row justify-content-center">
    <div className="col-12">
    <p className="guide">
    “Relax and listen to the sound of my voice”
    </p>
    </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-12">
      <p>
      You shift in the chair, as if the resistance from your mind has trickled down and spread throughout your body. Your eyes twitch, fighting to stay closed. Your ears feel as if they are reaching out, grabbing onto even the softest of sounds from the room: the ticking of the clock on the wall, the scrape of your clothing against the chair as you breathe. She begins to count down.
      </p>
    </div>
  </div>

  {/* 5 */}
  <div className="row justify-content-center">
    <div className="col-1">
      <p className="guide">
        "5"
      </p>
    </div>
    <div className="col-11">
      <p>
      You breathe in deeply, trying to feel the air as it fills your lungs and lifts your chest.
      </p>
    </div>
  </div>

  {/* 4 */}
  <div className="row justify-content-center">
    <div className="col-1 four">
      <p className="guide">
        "4"
      </p>
    </div>
    <div className="col-11">
      <p className="four-text">
      You become aware of your clenched fists as your nail digs deeper into your skin.
      </p>
    </div>
  </div>

  {/* 3 */}
  <div className="row justify-content-start">
    <div className="col-2 three">
      <p className="guide">
        "3"
      </p>
    </div>
    <div className="col-2 three-text">
      <p className="thought">
        “What were we thinking? This will never work...”
      </p> 
    </div>
    <div className="col-8 three-text">
      <p>
      You try to shove the thought from your mind, but it lingers like perfume in the air.
      </p>
    </div>
  </div>

  {/* 2 */}
  <div className="row justify-content-start">
    <div className="col-3 two">
      <p className="guide">
        "2"
      </p>
    </div>
    <div className="col-6 two-text">
      <p>
      Grogginess descends on you like a weight. You feel caught in the limbo between sleep and wakefulness. Her voice has sweetened and is drawing you into the dark. </p>
      {/* <p></p> */}
    </div>
  </div>

  {/* 1 */}
    <div className="row justify-content-center">
    <div className="col-3 one">
      <p className="guide">
        "1"
      </p>
    </div>
    <div className="col-8 one-text">
      <p>
      The darkness deepens. You let everything go and sink down into it.
      </p>
    </div>
  </div>
  </div>

{/* Drip */}
  <div className="row justify-content-center">...</div>
  <div className="row justify-content-center">-</div>
  <div className="row justify-content-center">.-</div>
  <div className="row justify-content-center">.-.</div>
  <div className="row justify-content-center">...</div>

{/* OPEN */}
  <div className="row justify-content-center">
    <div className="col-3 one">
      <Button color="info" className="guide final" href= "#Iskrfkd" onClick={() => props.handlePageChange("Room1")}>
        "OPEN"
      </Button>
    </div>
  </div>



</div>
  )
};

export default Landing;
