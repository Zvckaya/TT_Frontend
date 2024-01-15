import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WelcomeWrapper = styled.div`
  width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
`;

const WelcomeTitle = styled.div`
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
  }
`;

const WelcomeSubTitle = styled.div`
  margin-top: 30px;
  p {
    font-size: 22px;
    font-weight: bold;
    color: #c6c6c6;
    margin: 5px 0;
  }
`;

const WelcomeBtnContainer = styled.div`
  button {
    font-size: 18px;
    color: #fff;
    width: 100%;
    font-weight: bold;
    background-color: #3e68ff;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 20px;
  }
`;

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <WelcomeWrapper>
      <WelcomeTitle>
        <p>더 나은 캠퍼스 라이프.</p>
        <p>TITTO</p>
      </WelcomeTitle>
      <WelcomeSubTitle>
        <p>XXX님 환영해요!</p>
        <p>지식의 공유와 소통이 함께하는 곳, 티토입니다</p>
      </WelcomeSubTitle>
      <WelcomeBtnContainer>
        <button onClick={() => navigate("/")}>시작하기</button>
      </WelcomeBtnContainer>
    </WelcomeWrapper>
  );
};

export default WelcomePage;
