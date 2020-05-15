// import React, { Component } from "react";
// import RoomTabs from "../RoomTabs";
// import Intro from "../../Pages/Intro";
// import FlightDeck from "../../Pages/FlightDeck";
// import ComputerCore from "../../Pages/ComputerCore";
// import LifeSupport from "../../Pages/LifeSupport";
// import Corridor from "../../Pages/Corridor";
// import Cabin from "../../Pages/Cabin";
// import Elevator from "../../Pages/Elevator";
// import API from "../../Utils/API";



// class Rooms extends Component {
//   state = {
//     currentPage: "Intro",
//     power: false,
//     visited: false
//   };

// // for conditional page routing
//   handlePageChange = page => {
//     this.setState({ currentPage: page });
//   };

// // get DB data
// // loadRoom = () => {
// //   // gets the db items
// //   API.getRoom("ComputerCore")
// //     .then((res) =>
// //     // run the select items function and pass the db response
// //       console.log(res)
// //     )
// //     .catch((err) => console.log(err));
// // };





//   render() {
//     if (this.state.currentPage === "Intro") {
//       return <Intro
//           // currentPage={this.state.currentPage}
//           handlePageChange={this.handlePageChange}
//           // loadRooms={this.loadRooms}
//           // selectRooms={this.selectRooms}
//       />
//     } else if (this.state.currentPage === "FlightDeck") {
//       return <FlightDeck 
//         currentPage={this.state.currentPage}
//         handlePageChange={this.handlePageChange}
//       />
//     } else if (this.state.currentPage === "ComputerCore") {
//       return <ComputerCore
//         currentPage={this.state.currentPage}
//         handlePageChange={this.handlePageChange}
//       />
//     } else if (this.state.currentPage === "Corridor") {
//       return <Corridor
//         currentPage={this.state.currentPage}
//         handlePageChange={this.handlePageChange}
//       />
//     } else if (this.state.currentPage === "LifeSupport") {
//       return <LifeSupport
//         currentPage={this.state.currentPage}
//         handlePageChange={this.handlePageChange}
//       />
//     } else if (this.state.currentPage === "Cabin") {
//       return <Cabin
//         currentPage={this.state.currentPage}
//         handlePageChange={this.handlePageChange}
//       />
//     } else if (this.state.currentPage === "Elevator") {
//       return <Elevator
//         currentPage={this.state.currentPage}
//         handlePageChange={this.handlePageChange}
//         loadRooms={this.loadRooms}
//         selectRooms={this.selectRooms}
//       />
//     }
//     return(
//       <RoomTabs />
//     )
//   }
// }

// export default Rooms;