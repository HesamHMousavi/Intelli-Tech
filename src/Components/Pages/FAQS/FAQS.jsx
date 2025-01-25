import React, { useEffect } from "react";
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Banner2 from "../../Banner/Banner2";
import FAQ3 from "../../FAQ3/FAQ3";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import "./FAQS.css";
import FaqQues from "../../../Context/FAQS";

const FAQS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const nav = useNavigate();
  return (
    <div className="faqs">
      <Header />
      <Banner title="Frequently Asked Questions" height="300px" />
      <h1 className="h1">Website Guidance</h1>
      <p className="p">Questions to your answers</p>
      <FAQ3 data={FaqQues} />
      <Banner2
        height="140px"
        title="Got More Questions ? Contact us "
        btn={{ name: "Contact us", onClick: () => nav("/contact") }}
      />
      <Footer />
    </div>
  );
};

export default FAQS;
