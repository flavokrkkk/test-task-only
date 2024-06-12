import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  border-left: 1px solid #42567a;
  border-right: 1px solid #42567a;
  position: relative;

  height: 100vh;
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
`;

export const HorizontalLine = styled(Line)`
  width: 100%;
  height: 1px;
  top: 50%;
  transform: translateY(-20%);
  background-color: #42567a;
  z-index: 3;
  opacity: 50%;
`;

export const VerticalLine = styled(Line)`
  width: 1px;
  height: 100vh;
  left: 50%;
  transform: translateX(-20%);
  background-color: #42567a;
  opacity: 50%;
`;

export const BlockTitle = styled.div`
  position: absolute;
  z-index: 1;
  margin-top: 170px;
  max-width: 520px;
  border-image: linear-gradient(#3877ee, #ef5da8) 30;
  border-width: 0px 0px 0px 5px;
  border-style: solid;
`;

export const Title = styled.h1`
  font-size: 54px;
  margin-left: 70px;
`;

export const NumberWrapper = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  gap: 105px;
`;

export const NumberOneTitle = styled.h1`
  font-size: 200px;
  letter-spacing: -5px;
  color: #5d5fef;
`;
export const NumberTwoTitle = styled.h1`
  font-size: 200px;
  color: #ef5da8;
`;

export const SliderWrapper = styled.div`
  width: 1440px;
  // position: absolute;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const ArrowsWrapper = styled.div`
  position: absolute;
  left: 0;
  padding: 70px;
  bottom: 150px;
`;
