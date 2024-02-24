import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const SliderWrap = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden; /* 이미지가 벗어나는 부분을 숨김 */
  margin-top: 20px;
`;

const Img1 = styled.img`
  width: 100%;
  height: 100%; /* 이미지가 100%의 높이를 가지도록 설정 */
  object-fit: cover; /* 이미지가 확대/축소되어 영역을 채우도록 설정 */
`;

const MaxSlider = ({ height }: { height: string }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const navigate = useNavigate();

  return (
    <SliderWrap style={{ height }}>
      <Slider {...settings}>
        {/* 이미지 슬라이드 내용 추가 */}
        <div>
          <Img1
            src={"/imgs/slider/slider1.png"}
            onClick={() => navigate("/slider/1/")}
            alt="Slide 1"
          />
        </div>
        <div>
          <Img1
            src="/imgs/slider/slider2.png"
            onClick={() => navigate("/slider/2/")}
            alt="Slide 2"
          />
        </div>
        <div>
          <Img1
            src="/imgs/slider/slider3.png"
            onClick={() => navigate("/slider/3/")}
            alt="Slide 3"
          />
        </div>
      </Slider>
    </SliderWrap>
  );
};

export default MaxSlider;
