import React from "react";
import { useAuth0 } from "../react-auth0-spa";

import Episodes from "../components/Episodes";

const StoryHome = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="container">
    {!isAuthenticated && (
      <p>Story content is exclusively for our registered members. Please log in or sign up to get started!</p>
    )}
      {isAuthenticated && (
  <Episodes />
      )}
  </div>
  )
};

export default StoryHome;