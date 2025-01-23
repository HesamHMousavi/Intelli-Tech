import React from "react";
import "./Banner.css";
import "../util/core.css";
import "../util/colors.css";
const Banner = ({ height = "80px", bg = "#f2f2f2", p, title }) => {
  return (
    <div className="banner" style={{ height: height, backgroundColor: bg }}>
      <h1 className="title-2 max-wid text-white">{title}</h1>
      {p && <p className="p-4 mar-top max-wid2 text-white">{p}</p>}
    </div>
  );
};

export default Banner;
