import { useState } from "react";
import "./MenuIcon.css";

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-container">
      <button className="burger" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </div>
  );
};

export default MenuIcon;
