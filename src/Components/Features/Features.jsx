import React from "react";
import Feature from "./Feature";
import featureData from "./data"; // adjust path if needed

import "./Features.css";
import "../util/colors.css";
import "../util/core.css";

const Features = () => {
  return (
    <div className='max-wid'>
      <div className='features'>
        <h2 className='t-2 mt-4'>What You Get with Our Websites</h2>
        <div className='features-con'>
          {featureData.map(({ Icon, title, p }, index) => (
            <Feature key={index} Icon={Icon} title={title} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
