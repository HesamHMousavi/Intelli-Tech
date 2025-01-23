import React from "react";
import Question from "./Question";
import "./FAQ1.css";

const FAQ1 = () => {
  return (
    <div className="faq1-con">
      <div className="faq1 max-wid">
        <h1>FAQ</h1>
        <p>
          Get some quick answers to your questions by browsing the topics below
        </p>
        <div className="ques-con">
          <Question
            title="How long does it take"
            ans="Get some quick answers to your questions by browsing the topics below"
          />
          <Question
            title="How long does it take"
            ans="Get some quick answers to your questions by browsing the topics below"
          />
          <Question
            title="How long does it take"
            ans="Get some quick answers to your questions by browsing the topics below"
          />
          <Question
            title="How long does it take"
            ans="Get some quick answers to your questions by browsing the topics below"
          />
          <Question
            title="How long does it take"
            ans="Get some quick answers to your questions by browsing the topics below"
          />
          <Question
            title="How long does it take"
            ans="Get some quick answers to your questions by browsing the topics below"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ1;
