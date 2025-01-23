import React from "react";
import "./Nav.css";
import "../util/core.css";
import "../util/colors.css";
import { BiSolidChevronRight } from "react-icons/bi";

const Nav = ({ isShow }) => {
  return (
    <div className={`nav ${isShow ? "active" : "hidden"}`}>
      <div className="item ">
        <a href="/">Home</a>
        <BiSolidChevronRight className="icon" />
      </div>
      <div className="item">
        <a href="/packages">Packages</a>
        <BiSolidChevronRight className="icon" />
      </div>
      <div className="item">
        <a href="/process">Process</a>
        <BiSolidChevronRight className="icon" />
      </div>
      <div className="item">
        <a href="/example">Our Work</a>
        <BiSolidChevronRight className="icon" />
      </div>
      <div className="item">
        <a href="/contact">Contact us</a>
        <BiSolidChevronRight className="icon" />
      </div>
    </div>
  );
};

export default Nav;
