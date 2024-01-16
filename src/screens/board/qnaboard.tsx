import styled from "styled-components";
import QnaCategoty from "../../components/board/qna-category";
import QnaTitle from "../../components/board/title-qna";
import NumberSelector from "../../components/board/number-selector";

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

const QnaBoard = ({ id, page }: boardUrl) => {
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
            <QnaTitle
              solve={true}
              title="VSCODE 에러"
              date="12/20"
              detail="vscode에러가 났어요... 내공겁니다. 도와주세요.."
              category="소프트웨어 융합"
              userLv={1}
              userNick="JYLEE"
              view={10}
              comment={0}
            />
            <QnaTitle
              solve={true}
              title="VSCODE 에러"
              date="12/20"
              detail="vscode에러가 났어요... 내공겁니다. 도와주세요.."
              category="소프트웨어 융합"
              userLv={1}
              userNick="JYLEE"
              view={10}
              comment={0}
            />
            <QnaTitle
              solve={true}
              title="VSCODE 에러"
              date="12/20"
              detail="vscode에러가 났어요... 내공겁니다. 도와주세요.."
              category="소프트웨어 융합"
              userLv={1}
              userNick="JYLEE"
              view={10}
              comment={0}
            />
            <QnaTitle
              solve={true}
              title="VSCODE 에러"
              date="12/20"
              detail="vscode에러가 났어요... 내공겁니다. 도와주세요.."
              category="소프트웨어 융합"
              userLv={1}
              userNick="JYLEE"
              view={10}
              comment={0}
            />
            <QnaTitle
              solve={true}
              title="VSCODE 에러"
              date="12/20"
              detail="vscode에러가 났어요... 내공겁니다. 도와주세요.."
              category="소프트웨어 융합"
              userLv={1}
              userNick="JYLEE"
              view={10}
              comment={0}
            />
          </PostWrapper>
          <NumberSelector id={id} page={page} pages={7} />
        </MainDiv>

        <CategoryDiv>
          <QnaCategoty />
        </CategoryDiv>
      </BoardWrapper>
    </Wrapper>
  );
};

export default QnaBoard;
