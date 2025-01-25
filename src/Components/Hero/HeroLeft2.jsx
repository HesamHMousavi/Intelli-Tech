import React, { useState, useEffect, useContext } from "react";
import { ContentContext } from "../../Context/Content/ContentState";
import { useNavigate } from "react-router-dom";
import ImgSlider from "./Slider";
import "./Hero.css";

const HeroLeft2 = ({ Project, isLeftFirst = true }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const { SetContent } = useContext(ContentContext);
  const nav = useNavigate();
  // Update state when window resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onClick = () => {
    SetContent(Project);
    nav("/project");
  };

  return (
    <div className="bg-gary">
      <div className="max-wid hero-con2">
        <div className="hero heroHeight mar-top mar-bottom max-wid">
          {isMobile ? (
            <>
              <div className="right2">
                <ImgSlider imgs={Project.Imgs} />
              </div>
              <div className="left2">
                {Project.Title && (
                  <h2 className="title-2 mar-top">{Project.Title}</h2>
                )}
                {Project.SubTitle && (
                  <h4 className="title-4">{Project.SubTitle}</h4>
                )}
                {Project.Description && (
                  <p className="p-3">{Project.Description[0]}</p>
                )}
                <div className="btn-con">
                  <button className="btn mar-right" onClick={onClick}>
                    Find Out More
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Desktop layout uses `isLeftFirst` prop */}
              {isLeftFirst ? (
                <>
                  {/* Left Section */}
                  <div className="left2">
                    {Project.Title && (
                      <h2 className="title-2 mar-top">{Project.Title}</h2>
                    )}
                    {Project.SubTitle && (
                      <h4 className="title-4">{Project.SubTitle}</h4>
                    )}
                    {Project.Description && (
                      <p className="p-3">{Project.Description[0]}</p>
                    )}
                    <div className="btn-con">
                      <button className="btn mar-right" onClick={onClick}>
                        Find Out More
                      </button>
                    </div>
                  </div>
                  {/* Right Section */}
                  <div className="right2">
                    <ImgSlider imgs={Project.Imgs} />
                  </div>
                </>
              ) : (
                <>
                  {/* Right Section First */}
                  <div className="right2">
                    <ImgSlider imgs={Project.Imgs} />
                  </div>
                  {/* Left Section */}
                  <div className="left2">
                    {Project.Title && (
                      <h2 className="title-2 mar-top">{Project.Title}</h2>
                    )}
                    {Project.SubTitle && (
                      <h4 className="title-4">{Project.SubTitle}</h4>
                    )}
                    {Project.Description && (
                      <p className="p-3">{Project.Description}</p>
                    )}
                    <div className="btn-con">
                      <button className="btn mar-right" onClick={onClick}>
                        Find Out More
                      </button>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroLeft2;
