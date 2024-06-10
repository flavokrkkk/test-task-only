import { IPoint } from "../models/IPoint";

export const getCirclePoints = (
  radius: number,
  numPoints: number
): IPoint[] => {
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * 2 * Math.PI;
    const x = radius * Math.cos(angle) - 3;
    const y = radius * Math.sin(angle) - 3;
    points.push({ x, y });
  }
  return points;
};
