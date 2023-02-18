import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsSun } from "react-icons/bs";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import LineGradient from "../LineGradient";
import GradientIcon from "../GradientIcon";
import { TextWithColor } from "./Practicality";
import TopicCard from "../TopicCard";
import { QUERIES } from "../../constants";
import { db } from "../../../firebaseConfig";

const LearningsSections = () => {
  const [value, loading, error] = useCollection(
    collection(db, "academic-paths"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  const [paths, setPaths] = useState([]);
  let colors = ["#44E986", "#FFA28B", "#DD7DF7", "#8B90FF"];

  useEffect(() => {
    if (value) {
      setPaths(value.docs);
      // console.log({ paths }, { value });
    }
  }, [value, loading]);

  return (
    <Container>
      <TopSection>
        <GradientStyleContainer>
          <GradientIcon
            IconComponent={<BsSun size={30} color="#FFA28B" />}
            bgColor={"#FFA28B"}
          />
          <LineGradient colorFrom={"#FFA28B, #EC674C"} colorTo={"#EA604500"} />
        </GradientStyleContainer>
        <TextContent>
          <Title>Learnings</Title>
          <SubTitle>
            <TextWithColor color="#FFA28B">
              Put to practice what you learn immediately.{" "}
            </TextWithColor>
            <span>We provide you suitable learning environment.</span>
          </SubTitle>
        </TextContent>
      </TopSection>
      <BottomSection>
        {loading && <h4>Collection: Loading...</h4>}
        {error && <h4>Collection: error fetching data...</h4>}
        {value &&
          paths.map((doc, index) => (
            <TopicCard
              key={doc.id}
              id={doc.id}
              topic={doc.data().name}
              color={colors[index]}
              number={`0${index + 1}`}
            />
          ))}
      </BottomSection>
    </Container>
  );
};

export default LearningsSections;

const Container = styled.section`
  /* max-width: 100vw; */
  background: #fafcff;
  padding: 2rem var(--container-padding);
`;

const TopSection = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 1rem;
`;

const GradientStyleContainer = styled.div`
  /* margin-bottom: 1rem; */
  display: grid;
  gap: 1.5rem;
  grid-template-rows: auto 1fr;
`;

const TextContent = styled.div`
  font-weight: 600;
  color: #0d1117;
`;

const Title = styled.h4`
  font-size: var(--font-size-2xl);
  margin: 0;
  line-height: 35px;
`;

const SubTitle = styled.p`
  font-size: var(--font-size-3xl);
  margin-block: 1.5rem;
  max-width: 80%;
  @media ${QUERIES.phoneAndSmaller} {
    max-width: revert;
  }
`;

const BottomSection = styled.div`
  margin-top: 2rem;
  display: flex;
  @media ${QUERIES.tabletAndSmaller} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
`;
