import React from "react";
import { Button } from "reactstrap"
import "./style.css"


const RoomTabs = (props) => {
  // conditional statement renders nav links to rooms based on current location to limit user path and navigational options
  if (props.currentPage==="Landing") {
    return (
        <Button
            href="Iskrfkd"
            onClick={() => props.handlePageChange("Room1")}
            className={props.currentPage === "Room1" ? "nav-link active" : "nav-link"}
          >
            Hallway 
          </Button>
  );
  
     } else if (props.currentPage ==="Room1") {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#Esiiwsy"
          onClick={() => props.handlePageChange("Room2")}
          className={props.currentPage === "Room2" ? "nav-link active" : "nav-link"}
        >
          Room 2 
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Esiiwsy"
          onClick={() => props.handlePageChange("Room3")}
          className={props.currentPage === "Room3" ? "nav-link active" : "nav-link"}
        >
          Room 3 
        </a>
      </li>
    </ul>
  );
} else if (props.currentPage === "Room2") {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#room2"
          onClick={() => props.handlePageChange("Room1")}
          className={props.currentPage === "Room1" ? "nav-link active" : "nav-link"}
        >
          Hallway
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#room2"
          onClick={() => props.handlePageChange("Room3")}
          className={props.currentPage === "Room3" ? "nav-link active" : "nav-link"}
        >
          Room 3 
        </a>
      </li>
    </ul>
  );
} else if (props.currentPage === "Room3") {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#room3"
          onClick={() => props.handlePageChange("Room1")}
          className={props.currentPage === "Room1" ? "nav-link active" : "nav-link"}
        >
          Hallway 
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#room3"
          onClick={() => props.handlePageChange("Room2")}
          className={props.currentPage === "Room2" ? "nav-link active" : "nav-link"}
        >
          Room 2 
        </a>
      </li>
    </ul>
  );
};
}

export default RoomTabs;
