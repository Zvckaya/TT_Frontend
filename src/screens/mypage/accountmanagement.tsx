import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

const AccountManagementContent = ({}) => {
  const navigate = useNavigate();

  const [isEditing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing((prevEditing) => !prevEditing);
  };
  return (
    <>
      {isEditing ? (
        <>
          <p>계정 관리</p>
          <p className="subname">기본 정보</p>
          <EditAccountDiv>
            <img src="/imgs/UserProfile.png" alt="User-Profile" />
            <FormContainer>
              <p className="subname">
                이름 <span style={{ color: "red" }}>*</span>
              </p>
              <InputContainer>
                <input
                  type="text"
                  id="newName"
                  placeholder="이름"
                  style={{ margin: 0 }}
                />
              </InputContainer>
              <p className="subname">
                이메일 <span style={{ color: "red" }}>*</span>
              </p>
              <InputContainer>
                <input type="email" id="newEmail" placeholder="이메일" />
                <button className="checkbtn">중복 확인</button>
              </InputContainer>
              <p className="subname">
                닉네임 <span style={{ color: "red" }}>*</span>
              </p>
              <InputContainer>
                <input type="text" id="newNickname" placeholder="닉네임" />
                <button className="checkbtn">중복 확인</button>
              </InputContainer>
            </FormContainer>
            <div className="btn-container">
              <button onClick={handleEditClick} className="btn">
                저장
              </button>
              <button onClick={handleEditClick} className="btn">
                취소
              </button>
            </div>
          </EditAccountDiv>
        </>
      ) : (
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
                <button className="btn" onClick={handleEditClick}>
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
              <button className="btn" onClick={() => navigate("/")}>
                삭제
              </button>
            </div>
          </AccountDeleteDiv>
        </>
      )}
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

const EditAccountDiv = styled.div`
  padding: 20px;
  border: 1px solid #bababa;

  border-radius: 5px;
  text-align: center;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
    margin-bottom: 20px;
  }

  .btn-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .subname {
    color: black;
  }
`;

const InputContainer = styled.div`
  text-align: left;
  width: 100%;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  input {
    flex: 1;
    outline: 0;
    appearance: none;
    padding: 10px;
    border: 1px solid #bababa;
    border-radius: 5px;
    background-color: #fbfbfd;
    font-size: 14px;
    height: 50px;
    margin-right: 10px;
  }

  .checkbtn {
    height: 50px;
    width: 100px;
    border-radius: 5px;
    background-color: #3e68ff;
    color: white;
    cursor: pointer;
    font-size: 14px;
    box-shadow: none;
    border: none;
    outline: none;
  }
`;

const FormContainer = styled.div`
  text-align: left;
  width: 100%;
  margin-bottom: 20px;
`;
export default AccountManagementContent;
