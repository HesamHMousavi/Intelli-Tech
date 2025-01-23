import React from "react";
import "./Banner.css";
import "../util/core.css";
import "../util/colors.css";
const Banner2 = ({ height = "80px", bg = "#f2f2f2", p, title, btn }) => {
  return (
    <div
      className="banner banner2"
      style={{ height: height, backgroundColor: bg }}
    >
      <h1 className="title-3 text-white">{title}</h1>
      {p && <p className="p-3 mar-top text-white">{p}</p>}
      {btn && <button className="btn mar-right ">{btn.name}</button>}
    </div>
  );
};

export default Banner2;
