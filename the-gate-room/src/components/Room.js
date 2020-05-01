import React from "react";
import { useAuth0 } from "../react-auth0-spa";

import roomData from "../Utils/roomData";


const Room = () => {
  const { isAuthenticated } = useAuth0();
    return (
      <div className="container">
      {!isAuthenticated && (
        <p>Please log in</p>
      )}
      {isAuthenticated && (
      <div className="container">
        <h2 className="text-center">Episode 1</h2>
          <h3 className="text-center">{roomData[0].name}</h3>
            <p>{roomData[0].description}</p>
      </div>
      )};
      </div>

    );
};

export default Room;
