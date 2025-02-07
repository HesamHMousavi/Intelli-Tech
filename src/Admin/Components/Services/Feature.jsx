import React, { useState } from "react";
import "./Feature.css";

const Feature = ({ edit }) => {
  const [check, setChecked] = useState(false);
  return (
    <div className="record flex-row-between feature-included">
      <p className={`${!edit ? "outEdit" : "inEdit"}`}>Feature</p>
      <label className="switch">
        <input
          type="checkbox"
          checked={check}
          disabled={!edit}
          onClick={() => setChecked(!check)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Feature;
