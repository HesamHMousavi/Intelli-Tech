import React from "react";
import "../util/core.css";
import "../util/colors.css";
import "./Footer.css";
import img from "../../Images/IT1.png";
import { ImFacebook } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { Link as LinkRouter } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-con ">
      <div className="footer max-wid">
        <div className="item">
          <img src={img} alt="" className="soft-shadow" />
          {/* <div>
            <h3 className="address">Address</h3>
            <h3 className="address">Bradford</h3>
            <h3 className="address">University of Bradford</h3>
            <h3 className="address">BD7 EUY</h3>
          </div> */}
          <div className="socials-footer">
            <FaInstagram
              className="icon"
              size={26}
              onClick={() =>
                window.open("https://www.instagram.com/litwebs/", "_blank")
              }
            />
            <ImFacebook
              className="icon"
              size={26}
              onClick={() =>
                window.open(
                  "https://www.facebook.com/people/Lit-Webs/61572395225801/",
                  "_blank"
                )
              }
            />
            <FaSnapchatGhost
              className="icon"
              size={26}
              onClick={() =>
                window.open("https://www.snapchat.com/add/litwebs", "_blank")
              }
            />
          </div>
        </div>
        <div className="item">
          <h2 className="title-4">Contact</h2>
          <div className="sec">
            <p
              className="p-5"
              style={{
                cursor: "pointer",
              }}
              onClick={() =>
                window.open("mailto:litwebs@outlook.co.uk", "_blank")
              }
            >
              Litwebs@outlook.com
            </p>
          </div>
        </div>
        <div className="item">
          <h2 className="title-4">Links</h2>
          <div className="sec">
            <Link className="p-5" to="/" onClick={() => window.scrollTo(0, 0)}>
              Home
            </Link>

            <Link
              className="p-5"
              to="/packages"
              onClick={() => window.scrollTo(0, 0)}
            >
              Packages
            </Link>

            <Link
              className="p-5"
              to="/process"
              onClick={() => window.scrollTo(0, 0)}
            >
              How we do it
            </Link>

            <Link
              className="p-5"
              to="/example"
              onClick={() => window.scrollTo(0, 0)}
            >
              Our Work
            </Link>
            <Link
              className="p-5"
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="item">
          <h2 className="title-4">More Links</h2>
          <div className="sec">
            <LinkRouter className="p-5" to="/faqs">
              FAQs
            </LinkRouter>
          </div>
        </div>
      </div>
      <div className="end">
        <p className="p-5">© 2025 Litwebs. All rights reserved.</p>
        <p className="p-5">Privacy Policy</p>
        <p className="p-5">Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
