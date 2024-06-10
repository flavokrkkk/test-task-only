import { FC } from "react";
import { IPoint } from "../../models/IPoint";
import { CircleListItem } from "./styles";

interface CirclePointsListProps {
  point: IPoint;
  color: string;
}

const CirclePointsList: FC<CirclePointsListProps> = ({ point, color }) => {
  return (
    <>
      <CircleListItem point={point} color={color} />
    </>
  );
};

export default CirclePointsList;
