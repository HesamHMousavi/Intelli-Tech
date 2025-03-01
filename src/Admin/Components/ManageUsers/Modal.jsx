import React, { useState } from "react";
import "./Modal.css";
import { FaPlus, FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, onAddAdmin }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
    Banned: "No",
    AccessRole: "Admin",
    Avatar: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, Avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setFormData((prev) => ({ ...prev, Avatar: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.Name || !formData.Email) {
      alert("Name and Email are required!");
      return;
    }
    onAddAdmin(formData);
    setFormData({
      Name: "",
      Email: "",
      Password: "",
      Banned: "No",
      AccessRole: "Admin",
      Avatar: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Add New Admin</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
          <label>Password:</label>
          <input
            type="Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            required
          />

          <label>Banned:</label>
          <select name="Banned" value={formData.Banned} onChange={handleChange}>
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>

          <label>Access Role:</label>
          <select
            name="AccessRole"
            value={formData.AccessRole}
            onChange={handleChange}
          >
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>
            <option value="User">User</option>
          </select>

          <label>Upload Avatar:</label>
          <div className="image-upload-container">
            {formData.Avatar ? (
              <div className="image-preview">
                <img src={formData.Avatar} alt="Preview" />
                <button
                  type="button"
                  className="remove-image"
                  onClick={handleImageRemove}
                >
                  <FaTimes />
                </button>
              </div>
            ) : (
              <label htmlFor="file-upload" className="image-upload-box">
                <FaPlus size={15} />
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  hidden
                />
              </label>
            )}
          </div>

          <div className="modal-actions">
            <button type="submit" className="btn-add">
              Add Admin
            </button>
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
