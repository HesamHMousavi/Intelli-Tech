import React, { useContext } from "react";
import { ContentContext } from "../../../../Context/Content/ContentState";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./ShowcaseGrid.css";

const ShowcaseGrid = () => {
  const nav = useNavigate();
  const { Projects, setPro } = useContext(ContentContext);
  const onClick = (project) => {
    setPro(project);
    nav("/project");
  };
  return (
    <section className="showcase-wrapper">
      <div className="showcase-header">
        <h2>Showcase</h2>
        <p>Companies choose LITWEBS to achieve their vision</p>
      </div>

      <div className="showcase-grid">
        {Projects.map((item, index) => (
          <div
            className="showcase-card"
            key={index}
            onClick={() => onClick(item)}
          >
            <div className="showcase-video-wrapper">
              <video
                src={item.video}
                muted
                loop
                autoPlay
                playsInline
                className="showcase-video"
              />
            </div>
            <span className="sub-con">
              <h3>{item.title}</h3>
              <IoIosArrowForward
                size={14}
                className="show-arrow"
                color="var(--lw-text-color-7)"
              />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseGrid;
