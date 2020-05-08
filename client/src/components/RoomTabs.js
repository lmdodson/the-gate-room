import React from "react";

function RoomTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#landing"
          onClick={() => props.handlePageChange("Landing")}
          className={props.currentPage === "Landing" ? "nav-link active" : "nav-link"}
        >
          Landing
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#room1"
          onClick={() => props.handlePageChange("Room1")}
          className={props.currentPage === "Room1" ? "nav-link active" : "nav-link"}
        >
          Room1
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#room2"
          onClick={() => props.handlePageChange("Room2")}
          className={props.currentPage === "Room2" ? "nav-link active" : "nav-link"}
        >
          Room2
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#room3"
          onClick={() => props.handlePageChange("Room3")}
          className={props.currentPage === "Room3" ? "nav-link active" : "nav-link"}
        >
          Room3
        </a>
      </li>
    </ul>
  );
}

export default RoomTabs;
