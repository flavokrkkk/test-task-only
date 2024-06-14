import { ISlide } from "../models/ISlide";

export const handleMinMaxYear = (
  array: ISlide[]
): { min: number; max: number } => {
  const year = array.map((el) => el.year);
  return { min: Math.min(...year), max: Math.max(...year) };
};
