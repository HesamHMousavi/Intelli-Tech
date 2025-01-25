import React, { Fragment } from "react";
import Question from "./Question";
import "../util/core.css";
import "../util/colors.css";
import "./FAQ3.css";

const FAQ3 = ({ data }) => {
  return (
    <Fragment>
      <div className="max-wid">
        <div className="faq3">
          {data.map((item, idx) => (
            <Question key={idx} title={item.question} para={item.answer} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default FAQ3;
