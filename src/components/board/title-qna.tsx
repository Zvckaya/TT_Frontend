import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SmsIcon from "@mui/icons-material/Sms";

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #bababa;
`;

const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 10px;
  .solve {
    background-color: #3e68ff;
  }
  .not-solve {
    background-color: #8fa3ea;
  }
  .title {
    font-size: 1.3em;
    font-weight: bold;
    color: black;
  }
  .date {
    color: #bababa;
  }
`;

const SolveDiv = styled.div`
  border-radius: 20px;
  padding: 10px 15px 10px 15px;
  color: white;
  margin-right: 0.5em;
`;

const DetailDiv = styled.div`
  width: 100%;
  color: #bababa;
  font-size: 0.9em;
  padding-top: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  width: 100%;
  padding-top: 10px;
  justify-content: space-between;

  .user-lv {
    color: #bababa;
    margin-right: 0.5em;
  }
  .user-nick {
    font-weight: lighter;
  }

  .show-comment {
    padding-top: 0.5em;
    color: #bababa;
  }
`;

const CategoryDiv = styled.div`
  padding: 10px 20px 10px 20px;
  background-color: #3e68ff;
  font-size: 0.9em;
  color: white;
  border-radius: 5px;
  margin-right: 0.5em;
`;

type QnaTitleProps = {
  solve: boolean;
  title: string;
  detail: string;
  date: string;
  category: string;
  userLv: number;
  userNick: string;
  view: number;
  comment: number;
};

const QnaTitle = ({
  solve,
  title,
  detail,
  date,
  category,
  userLv,
  userNick,
  view,
  comment,
}: QnaTitleProps) => {
  return (
    <Wrapper>
      <MainTitle>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SolveDiv className={solve ? "solve" : "not-solve"}>
            {solve ? "해결됨" : "미해결"}
          </SolveDiv>
          <span className="title">{title}</span>
        </div>
        <span className="date">{date}</span>
      </MainTitle>
      <DetailDiv>
        <p>{detail}</p>
      </DetailDiv>
      <UserInfo>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CategoryDiv>{category}</CategoryDiv>
          <span className="user-lv">LV.{userLv}</span>
          <span className="user-nick">{userNick}</span>
        </div>
        <div className="show-comment">
          <VisibilityIcon style={{ fontSize: "0.8em" }} /> {view}{" "}
          <div style={{ display: "inline-block", width: "10px" }}> </div>
          <SmsIcon style={{ fontSize: "0.8em" }}></SmsIcon> {comment}
        </div>
      </UserInfo>
    </Wrapper>
  );
};

export default QnaTitle;
