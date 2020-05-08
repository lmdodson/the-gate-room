import React from "react";

import { useAuth0 } from "../react-auth0-spa";

import About from "../components/About"
import Exp from "../components/Experiences";


const Home = () => {
  // grab authenticated status from Auth0 since this page is not private
  const { isAuthenticated } = useAuth0();
    return (
      <div className="container">
        {/* If the user is not authenticated, show about page */}
        {!isAuthenticated && (
        <About />
        )}
        {/* If user is authenticated, show them the available stories */}
        {isAuthenticated && (
      <div className="next-steps my-5">
        <Exp />
      </div>
        )}
      </div>
    );
}

export default Home;
