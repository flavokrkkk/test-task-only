import { IPoint } from "../models/IPoint";

export const getCirclePoints = (
  radius: number,
  numPoints: number
): IPoint[] => {
  const points: IPoint[] = [];
  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    if (i <= 2) {
      points.push({ x, y, rotate: i === 0 ? -60 : -60 * (i + 1) });
    } else if (i > 2) {
      points.push({
        x,
        y,
        rotate:
          i === 3 ? 60 * (i - 1) : i + 1 === numPoints ? 0 : 60 * (i - 1) - 120,
      });
    }
  }
  return points.reverse();
};
