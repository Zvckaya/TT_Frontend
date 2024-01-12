import React from "react";
import { Routes, Route } from "react-router-dom";

const BoardRoutes = () => {
  return (
    <Routes>
      <Route path="lists/:boardId/:page" element={<h1>보드 페이지</h1>} />
      <Route
        path="view/:boardId/:postId"
        element={<h1>보드 개인 글 조회</h1>}
      />
      <Route path="write/:boardId" element={<h1>글 작성</h1>} />
      <Route path="modify/:boardId/:postId" element={<h1>글 수정</h1>} />
    </Routes>
  );
};

export default BoardRoutes;
