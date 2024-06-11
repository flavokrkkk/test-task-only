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
}

const CirclePointsList: FC<CirclePointsListProps> = ({
  point,
  color,
  index,
  count,
  setCount,
}) => {
  const [isAnimate, setIsAnimate] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const isActiveCount = count === index + 1;

  const handleActiveCount = () => {
    setCount(index + 1);
    setIsAnimate(false);
  };

  useGSAP(() => {
    ref.current?.addEventListener("mouseenter", () => {
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

    return ref.current?.addEventListener("mouseleave", () => {
      gsap.to(ref.current, {
        height: 8,
        width: 8,
        transform: `translate(${point.x}px, ${point.y}px)`,
        duration: 0.15,
        backgroundColor: color,
      });
      console.log("dwwd");
      setIsAnimate(false);
    });
  }, [count]);

  return (
    <>
      {isActiveCount ? (
        <CircleActive point={point} color={color} className="aboba">
          {<span>{index + 1}</span>}
        </CircleActive>
      ) : (
        <CircleListItem
          className="goga"
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
