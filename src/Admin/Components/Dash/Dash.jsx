import React, { useContext } from "react";
import logo from "../../..//Images/IT1.png";
import MenuIcon from "../MenuIcon/MenuIcon";
import { useLocation, useNavigate } from "react-router-dom";
import { AdminContext } from "../../Context/AdminContext/AdminState";
import { MdLogout, MdSpaceDashboard } from "react-icons/md";
import { ImFilesEmpty } from "react-icons/im";
import { FcSettings } from "react-icons/fc";
import { FaUsersCog } from "react-icons/fa";

import "../core/colors.css";
import "../core/core.css";
import "./Dash.css";

const Dash = () => {
  const { AdminLogout } = useContext(AdminContext);
  const path = useLocation();
  const nav = useNavigate();
  return (
    <div className="dash">
      <header>
        <div>
          <img src={logo} alt="" />
          <h4>Lit Webs</h4>
        </div>
        <div>
          <MenuIcon />
        </div>
      </header>

      <main>
        <h4 className="sub-title-text">General</h4>
        <div className="options">
          <div
            onClick={() => nav("/admin/data")}
            className={`option ${
              path.pathname === "/admin/data" ? "selected" : ""
            }`}
          >
            <MdSpaceDashboard size={20} />
            <h4>Dashboard</h4>
            <div className="item-tag-red">
              <p>2</p>
            </div>
          </div>
          <div
            onClick={() => nav("/admin/projects")}
            className={`option ${
              path.pathname === "/admin/projects" ? "selected" : ""
            }`}
          >
            <ImFilesEmpty size={20} />
            <h4>Projects</h4>
          </div>
        </div>

        <h4 className="sub-title-text mgt-3">Account</h4>
        <div className="options">
          <div className="option">
            <FcSettings size={20} />
            <h4>Settings</h4>
          </div>
          <div
            onClick={() => nav("/admin/admins")}
            className={`option ${
              path.pathname === "/admin/admins" ? "selected" : ""
            }`}
          >
            <FaUsersCog size={20} />
            <h4>Manage Users</h4>
          </div>
        </div>
      </main>

      <footer>
        <div className="options">
          <div className="option" onClick={AdminLogout}>
            <MdLogout size={20} color="#d32f2f" />
            <h4>Dashboard</h4>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dash;
