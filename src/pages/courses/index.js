import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  collection,
  onSnapshot,
  where,
  query,
  orderBy,
  limit,
} from "@firebase/firestore";

import { db } from "../../../firebaseConfig";
import styled from "styled-components";
import CourseCard from "../../components/CourseCard";
import Spinner from "../../components/Spinner";
import { MaxwidthContainer } from "../../components/GlobalStyles";
import {
  Levels,
  LevelsList,
  CourseGrid,
  CourseListings,
  Courses,
  FoundText,
  ListingsContent,
} from "../academic-paths/[id]";
import LineGradient from "../../components/LineGradient";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import HeadSeo from "../../components/HeadSeo";
import siteMetadata from "../../data/siteMetadata";

export default function SearchPage() {
  const router = useRouter();
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("Data Science");
  const q = query(collection(db, "courses"));
  const [courseList, setCourseList] = useState([]);
  const [courseResult, courseLoad, courseError] = useCollectionOnce(q);

  const searchRecords = (e) => {
    e.preventDefault();
    const collectionref = collection(db, "courses");
    const q = query(
      collectionref,
      where("title", "==", search),
      orderBy("title", "asc")
    ); //
    const unsub = onSnapshot(q, (snapshot) =>
      setData(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, key: doc.id }))
      )
    );
    return unsub;
  };

  useEffect(() => {
    if (courseResult) {
      setCourseList(courseResult.docs);
      console.log({ courseResult: courseResult.docs });
    }
  }, [courseResult, courseError]);

  return (
    <>
      <HeadSeo
        title={`Courses | ${siteMetadata.companyName} `}
        description={"Increase you technical Knowledge"}
        canonicalUrl={`${siteMetadata.siteUrl}/courses`}
        ogType={"article"}
      />
      <Container>
        <MaxwidthContainer>
          {/* <Search
          id="search"
          type="text"
          placeholder="Search"
          onKeyUp={searchRecords}
          onChange={(e) => setSearch(e.target.value)}
        /> */}
          <CourseListings>
            <div style={{ paddingLeft: "1rem" }}>
              {courseList && (
                <FoundText>
                  {courseList.length} value found for <span>{filterBy}</span>
                </FoundText>
              )}
              <hr />
            </div>
            <ListingsContent>
              <div>
                <LineGradient
                  colorFrom={"#10C75900,#10C759"}
                  colorTo={"#10C75900"}
                />
              </div>
              <Courses>
                <nav>
                  <LevelsList>
                    <Levels
                      selected={filterBy === "Data Science"}
                      onClick={() => setFilterBy("Data Science")}
                    >
                      Data Science
                    </Levels>
                    <Levels
                      selected={filterBy === "cloud"}
                      onClick={() => setFilterBy("cloud")}
                    >
                      Cloud
                    </Levels>
                    <Levels
                      selected={filterBy === "software"}
                      onClick={() => setFilterBy("software")}
                    >
                      Software Eng.
                    </Levels>
                    <Levels
                      selected={filterBy === "security"}
                      onClick={() => setFilterBy("security")}
                    >
                      Security
                    </Levels>
                  </LevelsList>
                </nav>
                <CourseGrid>
                  {courseError && (
                    <h4 style={{ margin: "2rem", color: "red" }}>
                      Error Loading Path Courses...
                    </h4>
                  )}
                  {courseLoad && (
                    <div style={{ margin: "2rem", width: "100%" }}>
                      <Spinner />
                      <h4>Loading Academic Area Courses...</h4>
                    </div>
                  )}
                  {!courseLoad &&
                    courseList &&
                    courseList.map((doc) => (
                      <>
                        <CourseCard key={doc.id} doc={doc} />
                      </>
                    ))}
                </CourseGrid>
              </Courses>
            </ListingsContent>
          </CourseListings>
        </MaxwidthContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: var(--container-padding);
  background-color: #0d1117;
`;

const Search = styled.input`
  background: #ffffff;
  border-radius: 10px;
  padding: 10px;
  height: 40px;
  border: 1px solid white;
`;
