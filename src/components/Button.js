import React from "react";
import styled, { css } from "styled-components";

const variantStyles = (
  variant = "primary",
  bgColor = "#6e40c9",
  color = "white",
  borderColor,
  hoverbg = "white",
  hover = false
) =>
  ({
    primary: css`
      background: ${bgColor};
      color: ${color};
      transition: all 0.3s;
      :hover {
        filter: drop-shadow(0 4px 40px rgba(255, 255, 255, 0.4));
        /* box-shadow: 0px 0px 40px ${bgColor}; */
      }
    `,
    outline: css`
      background: transparent;
      color: ${color};
      border-color: ${borderColor ? borderColor : "white"};
      transition: all 0.3s;
      :hover {
        background: white;
        color: #0d1117;
        box-shadow: 0px 4px 60px rgba(255, 255, 255, 0.5);

        svg {
          color: #0d1117;
        }
      }
    `,
  }[variant]);

const Button = ({
  variant,
  title,
  color,
  width,
  size,
  rounded,
  IconRight,
  IconLeft,
  onClick,
  className,
  disabled,
  hoverbg,
  hover,
  ...delegated
}) => {
  return (
    <StyledButton
      className={className}
      variant={variant}
      width={width}
      color={color}
      size={size}
      rounded={rounded}
      onClick={onClick}
      hoverbg={hoverbg}
      hover={hover}
      {...delegated}
    >
      {IconLeft && <span>{IconLeft}</span>}
      {title}
      {IconRight && <span>{IconRight}</span>}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid transparent;
  border-radius: ${({ rounded }) => `${rounded ? "2rem" : "10px"}`};
  width: ${({ width }) => `${width && width}`};
  padding-block: 12px;
  font-weight: 400;
  font-size: ${({ size }) =>
    `${size ? size : "clamp(1rem, 0.952vw + 0.643rem, 1.2rem)"}`};
  padding-inline: 2rem;
  cursor: pointer;

  ${({ variant, bgColor, color, borderColor, hover, hoverbg }) =>
    variantStyles(variant, bgColor, color, borderColor, hover, hoverbg)}
`;
