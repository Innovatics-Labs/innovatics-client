import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsSun } from "react-icons/bs";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import PathCard from "../PathCard";
import { QUERIES, WEIGHTS } from "../../constants";
import { db } from "../../../firebaseConfig";
import { MaxwidthContainer } from "../GlobalStyles";
import { Animate } from "../Animations/AnimateIn";
import Data from "../../assets/svg/data.svg";
import Coding from "../../assets/svg/coding.svg";
import Cyber from "../../assets/svg/cyber-security.svg";
import Server from "../../assets/svg/server.svg";

const AcademicPathsSection = () => {
  const [paths, setPaths] = useState([]);
  const [value, loading, error] = useCollection(
    collection(db, "academic-paths"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  let colors = ["#44E986", "#FFA28B", "#FAD740", "#8B90FF"];
  let icon = [Data, Coding, Cyber, Server];

  useEffect(() => {
    if (value) {
      setPaths(value.docs);
    }
  }, [value, loading]);

  return (
    <BackgroundContainer>
      <MaxwidthContainer>
        <Container>
          <TopSection>
            <TextContent>
              <Title>Our Training</Title>
              <Tagline>Academic Paths</Tagline>
              <SubTitle>
                Each field has its own unique set of skills and techniques, and
                our training programs are designed to provide learners with the
                knowledge and practical experience necessary to excel in their
                chosen career paths.
              </SubTitle>
            </TextContent>
          </TopSection>
          <BottomSection>
            {loading && <h4>Collection: Loading...</h4>}
            {error && <h4>Collection: error fetching data...</h4>}
            {value &&
              paths.map((doc, index) => (
                <PathCard
                  key={doc.id}
                  id={doc.id}
                  icon={icon[index]}
                  topic={doc.data().name}
                  color={colors[index]}
                  number={`0${index + 1}`}
                />
              ))}
          </BottomSection>
        </Container>
      </MaxwidthContainer>
    </BackgroundContainer>
  );
};

export default AcademicPathsSection;

const BackgroundContainer = styled.section`
  background: transparent;
`;

const Container = styled.div`
  padding: 2rem var(--container-padding);
`;

const TopSection = styled.div`
  margin-top: 1rem;
`;

const TextContent = styled.div`
  color: black;
  text-align: center;
  display: grid;
  place-items: center;
  margin-inline: auto;
  color: white;
`;

const Title = styled.h4`
  font-size: var(--font-size-2md);
  margin: 0;
  line-height: 35px;
  font-weight: ${WEIGHTS.semiBold};
  color: #66c19a;
`;

const Tagline = styled.p`
  font-weight: ${WEIGHTS.medium};
  font-size: 46px;
  margin-block: 10px;
`;

const SubTitle = styled.p`
  font-size: var(--font-size-md);
  max-width: 70%;
  margin-inline: auto;
  margin-block: 10px;
  @media ${QUERIES.phoneAndSmaller} {
    max-width: revert;
  }
`;

const BottomSection = styled.div`
  margin-top: 2rem;
  display: flex;
  @media ${QUERIES.tabletAndSmaller} {
    display: grid;
    /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
    /* gap: 2rem; */
  }
`;
