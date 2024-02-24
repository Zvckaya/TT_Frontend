import axios from "axios";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const KAKAO_AUTH_URL =
    "https://kauth.kakao.com/oauth/authorize?client_id=07fae5134b01bb2d04d6325ce2e54ecd&redirect_uri=http://localhost:8080/login/oauth2/code/kakao&response_type=code";
  //추후에 .env 파일로 옮기기
  const handleKakaoLogin = () => {
    try {
      window.location.href = KAKAO_AUTH_URL;
    } catch (err) {
      console.log(err);
    }
  };

  const handleKakaoCallback = async () => {
    const code = new URLSearchParams(window.location.search).get("code");
    console.log("코드는:", code);
    try {
      const res = await axios.get("/api/oauth/kakao", {
        params: {
          code: code,
        },
      });
      console.log("카카오 로그인 성공");
      const kakaoAccessToken = res.data.kakaoAccessToken;
      const kakaoRefreshToken = res.data.kakaoRefreshToken;
      console.log(
        "엑세스 토큰:",
        kakaoAccessToken,
        "리프레시 토큰:",
        kakaoRefreshToken
      );
      const dataraw = {
        kakaoAccessToken: kakaoAccessToken,
      };
      const raw = JSON.stringify(dataraw);

      const loginRes = await axios.post("/api/oauth/kakao/login", raw, {
        headers: {
          Authorization: `Bearer ${kakaoAccessToken}`,
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      if (loginRes.status === 200) {
        console.log("로그인 성공");
        localStorage.setItem("accessToken", loginRes.data.accessToken);
        localStorage.setItem("refreshToken", loginRes.data.refreshToken);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      console.log("카카오 로그인 실패");
    }
  };

  useEffect(() => {
    if (window.location.pathname === "/login/oauth2/code/kakao") {
      handleKakaoCallback();
    } else if (window.location.pathname === "/login/oauth2/code/naver") {
      //네이버 로그인 구현
    } else {
      console.log("그냥 로그인.");
    }
  }, []);

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
              <button
                type="button"
                className="btn_login_kakao"
                onClick={handleKakaoLogin}
              >
                <span>카카오 로그인</span>
              </button>
              <button
                type="button"
                className="btn_login_naver"
                onClick={() => navigate("/account/sign_up/:userId")}
              >
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
