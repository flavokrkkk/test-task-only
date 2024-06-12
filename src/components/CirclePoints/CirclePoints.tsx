import { FC } from "react";
import CirclePointsList from "../CirclePointsList/CirclePointsList";
import { useAppSelector } from "../../hooks/useAppSelector";
import { countSelector } from "../../store/selectors";
import { useActions } from "../../hooks/useActions";
import { IPoint } from "../../models/IPoint";

interface CirclePointsProps {
  points: IPoint[];
  color: string;
  handleRotateCircle: (point: IPoint, index: number) => void;
}

const CirclePoints: FC<CirclePointsProps> = ({
  points,
  color,
  handleRotateCircle,
}) => {
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
          handleRotateCircle={handleRotateCircle}
        />
      ))}
    </>
  );
};

export default CirclePoints;
