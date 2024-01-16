import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import TittoBoard from "./board/tittoboard";
import QnaBoard from "./board/qnaboard";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const BoardScreen = () => {
  const [serachParams] = useSearchParams();
  const { boardId, page } = useParams();

  // Provide a default value for page in case it is undefined
  const pageNumber = page ? Number(page) : 1;

  const renderBoard = (boardId: string) => {
    switch (boardId) {
      case "titto":
        return <TittoBoard id={boardId} page={pageNumber} />;
      case "qna":
        return <QnaBoard id={boardId} page={pageNumber} />;
      default:
        return <div>존재하지 않는 게시판입니다.</div>;
    }
  };

  return <Wrapper>{renderBoard(boardId!)}</Wrapper>;
};

export default BoardScreen;
