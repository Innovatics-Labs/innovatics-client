import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import img from "../assets/images/abstract-1392404_1920.png";

function CourseCard({
  courseimg = img,
  doc,
  title,
  duration,
  level,
  instructor,
}) {
  return (
    <CourseCardContainer key={doc.id}>
      <Link href={`/course/${doc?.id || "alrMf2i9X1SvEu9gIyx4"}`}>
        <CourseImage>
          <Image src={courseimg} alt="" />
        </CourseImage>
        <Content>
          <TitleDuration>
            <CourseTitle>{doc?.data().title || title}</CourseTitle>
            <CourseDuration>{doc?.data().duration || duration}</CourseDuration>
          </TitleDuration>
          <AuthorLevel>
            <CourseLevel>{doc?.data().level || level}</CourseLevel>
            <CourseAuthor>{doc?.data().instructor || instructor}</CourseAuthor>
          </AuthorLevel>
        </Content>
      </Link>
    </CourseCardContainer>
  );
}

export default CourseCard;

const CourseCardContainer = styled.div`
  /* background: #ffffff; */
  border-radius: 16px;
  overflow: hidden;
  position: relative;
`;

const CourseImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 1rem;
  color: #ffffff;
  isolation: isolate;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
`;

const TitleDuration = styled.div``;

const CourseDuration = styled.p`
  font-weight: 500;
  font-size: 11px;
`;

const CourseTitle = styled.p`
  font-weight: 600;
  font-size: 15px;
`;

const AuthorLevel = styled.div``;

const CourseAuthor = styled.p`
  font-weight: 600;
  font-size: 15px;
`;

const CourseLevel = styled.p`
  font-weight: 500;
  font-size: 11px;
  color: #8691a6;
  margin-block: 0;
  text-transform: capitalize;
`;
