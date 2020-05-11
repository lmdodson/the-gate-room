import React from "react";


import Navbar from "../components/NavBar";
import Episodes from "../components/Episodes";


const ATS = () => {
  return (
    <div id="home" className="d-flex flex-column h-100">
      <Navbar />
      <Episodes />
    </div>
  )
}

export default ATS;