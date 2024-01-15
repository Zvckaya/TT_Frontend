import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./routes/protected-route";
import AccountRoute from "./routes/account-route";
import MyPageRoutes from "./routes/mypage-route";
import BoardRoutes from "./routes/board-route";
import MessageRoutes from "./routes/message-route";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import TTlayout from "./components/TTlayout";
import HomeScreen from "./screens/home-screen";

const Wrapper = styled.div`
  box-sizing: border-box;
`;
const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <TTlayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <HomeScreen /> },
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
    <Wrapper>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
