import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";
import "./FAQHome.css";

const FAQHome = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='faq-container'>
      <h2 className='faq-title t-2 uppercase-text'>
        Frequently asked questions
      </h2>
      {data.map((faq, index) => (
        <div
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          key={index}
          onClick={() => toggleFAQ(index)}>
          <div className='faq-question'>
            {faq.question}
            <span className='faq-icon'>
              {activeIndex === index ? <HiMiniMinusSmall /> : <GoPlus />}
            </span>
          </div>
          <div className='faq-answer'>{faq.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQHome;
