import React from "react";
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import ContactForm from "./ContactForm";
import Footer from "../../Footer/Footer";
import FAQ2 from "../../FAQ2/FAQ2";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Header />
      <Banner height="140px" title="What can we help you with?" />
      <div className="con2 max-wid2">
        <h1 className="h1">Contact us regarding your queries</h1>
        <p className="p">
          Got a question about one of our packages? Already have a website and
          looking to improve it? Or, maybe you just want to say hi. Please fill
          in the form below and we’ll be in touch as soon as we can.
        </p>
      </div>
      <ContactForm />
      <FAQ2 />
      <Footer />
    </div>
  );
};

export default Contact;
