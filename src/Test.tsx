import { useState } from "react";
import "./Test.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

export type CBTI = {
  ItoE: number;
  NtoS: number;
  FtoT: number;
  PtoJ: number;
};
type Question = {
  cbtiEffect: CBTI;
  question: string;
};
type Answer = {
  questionNumber: number;
  multiplier: number;
};
const testList: Question[] = [
  {
    cbtiEffect: {
      ItoE: 30,
      NtoS: 0,
      FtoT: 0,
      PtoJ: 0,
    },
    question: "친구들과 지내면서 에너지를 회복한다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: -30,
      FtoT: 0,
      PtoJ: 0,
    },
    question: "직관적인구절보다 복잡한구절에 흥미를 느낀다",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 0,
      FtoT: -30,
      PtoJ: 0,
    },
    question: "해결책을 제시하기보다는 공감해주는 편이다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 0,
      FtoT: 0,
      PtoJ: 30,
    },
    question: "기도를 해야하는경우 기도내용을 상세히 준비한다.",
  },
  {
    cbtiEffect: {
      ItoE: 10,
      NtoS: 0,
      FtoT: 0,
      PtoJ: 0,
    },
    question: "주기적으로 새로운 친구를 사귄다",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 0,
      FtoT: 10,
      PtoJ: 5,
    },
    question: "규칙을 세우고 지키기를 좋아한다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 20,
      FtoT: 0,
      PtoJ: 0,
    },
    question: "성경구절을 읽을때 적힌 그대로 받아들인다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 2,
      FtoT: 3,
      PtoJ: 10,
    },
    question: "마감보다 숙제를 더 먼저 완료한다",
  },
  {
    cbtiEffect: {
      ItoE: 10,
      NtoS: 0,
      FtoT: 0,
      PtoJ: 0,
    },
    question: "대화를 먼저 시작한다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 0,
      FtoT: 10,
      PtoJ: 0,
    },
    question: "잘못을 정확하게 따진다.",
  },
  {
    cbtiEffect: {
      ItoE: -10,
      NtoS: 0,
      FtoT: 0,
      PtoJ: 10,
    },
    question: "실수에 민감하다.",
  },
  {
    cbtiEffect: {
      ItoE: 10,
      NtoS: 2,
      FtoT: 10,
      PtoJ: 0,
    },
    question: "자기주장이 뚜렷하다.",
  },
  {
    cbtiEffect: {
      ItoE: 3,
      NtoS: 0,
      FtoT: 0,
      PtoJ: 10,
    },
    question: "책상이 잘 정돈되어있다..",
  },
];
let answer: Answer[] = [];

const NavBar = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0%;
  width: 110vw;
  height: 10vh;
  align-content: center;
  align-self: center;
  background-color: whitesmoke;
  text-align: center;
  font-size: 32px;
  box-shadow: 0px 18px 40px 15px whitesmoke;
`;
const TestColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;
const TestButton = (a: {
  a: number;
  name: string;
  onClick: () => void;
  disabled: boolean;
  isSelected: boolean;
}) => {
  return (
    <input
      className={a.isSelected ? "selected" : ""}
      type="submit"
      value={" "}
      style={{
        backgroundColor: a.isSelected? "grey" : "lightgrey",
        width: a.a + "vw",
        height: a.a + "vw",
        opacity: a.disabled ? 0.5 : 1,
      }}
      name={a.name}
      onClick={(event) => {
        a.onClick();
        event.preventDefault();
      }}
    />
  );
};
const TestForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ROW = styled.form`
  display: flex;
  width: 100%;
  align-self: center;
  justify-content: space-between;
  flex-direction: row;
`;
const StartButton = styled.button`
  background-color: whitesmoke;
  border-radius: 5px;
  border: 1px inset black;
  padding: 10px 80px;
  font-size: 20px;
`;
export default function Test() {
  function onSubmit(multiplier: number, questionNumber: number) {
    answer[questionNumber] = {
      questionNumber: questionNumber,
      multiplier: multiplier,
    };
  }
  function NthTest(question: Question, questionNumber: number) {
    const [selected, setSelected] = useState(false);
    const [v, setV] = useState<Map<string, boolean>>(
      new Map<string, boolean>([
        ["0", false],
        ["1", false],
        ["2", false],
        ["3", false],
        ["4", false],
      ])
    );
    return (
      <TestColumn>
        <ROW>
          <h4>그렇지않다</h4>
          <h5>{question.question}</h5>
          <h4>그렇다</h4>
        </ROW>
        <TestForm>
          <TestButton
            a={15}
            name="0"
            isSelected={v.get("0") ?? false}
            onClick={() => {
              onSubmit(-1, questionNumber);
              setSelected(true);
              setV(
                new Map<string, boolean>([
                  ["0", true],
                  ["1", false],
                  ["2", false],
                  ["3", false],
                  ["4", false],
                ])
              );
            }}
            disabled={selected}
          />
          <TestButton
            a={12}
            name="1"
            isSelected={v.get("1") ?? false}
            onClick={() => {
              onSubmit(-0.5, questionNumber);
              setSelected(true);
              setV(
                new Map<string, boolean>([
                  ["0", false],
                  ["1", true],
                  ["2", false],
                  ["3", false],
                  ["4", false],
                ])
              );
            }}
            disabled={selected}
          />
          <TestButton
            a={9}
            name="2"
            isSelected={v.get("2") ?? false}
            onClick={() => {
              onSubmit(0, questionNumber);
              setSelected(true);
              setV(
                new Map<string, boolean>([
                  ["0", false],
                  ["1", false],
                  ["2", true],
                  ["3", false],
                  ["4", false],
                ])
              );
            }}
            disabled={selected}
          />
          <TestButton
            a={12}
            name="3"
            isSelected={v.get("3") ?? false}
            onClick={() => {
              onSubmit(0.5, questionNumber);
              setSelected(true);
              setV(
                new Map<string, boolean>([
                  ["0", false],
                  ["1", false],
                  ["2", false],
                  ["3", true],
                  ["4", false],
                ])
              );
            }}
            disabled={selected}
          />
          <TestButton
            a={15}
            name="4"
            isSelected={v.get("4") ?? false}
            onClick={() => {
              onSubmit(1, questionNumber);
              setSelected(true);
              setV(
                new Map<string, boolean>([
                  ["0", false],
                  ["1", false],
                  ["2", false],
                  ["3", false],
                  ["4", true],
                ])
              );
            }}
            disabled={selected}
          />
        </TestForm>
      </TestColumn>
    );
  }
  return (
    <TestColumn>
      <NavBar>CBTI</NavBar>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      {testList.map((test, i) => {
        return NthTest(test, i);
      })}
      <Link to="/result">
        <StartButton
          onClick={() => {
            let cbti: CBTI = {
              ItoE: 100,
              NtoS: 100,
              FtoT: 100,
              PtoJ: 100,
            };
            answer.forEach((a) => {
              cbti = {
                ItoE:
                  testList[a.questionNumber].cbtiEffect.ItoE * a.multiplier +
                  cbti.ItoE,
                NtoS:
                  testList[a.questionNumber].cbtiEffect.NtoS * a.multiplier +
                  cbti.NtoS,
                FtoT:
                  testList[a.questionNumber].cbtiEffect.FtoT * a.multiplier +
                  cbti.FtoT,
                PtoJ:
                  testList[a.questionNumber].cbtiEffect.PtoJ * a.multiplier +
                  cbti.PtoJ,
              };
            });
            answer = [];
            localStorage.setItem(
              "result",
              JSON.stringify({
                ItoE: Math.min(Math.max(cbti.ItoE, 0), 200),
                NtoS: Math.min(Math.max(cbti.NtoS, 0), 200),
                FtoT: Math.min(Math.max(cbti.FtoT, 0), 200),
                PtoJ: Math.min(Math.max(cbti.PtoJ, 0), 200),
              })
            );
          }}
        >
          제출
        </StartButton>
      </Link>
    </TestColumn>
  );
}
