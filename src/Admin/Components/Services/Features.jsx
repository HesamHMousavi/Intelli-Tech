import React, { useState, useContext, useEffect } from "react";
import { AdminContext } from "../../Context/AdminContext/AdminState";
import "./Features.css";

const Features = () => {
  const headers = ["ID", "Name", "Price", "Available", "Actions"];
  const { FeaturesArray, EditFeature, AddFeature, DeleteFeature } =
    useContext(AdminContext);

  const [data, setData] = useState(FeaturesArray);
  const [editingRow, setEditingRow] = useState(null);
  const [newFeature, setNewFeature] = useState({
    Name: "",
    Price: "",
    Available: true,
  });
  useEffect(() => {
    setData(FeaturesArray);
  }, [FeaturesArray]);

  // Handle editing
  const handleEdit = (id) => setEditingRow(id);
  const handleSave = async (id) => {
    const foundItem = data.find((item) => item._id === id);
    await EditFeature(foundItem, id);
    setEditingRow(null);
  };

  // Handle row value changes
  const handleChange = (id, field, value) => {
    setData((prevData) =>
      prevData.map((row) => (row._id === id ? { ...row, [field]: value } : row))
    );
  };

  // Handle new feature input changes
  const handleNewFeatureChange = (field, value) => {
    setNewFeature((prev) => ({ ...prev, [field]: value }));
  };

  // Handle adding a new feature
  const handleAddFeature = async () => {
    if (newFeature.Name.trim() === "" || newFeature.Price.trim() === "") return;
    const res = await AddFeature({
      Name: newFeature.Name,
      Price: newFeature.Price,
      Available: newFeature.Available,
    });
    setData((prevData) => [
      ...prevData,
      {
        _id: res.data._id,
        Name: res.data.Name,
        Price: res.data.Price,
        Available: res.data.Available,
      },
    ]);

    // Reset input fields
    setNewFeature({ Name: "", Price: "", Available: true });
  };

  // Handle deleting a record
  const handleDelete = async (id) => {
    setData((prevData) => prevData.filter((row) => row._id !== id));
    await DeleteFeature(id);
  };

  return (
    <div>
      <div className="table-container">
        {headers.map((header, index) => (
          <div key={index} className="table-header">
            {header}
          </div>
        ))}

        {data.map((row) => (
          <div key={row._id} className="table-row">
            <div className="table-cell">{row._id}</div>
            <div className="table-cell">
              {editingRow === row._id ? (
                <input
                  type="text"
                  value={row.Name}
                  onChange={(e) =>
                    handleChange(row._id, "Name", e.target.value)
                  }
                />
              ) : (
                row.Name
              )}
            </div>
            <div className="table-cell">
              {editingRow === row._id ? (
                <input
                  type="number"
                  value={row.Price}
                  onChange={(e) =>
                    handleChange(row._id, "Price", e.target.value)
                  }
                />
              ) : (
                `$${row.Price}`
              )}
            </div>
            <div className="table-cell">
              {editingRow === row._id ? (
                <select
                  value={row.Available}
                  onChange={(e) =>
                    handleChange(
                      row._id,
                      "Available",
                      e.target.value === "true"
                    )
                  }
                >
                  <option value="true">Available</option>
                  <option value="false">Not Available</option>
                </select>
              ) : row.Available ? (
                "Available"
              ) : (
                "Not Available"
              )}
            </div>
            <div className="table-cell">
              {editingRow === row._id ? (
                <>
                  <button
                    className="edit-btn"
                    onClick={() => handleSave(row._id)}
                  >
                    Cancel
                  </button>
                  <button
                    className="save-btn  mgl-5px"
                    onClick={() => handleSave(row._id)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(row._id)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn mgl-5px save-btn"
                    onClick={() => handleDelete(row._id)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Add New Feature Row */}
        <div className="table-row new-feature-row">
          <div className="table-cell">New</div>
          <div className="table-cell">
            <input
              type="text"
              placeholder="Feature Name"
              value={newFeature.Name}
              onChange={(e) => handleNewFeatureChange("Name", e.target.value)}
            />
          </div>
          <div className="table-cell">
            <input
              type="number"
              placeholder="Price"
              value={newFeature.Price}
              onChange={(e) => handleNewFeatureChange("Price", e.target.value)}
            />
          </div>
          <div className="table-cell">
            <select
              value={newFeature.Available}
              onChange={(e) =>
                handleNewFeatureChange("Available", e.target.value === "true")
              }
            >
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>
          <div className="table-cell">
            <button className="add-btn save-btn" onClick={handleAddFeature}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
