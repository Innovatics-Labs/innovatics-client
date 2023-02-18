import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { doc } from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { FaReact } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

import GradientIcon from "../../components/GradientIcon";
import LineGradient from "../../components/LineGradient";
import { QUERIES } from "../../constants";
import { db } from "../../../firebaseConfig";
import { getAllAcademicPathsId } from "../../utils";

const AcademicPaths = () => {
  const [pathDetail, setPathDetail] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const [value, loading, error] = useDocument(doc(db, "academic-paths", id), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  useEffect(() => {
    if (value) {
      console.log({ value: value.data() });
      setPathDetail(value.data());
    }
    getAllAcademicPathsId();
  }, [value]);

  return (
    <Container>
      <CourseDetailSection>
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
              <Card>
                <CardGradient>
                  <GradientIcon
                    IconComponent={<BsSun size={30} color={"#44E986"} />}
                    bgColor={"#44E986"}
                  />
                </CardGradient>
                <LevelDetails>
                  <Level>Beginner</Level>
                  <LevelDescription>
                    Join the data driven companies.
                  </LevelDescription>
                </LevelDetails>
                <SubDetail>
                  <p>12h 30m</p>
                  <p>Data</p>
                </SubDetail>
              </Card>
              <Card>
                <CardGradient>
                  <GradientIcon
                    IconComponent={<BsSun size={30} color={"#44E986"} />}
                    bgColor={"#44E986"}
                  />
                </CardGradient>
                <LevelDetails>
                  <Level>Professional</Level>
                  <LevelDescription>
                    Take up lead role in your establishment
                  </LevelDescription>
                </LevelDetails>
                <SubDetail>
                  <p>12h 30m</p>
                  <p>Data</p>
                </SubDetail>
              </Card>
              <Card>
                <CardGradient>
                  <GradientIcon
                    IconComponent={<BsSun size={30} color={"#44E986"} />}
                    bgColor={"#44E986"}
                  />
                </CardGradient>
                <LevelDetails>
                  <Level>Expert</Level>
                  <LevelDescription>
                    Expand your abilities as a well-rounded engineer!
                  </LevelDescription>
                </LevelDetails>
                <SubDetail>
                  <p>12h 30m</p>
                  <p>Data</p>
                </SubDetail>
              </Card>
            </CardList>
          </AcademicLevelsContainer>
        </DetailContainer>
      </CourseDetailSection>
      <CourseListings>
        <h4>Hello world</h4>
      </CourseListings>
    </Container>
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
  padding: 2rem var(--container-padding);
  display: flex;
  gap: 3rem;
  color: white;
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

const CardGradient = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 2.3rem;
  background: linear-gradient(rgba(13, 17, 22), rgba(13, 17, 22, 0.8));
  border-radius: 9px;
  gap: 4rem;
  flex: 1;
  filter: blur(0.25px) drop-shadow(0px 0px 57px rgba(62, 63, 73, 0.25));
`;
const LevelDetails = styled.div``;

const Level = styled.p`
  font-weight: 500;
  font-size: 36px;
  margin-block: 1rem;
`;
const LevelDescription = styled.p`
  font-weight: 400;
  margin-block: 5px;
`;

const SubDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CourseListings = styled.section`
  padding: 2rem var(--container-padding);
`;
