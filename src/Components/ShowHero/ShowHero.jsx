import React from "react";
import "./ShowHero.css";

const ShowHero = ({ project, reverse = false }) => {
  return (
    <div className='max-wid'>
      <section className={`showhero-container ${reverse ? "reverse" : ""}`}>
        <div className='showhero-right'>
          <video
            className='showhero-video'
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className='showhero-left'>
          <h1>{project.title}</h1>
          <p className='description'>{project.description}</p>

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
