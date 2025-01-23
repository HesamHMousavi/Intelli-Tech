import React from "react";
import "./Features.css";

const Feature = ({ Icon, p, title }) => {
  return (
    <div className="con max-wid">
      <div className="feature">
        <div className="left">
          <Icon className="icon mar-top" />
        </div>
        <div className="right">
          <h4 className="title-5 mar-top mar-bottom text-blue">{title}</h4>
          <p className="p-5">{p}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
