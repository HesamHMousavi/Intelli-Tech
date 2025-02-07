import React, { useContext } from "react";
import { ContentContext } from "../../Context/Content/ContentState";
import "./Menu.css"; // Import the CSS file

const HamburgerMenu = ({ setShow, isShow }) => {
  const { Basket } = useContext(ContentContext);
  return (
    <div
      className={`nav-icon ${isShow ? "active" : ""}`}
      onClick={() => setShow(!isShow)}
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>

      {!isShow && Basket?.length > 0 && (
        <span className="tag">
          <p>1</p>
        </span>
      )}
    </div>
  );
};

export default HamburgerMenu;
