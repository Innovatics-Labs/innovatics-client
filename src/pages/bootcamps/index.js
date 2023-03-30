import React from "react";
import { FiCalendar, FiShare } from "react-icons/fi";
import { MdAlarm } from "react-icons/md";
import { VscCode } from "react-icons/vsc";
import { FaLinkedinIn, FaPlus, FaReact, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";

import Button from "../../components/Button";
import { MaxwidthContainer } from "../../components/GlobalStyles";
import GradientIcon from "../../components/GradientIcon";
import InstructorCap from "../../components/InstructorCap";
import JoinCohort from "../../components/JoinCohort";
import JoinDiscord from "../../components/JoinDiscord";
import LineGradient from "../../components/LineGradient";
import { QUERIES, WEIGHTS } from "../../constants";
import { GradientContainer } from "../course-work";
import Newsletter from "../../components/Newsletter";
import { TextWithColor } from "../../components/home/Practicality";

const Bootcamps = () => {
  return (
    <div>
      <Hero>
        <HeroContent>
          <Headline>
            Data Science & AI from Zero to Hero Live Bootcamp 2.0
          </Headline>
          <SubHeadline>
            <FiShare />
            <span>Two master curriculum in one</span>
          </SubHeadline>
        </HeroContent>
      </Hero>
      <DetailSection>
        <DetailContainer>
          <LineGradient
            colorFrom={"hsla(144, 85%, 42%, 0),hsla(144, 85%, 42%, 1)"}
            colorTo={"hsla(144, 85%, 42%, 0)"}
          />
          <div>
            <DetailContent>
              <LeftContent>
                <p>
                  To maintain a competitive edge, today’s organizations must
                  gain practical knowledge of data science, machine learning and
                  artificial intelligence. Careers especially in engineering,
                  data science, and technical management depend on the immense
                  value of those advanced analytical and programming skills.
                </p>
                <p>
                  In the Data Science & Machine Learning program from zero to
                  hero program, an executive education program led by the Big
                  Bang Data, you will dive deep into learning the applied
                  mathematical structure of core machine learning (ML) and
                  artificial intelligence (AI) methods.
                </p>
                <p>
                  The course focuses on the skills needed to work efficiently
                  with machine learning models, such classification models,
                  regression models, clustering models, and optimization. In
                  this course, you will conduct your own analyses and apply the
                  most effective methods to solve various problem types. This is
                  what makes our program unique — we address both the how and
                  the why of machine learning to provide you with the technical
                  knowledge to thrive in any ML-essential field.
                </p>
              </LeftContent>
              <RightContent>
                <Tag>Course Details</Tag>
                <DetailSummary>
                  <DetailSummaryTitle>What to expect?</DetailSummaryTitle>
                  <DetailSummaryLists>
                    <DetailSummaryList>
                      <FiCalendar size={30} />
                      <p>
                        <TopSub>START DATE:</TopSub>
                        <Sub>2nd of June 2023</Sub>
                      </p>
                    </DetailSummaryList>
                    <DetailSummaryList>
                      <MdAlarm size={30} />
                      <p>
                        <TopSub>TIMING:</TopSub>
                        <Sub>08:00am - 03:00pm EST (Sunday - Saturday)</Sub>
                      </p>
                    </DetailSummaryList>
                    <DetailSummaryList>
                      <FiCalendar size={30} />
                      <p>
                        <TopSub>DIFFICULTY:</TopSub>
                        <Sub>Beginner - Advance (Zero - Hero)</Sub>
                      </p>
                    </DetailSummaryList>
                    <DetailSummaryList>
                      <FiCalendar size={30} />
                      <p>
                        <TopSub>DURATION:</TopSub>
                        <Sub>6 months - 8 months</Sub>
                      </p>
                    </DetailSummaryList>
                  </DetailSummaryLists>
                </DetailSummary>
              </RightContent>
            </DetailContent>
            <ActionContainer>
              <Price>$2,990</Price>
              <Button
                bgColor={"white"}
                color="hsla(216, 28%, 7%, 1)"
                title="Register Now!"
              />
            </ActionContainer>
          </div>
        </DetailContainer>
      </DetailSection>
      <OverviewSection>
        <OverViewContent>
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
            <Masonry gutter={"2rem"}>
              <OverviewCard>
                <OverviewTitle>
                  <GradientIcon
                    IconComponent={<VscCode size={30} color="#44E986" />}
                    bgColor={"#44E986"}
                  />
                  <p>What you’ll learn</p>
                </OverviewTitle>
                <OverviewFeatureList>
                  <li>Provision Azure virtual networks</li>
                  <li>Control virtual network traffic</li>
                  <li>Manage DNS for virtual networks and public access</li>
                  <li>
                    Connect virtual networks to other virtual networks and
                    external networks
                  </li>
                  <li>Monitor virtual network traffic</li>
                  <li>
                    Connect virtual networks to other virtual networks and
                    external networks
                  </li>
                  <li>Monitor virtual network traffic</li>
                  <li>Real Time projects</li>
                  <li>Architecture</li>
                  <li>Domain wise project</li>
                  <li>Databases</li>
                  <li>Negotiations skills</li>
                  <li>Mock interview</li>
                  <li>Interview preparation</li>
                  <li> Resume building after every module</li>
                </OverviewFeatureList>
              </OverviewCard>
              <OverviewCard>
                <OverviewTitle>
                  <GradientIcon
                    IconComponent={<VscCode size={30} color="#44E986" />}
                    bgColor={"#44E986"}
                  />
                  <p>Course Features</p>
                </OverviewTitle>
                <OverviewFeatureList>
                  <li>Full stack Data Science master’s certification</li>
                  <li>Job guarantee otherwise refund</li>
                  <li>One year of internship Anytime</li>
                  <li>
                    Online Instructor-led learning: Live teaching by instructors
                  </li>
                  <li>56 + hands-on industry real-time projects.</li>
                  <li>500 hours live interactive classes.</li>
                  <li>
                    Every week doubt clearing session after the live classes.
                  </li>
                  <li>Lifetime Dashboard access</li>
                  <li>Doubt clearing one to one</li>
                  <li>Doubt clearing through mail and skype support team</li>
                  <li>Assignment in all the module</li>
                  <li>A live project with real-time implementation</li>
                </OverviewFeatureList>
              </OverviewCard>
              <OverviewCard>
                <OverviewTitle>
                  <GradientIcon
                    IconComponent={<VscCode size={30} color="#44E986" />}
                    bgColor={"#44E986"}
                  />
                  <p>Curriculum</p>
                </OverviewTitle>
                <Accordion multiple>
                  <AccordItem>
                    <AccordionTitle>
                      <AccordionButton>
                        Welcome to the Course <FaPlus />
                      </AccordionButton>
                    </AccordionTitle>
                    <Panel>
                      <CurriculumFeatureList>
                        <CurriculumList>Course Overview</CurriculumList>
                        <CurriculumList>Dashboard Introduction</CurriculumList>
                      </CurriculumFeatureList>
                    </Panel>
                  </AccordItem>
                  <AccordItem>
                    <AccordionTitle>
                      <AccordionButton>
                        Advanced Python <FaPlus />
                      </AccordionButton>
                    </AccordionTitle>
                    <Panel>
                      <CurriculumFeatureList>
                        <CurriculumList>
                          Iterator Generator & File System
                        </CurriculumList>
                        <CurriculumList>
                          Exception handling Class 1 part 1
                        </CurriculumList>
                        <CurriculumList>
                          Exception handling Class 1 part 2
                        </CurriculumList>
                        <CurriculumList>
                          Exception handling Class 2
                        </CurriculumList>
                        <CurriculumList>Module & Packages</CurriculumList>
                        <CurriculumList>OOPS Part 1</CurriculumList>
                        <CurriculumList>OOPS Part 2</CurriculumList>
                        <CurriculumList>
                          OOPs Concepts - Polymorphism
                        </CurriculumList>
                      </CurriculumFeatureList>
                    </Panel>
                  </AccordItem>
                  <AccordItem>
                    <AccordionTitle>
                      <AccordionButton>
                        Python Fundamentals <FaPlus />
                      </AccordionButton>
                    </AccordionTitle>
                    <Panel>
                      <CurriculumFeatureList>
                        <CurriculumList>Python Basic</CurriculumList>
                        <CurriculumList>String, List, Indexing</CurriculumList>
                        <CurriculumList>Tuple, Set & Dict</CurriculumList>
                        <CurriculumList>String, List, Indexing</CurriculumList>
                        <CurriculumList>If, Else & For Loop</CurriculumList>
                        <CurriculumList>For Loops & While loops</CurriculumList>
                        <CurriculumList>
                          Python Program Discussion in loops
                        </CurriculumList>
                      </CurriculumFeatureList>
                    </Panel>
                  </AccordItem>
                </Accordion>
              </OverviewCard>
              <OverviewCard>
                <OverviewTitle>
                  <GradientIcon
                    IconComponent={<VscCode size={30} color="#44E986" />}
                    bgColor={"#44E986"}
                  />
                  <p>Requirements</p>
                </OverviewTitle>
                <OverviewFeatureList>
                  <li>Basic understanding of cloud concepts</li>
                  <li>
                    Basic understanding of networking concepts including IP
                    addressing, DHCP, and DNS
                  </li>
                  <li>Familiarity with templated deployments</li>
                  <li>
                    Basic understanding of networking concepts including IP
                    addressing, DHCP, and DNS
                  </li>
                  <li>Familiarity with templated deployments</li>
                  <li>
                    Basic understanding of networking concepts including IP
                    addressing, DHCP, and DNS
                  </li>
                  <li>Familiarity with templated deployments</li>
                </OverviewFeatureList>
              </OverviewCard>
            </Masonry>
          </ResponsiveMasonry>
        </OverViewContent>
      </OverviewSection>
      <InstructorSection>
        <InstructorContent>
          <GradientContainer>
            <LineGradient
              colorFrom={"#10C75900"}
              colorTo={"#10C759"}
              height={"54px"}
            />
            <GradientIcon
              IconComponent={<FaReact size={30} color="#44E986" />}
              bgColor={"#44E986"}
            />
            <LineGradient colorFrom={"#10C759"} colorTo={"#10C75900"} />
          </GradientContainer>
          <InstructorContainer>
            <h4>Instructors</h4>
            <div>
              <InstructorDetailContainer>
                <CapContainer>
                  <InstructorCap />
                  <p>Muhammad Medwani</p>
                </CapContainer>
                <InstructorDetail>
                  <h5>Founder - Innovatics.ai</h5>
                  <p>
                    Founder of Innovatics.ai is an expert data scientist with a
                    passion for transforming data into useful products. He has
                    over 20 years of experience in service delivery management;
                    Ph.D. candidate in AI, four master’s degrees in data
                    science, IT, machine learning, and business administration;
                    and over nine years of experience working with data science.
                    Mo’s specialties include data science, machine learning, big
                    data, deep learning, data analytics, application support and
                    IT service delivery management.
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
                  <h5>Founder - Innovatics.ai</h5>
                  <p>
                    Founder of Innovatics.ai is an expert data scientist with a
                    passion for transforming data into useful products. He has
                    over 20 years of experience in service delivery management;
                    Ph.D. candidate in AI, four master’s degrees in data
                    science, IT, machine learning, and business administration;
                    and over nine years of experience working with data science.
                    Mo’s specialties include data science, machine learning, big
                    data, deep learning, data analytics, application support and
                    IT service delivery management.
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
                  <h5>Founder - Innovatics.ai</h5>
                  <p>
                    Founder of Innovatics.ai is an expert data scientist with a
                    passion for transforming data into useful products. He has
                    over 20 years of experience in service delivery management;
                    Ph.D. candidate in AI, four master’s degrees in data
                    science, IT, machine learning, and business administration;
                    and over nine years of experience working with data science.
                    Mo’s specialties include data science, machine learning, big
                    data, deep learning, data analytics, application support and
                    IT service delivery management.
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
      <MentorshipSection>
        <MentorshipContent>
          <div>
            <GradientIcon
              IconComponent={<FaReact size={30} color="#44E986" />}
              bgColor={"#44E986"}
            />
          </div>
          <div>
            <TextContent>
              <Title>Live Mentorship</Title>
              <SubTitle>
                <TextWithColor color="#44e986">
                  We go with you as you tread the path.
                </TextWithColor>
                Your success means a lot to us so you can reach our to us any
                time.
              </SubTitle>
            </TextContent>
            <Newsletter />
          </div>
        </MentorshipContent>
      </MentorshipSection>
      <JoinCohort />
      <JoinDiscord />
    </div>
  );
};

export default Bootcamps;

const Hero = styled.div`
  padding: 4rem var(--container-padding);
  background-image: url("/wormhole.png");
  background-size: cover;
  color: white;
`;

const HeroContent = styled(MaxwidthContainer)`
  display: grid;
  text-align: center;
  font-weight: 600;
  place-items: center;
`;

const Headline = styled.h3`
  font-size: var(--font-size-2xl);
  line-height: 1.5;
  max-width: 30ch;
  margin-bottom: 0;
`;

const SubHeadline = styled.p`
  font-size: var(--font-size-md);
  display: flex;
  gap: 10px;
  text-decoration-line: underline;
`;

const DetailSection = styled.div`
  background-image: url("/mountain-dark.png");
  color: white;
`;

const DetailContainer = styled(MaxwidthContainer)`
  padding: 2rem var(--container-padding);
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;

  @media ${QUERIES.tabletAndSmaller} {
    padding-inline: 1rem;
  }
`;

const DetailContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  margin-block: 2.5rem;

  @media ${QUERIES.tabletAndSmaller} {
    display: revert;
  }
`;

const LeftContent = styled.div`
  font-weight: 500;
  font-size: var(--font-size-md);
  line-height: 1.5;
`;

const RightContent = styled.div`
  background: linear-gradient(
    286.85deg,
    rgba(4, 13, 33, 0.9) 0%,
    rgba(62, 63, 73, 0.7) 98.21%
  );
  border: 1px solid #ffffff;
  box-shadow: 0px 0px 106.452px rgba(62, 63, 73, 0.25);
  border-radius: 17.7419px;
`;

const Tag = styled.p`
  margin: 0;
  font-size: 1.12rem;
  width: fit-content;
  color: black;
  background: #ffffff;
  border-radius: 17px 0px;
  padding: 15px 27px;
`;

const DetailSummary = styled.div``;

const DetailSummaryTitle = styled.p`
  font-weight: ${WEIGHTS.semiBold};
  font-size: var(--font-size-2md);
  padding-left: 1rem;
  margin-bottom: 0;
`;

const DetailSummaryLists = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

const DetailSummaryList = styled.li`
  display: flex;
  font-size: 18px;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #8691a6;
  padding: 1rem;

  svg {
    font-size: 20px;
  }

  p {
    margin: 7px;
  }

  :last-of-type {
    border-bottom: none;
  }
`;

const TopSub = styled.span`
  display: block;
  font-size: 18px;
  margin-bottom: 8px;
`;

const Sub = styled.span`
  font-size: 14px;
  display: block;
`;

const ActionContainer = styled.div`
  button {
    width: 400px;

    @media ${QUERIES.tabletAndSmaller} {
      width: 100%;
    }
  }
`;

const Price = styled.p`
  font-weight: ${WEIGHTS.semiBold};
  font-size: var(--font-size-3xl);
  margin-block: 1rem;
`;

const OverviewSection = styled.section`
  background: url("/galaxy-2.png");
  background-size: cover;
  color: white;
`;

const OverViewContent = styled(MaxwidthContainer)`
  padding: 3rem var(--container-padding);
`;

const OverviewCard = styled.div`
  background: linear-gradient(
    107.92deg,
    rgba(4, 13, 33, 0.9) 0%,
    rgba(22, 28, 45, 0.838306) 78.57%,
    rgba(62, 63, 73, 0.7) 100%
  );
  border-radius: 20px;
  padding: 2rem;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 1rem;
  }
`;

const OverviewTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: var(--font-size-2md);
  font-weight: ${WEIGHTS.semiBold};

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 20px;
  }
`;

const OverviewFeatureList = styled.ul`
  list-style-image: url("checkmark.png");
  font-weight: ${WEIGHTS.medium};

  li {
    margin-bottom: 0.7rem;
  }
`;

const AccordItem = styled(AccordionItem)`
  background: linear-gradient(
    86.57deg,
    rgba(62, 63, 73, 0.9) 5.65%,
    rgba(4, 13, 33, 0.3) 94.35%,
    rgba(4, 13, 33, 0.3) 94.35%
  );
  padding: 1.2rem;
  margin-bottom: 1rem;
`;

const AccordionTitle = styled.h5`
  font-size: var(--font-size-md);
  margin: 0;
  button {
    background: transparent;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
  }
`;

const Panel = styled(AccordionPanel)``;

const CurriculumFeatureList = styled(OverviewFeatureList)`
  padding-left: 1.5rem;
`;

const CurriculumList = styled.li`
  ::marker {
    content: "> ";
    font-size: 20px;
    padding-left: 0;
    /* padding-right: 10px; */
  }
`;

const InstructorSection = styled.section`
  background-color: #121212;
  background-image: url("/bg-grad.png");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;

const InstructorContent = styled(MaxwidthContainer)`
  padding: 3rem var(--container-padding);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2.5rem;
`;

const InstructorContainer = styled.div`
  margin-top: 2rem;

  h4 {
    font-weight: ${WEIGHTS.semiBold};
    font-size: var(--font-size-2md);
  }
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

  h5 {
    font-weight: ${WEIGHTS.semiBold};
    font-size: var(--font-size-md);
    line-height: 1;
    color: #44e986;
  }
`;

const MentorshipSection = styled.section`
  background-color: #0d1117;
  color: white;
`;

const MentorshipContent = styled(MaxwidthContainer)`
  padding: 3rem var(--container-padding);
  display: flex;
  gap: 2rem;
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
