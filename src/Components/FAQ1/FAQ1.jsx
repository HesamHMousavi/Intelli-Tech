import React from "react";
import Question from "./Question";
import { useNavigate } from "react-router-dom";
import "./FAQ1.css";

const FAQ1 = ({ data }) => {
  const nav = useNavigate();
  return (
    <div className="faq1-con">
      <div className="faq1 max-wid">
        <h1>FAQ</h1>
        <p>
          Get some quick answers to your questions by browsing the topics below
        </p>
        <div className="ques-con">
          {data.map((item, idx) => (
            <Question key={idx} title={item.question} ans={item.answer} />
          ))}
        </div>
        <div className="btn-con">
          <button className="btn" onClick={() => nav("/faqs")}>
            View All FAQs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ1;
