import styled from "styled-components";

export enum Hcategory {
  멘토구해요,
  멘티구해요,
  어울려요,
  궁금해요,
}

type HDetailProps = {
  category: Hcategory;
  title: string;
  detail: string;
};

const HBoardWrapper = styled.div`
  display: block;
  width: 100%;
  border-bottom: 1px solid #dadada;
  color: #bababa;
  .category {
    font-size: 1em;
  }
  .title {
    color: black;
    font-weight: bold;
  }
  .detail {
    font-size: 1em;
    font-weight: 100;
    padding-top: 30px;
  }
`;

const HBoarddetail = ({ category, title, detail }: HDetailProps) => {
  return (
    <HBoardWrapper>
      <span className="category">{category}</span>
      <br />
      <span className="title">{title}</span>
      <br />
      <span className="detail">{detail}</span>
    </HBoardWrapper>
  );
};

export default HBoarddetail;
