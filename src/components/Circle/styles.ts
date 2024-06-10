import styled from "styled-components";

interface CircleWrapperProps {
  radius: number;
  color: string;
}

export const CircleContainer = styled.div`
  position: relative;
`;

export const CircleWrapper = styled.div<CircleWrapperProps>`
  position: absolute;
  width: ${({ radius }) => radius * 2}px;
  height: ${({ radius }) => radius * 2}px;
  border: 1px solid ${({ color }) => color};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  left: 50%;
  opacity: 20%;
  top: 50%;
`;
