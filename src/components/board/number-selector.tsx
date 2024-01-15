import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type boardUrl = {
  id: string;
  page: number;
  pages: number;
};

const NumberSelect = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NumDiv = styled.div`
  background-color: #e8eef2;
  line-height: 2em;
`;

const ArrowDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e8eef2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  .first {
  }
  .last {
  }
`;
const NumberSelector = ({ id, page, pages }: boardUrl) => {
  const nowPage = page;
  const viewPage = pages / nowPage;
  return (
    <NumberSelect>
      <ArrowDiv className="">
        <ArrowBackIosIcon style={{ fontSize: "13px" }} />
      </ArrowDiv>
      <NumDiv>1,2,3,4,5</NumDiv>
      <ArrowDiv className="">
        <ArrowForwardIosIcon style={{ fontSize: "13px" }} />
      </ArrowDiv>
    </NumberSelect>
  );
};

export default NumberSelector;
