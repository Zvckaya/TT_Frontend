import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserInfo } from "../board/postView";

const AccountManagementContent = ({}) => {
  const [nicknameError, setNicknameError] = useState("");
  const navigate = useNavigate();
  const [newNickname, setNewNickname] = useState("");
  const [isEditing, setEditing] = useState(false);
  const [userMyfo, setMyInfo] = useState<UserInfo>({
    name: "",
    profileImg: "",
    lv: 1,
    id: "",
    email: "",
  }); // 로그인 유저 정보
  const accessToken = localStorage.getItem("accessToken");
  const handleEditClick = () => {
    setEditing((prevEditing) => !prevEditing);
  };
  const handleCheckAvailability = async () => {
    if (!newNickname) {
      setNicknameError("닉네임을 입력하세요.");
      return;
    }

    try {
      const response = await axios.get(
        `http://titto.duckdns.org/user/check/nickname?nickname=${newNickname}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json;charset=UTF-8",
          },
        }
      );

      if (response.status === 200) {
        // 중복 없음 -> 닉네임 업데이트 수행
        updateNickname();
        setNicknameError("사용 가능한 닉네임입니다.");
      }
    } catch (error: any) {
      if (error.response.status === 409) {
        // 중복 있음 -> 메시지 표시
        setNicknameError("닉네임 중복입니다.");
      } else {
        console.error("Error checking nickname availability:", error);
      }
    }
  };

  const handleSaveClick = async () => {
    await updateNickname();
    setEditing((prevEditing) => !prevEditing);
    loadUserData(); // 닉네임이 업데이트된 후 사용자 정보를 다시 불러옴
    setNicknameError("");
  };
  const updateNickname = () => {
    axios
      .put(
        `http://titto.duckdns.org/user/update`,
        { newNickname },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json;charset=UTF-8",
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if (response.data === "updated successfully") {
          console.log("Nickname updated successfully");
          loadUserData(); // 닉네임 업데이트 후 사용자 정보 다시 불러오기
        } else {
          console.log("Failed to update nickname");
        }
      })
      .catch((error) => {
        console.error("Error updating nickname:", error);
      });
  };

  const loadUserData = () => {
    axios
      .get(`http://titto.duckdns.org/user/info`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json;charset=UTF-8",
        },
      })
      .then((response) => {
        const userData = response.data;
        setMyInfo({
          name: userData.nickname,
          profileImg: userData.profileImg,
          lv: 1,
          id: userData.id,
          email: userData.email,
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    if (accessToken) {
      loadUserData();
    }
  }, [accessToken]);

  return (
    <>
      {isEditing ? (
        <>
          <p>계정 관리</p>
          <p className="subname">기본 정보</p>
          <EditAccountDiv>
            <img src={userMyfo.profileImg} alt="User-Profile" />
            <FormContainer>
              <p className="subname">
                닉네임 <span style={{ color: "red" }}>*</span>
              </p>
              <InputContainer>
                <input
                  type="text"
                  id="newNickname"
                  placeholder={userMyfo.name}
                  onChange={(e) => setNewNickname(e.target.value)}
                />
                <button onClick={handleCheckAvailability} className="checkbtn">
                  중복 확인
                </button>
              </InputContainer>
              <FormError>{nicknameError}</FormError>
            </FormContainer>
            <div className="btn-container">
              <button onClick={handleSaveClick} className="btn">
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
              <img src={userMyfo.profileImg} alt="User-Profile" />
              <p>{userMyfo.name}</p>
              <p className="subname">
                {userMyfo.email}
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
              <img src="/imgs/kakaoimg.png" alt="User-Profile" />
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

const FormError = styled.div`
  font-size: 14px;
  color: #ff3d3d;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default AccountManagementContent;
