import React from "react";
import logo from "../../..//Images/IT1.png";
import MenuIcon from "../MenuIcon/MenuIcon";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MdLogout,
  MdSpaceDashboard,
  MdEmail,
  MdRateReview,
} from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { FaUsersCog } from "react-icons/fa";

import "../core/colors.css";
import "../core/core.css";
import "./Dash.css";

const Dash = () => {
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
            onClick={() => nav("/admin/transactions")}
            className={`option ${
              path.pathname === "/admin/transactions" ? "selected" : ""
            }`}
          >
            <GrTransaction size={20} />
            <h4>Transactions</h4>
            <div className="item-tag-green">
              <p>1</p>
            </div>
          </div>
          <div
            onClick={() => nav("/admin/customers")}
            className={`option ${
              path.pathname === "/admin/customers" ? "selected" : ""
            }`}
          >
            <IoPersonSharp size={20} />
            <h4>Customers</h4>
          </div>
          {/* <div
            onClick={() => nav("/admin/services")}
            className={`option ${
              path.pathname === "/admin/services" ? "selected" : ""
            }`}
          >
            <AiFillProduct size={20} />
            <h4>Services</h4>
          </div>
          <div className="option">
            <MdEmail size={20} />
            <h4>Emailer</h4>
          </div>
          <div
            onClick={() => nav("/admin/faqs")}
            className={`option ${
              path.pathname === "/admin/faqs" ? "selected" : ""
            }`}
          >
            <BsFillQuestionSquareFill size={20} />
            <h4>FAQs</h4>
          </div>
          <div className="option">
            <MdRateReview size={20} />
            <h4>Reviews</h4>
          </div> */}
        </div>

        <h4 className="sub-title-text mgt-3">Account</h4>
        <div className="options">
          <div className="option">
            <FcSettings size={20} />
            <h4>Settings</h4>
          </div>
          <div className="option">
            <FaUsersCog size={20} />
            <h4>Manage Users</h4>
          </div>
        </div>
      </main>

      <footer>
        <div className="options">
          <div className="option">
            <MdLogout size={20} color="#d32f2f" />
            <h4>Dashboard</h4>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dash;
