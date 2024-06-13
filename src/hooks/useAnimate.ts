import { RefObject, useState } from "react";
import { IPoint } from "../models/IPoint";
import gsap from "gsap";

export const useAnimate = (ref: RefObject<HTMLDivElement>) => {
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
      duration: 0.9,
      rotation: `+=${isCalculateRotate}`,
      ease: "linear",
      transformOrigin: "center center",
    });

    timeline.play();
    setPrevNumber(point.rotate);
    setCalcRotate(isCalculateRotate);
  };

  return {
    handleRotateCircle,
    calcRotate,
  };
};
