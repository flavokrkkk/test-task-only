import { FC } from "react";
import { getCirclePoints } from "../../helpers/getCirclePoints";
import CirclePointsList from "../CirclePointsList/CirclePointsList";

interface CirclePointsProps {
  radius: number;
  numPoints: number;
  color: string;
}

const CirclePoints: FC<CirclePointsProps> = ({ radius, numPoints, color }) => {
  const points = getCirclePoints(radius, numPoints);
  return (
    <div>
      {points.map((point, index) => (
        <CirclePointsList
          point={point}
          color={color}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
};

export default CirclePoints;
