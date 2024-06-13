import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  border-left: 1px solid #42567a;
  border-right: 1px solid #42567a;
  position: relative;

  height: 100vh;

  @media (max-width: 1440px) {
    width: 1100px;
    border: none;
  }

  @media (max-width: 1110px) {
    width: 1000px;
  }

  @media (max-width: 1010px) {
    width: 900px;
  }

  @media (max-width: 910px) {
    width: 690px;
    margin: 0 auto;
  }

  @media (max-width: 820px) {
    width: 600px;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    width: 510px;
    margin: 0 auto;
  }

  @media (max-width: 510px) {
    max-width: 370px;
    margin: 0 auto;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh);
`;

const Line = styled.div`
  position: absolute;
  background-color: #000;

  @media (max-width: 700px) {
    // position: static;
  }
`;

export const HorizontalLine = styled(Line)`
  width: 100%;
  height: 1px;
  top: 50%;
  transform: translateY(-20%);
  background-color: #42567a;
  z-index: 3;
  opacity: 50%;

  @media (max-width: 1440px) {
    display: none;
    top: 70%;
  }
`;

export const VerticalLine = styled(Line)`
  width: 1px;
  height: 100vh;
  left: 50%;
  transform: translateX(-20%);
  background-color: #42567a;
  opacity: 50%;

  @media (max-width: 1440px) {
    display: none;
  }
`;

export const BlockTitle = styled.div`
  position: absolute;
  z-index: 1;
  margin-top: 170px;
  max-width: 520px;
  border-image: linear-gradient(#3877ee, #ef5da8) 30;
  border-width: 0px 0px 0px 5px;
  border-style: solid;

  @media (max-width: 1110px) {
    border: none;
    width: 240px;
  }

  @media (max-width: 1110px) {
    margin-top: 120px;

    width: 240px;
  }
`;

export const Title = styled.h1`
  font-size: 54px;
  margin-left: 70px;
  @media (max-width: 1110px) {
    font-size: 34px;
    margin-left: 10px;
  }
`;

export const NumberWrapper = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  gap: 105px;

  @media (max-width: 1440px) {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #42567a;
  }
  @media (max-width: 450px) {
    justify-content: space-evenly;
  }
  @media (max-width: 415px) {
    justify-content: center;
    gap: 40px;
    margin-bottom: 130px;
  }
`;

export const NumberOneTitle = styled.h1`
  font-size: 200px;
  letter-spacing: -5px;
  color: #5d5fef;
  @media (max-width: 1440px) {
    font-size: 56px;
  }
  @media (max-width: 450px) {
    font-size: 65px;
  }
`;
export const NumberTwoTitle = styled.h1`
  font-size: 200px;
  color: #ef5da8;
  @media (max-width: 1440px) {
    font-size: 56px;
  }
  @media (max-width: 450px) {
    font-size: 65px;
  }
`;

export const SliderWrapper = styled.div`
  width: 1440px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  @media (max-width: 1440px) {
    width: 1140px;
  }

  @media (max-width: 1110px) {
    width: 1140px;
    margin-bottom: 200px;
  }

  @media (max-width: 910px) {
    width: 940px;
    margin-bottom: 200px;
  }
`;

export const ArrowsWrapper = styled.div`
  position: absolute;
  left: 0;
  padding: 70px;
  bottom: 160px;

  @media (max-width: 1110px) {
    padding: 5px;
    bottom: 20px;
  }
`;
