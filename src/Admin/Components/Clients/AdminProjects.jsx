import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from "react";
import Dash from "../Dash/Dash";
import Modal from "./Modal";
import ProjectsEdit from "./ProjectsEdit";
import ProjectList from "./ProjectList";
import { FiEdit } from "react-icons/fi";
import { FaTrashCan } from "react-icons/fa6";
import { AdminContext } from "../../Context/AdminContext/AdminState";
import "./AdminProjects.css";

const AdminProjects = () => {
  const { Projects, GetProjects, AddProject, EditProject, DeleteProject } =
    useContext(AdminContext);
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingProjectId, setEditingProjectId] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [newProject, setNewProject] = useState({
    ProjectName: "",
    Price: "",
    Client: "",
    StartDate: "",
    EndDate: "",
    Description: "",
    Features: [],
    newFeature: "",
    Images: [],
    URI: "",
    Completed: false,
  });

  useEffect(() => {
    setProjects((prevProjects) =>
      Projects.map((project) => {
        const existingProject = prevProjects.find((p) => p._id === project._id);
        return {
          ...project,
          Features: project.Features || [],
          newFeature: "",
          Images: existingProject
            ? existingProject.Images
            : project.Images || [], // Preserve Images
        };
      })
    );
  }, [Projects]);

  const FetchData = useCallback(async () => {
    await GetProjects();
  }, [GetProjects]);

  useEffect(() => {
    FetchData();
  }, [FetchData]);

  const toggleEdit = (id) => {
    setEditingProjectId(editingProjectId === id ? null : id);
  };

  const handleEdit = (id, field, value) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project._id === id ? { ...project, [field]: value } : project
      )
    );
  };

  const handleDelete = async (id) => {
    setProjects(projects.filter((project) => project._id !== id));
    if (editingProjectId === id) {
      setEditingProjectId(null);
    }
    await DeleteProject(id);
  };

  // const addFeature = (id) => {
  //   setProjects(
  //     projects.map((project) => {
  //       if (project._id === id && project.newFeature?.trim()) {
  //         return {
  //           ...project,
  //           Features: [...(project.Features || []), project.newFeature.trim()],
  //           newFeature: "",
  //         };
  //       }
  //       return project;
  //     })
  //   );
  // };

  const addImage = (id) => {
    setSelectedProjectId(id);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && selectedProjectId !== null) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project._id === selectedProjectId
              ? {
                  ...project,
                  Images: [...(project.Images || []), reader.result],
                }
              : project
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteImage = (projectId, imageIndex) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project._id === projectId
          ? {
              ...project,
              Images: project.Images.filter((_, idx) => idx !== imageIndex),
            }
          : project
      )
    );
  };

  const handleSaveOnEdit = async (updatedProject) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project._id === updatedProject._id ? updatedProject : project
      )
    );
    delete updatedProject.newFeature;
    await EditProject(updatedProject);
    toggleEdit(updatedProject._id);
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.ProjectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.Client?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddProject = () => {
    if (!newProject.ProjectName.trim()) return;
    setProjects([...projects, { ...newProject, _id: Date.now().toString() }]);
    setNewProject({
      ProjectName: "",
      Client: "",
      Price: "",
      StartDate: "",
      EndDate: "",
      Description: "",
      Features: [],
      newFeature: "",
      Images: [],
      Completed: false,
      URI: "",
    });
    delete newProject.newFeature;
    setModalOpen(false);
    AddProject(newProject);
  };

  return (
    <div className="split">
      <Dash />
      <div className="admin-container">
        <div className="header-projects">
          <h2>Projects</h2>
          <div className="search-con">
            <input
              type="text"
              placeholder="Search Projects..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="add-project-btn"
              onClick={() => setModalOpen(true)}
            >
              + Add New Project
            </button>
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project._id} className="project-card">
              <div className="project-actions">
                <FiEdit
                  size={21}
                  color="#aaa"
                  onClick={() => toggleEdit(project._id)}
                />
                <FaTrashCan
                  size={20}
                  color="#aaa"
                  onClick={() => handleDelete(project._id)}
                />
              </div>

              {editingProjectId === project._id ? (
                <ProjectsEdit
                  project={project}
                  handleEdit={handleEdit}
                  addImage={addImage}
                  deleteImage={deleteImage}
                  toggleEdit={toggleEdit}
                  handleSaveOnEdit={handleSaveOnEdit}
                />
              ) : (
                <ProjectList project={project} />
              )}
            </div>
          ))
        ) : (
          <div className="center-no-found">
            <h2>No projects found.</h2>
          </div>
        )}

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleFileChange}
        />

        {modalOpen && (
          <Modal
            setNewProject={setNewProject}
            newProject={newProject}
            setModalOpen={setModalOpen}
            handleAddProject={handleAddProject}
          />
        )}
      </div>
    </div>
  );
};

export default AdminProjects;
