import React from "react";
import "./Menu.css"; // Import the CSS file

const HamburgerMenu = ({ setShow, isShow }) => {
  return (
    <div
      className={`nav-icon ${isShow ? "active" : ""}`}
      onClick={() => setShow(!isShow)}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default HamburgerMenu;
