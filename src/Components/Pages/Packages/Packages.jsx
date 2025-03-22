import React, { useEffect } from "react";
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Banner2 from "../../Banner/Banner2";
import Features from "../../Features/Features";
import PackageCards from "../../Packages/Packages";
import FAQ1 from "../../FAQ1/FAQ1";
import Footer from "../../Footer/Footer";
import data from "../../../Context/FAQS";
import "./Packages.css";
import ShowHero from "../../ShowHero/ShowHero";
import vid1 from "../../../vids/vid4.mp4";
import vid2 from "../../../vids/vid2.mp4";
import vid3 from "../../../vids/vid3.mp4";

const Packages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='packages'>
      <Header />
      <Banner height='200px' title='Packages' isRanbow={true} />
      <PackageCards />
      <Features />
      <Banner2
        height='140px'
        title='Ready to get Started? Choose a package suitable for your business'
        btn={{ name: "Get Started!", onClick: () => window.scrollTo(0, 0) }}
      />
      <ShowHero videoSrc={vid1} />
      <ShowHero reverse={true} videoSrc={vid2} />
      <ShowHero videoSrc={vid3} />
      <Banner2
        height='140px'
        title='Decided? Choose a package suitable for your requirements'
        btn={{ name: "Get Started!", onClick: () => window.scrollTo(0, 0) }}
      />
      <FAQ1 data={data.slice(0, 8)} />
      <Footer />
    </div>
  );
};

export default Packages;
