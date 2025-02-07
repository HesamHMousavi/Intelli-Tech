import React, { useContext } from "react";
import { ContentContext } from "../../Context/Content/ContentState";
import Card from "./Card";
import "../../Components/util/colors.css";
import "../../Components/util/core.css";
import "./Packages.css";
const Packages = () => {
  const { PackageItems } = useContext(ContentContext);
  return (
    <div className="packs-con">
      <div className="max-wid2 text-con">
        <h2>Website packages</h2>
        <p>
          Our starter website packages suit most small to medium size businesses
          or organisations and include everything you need to get your business
          online. They are custom designed, work great across different devices
          and browsers and include a Content Management System (CMS), allowing
          you to update your website at any time.
        </p>
      </div>
      <div className="packs max-wid">
        {PackageItems?.length > 0 &&
          PackageItems.map((item, idx) => <Card Package={item} key={idx} />)}
      </div>
    </div>
  );
};

export default Packages;
