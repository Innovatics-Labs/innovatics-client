import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import { WEIGHTS, QUERIES } from "../../constants";

import Button from "../Button";
import {
  Content,
  TopContent,
  TextContent,
  // Title,
  Start,
} from "./servicesStyle";

const Consulting = () => {
  return (
    <Container>
      <Content>
        <TopContent>
          <TextContent>
            <Title>Consultation & Contracting</Title>
            <Tagline>A Team of skilled professionals at your disposal.</Tagline>
            <Description>
              Whether you need assistance with a specific project or want to
              optimize your tech infrastructure, we can provide the guidance and
              support you need. Our team of experts has years of experience in
              the tech industry, and we are here to help you with any challenges
              you may face.
            </Description>
            <Start>
              <Button
                bgColor={
                  "linear-gradient(145.35deg, rgba(62, 63, 73, 0.7) 4.67%, #3E3F49 95.66%)"
                }
                color={"white"}
                title="Get Started Now"
                as={Link}
                href="/services/consultation"
              />
              <Button
                variant={"outline"}
                borderColor={"#8691A6"}
                color="#121212"
                title={"Learn More"}
                as={Link}
                href="/services/consultation"
              />
            </Start>
          </TextContent>
        </TopContent>
      </Content>
    </Container>
  );
};

export default Consulting;

const Container = styled.section`
  background-color: var(--dusty-grey);
  padding-block: 8rem;
  background-image: url("/why-ine-bg-revised 1.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const Title = styled.h4`
  color: #ffa28b;
`;

const Tagline = styled.p`
  font-weight: ${WEIGHTS.medium};
  font-size: 2.8rem;
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 2.3rem;
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
