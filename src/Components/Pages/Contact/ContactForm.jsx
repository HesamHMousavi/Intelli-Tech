import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ContentContext } from "../../../Context/Content/ContentState";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const { CreateAlert } = useContext(ContentContext);
  // Function to update state when input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to check if all fields are filled
  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  // Submit form with validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setStatus("Please fill in all fields.");
      CreateAlert({
        id: uuidv4(),
        alert: "Please fill in all fields.",
        type: "warning",
      });
      setTimeout(() => setStatus(""), 1000);
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch(process.env.REACT_APP_FORM_ID, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message Sent!");
        CreateAlert({
          id: uuidv4(),
          alert: "Message Sent!.",
          type: "success",
        });
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }

    setTimeout(() => setStatus(""), 2000);
  };

  return (
    <div className="max-wid">
      <div className="form-con">
        <form className="form" onSubmit={handleSubmit}>
          <div className="item2">
            <input
              disabled={status !== ""}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              // required
            />
            <input
              disabled={status !== ""}
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              // required
            />
          </div>
          <div className="item1">
            <input
              disabled={status !== ""}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              // required
            />
          </div>
          <div className="item3">
            <textarea
              disabled={status !== ""}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your query"
              // required
            />
          </div>
          <div className="item4">
            <button disabled={status !== ""} className="btn" type="submit">
              Send
            </button>
          </div>
        </form>

        <div className="socials">
          <h1 className="title-local title-2">Get in touch!</h1>
          <div>
            <FaInstagram
              size={40}
              className="iconAll"
              onClick={() =>
                window.open("https://www.instagram.com/litwebs/", "_blank")
              }
            />
            <h1 className="title-1">@Litwebs </h1>
          </div>
          <div>
            <FaFacebook
              size={40}
              className="iconAll"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/people/Lit-Webs/61572395225801/",
                  "_blank"
                )
              }
            />
            <h1 className="title-1">@Litwebs </h1>
          </div>
          <div>
            <FaSnapchatGhost
              size={40}
              className="iconAll"
              onClick={() =>
                window.open("https://www.snapchat.com/add/litwebs", "_blank")
              }
            />
            <h1 className="title-1">@Litwebs </h1>
          </div>
          <div>
            <MdEmail
              size={40}
              className="iconAll"
              onClick={() =>
                window.open("mailto:litwebs@outlook.co.uk", "_blank")
              }
            />
            <h1 className="title-1">Litwebs@outlook.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
