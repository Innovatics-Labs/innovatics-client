import styled from "styled-components";
import { BsCodeSlash } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

import LineGradient from "./LineGradient";
import GradientIcon from "./GradientIcon";
import { TextWithColor } from "./Practicality";

const CareerTalksSection = () => {
  return (
    <Container>
      <GradientStyleContainer>
        <LineGradient colorFrom={"#FC69AF00"} colorTo={"#FC69AF"} />
        <GradientIcon
          IconComponent={<BsCodeSlash size={30} color="#FC69AF" />}
          bgColor={"#FC69AF"}
        />
        <LineGradient colorFrom={"#FC69AF"} colorTo={"#FC69AF00"} />
      </GradientStyleContainer>
      <TextContent>
        <Title>Career Talks</Title>
        <SubTitle>
          <TextWithColor color="#44e986">
            Join our weekend career talks with intensive mentorship.{" "}
          </TextWithColor>
          Join the race to catch the ace.
        </SubTitle>
        <Start>
          <span>Learn more</span>
          <MdKeyboardArrowRight color={"#8691A6"} size={24} />
        </Start>
      </TextContent>
    </Container>
  );
};

export default CareerTalksSection;

const Container = styled.section`
  background: #0d1117;
  display: flex;
  gap: 2.5rem;
  padding: 2rem var(--container-padding);
`;

const GradientStyleContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-rows: 50px auto 1fr;
`;

const TextContent = styled.div`
  font-weight: 600;
  color: white;
  margin-block: 40px;
`;

const Title = styled.h4`
  font-weight: 600;
  font-size: 27px;
  line-height: 35px;
`;

const SubTitle = styled.p`
  font-size: 40px;
  margin-block: 1.5rem;
  width: 80%;
`;

const Start = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: white;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
