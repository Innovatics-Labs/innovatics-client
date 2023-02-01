import styled from "styled-components";

const LineGradient = ({ colorFrom, colorTo, height = "100%" }) => {
  return (
    <LineGradientStyle
      colorFrom={colorFrom}
      colorTo={colorTo}
      height={height}
    />
  );
};

export default LineGradient;

const LineGradientStyle = styled.div`
  background: ${({ colorFrom, colorTo }) =>
    `linear-gradient(${colorFrom}, ${colorTo})`};
  width: 5px;
  border-radius: 6px;
  border-width: 5px;
  height: ${({ height }) => height};
  transform: translateX(1rem);
  /* margin: 0 auto; */
`;
