import React, { useEffect } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import vid1 from "../../../vids/OF.mp4";
import "./Project.css";

const Project = () => {
  const item = {
    video: vid1,
    title: "Fleure",
    subtitle: "https://litwebs.co.uk",
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <main className='project'>
        <h1>{item.title}</h1>
        <div className='showcase-card-project'>
          <h4>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
            aspernatur iure commodi, labore architecto nihil veniam tenetur
            impedit dolore totam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestiae, iure.
          </h4>
          <div className='showcase-video-wrapper-project'>
            <video
              src={item.video}
              muted
              loop
              autoPlay
              playsInline
              className='showcase-video-project'
            />
          </div>
          <h2>Fleure</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Project;
