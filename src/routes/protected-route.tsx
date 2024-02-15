import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import userStore from "../stores/UserStore";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      //만약 로컬스토리지에 토큰이 있다면
      axios
        .get("/api/user/info", {
          //유저 정보를 가져오기
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setIsLogin(true);
          userStore.setUser(res.data);
        });
    }
  });

  if (isLogin) {
    return <Navigate to="/account/sign_in"></Navigate>;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
