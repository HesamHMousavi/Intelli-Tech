import React from "react";
import "../util/core.css";
import "../util/colors.css";
import "./HeroR.css";

const HeroR = ({ isLeft, Icon, Title, Description }) => {
  return (
    <div className={`hero-r-con  ${isLeft ? "alt-bg" : ""}`}>
      <div className={`hero-r max-wid ${isLeft ? "is-left" : ""}`}>
        <div className="left">
          <h2 className="h2">{Title}</h2>
          <p className="p-3">{Description}</p>
        </div>
        <div className="right">
          <Icon className="i" />
        </div>
      </div>
    </div>
  );
};

export default HeroR;
