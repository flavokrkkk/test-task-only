import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperContainer = styled.div`
  width: 1300px;
  margin: 0 auto;
`;

export const Swipers = styled(Swiper)`
  height: 200px;
`;

export const SlideCard = styled(SwiperSlide)`
  padding: 10px;
`;

export const SlideCardTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 25px;
  color: #3877ee;
`;

export const SlideCardText = styled.h3`
  font-size: 20px;
  color: #42567a;
  font-weight: 400;
`;
