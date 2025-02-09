import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeWrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Banner = styled.img`
  width: 140px;
`;

const BannerWrapper = styled.div`
  background-color: white;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-10px);
`;
const StartButton = styled.button`
  background-color: whitesmoke;
  border-radius: 5px;
  border: 1px inset black;
  padding: 10px 80px;
  font-size: 15px;
`;
export default function Home() {
  return (
    <HomeWrapper>
      <BannerWrapper>
        <Link to="http://www.hnpshch.kr/index.asp">
          <Banner src="image.png" />
        </Link>
      </BannerWrapper>

      <h1>성경인물 MBTI</h1>
      <h2>-나는 어떤 교인일까?-</h2>
      <Link to="/test">
        <StartButton>시작!</StartButton>
      </Link>
      {localStorage.getItem("result") == null ? null : (
        <Link to="/result">
          <StartButton>결과</StartButton>
        </Link>
      )}
    </HomeWrapper>
  );
}
