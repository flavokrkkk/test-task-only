import { FC, useRef } from "react";
import { CircleContainer, CircleWrapper } from "./styles";
import gsap from "gsap";
import CirclePoints from "../CirclePoints/CirclePoints";
import { IPoint } from "../../models/IPoint";
import { getCirclePoints } from "../../helpers/getCirclePoints";
interface CircleProps {
  radius: number;
  color: string;
}

const Circle: FC<CircleProps> = ({ radius, color }) => {
  const ref = useRef<HTMLDivElement>(null);

  const points = getCirclePoints(radius, 6);

  const root = [...points.map((el) => el.rotate)];

  const handleRotateCircle = (point: IPoint, index: number) => {
    gsap.from(ref.current, {
      delay: 7000,
      rotation: root[index],
    });

    return gsap.from(ref.current, {
      rotate: 0,
    });
  };

  return (
    <CircleContainer>
      <CircleWrapper ref={ref} color={color} radius={radius}>
        <CirclePoints
          color={color}
          points={points}
          handleRotateCircle={handleRotateCircle}
        />
      </CircleWrapper>
    </CircleContainer>
  );
};

export default Circle;
