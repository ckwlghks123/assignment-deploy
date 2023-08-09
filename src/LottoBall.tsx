import { styled } from "styled-components";

interface IProps {
  number: number;
  color?: string;
  darkerColor?: string;
}

interface IRotate {
  darkerColor?: string;
}

export const LottoBall = ({ number, color, darkerColor }: IProps) => {
  return (
    <Ball color={color} darkerColor={darkerColor}>
      {number}
      <LightEffect />
    </Ball>
  );
};

const Ball = styled.li<IRotate>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${(props) => props.color || "#f00"};
  background: radial-gradient(
    circle at 30% 30%,
    ${(props) => props.color || "#f00"} 60%,
    ${(props) => props.darkerColor || "red"} 90%
  );
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  transition: transform 0.5s;
  overflow: hidden;
  margin-right: 10px;
`;

const LightEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  clip-path: ellipse(45% 35% at 30% 30%);
`;
