import React, { useState } from "react";
import Dash from "../Dash/Dash";
import "./Customers.css";

const Customers = () => {
  const headers = ["Customer ID", "Name", "Address", "Phone", "Email"];
  const initialCustomers = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, NY",
      phone: "123-456-7890",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Elm St, LA",
      phone: "987-654-3210",
      email: "jane@example.com",
    },
    {
      id: 3,
      name: "Michael Johnson",
      address: "789 Oak St, TX",
      phone: "555-123-4567",
      email: "michael@example.com",
    },
    {
      id: 4,
      name: "Alice Brown",
      address: "321 Pine St, FL",
      phone: "444-987-6543",
      email: "alice@example.com",
    },
    {
      id: 6,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
    {
      id: 7,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
    {
      id: 8,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
    {
      id: 9,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
    {
      id: 10,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
    {
      id: 11,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
    {
      id: 12,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
    {
      id: 13,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
    {
      id: 14,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
    {
      id: 15,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
    {
      id: 16,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
    {
      id: 17,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
    {
      id: 18,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
    {
      id: 19,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
    {
      id: 20,
      name: "Robert White",
      address: "678 Maple St, OH",
      phone: "333-222-1111",
      email: "robert@example.com",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState(""); // Stores user input for page navigation

  // Filter customers based on search query
  const filteredCustomers = initialCustomers.filter((customer) =>
    Object.values(customer).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredCustomers.length / recordsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleGoToPage = () => {
    const pageNumber = Number(goToPage);
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setGoToPage(""); // Clear input after navigating
    }
  };

  return (
    <div className="flex">
      <Dash />
      <div className="scroll">
        <header className="fixed-pos">
          <h3 className="h3-mid mgt-2 mgl-2">Manage Customers</h3>
          <div className="search-con">
            <input
              type="text"
              placeholder="Search customers"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search"
            />
            <select
              value={recordsPerPage}
              onChange={(e) => {
                setRecordsPerPage(Number(e.target.value));
                setCurrentPage(1); // Reset to first page when changing records per page
              }}
              className="mgl-1"
            >
              <option value={5}>5 per page</option>
              <option value={10}>10 per page</option>
              <option value={15}>15 per page</option>
              <option value={20}>20 per page</option>
            </select>
          </div>
        </header>

        {/* Customer Table */}
        <div className="customer-table-container">
          {headers.map((header, index) => (
            <div key={index} className="customer-table-header">
              {header}
            </div>
          ))}
          {paginatedCustomers.map((customer) => (
            <div key={customer.id} className="customer-table-row">
              <div className="customer-table-cell">{customer.id}</div>
              <div className="customer-table-cell">{customer.name}</div>
              <div className="customer-table-cell">{customer.address}</div>
              <div className="customer-table-cell">{customer.phone}</div>
              <div className="customer-table-cell">{customer.email}</div>
            </div>
          ))}

          {/* No Results Found */}
          {paginatedCustomers.length === 0 && (
            <div className="no-res customer-table-cell">
              No customers found.
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="pagination mg-1 fixed-pos-bottom flex-row-between">
            <div>
              <button
                className="btn-outline mgr-1"
                onClick={() => handlePageChange("prev")}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="page-no">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="btn-outline btn-Fill mgl-1"
                onClick={() => handlePageChange("next")}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
            <div>
              <input
                type="number"
                min="1"
                max={totalPages}
                value={goToPage}
                onChange={(e) => setGoToPage(e.target.value)}
                placeholder="Go to page"
                className="page-input mgr-1"
              />
              <button
                onClick={handleGoToPage}
                className="btn-outline btn-Fill"
                disabled={!goToPage || goToPage < 1 || goToPage > totalPages}
              >
                Go
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Customers;
