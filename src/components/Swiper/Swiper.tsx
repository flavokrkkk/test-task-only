import { FC, useRef } from "react";
import { Navigation } from "swiper/modules";
import { SwiperRef, SwiperSlide, Swiper as Swipers } from "swiper/react";
import { ISlide } from "../../models/ISlide";

interface SwiperProps {
  dataSlide: ISlide[];
}

const Swiper: FC<SwiperProps> = ({ dataSlide }) => {
  const swiperRef = useRef<SwiperRef>(null);

  const handleSlideChange = (index: number) => {
    swiperRef.current?.swiper.slideTo(index);
  };

  return (
    <div style={{ width: "1300px", margin: "0 auto" }}>
      <Swipers
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          height: "200px",
        }}
        navigation={{
          nextEl: ".custom-button-next",
          prevEl: ".custom-button-prev",
        }}
        modules={[Navigation]}
      >
        {dataSlide.map((slide) => (
          <SwiperSlide key={slide.id} style={{ padding: "25px" }}>
            <h3
              style={{
                marginBottom: "20px",
                fontSize: "25px",
                color: "#3877EE",
              }}
            >
              {slide.year}
            </h3>
            <p style={{ fontSize: "20px", color: "#42567A" }}>{slide.text}</p>
          </SwiperSlide>
        ))}
      </Swipers>
      <button
        style={{ top: "875px" }}
        className="swiper-button-prev"
        onClick={() => handleSlideChange(0)}
      ></button>
      <button
        style={{ top: "875px" }}
        className="swiper-button-next"
        onClick={() => handleSlideChange(3)}
      ></button>
    </div>
  );
};

export default Swiper;
