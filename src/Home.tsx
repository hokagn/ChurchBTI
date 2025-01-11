import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Banner = styled.img`
  width: 50vw;
`;
const StartButton = styled.button`
  background-color: #fd8700;
  border-radius: 30px;
  border: 2px inset black;
  padding: 20px 50px;
  font-size: 32px;
`;
export default function Home() {
  return (
    <HomeWrapper>
      <Banner src="image.png" />
      <h1>나는 어떤 교인일까?</h1>
      <h1>교BTI</h1>
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
