import Link from "next/link";
import styled, { css } from "styled-components";
import { collection, query, where, orderBy, limit } from "firebase/firestore";
import {
  useCollection,
  useCollectionOnce,
} from "react-firebase-hooks/firestore";

import Button from "../Button";
import CourseCard from "../CourseCard";
import courseimg from "../../assets/images/abstract-1392404_1920.png";
import { QUERIES } from "../../constants";
import { db } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import { MaxwidthContainer } from "../GlobalStyles";

// const tablist = ["Data Science", "Software", "Cyber Security", "Cloud"];

const CoursesSection = () => {
  const [filterBy, setFilterBy] = useState("");
  const [courses, setCourses] = useState([]);
  const [paths, setPaths] = useState([]);
  const [path, pathLoading, pathError] = useCollectionOnce(
    collection(db, "academic-paths")
  );

  const q = query(
    collection(db, "courses"),
    where("academic-path", "==", filterBy)
  );

  const [courseResult, courseLoad, courseError] = useCollectionOnce(q);

  useEffect(() => {
    if (path) {
      setPaths(path.docs);
      const id = path.docs[0].id;
      setFilterBy(id);
      // console.log({ path }, { id });
    }
  }, [path]);

  useEffect(() => {
    if (courseResult) {
      setCourses(courseResult.docs);
      console.log({ courseResult });
    }
  }, [courseResult]);

  return (
    <BackgroundContainer>
      <Container>
        <TabsSection>
          <ul>
            {pathLoading && <p>Loading...</p>}
            {pathError && <p>Error Fetching data...</p>}
            {paths &&
              paths.map((tab) => (
                <PathTab
                  key={tab.id}
                  onClick={() => setFilterBy(tab.id)}
                  selected={filterBy === tab.id}
                >
                  {tab.data().name}
                </PathTab>
              ))}
          </ul>
          <Button
            as={Link}
            href={`/academic-paths/${filterBy}`}
            title={"View All"}
            bgColor={"#D5DBE2"}
            size={"18px"}
          />
        </TabsSection>
        {courseLoad && (
          <div>
            <Spinner />
            <h4>Collection: Loading Recommended Courses...</h4>
          </div>
        )}
        {courseError && <h4>Error Loading Recommended Courses...</h4>}
        {!courseLoad && courses && (
          <CourseList>
            {courses.map((doc) => (
              <CourseCard key={doc.id} doc={doc} courseimg={courseimg} />
            ))}
          </CourseList>
        )}
      </Container>
    </BackgroundContainer>
  );
};

export default CoursesSection;

const BackgroundContainer = styled.section`
  background-color: #fafcff;
`;

const Container = styled(MaxwidthContainer)`
  padding: 2rem var(--container-padding);
`;

const TabsSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    gap: 1.5rem;
    padding-left: 0;
    flex-wrap: wrap;
  }

  @media ${QUERIES.phoneAndSmaller} {
    ul {
      gap: 1rem;
    }
  }
`;

const PathTab = styled.li`
  font-weight: 500;
  font-size: clamp(0.9rem, 1.429vw + 0.464rem, 1.3rem);
  color: #8691a6;
  cursor: pointer;
  transition: border 0.3s linear;

  ${({ selected }) =>
    selected &&
    css`
      color: #0d1117;
      padding-bottom: 0.5rem;
      border-bottom: 3px solid #44e986;
      border-radius: 20px 10px 0px 0px;
    `};
`;

const CourseList = styled.div`
  margin-block: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 250px), 1fr));
  gap: 1rem;
`;
