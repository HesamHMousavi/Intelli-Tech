import React, { useEffect, useContext } from "react";
import Header from "../../Header/Header";
import HeroLeft from "../../Hero/HeroLeft";
import HeroLeft2 from "../../Hero/HeroLeft2";
import Banner from "../../Banner/Banner";
import Banner2 from "../../Banner/Banner2";
import Features from "../../Features/Features";
import Footer from "../../Footer/Footer";
import FAQ1 from "../../FAQ1/FAQ1";
import img from "../../../Images/IT1.png";
import { useNavigate } from "react-router-dom";
import { ContentContext } from "../../../Context/Content/ContentState";
import faqs from "../../../Context/FAQS";

const Home = () => {
  const nav = useNavigate();
  const { Projects } = useContext(ContentContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const GetStarted = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const data = faqs.slice(0, 8);
  const btn1 = { name: "Find Out More", onClick: GetStarted };
  const btn2 = { name: "Get Started", onClick: () => nav("/packages") };
  Projects[0].SubTitle = "";
  return (
    <div>
      <Header />
      <HeroLeft
        btn1={btn1}
        btn2={btn2}
        t={"Empower Your Business with Websites starting from £399"}
        subt={
          "We help you stand out online by creating professional, user-friendly websites that captivate visitors and drive results."
        }
        img={img}
      />
      <Banner
        title="Helping UK Businesses reach their potential"
        height="200px"
      />
      <Features />
      <Banner
        height="400px"
        title="Why use our services ? "
        p="At our core, we believe your website should be a true reflection of your business, which is why we focus on thoroughly understanding your goals, brand, and customer journey before we begin. By tailoring our work to your specific requirements, we ensure every design choice, feature, and functionality aligns with your vision. Our collaborative approach keeps you involved at every stage, guaranteeing that the final result not only meets your needs but also elevates your online presence and drives meaningful results for your business."
      />
      <HeroLeft2 Project={Projects[0]} />
      <Banner2
        height="140px"
        title="Ready to get Started? Choose a package suitable for your business"
        btn={{ name: "Get Started!", onClick: () => nav("/packages") }}
      />
      <FAQ1 data={data} />
      <Footer />
    </div>
  );
};

export default Home;
