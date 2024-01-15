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
    padding-bottom: 10px;
  }
`;

const BoardWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
`;

const BoardDetail = styled.div`
  width: 50%;
  text-align: left;
  span {
    font-size: 25px;
    font-weight: bold;
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
      <BoardWrapper>
        <BoardDetail>
          <span>티토 찾아요</span>
        </BoardDetail>
        <BoardDetail>
          <span>질문 있어요</span>
        </BoardDetail>
      </BoardWrapper>
    </Wrapper>
  );
};

export default HomeScreen;
