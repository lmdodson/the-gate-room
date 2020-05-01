import React from "react";
import Door from "../../src/assets/Door.jpg";

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <img src={Door} alt="ornate door" width="30" height="50"></img>
    <p>
      {/* Sample project provided by <a href="https://auth0.com">Auth0</a> */}
    </p>
  </footer>
);

export default Footer;
