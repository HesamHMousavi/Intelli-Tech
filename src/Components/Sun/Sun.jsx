import React from "react";
import "./SolarSystem.css";

const SolarSystem = () => {
  return (
    <div className="solar-container">
      {/* The Sun in the center */}
      <div className="sun" />

      {/* Orbit #1 */}
      <div className="orbit orbit-1">
        <div className="planet planet-1" />
      </div>

      {/* Orbit #2 */}
      <div className="orbit orbit-2">
        <div className="planet planet-2" />
      </div>

      {/* Orbit #3 */}
      <div className="orbit orbit-3">
        <div className="planet planet-3" />
      </div>

      {/* Orbit #4 */}
      <div className="orbit orbit-4">
        <div className="planet planet-4" />
      </div>

      <div className="orbit orbit-5">
        <div className="planet planet-5" />
      </div>

      <div className="orbit orbit-6">
        <div className="planet planet-6" />
      </div>

      <div className="orbit orbit-7">
        <div className="planet planet-7" />
      </div>
    </div>
  );
};

export default SolarSystem;
