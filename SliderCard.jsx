import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // add this line to enable automatic sliding
    autoplaySpeed: 2000, // add this line to control the speed of sliding
  };

  return (
    <div className="slider-card">
      <Slider {...settings}>
        <div>
          <img src="./images/bg1.png" alt="Image 1" />
        </div>
        <div>
          <img src="./images/bg2.png" alt="Image 2" />
        </div>
        <div>
          <img src="./images/bg3.png" alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderCard;
