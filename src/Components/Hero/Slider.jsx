import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImgSlider = ({ imgs }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hides the arrows
  };


  return (
    <Slider {...settings}>
      {imgs.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;
