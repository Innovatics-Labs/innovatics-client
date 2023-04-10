import Image from "next/image";
import styled from "styled-components";
import { WEIGHTS, QUERIES } from "../../constants";

import Button from "../Button";
import OurProcess from "../OurProcess";
import { Content, TopContent, TextContent } from "./servicesStyle";
import group from "../../assets/images/Group 1000004654.png";
import { TextWithColor } from "./Practicality";
import { MaxwidthContainer } from "../GlobalStyles";

const InnovationSection = () => {
  return (
    <Container>
      <OurProcess />
      <MaxwidthContainer>
        <Content>
          <TopContent>
            <TextContent>
              <Title>Innovation & Development</Title>
              <Tagline>Creativity mixed with Foresight</Tagline>
              <Description>
                Our innovation and development services help you identify
                opportunities for growth and stay at the forefront of industry
                trends. We understand the importance of staying ahead of the
                curve in the tech industry.
              </Description>
            </TextContent>
          </TopContent>
          <BottomContent>
            <div>
              <Image src={group} alt="" />
            </div>
            <h4>
              We <TextWithColor color="#FAD740"> Build</TextWithColor> What you{" "}
              <TextWithColor color="#FAD740">Imagine</TextWithColor>
            </h4>
          </BottomContent>
        </Content>
      </MaxwidthContainer>
    </Container>
  );
};

export default InnovationSection;

const Container = styled.section`
  background-color: #0d1117;
  background-image: url("/bg-grad.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h4`
  color: #fad740;
`;

const Tagline = styled.p`
  font-weight: ${WEIGHTS.medium};
  font-size: 2.8rem;
  color: white;
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 2.3rem;
  }
`;

const Description = styled.p`
  font-size: var(--font-size-md);
  line-height: 1.3;
  color: #121212;
  width: 60vw;
  margin-inline: auto;
  color: white;
  @media ${QUERIES.phoneAndSmaller} {
    width: revert;
  }
`;

const BottomContent = styled.div`
  color: white;
  padding: var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  h4 {
    font-size: var(--font-size-3xl);
    width: 10ch;
    line-height: 1.5;
  }

  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
    h4 {
      width: revert;
      line-height: 1.5;
    }
  }
`;
