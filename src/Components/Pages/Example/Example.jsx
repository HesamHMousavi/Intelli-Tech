import React, { useEffect, useContext } from "react";
import Banner from "../../Banner/Banner";
import Banner2 from "../../Banner/Banner2";
import Header from "../../Header/Header";
import HeroLeft2 from "../../Hero/HeroLeft2";
import Features from "../../Features/Features";
import FAQ1 from "../../FAQ1/FAQ1";
import Footer from "../../Footer/Footer";
import { ContentContext } from "../../../Context/Content/ContentState";
import data from "../../../Context/FAQS";
import "./Example.css";

const Example = () => {
  let { Projects } = useContext(ContentContext);
  Projects = Projects.map((item) => ({
    ...item, // Spread the existing properties
    SubTitle: "", // Update the SubTitle property
  }));

  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="example">
      <Header />
      <Banner title="Our Work" height="200px" />
      <h1 className="h1">Examples of our projects</h1>
      <p className="p">
        We like to keep things simple and find this formula works!
      </p>
      {Projects.map((Item, index) => (
        <HeroLeft2 Project={Item} key={index} isLeftFirst={index % 2 === 0} />
      ))}
      <Banner2
        height="140px"
        title="Ready to get Started? Choose a package suitable for your business"
        btn={{ name: "Get Started!" }}
      />
      <Features />
      <FAQ1 data={data.slice(8)} />
      <Footer />
    </div>
  );
};

export default Example;
