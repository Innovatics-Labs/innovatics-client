import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsSun } from "react-icons/bs";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import LineGradient from "../LineGradient";
import GradientIcon from "../GradientIcon";
import { TextWithColor } from "./Practicality";
import PathCard from "../PathCard";
import { QUERIES } from "../../constants";
import { db } from "../../../firebaseConfig";
import { MaxwidthContainer } from "../GlobalStyles";
import { Animate } from "../Animations/AnimateIn";
import Data from "../../assets/svg/data.svg";
import Coding from "../../assets/svg/coding.svg";
import Cyber from "../../assets/svg/cyber-security.svg";
import Server from "../../assets/svg/server.svg";

const LearningsSections = () => {
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
      // console.log({ paths }, { value });
    }
  }, [value, loading]);

  return (
    <BackgroundContainer>
      <MaxwidthContainer>
        <Container>
          <TopSection>
            <GradientStyleContainer>
              <GradientIcon
                IconComponent={<BsSun size={30} color="#FFA28B" />}
                bgColor={"#FFA28B"}
              />
              <LineGradient
                colorFrom={"#FFA28B, #EC674C"}
                colorTo={"#EA604500"}
              />
            </GradientStyleContainer>
            <TextContent>
              <Animate.FadeIn>
                <Title>Learnings</Title>
              </Animate.FadeIn>
              <Animate.SlideInLeft>
                <SubTitle>
                  <TextWithColor color="#FFA28B">
                    Put to practice what you learn immediately.{" "}
                  </TextWithColor>
                  <span>We provide you suitable learning environment.</span>
                </SubTitle>
              </Animate.SlideInLeft>
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
                  index={index}
                  topic={doc.data().name}
                  number={`0${index + 1}`}
                  // icon={icon[index]}
                  // color={colors[index]}
                />
              ))}
          </BottomSection>
        </Container>
      </MaxwidthContainer>
    </BackgroundContainer>
  );
};

export default LearningsSections;

const BackgroundContainer = styled.section`
  background: #fafcff;
`;

const Container = styled.div`
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
