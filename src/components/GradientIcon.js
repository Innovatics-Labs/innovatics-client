import styled from "styled-components";

const GradientIcon = ({ IconComponent, bgColor }) => {
  const Component = IconComponent;
  return (
    <GradientIconStyle>
      {IconComponent && IconComponent}
      <Span bgColor={bgColor}></Span>
    </GradientIconStyle>
  );
};

export default GradientIcon;

const GradientIconStyle = styled.div`
  /* margin: 0 auto; */
  position: relative;
  text-align: center;
`;

const Span = styled.span`
  background-color: ${({ bgColor }) => `${bgColor}`};
  filter: blur(20px);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;
