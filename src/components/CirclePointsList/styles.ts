import styled from "styled-components";
import { IPoint } from "../../models/IPoint";

interface CircleListItemProps {
  point: IPoint;
  color: string;
}

export const CircleListItem = styled.div<CircleListItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  z-index: 3;
  width: 8px;
  height: 8px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  transform: ${({ point }) => `translate(${point.x}px, ${point.y}px)`};
`;

export const CircleActive = styled.div<CircleListItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  z-index: 3;
  width: 56px;
  height: 56px;
  background-color: #f4f5f9;
  border-radius: 50%;
  border: 1px solid #42567a;
  transform: ${({ point }) =>
    `translate(${point.x - 25}px, ${point.y - 26}px)`};
`;
