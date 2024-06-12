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
  return points;
};

// if (i === 0) {
//   const rotate = i === 0 ? -60 : -60 * (i + 1);
//   points.push({ x, y, rotate });
// }

// if ((x && y < 0) || (x && y > 0 && i !== 0)) {
//   const rotate = i === 0 ? -60 : -60 * (i + 1);
//   points.push({ x, y, rotate });
// } else if (i !== 0) {
//   const rotate = i === 0 ? 60 : 60 * (i + 1);
//   points.push({ x, y, rotate });
// }
