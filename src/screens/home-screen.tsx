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
      <MaxSlider height="300px"></MaxSlider>
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
            title="C++ 한솥밥 하실분구해요!"
            detail="안녕하세요, 혹시 C++한솥밥 하실 분 계신가요? 저는 저번학기 김학수 C++ 1등 으로 수...."
            view={41}
            comment={4}
          ></HBoarddetail>
          <HBoarddetail
            category={1}
            title="모바일 게임 UX디자인 멘토님!"
            detail="이번에 열리는 모바일 게임 UX디자인 김정수 교수님 한솥밥 멘토님 구해요! 정말 열심히....."
            view={20}
            comment={2}
          ></HBoarddetail>
          <HBoarddetail
            category={2}
            title="알고리즘 어울림"
            detail="알고리즘 스터디 하실분 구합니다. 매주 온라인+ 오프라인에 진행해요~ 자세한 사항은 쪽..."
            view={24}
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
            title="VS CODE 에러가 났어요 "
            detail="이번에 처음 설치하고 실행하려는데 .... eESDADASDSADASD에러가 나요 ㅠㅠ , 어떡해 해야할까......"
            view={10}
            comment={1}
          ></HBoarddetail>
          <HBoarddetail
            category={3}
            title="경영관리 이번 과제 질문이.."
            detail="저번 12월 3일 진행한 수업과제 에서 이부분이 이해가 안되요......"
            view={20}
            comment={1}
          ></HBoarddetail>
          <HBoarddetail
            category={3}
            title="C++ 한솥밥 하실분 구해요!"
            detail="안녕하세요, 혹시 C++한솥밥 하실 분 계신가요? 저는 저번학기 김학수 C++ 1등 으로 수강....."
            view={10}
            comment={1}
          ></HBoarddetail>
        </BoardDetail>
      </BoardWrapper>
    </Wrapper>
  );
};

export default HomeScreen;
