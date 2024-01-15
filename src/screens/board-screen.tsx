import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import TittoBoard from "./board/tittoboard";
import QnaBoard from "./board/qnaboard";

type boardUrl = {
  id: string;
  page: number;
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const BoardScreen = () => {
  const [serachParams] = useSearchParams();
  const { boardId, page } = useParams();

  return (
    <Wrapper>
      {boardId === "titto" ? (
        <TittoBoard id={boardId} page={Number(page)} />
      ) : (
        <QnaBoard />
      )}
    </Wrapper>
  );
};

export default BoardScreen;
