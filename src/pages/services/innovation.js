import React from "react";
import styled from "styled-components";
import LineGradient from "../../components/LineGradient";
import GradientIcon from "../../components/GradientIcon";
import ServiceHero from "../../components/services/Hero";
import { QUERIES, WEIGHTS } from "../../constants";
import { DescriptionMod, GradientDivider } from "./career-change";
import ContactDetail from "../../components/ContactDetail";
import Newsletter from "../../components/Newsletter";
import JoinDiscord from "../../components/JoinDiscord";
import { MdStarOutline } from "react-icons/md";
import { DetailSection, ServiceContent } from "./training";

const Innovation = () => {
  return (
    <div>
      <ServiceHero
        headline={"Innovation & Development"}
        subtitle="Our Service to serve you"
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
              At our company, we specialize in offering Innovation and
              Development as a service in technology. We have a team of experts
              who are dedicated to staying up-to-date with the latest technology
              trends and best practices, ensuring that we can offer our clients
              the most advanced and effective solutions.
            </p>
            <LineGradient
              colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
              colorTo="hsla(144, 85%, 42%, 0)"
            />
          </DescriptionMod>
          <InnovationDetail>
            <div>
              <h4 style={{ fontWeight: 600, fontSize: 32 }}>Technology</h4>
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
                    Artificial Intelligence and Machine Learning: Our team of AI
                    and machine learning experts can help you build intelligent
                    systems that can learn and improve over time. Whether you
                    need help with natural language processing, computer vision,
                    or predictive analytics, we have the expertise to help you
                    achieve your goals.
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
                    Internet of Things (IoT): Our IoT team can help you build
                    connected devices and systems that can collect and transmit
                    data. We can help you design and implement IoT solutions
                    that are secure, scalable, and reliable.
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
                    Blockchain: Our blockchain team can help you build
                    decentralized applications and systems that use blockchain
                    technology. We can help you design and implement blockchain
                    solutions that are secure, transparent, and auditable.
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
                    Cloud Computing: Our cloud computing team can help you
                    design and implement cloud solutions that are scalable,
                    cost-effective, and secure. Whether you need help with cloud
                    migration, cloud architecture, or cloud optimization, we
                    have the expertise to help you get the most out of your
                    cloud environment.
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
                    Web and Mobile Development: Our web and mobile development
                    team can help you build high-quality web and mobile
                    applications that meet your specific needs. We follow best
                    practices in software development, including agile
                    methodologies, continuous integration and delivery, and
                    automated testing.
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
        <Contactcontainer>
          <GradientDivider>
            <LineGradient
              height="150px"
              colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
              colorTo="hsla(144, 85%, 42%, 0)"
            />
          </GradientDivider>
          <div style={{ textAlign: "center" }}>
            <h4 style={{ fontWeight: "600", fontSize: 32 }}>Reach out to us</h4>
            <p>Schedule a call or meeting with us in few clicks</p>
          </div>
          <Newsletter />
          <ContactDetail />
        </Contactcontainer>
        <JoinDiscord />
      </DetailSection>
    </div>
  );
};

export default Innovation;

const Contactcontainer = styled.div`
  padding: var(--container-padding);
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

export const InnovationDetail = styled.div`
  text-align: center;
`;

export const InnovationFeature = styled.div`
  display: grid;
  justify-items: end;
  margin-bottom: 1.5rem;
`;

export const InnovationCard = styled.div`
  display: grid;
  gap: 2rem;
  text-align: left;
  margin-left: auto;
`;

export const FeatureTextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Spacer = styled.p`
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

export const FeatureText = styled.p`
  ${({ flip }) => flip && `text-align: right;`}

  @media ${QUERIES.phoneAndSmaller} {
    text-align: revert;
  }
`;
