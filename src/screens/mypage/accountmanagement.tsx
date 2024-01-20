import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const AccountManagementContent = ({}) => {
  const navigate = useNavigate();
  return (
    <>
      <AccountManagementDiv>
        <p>계정 관리</p>
        <p className="subname">기본 정보</p>
        <div className="ManagementContainer">
          <img src="/imgs/UserProfile.png" alt="User-Profile" />

          <p>농부왕</p>
          <p className="subname">
            lzvckaya@gmail.com
            <span className="icon">
              <CheckCircleIcon style={{ color: "#3e68ff" }} />
            </span>
            <span>인증완료</span>
          </p>

          <div className="btncontainer">
            <button className="btn" onClick={() => navigate("/board/write/")}>
              수정
            </button>
          </div>
        </div>
      </AccountManagementDiv>
      <AccountOauthDiv>
        <p>계정 연동</p>
        <div className="OauthContainer">
          <img src="/imgs/UserProfile.png" alt="User-Profile" />
          <p>KaKao로 가입했어요</p>
        </div>
      </AccountOauthDiv>
      <AccountDeleteDiv>
        <p>계정 삭제</p>
        <div className="DeleteContainer">
          <p className="subname">계정 삭제 내용</p>
          <button className="btn" onClick={() => navigate("/board/write/")}>
            삭제
          </button>
        </div>
      </AccountDeleteDiv>
    </>
  );
};

const AccountManagementDiv = styled.div`
  & .ManagementContainer {
    width: 100%;
    margin: 0 auto;
    border: 1px solid #bababa;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    text-align: center;
    margin-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
    margin-bottom: 20px;
  }
  span {
    margin-left: 10px;
  }
`;
const AccountOauthDiv = styled.div`
  margin-top: 30px;

  & .OauthContainer {
    width: 100%;
    border: 1px solid #bababa;
    height: 100px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
`;

const AccountDeleteDiv = styled.div`
  margin-top: 30px;
  & .DeleteContainer {
    width: 100%;
    border: 1px solid #bababa;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 10px;
    text-align: left;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;
export default AccountManagementContent;
