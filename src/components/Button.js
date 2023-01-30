import React from "react";
import styled, { css } from "styled-components";

const variantStyles = (
  variant = "primary",
  bgColor = "#6e40c9",
  color = "white"
) =>
  ({
    primary: css`
      background: ${bgColor};
      color: ${color};
    `,
    outline: css`
      background: transparent;
      color: white;
      border: 1px solid white;
    `,
  }[variant]);

const Button = ({ variant, title, color, width, bgColor }) => {
  return (
    <StyledButton variant={variant} color={color} bgColor={bgColor}>
      {title}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  border: 1px solid transparent;
  border-radius: 10px;
  padding-block: 10px;
  font-weight: 400;
  font-size: 24px;
  padding-inline: 35px;
  cursor: pointer;

  ${({ variant, bgColor, color }) => variantStyles(variant, bgColor, color)}
`;
