import React from "react";
// /import "../../util/colors.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Link.css";

const LinkP = ({ name = "link", link }) => {
  const path = useLocation();
  return (
    <Link
      className={`link ${path.pathname.slice(1) === link ? "hovered" : ""}`}
      to={`/${link}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {name}
    </Link>
  );
};

export default LinkP;
