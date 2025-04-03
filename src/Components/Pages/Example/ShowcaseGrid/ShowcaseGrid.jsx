import React, { useContext } from "react";
import { ContentContext } from "../../../../Context/Content/ContentState";
import "./ShowcaseGrid.css";
import { IoIosArrowForward } from "react-icons/io";

const ShowcaseGrid = () => {
  const { Projects } = useContext(ContentContext);
  return (
    <section className='showcase-wrapper'>
      <div className='showcase-header'>
        <h2>Showcase</h2>
        <p>Companies choose Magic UI to build their landing pages.</p>
      </div>

      <div className='showcase-grid'>
        {Projects.map((item, index) => (
          <div className='showcase-card' key={index}>
            <div className='showcase-video-wrapper'>
              <video
                src={item.video}
                muted
                loop
                autoPlay
                playsInline
                className='showcase-video'
              />
            </div>
            <span className='sub-con'>
              <h3>{item.title}</h3>
              <IoIosArrowForward
                size={14}
                className='show-arrow'
                color='var(--lw-text-color-7)'
              />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseGrid;
