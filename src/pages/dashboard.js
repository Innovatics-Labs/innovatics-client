import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import styled from "styled-components";
import GradientIcon from "../components/GradientIcon";

import JoinCohort from "../components/JoinCohort";
import JoinDiscord from "../components/JoinDiscord";
import LineGradient from "../components/LineGradient";
import Button from "../components/Button";
import InsetSection from "../components/InsetSection";
import TopicCard from "../components/TopicCard";

const Dashboard = () => {
  return (
    <Container>
      <WelcomeSection>
        <Greeting>Welcome Anas!</Greeting>
        <GreetingSub>
          June Data Science Live cohort registration is on-going. Click
          <Link href={"/"}>here</Link> to learn more or click the button below
          to register.
        </GreetingSub>
        <Start>
          <span>Register Now</span>
          <MdKeyboardArrowRight color={"#8691A6"} size={24} />
        </Start>
      </WelcomeSection>
      <CourseDetailSection>
        <GradientContainer>
          <LineGradient
            colorFrom={"#10C75900"}
            colorTo={"#10C759"}
            height={"54px"}
          />
          <GradientIcon
            IconComponent={<FaReact size={30} color="#10C759" />}
            bgColor={"#10C759"}
          />
          <LineGradient colorFrom={"#10C759"} colorTo={"#10C75900"} />
        </GradientContainer>
        <DetailContainer>
          <Detail>
            <Title>Data Science</Title>
            <Description>
              Data science is an ever-evolving field, which is growing in
              popularity at an exponential rate. Data science includes
              techniques and theories extracted from the fields of statistics;
              computer science, and, most importantly, machine learning,
              databases, data visualization, and so on.
            </Description>
            <FeatureList>
              <li>Virtual Jupyter Notebook</li>
              <li>Programming Exercises</li>
              <li>Real World DS & ML Projects</li>
            </FeatureList>
            <Button
              title={"Start Learning"}
              bgColor="white"
              color={"#0D1117"}
            />
          </Detail>
          <LearningPath>
            <p>Learning Path</p>
          </LearningPath>
        </DetailContainer>
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
            <TopicCard
              topic={"Software Engineering"}
              color="#FFA28B"
              number={"02"}
              comingSoon
            />
            <TopicCard
              topic={"Cyber Security"}
              color="#DD7DF7"
              number={"03"}
              comingSoon
            />
            <TopicCard
              topic={"Cloud Engineering"}
              color="#8B90FF"
              number={"04"}
              comingSoon
            />
            <div style={{ alignSelf: "center", marginInline: "2rem " }}>
              <Button title={"See All"} variant="outline" />
            </div>
          </TopicsContainer>
        </AcademicAreas>
      </InsetSection>
      <JoinCohort />
      <JoinDiscord />
    </Container>
  );
};

export default Dashboard;

const Container = styled.div``;

const WelcomeSection = styled.section`
  padding: 2rem var(--container-padding);
  background: linear-gradient(
    -280deg,
    rgba(4, 13, 33, 0.9) 0%,
    rgba(62, 63, 73, 0.8) 90.21%
  );
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
  font-size: 28px;
  color: #ffffff;
`;

const GreetingSub = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #8691a6;
  width: 40ch;
  line-height: 28px;

  a {
    color: white;
    display: inline-block;
    padding-inline: 5px;
  }
`;

const CourseDetailSection = styled.section`
  padding: 2rem var(--container-padding);
  display: flex;
  gap: 3rem;
  color: white;
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

const GradientContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-rows: 50px auto 1fr;
`;

const DetailContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 1rem;
  margin-bottom: 4rem;
`;

const Detail = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 32px;
`;

const Description = styled.p`
  line-height: 28px;
  width: 50ch;
`;

const FeatureList = styled.ul`
  list-style-image: url("/checkmark.png");
  list-style-type: none;
  margin-block: 2rem;
  /* padding: 0; */

  li {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 15px;
  }
`;

const LearningPath = styled.div`
  width: 400px;
  height: 400px;
  margin-top: 2rem;
  background: linear-gradient(
    -286.85deg,
    rgba(4, 13, 33, 0.9) 0%,
    rgba(62, 63, 73, 0.7) 98.21%
  );
  border: 1px solid #ffffff;
  box-shadow: 0px 0px 106.452px rgba(62, 63, 73, 0.25);
  /* filter: blur(0.5px); */
  border-radius: 17.7419px;

  p {
    margin: 0;
    font-size: 18px;
    width: fit-content;
    color: black;
    background: #ffffff;
    border-radius: 17.74px 0px;
    padding: 15px 27px;
  }
`;

const GradientStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AcademicAreas = styled.div`
  margin-left: 2rem;
  margin-block: 2.5rem;
`;

const AreasTitle = styled.p`
  font-weight: 600;
  font-size: 32px;
`;

const TopicsContainer = styled.div`
  display: flex;
  margin-top: 3rem;
`;
