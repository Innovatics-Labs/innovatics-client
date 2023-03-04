import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import thumbnail from "../../assets/images/thumbnail.png";
import { QUERIES } from "../../constants";
import { GrayTitle } from "../../pages/course-work";
import Button from "../Button";

const CourseCard = ({ instructor, duration, title, id }) => {
  return (
    <Container>
      <ThumbnailContainer>
        <Image src={thumbnail} alt="video tumbnail" sizes="100vw" />
      </ThumbnailContainer>
      <CourseDetail>
        <CourseTitle>{title}</CourseTitle>
        <CourseInstructor>
          <GrayTitle>INSTRUCTOR:</GrayTitle> {instructor}
        </CourseInstructor>
        <CourseDuration>
          <GrayTitle>DURATION:</GrayTitle> {duration}
        </CourseDuration>
      </CourseDetail>
      <Action>
        <Button
          as={Link}
          variant={"outline"}
          title="Begin"
          href={`/course/${id}`}
        />
      </Action>
    </Container>
  );
};

export default CourseCard;

const Container = styled.article`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.5rem;
  color: white;
  width: 100%;
  border-bottom: 1px solid #8691a6;
  padding-bottom: 2rem;

  @media (max-width: ${720 / 16}rem) {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
  }
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    object-fit: cover;
  }
`;
const CourseDetail = styled.div`
  /* margin-right: auto; */
`;

const CourseTitle = styled.p`
  font-weight: 600;
  font-size: clamp(1.1rem, 1.667vw + 0.5rem, 1.5rem);
`;

const CourseInstructor = styled.p`
  font-size: var(--font-size-md);
`;

const CourseDuration = styled.p`
  font-size: var(--font-size-md);
`;

const Action = styled.div`
  width: fit-content;
  align-self: center;
`;
