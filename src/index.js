import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextState } from "./Context/Content/ContentState";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextState>
      <App />
    </ContextState>
  </React.StrictMode>
);
