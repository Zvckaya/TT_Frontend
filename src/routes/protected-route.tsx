import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import userStore from "../stores/UserStore";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      const refData = {
        accessToken: localStorage.getItem("accessToken"),
        refreshToken: refreshToken,
      };

      const raw = JSON.stringify(refData);

      axios
        .post("/api/oauth/refresh", raw, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json;charset=UTF-8",
          },
        })
        .then((res) => {
          localStorage.setItem("accessToken", res.data.accessToken);
          axios
            .get("/api/user/info", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            })
            .then((res) => {
              setIsLogin(true);
              userStore.setUser({
                nickname: res.data.nickname,
                email: res.data.email,
                socialType: res.data.socialType,
                profileImg: res.data.profileImg,
                currentExperience: res.data.currentExperience,
                totlaExperience: res.data.totlaExperience,
                id: res.data.id,
              });

              if (res.data.nickname === null) {
                navigate(`/login/sign_up/${userStore.user?.id}`);
              }
            });
        });
    }
  }, []);

  return { isLogin } ? <>{children}</> : <Navigate to="/login/sign_in" />;
};

export default ProtectedRoute;
