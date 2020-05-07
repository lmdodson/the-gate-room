import React from "react";

import { useAuth0 } from "../react-auth0-spa";

import About from "../components/About"
import Exp from "../components/Experiences";


const Home = () => {
  const { isAuthenticated } = useAuth0();
    return (
      <div className="container">
        {!isAuthenticated && (
        <About />
        )}
        {isAuthenticated && (
      <div className="next-steps my-5">
        <Exp />
      </div>
        )}
      </div>
    );
}

export default Home;
