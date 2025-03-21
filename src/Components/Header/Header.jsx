import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ContentContext } from "../../Context/Content/ContentState";
import IT1 from "../../Images/logo.png";
import Link from "../util/Link/Link";
import Menu from "./Menu";
import Nav from "../nav/Nav";
import "../util/core.css";
import "./Header.css";
import { CiShoppingBasket } from "react-icons/ci";

const Header = () => {
  const [isShow, setShow] = useState(false);
  const nav = useNavigate();
  const path = useLocation();
  const { Basket } = useContext(ContentContext);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShow(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the correct state
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header-con">
      <div className="header max-wid ">
        <div className="left">
          {/* <img
            src={IT1}
            alt=""
            className="soft-shadow"
            onClick={() => nav("/")}
          /> */}
        </div>
        <h3 className="child title-2">Lit Webs</h3>
        <div className="right">
          <ul>
            <li>
              <Link name="Home" link="" />
            </li>
            <li>
              <Link name="Packages" link="packages" />
            </li>
            <li>
              <Link name="Process" link="process" />
            </li>
            <li>
              <Link name="Our Work" link="example" />
            </li>
            <li>
              <Link name="Contact us" link="contact" />
            </li>
            <li>
              {Basket?.length > 0 && (
                <p className="counter-tag">{Basket.length}</p>
              )}
              <CiShoppingBasket
                size={50}
                color="#3B5670"
                className={`icon-header ${
                  path.pathname.slice(1) === "checkout" ? "hovered" : ""
                }`}
                onClick={() => nav("/checkout")}
              />
            </li>
          </ul>
          <Menu setShow={setShow} isShow={isShow} />
          <Nav isShow={isShow} />
        </div>
      </div>
    </div>
  );
};

export default Header;
