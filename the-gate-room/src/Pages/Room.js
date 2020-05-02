import React from "react";
import { useAuth0 } from "../react-auth0-spa";

import Rooms from "../components/Rooms";

const RoomPage = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="container">
    {!isAuthenticated && (
      <p>Story content is exclusively for our registered members. Please log in or sign up to get started!</p>
    )}
      {isAuthenticated && (
  <Rooms />
      )}
  </div>
  )
};

export default RoomPage;