import { FC, useRef, useState } from "react";
import { IPoint } from "../../models/IPoint";
import { CircleActive, CircleListItem } from "./styles";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface CirclePointsListProps {
  point: IPoint;
  color: string;
  index: number;
  count: number;
  setCount: (value: number) => void;
  handleRotateCircle: (point: IPoint, index: number) => void;
}

const CirclePointsList: FC<CirclePointsListProps> = ({
  point,
  color,
  index,
  count,
  setCount,
  handleRotateCircle,
}) => {
  const [isAnimate, setIsAnimate] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLDivElement>(null);

  const isActiveCount = count === index + 1;

  const handleActiveCount = () => {
    setCount(index + 1);
    setIsAnimate(false);
    handleRotateCircle(point, index);
  };

  useGSAP(() => {
    ref.current?.addEventListener("mouseenter", () => {
      gsap.to(ref.current, {
        height: 56,
        width: 56,
        transform: `translate(${point.x}px, ${point.y}px)`,
        duration: 0.15,
        backgroundColor: "#F4F5F9",
        border: "1px solid #42567a",
      });
      setIsAnimate(true);
    });

    return ref.current?.addEventListener("mouseleave", () => {
      gsap.to(ref.current, {
        height: 8,
        width: 8,
        transform: `translate(${point.x}px, ${point.y}px)`,
        duration: 0.15,
        backgroundColor: color,
      });
      setIsAnimate(false);
    });
  }, [count]);

  return (
    <>
      {isActiveCount ? (
        <CircleActive ref={activeRef} point={point} color={color}>
          {<span>{index + 1}</span>}
        </CircleActive>
      ) : (
        <CircleListItem
          ref={ref}
          point={point}
          color={color}
          onClick={handleActiveCount}
        >
          {isAnimate && <span>{index + 1}</span>}
        </CircleListItem>
      )}
    </>
  );
};

export default CirclePointsList;

//104.50000000000003px, -258.49673200287623px
//67.00129134564013
