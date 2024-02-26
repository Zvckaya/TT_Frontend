import styled from "styled-components";
import QnaCategoty from "../../components/board/qna-category";
import QnaTitle from "../../components/board/title-qna";
import NumberSelector from "../../components/board/number-selector";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export type boardUrl = {
  id: string;
  page: number;
};

const Wrapper = styled.div`
  width: 100%;
`;

const BoardWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`;

const CategoryDiv = styled.div`
  width: 28%;
`;

const MainDiv = styled.div`
  width: 70%;
  text-align: left;
`;

const SolveDiv = styled.div`
  margin-top: 10px;

  width: 100%;
  border-bottom: 1px solid #bababa;
  display: flex;

  .select {
    color: black;
    border-bottom: 2px solid #3e68ff;
  }
`;

const SolveTitle = styled.div`
  padding: 10px 15px 10px 15px;
  font-size: 20px;
  color: #bababa;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const SearchDiv = styled.div`
  display: flex;
  padding: 10px 0 10px 0;
  justify-content: space-between;

  border-bottom: 1px solid #bababa;

  input {
    border: 1px solid #bababa;
    border-radius: 5px;
    width: 85%;
    padding-left: 10px;
    font-size: 20px;
  }

  input:focus {
    outline: none;
    color: black;
  }
  input:focus::placeholder {
    opacity: 0;
  }
  button {
    width: 14%;
    border: none;
    background-color: #3e68ff;
    color: white;
    padding: 15px;
    border-radius: 5px;
  }
  button:hover {
    cursor: pointer;
  }
`;

const PostWrapper = styled.div`
  width: 100%;
`;
const SubmitWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  justify-content: right;
  display: flex;
  .btn {
    width: 100px;
    height: 35px;
    border-radius: 5px;
    text-align: center;
    line-height: 2em;
    border: none;
    background-color: #3e68ff;
    color: white;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    margin-left: 10px;
  }
`;

type Post = {
  id: number;
  authrId: number;
  authorNickname: string;
  department: string;
  status: string;
  title: string;
  content: string;
  answerList: Array<string>;
  viewCount: number;
  accepted: false;
};

const changeDepartment = (department: string) => {
  switch (department) {
    case "HUMANITIES":
      return "인문융합콘텐츠";
    case "MANAGEMENT":
      return "경영";
    case "SOCIETY":
      return "사회융합";
    case "MEDIA_CONTENT":
      return "미디어콘텐츠융합";
    case "FUTURE_FUSION":
      return "미래융합";
    case "SOFTWARE":
      return "소프트웨어융합";
  }
};

const sliceContent = (content: string) => {
  if (content.length > 50) {
    return content.slice(0, 50) + "...";
  } else {
    return content;
  }
};

const QnaBoard = ({ id, page }: boardUrl) => {
  const { boardId } = useParams();
  const [searchParmas] = useSearchParams();
  const navigate = useNavigate();
  const [pages, setPages] = useState(0);
  const [posts, setPost] = useState<Post[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchPost = async () => {
      if (searchParmas.get("search")) {
      } else if (searchParmas.get("status")) {
      } else {
        try {
          const res = await axios.get("/api/questions/posts", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          console.log(res.data);
          setPages(res.data.totalPages);
          const formattedPost = res.data.content.map((post: Post) => ({
            ...post,
            content: sliceContent(post.content),
            department: changeDepartment(post.department),
          }));
          setPost(formattedPost);
        } catch (e) {
          console.log(e);
        }
      }
    };

    fetchPost();
  }, [page]);

  return (
    <Wrapper>
      <BoardWrapper>
        <MainDiv>
          <span
            style={{ color: "#3E68FF", fontWeight: "bold", fontSize: "25px" }}
          >
            질문 게시판
          </span>
          <SolveDiv>
            <SolveTitle className="select">전체</SolveTitle>
            <SolveTitle>미해결</SolveTitle>
            <SolveTitle>해결</SolveTitle>
          </SolveDiv>
          <SearchDiv>
            <input type="text" placeholder="제목 검색하기" />
            <button>검색</button>
          </SearchDiv>
          <PostWrapper>
            {posts.map((post) => (
              <QnaTitle
                key={post.id}
                id={post.id}
                solve={post.status === "UNSOLVED" ? false : true}
                title={post.title}
                date={"12/20"}
                detail={post.content}
                category={post.department}
                userLv={1}
                userNick={post.authorNickname}
                view={post.viewCount}
                comment={post.answerList.length}
              ></QnaTitle>
            ))}
          </PostWrapper>
          <SubmitWrapper>
            <div
              className="btn"
              onClick={() => navigate("/board/write/" + boardId)}
            >
              글쓰기
            </div>
          </SubmitWrapper>
          <NumberSelector id={id} page={page} pages={pages} />
        </MainDiv>

        <CategoryDiv>
          <QnaCategoty />
        </CategoryDiv>
      </BoardWrapper>
    </Wrapper>
  );
};

export default QnaBoard;
