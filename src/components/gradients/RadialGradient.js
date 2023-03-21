import React from "react";
import styled from "styled-components";

const RadialGradient = ({
  gradient = "#EF1050 0%, #C0083D 27.56%, rgba(231, 15, 77, 0.45) 38%, rgba(238, 133, 163, 0.52) 75.01%, #E80E4C 100%",
  top,
  right,
  left,
  bottom,
}) => {
  return (
    <Container
      gradient={gradient}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
    ></Container>
  );
};

export default RadialGradient;

const Container = styled.div`
  background: radial-gradient(
    483.9% 2719.65% at -49.5% -250%,
    ${({ gradient }) => gradient}
  );
  filter: blur(200px);
  height: 200px;
  width: 200px;
  position: absolute;
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  z-index: -1;
`;
