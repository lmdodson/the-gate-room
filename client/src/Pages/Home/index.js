import React from "react";

// import Auth0 element
import { useAuth0 } from "../../react-auth0-spa";

// import components
import About from "../../components/About"
import Exps from "../../components/Carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import stylesheet
import "./style.css"


const Home = () => {
  // grab authenticated status from Auth0 since this page is not private
  const { isAuthenticated } = useAuth0();
    return (
      <div className="home-container text-center">
        {/* If the user is not authenticated, show about page */}
        {!isAuthenticated && (
          <About />
        )}
        {/* If user is authenticated, show them the available stories */}
        {isAuthenticated && (
          <div className="row">
            <div className="stories">
              <Exps />
            </div>
          </div>
        )}
      </div>
    );
}

export default Home;
