import React, { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";
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
import JoinDiscord from "../../components/JoinDiscord";
import LineGradient from "../../components/LineGradient";
import { QUERIES, WEIGHTS } from "../../constants";
import { GradientContainer } from "../course-work";
import Newsletter from "../../components/Newsletter";
import OurProcess from "../../components/OurProcess";
import ContactDetail from "../../components/ContactDetail";
import { fetcher } from "../../utils";
import Spinner from "../../components/Spinner";

const Bootcamps = ({}) => {
  const { query } = useRouter();
  const [bootcamp, setBootcamp] = useState([]);
  const {
    data: apiData,
    error,
    isLoading,
  } = useSWR("/api/staticdata", fetcher);

  useEffect(() => {
    if (apiData) {
      const filteredBootcamp = apiData.bootcamps.filter(
        (boot) => boot.slug === query.slug
      );
      setBootcamp(filteredBootcamp);
    }
  }, [apiData, query.slug]);

  if (error) return <div>Failed to load</div>;
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );

  // return <h1>Hello {JSON.stringify(bootcamp[0].name)}</h1>;

  return (
    <div>
      <Hero>
        <HeroContent>
          <Headline>{bootcamp[0] && bootcamp[0]?.name}</Headline>
          <SubHeadline>
            <FiShare />
            <Link href={`${bootcamp[0] && bootcamp[0]?.courseFile}`} download>
              Get course curriculum
            </Link>
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
                <p>{bootcamp[0] && bootcamp[0]?.detail?.objective}</p>
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
                        <Sub>{bootcamp[0] && bootcamp[0]?.detail?.date}</Sub>
                      </p>
                    </DetailSummaryList>
                    <DetailSummaryList>
                      <MdAlarm size={30} />
                      <p>
                        <TopSub>TIMING:</TopSub>
                        <Sub>{bootcamp[0] && bootcamp[0]?.detail?.timing}</Sub>
                      </p>
                    </DetailSummaryList>
                    <DetailSummaryList>
                      <FiCalendar size={30} />
                      <p>
                        <TopSub>DIFFICULTY:</TopSub>
                        <Sub>
                          {bootcamp[0] && bootcamp[0]?.detail?.difficulty}
                        </Sub>
                      </p>
                    </DetailSummaryList>
                    <DetailSummaryList>
                      <FiCalendar size={30} />
                      <p>
                        <TopSub>DURATION:</TopSub>
                        <Sub>
                          {bootcamp[0] && bootcamp[0]?.detail?.duration}
                        </Sub>
                      </p>
                    </DetailSummaryList>
                  </DetailSummaryLists>
                </DetailSummary>
              </RightContent>
            </DetailContent>
            <ActionContainer>
              <Price>{bootcamp[0] && bootcamp[0]?.detail?.price}</Price>
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
                  {bootcamp[0] &&
                    bootcamp[0].detail.goals.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                </OverviewFeatureList>
              </OverviewCard>
              <OverviewCard>
                <OverviewTitle>
                  <GradientIcon
                    IconComponent={<VscCode size={30} color="#44E986" />}
                    bgColor={"#44E986"}
                  />
                  <p>Course Audience</p>
                </OverviewTitle>
                <OverviewFeatureList>
                  {bootcamp[0] &&
                    bootcamp[0]?.detail?.audience.map((audience, index) => (
                      <li key={index}>{audience}</li>
                    ))}
                </OverviewFeatureList>
              </OverviewCard>
              <OverviewCard>
                <OverviewTitle>
                  <GradientIcon
                    IconComponent={<VscCode size={30} color="#44E986" />}
                    bgColor={"#44E986"}
                  />
                  <p>Course Experience</p>
                </OverviewTitle>
                <OverviewFeatureList>
                  {bootcamp[0] &&
                    bootcamp[0]?.detail?.experience.map((experience, index) => (
                      <li key={index}>{experience}</li>
                    ))}
                </OverviewFeatureList>
              </OverviewCard>
              <OverviewCard>
                <OverviewTitle>
                  <GradientIcon
                    IconComponent={<VscCode size={30} color="#44E986" />}
                    bgColor={"#44E986"}
                  />
                  <p>
                    Curriculum <sup>*</sup>
                  </p>
                </OverviewTitle>
                <Accordion multiple>
                  {bootcamp[0] &&
                    bootcamp[0]?.detail?.curriculum.map(
                      ({ title, topics }, index) => (
                        <AccordItem key={index}>
                          <AccordionTitle>
                            <AccordionButton>
                              {title} <FaPlus />
                            </AccordionButton>
                          </AccordionTitle>
                          <Panel>
                            <CurriculumFeatureList>
                              {topics.map((topic, index) => (
                                <CurriculumList key={topic + index}>
                                  {topic}
                                </CurriculumList>
                              ))}
                            </CurriculumFeatureList>
                          </Panel>
                        </AccordItem>
                      )
                    )}
                </Accordion>
                <p>
                  <sup>*</sup> Download the curriculum document above for more
                  details
                </p>
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
                  {bootcamp[0] &&
                    bootcamp[0]?.detail?.requirements.map(
                      (requirement, index) => <li key={index}>{requirement}</li>
                    )}
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
              {bootcamp[0] &&
                bootcamp[0]?.instructors.map(
                  ({ name, description, position, social }, index) => (
                    <InstructorDetailContainer key={`${name + index}`}>
                      <CapContainer>
                        <InstructorCap />
                        <p>{name}</p>
                      </CapContainer>
                      <InstructorDetail>
                        <h5>{position}</h5>
                        <p>{description}</p>
                        <Social>
                          Social Links:{" "}
                          <Link href={social.linkedIn}>
                            <FaLinkedinIn />
                          </Link>
                          <Link href={social.twitter}>
                            <FaTwitter />
                          </Link>
                        </Social>
                      </InstructorDetail>
                    </InstructorDetailContainer>
                  )
                )}
            </div>
          </InstructorContainer>
        </InstructorContent>
      </InstructorSection>
      <MentorshipSection>
        <Contact>
          <TextContent>
            <Title>Have any further questions?</Title>
            <SubTitle>
              Make use of our contact form to ask any further questions and get
              feedback as soon as possible from the managements of the programs
            </SubTitle>
          </TextContent>
        </Contact>
        <MentorshipContent>
          <ContactDetail />
          <Newsletter />
        </MentorshipContent>
        <OurProcess />
      </MentorshipSection>
      <JoinDiscord />
    </div>
  );
};

// const dev = process.env.NODE_ENV !== "production";
// const server = dev ? "http://localhost:3000" : "https://innovatics.ai";

// export async function getStaticPaths() {
//   const res = await fetch(`${server}/api/staticdata`, {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });
//   const jsonData = await res.json();
//   console.log({ jsonData });
//   // const parsedData = JSON.parse(jsonData);
//   // console.log({ parsedData });
//   const paths = jsonData.bootcamps.map((bootcamp) => ({
//     params: { slug: bootcamp.slug },
//   }));

//   // { fallback: false } means other routes should 404
//   return { paths, fallback: false };
// }

// export async function getStaticProps(context) {
//   const res = await fetch(`${server}/api/staticdata`, {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });

//   const result = await res.json();
//   console.log({ result });
//   // const parsedData = JSON.parse(result);
//   const bootcamp = result.bootcamps.filter(
//     (boot) => boot.slug === context.params.slug
//   );
//   console.log({ bootcamp });
//   return {
//     props: {
//       bootcamp,
//     },
//   };
// }

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
  background-color: #121212;
  background-image: url("/bg-grad.png");
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
  list-style-image: url("/checkmark.png");
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
    text-align: left;
    background: transparent;
    color: white;
    border: none;
    display: flex;
    align-items: center;
    gap: 10px;
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
  p {
    text-align: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    p {
      text-align: revert;
    }
  }
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

export const MentorshipSection = styled.section`
  background-color: #121212;
  background-image: url("/bg-grad.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
`;

export const MentorshipContent = styled(MaxwidthContainer)`
  padding: var(--container-padding);
  display: flex;
  /* grid-template-columns: repeat(auto-fill, minmax(500px, 1fr)); */
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Contact = styled.div`
  background-color: #e9e9ed;
  padding: 3rem;
  text-align: center;
`;

export const Title = styled.h4`
  font-size: var(--font-size-xl);
`;

export const TextContent = styled.div`
  font-weight: 500;
  color: black;
  width: 70%;
  margin-inline: auto;
  @media ${QUERIES.tabletAndSmaller} {
    width: revert;
  }
`;

export const SubTitle = styled.p`
  font-size: var(--font-size-md);
  margin-block: 1.5rem;
  width: 70%;
  margin-inline: auto;
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
