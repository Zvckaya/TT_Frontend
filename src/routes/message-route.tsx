import { Routes, Route } from "react-router-dom";

const MessageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>내 메세지함</h1>} />
      <Route path="/:id" element={<h1>해당 메세지함 내역 조회</h1>} />
    </Routes>
  );
};

export default MessageRoutes;
