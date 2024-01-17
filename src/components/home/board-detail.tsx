import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SmsIcon from "@mui/icons-material/Sms";

enum Category {
  MentorSearch,
  MenteeSearch,
  MakeFriends,
  Question,
}

type HBoardType = {
  category: Category;
  title: string;
  detail: string;
  view: number;
  comment: number;
};

const categoryToString = (category: Category): string => {
  switch (category) {
    case Category.MentorSearch:
      return "멘토찾아요";
    case Category.MenteeSearch:
      return "멘티찾아요";
    case Category.MakeFriends:
      return "어울려요";
    case Category.Question:
      return "질문있어요";
    default:
      return "";
  }
};

const BoardWrapper = styled.div`
  padding-top: 10px;
  width: 100%;
  color: #bababa;
  border-bottom: 2px solid #bababa;
  padding-bottom: 10px;

  .category {
    font-size: 15px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  .title {
    color: black;
    font-size: 18px;
  }
  .detail {
    font-weight: 100;
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 5px;
    color: #4d4d4d;
  }
  span {
    display: inline-block;
  }
  .show-comment {
    font-size: 0.9em;
    color: #bababa;
  }
`;

const HBoardDetail = ({
  category,
  title,
  detail,
  view,
  comment,
}: HBoardType) => {
  return (
    <BoardWrapper>
      <span className="category">{categoryToString(category)}</span>
      <br />
      <span className="title">{title}</span>
      <br />
      <span className="detail">{detail}</span>
      <br />
      <div className="show-comment">
        <VisibilityIcon style={{ fontSize: "0.8em" }} /> {view}{" "}
        <div style={{ display: "inline-block", width: "10px" }}> </div>
        <SmsIcon style={{ fontSize: "0.8em" }}></SmsIcon> {comment}
      </div>
    </BoardWrapper>
  );
};

export default HBoardDetail;
