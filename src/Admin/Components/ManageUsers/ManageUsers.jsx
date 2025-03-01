import React, { useState } from "react";
import "./ManageUsers.css";
import Dash from "../Dash/Dash";
import AdminTable from "./AdminTable";
import Modal from "./Modal";

const ManageUsers = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      Name: "John Doe",
      Email: "john@example.com",
      Banned: "No",
      AccessRole: "Admin",
      Avatar: "https://i.pravatar.cc/40?u=john",
    },
    {
      id: 2,
      Name: "Jane Smith",
      Email: "jane@example.com",
      Banned: "No",
      AccessRole: "Staff",
      Avatar: "https://i.pravatar.cc/40?u=jane",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state

  // Function to handle adding a new admin
  const handleAddAdmin = (newAdmin) => {
    setCustomers((prev) => [...prev, { id: prev.length + 1, ...newAdmin }]);
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase()); // Convert to lowercase for case-insensitive search
  };

  // Filtered customer list based on search query
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.Name.toLowerCase().includes(searchQuery) ||
      customer.Email.toLowerCase().includes(searchQuery) ||
      customer.AccessRole.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="users">
      <Dash />
      <div className="admins-con">
        <div className="header-projects">
          <h2>Admins</h2>
          <div className="search-con">
            <input
              type="text"
              placeholder="Search Admins..."
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange} // Handles search updates
            />
            <button
              className="add-project-btn"
              onClick={() => setIsModalOpen(true)}
            >
              + Add New Admin
            </button>
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddAdmin={handleAddAdmin}
        />
        <AdminTable customers={filteredCustomers} setCustomers={setCustomers} />
      </div>
    </div>
  );
};

export default ManageUsers;
