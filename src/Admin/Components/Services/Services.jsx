import React from "react";
import Dash from "../Dash/Dash";
import Service from "../Services/Service";
import Features from "./Features";
import "../core/colors.css";
import "../core/core.css";
import "./Services.css";

const Services = () => {
  return (
    <div className="flex">
      <Dash />
      <div className="scroll">
        <h3 className="h3-mid mgt-2 mgl-2 ">Manage Features</h3>
        <Features />
        <h3 className="h3-mid mgt-2 mgl-2 ">Manage Packages</h3>
        <div className="services flex gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <Service key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
