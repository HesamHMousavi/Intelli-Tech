import React from "react";
import "../util/core.css";
import "../util/colors.css";
import "./FAQ1.css";

const Question = ({ title = "title", ans = "p" }) => {
  return (
    <div className="question">
      <h3>{title}</h3>
      <p>{ans}</p>
    </div>
  );
};

export default Question;
