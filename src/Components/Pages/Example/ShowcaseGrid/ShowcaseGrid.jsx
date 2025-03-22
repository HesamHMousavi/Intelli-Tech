import React from "react";
import "./ShowcaseGrid.css";
import vid4 from "../../../../vids/vid1.mp4";
import vid1 from "../../../../vids/vid2.mp4";
import vid2 from "../../../../vids/vid3.mp4";
import vid3 from "../../../../vids/vid4.mp4";
import vid5 from "../../../../vids/vid5.mp4";
import vid6 from "../../../../vids/vid6.mp4";

const ShowcaseGrid = ({ items = [] }) => {
  items = [
    {
      video: vid1,
      title: "title",
      subtitle: "subtitle",
    },
    {
      video: vid2,
      title: "title",
      subtitle: "subtitle",
    },
    {
      video: vid3,
      title: "title",
      subtitle: "subtitle",
    },
    {
      video: vid4,
      title: "title",
      subtitle: "subtitle",
    },
    {
      video: vid5,
      title: "title",
      subtitle: "subtitle",
    },
    {
      video: vid6,
      title: "title",
      subtitle: "subtitle",
    },
    {
      video: vid3,
      title: "title",
      subtitle: "subtitle",
    },
  ];
  return (
    <section className='showcase-wrapper'>
      <div className='showcase-header'>
        <h2>Showcase</h2>
        <p>Companies choose Magic UI to build their landing pages.</p>
      </div>

      <div className='showcase-grid'>
        {items.map((item, index) => (
          <div className='showcase-card' key={index}>
            <div className='showcase-video-wrapper'>
              <video
                src={item.video}
                muted
                loop
                autoPlay
                playsInline
                className='showcase-video'
              />
            </div>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowcaseGrid;
