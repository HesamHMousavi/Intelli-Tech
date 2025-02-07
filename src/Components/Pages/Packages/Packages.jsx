import React, { useEffect, useContext } from "react";
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Banner2 from "../../Banner/Banner2";
import Features from "../../Features/Features";
import PackageCards from "../../Packages/Packages";
import HeroLeft2 from "../../Hero/HeroLeft2";
import FAQ1 from "../../FAQ1/FAQ1";
import Footer from "../../Footer/Footer";
import { ContentContext } from "../../../Context/Content/ContentState";
import data from "../../../Context/FAQS";
import "./Packages.css";

const Packages = () => {
  const { Projects } = useContext(ContentContext);
  const newProjects = Projects.map((item) => ({
    ...item,
    SubTitle: "",
  }));
  //Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="packages">
      <Header />
      <Banner height="200px" title="Packages" />
      <h1 className="h1">Our Prices</h1>
      <p className="p">Choose a packages suitable for your business</p>
      <PackageCards />
      <Features />
      <Banner2
        height="140px"
        title="Ready to get Started? Choose a package suitable for your business"
        btn={{ name: "Get Started!", onClick: () => window.scrollTo(0, 0) }}
      />
      {newProjects.map((Item, index) => (
        <HeroLeft2 Project={Item} isLeftFirst={index % 2 === 0} key={index} />
      ))}
      <Banner2
        height="140px"
        title="Decided? Choose a package suitable for your requirements"
        btn={{ name: "Get Started!", onClick: () => window.scrollTo(0, 0) }}
      />
      <FAQ1 data={data.slice(0, 8)} />
      <Footer />
    </div>
  );
};

export default Packages;
