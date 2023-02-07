import styled from "styled-components";

const InsetSection = ({ bgImage = "/galaxy.png", children }) => {
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
  //* FIXME:: // fix the background image issue later, this is a temporary fix
  background-image: ${(props) => `linear-gradient(
      90deg,
      rgba(13, 17, 23, 1) 40%,
      rgba(13, 17, 23, 0.45) 45%
    ),
    url(${props.bgImage});`};
  background-repeat: no-repeat;
  /* background-size: cover, 1840px; */
  background-size: cover, 100%;
  /* TODO: add dynamic background positioning later */
  background-position: center;
  box-shadow: inset 50px 0px 70px rgba(13, 17, 23, 0.9);

  // FIXME: the background image issue later, this is a temporary fix
  ::before {
    /* content: "";
    position: absolute;
    width: 992px;
    height: 1486px;
    left: 603px;
    top: -281px;
    z-index: -1;
    background-image: url("/galaxy.png");
    background-repeat: no-repeat;
    box-shadow: inset 50px 0px 70px rgba(13, 17, 23, 0.9);
    transform: rotate(-90deg); */
  }
`;
