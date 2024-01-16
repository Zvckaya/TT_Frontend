import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignUpWrapper = styled.div`
  width: 800px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const SignUpTitle = styled.div`
  text-align: left;

  p:nth-child(1) {
    font-size: 32px;
    color: #c6c6c6;
    font-weight: bold;
    margin: 10px 0 0 0;
  }

  p:nth-child(2) {
    font-size: 48px;
    font-weight: bold;
    color: #3e68ff;
    margin: 0;

    span {
      color: black;
      font-size: 32px;
      font-weight: bold;
    }
  }

  hr {
    border: 1px solid #c6c6c6;
    margin: 20px auto;
    width: 700px;
  }
`;

const SignUpForm = styled.form`
  width: 600px;
`;

const SignUpInputContainer = styled.div`
  margin-bottom: 30px;
  text-align: left;
  display: flex;
  height: 50px;
  input {
    flex-grow: 1;
    appearance: none;
    border: 1px solid #bababa;
    cursor: pointer;
    border-radius: 7px 0 0 7px;
    outline: 0;
    padding: 10px;
  }

  button {
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    background-color: #3e68ff;
    height: 100%;
    border: 1px solid #3e68ff;
    border-radius: 0 7px 7px 0;
    cursor: pointer;
  }
`;

const SignUpBtnContainer = styled.div`
  width: 600px;
  text-align: center;

  button {
    font-size: 18px;
    height: 50px;
    color: #fff;
    width: 100%;
    font-weight: bold;
    background-color: #3e68ff;
    padding: 10px 20px;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    margin-top: 20px;
  }
`;

const SignUpLabel = styled.label`
  display: block;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const SignUpSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  width: 30%;
  border: 1px solid #bababa;
  border-radius: 7px;
  cursor: pointer;
  outline: none;

  option {
    background-color: #fff;
    color: #333;
  }
`;
const SignUpError = styled.div`
  font-size: 14px;
  color: #ff3d3d;
  font-weight: bold;
  margin-top: -20px;
  margin-bottom: 20px;
`;

const SignUpPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [studentId, setStudentId] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [studentIdError, setStudentIdError] = useState("");

  const handleNicknameCheck = () => {
    // 중복확인 로직 추가
    const isNicknameDuplicate = true; // 지금은 항상 중복

    if (isNicknameDuplicate) {
      setNicknameError("이미 사용되는 닉네임입니다.");
    } else {
      setNicknameError("");
    }
  };

  const handleStudentIdCheck = () => {
    // 중복확인 로직 추가
    const isStudentIdDuplicate = true; // 지금은 항상 중복

    if (isStudentIdDuplicate) {
      setStudentIdError("이미 가입한 학번입니다.");
    } else {
      setStudentIdError("");
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // 제출 로직 나중에 추가
    // 중복확인이 모두 완료되면 다음 페이지로 이동
    navigate("/account/welcome");
  };

  return (
    <SignUpWrapper>
      <SignUpTitle>
        <p>더 나은 캠퍼스 라이프.</p>
        <p>
          TITTO <span>회원가입</span>
        </p>
        <hr />
      </SignUpTitle>
      <SignUpForm onSubmit={handleSubmit}>
        <SignUpLabel>이름</SignUpLabel>
        <SignUpInputContainer>
          <input
            id="name"
            type="text"
            placeholder="이름을 입력해주세요."
            style={{ borderRadius: "7px" }}
          />
        </SignUpInputContainer>
        <SignUpLabel>닉네임</SignUpLabel>
        <SignUpInputContainer>
          <input
            id="nickname"
            type="text"
            placeholder="닉네임을 입력해주세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button type="button" onClick={handleNicknameCheck}>
            중복확인
          </button>
        </SignUpInputContainer>
        <SignUpError>{nicknameError}</SignUpError>
        <SignUpLabel>학번</SignUpLabel>
        <SignUpInputContainer>
          <input
            id="studentId"
            type="text"
            placeholder="학번을 입력해주세요."
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
          <button type="button" onClick={handleStudentIdCheck}>
            중복확인
          </button>
        </SignUpInputContainer>
        <SignUpError>{studentIdError}</SignUpError>
        <SignUpLabel>소속</SignUpLabel>

        <SignUpSelect>
          <option value="option1">옵션 1</option>
          <option value="option2">옵션 2</option>
        </SignUpSelect>

        <SignUpBtnContainer>
          <button type="submit">다음으로</button>
        </SignUpBtnContainer>
      </SignUpForm>
    </SignUpWrapper>
  );
};

export default SignUpPage;
