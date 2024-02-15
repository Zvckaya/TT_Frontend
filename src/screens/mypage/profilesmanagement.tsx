import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReactQuill from "react-quill";
import { useMemo } from "react";

const ProfileManagementContent = () => {
  const navigate = useNavigate();

  const modules = useMemo(() => {
    return {
      toolbar: false,
    };
  }, []);

  return (
    <>
      <ProfileManagementDiv>
        <p>프로필 관리</p>
        <p className="subname">기본 정보</p>
        <div className="ManagementContainer">
          <OneLineDiv>
            <p className="subname">한줄 소개</p>
            <QuillWrapper>
              <ReactQuill
                modules={modules}
                style={{
                  height: "65px",
                }}
              ></ReactQuill>
            </QuillWrapper>
          </OneLineDiv>
          <ManyLineDiv>
            <p className="subname">자기 소개글</p>
            <QuillWrapper>
              <ReactQuill
                modules={modules}
                style={{ height: "200px" }}
              ></ReactQuill>
            </QuillWrapper>
          </ManyLineDiv>
          <div className="btncontainer">
            <button className="btn" onClick={() => navigate("/")}>
              수정
            </button>
          </div>
        </div>
      </ProfileManagementDiv>
      <ProfileBadgeDiv>
        <div className="BadgeContainer">
          <p className="subname">획득 뱃지</p>
          <img src="/imgs/UserProfile.png" alt="User-Profile" />
          <img src="/imgs/UserProfile.png" alt="User-Profile" />
        </div>
      </ProfileBadgeDiv>
    </>
  );
};

const ProfileManagementDiv = styled.div`
  & .ManagementContainer {
    width: 100%;
    margin: 0 auto;
    border: 1px solid #bababa;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 20px;
    text-align: left;
    margin-top: 30px;
    display: flex;
    align-items: left;
    flex-direction: column;
  }
`;

const ProfileBadgeDiv = styled.div`
  margin-top: 30px;

  & .BadgeContainer {
    width: 100%;
    border: 1px solid #bababa;
    height: 200px;
    border-radius: 5px;
    padding: 20px;

    img {
      width: 60px;
      height: 80px;
      border-radius: 10%;
      margin-right: 20px;
      margin-top: 20px;
    }
  }
`;

const OneLineDiv = styled.div`
  margin-bottom: 50px;
`;

const ManyLineDiv = styled.div`
  margin-bottom: 30px;
`;

const QuillWrapper = styled.div`
  width: 100%;
  text-align: left;
`;

export default ProfileManagementContent;
