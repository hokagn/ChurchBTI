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
      ItoE: 100,
      NtoS: 0,
      FtoT: 0,
      PtoJ: 0,
    },
    question: "주기적으로 새로운 친구를 사귄다",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
  {
    cbtiEffect: {
      ItoE: 0,
      NtoS: 100,
      FtoT: 0,
      PtoJ: 0,
    },
    question:
      "단순하고 직관적인 아이디어보다는 복잡하고 참신한 아이디어에 흥미를 느낀다.",
  },
];
const answer: Answer[] = [];

const NavBar = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0%;
  width: 100%;
  height: 10vh;
  align-content: center;
  align-self: center;
  background-color: white;
  text-align: center;
  font-size: 32px;
  box-shadow: 0px 18px 40px 15px #ffffff;
`;
const TestColumn = styled.div`
  margin-top: 10vh;
  margin-left: 5vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  align-content: center;
`;
const StartButton = styled.button`
  background-color: #fd8700;
  border-radius: 30px;
  border: 2px inset black;
  padding: 20px 50px;
  font-size: 32px;
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
      <div>
        {question.question}
        <TestForm>
          그렇지않다
          <TestButton
            a={10}
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
            a={8}
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
            a={6}
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
            a={8}
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
            a={10}
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
          그렇다
        </TestForm>
      </div>
    );
  }
  return (
    <TestColumn>
      <NavBar>CBTI</NavBar>
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
