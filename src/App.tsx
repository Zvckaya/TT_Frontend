import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./routes/protected-route";
import MyNav from "./components/myNav";
import AccountRoute from "./routes/account-route";
import styled from "styled-components";
import MyPageRoutes from "./routes/mypage-route";
import BoardRoutes from "./routes/board-route";
import MessageRoutes from "./routes/message-route";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MyNav />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <h1>홈</h1> },
      { path: "mypage/*", element: <MyPageRoutes /> },
      { path: "message/*", element: <MessageRoutes /> },
      { path: "board/*", element: <BoardRoutes /> },
    ],
  },
  {
    path: "/account",
    element: <AccountRoute />,
    children: [
      { path: "sign_in", element: <h1>로그인 페이지</h1> },
      { path: "sign_up/:userId", element: <h1>회원가입 페이지</h1> },
      { path: "welcome", element: <h1>회원가입 완료</h1> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
