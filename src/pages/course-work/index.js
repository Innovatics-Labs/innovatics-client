import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import Link from "next/link";

import GradientIcon from "../../components/GradientIcon";
import LineGradient from "../../components/LineGradient";
import JoinCohort from "../../components/JoinCohort";
import JoinDiscord from "../../components/JoinDiscord";
import Button from "../../components/Button";
import InstructorCard from "../../components/InstructorCard";
import CourseCard from "../../components/coursework-components/CourseCard";
import Pagination from "../../components/Pagination";
import { QUERIES } from "../../constants";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import { where, query, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useRouter } from "next/router";
import { MaxwidthContainer } from "../../components/GlobalStyles";

const Dashboardsc = () => {
  const router = useRouter();
  const [courseList, setCourseList] = useState([]);
  const q = query(
    collection(db, "courses"),
    where("level", "==", router.query.level)
  );
  const [courseResult, courseLoad, courseError] = useCollectionOnce(q);

  console.log(router.query.level);

  useEffect(() => {
    if (courseResult) {
      setCourseList(courseResult.docs);
      console.log({ courseResult: courseResult.docs });
    }
  }, [courseResult, courseLoad]);

  return (
    <BgContainer>
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
              <p>Learning Path</p>
              <Title>{router.query.level}</Title>
              <Description>
                In the beginner learning path, learners will be introduced to
                the basic concepts of programming and data analysis using
                Python. The courses cover topics such as programming
                fundamentals, data analysis, SQL, and cloud computing. By the
                end of the beginner path, learners will have a good
                understanding of programming and data analysis fundamentals.
              </Description>
              <ProgressContainer>
                <label htmlFor="course-completion">
                  Progress: <span>0% Complete</span>
                </label>
                <Progress id="course-completion" max="100" value="60">
                  60%
                </Progress>
              </ProgressContainer>
              <Button
                as={Link}
                href="/course-work"
                title={"Start"}
                bgColor={"white"}
                color={"#0D1117"}
              />
            </Detail>
          </DetailContainer>
        </CourseDetailContent>
      </CourseDetailSection>
      <CourseHighlightSection>
        <CourseHighlightContent>
          <GradientContainer>
            <LineGradient
              colorFrom={"#10C75900"}
              colorTo={"#10C759"}
              height={"54px"}
            />
            <GradientIcon
              IconComponent={<VscGraph size={30} color="#44E986" />}
              bgColor={"#44E986"}
            />
            <LineGradient colorFrom={"#10C759"} colorTo={"#10C75900"} />
          </GradientContainer>
          <HighLightContent>
            <HighlightTitle>Course Highlights</HighlightTitle>
            <DurationLevel>
              <Duration>
                <GrayTitle>DURATION</GrayTitle>: 7h 20min
              </Duration>
              <Level>
                <GrayTitle>LEVEL:</GrayTitle> {router.query.level}
              </Level>
            </DurationLevel>
            <Activities>
              <GrayTitle>ACTIVITIES:</GrayTitle> 1 section, 4 courses, 8 videos,
              5 quizzes, 3 labs, 15 exercises
            </Activities>
            <InstructorsContainer>
              <IntructorSectionTitle>
                <GrayTitle>Instructors</GrayTitle>
              </IntructorSectionTitle>
              <InstructorsList>
                <InstructorCard
                  instructorName="Muhammad Medwani"
                  isLeadInstructor
                />
                <InstructorCard instructorName="Muhammad Medwani" />
                <InstructorCard instructorName="Muhammad Medwani" />
              </InstructorsList>
            </InstructorsContainer>
          </HighLightContent>
        </CourseHighlightContent>
      </CourseHighlightSection>

      <CourseListSection>
        <CourseListContent>
          <GradientContainer>
            <LineGradient
              colorFrom={"#10C75900"}
              colorTo={"#10C759"}
              height={"54px"}
            />
            <GradientIcon
              IconComponent={<VscGraph size={30} color="#44E986" />}
              bgColor={"#44E986"}
            />
          </GradientContainer>
          <CourseListContainer>
            <CourseListHeading>
              Section 1 | Data Science Crash Course
            </CourseListHeading>
            <CourseList>
              {!courseLoad &&
                courseList &&
                courseList.map((doc) => (
                  <CourseCard
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().title}
                    instructor={doc.data().instructor}
                    duration={doc.data().duration}
                  />
                ))}
            </CourseList>
          </CourseListContainer>
        </CourseListContent>
      </CourseListSection>
      <AcademicPaths>
        <GradientContainer>
          <LineGradient
            colorFrom={"#10C75900"}
            colorTo={"#10C759"}
            height={"54px"}
          />
          <GradientIcon
            IconComponent={<VscGraph size={30} color="#44E986" />}
            bgColor={"#44E986"}
          />
        </GradientContainer>
        <Content>
          <p style={{ fontWeight: "600", fontSize: "2rem" }}>Academic Paths</p>
          <Pagination />
        </Content>
      </AcademicPaths>
      <JoinCohort />
      <JoinDiscord />
    </BgContainer>
  );
};

export default Dashboardsc;

const BgContainer = styled.div``;

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
  display: flex;
  gap: 3rem;
  color: white;
  padding: 2rem var(--container-padding);
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
  margin-top: 1rem;
  margin-bottom: 4rem;
`;

const Detail = styled.div`
  margin-top: 2.5rem;
  font-weight: 500;
  font-size: 1.12rem;

  a {
    display: inline-block;
  }
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1rem;
  }
`;

const Title = styled.p`
  font-weight: 600;
  font-size: var(--font-size-3xl);
  margin-block: 10px;
  text-transform: capitalize;
`;

const Description = styled.p`
  font-size: var(--font-size-md);
  line-height: 1.5;
  width: min(70ch, 100%);
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1rem;
  }
`;

const ProgressContainer = styled.div`
  font-weight: 500;
  font-size: 1rem;
  margin-block: 1rem;

  label {
    color: #8691a6;
    display: block;
    text-transform: uppercase;

    span {
      color: white;
    }
  }
`;

const Progress = styled.progress`
  width: 100%;
  height: 8px;
  border-radius: 100px;

  ::-webkit-progress-bar {
    background-color: #505151;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }

  ::-webkit-progress-value {
    background-image: -webkit-linear-gradient(
        -45deg,
        transparent 33%,
        rgba(0, 0, 0, 0.1) 33%,
        rgba(0, 0, 0, 0.1) 66%,
        transparent 66%
      ),
      -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
      -webkit-linear-gradient(left, #09c, #f44);

    border-radius: 2px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
  }
`;

const CourseHighlightSection = styled.section`
  color: white;
  background: linear-gradient(
    -286deg,
    rgba(4, 13, 33, 0.9) 40%,
    rgba(62, 63, 73, 0.8) 98.21%
  );
`;

const CourseHighlightContent = styled(MaxwidthContainer)`
  padding: 2rem var(--container-padding);
  display: flex;
  gap: 3rem;
`;

const HighLightContent = styled.div`
  margin-block: 2rem;
`;

const HighlightTitle = styled.p`
  font-weight: 600;
  font-size: var(--font-size-xl);
`;

export const GrayTitle = styled.span`
  display: inline-block;
  font-weight: 500;
  color: #8691a6;
  text-transform: uppercase;
`;

const DurationLevel = styled.div`
  display: flex;
  gap: 2rem;
  @media ${QUERIES.phoneAndSmaller} {
    gap: 1rem;
  }
`;

const IntructorSectionTitle = styled.p``;

const Duration = styled.p`
  border-right: 2px solid gray;
  padding-right: 2rem;
  @media ${QUERIES.phoneAndSmaller} {
    padding-right: 1rem;
  }
`;

const Level = styled.p`
  text-transform: uppercase;
`;
const Activities = styled.p``;

const InstructorsContainer = styled.div`
  margin-top: 2rem;
`;

const InstructorsList = styled.div`
  display: flex;
  align-items: start;
  gap: 1.8rem;
  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
  }
`;

const CourseListSection = styled.div`
 
  background: #0d1117;
`;

const CourseListContent = styled(MaxwidthContainer)`
  display: flex;
  gap: 3rem;
  padding: 2rem var(--container-padding);
`;

const CourseListContainer = styled.div`
  width: 100%;
  margin-block: 2rem;
`;

const CourseList = styled.div`
  display: grid;
  gap: 2rem;
`;

const CourseListHeading = styled.p`
  font-weight: 600;
  font-size: clamp(1.3rem, 1.667vw + 0.5rem, 2rem);
  color: white;
  margin-bottom: 3rem;
`;

const AcademicPaths = styled.section`
  padding: 2rem var(--container-padding);
  background: #0d1117;
  color: white;
  display: flex;
  gap: 2.5rem;
`;

const Content = styled.article`
  flex: 1;
  margin-block: 2rem;
`;
