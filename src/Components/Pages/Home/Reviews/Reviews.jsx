import React from "react";
import "./Reviews.css";

const testimonials = [
  {
    name: "John",
    handle: "@john",
    text: "I'm at a loss for words. This is amazing. I love it.",
    color: "linear-gradient(45deg, #56ab2f, #a8e063)",
  },
  {
    name: "Jack",
    handle: "@jack",
    text: "I've never seen anything like this before. It's amazing. I love it.",
    color: "linear-gradient(45deg, #ff512f, #f09819)",
  },
  {
    name: "Jill",
    handle: "@jill",
    text: "I don't know what to say. I'm speechless. This is incredible.",
    color: "linear-gradient(45deg, #8e2de2, #4a00e0)",
  },
  {
    name: "James",
    handle: "@james",
    text: "I'm at a loss for words. This is amazing. I love it.",
    color: "linear-gradient(45deg, #fc00ff, #00dbde)",
  },
  {
    name: "Jane",
    handle: "@jane",
    text: "I'm at a loss for words. This is amazing. I love it.",
    color: "linear-gradient(45deg, #ff0084, #ff6348)",
  },
];

const InfiniteCards = () => {
  return (
    <div className='slider-container'>
      {/* Foggy gradient effect on sides */}
      <div className='fade-left'></div>
      <div className='fade-right'></div>

      {/* Scrolling rows */}
      <div className='scroll-wrapper scroll-left'>
        <div className='scrolling-cards'>
          {testimonials.concat(testimonials).map((item, index) => (
            <div key={index} className='card'>
              <div style={{ display: "flex", gap: "10px" }}>
                <div
                  className='avatar'
                  style={{ background: item.color }}></div>
                <h4 className='t-2'>{item.name}</h4>
              </div>
              <p className='handle'>{item.handle}</p>
              <p className='text'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='scroll-wrapper scroll-right'>
        <div className='scrolling-cards'>
          {testimonials.concat(testimonials).map((item, index) => (
            <div key={index} className='card'>
              <div style={{ display: "flex", gap: "10px" }}>
                <div
                  className='avatar'
                  style={{ background: item.color }}></div>
                <h4 className='t-2'>{item.name}</h4>
              </div>
              <p className='handle'>{item.handle}</p>
              <p className='text'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCards;
