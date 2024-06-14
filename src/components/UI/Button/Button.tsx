import React, { FC } from "react";
import { ButttonStyle } from "./styles";
import {
  ButtonColor,
  ButtonPosition,
  ButtonSize,
  ButtonTop,
} from "../../../utils/const";

interface ButtonProps {
  isDisabled?: boolean;
  children: React.ReactNode;
  top?: ButtonTop;
  position?: ButtonPosition;
  absolute?: boolean;
  color?: ButtonColor;
  size?: ButtonSize;
  isBorder?: boolean;
  onClick?: () => void;
}
const Button: FC<ButtonProps> = ({
  isDisabled,
  isBorder,
  children,
  position,
  size = ButtonSize.sm,
  top,
  absolute,
  color = ButtonColor.white,
  onClick,
}) => {
  return (
    <ButttonStyle
      absolute={absolute}
      top={top}
      isBorder={isBorder}
      size={size}
      position={position}
      color={color}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </ButttonStyle>
  );
};

export default Button;
