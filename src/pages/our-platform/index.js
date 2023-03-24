import React from "react";
import styled from "styled-components";
import { MdStarOutline } from "react-icons/md";

import LineGradient from "../../components/LineGradient";
import GradientIcon from "../../components/GradientIcon";
import ServiceHero from "../../components/services/Hero";
import { QUERIES, WEIGHTS } from "../../constants";
import { DescriptionMod, GradientDivider } from "../services/career-change";
import JoinDiscord from "../../components/JoinDiscord";
import JoinCohort from "../../components/JoinCohort";
import { DetailSection, ServiceContent } from "../services/training";
import {
  InnovationCard,
  InnovationDetail,
  InnovationFeature,
  FeatureText,
  FeatureTextContainer,
  Spacer,
} from "../services/innovation";

const OurPlatform = () => {
  return (
    <div>
      <ServiceHero
        headline={"Our Platform"}
        subtitle="What we have for you on the inside"
        bgImage={"/abstract-1392404_1920.png"}
      />
      <DetailSection>
        <ServiceContent>
          <DescriptionMod>
            <LineGradient
              colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
              colorTo="hsla(144, 85%, 42%, 0)"
            />
            <p>
              Welcome to our platform, where we provide a range of services to
              help you develop your skills, advance your career, and achieve
              your goals. Our virtual lab is designed to provide you with
              hands-on training in a variety of fields, from technology and
              engineering to healthcare and business. Whether you&apos;re
              looking to learn new skills or build on existing ones, our virtual
              lab offers a flexible and convenient way to do so.
            </p>
            <LineGradient
              colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
              colorTo="hsla(144, 85%, 42%, 0)"
            />
          </DescriptionMod>
          <InnovationDetail>
            <div>
              <h4 style={{ fontWeight: 600, fontSize: 32 }}>Services</h4>
              <p>Our services cover a wide range of technologies, including:</p>
            </div>
            <InnovationFeature>
              <InnovationCard>
                <GradientDivider>
                  <LineGradient
                    height="100px"
                    colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                    colorTo="hsla(144, 85%, 42%, 0)"
                  />
                </GradientDivider>
                <GradientDivider>
                  <GradientIcon
                    style={{ transform: "revert" }}
                    IconComponent={<MdStarOutline size={24} />}
                    bgColor="#10C759"
                  />
                </GradientDivider>
                <FeatureTextContainer>
                  <Spacer />
                  <FeatureText>
                    Our virtual lab offers a wide range of training programs to
                    help you gain the skills and knowledge you need to succeed
                    in your chosen field. Our programs are designed to be
                    flexible and customizable to meet your needs, whether
                    you&apos;re just starting out or looking to advance your
                    career. With our virtual lab, you can access training
                    materials from anywhere, at any time, and at your own pace.
                  </FeatureText>
                </FeatureTextContainer>
              </InnovationCard>
              <InnovationCard>
                <GradientDivider>
                  <LineGradient
                    height="100px"
                    colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                    colorTo="hsla(144, 85%, 42%, 0)"
                  />
                </GradientDivider>
                <GradientDivider>
                  <GradientIcon
                    style={{ transform: "revert" }}
                    IconComponent={<MdStarOutline size={24} />}
                    bgColor="#10C759"
                  />
                </GradientDivider>
                <FeatureTextContainer>
                  <FeatureText flip={true}>
                    We understand that finding a job or changing careers can be
                    a daunting task. That&apos;s why we offer a range of job
                    placement and career change services to help you navigate
                    the job market and find the right opportunity. Our
                    experienced career coaches will work with you to identify
                    your strengths and goals, develop a personalized career
                    plan, and connect you with job opportunities that match your
                    skills and interests.
                  </FeatureText>
                  <Spacer />
                </FeatureTextContainer>
              </InnovationCard>
              <InnovationCard>
                <GradientDivider>
                  <LineGradient
                    height="100px"
                    colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                    colorTo="hsla(144, 85%, 42%, 0)"
                  />
                </GradientDivider>
                <GradientDivider>
                  <GradientIcon
                    style={{ transform: "revert" }}
                    IconComponent={<MdStarOutline size={24} />}
                    bgColor="#10C759"
                  />
                </GradientDivider>
                <FeatureTextContainer>
                  <Spacer />
                  <FeatureText>
                    Innovation is key to success in today&apos;s rapidly
                    changing business environment. Our virtual lab provides you
                    with access to the latest tools and technologies, as well as
                    expert guidance on how to apply them to your business. Our
                    innovation and development services include prototyping,
                    testing, and scaling of new products or services, as well as
                    assistance with intellectual property protection, regulatory
                    compliance, and more.
                  </FeatureText>
                </FeatureTextContainer>
              </InnovationCard>
            </InnovationFeature>
          </InnovationDetail>
          <Bottom>
            <GradientDivider>
              <LineGradient
                height="150px"
                colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                colorTo="hsla(144, 85%, 42%, 0)"
              />
            </GradientDivider>
            <FeatureText>
              At our company, we are committed to delivering innovative
              solutions that help our clients stay ahead of the curve. Whether
              you need help with AI and machine learning, IoT, blockchain, cloud
              computing, or web and mobile development, we have the expertise to
              help you succeed. Contact us today to learn more about how we can
              help your business grow.
            </FeatureText>
          </Bottom>
        </ServiceContent>
        <JoinCohort />
        <JoinDiscord />
      </DetailSection>
    </div>
  );
};

export default OurPlatform;

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
