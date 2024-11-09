import { useState } from "react";
import styled from "styled-components";
import { CBTI } from "./Test";
import { Link } from "react-router-dom";
const Rect = styled.rect`
  fill: lightblue;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleName = styled.div`
  font-size: 90px;
`;
const ResultWrapper = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr 0fr;
  border-radius: 30px;
  border: 10px inset black;
  padding: 20px;
`;
const ResultName = styled.text`
  font-size: 100px;
  transform: translateY(-20px);
`;
const ResultValue = styled.text`
  font-size: 90px;
  transform: translate(120px, 80px);
`;
export default function Result() {
  const [result, setResult] = useState<CBTI | null>(null);
  if (result == null) {
    const rawData = localStorage.getItem("result") ?? " ";
    setResult(JSON.parse(rawData));
  }

  return (
    <Column>
      <TitleName>검사결과</TitleName>
      <TitleName>
        {(result?.ItoE ?? 100) > 100 ? "E" : "I"}
        {(result?.NtoS ?? 100) > 100 ? "S" : "N"}
        {(result?.FtoT ?? 100) > 100 ? "T" : "F"}
        {(result?.PtoJ ?? 100) > 100 ? "J" : "P"}
      </TitleName>
      <ResultWrapper>
        <ResultName>I</ResultName>
        <svg width={400} height={100}>
          <Rect width={(result?.ItoE ?? 0) * 2} height={100} />
          <ResultValue width={400} height={100}>
            {result?.ItoE ?? 0}
          </ResultValue>
        </svg>
        <ResultName>E</ResultName>
        <ResultName>N</ResultName>
        <svg width={400} height={100}>
          <Rect width={(result?.NtoS ?? 0) * 2} height={100} />
          <ResultValue width={400} height={100}>
            {result?.NtoS ?? 0}
          </ResultValue>
        </svg>
        <ResultName>S</ResultName>
        <ResultName>F</ResultName>
        <svg width={400} height={100}>
          <Rect width={(result?.FtoT ?? 0) * 2} height={100} />
          <ResultValue width={400} height={100}>
            {result?.FtoT ?? 0}
          </ResultValue>
        </svg>
        <ResultName>T</ResultName>
        <ResultName>P</ResultName>
        <svg width={400} height={100}>
          <Rect width={(result?.PtoJ ?? 0) * 2} height={100} />
          <ResultValue width={400} height={100}>
            {result?.PtoJ ?? 0}
          </ResultValue>
        </svg>
        <ResultName>J</ResultName>
      </ResultWrapper>
      <Link to="/">
        <button>
          <TitleName>시작으로</TitleName>
        </button>
      </Link>
    </Column>
  );
}
