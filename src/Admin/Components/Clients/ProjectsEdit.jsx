import React, { useState } from "react";
import "./AdminProjects.css";
import { BiTrash } from "react-icons/bi";

const ProjectsEdit = ({
  project,
  handleEdit,
  toggleEdit,
  handleSaveOnEdit,
}) => {
  const [editableProject, setEditableProject] = useState(project);

  const addFeature = () => {
    if (!editableProject.newFeature.trim()) return; // Prevent adding empty features

    setEditableProject((prevProject) => ({
      ...prevProject,
      Features: [
        ...(prevProject.Features || []),
        prevProject.newFeature.trim(),
      ],
      newFeature: "", // Reset input after adding
    }));
  };

  const deleteFeature = (index) => {
    setEditableProject((prevProject) => ({
      ...prevProject,
      Features: prevProject.Features.filter((_, i) => i !== index),
    }));
  };

  const addImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditableProject((prevProject) => ({
          ...prevProject,
          Images: [...(prevProject.Images || []), reader.result], // Append new image
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = (index) => {
    setEditableProject((prevProject) => ({
      ...prevProject,
      Images: prevProject.Images.filter((_, i) => i !== index), // Remove selected image
    }));
  };

  //   const file = event.target.files[0];
  //   if (file && selectedProjectId !== null) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProjects((prevProjects) =>
  //         prevProjects.map((project) =>
  //           project._id === selectedProjectId
  //             ? {
  //                 ...project,
  //                 Images: [...(project.Images || []), reader.result],
  //               }
  //             : project
  //         )
  //       );
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <>
      <input
        type="text"
        value={editableProject.ProjectName}
        onChange={(e) =>
          setEditableProject({
            ...editableProject,
            ProjectName: e.target.value,
          })
        }
      />
      <input
        type="text"
        value={editableProject.Client}
        onChange={(e) =>
          setEditableProject({ ...editableProject, Client: e.target.value })
        }
      />
      <input
        type="number"
        value={editableProject.Price}
        onChange={(e) =>
          setEditableProject({ ...editableProject, Price: e.target.value })
        }
      />
      <input
        type="date"
        value={
          editableProject.StartDate
            ? editableProject.StartDate.split("T")[0]
            : ""
        }
        onChange={(e) =>
          setEditableProject({ ...editableProject, StartDate: e.target.value })
        }
      />
      <textarea
        value={editableProject.Description}
        onChange={(e) =>
          setEditableProject({
            ...editableProject,
            Description: e.target.value,
          })
        }
      />
      <div className="completed">
        <h4>Completed</h4>
        <input
          checked={Boolean(editableProject.Completed)}
          type="checkbox"
          onChange={(e) =>
            setEditableProject({
              ...editableProject,
              Completed: e.target.checked,
            })
          }
        />
      </div>

      <input
        type="text"
        placeholder="Project URI"
        value={editableProject.URI}
        onChange={(e) =>
          setEditableProject({ ...editableProject, URI: e.target.value })
        }
      />

      <h4>Features:</h4>
      <div className="feature-container">
        {editableProject.Features.map((feature, index) => (
          <span key={index}>
            <span key={index} className="feature-badge">
              <BiTrash
                size={18}
                className="delete-trash"
                onClick={() => deleteFeature(index)}
              />
              {feature}
            </span>
          </span>
        ))}
        <div className="feature-input-con">
          <input
            className="feature-input"
            type="text"
            value={editableProject.newFeature}
            onChange={(e) =>
              setEditableProject({
                ...editableProject,
                newFeature: e.target.value,
              })
            }
          />
          <button
            onClick={() => addFeature(editableProject._id)}
            className="add-project-btn"
          >
            Add
          </button>
        </div>
      </div>

      <h4>Images:</h4>
      <div className="project-images">
        <>
          {(editableProject.Images || []).map((image, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img src={image} alt="Project" />
              <BiTrash
                className="delete-image-btn"
                onClick={() => deleteImage(index)} 
                size={10}
              />
            </div>
          ))}
          <div
            className="upload-placeholder"
            onClick={() => document.getElementById("fileInput").click()} // Trigger hidden input
          >
            +
          </div>
        </>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={addImage}
        id="fileInput"
      />

      <div className="btns-con">
        <button
          className="add-project-btn"
          onClick={() => {
            handleEdit(
              editableProject._id,
              "ProjectName",
              editableProject.ProjectName
            );
            handleEdit(editableProject._id, "Client", editableProject.Client);
            handleEdit(editableProject._id, "Price", editableProject.Price);
            handleEdit(
              editableProject._id,
              "StartDate",
              editableProject.StartDate
            );
            handleEdit(
              editableProject._id,
              "Description",
              editableProject.Description
            );
            handleSaveOnEdit(editableProject);
          }}
        >
          Save
        </button>
        <button
          className="cancel-btn-2"
          onClick={() => toggleEdit(editableProject._id)}
        >
          Cancel
        </button>
      </div>
    </>
  );
};

export default ProjectsEdit;
