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
  font-size: 20pt;
`;
const ResultWrapper = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr 0fr;
  border-radius: 30px;
  background-color: white;
  box-shadow: 5px 10px 25px 1px #00000030;
  padding: 20px;
  align-items: center;
`;
const ResultName = styled.text`
  font-size: 40pt;
  background-color: white;
`;
const ResultValue = styled.text`
  font-size: 4vh;
  transform: translate(0, 4vh);
`;
const Svg = styled.svg`
  width: 50vw;
  height: 5vh;
  background-color: lightcoral;
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
        <Svg>
          <Rect width={((result?.ItoE ?? 0) / 200) * 50 + "vw"} height={100} />
          <ResultValue>
            {100 - (result?.ItoE ?? 0) / 2}:{(result?.ItoE ?? 0) / 2}
          </ResultValue>
        </Svg>
        <ResultName>E</ResultName>
        <ResultName>N</ResultName>
        <Svg>
          <Rect width={((result?.NtoS ?? 0) / 200) * 50 + "vw"} height={100} />
          <ResultValue>
            {100 - (result?.NtoS ?? 0) / 2}:{(result?.NtoS ?? 0) / 2}
          </ResultValue>
        </Svg>
        <ResultName>S</ResultName>
        <ResultName>F</ResultName>
        <Svg>
          <Rect width={((result?.FtoT ?? 0) / 200) * 50 + "vw"} height={100} />
          <ResultValue>
            {100 - (result?.FtoT ?? 0) / 2}:{(result?.FtoT ?? 0) / 2}
          </ResultValue>
        </Svg>
        <ResultName>T</ResultName>
        <ResultName>P</ResultName>
        <Svg>
          <Rect width={((result?.PtoJ ?? 0) / 200) * 50 + "vw"} height={100} />
          <ResultValue>
            {100 - (result?.PtoJ ?? 0) / 2}:{(result?.PtoJ ?? 0) / 2}
          </ResultValue>
        </Svg>
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
