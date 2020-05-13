import React from "react";
import { Row } from "reactstrap"

// const Landing = () => (
//   <div className="container-fluid">
//     <h1>Landing Page</h1>
//     <p>
//     “Relax and listen to the sound of my voice”
// You shift in the chair, as if the resistance from your mind has trickled down and spread throughout your body. Your eyes twitch, fighting to stay closed. Your ears feel as if they are reaching out, grabbing onto even the softest of sounds from the room: the ticking of the clock on the wall, the scrape of your clothing against the chair as you breathe. She begins to count down.
// “5” You breathe in deeply, trying to feel the air as it fills your lungs and lifts your chest.
// “4” You become aware of your clenched fists as your nail digs deeper into your skin.
// “3” “This will never work” You try to shove the thought from your mind, but it lingers like perfume in the air.
// “2”  Fatigue descends on you like a weight. You feel as if you are caught in the limbo between sleep and wakefulness. The sound of her voice has sweetened and is drawing you into the dark.
// “1” The darkness deepens, and you feel it swallowing you up.
// “Open”

//     </p>
//   </div>
// );

// export default Landing;

const Landing = () => (

<div class="container landing-container">
  <div Rclass="row justify-content-start">
    <div class="col-4">
    <p className="guide">
      “Relax and listen to the sound of my voice”
    </p>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">
      <p>
      You shift in the chair, as if the resistance from your mind has trickled down and spread throughout your body. Your eyes twitch, fighting to stay closed. Your ears feel as if they are reaching out, grabbing onto even the softest of sounds from the room: the ticking of the clock on the wall, the scrape of your clothing against the chair as you breathe. She begins to count down.
      </p>
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
</div>
);

export default Landing;
