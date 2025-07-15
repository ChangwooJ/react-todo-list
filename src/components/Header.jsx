import styled from "styled-components";
import greedy from "../assets/greedySquareImage.jpg";

const HeaderContainer = styled.div`
  width: 100%;
  height: 18%;
  background-color: #007355;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: default;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={greedy} alt="그리디 이미지" width={80} height={80} />
      <h2 style={{ fontSize: "2rem", color: "white" }}>일정 관리</h2>
    </HeaderContainer>
  )
}

export default Header;