import React from "react";
import "./Navbar.css";
import Logo from "./Logo";
import Menu from "./Menu";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <Logo />
      <Menu />
    </div>
  );
};

export default Navbar;
