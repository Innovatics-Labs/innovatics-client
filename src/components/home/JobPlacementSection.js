import Link from "next/link";
import styled from "styled-components";
import { WEIGHTS, QUERIES } from "../../constants";

import Button from "../Button";
import { MaxwidthContainer } from "../GlobalStyles";
import OurProcess from "../OurProcess";
import {
  TopContent,
  TextContent,
  // Title,
  Start,
} from "./servicesStyle";

const JobPlacement = () => {
  return (
    <Container>
      <OurProcess
        title={"Our job placement program includes"}
        subtitle={
          "Our job placement program has a proven track record of success - in fact, 90% of our graduates land a job in the data science field within six months of completing the program. We're committed to continuing to provide our graduates with the support and resources they need to achieve their career goals."
        }
        process1="Career coaching"
        process2="Industry connections"
        process3="Networking events"
        process4="Portfolio development"
        action={false}
        bgDark={true}
      />
      <Content>
        <TopContent>
          <TextContent>
            <Title>Job Placement & Career Change</Title>
            <Tagline>Get Hired by the companies you desired</Tagline>
            <Description>
              If you are looking to transition into the tech industry or take
              your career to the next level, we can help. We offer resume
              building and interview preparation services, as well as
              connections to top employers in the tech industry.
            </Description>
            <Start>
              <Button
                as={Link}
                href="/services/career-change"
                bgColor={
                  "linear-gradient(145.35deg, rgba(62, 63, 73, 0.7) 4.67%, #3E3F49 95.66%)"
                }
                color={"white"}
                title="Get Started Now"
              />
              <Button
                as={Link}
                href="/services/career-change"
                variant={"outline"}
                borderColor={"#8691A6"}
                color="#121212"
                title={"Learn More"}
              />
            </Start>
          </TextContent>
        </TopContent>
      </Content>
    </Container>
  );
};

export default JobPlacement;

const Container = styled.section`
  background-color: var(--dusty-grey);
  /* padding-block: 4rem; */
  background-image: url("/why-ine-bg-revised 1.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const Title = styled.h4`
  color: #8239cd;
`;

export const Content = styled(MaxwidthContainer)`
  padding: 6rem var(--container-padding);
`;

const Tagline = styled.p`
  font-weight: ${WEIGHTS.medium};
  font-size: 2.8rem;
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 2.1rem;
  }
`;

const Description = styled.p`
  font-size: var(--font-size-md);
  color: #121212;
  width: 60vw;
  margin-inline: auto;
  @media ${QUERIES.phoneAndSmaller} {
    width: revert;
  }
`;
