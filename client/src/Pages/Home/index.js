import React from "react";

// import Auth0 element
import { useAuth0 } from "../../react-auth0-spa";

// import components
import About from "../../components/About"
import Exps from "../../components/Carousel"
import Exp from "../../components/Experiences"
import Navbar from "../../components/NavBar"
import Jumbo from "../../components/Jumbotron"

// import stylesheet
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css"


const Home = () => {
  // grab authenticated status from Auth0 since this page is not private
  const { isAuthenticated } = useAuth0();
    return (
      <div id="home" className="d-flex flex-column h-100">
        <Navbar />
        {/* <Jumbo /> */}
        {/* If the user is not authenticated, show about page */}
        {!isAuthenticated && (
          <About />
        )}
        {/* If user is authenticated, show them the available stories */}
        {isAuthenticated && (
          <div className="d-flex flex-column h-100">
            <Exps />
          </div>
        )}
      </div>
    );
}

export default Home;
