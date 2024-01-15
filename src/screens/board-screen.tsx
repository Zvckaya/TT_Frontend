import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import TittoBoard from "./board/tittoboard";
import QnaBoard from "./board/qnaboard";

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid red;
  margin-top: 10px;
`;

const BoardScreen = () => {
  const [serachParams] = useSearchParams();
  const { boardId, page } = useParams();
  console.log(boardId);

  return (
    <Wrapper>{boardId === "titto" ? <TittoBoard /> : <QnaBoard />}</Wrapper>
  );
};

export default BoardScreen;
