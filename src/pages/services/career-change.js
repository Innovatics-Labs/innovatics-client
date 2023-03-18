import Image from "next/image";
import React from "react";
import styled from "styled-components";

import { MaxwidthContainer } from "../../components/GlobalStyles";
import JoinDiscord from "../../components/JoinDiscord";
import JoinCohort from "../../components/JoinCohort";
import LineGradient from "../../components/LineGradient";
import ServiceHero from "../../components/services/Hero";
import ServiceCard from "../../components/services/ServiceCard";
import { QUERIES, WEIGHTS } from "../../constants";
import circuit from "../../assets/images/circuit-board.png";
import { MdOndemandVideo } from "react-icons/md";

const Index = () => {
  return (
    <>
      <ServiceHero
        headline={"Career change & Job placement"}
        subtitle="Our Service to serve you"
        bgImage={"/data-center.png"}
      />
      <DetailSection>
        <Content>
          <Description>
            <LineGradient
              colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
              colorTo="hsla(144, 85%, 42%, 0)"
            />
            <p>
              Our career change and job placement service is designed to help
              individuals who are looking to transition into the fields of data
              science, cloud engineering, networking, and software engineering.
              We understand that making a career change can be challenging, and
              that finding the right job can be a daunting task. That&apos;s why
              our team of experienced career advisors and job placement
              specialists are here to help.
            </p>
            <LineGradient
              colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
              colorTo="hsla(144, 85%, 42%, 0)"
            />
          </Description>
          <TrainingSection>
            <ServiceCard
              title={"Career Change"}
              description="Our career change service provides individuals with access to expert guidance and support in making a successful transition into the fields of data science, cloud engineering, networking, and software engineering. Our team of career advisors can provide guidance and support in areas such as career assessment, skills assessment, job market research, and career planning. We work closely with each individual to understand their unique skills and goals, and develop customized solutions to help them achieve success in their new career."
              action={false}
            />
            <GradientDivider>
              <LineGradient
                height="100px"
                colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                colorTo="hsla(144, 85%, 42%, 0)"
              />
            </GradientDivider>
            <ServiceCard
              reverse
              title={"Job Placement"}
              description="Our job placement service provides individuals with access to a wide range of job opportunities in the fields of data science, cloud engineering, networking, and software engineering. Our team of job placement specialists work closely with top employers in these fields to identify job opportunities that match the skills and qualifications of our candidates. We provide our candidates with resume review, interview coaching, and job search support to help them secure the job they want."
              action={false}
            />
          </TrainingSection>
          <Bottom>
            <GradientDivider>
              <LineGradient
                height="150px"
                colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                colorTo="hsla(144, 85%, 42%, 0)"
              />
            </GradientDivider>
            <BenefitsSection>
              <h4>Benefits</h4>
              <BenefitDesc>
                Benefits of Our Career Change and Job Placement Service:
              </BenefitDesc>
              <Image src={circuit} alt="" />
              <BenefitsList>
                <BenefitCard>
                  <h5>
                    <MdOndemandVideo size={24} />
                    Expert guidance and support
                  </h5>
                  <p>
                    Our team of experienced career advisors and job placement
                    specialists provide expert guidance and support to help
                    individuals make a successful career change and find the
                    right job.
                  </p>
                </BenefitCard>
                <BenefitCard>
                  <h5>
                    <MdOndemandVideo size={24} />
                    Access to job opportunities
                  </h5>
                  <p>
                    Our job placement service provides individuals with access
                    to a wide range of job opportunities in the fields of data
                    science, cloud engineering, networking, and software
                    engineering.
                  </p>
                </BenefitCard>
                <BenefitCard>
                  <h5>
                    <MdOndemandVideo size={24} />
                    Customized solutions:
                  </h5>
                  <p>
                    We work closely with each individual to develop customized
                    solutions to help them achieve success in their new career.
                  </p>
                </BenefitCard>
                <BenefitCard>
                  <h5>
                    <MdOndemandVideo size={24} />
                    Expert guidance and support
                  </h5>
                  <p>
                    Our team of experienced career advisors and job placement
                    specialists provide expert guidance and support to help
                    individuals make a successful career change and find the
                    right job.
                  </p>
                </BenefitCard>
              </BenefitsList>
            </BenefitsSection>
          </Bottom>
        </Content>
        <JoinCohort />
        <JoinDiscord />
      </DetailSection>
    </>
  );
};

export default Index;

const DetailSection = styled.section`
  background: var(--color-bg-black);
  color: white;
`;

const Content = styled(MaxwidthContainer)`
  padding: var(--container-padding);
`;

const Description = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  grid-template-rows: 100px auto 100px;
  gap: 1rem;
  p {
    line-height: 1.5;
    max-width: 50ch;
    font-weight: ${WEIGHTS.medium};
    font-size: var(--font-size-md);
  }
  div {
    transform: translateX(-1rem);
  }
`;

const TrainingSection = styled.section`
  display: grid;
  place-items: center;
`;

export const GradientDivider = styled.div`
  display: grid;
  place-items: center;

  div {
    transform: translateX(-1rem);
  }
`;

const Bottom = styled.div`
  text-align: center;
  p {
    line-height: 1.5;
    max-width: 50ch;
    font-weight: ${WEIGHTS.medium};
    font-size: var(--font-size-md);
    margin-inline: auto;
  }
`;

const BenefitsSection = styled.div`
  h4 {
    font-weight: ${WEIGHTS.semiBold};
    font-size: var(--font-size-xl);
    margin-bottom: 0;
  }
  img {
    width: 100%;
  }
`;

const BenefitDesc = styled.p`
  font-size: var(--font-size-xl);
`;

const BenefitsList = styled.div`
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  margin-block: 2rem;
  display: grid;
  width: 100%;
  /* place-items: center; */
  /* place-content: center; */

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const BenefitCard = styled.div`
  background: linear-gradient(
    286.85deg,
    rgba(62, 63, 73, 0.7) 0%,
    rgba(62, 63, 73, 0) 98.21%
  );
  border: 1px solid #ffffff;
  border-radius: 22px;
  padding: 1rem;
  text-align: left;
  /* width: fit-content; */

  h5 {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 600;
    font-size: 18px;
  }
  p {
    margin-inline: 0;
  }
`;
