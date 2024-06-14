import React, { FC } from "react";
import Button from "../UI/Button/Button";
import {
  ButtonColor,
  ButtonPosition,
  ButtonSize,
  ButtonTop,
} from "../../utils/const";
import { ButtonWrapper, CounterWrapper } from "./styles";
import { IAllData } from "../../models/IAllData";
import ArrowPrevCount from "../../assets/ArrowPrevCount";
import ArrowNextCount from "../../assets/ArrowNextCount";

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
          onClick={handlePrevSlide}
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
          onClick={handleNextSlide}
        >
          <ArrowNextCount />
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default ArrowsPanel;
