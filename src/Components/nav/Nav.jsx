import React from "react";
import "./Nav.css";
import "../util/core.css";
import "../util/colors.css";
import { BiSolidChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const Nav = ({ isShow }) => {
  return (
    <div className={`nav ${isShow ? "active" : "hidden"}`}>
      <div className="item ">
        <Link className="link2" to="/" onClick={() => window.scrollTo(0, 0)}>
          Home
        </Link>
        <BiSolidChevronRight className="icon" />
      </div>
      <div className="item">
        <Link
          className="link2"
          to="/packages"
          onClick={() => window.scrollTo(0, 0)}
        >
          Packages
        </Link>
        <BiSolidChevronRight className="icon" />
      </div>
      <div className="item">
        <Link
          className="link2"
          to="/process"
          onClick={() => window.scrollTo(0, 0)}
        >
          Process
        </Link>
        <BiSolidChevronRight className="icon" />
      </div>
      <div className="item">
        <Link
          className="link2"
          to="/example"
          onClick={() => window.scrollTo(0, 0)}
        >
          Our Work
        </Link>
        <BiSolidChevronRight className="icon" />
      </div>
      <div className="item">
        <Link
          className="link2"
          to="/contact"
          onClick={() => window.scrollTo(0, 0)}
        >
          Contact us
        </Link>
        <BiSolidChevronRight className="icon" />
      </div>
    </div>
  );
};

export default Nav;
