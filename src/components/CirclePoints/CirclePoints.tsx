import { FC } from "react";
import { getCirclePoints } from "../../helpers/getCirclePoints";
import CirclePointsList from "../CirclePointsList/CirclePointsList";
import { useAppSelector } from "../../hooks/useAppSelector";
import { countSelector } from "../../store/selectors";
import { useActions } from "../../hooks/useActions";

interface CirclePointsProps {
  radius: number;
  numPoints: number;
  color: string;
}

const CirclePoints: FC<CirclePointsProps> = ({ radius, numPoints, color }) => {
  const points = getCirclePoints(radius, numPoints);

  const { count } = useAppSelector(countSelector);

  const { setCount } = useActions();

  return (
    <>
      {points.map((point, index) => (
        <CirclePointsList
          point={point}
          count={count}
          color={color}
          key={index}
          index={index}
          setCount={setCount}
        />
      ))}
    </>
  );
};

export default CirclePoints;
