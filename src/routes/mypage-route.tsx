import React from "react";
import { Routes, Route } from "react-router-dom";

const MyPageRoutes = () => {
  return (
    <>
      <div>하...</div>
      <Routes>
        <Route path="/" element={<h1>마이페이지</h1>} />
        <Route path="profile" element={<h1>자기 소개글 작성 및 수정</h1>} />
        <Route
          path="users/:userId/profile"
          element={<h1>상대 프로필 조회</h1>}
        />
      </Routes>
    </>
  );
};

export default MyPageRoutes;
