import { FC, useRef, useState } from "react";
import { IPoint } from "../../models/IPoint";
import { CircleListItem } from "./styles";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface CirclePointsListProps {
  point: IPoint;
  color: string;
  index: number;
}

const CirclePointsList: FC<CirclePointsListProps> = ({
  point,
  color,
  index,
}) => {
  const [isAnimate, setIsAnimate] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ref.current?.addEventListener("mouseenter", () => {
      console.log(point.x, point.y);
      gsap.to(ref.current, {
        height: 56,
        width: 56,
        transform: `translate(${point.x - 25}px, ${point.y - 26}px)`,
        duration: 0.15,
        backgroundColor: "#F4F5F9",
        border: "1px solid #42567a",
      });
      setIsAnimate(true);
    });

    ref.current?.addEventListener("mouseleave", () => {
      console.log(point.x, point.y);
      gsap.to(ref.current, {
        height: 8,
        width: 8,
        transform: `translate(${point.x}px, ${point.y}px)`,
        duration: 0.15,
        backgroundColor: color,
      });
      setIsAnimate(false);
    });
  }, []);

  return (
    <>
      <CircleListItem ref={ref} point={point} color={color}>
        {isAnimate && <span>{index + 1}</span>}
      </CircleListItem>
    </>
  );
};

export default CirclePointsList;
