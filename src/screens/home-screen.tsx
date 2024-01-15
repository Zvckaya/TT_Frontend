import styled from "styled-components";
import MaxSlider from "../components/slider-max";

const Wrapper = styled.div`
  width: 100%;
`;

const IconMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const MyIcon = styled.div`
  margin-top: 30px;
  position: relative;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }

  img {
    display: block;
  }
`;

const HomeScreen = () => {
  return (
    <Wrapper>
      <MaxSlider></MaxSlider>
      <IconMenu>
        <MyIcon>
          <img src="imgs/myIcon.svg" alt="My Icon" />
          티토찾기
        </MyIcon>
        <MyIcon>
          <img src="imgs/myIcon.svg" alt="My Icon" />
          질문하기
        </MyIcon>
        <MyIcon>
          <img src="imgs/myIcon.svg" alt="My Icon" />
          티칭공간
        </MyIcon>
      </IconMenu>
    </Wrapper>
  );
};

export default HomeScreen;
