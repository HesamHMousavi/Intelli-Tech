import React from "react";
import Header from "../../Header/Header";
import HeroLeft from "../../Hero/HeroLeft";
import HeroLeft2 from "../../Hero/HeroLeft2";
import Banner from "../../Banner/Banner";
import Banner2 from "../../Banner/Banner2";
import Features from "../../Features/Features";
import Footer from "../../Footer/Footer";
import FAQ1 from "../../FAQ1/FAQ1";
import img from "../../../Images/IT1.png";

const Home = () => {
  const btn1 = { name: "Find Out More" };
  const btn2 = { name: "Get Started" };
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
      <HeroLeft2
        btn1={btn1}
        t={"Portfolio Project Name"}
        p={
          "This project involves creating a simple yet professional online presence tailored to the client’s specific needs. Typically, it includes designing and developing up to five core pages (e.g., Home, About, Services, Contact, and Blog), integrating basic branding elements (logo, color palette, fonts), and ensuring mobile-friendly responsiveness."
        }
        img={img}
      />
      <Banner2
        height="140px"
        title="Ready to get Started? Choose a package suitable for your business"
        btn={{ name: "Get Started!" }}
      />
      <FAQ1 />
      <Footer />
    </div>
  );
};

export default Home;
