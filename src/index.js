import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
const path = sessionStorage.redirect;
delete sessionStorage.redirect;

if (path) {
  window.history.replaceState(null, "", path);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
