// BoardRoutes 컴포넌트
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import BoardScreen from "../screens/board-screen";
import PostForm from "../screens/board/postForm";
import ModifiyBoard from "../screens/board/modifyForm";

const BoardRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="lists/:boardId/:page" element={<BoardScreen />} />
      <Route
        path="view/:boardId/:postId"
        element={<h1>보드 개인 글 조회</h1>}
      />
      <Route path="write/:boardId" element={<PostForm />} />
      <Route path="modify/:boardId/:postId" element={<ModifiyBoard />} />
    </Routes>
  );
};

export default BoardRoutes;
