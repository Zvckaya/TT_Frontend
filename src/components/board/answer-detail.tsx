import styled from "styled-components";
import userStore from "../../stores/UserStore";
import { AnswerInfo } from "../../screens/board/anserView";
import axios from "axios";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #bababa;
  border-radius: 5px;
`;
const ProfileWrapper = styled.div`
  width: 100%;

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
  .btnfix {
    background-color: #3e68ff;
    color: white;
    cursor: pointer;

    &:active {
      background-color: #8fa3ea;
    }
  }

  .modify {
    background-color: white;
    color: #bababa;
    border: 1px solid #bababa;
  }
`;

const DetailWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  text-align: left;
  font-size: 20px;
  margin-bottom: 10px;
`;

const AnserDetail = (answer: AnswerInfo) => {
  const answerdelete = () => {
    console.log(answer.id);
    const confirm = window.confirm("정말 삭제하시겠습니까?");
    if (confirm) {
      axios
        .delete(`/api/answers/${answer.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            Accept: "application/json;charset=UTF-8",
          },
        })
        .then((res) => {
          window.location.reload();
        });
    }
  };

  return (
    <Wrapper>
      <ProfileWrapper>
        <div className="profileBox">
          <img src={answer.profile} alt="User-Profile" />
          <div className="userdiv">
            <div className="nick">{answer.authorNickname}</div>
            <div className="lv">
              LV.{answer.level} |{" "}
              {new Date(answer.updateDate).toLocaleString("ko-KR")}
            </div>
          </div>
        </div>

        <div>
          {userStore.getUser()?.id === Number(answer.authorId) ? (
            <div>
              <button className="modify">수정</button>
              <button onClick={answerdelete}>삭제</button>
            </div>
          ) : (
            <div></div>
          )}
          {answer.isEditable && !answer.isSolved ? (
            <div>
              <button>채택</button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </ProfileWrapper>
      <DetailWrapper>
        <div
          className="detail"
          dangerouslySetInnerHTML={{ __html: answer.content }}
        ></div>
      </DetailWrapper>
    </Wrapper>
  );
};

export default AnserDetail;
