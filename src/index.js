import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextState } from "./Context/Content/ContentState";
import { AdminState } from "./Admin/Context/AdminContext/AdminState";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextState>
      <AdminState>
        <App />
      </AdminState>
    </ContextState>
  </React.StrictMode>
);
