import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import thumbnail from "../../assets/images/thumbnail.png";
import { QUERIES } from "../../constants";
import { GrayTitle } from "../../pages/course-work";
import Button from "../Button";

const CourseCard = () => {
  return (
    <Container>
      <DetailContainer>
        <ThumbnailContainer>
          <Image src={thumbnail} alt="video tumbnail" sizes="100vw" />
        </ThumbnailContainer>
        <CourseDetail>
          <CourseTitle>Python Crash Course</CourseTitle>
          <CourseInstructor>
            <GrayTitle>INSTRUCTOR:</GrayTitle> MUHAMMAD MED.
          </CourseInstructor>
          <CourseDuration>
            <GrayTitle>DURATION:</GrayTitle> 4h 15m
          </CourseDuration>
        </CourseDetail>
      </DetailContainer>
      <div style={{ alignSelf: "center" }}>
        <Button as={Link} variant={"outline"} title="Begin" href="course" />
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
  flex-wrap: wrap;

  @media ${QUERIES.phoneAndSmaller} {
    /* justify-content: center; */
    gap: 1rem;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  @media ${QUERIES.phoneAndSmaller} {
    /* justify-content: center; */
    gap: 1rem;
  }
`;

const ThumbnailContainer = styled.div`
  /* width: 100%; */
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const CourseDetail = styled.div`
  /* margin-right: auto; */
`;

const CourseTitle = styled.p`
  font-weight: 600;
  font-size: clamp(1.2rem, 1.667vw + 0.5rem, 1.8rem);
`;

const CourseInstructor = styled.p`
  font-size: var(--font-size-md);
`;

const CourseDuration = styled.p`
  font-size: var(--font-size-md);
`;
