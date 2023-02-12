import React from "react";
import styled, { css } from "styled-components";

const variantStyles = (
  variant = "primary",
  bgColor = "#6e40c9",
  color = "white",
  borderColor
) =>
  ({
    primary: css`
      background: ${bgColor};
      color: ${color};
    `,
    outline: css`
      background: transparent;
      color: ${color};
      border-color: ${borderColor ? borderColor : "white"};
    `,
  }[variant]);

const Button = ({
  variant,
  title,
  color,
  width,
  bgColor,
  borderColor,
  size,
  rounded,
  IconRight,
  IconLeft,
  onClick,
  ...delegated
}) => {
  return (
    <StyledButton
      variant={variant}
      width={width}
      color={color}
      bgColor={bgColor}
      borderColor={borderColor}
      size={size}
      rounded={rounded}
      IconRight
      IconLeft
      onClick={onClick}
      {...delegated}
    >
      {IconLeft && <span>{IconLeft}</span>}
      {title}
      {IconLeft && <span>{IconLeft}</span>}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  border: 1px solid transparent;
  border-radius: ${({ rounded }) => `${rounded ? "2rem" : "10px"}`};
  width: ${({ width }) => `${width && width}`};
  padding-block: 10px;
  font-weight: 400;
  font-size: ${({ size }) =>
    `${size ? size : "clamp(1rem, 0.952vw + 0.643rem, 1.5rem)"}`};
  padding-inline: 2rem;
  cursor: pointer;

  ${({ variant, bgColor, color, borderColor }) =>
    variantStyles(variant, bgColor, color, borderColor)}
`;
