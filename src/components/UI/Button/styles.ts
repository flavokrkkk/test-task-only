import styled, { css } from "styled-components";
import {
  ButtonColor,
  ButtonPosition,
  ButtonSize,
  ButtonTop,
} from "../../../utils/const";

interface ButtonStyleProps {
  top?: ButtonTop;
  position?: ButtonPosition;
  absolute?: boolean;
  color?: ButtonColor;
  isBorder?: boolean;
  size?: ButtonSize;
}

export const ButttonStyle = styled.button<ButtonStyleProps>`
  ${({ top }) => {
    switch (top !== undefined) {
      case top === ButtonTop.end:
        return css`
          top: 870px;
        `;
    }
  }};
  position: ${({ absolute }) => (absolute ? "absolute" : "")};
  z-index: 10;
  display: flex;
  align-items: center;
  background-color: ${({ color }) =>
    color === ButtonColor.white ? "#fff" : ""};
  background-color: ${({ color }) =>
    color === ButtonColor.bg ? "#F4F5F9" : ""};
  justify-content: center;
  ${({ position }) => {
    switch (position !== undefined) {
      case position === ButtonPosition.left:
        return css`
          left: 10px;
        `;
      case position === ButtonPosition.right:
        return css`
          right: 10px;
        `;
    }
  }};
  //   right: 10px;
  width: ${({ size }) => (size === ButtonSize.sm ? "42px" : "")};
  width: ${({ size }) => (size === ButtonSize.md ? "62px" : "")};
  height: ${({ size }) => (size === ButtonSize.md ? "62px" : "")};
  height: ${({ size }) => (size === ButtonSize.sm ? "42px" : "")};
  border: ${({ isBorder }) =>
    isBorder ? "1px solid #42567A" : "1px solid #fff"};
  border-radius: 50%;
`;
