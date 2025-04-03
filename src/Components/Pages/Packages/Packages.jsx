import React, { useEffect, useContext } from "react";
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
import { ContentContext } from "../../../Context/Content/ContentState";

const Packages = () => {
  const { Projects } = useContext(ContentContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="packages">
      <Header />
      <Banner height="200px" title="Packages" isRanbow={true} />
      <PackageCards />
      <Features />
      <Banner2
        height="140px"
        title="Ready to get Started? Choose a package suitable for your business"
        btn={{ name: "Get Started!", onClick: () => window.scrollTo(0, 0) }}
      />
      <ShowHero project={Projects[0]} />
      <ShowHero reverse={true} project={Projects[1]} />
      <ShowHero project={Projects[2]} />
      <ShowHero reverse={true} project={Projects[6]} />
      <ShowHero project={Projects[7]} />
      <ShowHero reverse={true} project={Projects[5]} />
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
