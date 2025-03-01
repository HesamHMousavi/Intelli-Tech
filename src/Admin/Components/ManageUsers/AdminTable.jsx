import React, { useState } from "react";
import "./AdminTable.css";
import { FaTrashAlt, FaSave } from "react-icons/fa";
import { FcEditImage } from "react-icons/fc";
import { MdCancel } from "react-icons/md";

const AdminTable = ({ customers, setCustomers }) => {
  const [editMode, setEditMode] = useState(null); // Stores the ID of the row in edit mode
  const [editedData, setEditedData] = useState({}); // Stores changes made in edit mode

  // Function to enable edit mode
  const handleEdit = (id, customer) => {
    setEditMode(id);
    setEditedData({ ...customer }); // Store current row data
  };

  // Function to handle changes in input fields
  const handleChange = (e, field) => {
    setEditedData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  // Function to save edited data
  const handleSave = (id) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.id === id ? { ...editedData } : customer
      )
    );
    setEditMode(null); // Exit edit mode
  };

  // Function to cancel edit mode
  const handleCancel = () => {
    setEditMode(null);
    setEditedData({}); // Reset changes
  };

  // Function to delete an admin
  const handleDelete = (id) => {
    setCustomers((prevCustomers) =>
      prevCustomers.filter((customer) => customer.id !== id)
    );
  };

  return (
    <div className="table-container">
      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Banned</th>
            <th>Access Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="tr">
              {/* Name Field */}
              <td className="name-cell">
                <img
                  src={customer.Avatar}
                  alt={customer.Name}
                  className="avatar"
                />
                {editMode === customer.id ? (
                  <input
                    type="text"
                    value={editedData.Name}
                    onChange={(e) => handleChange(e, "Name")}
                    className="edit-input"
                  />
                ) : (
                  customer.Name
                )}
              </td>

              {/* Email Field */}
              <td>
                {editMode === customer.id ? (
                  <input
                    type="email"
                    value={editedData.Email}
                    onChange={(e) => handleChange(e, "Email")}
                    className="edit-input"
                  />
                ) : (
                  customer.Email
                )}
              </td>

              {/* Banned Status Field */}
              <td>
                {editMode === customer.id ? (
                  <select
                    className="select-input"
                    value={editedData.Banned}
                    onChange={(e) => handleChange(e, "Banned")}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                ) : (
                  customer.Banned
                )}
              </td>

              {/* Access Role Field */}
              <td>
                {editMode === customer.id ? (
                  <select
                    className="select-input"
                    value={editedData.AccessRole}
                    onChange={(e) => handleChange(e, "AccessRole")}
                  >
                    <option value="Admin">Admin</option>
                    <option value="Staff">Staff</option>
                    <option value="User">User</option>
                  </select>
                ) : (
                  customer.AccessRole
                )}
              </td>

              {/* Actions: Edit, Save, Cancel, Delete */}
              <td>
                {editMode === customer.id ? (
                  <>
                    <FaSave
                      className="icons save-icon"
                      title="Save"
                      size={20}
                      onClick={() => handleSave(customer.id)}
                    />
                    <MdCancel
                      className="icons cancel-icon"
                      title="Cancel"
                      size={20}
                      onClick={handleCancel}
                    />
                  </>
                ) : (
                  <>
                    <FcEditImage
                      className="icons edit-icon"
                      title="Edit"
                      size={16}
                      onClick={() => handleEdit(customer.id, customer)}
                    />
                    <FaTrashAlt
                      className="icons delete-icon"
                      title="Delete"
                      size={16}
                      onClick={() => handleDelete(customer.id)}
                    />
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
