import styled from "styled-components";

interface CircleWrapperProps {
  radius: number;
  color: string;
}

export const CircleContainer = styled.div`
  position: absolute;
  z-index: 111;

  @media (max-width: 1440px) {
    display: none;
  }
`;

export const CircleWrapper = styled.div<CircleWrapperProps>`
  width: ${({ radius }) => radius * 2}px;
  height: ${({ radius }) => radius * 2}px;
  border: 1px solid ${({ color }) => color};
  border-radius: 100%;
  left: 50%;
  opacity: 60%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
