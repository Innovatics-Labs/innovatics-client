import Link from "next/link";
import styled from "styled-components";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import Button from "../Button";
import CourseCard from "../CourseCard";
import courseimg from "../../assets/images/abstract-1392404_1920.png";
import { QUERIES } from "../../constants";
import { db } from "../../../firebaseConfig";
import { useEffect, useState } from "react";

const tablist = ["Data Science", "Software", "Security", "Cloud"];

const CoursesSection = () => {
  const [value, loading, error] = useCollection(collection(db, "courses"));

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (value) {
      setCourses(value.docs);
      // console.log({ courses }, { value });
    }
  }, [value, loading]);

  return (
    <Container>
      <TabsSection>
        <ul>
          {tablist.map((tab) => (
            <li key={tab}>
              <Link href={"/"}>{tab}</Link>
            </li>
          ))}
        </ul>
        <Button title={"View All"} bgColor={"#D5DBE2"} size={"18px"} />
      </TabsSection>
      <CourseList>
        {loading && <h4>Collection: Loading Recommended Courses...</h4>}
        {error && <h4>Error Loading Recommended Courses...</h4>}
        {courses &&
          courses.map((doc) => (
            <CourseCard key={doc.id} doc={doc} courseimg={courseimg} />
          ))}
      </CourseList>
    </Container>
  );
};

export default CoursesSection;

const Container = styled.section`
  background-color: #fafcff;
  padding: 2rem var(--container-padding);
`;

const TabsSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ul {
    list-style-type: none;
    display: flex;
    gap: 2rem;
    padding-left: 0;
    flex-wrap: wrap;
  }

  li {
    font-weight: 500;
    font-size: 22px;
    color: #8691a6;

    :first-child {
      color: #0d1117;
      padding-bottom: 0.5rem;
      border-bottom: 3px solid #44e986;
      border-radius: 20px 10px 0px 0px;
    }
  }

  @media ${QUERIES.phoneAndSmaller} {
    ul {
      gap: 1.5rem;
    }

    li {
      font-size: 14px;
    }
  }
`;

const CourseList = styled.div`
  margin-block: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
  gap: 1rem;
`;
