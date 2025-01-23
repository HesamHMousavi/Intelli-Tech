import React, { useState, useRef, useEffect } from "react";
import "./FAQ2.css";
import "../util/core.css";
import "../util/colors.css";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const faqData = [
  {
    question: "Medium length question goes here",
    answer:
      "Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute copiosae hendrerit. Eos erant dolorum an. Per facer affert ut.",
  },
  {
    question: "Medium length question goes here",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    question: "Medium length question goes here",
    answer:
      "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
  },
  {
    question: "Medium length question goes here",
    answer:
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
  },
  {
    question: "Medium length question goes here",
    answer:
      "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
  },
];

const FAQ2 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          openIndex === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQ</h2>
      <p className="p-3">
        Get some quick answers to your questions by browsing the topics below
      </p>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
            </div>
            <div
              className="faq-answer-container"
              ref={(el) => (contentRefs.current[index] = el)}
            >
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn"> View All FAQs</button>
    </div>
  );
};

export default FAQ2;
