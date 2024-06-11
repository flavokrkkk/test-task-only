import React, { FC, useRef } from "react";
import { CircleContainer, CircleWrapper } from "./styles";
import { useGSAP } from "@gsap/react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { countSelector } from "../../store/selectors";
import { gsap } from "gsap/gsap-core";

interface CircleProps {
  radius: number;
  color: string;
  children: React.ReactNode;
}

const Circle: FC<CircleProps> = ({ radius, color, children }) => {
  const { count } = useAppSelector(countSelector);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <CircleContainer>
      <CircleWrapper ref={ref} color={color} radius={radius}></CircleWrapper>
      {children}
    </CircleContainer>
  );
};

export default Circle;
