import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Collect form data
    const formData = new FormData(e.target);
    try {
      const response = await fetch(process.env.REACT_APP_FORM_ID, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setStatus("Message Sent!");
        e.target.reset();
      } else {
        setStatus("Error sending message.");
      }
      setTimeout(() => {
        setStatus("");
      }, 2000);
    } catch (error) {
      console.log(error);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="max-wid">
      <div className="form-con">
        {/** Display status messages (optional) */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="item2">
            {/** Make sure to add 'name' attributes to each input */}
            <input
              disabled={status !== ""}
              type="text"
              name="First Name"
              placeholder="First Name"
              required
            />
            <input
              disabled={status !== ""}
              type="text"
              name="Last Name"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="item1">
            <input
              disabled={status !== ""}
              type="email"
              name="Email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="item3">
            <textarea
              disabled={status !== ""}
              name="message"
              placeholder="Tell us about your query"
              required
            />
          </div>
          {status && <h3 className="title-1">{status}</h3>}
          <div className="item4">
            <button disabled={status !== ""} className="btn" type="submit">
              Send
            </button>
          </div>
        </form>

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
