import React from "react";
import "./Hero.css";
import "../util/colors.css";
import "../util/core.css";
import SolarSystem from "../Sun/Sun";

const Hero = ({ btn1, btn2, t, subt, p, img }) => {
  return (
    <div className="hero-con">
      <div className="asteroid-container">
        <div className="asteroid"></div>
        <div className="asteroid"></div>
        <div className="asteroid"></div>
        <div className="asteroid"></div>
      </div>
      <div className="hero mar-top mar-bottom max-wid">
        <div className="left">
          {t && <h2 className="title-2 mar-top">{t}</h2>}
          {subt && <h4 className="title-4">{subt}</h4>}
          {p && <p className="p-2">{p}</p>}
          <div className="btn-con">
            {btn1 && (
              <button className="btn mar-right" onClick={btn1.onClick}>
                {btn1.name}
              </button>
            )}
            {btn2 && (
              <button className="btn" onClick={btn2.onClick}>
                {btn2.name}
              </button>
            )}
          </div>
        </div>
        <div className="right">
          <SolarSystem />
        </div>
      </div>
    </div>
  );
};

export default Hero;
