import React from "react";
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import Banner2 from "../../Banner/Banner2";
import HeroR from "../../HeroR/HeroR";
import Footer from "../../Footer/Footer";
import { CgComment } from "react-icons/cg";
import { TbReportSearch } from "react-icons/tb";
import { PiShoppingCart } from "react-icons/pi";
import { BiPaint } from "react-icons/bi";
import { GoTools } from "react-icons/go";
import { GrTest } from "react-icons/gr";
import "./Process.css";
import FAQ2 from "../../FAQ2/FAQ2";

const Process = () => {
  return (
    <div className="process">
      <Header />
      <Banner title="How It Works" height="200px" />
      <h1 className="h1">Our Process</h1>
      <p className="p">
        We like to keep things simple and find this formula works!
      </p>
      <HeroR isLeft={true} Icon={PiShoppingCart} />
      <HeroR isLeft={false} Icon={CgComment} />
      <HeroR isLeft={true} Icon={TbReportSearch} />
      <HeroR isLeft={false} Icon={BiPaint} />
      <HeroR isLeft={true} Icon={GoTools} />
      <HeroR isLeft={false} Icon={GrTest} />
      <Banner2
        height="200px"
        title="Ready to get Started? Choose a package suitable for your business"
        btn={{ name: "Get Started!" }}
      />
      <FAQ2 />
      <Footer />
    </div>
  );
};

export default Process;
