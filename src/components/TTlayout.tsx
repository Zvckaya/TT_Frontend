import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.nav`
  width: 100%;
  background-color: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #ccc;
`;

const NavUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  width: 1100px;
  border: 1px solid red;
`;

const NavLi = styled.li`
  margin-right: 30px;
  display: flex;
  align-items: center;
  position: relative;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 16px;
    position: relative;
    &:after {
      content: "";
      display: block;
      height: 2px;
      width: 0;
      background: #3e68ff;
      transition: width 0.3s;
      position: absolute;
      bottom: -5px;
    }
  }

  &:hover a:after {
    width: 100%;
  }
`;

const NavLogo = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #3e68ff;
  margin: 0 20px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 1100px;
  text-align: center;
`;

const TTlayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavWrapper>
        <NavUl>
          <NavLi>
            <Link to="/">
              <NavLogo>TITTO</NavLogo>
            </Link>
          </NavLi>
          <NavLi>
            <Link to="/board/lists/titto/1">티토찾아요 </Link>
          </NavLi>
          <NavLi>
            <Link to="/board/lists/qna/1">질문있어요 </Link>
          </NavLi>
          <NavLi>
            <Link to="/about">스터디 관리해요</Link>
          </NavLi>
        </NavUl>
      </NavWrapper>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default TTlayout;
