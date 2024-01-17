import { useMemo, useState } from "react";
import styled from "styled-components";

type UserInfo = {
  name: string;
  profileImg: string;
  lv: number;
  id: string;
};

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  border: 2px solid #bababa;
  border-radius: 5px;
  padding: 10px;
`;

const ProfileWrapper = styled.div`
  width: 100%;
  margin-top: 5px;
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
    width: fit-content;

    padding: 10px 15px 10px 15px;
    border-radius: 5px;
    background-color: white;
    border: 2px solid #bababa;
    color: #bababa;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
  }
`;

const DetialWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: left;
  font-size: 20px;
  margin-bottom: 10px;
`;

const CommentDetail = ({ commentId }: { commentId: number }) => {
  const [date, setDate] = useState("2021-09-01");
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "하세기",
    profileImg: "/imgs/UserProfile.png",
    lv: 1,
    id: "hsk",
  });
  const [comment, setComment] = useState("댓글 내용입니다");

  return (
    <Wrapper>
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
          <button>쪽지 보내기</button>
        </div>
      </ProfileWrapper>
      <DetialWrapper>
        <div
          className="detail"
          dangerouslySetInnerHTML={{ __html: comment }}
        ></div>
      </DetialWrapper>
    </Wrapper>
  );
};

export default CommentDetail;
