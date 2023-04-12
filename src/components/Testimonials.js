import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { GiHumanTarget } from "react-icons/gi";
import { MaxwidthContainer } from "./GlobalStyles";
import { QUERIES, WEIGHTS } from "../constants";

const Testimonials = () => {
  return (
    <Container>
      <MaxwidthContainer>
        <Heading>Testimonials</Heading>
        <SubHeading>
          Don&apos;t just take our word for it - here&apos;s what some of our
          Data Science Bootcamp graduates have to say about their experiences.
          We&apos;re proud of the successes that our graduates have achieved,
          and we&apos;re committed to continuing to provide high-quality data
          science education to the next generation of data professionals.
        </SubHeading>
        <TestimonialCarousel>
          <Splide aria-label="Testimonials" style={{ marginTop: "2.5rem" }}>
            <SplideSlide>
              <TestimonialCard>
                <Icon>
                  <GiHumanTarget size={40} />
                </Icon>
                <div>
                  <div>
                    <Testimonee>Halimat Jihane</Testimonee>
                    <TestimoneePosition>
                      Data Analyst - Microsoft
                    </TestimoneePosition>
                  </div>
                  <TestimonialDetail>
                    Habitasse cursus id ullamcorper amet. Tincidunt mi vulputate
                    ut imperdiet elit justo. Blandit pretium vitae hendrerit
                    tincidunt turpisvultricies. Dolor id pretium, vitae dictum
                    curabitur vulputate id. Morbi nunc diam, suspendisse ut
                    ultrices erat. Tristique pretium, rutrum ullamcorper ac
                    feugiat id suspendisse feugiat vitae.
                  </TestimonialDetail>
                </div>
              </TestimonialCard>
            </SplideSlide>
            <SplideSlide>
              <TestimonialCard>
                <Icon>
                  <GiHumanTarget size={40} />
                </Icon>
                <div>
                  <div>
                    <Testimonee>Halimat Jihane</Testimonee>
                    <TestimoneePosition>
                      Data Analyst - Microsoft{" "}
                    </TestimoneePosition>
                  </div>
                  <TestimonialDetail>
                    Habitasse cursus id ullamcorper amet. Tincidunt mi vulputate
                    ut imperdiet elit justo. Blandit pretium vitae hendrerit
                    tincidunt turpisvultricies. Dolor id pretium, vitae dictum
                    curabitur vulputate id. Morbi nunc diam, suspendisse ut
                    ultrices erat. Tristique pretium, rutrum ullamcorper ac
                    feugiat id suspendisse feugiat vitae.
                  </TestimonialDetail>
                </div>
              </TestimonialCard>
            </SplideSlide>
          </Splide>
        </TestimonialCarousel>
      </MaxwidthContainer>
    </Container>
  );
};

export default Testimonials;

const Container = styled.section`
  padding: var(--container-padding);
`;

const Heading = styled.h5`
  font-weight: ${WEIGHTS.semiBold};
  font-size: var(--font-size-lg);
  text-align: center;
  color: #ffffff;
`;

const SubHeading = styled.p`
  font-weight: ${WEIGHTS.medium};
  font-size: var(--font-size-md);
  line-height: 1.5;
  text-align: center;
  color: #ffffff;
  max-width: 70ch;
  margin-inline: auto;
`;

const TestimonialCarousel = styled.div`
  max-width: 70%;
  margin-inline: auto;
`;

const TestimonialCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem 3rem;
  color: white;
  background: linear-gradient(
    145.35deg,
    rgba(62, 63, 73, 0.7) 4.67%,
    rgba(62, 63, 73, 0) 95.66%
  );
  backdrop-filter: blur(20px);
  border-radius: 10px;
  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1.5rem;
  }
`;

const Icon = styled.p`
  background: linear-gradient(180deg, #ef1050 0%, #9169ff 100%);
  border-radius: 9999px;
  padding: 10px;
  svg {
  }
`;

const Testimonee = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 7px;
`;

const TestimoneePosition = styled.p`
  color: rgba(255, 255, 255, 0.75);
  margin-top: 0;
  margin-bottom: 1.3rem;
`;

const TestimonialDetail = styled.p`
  line-height: 1.3;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  @media ${QUERIES.phoneAndSmaller} {
    font-size: revert;
  }
`;
