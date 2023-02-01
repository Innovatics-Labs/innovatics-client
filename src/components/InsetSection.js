import Image from "next/image";
import React from "react";
import styled from "styled-components";
import galaxy from "../assets/images/galaxy.png";
import Button from "./Button";
import LineGradient from "./LineGradient";
import { TextWithColor } from "./Practicality";

const InsetSection = ({ children }) => {
  return (
    <Container>
      <div>
        <LineGradient
          colorFrom={`#10C75900 0%, #10C759CF 81.25%, #10C759 100%`}
          colorTo={`#10C759D2 81.25%, #10C75900 0%`}
        />
      </div>
      <div>
        <Title>
          <TextWithColor color="#44E986">Python Lab</TextWithColor> for you to
          exercise what you learnt from our expert instructor-led video
          trainings.
        </Title>
        <Button title={"Start learning"} />
      </div>
    </Container>
  );
};

export default InsetSection;

const Container = styled.section`
  padding: 2rem var(--container-padding);
  position: relative;
  overflow: hidden;
  height: 500px;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  color: white;
  background-image: linear-gradient(
    90deg,
    rgba(13, 17, 23, 1) 40%,
    rgba(13, 17, 23, 0.3) 45%
  );
  box-shadow: inset 50px 0px 70px rgba(13, 17, 23, 0.9);
  background-repeat: no-repeat;

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

const Title = styled.h3`
  font-weight: 600;
  font-size: 25px;
`;
