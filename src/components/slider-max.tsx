import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderWrap = styled.div`
  width: 100%;
`;

const Img1 = styled.img`
  width: 100%;
`;

const MaxSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <SliderWrap>
      <Slider {...settings}>
        {/* 이미지 슬라이드 내용 추가 */}
        <div>
          <Img1 src="imgs/slider/slider1.png" alt="Slide 1" />
        </div>
        <div>
          <Img1 src="imgs/slider/slider2.png" alt="Slide 2" />
        </div>
        <div>
          <Img1 src="imgs/slider/slider3.png" alt="Slide 3" />
        </div>
      </Slider>
    </SliderWrap>
  );
};

export default MaxSlider;
