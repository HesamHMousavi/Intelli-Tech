import React from "react";
import Feature from "./Feature";
import {
  FaTools,
  FaCloudflare,
  FaNetworkWired,
  FaHireAHelper,
  FaMobile,
  FaPaintBrush,
} from "react-icons/fa";
import "./Features.css";
import "../util/colors.css";
import "../util/core.css";

const Features = () => {
  return (
    <div className="features max-wid">
      <h2 className="title-2">What You Get with Our Websites</h2>
      <div className="features-con">
        <Feature
          Icon={FaMobile}
          p={
            "Ensuring a seamless user experience across every device, from smartphones to desktops, for consistent engagement."
          }
          title={"Responsive design"}
        />
        <Feature
          Icon={FaCloudflare}
          p={
            "Providing reliable, secure infrastructure that keeps your website accessible and performing at its best."
          }
          title={"Domain and hosting"}
        />
        <Feature
          Icon={FaNetworkWired}
          p={
            "Seamlessly linking your website to popular platforms such as Facebook, Instagram, and LinkedIn, making it easier for visitors to engage with your brand and share your content."
          }
          title={"Social Media Integration"}
        />
        <Feature
          Icon={FaHireAHelper}
          p={
            "Offering continuous guidance to keep your site updated, troubleshoot issues, and adapt to evolving demands."
          }
          title={"Ongoing support"}
        />
        <Feature
          Icon={FaPaintBrush}
          p={
            "Crafting original, brand-specific visuals that highlight your unique identity and captivate your audience."
          }
          title={"Bespoke design"}
        />
        <Feature
          Icon={FaTools}
          p={
            "Handling behind-the-scenes updates, security patches, and performance tweaks for long-term stability and efficiency."
          }
          title={"Technical maintenance"}
        />
      </div>
    </div>
  );
};

export default Features;
