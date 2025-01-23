import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../Images/IT1.png";

const ImgSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hides the arrows
  };

  const images = [
    "https://via.placeholder.com/800x400/ff7f7f/333333",
    "https://via.placeholder.com/800x400/7f7fff/333333",
    "https://via.placeholder.com/800x400/7fff7f/333333",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgratisography.com%2F&psig=AOvVaw3QxYTkVsopma84kX904nhM&ust=1737584379340000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNi9oq_sh4sDFQAAAAAdAAAAABAE",
  ];

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img1} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;
