import { Routes, Route } from "react-router-dom";
import UserProfile from "../screens/mypage/userprofile";
import MyProfile from "../screens/mypage/myprofile";

const MyPageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MyProfile />} />
        <Route path="profile" element={<h1>자기 소개글 작성 및 수정</h1>} />
        <Route path="users/:userId/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default MyPageRoutes;
