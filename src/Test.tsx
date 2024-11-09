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
];

const NavBar = styled.div`
  position: fixed;
  top: 0%;
  width: 100%;
  height: 5vh;
  align-content: center;
  align-self: center;
  background-color: white;
  text-align: center;
  font-size: 32px;
`;
const TestColumn = styled.div`
  margin-top: 50px;
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
}) => {
  const [isSelected, setSelected] = useState(false);
  return (
    <input
      className={isSelected ? "selected" : ""}
      type="submit"
      value={" "}
      style={{
        width: a.a + "px",
        height: a.a + "px",
      }}
      disabled={a.disabled}
      name={a.name}
      onClick={(event) => {
        event.preventDefault();
        a.onClick();
        setSelected(true);
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
  const [cbti, setCbti] = useState<CBTI>({
    ItoE: 100,
    NtoS: 100,
    FtoT: 100,
    PtoJ: 100,
  });

  function onSubmit(multiplier: number, cbtiEffect: CBTI) {
    setCbti({
      ItoE: cbtiEffect.ItoE * multiplier + cbti.ItoE,
      NtoS: cbtiEffect.NtoS * multiplier + cbti.NtoS,
      FtoT: cbtiEffect.FtoT * multiplier + cbti.FtoT,
      PtoJ: cbtiEffect.PtoJ * multiplier + cbti.PtoJ,
    });
  }
  function NthTest(question: Question) {
    const [disalbed, setDisabled] = useState(false);
    return (
      <div>
        {question.question}
        <TestForm>
          그렇다
          <TestButton
            a={100}
            name="0"
            onClick={() => {
              onSubmit(-1, question.cbtiEffect);
              setDisabled(true);
            }}
            disabled={disalbed}
          />
          <TestButton
            a={80}
            name="1"
            onClick={() => {
              onSubmit(-0.5, question.cbtiEffect);
              setDisabled(true);
            }}
            disabled={disalbed}
          />
          <TestButton
            a={60}
            name="2"
            onClick={() => {
              onSubmit(0, question.cbtiEffect);
              setDisabled(true);
            }}
            disabled={disalbed}
          />
          <TestButton
            a={80}
            name="3"
            onClick={() => {
              onSubmit(0.5, question.cbtiEffect);
              setDisabled(true);
            }}
            disabled={disalbed}
          />
          <TestButton
            a={100}
            name="4"
            onClick={() => {
              onSubmit(1, question.cbtiEffect);
              setDisabled(true);
            }}
            disabled={disalbed}
          />
          그렇지않다
        </TestForm>
      </div>
    );
  }
  return (
    <TestColumn>
      <NavBar>CBTI</NavBar>
      {testList.map((test) => {
        return NthTest(test);
      })}
      <Link to="/result">
        <StartButton
          onClick={() => {
            localStorage.setItem("result", JSON.stringify(cbti));
          }}
        >
          제출
        </StartButton>
      </Link>
    </TestColumn>
  );
}
