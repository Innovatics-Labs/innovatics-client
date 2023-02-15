import { VscGraph } from "react-icons/vsc";
import styled from "styled-components";
import CourseOverview from "../../components/course/CourseOverview";
import TopicCard from "../../components/course/TopicCard";
import GradientIcon from "../../components/GradientIcon";
import InstructorCap from "../../components/InstructorCap";
import JoinDiscord from "../../components/JoinDiscord";
import LineGradient from "../../components/LineGradient";
import Pagination from "../../components/Pagination";
import { QUERIES } from "../../constants";
import { GrayTitle } from "../course-work";

const DashboardClass = () => {
  return (
    <Container>
      <CourseOverview />
      <CourseSection>
        <GradientContainer>
          <LineGradient colorFrom={"#44E98600"} colorTo={"#44E986"} />
          <GradientIcon
            IconComponent={<VscGraph size={30} color="#44E986" />}
            bgColor={"#44E986"}
          />
        </GradientContainer>
        <Content>
          <Instructordetails>
            <CapContainer>
              <InstructorCap size={"140px"} iconsize={70} />
            </CapContainer>
            <CourseStats>
              <InstructorName>
                <GrayTitle>INSTRUCTOR:</GrayTitle> Muhammad Medwani
              </InstructorName>
              <Duration>
                <GrayTitle>DURATION:</GrayTitle> 7h 20min
              </Duration>
              <Level>
                <GrayTitle>LEVEL:</GrayTitle> BEGINNER
              </Level>
            </CourseStats>
          </Instructordetails>
          <CourseContentWrapper>
            <CourseTitle>Introduction to Python</CourseTitle>
            <TopicCard
              topicTitle={"Python Lab & Innovatics platform"}
              activityCount={2}
            />
            <TopicCard topicTitle={"Python Introduction"} activityCount={15} />
          </CourseContentWrapper>
        </Content>
      </CourseSection>
      <PaginationContainer>
        <Pagination />
      </PaginationContainer>
      <JoinDiscord />
    </Container>
  );
};

export default DashboardClass;

const Container = styled.div``;

const CourseSection = styled.section`
  padding: 2rem var(--container-padding);
  display: flex;
  gap: 3rem;
  background: #0d1117;
`;

const GradientContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-rows: 170px auto 1fr;
  gap: 2rem;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const Instructordetails = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
  }
`;

const CapContainer = styled.div`
  transform: translateY(-50%);
  @media ${QUERIES.phoneAndSmaller} {
    transform: revert;
  }
`;

const InstructorName = styled.p``;

const CourseStats = styled.div`
  color: #fff;
  display: flex;
  gap: 3rem;
`;

const Duration = styled.p``;
const Level = styled.p``;

const CourseContentWrapper = styled.div`
  color: white;
`;

const CourseTitle = styled.h5`
  font-weight: 600;
  font-size: var(--font-size-xl);
`;

const PaginationContainer = styled.div`
  padding: 2rem 4rem;
  background-color: #0d1117;
`;
