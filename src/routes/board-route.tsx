// BoardRoutes 컴포넌트
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import BoardScreen from "../screens/board-screen";
import PostForm from "../screens/board/postForm";
import PostView from "../screens/board/postView";
import NotFound from "../screens/notfound";

const BoardRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="lists/:boardId/:page" element={<BoardScreen />} />
      <Route path="lists/:boardId/:page/:search" element={<BoardScreen />} />
      <Route path="view/:boardId/:postId" element={<PostView />} />
      <Route path="write/:boardId" element={<PostForm />} />
      <Route path="modify/:boardId/:postId" element={<PostForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default BoardRoutes;
