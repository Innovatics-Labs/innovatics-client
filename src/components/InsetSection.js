import styled from "styled-components";

const InsetSection = ({ bgImage, children }) => {
  return <Container bgImage={bgImage}>{children}</Container>;
};

export default InsetSection;

const Container = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  position: relative;
  padding: 2rem var(--container-padding);
  overflow: hidden;
  color: white;
  background-image: linear-gradient(
    90deg,
    rgba(13, 17, 23, 1) 40%,
    rgba(13, 17, 23, 0.3) 45%
  );
  background-repeat: no-repeat;
  box-shadow: inset 50px 0px 70px rgba(13, 17, 23, 0.9);

  ::before {
    content: "";
    position: absolute;
    width: 992px;
    height: 1486px;
    left: 603px;
    top: -281px;
    z-index: -1;
    background-image: url("/galaxy.png");
    background-repeat: no-repeat;
    box-shadow: inset 50px 0px 70px rgba(13, 17, 23, 0.9);
    transform: rotate(-90deg);
  }
`;
