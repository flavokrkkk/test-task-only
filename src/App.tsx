import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "./hooks/useAppSelector";
import { countSelector } from "./store/selectors";
import { useActions } from "./hooks/useActions";
import { getCirclePoints } from "./helpers/getCirclePoints";
import { consts } from "./utils/const";
import { ISlide } from "./models/ISlide";
import { useGSAP } from "@gsap/react";
import { handleActiveSlide } from "./helpers/handleActiveSlide";
import gsap from "gsap";

import {
  ArrowsWrapper,
  BlockTitle,
  Container,
  HorizontalLine,
  MainWrapper,
  NumberOneTitle,
  NumberTwoTitle,
  NumberWrapper,
  SliderWrapper,
  Title,
  VerticalLine,
} from "./styles/app";
import Circle from "./components/Circle/Circle";
import ArrowsPanel from "./components/ArrowsPanel/ArrowsPanel";
import { AllData, handleMinMaxYear } from "./utils/mockData";
import Swiper from "./components/Swiper/Swiper";

const App = () => {
  const { count } = useAppSelector(countSelector);
  const { setCount } = useActions();
  const points = getCirclePoints(consts.radius, consts.numPoints);
  const [isDisabledNext, setIsDisabledNext] = useState(false);
  const [isDisabledPrev, setIsDisabledPrev] = useState(false);
  const [activeData, setActiveData] = useState<ISlide[]>([]);

  const circleRef = useRef<HTMLDivElement>(null);

  const numbersRef = useRef<HTMLDivElement>(null);

  const handleNextSlide = () => {
    setCount(count + 1);
    //получать массив points, пробегаться по нему и передавать выбранный каунт в функцию
  };

  const handlePrevSlide = () => {
    setCount(count - 1);
  };
  const date = handleMinMaxYear(activeData);

  useGSAP(() => {
    const numbersElements = numbersRef.current?.children;

    gsap.set(numbersElements!, { opacity: 0, y: 50 });

    gsap.to(numbersElements!, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "Power3.easeOut",
    });
  }, [count]);

  useEffect(() => {
    count >= consts.numPoints
      ? setIsDisabledNext(true)
      : setIsDisabledNext(false);
    count <= 1 ? setIsDisabledPrev(true) : setIsDisabledPrev(false);
  }, [count]);

  useEffect(() => {
    setActiveData(handleActiveSlide(count));
  }, [count]);

  return (
    <>
      <Container>
        <BlockTitle>
          <Title>Исторические даты</Title>
        </BlockTitle>
        <HorizontalLine />
        <VerticalLine />
        <MainWrapper>
          <Circle
            circleRef={circleRef}
            points={points}
            radius={consts.radius}
            color="#42567A"
          />
          <NumberWrapper ref={numbersRef}>
            <NumberOneTitle>{date.min}</NumberOneTitle>
            <NumberTwoTitle>{date.max}</NumberTwoTitle>
          </NumberWrapper>
          <ArrowsWrapper>
            <ArrowsPanel
              isDisabledNext={isDisabledNext}
              isDisabledPrev={isDisabledPrev}
              AllData={AllData}
              count={count}
              handleNextSlide={handleNextSlide}
              handlePrevSlide={handlePrevSlide}
            />
          </ArrowsWrapper>
          <SliderWrapper>
            <Swiper dataSlide={activeData} />
          </SliderWrapper>
        </MainWrapper>
      </Container>
    </>
  );
};

export default App;
