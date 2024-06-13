import { FC, useRef, useState } from "react";
import { CircleContainer, CircleWrapper } from "./styles";
import gsap from "gsap";
import { IPoint } from "../../models/IPoint";
import { getCirclePoints } from "../../helpers/getCirclePoints";
import CirclePointsList from "../CirclePointsList/CirclePointsList";
import { useAppSelector } from "../../hooks/useAppSelector";
import { countSelector } from "../../store/selectors";
import { useActions } from "../../hooks/useActions";
interface CircleProps {
  radius: number;
  color: string;
  ddd: (point: IPoint) => void;
}

const Circle: FC<CircleProps> = ({ radius, color, ddd }) => {
  const points = getCirclePoints(radius, 6);

  const { count } = useAppSelector(countSelector);
  const { setCount } = useActions();

  const ref = useRef<HTMLDivElement>(null);

  const [prevNumber, setPrevNumber] = useState(0);

  const [calcRotate, setCalcRotate] = useState<number>();

  const handleRotateCircle = (point: IPoint) => {
    const isCalculateRotate =
      point.rotate - prevNumber < -239
        ? Math.abs(point.rotate + prevNumber) === 0
          ? prevNumber
          : Math.abs(point.rotate + prevNumber)
        : point.rotate - prevNumber > 239
        ? -(360 - (point.rotate - prevNumber))
        : point.rotate - prevNumber;

    const timeline = gsap.timeline({ paused: true });

    timeline.to(ref.current, {
      duration: 1,
      rotation: `+=${isCalculateRotate}`,
      ease: "linear",
      transformOrigin: "center center",
    });

    timeline.play();
    setPrevNumber(point.rotate);
    setCalcRotate(isCalculateRotate);
  };

  return (
    <CircleContainer>
      <CircleWrapper ref={ref} color={color} radius={radius}>
        {points.map((point, index) => (
          <CirclePointsList
            point={point}
            count={count}
            color={color}
            key={index}
            index={index}
            calcRotate={calcRotate}
            setCount={setCount}
            ddd={ddd}
            handleRotateCircle={handleRotateCircle}
          />
        ))}
      </CircleWrapper>
    </CircleContainer>
  );
};

export default Circle;
