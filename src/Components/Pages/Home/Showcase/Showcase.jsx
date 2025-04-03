import React, { useContext } from "react";
import { ContentContext } from "../../../../Context/Content/ContentState";
import { useNavigate } from "react-router-dom";
import "./Showcase.css";

const Showcase = () => {
  const nav = useNavigate();
  const { Projects } = useContext(ContentContext);
  return (
    <div className='max-wid'>
      <h2 className='t-1'>Showcase</h2>
      <div className='gallery-container'>
        {Projects.slice(0, 3).map((project, index) => (
          <div className='project-card' key={index}>
            <div className='card-inner'>
              <video
                className='project-image'
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                controls={false}
                controlsList='nodownload nofullscreen noremoteplayback'
                disableRemotePlayback>
                <source src={project.video} type='video/mp4' />
              </video>
              <div className='card-overlay'>
                <h3>{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='btn-con-local'>
        <button
          className='lw-btn lw-btn-fill'
          style={{ margin: "0 auto" }}
          onClick={() => nav("/example")}>
          View More
        </button>
      </div>
    </div>
  );
};

export default Showcase;
