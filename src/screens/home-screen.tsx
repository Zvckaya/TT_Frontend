import styled from "styled-components";
import MaxSlider from "../components/slider-max";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HBoarddetail from "../components/home/board-detail";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { TITTOPost } from "./board/tittoboard";
import { QNAPost } from "./board/qnaboard";

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
  font-weight: bold;
  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
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

  span:hover {
    cursor: pointer;
    color: #bababa;
  }
`;

const HomeScreen = () => {
  const [tittoList, setTittoList] = useState<TITTOPost[]>([]);
  const [qnaList, setQnaList] = useState<QNAPost[]>([]);

  const getTITTOBoardList = async () => {
    try {
      const res = await axios.get("/api/matching-board/all?page=0", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      const formattedPosts = res.data.content.slice(0, 3);
      setTittoList(formattedPosts);
    } catch (e) {
      console.log(e);
    }
  };

  const getQNABoardList = async () => {
    try {
      const res = await axios.get("/api/questions/all?page=0", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const formattedPosts = res.data.content.slice(0, 3);
      setTittoList(formattedPosts);
      console.log(tittoList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTITTOBoardList();
  }, []);

  const navigate = useNavigate();
  return (
    <Wrapper>
      <MaxSlider></MaxSlider>
      <IconMenu>
        <MyIcon>
          <img
            src="/imgs/myIcon.svg"
            alt="My Icon"
            onClick={() => navigate("/board/lists/titto/1")}
          />
          티토찾기
        </MyIcon>
        <MyIcon>
          <img
            src="/imgs/myIcon.svg"
            alt="My Icon"
            onClick={() => navigate("/board/lists/qna/1")}
          />
          질문하기
        </MyIcon>
        <MyIcon>
          <img
            src="/imgs/myIcon.svg"
            alt="My Icon"
            onClick={() => navigate("/board/lists/titto/")}
          />
          티칭공간
        </MyIcon>
      </IconMenu>
      <BoardWrapper>
        <BoardDetail onClick={() => navigate("/board/lists/titto/1")}>
          <span style={{ paddingBottom: "10px" }}>
            티토 찾아요
            <ArrowForwardIosIcon />
          </span>

          {tittoList.map((post) => {
            return (
              <HBoarddetail
                key={post.matchingPostId}
                category={"STUDY"}
                title={post.title}
                detail={post.content}
                view={post.viewCount}
                comment={post.reviewCount}
              ></HBoarddetail>
            );
          })}
        </BoardDetail>
        <BoardDetail onClick={() => navigate("/board/lists/qna/1")}>
          <span style={{ paddingBottom: "10px" }}>
            질문 있어요
            <ArrowForwardIosIcon />
          </span>
          <HBoarddetail
            category={"STUDY"}
            title="VS CODE 에러가 났어요 "
            detail="이번에 처음 설치하고 실행하려는데 .... DASD에러가 나요 ㅠㅠ , 어떡해 해야할까......"
            view={10}
            comment={1}
          ></HBoarddetail>
          <HBoarddetail
            category={"STUDY"}
            title="경영관리 이번 과제 질문이.."
            detail="저번 12월 3일 진행한 수업과제 에서 이부분이 이해가 안되요......"
            view={20}
            comment={1}
          ></HBoarddetail>
          <HBoarddetail
            category={"STUDY"}
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
