import { ISlide } from "../models/ISlide";
import { AllData } from "../utils/mockData";

export const handleActiveSlide = (active: number = 1): ISlide[] => {
  const data = AllData.filter((el) => el.id === active);
  return data[0].data;
};
