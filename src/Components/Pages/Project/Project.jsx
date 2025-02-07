import React, { useContext, useEffect } from "react";
import { ContentContext } from "../../../Context/Content/ContentState";
import { useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import Banner from "../../Banner/Banner";
import ImgSlider from "../../Hero/Slider";
import { TfiControlBackward } from "react-icons/tfi";
import MoreExamples from "./MoreExamples";
import Footer from "../../Footer/Footer";
import "./Project.css";

const Project = () => {
  const { Content } = useContext(ContentContext);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project">
      <Header />
      <Banner height="200px" title="Project Name" />
      <div className="max-wid">
        <div className="back-link">
          <TfiControlBackward size={24} />
          <h2 onClick={() => navigate(-1)}>Back</h2>
        </div>
        <div className="proj-pre">
          <div className="left">
            <h1 className="title-2  mg-1">{Content.Title}</h1>
            {Content?.Description?.map((desc, index) => (
              <p key={index} className="p-3">
                {desc}
              </p>
            ))}
            <h1 className="title-2 mg-2">Key Features</h1>
            <ul>
              {Content?.Features?.map((item, index) => (
                <li key={index}>
                  <p className="p-2">{item}</p>
                </li>
              ))}
            </ul>
            {/* <div className="btn-con">
              <button className="btn btn-fill">View site</button>
            </div> */}
          </div>
          <div className="right">
            <ImgSlider imgs={Content.Imgs} />
          </div>
        </div>
      </div>
      <Banner height="200px" title="More Projects" />
      <MoreExamples />
      <Footer />
    </div>
  );
};

export default Project;
