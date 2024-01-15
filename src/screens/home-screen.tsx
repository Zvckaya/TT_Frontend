import styled from "styled-components";
import MaxSlider from "../components/slider-max";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HBoarddetail from "../components/home/board-detail";

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
  justify-content: space-between;
`;

const BoardDetail = styled.div`
  width: 49%;
  text-align: left;
  span {
    font-size: 25px;
    font-weight: bold;
    display: inline-block;
  }
`;

const HomeScreen = () => {
  return (
    <Wrapper>
      <MaxSlider height="400px"></MaxSlider>
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
          <span style={{ paddingBottom: "10px" }}>
            티토 찾아요
            <ArrowForwardIosIcon />
          </span>
          <HBoarddetail
            category={0}
            title="안녕하세요"
            detail="안녕하세요"
            view={10}
            comment={0}
          ></HBoarddetail>
          <HBoarddetail
            category={0}
            title="안녕하세요"
            detail="안녕하세요"
            view={10}
            comment={0}
          ></HBoarddetail>
          <HBoarddetail
            category={0}
            title="안녕하세요"
            detail="안녕하세요"
            view={10}
            comment={0}
          ></HBoarddetail>
        </BoardDetail>
        <BoardDetail>
          <span style={{ paddingBottom: "10px" }}>
            질문 있어요
            <ArrowForwardIosIcon />
          </span>
          <HBoarddetail
            category={3}
            title="안녕하세요"
            detail="안녕하세요"
            view={10}
            comment={0}
          ></HBoarddetail>
          <HBoarddetail
            category={3}
            title="안녕하세요"
            detail="안녕하세요"
            view={10}
            comment={0}
          ></HBoarddetail>
          <HBoarddetail
            category={3}
            title="안녕하세요"
            detail="안녕하세요"
            view={10}
            comment={0}
          ></HBoarddetail>
        </BoardDetail>
      </BoardWrapper>
    </Wrapper>
  );
};

export default HomeScreen;
