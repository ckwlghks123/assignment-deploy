import { useState } from "react";
import "./App.css";
import { LottoBall } from "./LottoBall";
import styled from "styled-components";

const getNums = (): number[] => {
  const tmp = new Set<number>();
  while (tmp.size < 6) {
    tmp.add(~~(Math.random() * 45 + 1));
  }

  return [...tmp].sort((a, b) => a - b);
};

function App() {
  const [nums, setNums] = useState<number[]>([]);

  const genNums = () => {
    setNums(getNums());
  };

  const numReset = () => setNums([]);

  return (
    <MainWrapper>
      <BallWrapper>
        {nums.map((e, i) => (
          <LottoBall key={i} number={e} />
        ))}
      </BallWrapper>
      <BtnWrapper>
        <GenBtn onClick={genNums}>생성</GenBtn>
        <GenBtn onClick={numReset}>초기화</GenBtn>
      </BtnWrapper>
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BallWrapper = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  height: 60px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const GenBtn = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
`;
