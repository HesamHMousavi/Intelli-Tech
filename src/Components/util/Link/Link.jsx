import React from "react";
// /import "../../util/colors.css";
import { Link } from "react-router-dom";
import "./Link.css";

const LinkP = ({ name = "link", link }) => {
  return (
    <Link
      className="link"
      to={`/${link}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {name}
    </Link>
  );
};

export default LinkP;
