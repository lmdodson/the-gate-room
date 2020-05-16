import React from "react";
import NavBar from '../NavBar';
import Footer from '../Footer';


const Unauth = () => {
  return (
    <div className="wrapper d-flex flex-column h-100" style={{background: '#747474'}}>
    <NavBar />
    <div className="text-center container-fluid" style={{width: '50%'}}>
    <h1 className="mb-4">The Gate Room</h1>
    <p>Story content is exclusively for our registered members. Please log in or sign up to get started!</p>
    <hr />
  </div>
    <Footer />
    </div>

  )
};

export default Unauth;