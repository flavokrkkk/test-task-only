import React, { FC } from "react";
import { CircleContainer, CircleWrapper } from "./styles";

interface CircleProps {
  radius: number;
  color: string;
  children: React.ReactNode;
}

const Circle: FC<CircleProps> = ({ radius, color, children }) => {
  return (
    <CircleContainer>
      <CircleWrapper color={color} radius={radius}></CircleWrapper>
      {children}
    </CircleContainer>
  );
};

export default Circle;
