import { useEffect, useRef } from "react";
import styled from "styled-components";

const Eyes = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const Eye = styled.div`
  display: grid;
  place-items: center;
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  position: relative;
`;

const Ball = styled.div`
  width: 40px;
  height: 40px;
  background-color: #000000;
  border-radius: 50%;
  position: absolute;
`;

function App() {
  const leftEye = useRef();
  const rightEye = useRef();

  const animate = (element, startTime, duration, size) => {
    const currentTime = (new Date().getTime() - startTime) % duration;
    const degrees = (360 * currentTime) / duration;
    const radians = (degrees * Math.PI) / 180;
    const x = size * Math.cos(radians) - element.clientWidth / 2 + 15;
    const y = size * Math.sin(radians) - element.clientHeight / 2 + 15;

    element.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(() => animate(element, startTime, duration, size));
  };

  useEffect(() => {
    const element = leftEye.current;
    const element2 = rightEye.current;
    const startTime = new Date().getTime();
    const duration = 2000; // 애니메이션 지속 시간 (ms)
    const size = (160 - 40) / 2; // 원 둘레의 반지름 (원의 크기에서 Ball의 크기를 뺀 값을 반으로 나눔)

    requestAnimationFrame(() => {
      animate(element, startTime, duration, size);
      animate(element2, startTime, duration, size);
    });
  }, []);

  return (
    <Eyes>
      <Eye>
        <Ball ref={leftEye} />
      </Eye>
      <Eye>
        <Ball ref={rightEye} />
      </Eye>
    </Eyes>
  );
}

export default App;
