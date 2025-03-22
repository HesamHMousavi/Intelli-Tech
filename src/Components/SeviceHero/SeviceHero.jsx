import React from "react";
import "./SeviceHero.css";

const SeviceHero = () => {
  return (
    <div className='max-wid'>
      <div className='service-hero'>
        <div className='hero-left'>
          <h1 className='t-1' style={{ textAlign: "start" }}>
            {" "}
            Why choose our services
          </h1>
          <p className='p-2'>
            At our core, we believe your website should be a true reflection of
            your business, which is why we focus on thoroughly understanding
            your goals, brand, and customer journey before we begin. By
            tailoring our work to your specific requirements, we ensure every
            design choice, feature, and functionality aligns with your vision.
            Our collaborative approach keeps you involved at every stage,
            guaranteeing that the final result not only meets your needs but
            also elevates your online presence and drives meaningful results for
            your business.
          </p>
          <div className='btn-container'>
            <button className='lw-btn lw-btn-fill'>Get started</button>
            <button className=' lw-btn lw-btn-outline'>Learn More</button>
          </div>
        </div>
        <div className='hero-right'>
          <h1>LW</h1>
        </div>
      </div>
    </div>
  );
};

export default SeviceHero;
