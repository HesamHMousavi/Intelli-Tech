import React, { useState, useEffect } from "react";
import "./Hero.css";
import ImgSlider from "./Slider";

const HeroLeft2 = ({ btn1, btn2, t, subt, p, img, isLeftFirst = true }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  // Update state when window resizes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-wid hero-con2">
      <div className="hero heroHeight mar-top mar-bottom max-wid">
        {isMobile ? (
          <>
            {/* Right Section First (for mobile) */}
            <div className="right2">
              <ImgSlider />
            </div>
            {/* Left Section */}
            <div className="left2">
              {t && <h2 className="title-2 mar-top">{t}</h2>}
              {subt && <h4 className="title-4">{subt}</h4>}
              {p && <p className="p-3">{p}</p>}
              <div className="btn-con">
                {btn1 && <button className="btn mar-right">{btn1.name}</button>}
                {btn2 && <button className="btn">{btn2.name}</button>}
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
                  {t && <h2 className="title-2 mar-top">{t}</h2>}
                  {subt && <h4 className="title-4">{subt}</h4>}
                  {p && <p className="p-3">{p}</p>}
                  <div className="btn-con">
                    {btn1 && (
                      <button className="btn mar-right">{btn1.name}</button>
                    )}
                    {btn2 && <button className="btn">{btn2.name}</button>}
                  </div>
                </div>
                {/* Right Section */}
                <div className="right2">
                  <ImgSlider />
                </div>
              </>
            ) : (
              <>
                {/* Right Section First */}
                <div className="right2">
                  <ImgSlider />
                </div>
                {/* Left Section */}
                <div className="left2">
                  {t && <h2 className="title-2 mar-top">{t}</h2>}
                  {subt && <h4 className="title-4">{subt}</h4>}
                  {p && <p className="p-3">{p}</p>}
                  <div className="btn-con">
                    {btn1 && (
                      <button className="btn mar-right">{btn1.name}</button>
                    )}
                    {btn2 && <button className="btn">{btn2.name}</button>}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HeroLeft2;
