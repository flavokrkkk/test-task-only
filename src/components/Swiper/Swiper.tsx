import { FC, useRef, useState } from "react";
import { SwiperRef, Swiper as Swipers } from "swiper/react";
import { ISlide } from "../../models/ISlide";
import {
  SlideCard,
  SlideCardText,
  SlideCardTitle,
  SwiperContainer,
} from "./styles";
import { ButtonPosition, ButtonTop, consts } from "../../utils/const";
import ArrowPrev from "../../assets/ArrowPrev";
import ArrowNext from "../../assets/ArrowNext";
import Button from "../UI/Button/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface SwiperProps {
  dataSlide: ISlide[];
}

const Swiper: FC<SwiperProps> = ({ dataSlide }) => {
  const [isVisibleNext, setIsVisibleNext] = useState(true);
  const [isVisiblePrev, setIsVisiblePrev] = useState(false);

  const swiperRef = useRef<SwiperRef>(null);

  const handleSlideChange = (index: number) => {
    swiperRef.current?.swiper.slideTo(index);
  };

  const handleSlidePrev = () => {
    handleSlideChange(0);
  };
  const handleSlideNext = () => {
    handleSlideChange(dataSlide.length - 1);
  };

  useGSAP(() => {
    const textEl = swiperRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(textEl, {
      duration: 0.4,
      opacity: 0,
      // scale: 0.8,
      ease: "power2.out",
      delay: 0.001,
    });

    tl.to(textEl, {
      duration: 0.5,
      opacity: 1,
      scale: 1,
      ease: "power2.out",
      delay: 0.01,
    });

    return () => {
      tl.kill();
    };
  }, [dataSlide]);

  return (
    <SwiperContainer>
      <Swipers
        ref={swiperRef}
        slidesPerView={consts.SLIDES_PER_VIEW}
        spaceBetween={30}
        onSlideNextTransitionStart={() => {
          setIsVisibleNext(false);
          setIsVisiblePrev(true);
        }}
        onSlidePrevTransitionStart={() => {
          setIsVisiblePrev(false);
          setIsVisibleNext(true);
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {dataSlide.map((slide) => (
          <SlideCard>
            <SlideCardTitle>{slide.year}</SlideCardTitle>
            <SlideCardText>{slide.text}</SlideCardText>
          </SlideCard>
        ))}
      </Swipers>
      {isVisiblePrev && (
        <Button
          absolute
          top={ButtonTop.end}
          position={ButtonPosition.left}
          onClick={handleSlidePrev}
        >
          <ArrowPrev />
        </Button>
      )}

      {isVisibleNext && (
        <Button
          absolute
          position={ButtonPosition.right}
          top={ButtonTop.end}
          onClick={handleSlideNext}
        >
          <ArrowNext />
        </Button>
      )}
    </SwiperContainer>
  );
};

export default Swiper;
