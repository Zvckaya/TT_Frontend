import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff;
  height: 80px;
  display: flex;
`;

const MyNav = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">
            <h1>TITTO</h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/">티토찾아요 </Link>
        </li>
        <li className="nav-item">
          <Link to="/">질문있어요 </Link>
        </li>
        <li className="nav-item">
          <Link to="/about">스터디 관리해요</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MyNav;
