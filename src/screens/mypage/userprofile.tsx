import styled from "styled-components";
import HBoarddetail from "../../components/home/board-detail";
const UserProfile = () => {
  return (
    <>
      <UserProfileWrapper>
        <UserProfileMainContainer>
          <UserProfileMainProfileContainer>
            <img src="/imgs/UserProfile.png" alt="User-Profile"></img>
            <UserProfileMainTextContainer>
              <h1>허남규</h1>
              <h2>LV.2</h2>
              <p>19학번</p>
              <p>컴퓨터공학과</p>
            </UserProfileMainTextContainer>
          </UserProfileMainProfileContainer>

          <UserProfileMainIntroduceContainer>
            <UserProfileMainIntroduceTopContainer>
              <h1>바다는 비에 젖지 않는다.</h1>
              <p>
                안녕하세요! 저는 컴퓨터 공학과 대학생으로, 프로그래밍과
                알고리즘에 높은 흥미를 가지고 있습니다. 팀 프로젝트에서의 협업
                능력과 문제 해결 능력을 키우며 새로운 기술과 도전에 열려있는
                학생입니다.
              </p>
            </UserProfileMainIntroduceTopContainer>
            <UserProfileMainIntroduceBottomContainer>
              <h1>보유 뱃지</h1>
              <img src="/imgs/UserProfile.png" alt="User-Profile"></img>
              <img src="/imgs/UserProfile.png" alt="User-Profile"></img>
            </UserProfileMainIntroduceBottomContainer>
          </UserProfileMainIntroduceContainer>

          <UserProfileMainLevelContainer>
            <div>
              <p>다음 레벨까지</p>
              <h1>210내공남았어요.</h1>
              <Progress>
                <Dealt />
              </Progress>
              <p>답변한 글 수</p>
              <h1>총 17개 답변했어요.</h1>
              <p>채택된 글 수</p>
              <h1>총 7개 채택됐어요.</h1>
            </div>
            <p>채택률</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1>53%</h1>
              <div className="btn">쪽지 보내기</div>
            </div>
          </UserProfileMainLevelContainer>
        </UserProfileMainContainer>

        <UserProfileSubContainer>
          <UserProfileStudyContainer>
            <p>스터디 목록</p>
          </UserProfileStudyContainer>
          <UserProfileWritePostContainer>
            <p>작성한 글</p>
            <UserProfileWritePostInner>
              <HBoarddetail
                category={0}
                title="C++ 한솥밥 하실분구해요!"
                detail="안녕하세요, 혹시 C++한솥밥 하실 분 계신가요? 저는 저번학기 김학수 C++ 1등 으로 수...."
                view={41}
                comment={4}
              />
              <HBoarddetail
                category={0}
                title="C++ 한솥밥 하실분구해요!"
                detail="안녕하세요, 혹시 C++한솥밥 하실 분 계신가요? 저는 저번학기 김학수 C++ 1등 으로 수...."
                view={41}
                comment={4}
              />
              <HBoarddetail
                category={0}
                title="C++ 한솥밥 하실분구해요!"
                detail="안녕하세요, 혹시 C++한솥밥 하실 분 계신가요? 저는 저번학기 김학수 C++ 1등 으로 수...."
                view={41}
                comment={4}
              />{" "}
              <HBoarddetail
                category={0}
                title="C++ 한솥밥 하실분구해요!"
                detail="안녕하세요, 혹시 C++한솥밥 하실 분 계신가요? 저는 저번학기 김학수 C++ 1등 으로 수...."
                view={41}
                comment={4}
              />
              <HBoarddetail
                category={0}
                title="C++ 한솥밥 하실분구해요!"
                detail="안녕하세요, 혹시 C++한솥밥 하실 분 계신가요? 저는 저번학기 김학수 C++ 1등 으로 수...."
                view={41}
                comment={4}
              />
              <HBoarddetail
                category={0}
                title="C++ 한솥밥 하실분구해요!"
                detail="안녕하세요, 혹시 C++한솥밥 하실 분 계신가요? 저는 저번학기 김학수 C++ 1등 으로 수...."
                view={41}
                comment={4}
              />
            </UserProfileWritePostInner>
          </UserProfileWritePostContainer>
        </UserProfileSubContainer>
      </UserProfileWrapper>
    </>
  );
};

const UserProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const UserProfileMainContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
`;

const UserProfileMainProfileContainer = styled.div`
  flex: 2.5;
  background-color: #f5f5f5;
  border-radius: 10px 0 0 10px;
  border: 3px solid #3e68ff;
  border-right: none;
  padding: 20px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
  }
`;

const UserProfileMainTextContainer = styled.div`
  padding: 20px;
  text-align: left;

  h1 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #3e68ff;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const UserProfileMainIntroduceContainer = styled.div`
  border: 3px solid #ccc;
  border-right: none;
  border-left: none;
  padding: 20px;
  text-align: left;
  flex: 4.5;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const UserProfileMainIntroduceTopContainer = styled.div`
  margin-bottom: 50px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16 px;
    overflow-y: auto;
    font-weight: semi-bold;
    height: 100px;
  }
`;

const UserProfileMainIntroduceBottomContainer = styled.div`
  img {
    margin: 5px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: relative;
  }
`;

const UserProfileMainLevelContainer = styled.div`
  border-radius: 0 10px 10px 0;
  border: 3px solid #ccc;
  border-left: 2px solid #ccc;
  flex: 3;

  padding: 20px;
  text-align: left;

  p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
  }
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
const Progress = styled.div`
  width: 300px;
  height: 10px;
  background-color: #ccc;
  overflow: hidden;
  margin-bottom: 20px;
`;
const Dealt = styled.div`
  width: 100%;
  height: 100%;
  background-color: #3e68ff;
  transform: scaleX(0.3);
  transform-origin: left;
  transition: transform 0.3s ease;
`;
const UserProfileSubContainer = styled.div`
  text-align: left;
  display: flex;
  flex: 1;
  margin-top: 20px;

  p {
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const UserProfileStudyContainer = styled.div`
  border: 2px solid #ccc;
  border-radius: 10px;
  margin-right: 20px;
  flex: 2.6;
`;

const UserProfileWritePostContainer = styled.div`
  flex: 7.4;
  border: 2px solid #ccc;
  border-radius: 10px;
`;

const UserProfileWritePostInner = styled.div`
  padding: 20px;
`;

export default UserProfile;
