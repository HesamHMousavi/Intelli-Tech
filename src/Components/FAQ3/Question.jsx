import React, { useState } from "react";
import "./Question.css";

const Question = ({ title, para }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Split `para` only at periods while keeping spaces intact
  const sentences = para
    .split(/(?<=\.)/) // Splits at `.`, but keeps it in the result
    .filter((sentence) => sentence.trim() !== ""); // Remove empty entries

  return (
    <div className={`question-div ${expanded ? "expanded" : ""}`}>
      <h1>{title}</h1>
      <p>{sentences[0]}</p>
      {sentences.length > 1 && (
        <div className="content-wrapper">
          {expanded && <p>{sentences.slice(1).join("").trim()}</p>}
        </div>
      )}
      <div className="btn-con">
        {sentences.length > 1 && (
          <button className="btn" onClick={toggleExpand}>
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
