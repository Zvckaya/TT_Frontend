import styled from "styled-components";

type titleType = {
  search: boolean;
  title: string;
  author: string;
  date: string;
};

const TitleWrapper = styled.tr`
  height: 43px;

  border-bottom: 1px solid #bababa;

  &:hover {
    background-color: #bababa34;
  }

  td:nth-child(2) {
    text-align: left;
  }
  td:nth-child(4) {
    color: #bababa;
    font-weight: 400;
  }

  .search {
    border-radius: 5px;
    background-color: #8fa3ea;
    padding: 10px;
    color: white;
    font-size: 13px;
  }
  .end {
    border-radius: 5px;
    background-color: #3e68ff;
    color: white;
    padding: 10px;
    font-size: 13px;
  }
`;

const TittoTitle = ({ search, title, author, date }: titleType) => {
  return (
    <TitleWrapper>
      <td>
        <div className={search ? "search" : "end"}>
          {search ? "모집중" : "완료"}
        </div>
      </td>
      <td>{title}</td>
      <td>{author}</td>
      <td>{date}</td>
    </TitleWrapper>
  );
};

export default TittoTitle;
