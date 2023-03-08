import React from "react";
import styled from "styled-components";
import { MaxwidthContainer } from "../../components/GlobalStyles";
import LineGradient from "../../components/LineGradient";
import { WEIGHTS } from "../../constants";
import ServiceHero from "../../components/services/Hero";
import ServiceCard from "../../components/services/ServiceCard";
import JoinCohort from "../../components/JoinCohort";
import JoinDiscord from "../../components/JoinDiscord";
import CoursesSection from "../../components/home/CoursesSection";
import LearningsSections from "../../components/home/LearningsSections";

const Training = () => {
  return (
    <div>
      <ServiceHero
        bgImage={"/processor.png"}
        headline="Training"
        subtitle={"Our Service to serve you"}
      />
      <DetailSection>
        <Content>
          <Description>
            <LineGradient
              colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
              colorTo="hsla(144, 85%, 42%, 0)"
            />
            <p>
              Our training service offers comprehensive courses in four fields
              that are in high demand in today&apos;s job market: data science,
              cloud engineering, software engineering, and cyber security. Each
              field has its own unique set of skills and techniques, and our
              training programs are designed to provide learners with the
              knowledge and practical experience necessary to excel in their
              chosen career paths.
            </p>
            <LineGradient
              colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
              colorTo="hsla(144, 85%, 42%, 0)"
            />
          </Description>
          <TrainingSection>
            <ServiceCard
              title={"Data Science"}
              description=" Data science is a rapidly growing field that involves the use
                  of statistical and computational methods to extract insights
                  from data. Our data science training program covers a wide
                  range of topics, including data analysis, machine learning,
                  and statistical modeling. Learners will gain hands-on
                  experience working with popular data science tools and
                  technologies, including Python, R, SQL, and Hadoop."
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
              title={"Cloud Engineering"}
              description="As businesses continue to move their operations to the
                    cloud, the demand for cloud engineers has grown
                    significantly. Our cloud engineering training program covers
                    key concepts and skills related to cloud infrastructure,
                    deployment, and management. Learners will gain practical
                    experience working with cloud platforms such as Amazon Web
                    Services (AWS), Microsoft Azure, and Google Cloud Platform
                    (GCP)."
            />
            <GradientDivider>
              <LineGradient
                height="100px"
                colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                colorTo="hsla(144, 85%, 42%, 0)"
              />
            </GradientDivider>
            <ServiceCard
              title={"Software Engineering"}
              description="Software engineering is a field that involves the development of software applications and systems. Our software engineering training program covers a range of programming languages and tools, including Java, Python, C++, and Git. Learners will also gain experience in software development methodologies such as Agile and DevOps."
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
              title={"Cyber Security"}
              description="As the threat of cyber attacks continues to grow, the need for skilled cyber security professionals has become increasingly important. Our cyber security training program covers key topics such as network security, vulnerability assessment, and incident response. Learners will gain hands-on experience using industry-standard tools and techniques, including penetration testing and security analysis."
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
            <p>
              At our training service, we are committed to providing
              high-quality, practical training that prepares learners for
              success in their chosen fields. Whether you are just starting out
              or looking to advance your career, our training programs can help
              you achieve your goals. With expert instructors, hands-on
              experience, and cutting-edge technologies, we provide a
              comprehensive learning experience that sets our learners up for
              success.
            </p>
            <GradientDivider>
              <LineGradient
                height="150px"
                colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                colorTo="hsla(144, 85%, 42%, 0)"
              />
            </GradientDivider>
          </Bottom>
        </Content>
      </DetailSection>
      <LearningsSections />
      <CoursesSection />
      <JoinCohort />
      <JoinDiscord />
    </div>
  );
};

export default Training;

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
`;

const TrainingSection = styled.section`
  display: grid;
  place-items: center;
`;

const GradientDivider = styled.div`
  display: grid;
  place-items: center;
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
