import React from "react";
import styled from "styled-components";
import { BsSun } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

import LineGradient from "./LineGradient";
import GradientIcon from "./GradientIcon";
import { TextWithColor } from "./Practicality";
import arrow from "../assets/images/arrow.png";

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
        <Card>
          <GradientContainer>
            <GradientIcon
              IconComponent={<BsSun size={30} color="#44E986" />}
              bgColor={"#44E986"}
            />
            <Number color="#44E986">01</Number>
          </GradientContainer>
          <Topic>Data Science</Topic>
          <Arrow>
            <Image src={arrow} alt={""} />
          </Arrow>
        </Card>
        <Card>
          <GradientContainer>
            <GradientIcon
              IconComponent={<BsSun size={30} color="#FFA28B" />}
              bgColor={"#FFA28B"}
            />
            <Number color="#FFA28B">02</Number>
          </GradientContainer>
          <Topic>Software Engineering </Topic>
          <Arrow>
            <Image src={arrow} alt={""} />
          </Arrow>
        </Card>
        <Card>
          <GradientContainer>
            <GradientIcon
              IconComponent={<BsSun size={30} color="#DD7DF7" />}
              bgColor={"#DD7DF7"}
            />
            <Number color="#DD7DF7">03</Number>
          </GradientContainer>
          <Topic>Cyber Security</Topic>
          <Arrow>
            <Image src={arrow} alt={""} />
          </Arrow>
        </Card>
        <Card>
          <GradientContainer>
            <GradientIcon
              IconComponent={<BsSun size={30} color="#8B90FF" />}
              bgColor={"#8B90FF"}
            />
            <Number color="#8B90FF">04</Number>
          </GradientContainer>
          <Topic>Cloud Engineering</Topic>
          <Arrow>
            <Image src={arrow} alt={""} />
          </Arrow>
        </Card>
      </BottomSection>
    </Container>
  );
};

export default LearningsSections;

const Container = styled.section`
  background: #fafcff;
  padding: 2rem var(--container-padding);
`;

const TopSection = styled.section`
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

const Card = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 2.5rem;
  background: linear-gradient(rgba(13, 17, 22), rgba(13, 17, 22, 0.8));
  border-radius: 9px;
  gap: 4rem;
  flex: 1;
  filter: blur(0.48px) drop-shadow(0px 0px 57px rgba(62, 63, 73, 0.25));
`;

const GradientContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
`;

const Topic = styled.p`
  font-weight: 500;
  font-size: 28px;
  color: white;
  margin: auto 0;
  width: 50%;
  line-height: 40px;
`;

const Number = styled.p`
  font-weight: 400;
  font-size: 24px;
  color: ${({ color }) => color};
  margin-block: 0px;
`;

const Arrow = styled.div`
  svg {
    font-weight: 200;
    stroke-width: 10px;
    width: 100%;
  }
`;
