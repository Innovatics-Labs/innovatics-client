import React from "react";
import styled from "styled-components";
import { VscGraph } from "react-icons/vsc";
import GradientIcon from "../GradientIcon";
import LineGradient from "../LineGradient";
import { QUERIES } from "../../constants";

const CourseOverview = ({ courseTitle }) => {
  return (
    <CourseOverviewWrapper>
      <GradientContainer>
        <LineGradient colorFrom={"#FFFFFF00"} colorTo={"#fff"} />
        <GradientIcon
          IconComponent={<VscGraph size={30} color="#fff" />}
          bgColor={"#fff"}
        />
        <LineGradient colorFrom={"#FFF"} colorTo={"#fffFFF00"} />
      </GradientContainer>
      <CourseDetail>
        <CourseCategory>Data Science</CourseCategory>
        <CourseTitle>
          {courseTitle ? courseTitle : "Python for Data Science"}
        </CourseTitle>
      </CourseDetail>
    </CourseOverviewWrapper>
  );
};

export default CourseOverview;

const CourseOverviewWrapper = styled.section`
  padding: 2rem var(--container-padding);
  display: flex;
  gap: 3rem;
  color: white;
  background: linear-gradient(90deg, #578dff 0%, #dd56ff 100%);
  @media ${QUERIES.phoneAndSmaller} {
    gap: 1.5rem;
  }
`;

const GradientContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-rows: 70px auto 1fr;
  @media ${QUERIES.phoneAndSmaller} {
    grid-template-rows: 30px auto 1fr;
  }
`;

const CourseDetail = styled.div`
  margin-block: 4.5rem;
  @media ${QUERIES.phoneAndSmaller} {
    margin-block: 2.5rem;
  }
`;

const CourseCategory = styled.h6`
  font-weight: 600;
  font-size: var(--font-size-xl);
  margin-block: 1rem;
`;

const CourseTitle = styled.h4`
  font-weight: 600;
  font-size: var(--font-size-3xl);
  margin-block: 2rem;
  @media ${QUERIES.phoneAndSmaller} {
    margin-block: 1rem;
  }
`;
