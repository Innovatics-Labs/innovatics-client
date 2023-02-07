import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import thumbnail from "../assets/images/thumbnail.png";
import { GrayTitle } from "../pages/dashboard-sc";
import Button from "./Button";

const CourseCard = () => {
  return (
    <Container>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Image src={thumbnail} alt="video tumbnail" />
        <CourseDetail>
          <CourseTitle>Python Crash Course</CourseTitle>
          <CourseInstructor>
            <GrayTitle>INSTRUCTOR:</GrayTitle> MUHAMMAD MED.
          </CourseInstructor>
          <CourseDuration>
            <GrayTitle>DURATION:</GrayTitle> 4h 15m
          </CourseDuration>
        </CourseDetail>
      </div>
      <div style={{ alignSelf: "center" }}>
        <Button
          as={Link}
          variant={"outline"}
          title="Begin"
          href="dashboard-class"
        />
      </div>
    </Container>
  );
};

export default CourseCard;

const Container = styled.article`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  color: white;
  width: 100%;
  border-bottom: 1px solid #8691a6;
  padding-bottom: 2rem;
`;

const CourseDetail = styled.div`
  /* margin-right: auto; */
`;

const CourseTitle = styled.p`
  font-weight: 600;
  font-size: 28px;
`;

const CourseInstructor = styled.p`
  font-size: 18px;
`;

const CourseDuration = styled.p`
  font-size: 18px;
`;
