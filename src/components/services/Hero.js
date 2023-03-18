import React from "react";
import styled, { css } from "styled-components";
import { QUERIES, WEIGHTS } from "../../constants";

const ServiceHero = ({ bgImage, headline, subtitle }) => {
  return (
    <HeroBg bgImage={bgImage}>
      <HeroContainer>
        <Headline>{headline}</Headline>
        <Subtitle>{subtitle}</Subtitle>
      </HeroContainer>
    </HeroBg>
  );
};

export default ServiceHero;

const HeroBg = styled.header`
  background: ${(props) =>
    props.bgImage
      ? `
      linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.bgImage});`
      : "var(--color-bg-black)"};

  background-size: cover;
`;

const HeroContainer = styled.div`
  padding: var(--container-padding);
  display: grid;
  place-items: center;
  color: white;
  font-weight: ${WEIGHTS.semiBold};
`;

const Headline = styled.h2`
  font-size: var(--font-size-3xl);
  line-height: 1.5;
  margin-bottom: 5px;
  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
  }
`;

const Subtitle = styled.p`
  font-size: var(--font-size-xl);
  margin-top: 5px;
`;
