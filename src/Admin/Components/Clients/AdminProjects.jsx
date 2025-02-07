import React, { useState } from "react";
import "./AdminProjects.css";
import Dash from "../Dash/Dash";
import { BiTrash } from "react-icons/bi";

const AdminProjects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-commerce Website Redesign",
      client: "Tech Solutions Inc.",
      price: 12000,
      date: "2025-03-15",
      description:
        "Complete redesign of the e-commerce platform with modern UI/UX principles. ",
      features: ["Responsive Design", "Payment Gateway", "Admin Dashboard"],
      images: [
        "https://via.placeholder.com/100",
        "https://via.placeholder.com/100",
      ],
      newFeature: "",
      isEditing: false,
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    client: "",
    price: "",
    date: "",
    description: "",
    features: "",
    images: [],
  });

  const [errors, setErrors] = useState({});

  const toggleEdit = (id) => {
    setProjects(
      projects.map((project) =>
        project.id === id
          ? { ...project, isEditing: !project.isEditing }
          : project
      )
    );
  };

  const handleEdit = (id, field, value) => {
    setProjects(
      projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
  };

  const handleDelete = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const addFeature = (id) => {
    setProjects(
      projects.map((project) => {
        if (project.id === id && project.newFeature.trim()) {
          return {
            ...project,
            features: [...project.features, project.newFeature.trim()],
            newFeature: "",
          };
        }
        return project;
      })
    );
  };

  const addImage = (id) => {
    const newImageURL = prompt("Enter Image URL:");
    if (!newImageURL) return;
    setProjects(
      projects.map((project) =>
        project.id === id
          ? { ...project, images: [...project.images, newImageURL] }
          : project
      )
    );
  };

  const validate = () => {
    let newErrors = {};
    if (!newProject.title.trim()) newErrors.title = "Title is required";
    if (!newProject.client.trim()) newErrors.client = "Client is required";
    if (!newProject.price || isNaN(newProject.price))
      newErrors.price = "Valid price is required";
    if (!newProject.date) newErrors.date = "Date is required";
    if (!newProject.description.trim())
      newErrors.description = "Description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddProject = () => {
    if (!validate()) return;

    const newProjectData = {
      ...newProject,
      id: projects.length + 1,
      price: Number(newProject.price),
      features: newProject.features.split(",").map((f) => f.trim()),
      images: [],
      isEditing: false,
    };

    setProjects([...projects, newProjectData]);
    setNewProject({
      title: "",
      client: "",
      price: "",
      date: "",
      description: "",
      features: "",
      images: [],
    });
    setModalOpen(false);
  };

  return (
    <div className="split">
      <Dash />
      <div className="admin-container">
        <h2>Projects</h2>
        <button className="add-project-btn" onClick={() => setModalOpen(true)}>
          + Add New Project
        </button>

        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-actions">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
                alt="Edit"
                onClick={() => toggleEdit(project.id)}
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                alt="Delete"
                onClick={() => handleDelete(project.id)}
              />
            </div>

            {project.isEditing ? (
              <>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) =>
                    handleEdit(project.id, "title", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={project.client}
                  onChange={(e) =>
                    handleEdit(project.id, "client", e.target.value)
                  }
                />
                <input
                  type="number"
                  value={project.price}
                  onChange={(e) =>
                    handleEdit(project.id, "price", e.target.value)
                  }
                />
                <input
                  type="date"
                  value={project.date}
                  onChange={(e) =>
                    handleEdit(project.id, "date", e.target.value)
                  }
                />
                <textarea
                  value={project.description}
                  onChange={(e) =>
                    handleEdit(project.id, "description", e.target.value)
                  }
                />

                <h4>Features:</h4>
                <div className="feature-container">
                  {project.features.map((feature, index) => (
                    <>
                      <span key={index} className="feature-badge">
                        <BiTrash size={18} className="delete-trash" />
                        {feature}
                      </span>
                    </>
                  ))}
                  <div className="feature-input-con">
                    <input
                      className="feature-input"
                      type="text"
                      value={project.newFeature}
                      onChange={(e) =>
                        handleEdit(project.id, "newFeature", e.target.value)
                      }
                    />
                    <button
                      onClick={() => addFeature(project.id)}
                      className="add-project-btn"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <h4>Images:</h4>
                <div className="project-images">
                  {project.images.map((image, index) => (
                    <img key={index} src={image} alt="Project" />
                  ))}
                  <div
                    className="upload-placeholder"
                    onClick={() => addImage(project.id)}
                  >
                    +
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3>{project.title}</h3>
                <p>
                  <strong>Client:</strong> {project.client}
                </p>
                <p>
                  <strong>Price:</strong> ${project.price.toLocaleString()}
                </p>
                <p>
                  <strong>Date:</strong> {new Date(project.date).toDateString()}
                </p>
                <p>
                  <strong>
                    Description:
                    <br />
                  </strong>{" "}
                  {project.description}
                </p>

                <h4>Features:</h4>
                <div className="feature-container">
                  {project.features.map((feature, index) => (
                    <span key={index} className="feature-badge">
                      {feature}
                    </span>
                  ))}
                </div>

                <h4>Images:</h4>
                <div className="project-images">
                  {project.images.map((image, index) => (
                    <img key={index} src={image} alt="Project" />
                  ))}
                </div>
              </>
            )}
          </div>
        ))}

        {modalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Add New Project</h3>
              <input
                type="text"
                placeholder="Title"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Project Name"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Client Name"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Price"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
              />
              <input
                type="date"
                placeholder="date"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
              />
              <textarea
                placeholder="Project Description"
                className="textarea-modal"
              />
              <div className="feature-con-modal">
                <span className="feature-badge">
                  <BiTrash size={18} className="delete-trash" />
                  feature
                </span>
                <span className="feature-badge">
                  <BiTrash size={18} className="delete-trash" />
                  feature
                </span>
                <span className="feature-badge">
                  <BiTrash size={18} className="delete-trash" />
                  feat
                </span>
                <span className="feature-badge">
                  <BiTrash size={18} className="delete-trash" />
                  featurewddw
                </span>
                <span className="feature-badge">
                  <BiTrash size={18} className="delete-trash" />
                  featurewswsw
                </span>
                <div className="feature-input-con">
                  <input
                    className="feature-input"
                    placeholder="Feature"
                    type="text"
                  />
                  <button className="add-project-btn">Add</button>
                </div>
              </div>
              <button className="save-btn" onClick={handleAddProject}>
                Add
              </button>
              <button
                className="cancel-btn"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProjects;
