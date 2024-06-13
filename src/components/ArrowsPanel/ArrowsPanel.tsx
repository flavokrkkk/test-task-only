import { FC } from "react";
import { IAllData } from "../../utils/mockData";
import Button from "../UI/Button/Button";
import {
  ButtonColor,
  ButtonPosition,
  ButtonSize,
  ButtonTop,
} from "../../utils/const";
import ArrowNextCount from "../../assets/ArrowNextCount";
import ArrowPrevCount from "../../assets/ArrowPrevCount";
import { ButtonWrapper, CounterWrapper } from "./styles";

interface ArowsPanelProps {
  isDisabledPrev: boolean;
  isDisabledNext: boolean;
  count: number;
  AllData: IAllData[];
  handlePrevSlide: () => void;
  handleNextSlide: () => void;
}

const ArrowsPanel: FC<ArowsPanelProps> = ({
  isDisabledNext,
  isDisabledPrev,
  AllData,
  count,
  handleNextSlide,
  handlePrevSlide,
}) => {
  const handlePrevSlideCount = () => {
    handlePrevSlide();
    //бегу по поинтс, по каунту нахожу point и меняю ротейт в предыдущий
  };

  const handleNextSlideCount = () => {
    handleNextSlide();
    //бегу по поинтс, по каунту нахожу point и меняю ротейт в предыдущий
  };

  return (
    <>
      <CounterWrapper>
        0{count}/0{AllData.length}
      </CounterWrapper>
      <ButtonWrapper>
        <Button
          isDisabled={isDisabledPrev}
          isBorder
          color={ButtonColor.bg}
          top={ButtonTop.none}
          size={ButtonSize.md}
          position={ButtonPosition.none}
          onClick={handlePrevSlideCount}
        >
          <ArrowPrevCount />
        </Button>
        <Button
          isDisabled={isDisabledNext}
          isBorder
          color={ButtonColor.bg}
          size={ButtonSize.md}
          top={ButtonTop.none}
          position={ButtonPosition.none}
          onClick={handleNextSlideCount}
        >
          <ArrowNextCount />
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default ArrowsPanel;
