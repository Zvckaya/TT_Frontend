import { Title } from "@mui/icons-material";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SmsIcon from "@mui/icons-material/Sms";
import CommentDetail from "../../components/board/comment-detail";
import ReactQuill from "react-quill";

type UserInfo = {
  name: string;
  profileImg: string;
  lv: number;
  id: string;
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  text-align: left;
  padding-bottom: 30px;
`;

const CategoryWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  .categoryBox {
    width: fit-content;
    padding: 10px;
    background-color: #3e68ff;
    border-radius: 5px;
    color: white;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;
  text-align: left;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .profileBox {
    display: flex;
    text-align: left;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .userdiv {
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      .nick {
        font-size: 20px;
        font-weight: bold;
      }
      .lv {
        font-size: 15px;
        color: #ccc;
      }
    }
  }

  button {
    width: 70px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #3e68ff;
    color: white;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    margin-left: 10px;
  }

  .modify {
    background-color: white;
    color: #bababa;
    border: 1px solid #bababa;
  }
`;

const DetailWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;

  .messageDiv {
    width: 10%;

    .msgBtn {
      margin: 0 auto;
      width: 90%;
      border: 2px solid #bababa;
      border-radius: 5px;
      padding: 10px;
      font-weight: bold;
      color: #bababa;

      &:hover {
        background-color: #bababa;
        color: white;
      }
    }
  }
  .detail {
    width: 88%;

    text-align: left;
  }
`;

const ViewWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  color: gray;
  text-align: left;
  padding-left: 12%;
  .show-comment {
  }
`;

const CommentWrapper = styled.div`
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid #bababa;

  text-align: left;
`;

const QuillWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  text-align: left;
`;

const SubmitWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  justify-content: right;
  display: flex;
  .btn {
    width: 100px;
    height: 35px;
    border-radius: 5px;
    text-align: center;
    line-height: 2em;
    border: none;
    background-color: #3e68ff;
    color: white;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    margin-left: 10px;
  }
`;

const PostView = () => {
  const [title, setTitles] = useState("제목입니다");
  const [detail, setDetail] = useState(
    "<p>안녕하세요</p><p>반갑습니다</p><br/><br/><h1>하세기!</h1>"
  );
  const [category, setCategory] = useState("카테고리");
  const [date, setDate] = useState("2021-09-01");
  const { boardId = "default", postId } = useParams();
  const [view, setView] = useState(13);
  const [comment, setComment] = useState(2);

  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "하세기",
    profileImg: "/imgs/UserProfile.png",
    lv: 1,
    id: "hsk",
  });

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "underline"],
        ],
      },
    };
  }, []);

  useEffect(() => {
    //여기서 api통신
  }, []);

  return (
    <Wrapper>
      <CategoryWrapper>
        <div className="categoryBox">{category}</div>
      </CategoryWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <ProfileWrapper>
        <div className="profileBox">
          <img src={userInfo.profileImg} alt="User-Profile" />
          <div className="userdiv">
            <div className="nick">{userInfo.name}</div>

            <div className="lv">
              LV.{userInfo.lv} | {date}
            </div>
          </div>
        </div>
        <div>
          {userInfo.name === "하세기" && ( //로컬에서의 검증
            <div>
              <button className="modify" onClick={() => alert("수정")}>
                수정
              </button>
              <button onClick={() => alert("삭제")}>삭제</button>
            </div>
          )}
        </div>
      </ProfileWrapper>
      <DetailWrapper>
        <div className="messageDiv">
          <div className="msgBtn">쪽지 보내기</div>
        </div>
        <div
          className="detail"
          dangerouslySetInnerHTML={{ __html: detail }}
        ></div>
      </DetailWrapper>
      <ViewWrapper>
        <div className="show-comment">
          <VisibilityIcon style={{ fontSize: "0.8em" }} /> {view}{" "}
          <div style={{ display: "inline-block", width: "10px" }}> </div>
          <SmsIcon style={{ fontSize: "0.8em" }}></SmsIcon> {comment}
        </div>
      </ViewWrapper>
      <CommentWrapper>
        <span style={{ fontWeight: "bold", fontSize: "20px" }}>댓글 0개</span>
        <CommentDetail commentId={1} />
      </CommentWrapper>
      <QuillWrapper>
        <ReactQuill modules={modules} style={{ height: "200px" }}></ReactQuill>
      </QuillWrapper>
      <SubmitWrapper>
        <div className="btn">등록</div>
      </SubmitWrapper>
    </Wrapper>
  );
};

export default PostView;
