import Image from "next/image";
import React from "react";
import styled from "styled-components";

function CourseCard({ courseimg, doc }) {
  return (
    <CourseCardContainer>
      <CourseImage>
        <Image src={courseimg} alt="" />
      </CourseImage>
      <Content>
        <TitleDuration>
          <CourseTitle>{doc.data().title}</CourseTitle>
          <CourseDuration>{doc.data().duration}</CourseDuration>
        </TitleDuration>
        <AuthorLevel>
          <CourseLevel>{doc.data().level}</CourseLevel>
          <CourseAuthor>{doc.data().instructor}</CourseAuthor>
        </AuthorLevel>
      </Content>
    </CourseCardContainer>
  );
}

export default CourseCard;

const CourseCardContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
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
  gap: 2rem;
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
