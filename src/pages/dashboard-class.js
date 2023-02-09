import { VscGraph } from "react-icons/vsc";
import styled from "styled-components";
import CourseOverview from "../components/dashboardclass/CourseOverview";
import VideoCard from "../components/dashboardclass/VideoCard";
import GradientIcon from "../components/GradientIcon";
import InstructorCap from "../components/InstructorCap";
import JoinDiscord from "../components/JoinDiscord";
import LineGradient from "../components/LineGradient";
import Pagination from "../components/pagination";
import { GrayTitle } from "./dashboard-sc";

const DashboardClass = () => {
  return (
    <div>
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
            <div style={{ transform: "translateY(-50%)" }}>
              <InstructorCap size={"140px"} iconsize={70} />
            </div>
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
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </CourseContentWrapper>
        </Content>
      </CourseSection>
      <section style={{ padding: "2rem 4rem", backgroundColor: "#0d1117" }}>
        <Pagination />
      </section>
      <JoinDiscord />
    </div>
  );
};

export default DashboardClass;

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
`;

const Content = styled.div`
  width: 100%;
`;

const Instructordetails = styled.div`
  display: flex;
  gap: 3rem;
  align-items: flex-start;
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
  font-size: 32px;
`;
