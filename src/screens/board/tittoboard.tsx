import styled from "styled-components";
import MaxSlider from "../../components/slider-max";
import SearchIcon from "@mui/icons-material/Search";
import TittoTitle from "../../components/board/title-titto";
import NumberSelector from "../../components/board/number-selector";

type boardUrl = {
  id: string;
  page: number;
};

const Wrapper = styled.div`
  width: 100%;
`;

const BoardWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

const MainDiv = styled.div`
  width: 70%;
  text-align: left;
`;
const SearchDiv = styled.div`
  width: 100%;
  border: 1px solid #bababa;
  border-radius: 10px;
  text-align: left;
  padding-left: 10px;
  justify-content: space-around;
  margin-bottom: 10px;
  input {
    width: 90%;
    height: 60px;
    font-size: 20px;
    font-weight: 300;
    color: #bababa;
    border: none;
  }
  input:focus {
    outline: none;
    color: black;
  }
  button {
    vertical-align: middle;
    border: none;
    background-color: white;
  }
  button:hover {
    cursor: pointer;
  }
`;

const PostWrapper = styled.div`
  width: 100%;
  border: 1px solid #bababa;
  border-radius: 5px;
  margin-top: 10px;
  table {
    width: 100%;
    padding: 10px;
    font-weight: bold;
    text-align: center;
  }
  thead th {
    padding: 10px;
    border-bottom: 1px solid #bababa;
  }
  td {
    padding: 10px;
  }
  td:nth-child(1) {
    width: 10%;
  }
  td:nth-child(2) {
    width: 55%;
  }
  td:nth-child(3) {
    width: 17%;
  }
  td:nth-child(4) {
    width: 17%;
  }
`;
const CategoryDiv = styled.div`
  width: 30%;
`;

const TittoBoard = ({ id, page }: boardUrl) => {
  const pages = 32;
  return (
    <Wrapper>
      <MaxSlider height="250px"></MaxSlider>
      <BoardWrapper>
        <MainDiv>
          <SearchDiv>
            <input type="text" placeholder="제목 검색하기" />
            <button>
              <SearchIcon style={{ fontSize: "50px" }}></SearchIcon>
            </button>
          </SearchDiv>
          <span
            style={{ color: "#3E68FF", fontWeight: "bold", fontSize: "25px" }}
          >
            티토 게시판
          </span>
          <PostWrapper>
            <table>
              <thead>
                <tr>
                  <th>상태</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                <TittoTitle
                  search={false}
                  title="멘티 선착순 1명"
                  author="동큔큔"
                  date="01/01"
                />
                <TittoTitle
                  search={false}
                  title="멘티 선착순 1명"
                  author="동큔큔"
                  date="01/01"
                />
                <TittoTitle
                  search={false}
                  title="멘티 선착순 1명"
                  author="동큔큔"
                  date="01/01"
                />
                <TittoTitle
                  search={false}
                  title="멘티 선착순 1명"
                  author="동큔큔"
                  date="01/01"
                />
                <TittoTitle
                  search={false}
                  title="멘티 선착순 1명"
                  author="동큔큔"
                  date="01/01"
                />
                <TittoTitle
                  search={false}
                  title="멘티 선착순 1명"
                  author="동큔큔"
                  date="01/01"
                />
                <TittoTitle
                  search={false}
                  title="멘티 선착순 1명"
                  author="동큔큔"
                  date="01/01"
                />
              </tbody>
            </table>
          </PostWrapper>
          <NumberSelector id={id} page={page} pages={pages} />
        </MainDiv>

        <CategoryDiv>카테고리</CategoryDiv>
      </BoardWrapper>
    </Wrapper>
  );
};

export default TittoBoard;
