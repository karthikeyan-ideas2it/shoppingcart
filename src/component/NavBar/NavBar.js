import React from "react";
import './NavBar.scss';

const NavBar = (props) => {
  return (
    <div className="navbar">
    <div className="navbar-logo">MyLogo</div>
    <div className="navbar-links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  </div>
  )
};

export default NavBar;