import React from "react";
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Banner2 from "../../Banner/Banner2";
import Features from "../../Features/Features";
import PackageCards from "../../Packages/Packages";
import HeroLeft2 from "../../Hero/HeroLeft2";
import "./Packages.css";
import FAQ1 from "../../FAQ1/FAQ1";
import Footer from "../../Footer/Footer";

const Packages = () => {
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
        btn={{ name: "Get Started!" }}
      />
      <HeroLeft2
        isLeftFirst={false}
        btn1={{ name: "Find out more" }}
        t={"Portfolio Project Name"}
        p={
          "This project involves creating a simple yet professional online presence tailored to the client’s specific needs. Typically, it includes designing and developing up to five core pages (e.g., Home, About, Services, Contact, and Blog), integrating basic branding elements (logo, color palette, fonts), and ensuring mobile-friendly responsiveness."
        }
      />
      <HeroLeft2
        // isLeftFirst={false}
        btn1={{ name: "Find out more" }}
        t={"Portfolio Project Name"}
        p={
          "This project involves creating a simple yet professional online presence tailored to the client’s specific needs. Typically, it includes designing and developing up to five core pages (e.g., Home, About, Services, Contact, and Blog), integrating basic branding elements (logo, color palette, fonts), and ensuring mobile-friendly responsiveness."
        }
      />
      <HeroLeft2
        isLeftFirst={false}
        btn1={{ name: "Find out more" }}
        t={"Portfolio Project Name"}
        p={
          "This project involves creating a simple yet professional online presence tailored to the client’s specific needs. Typically, it includes designing and developing up to five core pages (e.g., Home, About, Services, Contact, and Blog), integrating basic branding elements (logo, color palette, fonts), and ensuring mobile-friendly responsiveness."
        }
      />
      <Banner2
        height="140px"
        title="Decided? Choose a package suitable for your requirements"
        btn={{ name: "Get Started!" }}
      />
      <FAQ1 />
      <Footer />
    </div>
  );
};

export default Packages;
