import React, { useState } from "react";
import "../core/colors.css";
import "../core/core.css";
import "./Service.css";
import { MdModeEditOutline } from "react-icons/md";
import Feature from "./Feature";

const Service = () => {
  const [edit, setEdit] = useState(false);
  const [state, setState] = useState({
    Title: "Basic",
    Price: 299,
    desc: "swkskjqbw kqwjsbkqws kqwjbs swbjqwsb kqwjbs wqksb",
    features: [
      { name: "Feature 1", Selected: true },
      { name: "Feature 2", Selected: true },
      { name: "Feature 3", Selected: false },
      { name: "Feature 4", Selected: true },
      { name: "Feature 5", Selected: false },
    ],
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to ${value}`);

    setState((prevState) => ({
      ...prevState, // Keep existing properties
      [name]: value, // Update only the changed property
    }));
  };

  const onEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="service">
      <h4 className="h5-mid label-gray mgt-1">Title</h4>

      <header className="flex-row-between mgt-5px">
        <input
          onChange={onChange}
          name="Title" // ✅ Fix: Add name attribute
          value={state.Title} // ✅ Fix: Bind to state
          className={`h3-mid title-no-bg width-100 ${
            !edit ? "outEdit" : "inEdit"
          }`}
          disabled={!edit}
        />
        <MdModeEditOutline
          size={28}
          className="icon-service"
          color={edit ? "#386ca0" : "#777"}
          onClick={onEdit}
        />
      </header>
      <h4 className="h5-mid mgt-2 label-gray">Price</h4>
      <main className="mgt-5px">
        <input
          onChange={onChange}
          name="Price" // ✅ Fix: Add name attribute
          value={`$ ${state.Price}`} // ✅ Fix: Bind to state
          className={`price flex-center-row h3-mid ${
            !edit ? "outEdit" : "inEdit"
          }`}
          disabled={!edit}
        />
        <h4 className="h5-mid mgt-1 label-gray">Description</h4>
        <textarea
          onChange={onChange}
          name="desc" // ✅ Fix: Add name attribute
          value={state.desc} // ✅ Fix: Bind to state
          className={`price desc mgt-5px ${!edit ? "outEdit" : "inEdit"}`}
          disabled={!edit}
        />
        <h4 className="h5-mid mgt-1 label-gray">Features</h4>
        <div
          className="records"
          style={{
            overflow: !edit ? "hidden" : "auto",
          }}
        >
          <Feature edit={edit} />
          <Feature edit={edit} />
          <Feature edit={edit} />
          <Feature edit={edit} />
          <Feature edit={edit} />
          <Feature edit={edit} />
          <Feature edit={edit} />
        </div>
      </main>
      {edit && (
        <footer className="mgt-1">
          <button className="btn-outline" onClick={onEdit}>
            {" "}
            Cancel
          </button>
          <button className="btn-outline btn-Fill mgl-1" onClick={onEdit}>
            {" "}
            Save
          </button>
        </footer>
      )}
    </div>
  );
};

export default Service;
