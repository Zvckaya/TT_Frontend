import styled from "styled-components";

const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LoginForm = styled.form`
  width: 450px;
  margin: 0 auto;
`;

const LoginMainTitle = styled.div`
  text-align: center;
  p:nth-child(1) {
    font-size: 64px;
    font-weight: bold;
    color: #3e68ff;
    margin-bottom: 0px;
  }
  p:nth-child(2) {
    font-size: 32px;
    color: #c6c6c6;
    font-weight: bold;
    margin: 10px 0px 0px 0px;
  }
`;

const LoginTitleContainer = styled.div`
  margin: 30px auto 0;
  padding: 20px 28px;
  border: 1px solid #c6c6c6;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 5px 8px 0 rgba(68, 68, 68, 0.04);
  display: flex;
  flex-direction: column;
`;

const LoginTitle = styled.div`
  text-align: center;
  margin-bottom: 20px;
  span {
    color: #c6c6c6;
    font-size: 18px;
    font-weight: bold;
  }
  hr {
    border: 1px solid #c6c6c6;
    margin: 8px 0;
    margin-bottom: 20px;
  }
`;

const LoginBtnContainer = styled.div`
  text-align: center;

  button {
    width: 80%;
    box-sizing: border-box;
    padding: 13px 0;
    border-radius: 12px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .btn_login_kakao {
    border: 1px solid #fee500;
    background-color: #fee500;
    span {
      color: black;
      font-weight: bold;
      font-size: 15px;
    }
  }

  .btn_login_naver {
    border: 1px solid #03c75a;
    background-color: #03c75a;
    span {
      color: white;
      font-weight: bold;
      font-size: 15px;
    }
  }
`;

const LoginPage = () => {
  return (
    <>
      <LoginPageWrapper>
        <LoginForm>
          <LoginMainTitle>
            <p>TITTO</p>
            <p>더 나은 캠퍼스 라이프.</p>
          </LoginMainTitle>

          <LoginTitleContainer>
            <LoginTitle>
              <span>다음으로 로그인</span>
              <hr />
            </LoginTitle>
            <LoginBtnContainer>
              <button type="submit" className="btn_login_kakao">
                <span>카카오 로그인</span>
              </button>
              <button type="submit" className="btn_login_naver">
                <span>네이버 로그인</span>
              </button>
            </LoginBtnContainer>
          </LoginTitleContainer>
        </LoginForm>
      </LoginPageWrapper>
    </>
  );
};

export default LoginPage;
