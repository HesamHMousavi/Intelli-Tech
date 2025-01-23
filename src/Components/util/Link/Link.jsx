import React from "react";
// /import "../../util/colors.css";
import "./Link.css";

const Link = ({ name = "link", link }) => {
  return (
    <a className="link" href={`/${link}`}>
      {name}
    </a>
  );
};

export default Link;
