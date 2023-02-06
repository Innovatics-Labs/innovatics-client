import React from "react";
import styled from "styled-components";
import { BsSun } from "react-icons/bs";

import LineGradient from "../LineGradient";
import GradientIcon from "../GradientIcon";
import { TextWithColor } from "./Practicality";
import TopicCard from "../TopicCard";

const LearningsSections = () => {
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
        <TopicCard topic={"Data Science"} color="#44E986" number={"01"} />
        <TopicCard
          topic={"Software Engineering"}
          color="#FFA28B"
          number={"02"}
        />
        <TopicCard topic={"Cyber Security"} color="#DD7DF7" number={"03"} />
        <TopicCard topic={"Cloud Engineering"} color="#8B90FF" number={"04"} />
      </BottomSection>
    </Container>
  );
};

export default LearningsSections;

const Container = styled.section`
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
  font-size: 25px;
  margin: 0;
`;

const SubTitle = styled.p`
  font-size: 40px;
  margin-block: 1.5rem;
  width: 70%;
`;

const BottomSection = styled.div`
  margin-top: 2rem;
  display: flex;

  /* :not(:first-child) {
    margin-left: -50px;
  } */
`;
