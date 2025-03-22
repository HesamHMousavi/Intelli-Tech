import React, { useState } from "react";
import "./FAQHome.css";

const FAQHome = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='faq-container'>
      <h2 className='faq-title t-2'>Frequently asked questions</h2>
      {data.map((faq, index) => (
        <div
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          key={index}
          onClick={() => toggleFAQ(index)}>
          <div className='faq-question t-4'>
            {faq.question}
            <span className='faq-icon'>
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          <div className='faq-answer'>{faq.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQHome;
