import styled from "styled-components";

const SignUpWrapper = styled.div`
  width: 800px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const SignUpTitle = styled.div`
  p:nth-child(1) {
    font-size: 32px;
    color: #c6c6c6;
    font-weight: bold;
    margin: 10px 0 0 0;
  }

  hr {
    border: 1px solid #c6c6c6;
    margin: 8px 0;
    margin-bottom: 20px;
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
`;

const SignUpForm = styled.form``;

const SignUpInputContainer = styled.div``;

const SignUpPage = () => {
  return (
    <>
      <SignUpWrapper>
        <SignUpTitle>
          <p>더 나은 캠퍼스 라이프.</p>
          <p>
            TITTO <span>회원가입</span>
          </p>
          <hr />
        </SignUpTitle>
        <SignUpForm>
          <SignUpInputContainer>회원가입 폼</SignUpInputContainer>
          <SignUpInputContainer>회원가입 폼</SignUpInputContainer>
          <SignUpInputContainer>회원가입 폼</SignUpInputContainer>
          <SignUpInputContainer>회원가입 폼</SignUpInputContainer>
        </SignUpForm>
      </SignUpWrapper>
    </>
  );
};

export default SignUpPage;
