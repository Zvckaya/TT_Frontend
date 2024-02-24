import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import userStore from "../stores/UserStore";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const refreshToken = localStorage.getItem("refreshToken");

        if (refreshToken) {
          const refData = {
            accessToken: localStorage.getItem("accessToken"),
            refreshToken: refreshToken,
          };

          const raw = JSON.stringify(refData);

          const res = await axios.post("/api/oauth/refresh", raw, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              "Content-Type": "application/json;charset=UTF-8",
            },
          });

          localStorage.setItem("accessToken", res.data.accessToken);

          const userInfo = await axios.get("/api/user/info", {
            headers: {
              Authorization: `Bearer ${res.data.accessToken}`,
            },
          });

          userStore.setUser({
            nickname: userInfo.data.nickname,
            email: userInfo.data.email,
            socialType: userInfo.data.socialType,
            profileImg: userInfo.data.profileImg,
            currentExperience: userInfo.data.currentExperience,
            totlaExperience: userInfo.data.totlaExperience,
            id: userInfo.data.id,
          });

          setIsLogin(true);

          if (userInfo.data.nickname === null) {
            navigate(`/login/sign_up/${userStore.user?.id}`);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLogin(false);
        navigate("/login/sign_in");
      }
    };

    fetchData();
  }, []); // 빈 배열은 의존성이 없으므로 한 번만 실행됨

  if (isLogin === null) {
    // 데이터 로딩 중인 경우에 대한 처리
    return null;
  }

  return <>{isLogin ? <>{children}</> : <Navigate to="/login/sign_in" />}</>;
};

export default ProtectedRoute;
