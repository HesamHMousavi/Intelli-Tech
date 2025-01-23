import React from "react";
import "./Contact.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const ContactForm = () => {
  return (
    <div className="max-wid">
      <div className="form-con">
        <div className="form">
          <div className="item2">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="item1">
            <input type="text" placeholder="Email Address" />
          </div>
          <div className="item3">
            <textarea name="" placeholder="Tell us about your query"></textarea>
          </div>
          <div className="item4">
            <button className="btn">Send</button>
          </div>
        </div>

        <div className="socials">
            <h1 className="title-local title-2">Get in touch!</h1>
          <div>
            <MdEmail size={40} className="iconAll" />
            <h1 className="title-1">@intelli-Tech </h1>
          </div>
          <div>
            <FaInstagram size={40} className="iconAll" />
            <h1 className="title-1">@intelli-Tech </h1>
          </div>
          <div>
            <FaFacebook size={40} className="iconAll" />
            <h1 className="title-1">@intelli-Tech </h1>
          </div>
          <div>
            <FaTwitter size={40} className="iconAll" />
            <h1 className="title-1">@intelli-Tech </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
