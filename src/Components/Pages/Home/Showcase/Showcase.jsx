import React from "react";
import "./Showcase.css";

// import vid1 from "../../../../vids/vid1.mp4";
import vid2 from "../../../../vids/vid2.mp4";
import vid3 from "../../../../vids/vid3.mp4";
import vid4 from "../../../../vids/vid4.mp4";

const projects = [
  {
    vid: vid4,
    title: "T333SCUTOMS",
  },
  {
    vid: vid2,
    title: "FLEURE",
  },
  {
    vid: vid3,
    title: "OAK FOREST",
  },
];

const Showcase = () => {
  return (
    <div className='max-wid'>
      <h2 className='t-1'>Showcase</h2>
      <div className='gallery-container'>
        {projects.map((project, index) => (
          <div className='project-card' key={index}>
            <div className='card-inner'>
              <video className='project-image' autoPlay loop muted>
                <source src={project.vid} type='video/mp4' />
              </video>
              <div className='card-overlay'>
                <h3 className='t-3'>{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='btn-con-local'>
        <button className='lw-btn lw-btn-fill' style={{ margin: "0 auto" }}>
          View More
        </button>
      </div>
    </div>
  );
};

export default Showcase;
