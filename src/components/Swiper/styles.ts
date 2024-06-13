import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperContainer = styled.div`
  width: 1300px;
  margin: 0 auto;

  @media (max-width: 1440px) {
    width: 1000px;
    margin: 0 auto;
  }

  @media (max-width: 1010px) {
    width: 900px;
    margin: 0 auto;
  }

  @media (max-width: 910px) {
    width: 700px;
    margin: 0 auto;
  }

  @media (max-width: 820px) {
    width: 610px;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    width: 510px;
    margin: 0 auto;
  }
  @media (max-width: 510) {
    width: 350px;
    height: 320px;
    margin: 0 auto;
  }

  @media (max-width: 510px) {
    width: 380px;
    height: 320px;
    margin-bottom: 100px
    margin: 0 auto;
  }
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

export const ButtonWrapper = styled.h3`
  @media (max-width: 1110px) {
    display: none;
  }
`;
