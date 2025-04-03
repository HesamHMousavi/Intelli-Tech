import React, { useContext } from "react";
import "./ShowHero.css";
import { useNavigate } from "react-router-dom";
import { ContentContext } from "../../Context/Content/ContentState";

const ShowHero = ({ project, reverse = false }) => {
  const nav = useNavigate();
  const { setPro } = useContext(ContentContext);
  const onClick = (project) => {
    setPro(project);
    nav("/project");
  };
  return (
    <div className="max-wid">
      <section className={`showhero-container ${reverse ? "reverse" : ""}`}>
        <div className="showhero-right">
          <video
            className="showhero-video"
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="showhero-left">
          <h1>{project.title}</h1>
          <p className="description">{project.description}</p>

          <button
            className="lw-btn lw-btn-fill"
            style={{ marginRight: "10px" }}
            onClick={() => onClick(project)}
          >
            Find out more
          </button>
          <button
            className="lw-btn lw-btn-outline"
            onClick={() => window.open(project.url, "_blank")}
          >
            Live Preview
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShowHero;
