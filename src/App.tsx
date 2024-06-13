import Circle from "./components/Circle/Circle";
import Swiper from "./components/Swiper/Swiper";
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
import "swiper/css";
import "swiper/css/navigation";
import { AllData, handleActiveSlide, handleMinMaxYear } from "./utils/mockData";
import { useEffect, useState } from "react";
import { ISlide } from "./models/ISlide";
import { useAppSelector } from "./hooks/useAppSelector";
import { countSelector } from "./store/selectors";
import { useActions } from "./hooks/useActions";
import ArrowsPanel from "./components/ArrowsPanel/ArrowsPanel";
import { IPoint } from "./models/IPoint";

function App() {
  const { count } = useAppSelector(countSelector);
  const { setCount } = useActions();

  const [isDisabledNext, setIsDisabledNext] = useState(false);
  const [isDisabledPrev, setIsDisabledPrev] = useState(false);
  const [activeData, setActiveData] = useState<ISlide[]>([]);

  const handleNextSlide = () => {
    setCount(count + 1);
    //получать массив points, пробегаться по нему и передавать выбранный каунт в функцию
  };

  const handlePrevSlide = () => {
    setCount(count - 1);
  };

  const ddd = (point: IPoint) => {
    console.log("ddd", point);
  };

  useEffect(() => {
    count >= 6 ? setIsDisabledNext(true) : setIsDisabledNext(false);
    count <= 1 ? setIsDisabledPrev(true) : setIsDisabledPrev(false);
  }, [count]);

  useEffect(() => {
    setActiveData(handleActiveSlide(count));
  }, [count]);

  const date = handleMinMaxYear(activeData);

  return (
    <>
      <Container>
        <BlockTitle>
          <Title>Исторические даты</Title>
        </BlockTitle>
        <HorizontalLine />
        <VerticalLine />
        <MainWrapper>
          <Circle radius={265} color="#42567A" ddd={ddd} />
          <NumberWrapper>
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
}

export default App;
