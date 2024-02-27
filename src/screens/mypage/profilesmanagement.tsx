import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReactQuill from "react-quill";
import { useMemo, useState } from "react";
import axios from "axios";

const ProfileManagementContent = () => {
  const navigate = useNavigate();

  const [oneLineIntro, setOneLineIntro] = useState("");
  const [selfIntro, setSelfIntro] = useState("");
  const modules = useMemo(() => {
    return {
      toolbar: false,
    };
  }, []);
  const handleSaveProfile = () => {
    // 프로필을 저장하는 요청 보내기
    const accessToken = localStorage.getItem("accessToken");

    axios
      .put(
        "/api/user/profile",
        {
          oneLineIntro,
          selfIntro,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        // 프로필 저장 성공 시 작업 수행
        // 예를 들어, 사용자에게 성공 메시지 표시하거나 페이지를 다른 경로로 이동하는 등의 작업 수행 가능
      })
      .catch((error) => {
        console.error("Error saving profile:", error);
        // 프로필 저장 실패 시 작업 수행
        // 예를 들어, 사용자에게 실패 메시지 표시하거나 에러 처리 등의 작업 수행 가능
      });
  };

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
                value={oneLineIntro}
                onChange={setOneLineIntro}
                placeholder="한줄 소개를 입력해주세요."
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
                value={selfIntro}
                onChange={setSelfIntro}
                style={{ height: "200px" }}
              ></ReactQuill>
            </QuillWrapper>
          </ManyLineDiv>
          <div className="btncontainer">
            <button className="btn" onClick={handleSaveProfile}>
              저장
            </button>
          </div>
        </div>
      </ProfileManagementDiv>
      <ProfileBadgeDiv>
        <div className="BadgeContainer">
          <p className="subname">획득 뱃지</p>
          <img src="/imgs/bg.png" alt="User-Profile" />
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
