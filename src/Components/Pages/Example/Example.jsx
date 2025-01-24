import React from "react";
import Banner from "../../Banner/Banner";
import Banner2 from "../../Banner/Banner2";
import Header from "../../Header/Header";
import HeroLeft2 from "../../Hero/HeroLeft2";
import Features from "../../Features/Features";
import FAQ1 from "../../FAQ1/FAQ1";
import "./Example.css";
import Footer from "../../Footer/Footer";

import proj1img1 from "../../../Images/Project1/img1.png";
import proj1img2 from "../../../Images/Project1/img2.png";
import proj1img3 from "../../../Images/Project1/img3.png";

import proj2img1 from "../../../Images/Project2/img1.png";
import proj2img2 from "../../../Images/Project2/img2.png";
import proj2img3 from "../../../Images/Project2/img3.png";

import proj3img1 from "../../../Images/Project3/img1.png";
import proj3img2 from "../../../Images/Project3/img2.png";
import proj3img3 from "../../../Images/Project3/img3.png";

const Example = () => {
  const imgs = [proj1img2, proj1img1, proj1img3];
  const imgs2 = [proj2img2, proj2img1, proj2img3];
  const imgs3 = [proj3img2, proj3img1, proj3img3];
  return (
    <div className="example">
      <Header />
      <Banner title="Our Work" height="200px" />
      <h1 className="h1">Examples of our projects</h1>
      <p className="p">
        We like to keep things simple and find this formula works!
      </p>
      <HeroLeft2
        btn1={{ name: "Find out more" }}
        t={"Portfolio Project Name"}
        p={
          "This project involves creating a simple yet professional online presence tailored to the client’s specific needs. Typically, it includes designing and developing up to five core pages (e.g., Home, About, Services, Contact, and Blog), integrating basic branding elements (logo, color palette, fonts), and ensuring mobile-friendly responsiveness."
        }
        img={imgs3}
      />
      <HeroLeft2
        isLeftFirst={false}
        btn1={{ name: "Find out more" }}
        t={"Portfolio Project Name"}
        p={
          "This project involves creating a simple yet professional online presence tailored to the client’s specific needs. Typically, it includes designing and developing up to five core pages (e.g., Home, About, Services, Contact, and Blog), integrating basic branding elements (logo, color palette, fonts), and ensuring mobile-friendly responsiveness."
        }
        img={imgs2}
      />
      <HeroLeft2
        btn1={{ name: "Find out more" }}
        t={"Portfolio Project Name"}
        p={
          "This project involves creating a simple yet professional online presence tailored to the client’s specific needs. Typically, it includes designing and developing up to five core pages (e.g., Home, About, Services, Contact, and Blog), integrating basic branding elements (logo, color palette, fonts), and ensuring mobile-friendly responsiveness."
        }
        img={imgs}
      />
      <HeroLeft2
        isLeftFirst={false}
        btn1={{ name: "Find out more" }}
        t={"Portfolio Project Name"}
        p={
          "This project involves creating a simple yet professional online presence tailored to the client’s specific needs. Typically, it includes designing and developing up to five core pages (e.g., Home, About, Services, Contact, and Blog), integrating basic branding elements (logo, color palette, fonts), and ensuring mobile-friendly responsiveness."
        }
        img={imgs3}
      />
      <Banner2
        height="140px"
        title="Ready to get Started? Choose a package suitable for your business"
        btn={{ name: "Get Started!" }}
      />
      <Features />
      <FAQ1 />
      <Footer />
    </div>
  );
};

export default Example;
