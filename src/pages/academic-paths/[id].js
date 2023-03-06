import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import {
  doc,
  collection,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import {
  useCollectionOnce,
  useDocumentOnce,
} from "react-firebase-hooks/firestore";
import { FaReact } from "react-icons/fa";

import siteMetadata from "../../data/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import GradientIcon from "../../components/GradientIcon";
import LineGradient from "../../components/LineGradient";
import { QUERIES } from "../../constants";
import { db } from "../../../firebaseConfig";
import { getAllAcademicPathsId } from "../../utils";
import Spinner from "../../components/Spinner";
import CourseCard from "../../components/CourseCard";
import JoinDiscord from "../../components/JoinDiscord";
import courseimg from "../../assets/images/abstract-1392404_1920.png";
import { MaxwidthContainer } from "../../components/GlobalStyles";
import LevelsCard from "../../components/LevelsCard";

const AcademicPaths = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pathDetail, setPathDetail] = useState({});
  const [courseList, setCourseList] = useState([]);
  const [filterBy, setFilterBy] = useState("beginner");
  const [value, loading, error] = useDocumentOnce(
    doc(db, "academic-paths", id)
  );
  const q = query(
    collection(db, "courses"),
    where("academic-path", "==", id),
    where("level", "==", filterBy)
  );
  const [courseResult, courseLoad, courseError] = useCollectionOnce(q);

  // TODO: make the filtering occur at the client and not on firebase

  useEffect(() => {
    if (value) {
      setPathDetail(value.data());
    }

    // getAllAcademicPathsId();
  }, [value]);

  useEffect(() => {
    if (courseResult) {
      setCourseList(courseResult.docs);
    }
  }, [courseResult, courseError]);

  return (
    <>
      <HeadSeo
        title={`Academic Path | ${siteMetadata.companyName} `}
        description={pathDetail.description}
        canonicalUrl={`${siteMetadata.siteUrl}/${pathDetail.id}`}
        ogType={"article"}
      />
      <Container>
        <CourseDetailSection>
          <CourseDetailContent>
            <GradientContainer>
              <GradientIcon
                IconComponent={<FaReact size={30} color="#44E986" />}
                bgColor={"#44E986"}
              />
              <LineGradient colorFrom={"#10C759"} colorTo={"#10C75900"} />
            </GradientContainer>
            <DetailContainer>
              <Detail>
                {loading && <h4>Details: Loading...</h4>}
                {error && <h4>Details: error fetching data...</h4>}
                {pathDetail && (
                  <>
                    <Title>{pathDetail.name}</Title>
                    <Description> {pathDetail.description}</Description>
                  </>
                )}
              </Detail>
              <AcademicLevelsContainer>
                <PathTitle>Academic Levels</PathTitle>
                <CardList>
                  <LevelsCard
                    title={"Beginner"}
                    description="Join the data driven companies."
                    duration={"12h 30m"}
                    category="Data"
                    level={"beginner"}
                  />
                  <LevelsCard
                    title={"Professional"}
                    description="Take up lead role in your establishment"
                    duration={"18h 50m"}
                    category="Data"
                    level={"professional"}
                  />
                  <LevelsCard
                    title={"Expert"}
                    description=" Expand your abilities as a well-rounded engineer!"
                    duration={"12h 30m"}
                    category="Data"
                    level={"expert"}
                  />
                </CardList>
              </AcademicLevelsContainer>
            </DetailContainer>
          </CourseDetailContent>
        </CourseDetailSection>
        <CourseListings>
          <MaxwidthContainer>
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
                      selected={filterBy === "beginner"}
                      onClick={() => setFilterBy("beginner")}
                    >
                      Beginner
                    </Levels>
                    <Levels
                      selected={filterBy === "professional"}
                      onClick={() => setFilterBy("professional")}
                    >
                      Professional
                    </Levels>
                    <Levels
                      selected={filterBy === "expert"}
                      onClick={() => setFilterBy("expert")}
                    >
                      Expert
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
                  {!courseLoad && courseList.length === 0 && (
                    <h4>No Available course found...</h4>
                  )}
                  {!courseLoad &&
                    courseList &&
                    courseList.map((doc) => (
                      <>
                        <CourseCard
                          key={doc.id}
                          doc={doc}
                          courseimg={courseimg}
                        />
                      </>
                    ))}
                  {/* <Spinner /> */}
                </CourseGrid>
              </Courses>
            </ListingsContent>
          </MaxwidthContainer>
        </CourseListings>
        <Pagination>
          <MaxwidthContainer>
            <PaginationActions>
              <Prev>Prev</Prev>
              <PagesCount>1 0f 10 pages</PagesCount>
              <Next>Next</Next>
            </PaginationActions>
          </MaxwidthContainer>
        </Pagination>

        <JoinDiscord />
      </Container>
    </>
  );
};

export default AcademicPaths;

// export async function getStaticPaths() {
//   const paths = await getAllAcademicPathsId();
//   return {
//     paths,
//     fallback: false,
//   };
// }

const Container = styled.div``;

const CourseDetailSection = styled.section`
  background-image: linear-gradient(
      90deg,
      #0d1117,
      rgba(13, 17, 23, 0.68),
      rgba(13, 17, 23, 0.3)
    ),
    url("/circuit-board.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const CourseDetailContent = styled(MaxwidthContainer)`
  padding: 2rem var(--container-padding);
  display: flex;
  gap: 3rem;
  color: white;
`;

const GradientContainer = styled.div`
  display: grid;
  position: relative;
  z-index: 1;
  margin-top: 1.5rem;
  gap: 1.5rem;
  grid-template-rows: auto 1fr;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const DetailContainer = styled.div`
  margin-bottom: 4rem;
`;

const Detail = styled.div`
  font-weight: 500;
  font-size: 1.12rem;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: var(--font-size-3xl);
  margin-block: 10px;
`;

const Description = styled.p`
  font-size: var(--font-size-md);
  line-height: 1.5;
  width: min(60ch, 100%);
`;

const AcademicLevelsContainer = styled.div`
  background-color: #0d1117;
  box-shadow: 0 0 0 100vmax #0d1117;
  clip-path: inset(0 -100vmax);
  margin-top: 4rem;
  padding-block: 1rem;
`;

const PathTitle = styled.p`
  font-weight: 500;
  font-size: var(--font-size-2md);
`;

const CardList = styled.div`
  display: flex;
  gap: 2rem;
  @media ${QUERIES.tabletAndSmaller} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
`;

export const CourseListings = styled.section`
  padding: 2rem var(--container-padding);
  background-color: rgba(13, 17, 22);
  color: white;

  hr {
    border: 1px solid #8691a6;
  }
`;

export const ListingsContent = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const FoundText = styled.p`
  font-weight: 500;
  font-size: var(--font-size-2md);
  span {
    font-weight: 700;
    text-transform: capitalize;
  }
`;

export const CourseGrid = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

export const Courses = styled.div`
  width: 100%;
`;

export const LevelsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  padding-left: 0;
  margin-bottom: 3rem;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 1rem;
  }
`;

export const Levels = styled.li`
  font-weight: 500;
  font-size: 1.12rem;
  padding: 0.8rem 1.3rem;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      background: #ffffff;
      font-weight: 600;
      color: #0d1117;
      border-radius: 50px;
    `};

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 0.8rem;
  }
`;

const Pagination = styled.div`
  background-color: #0d1117;
  padding: 2rem var(--container-padding);
  color: white;
`;

const PaginationActions = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  font-weight: 500;
  font-size: 18px;
  align-items: center;
  justify-content: center;
`;

const Prev = styled.p`
  text-decoration-line: underline;
`;

const PagesCount = styled.p`
  color: #8691a6;
`;

const Next = styled.p`
  text-decoration-line: underline;
`;
