import { Routes, Route } from "react-router-dom";
import UserProfile from "../screens/mypage/userprofile";
import NotFound from "../screens/notfound";

const MyPageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>마이페이지</h1>} />
        <Route path="profile" element={<h1>자기 소개글 작성 및 수정</h1>} />
        <Route path="users/:userId/profile" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default MyPageRoutes;
