import Link from "next/link";
import React from "react";
import { BsSun } from "react-icons/bs";
import styled from "styled-components";
import GradientIcon from "./GradientIcon";

const LevelsCard = ({ title, description, category, duration, level }) => {
  return (
    <Card as={Link} href={{ pathname: "/course-work", query: { level } }}>
      <CardGradient>
        <GradientIcon
          IconComponent={<BsSun size={30} color={"#44E986"} />}
          bgColor={"#44E986"}
        />
      </CardGradient>
      <LevelDetails>
        <Level>{title}</Level>
        <LevelDescription>{description}</LevelDescription>
      </LevelDetails>
      <SubDetail>
        <p>{duration}</p>
        <p>{category}</p>
      </SubDetail>
    </Card>
  );
};

export default LevelsCard;

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
  filter: drop-shadow(0px 0px 57px rgba(62, 63, 73, 0.25));

  :hover {
    box-shadow: 0px 0px 60px rgba(255, 255, 255, 0.1);
  }
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
