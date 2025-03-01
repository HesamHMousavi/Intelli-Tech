import React, { useRef } from "react";
import { BiTrash } from "react-icons/bi";
import "./AdminProjects.css";

const Modal = ({
  setNewProject,
  newProject,
  handleAddProject,
  setModalOpen,
}) => {
  const fileInputRef = useRef(null);

  // Function to add a new feature
  const addFeature = () => {
    if (newProject.newFeature?.trim()) {
      setNewProject({
        ...newProject,
        Features: [
          ...(newProject.Features || []),
          newProject.newFeature.trim(),
        ],
        newFeature: "", // Clear input after adding
      });
    }
  };

  // Function to remove a feature
  const removeFeature = (index) => {
    const updatedFeatures = [...newProject.Features];
    updatedFeatures.splice(index, 1);
    setNewProject({ ...newProject, Features: updatedFeatures });
  };

  // Function to add an image
  const addImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Function to handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setNewProject((prev) => ({
          ...prev,
          Images: [...(prev.Images || []), reader.result], // Add base64 image
        }));
      };

      reader.readAsDataURL(file); // Convert file to base64
    }
  };

  // Function to delete an image
  const deleteImage = (index) => {
    const updatedImages = [...newProject.Images];
    updatedImages.splice(index, 1);
    setNewProject({ ...newProject, Images: updatedImages });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add New Project</h3>
        <input
          type="text"
          placeholder="Project Name"
          value={newProject.ProjectName}
          onChange={(e) =>
            setNewProject({ ...newProject, ProjectName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Client"
          value={newProject.Client}
          onChange={(e) =>
            setNewProject({ ...newProject, Client: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={newProject.Price}
          onChange={(e) =>
            setNewProject({ ...newProject, Price: e.target.value })
          }
        />
        <input
          type="date"
          placeholder="Start Date"
          min={new Date().toISOString().split("T")[0]}
          value={newProject.StartDate}
          onChange={(e) =>
            setNewProject({ ...newProject, StartDate: e.target.value })
          }
        />
        <input
          type="date"
          placeholder="End Date"
          value={newProject.EndDate}
          onChange={(e) =>
            setNewProject({ ...newProject, EndDate: e.target.value })
          }
        />
        <textarea
          className="textarea-modal"
          placeholder="Project Description"
          value={newProject.Description}
          onChange={(e) =>
            setNewProject({ ...newProject, Description: e.target.value })
          }
        />

        {/* Features Section */}
        <div className="feature-con-modal">
          {newProject.Features?.map((feature, index) => (
            <span key={index} className="feature-badge">
              <BiTrash
                size={18}
                className="delete-trash"
                onClick={() => removeFeature(index)}
              />
              {feature}
            </span>
          ))}

          <input
            type="text"
            placeholder="Project URI"
            value={newProject.URI}
            onChange={(e) =>
              setNewProject({ ...newProject, URI: e.target.value })
            }
          />

          <div className="feature-input-con">
            <input
              className="feature-input"
              type="text"
              value={newProject.newFeature || ""}
              onChange={(e) =>
                setNewProject({ ...newProject, newFeature: e.target.value })
              }
            />
            <button onClick={addFeature} className="add-project-btn">
              Add
            </button>
          </div>
        </div>

        {/* Image Upload Section */}
        <h4>Images:</h4>
        <div className="project-images">
          {newProject.Images?.map((image, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img src={image} alt="Project" />
              <BiTrash
                className="delete-image-btn"
                onClick={() => deleteImage(index)}
                size={14}
              />
            </div>
          ))}
          <div className="upload-placeholder" onClick={addImage}>
            +
          </div>
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleFileChange}
        />

        <button className="save-btn" onClick={handleAddProject}>
          Add
        </button>
        <button className="cancel-btn" onClick={() => setModalOpen(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
