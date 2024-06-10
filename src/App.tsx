import Circle from "./components/Circle/Circle";
import CirclePoints from "./components/CirclePoints/CirclePoints";
import Swiper from "./components/Swiper/Swiper";
import {
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
import { dataSlide } from "./utils/mockData";

function App() {
  return (
    <>
      <Container>
        <BlockTitle>
          <Title>Исторические даты</Title>
        </BlockTitle>
        <HorizontalLine />
        <VerticalLine />
        <MainWrapper>
          <Circle radius={265} color="#42567A">
            <CirclePoints radius={265} numPoints={6} color="#42567A" />
          </Circle>
          <NumberWrapper>
            <NumberOneTitle>2015</NumberOneTitle>
            <NumberTwoTitle>2022</NumberTwoTitle>
          </NumberWrapper>
          <SliderWrapper>
            <Swiper dataSlide={dataSlide} />
          </SliderWrapper>
        </MainWrapper>
      </Container>
    </>
  );
}

export default App;
