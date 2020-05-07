import React from "react";

import About from "../components/About"
import Exp from "../components/Experiences";

const Home = () => {
    return (
      <div className="container">
        <About />
      <div className="next-steps my-5">
        <Exp />
      </div>
      </div>
    );
}

export default Home;
