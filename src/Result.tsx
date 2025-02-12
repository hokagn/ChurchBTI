import { useLayoutEffect, useState } from "react";
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
const ResultImage = styled.img`
  width: 50vw;
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
  function mbti() {
    return (
      ((result?.ItoE ?? 100) > 100 ? "E" : "I") +
      ((result?.NtoS ?? 100) > 100 ? "S" : "N") +
      ((result?.FtoT ?? 100) > 100 ? "T" : "F") +
      ((result?.PtoJ ?? 100) > 100 ? "J" : "P")
    );
  }
  let resultImage = "";
  let resultName = "";
  switch (mbti()) {
    case "INFP":
      resultImage = "/바나바.jpg";
      resultName = "바나바";
      break;
    case "INFJ":
      resultImage = "/에레미아.webp";
      resultName = "예레미아";
      break;
    case "INTP":
      resultImage = "/솔로몬.jpg";
      resultName = "솔로몬";
      break;
    case "INTJ":
      resultImage = "/노아.webp";
      resultName = "노아";
      break;
    case "ISFP":
      resultImage = "/아담.png";
      resultName = "아담";
      break;
    case "ISFJ":
      resultImage = "/마리아.jpg";
      resultName = "마리아";
      break;
    case "ISTP":
      resultImage = "/라반.jpg";
      resultName = "라반";
      break;
    case "ISTJ":
      resultImage = "/누가.jpg";
      resultName = "누가";
      break;
    case "ENFP":
      resultImage = "/베드로.png";
      resultName = "베드로";
      break;
    case "ENFJ":
      resultImage = "/요나단.png";
      resultName = "요나단";
      break;
    case "ENTP":
      resultImage = "/에스더.jpg";
      resultName = "에스더";
      break;
    case "ENTJ":
      resultImage = "/바울.jpg";
      resultName = "바울";
      break;
    case "ESFP":
      resultImage = "/돌아온탕아.webp";
      resultName = "돌아온 탕아";
      break;
    case "ESFJ":
      resultImage = "/다윗.webp";
      resultName = "다윗";
      break;
    case "ESTP":
      resultImage = "/리브가.webp";
      resultName = "리브가";
      break;
    case "ESTJ":
      resultImage = "/드보라.jpg";
      resultName = "드보라";
      break;
  }
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
    });
  });
  return (
    <Column>
      <TitleName>검사결과</TitleName>
      <ResultImage src={resultImage} />
      <TitleName>
        {(result?.ItoE ?? 100) > 100 ? "E" : "I"}
        {(result?.NtoS ?? 100) > 100 ? "S" : "N"}
        {(result?.FtoT ?? 100) > 100 ? "T" : "F"}
        {(result?.PtoJ ?? 100) > 100 ? "J" : "P"}
      </TitleName>
      <TitleName>{resultName}</TitleName>
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
