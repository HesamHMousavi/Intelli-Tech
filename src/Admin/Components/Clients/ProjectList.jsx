import React from "react";
import "./AdminProjects.css";

const ProjectList = ({ project }) => {
  return (
    <>
      <h3>{project.ProjectName}</h3>
      <p>
        <strong>Client</strong> {project.Client}
      </p>
      <div className="row-one">
        <p>
          <strong>Price</strong> £{project.Price.toLocaleString()}
        </p>
        <p>
          <strong>Start Date</strong>{" "}
          {new Date(project.StartDate).toDateString() ||
            new Date().toDateString()}
        </p>
      </div>
      <div className="row-one">
        <div className="completed">
          <p>Completed</p>
          <input
            checked={Boolean(project.Completed)}
            type="checkbox"
            disabled
          />
        </div>

        <p>
          <strong>Start Date</strong>{" "}
          {new Date(project.EndDate).toDateString() ||
            new Date().toDateString()}
        </p>
      </div>

      <p className="desc-list">
        <strong>
          Description
          <br />
        </strong>{" "}
        {project.Description}
      </p>
      <div className="row-one">
        <h4>Features</h4>
        <a
          href={`${project.URI}`}
          className="visit-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Project
        </a>
      </div>
      <div className="feature-container">
        {project.Features.map((feature, index) => (
          <span key={index} className="feature-badge">
            {feature}
          </span>
        ))}
      </div>

      <h4 className="img-title">Images</h4>
      <div className="project-images">
        {project?.Images ? (
          project.Images.map((image, index) => (
            <img key={index} src={image} alt="Project" />
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ProjectList;
