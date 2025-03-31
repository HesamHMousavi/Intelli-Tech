import React from "react";
import "./ShowHero.css";

const ShowHero = ({
  title = "Dev Tool Template",
  description = " A professional landing page template designed for developer tools and APIs.A professional landing page template designed for developer tools and APIs. A professional landing page template designed for developer tools and APIs.",
  videoSrc = "",
  reverse = false,
}) => {
  return (
    <div className='max-wid'>
      <section className={`showhero-container ${reverse ? "reverse" : ""}`}>
        <div className='showhero-right'>
          <video
            className='showhero-video'
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className='showhero-left'>
          <h1>{title}</h1>
          <p className='description'>{description}</p>

          <button
            className='lw-btn lw-btn-fill'
            style={{ marginRight: "10px" }}>
            Find out more
          </button>
          <button className='lw-btn lw-btn-outline'>Live Preview</button>
        </div>
      </section>
    </div>
  );
};

export default ShowHero;
