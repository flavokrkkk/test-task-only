import React, { FC, RefObject } from "react";
import { CircleContainer, CircleWrapper } from "./styles";
import CirclePointsList from "../CirclePointsList/CirclePointsList";
import { useAppSelector } from "../../hooks/useAppSelector";
import { countSelector } from "../../store/selectors";
import { useActions } from "../../hooks/useActions";
import { useAnimate } from "../../hooks/useAnimate";
import { IPoint } from "../../models/IPoint";
interface CircleProps {
  color: string;
  points: IPoint[];
  radius: number;
  circleRef: RefObject<HTMLDivElement>;
}

const Circle: FC<CircleProps> = ({ points, color, radius, circleRef }) => {
  const { count } = useAppSelector(countSelector);
  const { setCount } = useActions();

  const { handleRotateCircle, calcRotate } = useAnimate(circleRef);

  return (
    <CircleContainer>
      <CircleWrapper ref={circleRef} color={color} radius={radius}>
        {points.map((point, index) => (
          <CirclePointsList
            point={point}
            count={count}
            color={color}
            key={index}
            index={index}
            calcRotate={calcRotate}
            setCount={setCount}
            handleRotateCircle={handleRotateCircle}
          />
        ))}
      </CircleWrapper>
    </CircleContainer>
  );
};

export default Circle;
