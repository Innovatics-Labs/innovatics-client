import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import styled from "styled-components";
import { auth, db } from "../../../firebaseConfig";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import siteMetadata from "../../data/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import AuthRoute from "../../HOC/authRoute";
import GradientIcon from "../../components/GradientIcon";
import JoinCohort from "../../components/JoinCohort";
import JoinDiscord from "../../components/JoinDiscord";
import LineGradient from "../../components/LineGradient";
import Button from "../../components/Button";
import InsetSection from "../../components/InsetSection";
import PathCard from "../../components/PathCard";
import { QUERIES } from "../../constants";
import { GrayTitle } from "../course-work";
import { MaxwidthContainer } from "../../components/GlobalStyles";
import Data from "../../assets/svg/data.svg";
import Coding from "../../assets/svg/coding.svg";
import Cyber from "../../assets/svg/cyber-security.svg";
import Server from "../../assets/svg/server.svg";

let colors = ["#44E986", "#FFA28B", "#FAD740", "#8B90FF"];
let icon = [Data, Coding, Cyber, Server];

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [value, loading, error] = useCollection(
    collection(db, "academic-paths"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    if (value) {
      setPaths(value.docs);
      // console.log({ paths }, { value });
    }
  }, [value, loading]);

  useEffect(() => {
    setUser(auth.currentUser);
    // console.log(auth.currentUser);
    return () => {};
  }, []);

  return (
    <>
      <HeadSeo
        title={`Dashboard | ${siteMetadata.companyName} `}
        description={"User Dashboard"}
        canonicalUrl={`${siteMetadata.siteUrl}/dashboard`}
        ogType={"article"}
      />
      <AuthRoute>
        <Container>
          <WelcomeSection>
            <WelcomeContent>
              <Greeting>Welcome {user && user.displayName}</Greeting>
              <GreetingSub>
                June Data Science Live cohort registration is on-going. Click
                <Link href={"/bootcamps"}>here</Link> to learn more or click the
                button below to register.
              </GreetingSub>
              <Start>
                <Link href={"/bootcamps"}>Register Now</Link>
                <MdKeyboardArrowRight color={"#8691A6"} size={24} />
              </Start>
            </WelcomeContent>
          </WelcomeSection>
          <CourseDetailSection>
            <CourseDetailContent>
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
              <DetailContainer>
                <Detail>
                  <Title>Data Science</Title>
                  <Description>
                    Data science is an ever-evolving field, which is growing in
                    popularity at an exponential rate. Data science includes
                    techniques and theories extracted from the fields of
                    statistics; computer science, and, most importantly, machine
                    learning, databases, data visualization, and so on.
                  </Description>
                  <FeatureList>
                    <li>Virtual Jupyter Notebook</li>
                    <li>Programming Exercises</li>
                    <li>Real World DS & ML Projects</li>
                  </FeatureList>
                  <Button
                    as={Link}
                    href="/dashboard"
                    title={"Start Learning"}
                    bgColor="white"
                    color={"#0D1117"}
                  />
                </Detail>
                <LearningPath>
                  <Tag>Learning Path</Tag>
                  <Content>
                    <PathTitle>Getting Started in Data Science</PathTitle>
                    <ul>
                      <li>
                        <GrayTitle>Difficulty:</GrayTitle> Beginner
                      </li>
                      <li>
                        <GrayTitle>Duration:</GrayTitle> 7hrs 20min
                      </li>
                      <li>
                        <GrayTitle>Sections:</GrayTitle> 1
                      </li>
                      <li>
                        <GrayTitle>Courses:</GrayTitle> 3
                      </li>
                      <li>
                        <GrayTitle>Videos:</GrayTitle> 7
                      </li>
                      <li>
                        <GrayTitle> Quiz:</GrayTitle> 5
                      </li>
                      <li>
                        <GrayTitle>Labs:</GrayTitle> 3
                      </li>
                    </ul>
                  </Content>
                </LearningPath>
              </DetailContainer>
            </CourseDetailContent>
          </CourseDetailSection>
          <InsetSection bgImage="/galaxy-2.png">
            <GradientStyleContainer>
              <LineGradient
                colorFrom={"#10C75900"}
                colorTo={"#10C759"}
                height={"54px"}
              />
              <GradientIcon
                IconComponent={<FaReact size={30} color="#10C759" />}
                bgColor={"#10C759"}
              />
            </GradientStyleContainer>
            <AcademicAreas>
              <AreasTitle>Other Academic Areas</AreasTitle>
              <TopicsContainer>
                {loading && <h4>Collection: Loading...</h4>}
                {error && <h4>Collection: error fetching data...</h4>}
                {value &&
                  paths.map((doc, index) => (
                    <PathCard
                      key={doc.id}
                      id={doc.id}
                      topic={doc.data().name}
                      number={`0${index + 1}`}
                      index={index}
                      icon={icon[index]}
                      color={colors[index]}
                    />
                  ))}
              </TopicsContainer>
            </AcademicAreas>
          </InsetSection>
          <JoinCohort />
          <JoinDiscord />
        </Container>
      </AuthRoute>
    </>
  );
};

export default Dashboard;

const Container = styled.div``;

const WelcomeSection = styled.section`
  background: linear-gradient(
    -280deg,
    rgba(4, 13, 33, 0.9) 0%,
    rgba(62, 63, 73, 0.8) 90.21%
  );
`;
const WelcomeContent = styled(MaxwidthContainer)`
  padding: 2rem var(--container-padding);
`;

const Start = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Greeting = styled.h3`
  font-weight: 500;
  font-size: clamp(1.3rem, 1.429vw + 0.464rem, 1.75rem);
  color: #ffffff;
  text-transform: capitalize;
`;

const GreetingSub = styled.p`
  font-weight: 500;
  font-size: clamp(0.8rem, 1.429vw + 0.464rem, 1.12rem);
  color: #8691a6;
  width: 40ch;
  line-height: 1.5;

  a {
    color: white;
    display: inline-block;
    padding-inline: 5px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    width: revert;
  }
`;

const CourseDetailSection = styled.section`
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9) 5.87%,
      rgba(0, 0, 0, 0.6) 30%,
      rgba(0, 0, 0, 0.35) 70%
    ),
    url("/data-globe.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const CourseDetailContent = styled(MaxwidthContainer)`
  padding: 2rem var(--container-padding);
  display: flex;
  gap: 2.5rem;
  color: white;
`;

const GradientContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-rows: 50px auto 1fr;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  margin-top: 1rem;
  margin-bottom: 4rem;
`;

const Detail = styled.div`
  font-weight: 500;
  font-size: 1.12rem;
  flex: 1;

  a {
    display: inline-block;
  }
`;

const Title = styled.p`
  font-weight: 600;
  font-size: clamp(1.3rem, 1.667vw + 0.5rem, 2rem);
`;

const Description = styled.p`
  font-size: clamp(0.8rem, 1.429vw + 0.464rem, 1.12rem);
  line-height: 1.6;
  width: min(50ch, 100%);
  /* @media ${QUERIES.tabletAndSmaller} {
    width: revert;
  } */
`;

const FeatureList = styled.ul`
  list-style-type: none;
  list-style-image: url("/checkmark.png");
  margin-block: 2rem;
  /* padding: 0; */

  li {
    font-size: clamp(0.8rem, 1.429vw + 0.464rem, 1.12rem);
    margin-bottom: 15px;
  }
`;

const LearningPath = styled.div`
  /* width: min(300px, 100%); */
  /* height: 400px; */
  margin-top: 2rem;
  background: linear-gradient(
    -286.85deg,
    rgba(4, 13, 33, 0.9) 0%,
    rgba(62, 63, 73, 0.7) 98.21%
  );
  border: 1px solid #ffffff;
  box-shadow: 0px 0px 106.452px rgba(62, 63, 73, 0.25);
  /* filter: blur(0.5px); */
  border-radius: 17px;
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

const Content = styled.div`
  padding: 1rem;
  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin-bottom: 0.7rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid gray;
    display: flex;
    justify-content: space-between;
  }
`;

const PathTitle = styled.p`
  font-size: var(--font-size-md);
  font-weight: 500;
`;

const GradientStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const AcademicAreas = styled.div`
  margin-left: 2rem;
  margin-block: 2.5rem;
  width: 100%;
  @media ${QUERIES.phoneAndSmaller} {
    margin-left: 1rem;
    margin-block: 1.8rem;
  }
`;

const AreasTitle = styled.p`
  font-weight: 600;
  font-size: 2rem;
  @media ${QUERIES.phoneAndSmaller} {
    font-size: clamp(1.5rem, 1.429vw + 0.464rem, 2rem);
  }
`;

const TopicsContainer = styled.div`
  display: flex;
  margin-top: 3rem;
  @media ${QUERIES.tabletAndSmaller} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
`;
