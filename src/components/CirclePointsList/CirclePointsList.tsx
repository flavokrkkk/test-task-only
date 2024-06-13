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
  calcRotate: number | undefined;
  setCount: (value: number) => void;
  handleRotateCircle: (point: IPoint) => void;
}

const CirclePointsList: FC<CirclePointsListProps> = ({
  point,
  color,
  index,
  count,
  calcRotate,
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
    handleRotateCircle(point);
  };

  useGSAP(() => {
    const timeline = gsap.timeline({ paused: true });

    timeline.to(activeRef.current, {
      duration: 1,
      rotation: `+=${359.8 - point.rotate}`,
      // ease: "sine.inOut",
      ease: "power4.inOut",

      transformOrigin: "center center",
    });

    timeline.play();
  }, [handleActiveCount]);

  useGSAP(() => {
    ref.current?.addEventListener("mouseenter", () => {
      gsap.to(ref.current, {
        height: 62,
        width: 62,
        rotation: `+=${calcRotate ? 180 - point.rotate + calcRotate : 0}`,
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
        <CircleActive point={point} color={color}>
          {
            <span
              ref={activeRef}
              style={{
                fontSize: "20px",
                color: "#42567A",
              }}
            >
              {index + 1}
            </span>
          }
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
