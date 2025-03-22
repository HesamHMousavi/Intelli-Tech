import React, { useEffect, useContext } from "react";
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Banner2 from "../../Banner/Banner2";
import Features from "../../Features/Features";
import Footer from "../../Footer/Footer";
import FAQHome from "./FAQHome/FAQHome";
import { useNavigate } from "react-router-dom";
import { ContentContext } from "../../../Context/Content/ContentState";
import faqs from "../../../Context/FAQS";
import ServiceHero from "../../SeviceHero/SeviceHero";
import "./Home.css";
import HomeView from "./HomeView";
import Reviews from "./Reviews/Reviews";
import Showcase from "./Showcase/Showcase";

const Home = () => {
  const nav = useNavigate();
  const { Projects } = useContext(ContentContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = faqs.slice(0, 8);
  Projects[0].SubTitle = "";
  return (
    <div className='home'>
      <Header />
      <HomeView />
      <Banner
        title='Helping UK Businesses reach their potential'
        height='200px'
      />
      <Features />
      <ServiceHero />

      <Showcase />
      <Reviews />
      <Banner2
        height='140px'
        title='Ready to get Started? Choose a package suitable for your business'
        btn={{ name: "Get Started!", onClick: () => nav("/packages") }}
      />
      <FAQHome data={data} />
      <Footer />
    </div>
  );
};

export default Home;
