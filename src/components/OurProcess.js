import React from "react";
import styled from "styled-components";
import { BsCollectionPlay } from "react-icons/bs";

import { WEIGHTS, QUERIES } from "../constants";
import Button from "./Button";
import { MaxwidthContainer } from "./GlobalStyles";

const OurProcess = ({ bgDark }) => {
  return (
    <Container bgDark={bgDark}>
      <Content>
        <TextContent>
          <Title>Get to know our promising process</Title>
          <Subtitle>
            Our training programs are designed to equip you with the knowledge
            and skills you need to succeed in the tech industry.
          </Subtitle>
          <Button title={"Request Information"} variant="outline" />
        </TextContent>
        <ProcessList>
          <li>
            <Icon>
              <BsCollectionPlay />
            </Icon>
            Send us your project overview
          </li>
          <li>
            <Icon>
              <BsCollectionPlay />
            </Icon>
            We will reach out for more details
          </li>
          <li>
            <Icon>
              <BsCollectionPlay />
            </Icon>
            Our experts will work with you
          </li>
          <li>
            <Icon>
              <BsCollectionPlay />
            </Icon>
            You’ll become happy at the end.
          </li>
        </ProcessList>
      </Content>
    </Container>
  );
};

export default OurProcess;

const Container = styled.article`
  padding: 6rem;
  backdrop-filter: blur(15px);
  background: ${({ bgDark }) =>
    bgDark
      ? `#0d1117`
      : `linear-gradient(
    145.35deg,
    rgba(62, 63, 73, 0.7) 4.67%,
    rgba(62, 63, 73, 0) 95.66%
  );`};
  @media ${QUERIES.phoneAndSmaller} {
    padding-inline: 2.5rem;
  }
`;

const Content = styled(MaxwidthContainer)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-content: center;
  gap: 2rem;
  color: white;

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div``;

const Title = styled.h4`
  font-weight: ${WEIGHTS.medium};
  font-size: var(--font-size-xl);
`;

const Subtitle = styled.p`
  font-size: var(--font-size-md);
`;

const ProcessList = styled.ul`
  width: fit-content;
  list-style: none;
  font-size: var(--font-size-md);
  padding-left: 0;

  li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Icon = styled.span`
  background: rgba(13, 17, 23, 0.8);
  border-radius: 5px;
  display: inline-block;
  padding: 10px;
`;
