import React from "react";
import styled from "styled-components";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

import ServiceHero from "../../components/services/Hero";
import { GradientDivider } from "../services/career-change";
import LineGradient from "../../components/LineGradient";
import { MaxwidthContainer } from "../../components/GlobalStyles";
import ServiceCard from "../../components/services/ServiceCard";
import { WEIGHTS, QUERIES } from "../../constants";
import Newsletter from "../../components/Newsletter";
import ContactDetail from "../../components/ContactDetail";
import JoinDiscord from "../../components/JoinDiscord";
import { TextWithColor } from "../../components/home/Practicality";
import InstructorCap from "../../components/InstructorCap";

const Index = () => {
  return (
    <div>
      <ServiceHero
        bgImage="/profile-banner.png"
        headline="About Us"
        subtitle={"Our story and Who we are?"}
      />
      <DetailSection>
        <Content>
          <GradientDivider>
            <LineGradient
              height="100px"
              colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
              colorTo="hsla(144, 85%, 42%, 0)"
            />
          </GradientDivider>
          <Description>
            <h2>Our Doings</h2>
            <p>
              <TextWithColor color="#10C759">
                Welcome to our company! We are a leading provider of training,
                innovation and development, job placement, and consulting and
                contracting {""}
              </TextWithColor>
              services in the fields of data science, cloud engineering,
              software engineering, and networking. Our mission is to help
              individuals and businesses achieve their goals through the latest
              technologies and tools.
            </p>
          </Description>
          <div>
            <GradientDivider>
              <LineGradient
                height="100px"
                colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                colorTo="hsla(144, 85%, 42%, 0)"
              />
            </GradientDivider>
            <ServiceCard
              title={"Training"}
              description="We offer a range of training programs to help individuals and teams stay up-to-date with the latest developments in the field of data science, cloud engineering, software engineering, and networking. Our training programs are designed to provide hands-on experience with real-world projects, helping individuals develop the skills they need to succeed in their careers. Our expert instructors have years of industry experience and are passionate about sharing their knowledge with others."
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
              title={"Innovation and Development"}
              description="We are committed to innovation and development, and we work with businesses and organizations to help them stay ahead of the curve. We offer customized solutions to meet the unique needs of each client, whether it's developing new software applications, creating custom networking solutions, or implementing data-driven strategies. Our team of experts has extensive experience in a wide range of industries, and we are always up-to-date with the latest trends and technologies."
            />
            <GradientDivider>
              <LineGradient
                height="100px"
                colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                colorTo="hsla(144, 85%, 42%, 0)"
              />
            </GradientDivider>
            <ServiceCard
              title={"Job Placement"}
              description="We know that finding the right job can be a challenge, and that's why we offer job placement services to help individuals find their dream job. We work with a wide range of businesses and organizations in the data science, cloud engineering, software engineering, and networking fields, and we are always on the lookout for talented individuals to fill open positions. Our team of job placement specialists is dedicated to helping individuals find the right job for their skills and experience."
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
              title={"Consulting and Contracting"}
              description="We offer consulting and contracting services to businesses and organizations that need help with their data science, cloud engineering, software engineering, and networking projects. Our team of experts can provide a range of services, from project management and consulting to full-scale project development and implementation. We work closely with each client to understand their unique needs and goals, and we are committed to delivering high-quality solutions that meet or exceed their expectations."
            />
          </div>
          <Summary>
            <GradientDivider>
              <LineGradient
                height="150px"
                colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                colorTo="hsla(144, 85%, 42%, 0)"
              />
            </GradientDivider>
            <p>
              At our company, we are committed to providing the highest quality
              services to our clients. Whether you are an individual looking to
              develop your skills or a business looking to innovate and stay
              ahead of the competition, we have the expertise and experience to
              help you achieve your goals. Contact us today to learn more about
              how we can help you succeed!
            </p>
          </Summary>
        </Content>
        <InstructorSection>
          <InstructorContent>
            <GradientDivider>
              <LineGradient
                height="150px"
                colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
                colorTo="hsla(144, 85%, 42%, 0)"
              />
            </GradientDivider>
            <h4>Instructors</h4>
            <InstructorContainer>
              <div>
                <InstructorDetailContainer>
                  <CapContainer>
                    <InstructorCap />
                    <p>Muhammad Medwani</p>
                  </CapContainer>
                  <InstructorDetail>
                    <InstructorPost>Founder - Innovatics.ai</InstructorPost>
                    <p>
                      Founder of Innovatics.ai is an expert data scientist with
                      a passion for transforming data into useful products. He
                      has over 20 years of experience in service delivery
                      management; Ph.D. candidate in AI, four master’s degrees
                      in data science, IT, machine learning, and business
                      administration; and over nine years of experience working
                      with data science. Mo’s specialties include data science,
                      machine learning, big data, deep learning, data analytics,
                      application support and IT service delivery management.
                    </p>
                    <Social>
                      Social Links: <FaLinkedinIn /> <FaTwitter />{" "}
                    </Social>
                  </InstructorDetail>
                </InstructorDetailContainer>
                <InstructorDetailContainer>
                  <CapContainer>
                    <InstructorCap />
                    <p>Muhammad Medwani</p>
                  </CapContainer>
                  <InstructorDetail>
                    <InstructorPost>Founder - Innovatics.ai</InstructorPost>
                    <p>
                      Founder of Innovatics.ai is an expert data scientist with
                      a passion for transforming data into useful products. He
                      has over 20 years of experience in service delivery
                      management; Ph.D. candidate in AI, four master’s degrees
                      in data science, IT, machine learning, and business
                      administration; and over nine years of experience working
                      with data science. Mo’s specialties include data science,
                      machine learning, big data, deep learning, data analytics,
                      application support and IT service delivery management.
                    </p>
                    <Social>
                      Social Links: <FaLinkedinIn /> <FaTwitter />{" "}
                    </Social>
                  </InstructorDetail>
                </InstructorDetailContainer>
                <InstructorDetailContainer>
                  <CapContainer>
                    <InstructorCap />
                    <p>Muhammad Medwani</p>
                  </CapContainer>
                  <InstructorDetail>
                    <InstructorPost>Founder - Innovatics.ai</InstructorPost>
                    <p>
                      Founder of Innovatics.ai is an expert data scientist with
                      a passion for transforming data into useful products. He
                      has over 20 years of experience in service delivery
                      management; Ph.D. candidate in AI, four master’s degrees
                      in data science, IT, machine learning, and business
                      administration; and over nine years of experience working
                      with data science. Mo’s specialties include data science,
                      machine learning, big data, deep learning, data analytics,
                      application support and IT service delivery management.
                    </p>
                    <Social>
                      Social Links: <FaLinkedinIn /> <FaTwitter />{" "}
                    </Social>
                  </InstructorDetail>
                </InstructorDetailContainer>
              </div>
            </InstructorContainer>
          </InstructorContent>
        </InstructorSection>
        <Contactcontainer>
          <div style={{ textAlign: "center" }}>
            <h4 style={{ fontWeight: "600", fontSize: 32 }}>
              Let’s do business with you
            </h4>
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

export default Index;

const DetailSection = styled.section`
  background: var(--color-bg-black);
  color: white;
`;

const Content = styled(MaxwidthContainer)`
  padding: var(--container-padding);
`;

const Description = styled.div`
  text-align: center;
  padding-inline: 3rem;
  h2 {
    font-weight: ${WEIGHTS.semiBold};
    font-size: var(--font-size-2xl);
  }

  p {
    font-weight: ${WEIGHTS.medium};
    font-size: var(--font-size-3xl);
  }
`;

const Contactcontainer = styled.div`
  padding: var(--container-padding);
  display: grid;
  place-items: center;
`;

const Summary = styled.div`
  text-align: center;
  padding: auto;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;
`;

const InstructorSection = styled.section`
  padding: var(--container-padding);
  background: url("/bg-grad.png"),
    linear-gradient(var(--color-bg-black), var(--color-bg-black));
  background-position: center;
  color: white;
`;

const InstructorContent = styled(MaxwidthContainer)`
  h4 {
    font-weight: ${WEIGHTS.semiBold};
    font-size: var(--font-size-2md);
    text-align: center;
  }
`;

const InstructorContainer = styled.div`
  padding: var(--container-padding);
`;

const InstructorDetailContainer = styled.div`
  display: flex;
  gap: 2rem;
  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
    gap: 1rem;
  }
`;

const CapContainer = styled.div`
  align-self: center;
`;

const InstructorDetail = styled.div`
  line-height: 1.3;
  font-size: 18px;
  font-weight: ${WEIGHTS.medium};
`;

const InstructorPost = styled.h5`
  font-weight: ${WEIGHTS.semiBold};
  font-size: var(--font-size-md);
  line-height: 1;
  color: #44e986;
`;

const TextContent = styled.div`
  font-weight: 600;
  color: white;
`;

const Title = styled.h4`
  font-size: var(--font-size-xl);
  margin: 0;
`;

const SubTitle = styled.p`
  font-size: var(--font-size-3xl);
  margin-block: 1.5rem;
  width: 80%;
  @media ${QUERIES.tabletAndSmaller} {
    width: revert;
  }
`;

const Social = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    background: #ffffff;
    width: 32px;
    height: 32px;
    color: black;
    padding: 5px;
    border-radius: 50%;
    font-size: 14px;
  }
`;
